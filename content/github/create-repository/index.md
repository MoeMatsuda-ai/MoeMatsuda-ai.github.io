---
tags: ["github"]
title: "How to Create Repository"
date: 2022-11-22T09:09:19Z
draft: false 
---



## ローカルリポジトリの作成

1. リモートリポジトリに登録したいディレクトリにして次のコマンドでバージョン管理のための初期化を行う。
    ```
    $ git init
    ```
    これで，ローカルリポジトリ(.git/)が作られ，`git init`を実行したディレクトリが作業ディレクトリになる。

    以下のように`git init`でローカルリポジトリ用のディレクトリを新規作成することもできる。
    ```
    $ git init <target directory>
    $ cd <target directory>
    ```

1. .gitignoreの作成
    gitコマンドでは無視したいファイルが有る時(LaTeXの一時ファイル等)は，.gitignoreという名前のファイルを作っておく。 以下は例。latex関連の一時ファイルを無視するように設定している。

    ```
    $ cat .gitignore
    *.aux
    *.idx
    *.log
    *.toc
    *.ist
    *.bbl
    *.blg
    *.dvi
    *.ilg
    *.ind
    *.lot
    *.out
    *.synctex.gz
    *~
    ```

## ローカルリポジトリに登録するファイルやディレクトリの指定

下記のいずれかのコマンドで登録するファイルやディレクトリを指定
```
$ git add .            # 現在のディレクトリにある全てのファイル/ディレクトリを登録
$ git add figures/     # ディレクトリ figures/ 以下のファイルを登録
$ git add *.tex        # すべての .tex ファイルを登録
$ git add <ファイル名> #特定のファイルのみを登録
```

## ローカルリポジトリにファイル登録

`git add`で指定したファイルやディレクトリを，ローカルリポジトリに登録する。
```
$ git commit -m "first commit"
```
-mは1行コメントをつけるオプション。 更新したファイルをローカルリポジトリに反映するときにも，同様にgit addとgit commitを実行する。ここまではローカルリポジトリの管理。


## gitサーバ上で新規リモートリポジトリを登録

1. GitHubにログイン
1. 左上の`Repositories`の隣りにある`New`のタブをクリック
1. repository作成ページで以下のことを記入
    - Repository name : リポジトリの名前
    - Description : リポジトリの内容
    - `Public / Private`の選択
1. `Create repository`をクリック
1. リポジトリ作成後のすべきこと（コマンドライン）が記載されたページが表示されるので、URLの覧をチェックしておく。以下はその一例。
    ```
    echo "# re" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/<ユーザーネーム>/<repository名>.git
    git push -u origin main
    ```

1. **コマンドラインの上に`HTTPS`か`SSH`かを選択する覧もあるので、`SSH`にする場合はここで選択しておく**

- **参照**
    - [ITmedia 「Git/GitHubにおける**リモートリポジトリの作成**、確認、変更、更新時の5コマンド」](https://atmarkit.itmedia.co.jp/ait/articles/1701/24/news141.html)
    - [SAMURAIENGINEER 「【Git初心者向け】リポジトリの作成からpushまで」](https://www.sejuku.net/blog/70775)

## トークンの作成
2021年8月13日以降、GitHubのリポジトリにアクセスするには、ユーザ名とパスワードではなくアクセストークンが必要になった。

1. GitHubにログイン
1. 右上のアイコンをクリックし、一覧から`Settings`をクリック
1. 左下の`Developer settings`をクリック
1. 左の覧から`Personal avvess tokens`をクリック
1. 右上の`Generate new token`をクリックしてアクセストークンを作成
1. 以下のことを記入
    Note : トークン名
    Expiration : トークンが使用できる期限。この期限が切れると新しくトークンを作成する必要がある。（上限あり）
    Select scopes : **少なくともrepoの覧はチェックを入れること。**
    `トークンは一度ページを移動すると二度と見れなくなってしまうため、作成後はコピーして保存しておくこと！！！`

- **参照**
    - [アクセストークンの作成方法](https://note.kiriukun.com/entry/20210904-github-password-authentication-was-removed)
    - [Qiita「アクセストークンとSSH接続について」](https://qiita.com/shunsa10/items/e43564cf48f84b95455b)



## Gitサーバへの登録

### ローカルリポジトリとgitサーバ上のリモートリポジトリの紐付け

ローカルリポジトリ(要はgit管理したいプログラム群のあるディレクトリ)をgitサーバ上のリモートリポジトリと紐付ける。リモートリポジトリを作成した際に表示されたすべきこと（コマンドライン）を順次実行していく。
以下はその一例。

```
git branch -M main
git remote add origin https://github.com/<ユーザーネーム>/<repository名>.git
git push -u origin main
```
ただしURLの覧には`https://`と`github.com/...`の間に`<トークン>@`を加えて実行する。
```
$ git remote add origin https://<トークン>@github.com/<ユーザーネーム>/<repository名>.git
```
ユーザーネームとパスワードを求められたらユーザーネームには自分の登録名、**パスワードにはトークンを打ち込む**


`git remote`は，サーバ上のファイル置き場(リモートリポジトリ)を登録する命令。 この例では，URL(https://github.com/<ユーザーネーム>/<repository名>.git)を，originという名前(識別子)で登録している。 識別子 origin は他の名前にしても良いが，慣習的にこの名称が使われている。 someone/somerepoの部分は，GitHub上に作ったリポジトリの名前に従って設定する。

ただし，非公開リポジトリ(private repository)に登録する場合は，以下のようにGitHubの認証情報を加える。
```
$ git remote add origin https://<username>@github.com/s<ユーザーネーム>/<repository名>.git
```
セキュリティを高めるためには，ssh keyをGitHubに登録しておいて，ssh通信にするほうが無難。この場合のgit rmoteは以下のなる。
```
$ git remote add origin git@github.com:someone/somerepo.git
```


### 登録情報の確認

```
$ git remote -v
```

登録情報を間違えていたら，以下のコマンドで一旦削除して再登録する

```
$ git remote rm origin
```