---
tags: ["docker"]
title: "How to install Docker"
date: 2022-11-22T08:43:54Z
draft: false
---


## 1. Dockerのインストールの仕方

1. 古いバージョンをアンインストール

    ```
    $ sudo apt-get remove docker docker-engine docker.io containerd runc

    ```
    > It’s OK if `apt-get` reports that none of these packages are installed.

### 1.1 Install methods

Dockerのリポジトリをセットアップしてそこからインストール方法が推奨されている。

異なる方法もあるが、ここではリポジトリからインストールを行う。

1. リポジトリの設定
    ```
    $ sudo -E apt-get update
    $ sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    ```

1. Dockerの公式GPGキーを追加

    ```
    $ sudo mkdir -p /etc/apt/keyrings
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    ```


1. 次のコマンドを使用して、リポジトリを設定
    ```
    $ echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```

### 1.2 DockerEngineのインストール
1. `apt`パッケージインデックスを更新し、Docker Engine、containerd、Docker Composeの最新バージョンをインストールするか、次の手順に進んで特定のバージョンをインストールする

```
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

1. Docker Engineの特定のバージョンをインストールするには、リポジトリに使用可能なバージョンをリストしてから、以下を選択してインストールを行う
    1. リポジトリで利用可能なバージョンを一覧表示
        ```
        $ apt-cache madison docker-ce
        ```

    1. たとえば、2番目の列のバージョン文字列を(`5:20.10.16~3-0~ubuntu-jammy`)使用して特定のバージョンをインストールするならば、次のようなコマンドを実行する
        ```
        $ sudo apt-get install docker-ce=5:20.10.13~3-0~ubuntu-hirsute docker-ce-cli=5:20.10.13~3-0~ubuntu-hirsute containerd.io docker-compose-plugin
        ```

### 1.3 proxyの設定

1. Docker Engine の proxy 設定
    `docker pull` などでイメージを落としてくる場合はDocker Engine にプロキシ設定をする必要がある。

    `/lib/systemd/system/docker.service`で環境変数を指定。`[Service]`の欄の下に`Environment`を追記すればOK！
    ```
    [Service]
    Environment=HTTP_PROXY=http://{HOST}:{port}
    Environment=HTTPS_PROXY=http://{HOST}:{port}
    ```

1. Docker コンテナ起動時の proxy 設定
    `~/.docker/config.json` を書いておくとコンテナ内に HTTP_PROXY などを自動で設定してくれる

    ※Docker Compose のときにはつかえない？
    ```
    {
    "proxies": {
        "default": {
        "httpProxy": "http://{HOST}:{port}",
        "httpsProxy": "http://{HOST}:{port}"
        }
    }
    }
    ```

1. proxy設定の反映とDockerを再起動
    ```
    $ sudo systemctl daemon-reload
    $ sudo systemctl restart docker
    ```


#### やってみたけどあまり意味のなかった設定
<details><summary>どこかで使えるかもしれないためメモ</summary>

- upstartの人
    ```
    $ sudo cat /etc/default/docker
    （省略)
    export no_proxy='export no_proxy=127.0.0.1,localhost,xxx.xxx.xxx.xxx'
    export NO_PROXY="${no_proxy}"
    export http_proxy='http://your.proxy.url:port/'
    export HTTP_PROXY="${http_proxy}"
    export https_proxy='https://your.proxy.url:port/'
    export HTTPS_PROXY="${https_proxy}"
    ```

- Systemdの人
    ```
    $ sudo cat /etc/systemd/docker.service
    （省略）
    [Service]
    Environment="HTTP_PROXY=http://your.proxy.url:port/" "HTTPS_PROXY=https://your.proxy.url:port/"
    ```
    ※　/lib/systemd/system/docker.serviceと併用しようとするとDockerが起動しなくなるので注意！2つの設定が競合するのかな？

- `docker.service.d`にファイルの追加
    ```
    $ cd /etc/systemd/system/
    $ mkdir docker.service.d
    $ sudo nano http-proxy.conf
        -> 内容の書き込み
    ```
    ```
    $ cat /etc/systemd/system/docker.service.d/http-proxy.conf
    [Service]
    Environment="HTTP_PROXY=http://proxy.example.com:8080/"
    Environment="HTTPS_PROXY=http://proxy.example.com:8080/"
    ```
</details>



### 1.4 確認

1. `hello-world`イメージを走らせ、Dockerが正しくインストールされていることを確認
   ```
   $ sudo docker run hello-world
   ```


## 2. Dockerのアンインストール方法
1. Docker Engine、CLI、Containerd、およびDockerComposeパッケージをアンインストール
    ```
    $ sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-compose-plugin
    ```

1. ホスト上のイメージ、コンテナー、ボリューム、またはカスタマイズされた構成ファイルは自動的に削除ない。すべてのイメージ、コンテナー、およびボリュームを削除するには下記を実行
    ```
    $ sudo rm -rf /var/lib/docker
    $ sudo rm -rf /var/lib/containerd
    ```

※編集した構成ファイルは手動で削除する必要がある

<br><br>


## 3. 問題とその解決策
### 3.1 `$ sudo docker run hello-world`を実行するとタイムアウトしてしまう

#### インターネットに接続できない
    
-> proxyを設定（上記参照）

#### proxy 設定してもDockerイメージが取得できない(conectできない)…

おそらく公開鍵の問題！

`apt update`などを実行すると、「公開鍵を利用できないため、以下の署名は検証できませんでした」というエラーが出る。

つまり<u>**GPGエラー**</u>が問題だった！

ということでOpenGPG鍵をインポート

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-k
```

