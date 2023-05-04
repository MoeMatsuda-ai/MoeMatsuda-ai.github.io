---
title: "Basic docker usage"
date: 2022-11-22T08:41:22Z
draft: false
---

## systemctl の使い方
### Docker の起動と停止
```
$ systemctl start docker.service
$ systemctl stop docker.service
$ systemctl stop docker.socket
```

### 設定の反映と再起動
```
$ systemctl deamon-reload
$ systemctl restart docker.service
```

## docker コマンド

```
$ docker <上位コマンド> <副コマンド> <オプション> <対象> <引数>
```
### option
|オプションの書式|内容|
| --- | --- |
|--name <コンテナ名> | コンテナ名の指定|
|-p <ホストのポート番号>:<コンテナのポート番号>|ポート番号の指定|
|-v <ホストのディスク>:<コンテナのディレクトリ> | ボリュームのマウント|
|--net=<ネットワーク> | コンテナをネットワークに接続|
|-e <環境変数名>=<値>|環境変数の指定|
|-d | バックグラウンドで実行(detach: デタッチモードの略)|
|-i | コンテナに操作端末（キーボード）をつなぐ|
|-t|特殊キーを使用可能にする|
|-help|ヘルプの表示|
|--rm|コンテナ終了時に自動的にコンテナを削除する|
|--workdir <path>, -w <path>|コンテナ内部の作業ディレクトリを変更する|


### Docker container の作成
```bash
$ docker run <option> <container image> <引数>
```
`docker run`コマンドは、イメージをダウンロードする`docker pull`, コンテナを作成する`docker create`, コンテナを起動する`docker start`コマンドを一つにまとめたもの。

コンテナを起動せずに作成したい(docker createしたい)場合などに, `docker create`と`docker start`を分けて使用する。

### Docker 起動と停止
```bash
$ docker start <container name or container ID> #container の起動(container ID は他と重複しない先頭数文字だけでOK！)
$ docker stop <container name or container ID> #container のストップ
```

### 便利なコマンド
```bash
$ docker logs <container name> #logの確認
```

### container の破棄
```bash
$ docker container ls #起動中のコンテナの表示(`docker ps`のように省略可)
$ docker container rm <container name> #コンテナの削除(``docker rm`のように省略可)
```
起動していないコンテナをすべて削除する場合は
```bash
$ docker container prune
```

### image の破棄
```bash
$ docker image ls #ダウンロードしたイメージ一覧
$ docker image rm <repository>:<tag> #imageの削除(※tag が latest という最新版を表す値の場合は省略可, `docker rmi` のように省略可)
```

### Docker の容量利用状況の確認

```bash 
$ docker system df
```

### Build Cache の削除

```bash
$ docker builder prune
```
※キャッシュが貯まると容量を大量に食うので注意！

### detachとattach
- detach
    Ctrl+P, Ctrl+Q

- attach
    ```bash
    $ docker attach <container name or containerID>
    ```

### shellの実行
| コマンド|コンテナの状態|シェル終了時|
| --- | --- | --- |
|docker run | 停止時|コンテナ終了|
|docker exec|稼働時|稼働のまま|

- **実行中のコンテナの場合**
    ```bash
    $ docker exec -it <container name> /bin/bash
    ```
    を実行することでシェルが起動する

    ※ここで`exit`しても`docker exec` で実行したものが終了するだけのため、コンテナは終了しない

- **停止中のコンテナの場合**
    ```bash
    $ docker run --name <container name> -it <conteinaer image> /bin/bash
    ```
    を実行することでシェルが起動する

    ※ここで`exit`するとコンテナも終了する

- 補足
    - ここではあくまで`/bin/bash`というコマンドを実行しているだけのため、`/bin/passwd`(パスワードの変更画面を表示)のような他のコマンドを実行することもできる。
    - 他のシェルを使用したい場合には `/bin/bash` でなく `/bin/sh/` のように実行することもできる
    - 現在使用しているシェルは`echo $SHELL`, 使用可能なシェルは`cat /etc/shells`で確認することができる。
