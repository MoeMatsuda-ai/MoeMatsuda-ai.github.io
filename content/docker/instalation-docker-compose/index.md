---
tags: ["docker", "docker compose"]
title: "How to install Docker Compose"
date: 2022-11-22T08:42:15Z
draft: false
---



1. update
```bash
$ sudo apt update
$ sudo apt upgrade
```
1. file のダウンロード
```bash
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
1. 権限の付与
```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```
1. 動作確認
```bash
$ docker-compose --version
```

## docker compose のアップグレード

docker compose の v1 系をインストールしてしまっていたので v2 系にグレードアップ

### 1系のDocker compose の削除
`/usr/local/bin/`にある`docker-compose`ディレクトリを削除

```
$ sudo trash docker-compose 
```


### 新しいDocker compose のインストール

1. 以下のコマンドを実行して Docker Compose の現時点での最新安定版をダウンロードします。
    ```bash
    $ DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
    $ mkdir -p $DOCKER_CONFIG/cli-plugins
    $ curl -SL https://github.com/docker/compose/releases/download/v2.4.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
    ```

    このコマンドによって、アクティブユーザーの$HOMEディレクトリ配下に Compose がインストールされます。 システム上の全ユーザー向けに Docker Compose をインストールする場合は、~/.docker/cli-pluginsの部分を/usr/local/lib/docker/cli-pluginsに置き換えます。


    別のバージョンをインストールする場合は`v2.4.1` の部分を書き換える

2. 実行バイナリに対して実行権限を与えます。
    ```bash
    $ chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
    ```

3. インストール結果をテストします。
    ```bash
    $ docker compose version
    ```

### アンインストールする場合
- curlを使って Docker Compose をインストールしていた場合は、次のようにしてアンインストールします。
    ```bash
    $ rm $DOCKER_CONFIG/cli-plugins/docker-compose
    ```


## 参考
- [docker docs](https://matsuand.github.io/docs.docker.jp.onthefly/compose/install/)
