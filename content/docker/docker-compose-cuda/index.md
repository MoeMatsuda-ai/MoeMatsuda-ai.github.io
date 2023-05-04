---
tags: ["docker", "docker compose"]
title: "Docker Compose"
date: 2022-11-22T08:41:46Z
draft: false 
---

## dockerでcudaコンテナの作成
### cuda の　GPG key 登録
1. 古いキーの削除
    ```bash
    $ sudo apt-key del 7fa2af80
    ```
2. ヘルパーパッケージを利用したキーの登録
    nvidia が提供している、nvidia リポジトリ用の新しい署名キーのインストールを自動化する新しいヘルパーパッケージを利用して鍵を登録
    ```bash
    $ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.0-1_all.deb
    $ sudo dpkg -i cuda-keyring_1.0-1_all.deb
    ```
    ※`ubuntu2204`と`x86_64`は該当のものに書き換える


3. remove の仕方
    ※インストール時にターミナルに表示された文
    ```
    A deprecated public CUDA GPG key appear to be installed.
    To remove the key, run this command:
    sudo apt-key del 7fa2af80
    ```


### 結局必要だったのかわからなかったけどとりあえずやったこと
#### Setting up NVIDIA Container Toolkit
1. パッケージリポジトリと GPG key のセットアップ
    ```bash
    $ distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
        && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
        && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
                sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
                sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
    ```

2. `nvidia-docker2` パッケージのインストール
    ```bash 
    $ sudo apt-get update
    $ sudo apt-get install -y nvidia-docker2
    ```
3. Docker demon のリスタート
    ```bash 
    $ sudo systemctl restart docker
    ```

4. ベースとなるCUDAコンテナを実行することによって、動作するセットアップをテスト
    ```bash
    $ sudo docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi
    ```
    以下のような出力ならOK！
    ```
    +-----------------------------------------------------------------------------+
    | NVIDIA-SMI 450.51.06    Driver Version: 450.51.06    CUDA Version: 11.0     |
    |-------------------------------+----------------------+----------------------+
    | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
    |                               |                      |               MIG M. |
    |===============================+======================+======================|
    |   0  Tesla T4            On   | 00000000:00:1E.0 Off |                    0 |
    | N/A   34C    P8     9W /  70W |      0MiB / 15109MiB |      0%      Default |
    |                               |                      |                  N/A |
    +-------------------------------+----------------------+----------------------+

    +-----------------------------------------------------------------------------+
    | Processes:                                                                  |
    |  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
    |        ID   ID                                                   Usage      |
    |=============================================================================|
    |  No running processes found                                                 |
    +-----------------------------------------------------------------------------+
    ```



#### containerd
1. コンテナエンジンとしてcontainerdをシステムにインストールするために、いくつかの前提モジュールをインストール
    ```bash
    $ sudo modprobe overlay \
        && sudo modprobe br_netfilter
   ```

2. これらを確実に持続させることができる
    ```bash 
    $ cat <<EOF | sudo tee /etc/modules-load.d/containerd.conf
    overlay
    br_netfilter
    EOF
    ```

3. apt が HTTPS 上でリポジトリを使用できるようにするためのパッケージをインストール
    ```bash
    $ sudo apt update
    $ sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    ```

4. リポジトリとGPG key の追加
    ```bash 
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/  docker-archive-keyring.gpg
    $ echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
    ※1回やってたらいらないかも…
   
    
## Dockerfile and docker-compose.yml の作成
### docker compose と Dockerfileを使う場合
- [こちらを参照](https://github.com/MoeMatsuda-ai/docker-set)
#### コンテナ作成後の設定
1. 鍵の作成
1. ssh server の起動
    ```bash
    $ bash ./sterter.sh
    ```
1. vscodeのsettings.jsonとkeyboard.jsonの設定
1. rootのパスワード設定

### Dockerfile のみの場合 
- [こちらを参照](docker-compose-cuda-Dockerfile)


## trouble
#### apt が使えない…
コンテナにはproxyを通してたけどaptに通すのを忘れてた…

Dockerfile の `apt update` の前に以下の文を追加
```bash
RUN echo 'Acquire::http::proxy "http://proxy.cc.yamaguchi-u.ac.jp:8080"; \
Acquire::https::proxy "https://proxy.cc.yamaguchi-u.ac.jp:8080";' > /etc/apt/apt.conf
```

#### nvidia gpg key の更新  
```bash 
$ sudo apt-key del 7fa2af80
$ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-keyring_1.0-1_all.deb
$ sudo dpkg -i cuda-keyring_1.0-1_all.deb 
$ sudo apt update
```

#### cuda version を下げると`apt update` が通らなくなる
```
RUN apt-get update && apt-get install -y \
  bzr \
  cvs \
  git \
  mercurial \
  subversion