DockerのインストールでもGPG鍵キーのインストールはしているが、おそらく以下のどちらかが問題だった…

- `Install method`の 2. でもインストールしてるけど`etc`のところを`usr`にしなければならなかった
- `1.2 DockerEngineのインストール`はどちらも実行してしまい、DockerイメージをダウングレードしてしまったためGPGエラーが起こった（？）


#### 補足（やってみたけど意味のなかったこと）

GPGエラーについて

>W: 署名照合中にエラーが発生しました。
>リポジトリは更新されず、過去のインデックスファイルが使われます。
>GPG エラー: http://packages.cloud.google.com/apt cloud-sdk-xenial InRelease: 公開鍵を利用できないため、
>以下の署名は検証できませんでした: NO_PUBKEY 6A030B21BA07F4FB

と出力されたため、`apt-key`コマンドでパブリックキーを追加した（パブリックキーの有効期限切れだと思った…）
```
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6A030B21BA07F4FB
```
-> `apt-key`ではproxyにうまく接続できない問題が発生…

-> `--keyserver-option`を使用してproxyサーバを指定
```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --keyserver-option http-proxy=http://x:y@proxy:port --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9
Executing: gpg --ignore-time-conflict --no-options --no-default-keyring --secret-keyring /tmp/tmp.oqJcUg9wwq --trustdb-name /etc/apt/trustdb.gpg --keyring /etc/apt/trusted.gpg --primary-keyring /etc/apt/trusted.gpg --keyserver hkp://keyserver.ubuntu.com:80 --keyserver-option http-proxy=http://x:y@proxy:port --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9
gpg: 鍵A88D21E9をhkpからサーバーkeyserver.ubuntu.comに要求
gpg: 鍵A88D21E9: 公開鍵“Docker Release Tool (releasedocker) <docker@dotcloud.com>”を読み込みました
gpg: 処理数の合計: 1
gpg:               読込み: 1  (RSA: 1)
```

### 3.2 インターネットに（ブラウザで）接続できない

proxyの設定とGPG鍵のインストールで`$ sudo docker run hello-world`は実行できるようになったが、未だChromeやFireFoxが使えない（インターネットに接続できない）…

1. docker ではUbuntuの以下4つのバージョンでしか正常に動作することが保証されてなかったため、Ubuntu21.04ではうまく行かなかった

   - Ubuntu Jammy 22.04 (LTS)
   - Ubuntu Impish 21.10
   - Ubuntu Focal 20.04 (LTS)
   - Ubuntu Bionic 18.04 (LTS)


2. 22.04 に upgrade したら使えるように！　→ Ubuntu22.04 のproxy設定を手動にしたら使えるようになった！




## 参考
### Dockerのインストール
- [Docker Engine インストール（Ubuntu 向け）](https://matsuand.github.io/docs.docker.jp.onthefly/engine/install/ubuntu/)
- [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Installation Guide(NVIDIA)](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker)

### proxy設定
- [プロキシ環境下の Docker](https://qiita.com/hoto17296/items/d8860d49b2f3d7c17613#docker-%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%AE%E3%83%93%E3%83%AB%E3%83%89%E6%99%82)
- [Proxy環境でdockerを外に繋ぐ方法](https://qiita.com/Riliumph/items/921e76444ea6ba145294)
- [プロキシサーバを使うように Docker を設定](https://docs.docker.jp/network/proxy.html)
- [プロキシーサーバー利用の設定](https://matsuand.github.io/docs.docker.jp.onthefly/network/proxy/)
- [Ubuntu 18.04 LTS / 20.04 LTS に Docker をインストールする](https://www.softek.co.jp/SID/support/sidfmvm/guide/install-docker-ubuntu1804.html)

### 問題
#### GPGエラーについて
- [GPGエラーの解決策（「apt-key が非推奨になったので」](https://zenn.dev/spiegel/articles/20220508-apt-key-is-deprecated)
- [【Ubuntu】 apt update時のGPGエラー対処](https://hibiki-press.tech/dev-env/apt-update-gpg/1976)
- [ubuntuで認証プロキシ配下からapt-keyを使うとき](https://qiita.com/nmatsui/items/816051fe6445db116e9a)
