---
tags: ["docker", "volume"]
title: "Copy and Mount from Docker container or to Docker container"
date: 2022-11-22T08:44:19Z
draft: false
---


# docker での copy と mount
## コピー
ホストとコンテナ間でファイルをコピーするときは次のようにする
```bash
$ docker cp <option> <コピー元path> <コピー先path>
```
コンテナのパスは`<container name>:<path>`のように書く

<br>

## マウント
※マウントはコンテナをrunするときにオプションとして指定する

### バインドマウント
既存（ホスト側）のファイルやフォルダをマウントする方法のこと。

普通のファイル同様に編集やバックアップが可能となるため、頻繁にアクセスするファイルなどはこちらに置く。

```bash
$ docker run (省略) -v <マウント元のパス>:<マウントポイント> (省略)
```

### ボリュームマウント
ボリュームを作成し、マウントする方法のこと。

Dockerホストから変更を加えたくないようなファイルなどはこちらに置く。

- ボリュームの作成
    ```bash
    $ docker volume create <volume name>
    ```
- ボリュームの削除
    ```bash
    $ docker volume rm <volume name>
    ```
- マウント方法

    ```bash
    $ docker run (省略) -v <ボリューム名>:<マウントポイント> (省略)
    ```
    ※ただしボリュームが存在しないときには新規作成される。

- docker volume コマンドにおけるサブコマンド
    | サブコマンド|意味|
    | --- | --- |
    |create|ボリュームの作成|
    |inspect|ボリュームの詳細情報を確認|
    |ls | ボリューム一覧を確認|
    |prune|コンテナからマウントされていないボリュームをすべて削除|
    | rm| ボリュームの削除|

### ボリュームマウントとバインドマウントを明示的に指定した設定方法
```bash
$ --mount type=<bind or volume>,src=<マウント元>,dst=<マウント先>
```
※この方法ではバインドマウントとボリュームマウントが明示的に指定されているためわかりやすく、
ボリュームが存在しない場合には新規作成されずエラーが出力される。そのため`-v`オプションより
`--mount`オプションを使用することが推奨されている。

- src は source でもOK
- dst は destination でもOK
- type=tmpfs としてメモリーを特定のマウント先に指定することもできる。

<br>

## appendix
### ボリュームのバックアップ方法
```bash 
$ docker run --rm -v <volume name>:/src -v <バックアップ先のフォルダ名>:/dest busybox tar czf /dest/backup.tar.gz -C /src .
```
1. 軽量なLinux イメージの busybox を起動
2. バックアップ対象をコンテナの /src にボリュームマウント
3. Docker ホストの任意のディレクトリを /dest にバインドマウント
4. /src 以下の全ファイルが /dest/backup.tar.gz にバックアップされる
5. コンテナが破棄される

※ただしこの方法ではバックアップしたいボリュームのボリューム名がわかっていなければならない。
バックアップ対象をボリューム名ではなくコンテナのディレクトリ名で指定したい場合は`--volume-from`オプションを使用する！

```bash
$ docker run --rm --volume-from <container name> -v <バックアップ先>:/dest busybox tar czf /dest/bachup.tar.gz -C /var/lib/mysql .
```

### バックアップのリストア
バックアップを取っておいたデータを任意のvolumeに復元する方法
```bash
$ docker run --rm -v <volume名>:/dest -v <バックアップデータの置かれているディレクトリ>:/src busybox tar xzf /src/backup.ta.gz -C /dest
```

### データボリュームコンテナ