```
みたいな感じで `update` と `install` をつなげてみたけどだめだった…

#### nvidiaのドライバが使えなくなった…
1. nvidia driverのバージョンを落としてインストールし直す
1. nvidia container toolkitをインストール
1. proxy設定

# 参照
- [Dockerhub nvidia/cuda](https://hub.docker.com/r/nvidia/cuda)
- [NVIDA Installation Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#setting-up-nvidia-container-toolkit)
- [【Docker】GPU が使える Jupyter Notebook 環境を最速で用意する](https://qiita.com/kaijism/items/ada49192df0a6d285c3a)
- [NVIDIA Docker って今どうなってるの？ (19.11版)](https://qiita.com/ksasaki/items/b20a785e1a0f610efa08)
- [西井先生のページ](http://bcl.sci.yamaguchi-u.ac.jp/~jun/notebook/docker/)
- [NVIDIA Container Toolkit (NVIDIA Docker) は何をしてくれるか](https://qiita.com/tkusumi/items/f275f0737fb5b261a868)
- [Dockerfileのプロキシ設定](https://qiita.com/tifa2chan/items/1aa93bde3aa26dcf2060)
- [コンテナで Hello world](https://docs.docker.jp/v1.11/engine/userguide/containers/dockerizing.html)
- [docker上でjupyter-notebookを使用する方法](https://ricrowl.hatenablog.com/entry/2020/05/21/222821)
- [NVIDIA DockerイメージのGPGキー更新に関する備忘録](https://tech-blog.optim.co.jp/entry/2022/05/18/100000)
- [NVIDIAのリポジトリのキーが更新されました。（2022年4月28日）](https://www.nemotos.net/?p=5178)
- [Dockerfile のベストプラクティス](https://docs.docker.jp/engine/articles/dockerfile_best-practice.html)
- [docker-composeで作成されるものの名前を明示的に指定する方法](https://qiita.com/satodoc/items/188a387f7439e4ec394f)


## CudaをDockerで使用する際のDockerfileの作成
1. 次のようなDockerfileを作成する
    ```Dockerfile
    FROM nvidia/cuda:11.4.0-cudnn8-devel-ubuntu20.04

    USER root

    COPY ./requirements.txt /tmp
    WORKDIR /code

    # ENV DEBIAN_FRONTEND noninteractive
    ENV https_proxy "http://<proxy server>"
    ENV https_proxy "http://<proxy server>"

    RUN echo 'Acquire::http::proxy "http://<proxy server>"; \
    Acquire::https::proxy "https://<proxy server>";' > /etc/apt/apt.conf

    RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    python3-distutils

    RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3 get-pip.py

    RUN pip install -r /tmp/requirements.txt
    ```

    - proxy 設定は以下のようにする
        ```dockerfile
        ENV https_proxy "http://~~~"
        ENV http_proxy "http://~~~"
        ```
    - **cuda の　version を下げると `apt update` が通らなくなったので、`RUN apt-get update` 以下はコメントアウトして、
        pythonなどはコンテナ作成後にアタッチしてインストールした...


2. 同じ階層に `requirememts.txt` を作成し、 Dockerfile で呼び出せるようにする。
このファイルには必要なパッケージを記入しておく
    ```txt
    jupyter
    jupyterlab
    numpy
    pandas
    matplotlib
    scikit-learn
    scikit-image
    scipy
    torch
    torchvision
    tqdm
    albumentations
    tensorflow-gpu
    Pillow
    opencv-python
    ```

3. 作成したディレクトリ構造は次のようになる

    ```bash
    $ tree my-nvidia-cuda/
    my-nvidia-cuda/
    ├── Dockerfile
    ├── requirements.txt
    └── src
        └── test.ipynb
    ```

4. Docker イメージをビルド
    ```
    $ cd my-nvidia-cuda
    $ docker build . -t <image name>
    ```

5. Docker コンテナを起動
    ```bash
    $ sudo docker run -it --gpus=all -v "$PWD":/code -p 8888:8888 --name <container name> <image name> /bin/bash
    ```
    - `--gpus`はgpuのを列挙

