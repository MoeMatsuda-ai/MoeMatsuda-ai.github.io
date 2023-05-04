---
tags: ["github"]
title: "Repository Operations"
date: 2022-11-22T09:19:35Z
draft: false
---



## リポジトリのダウンロード

GitHubにあるリモートリポジトリをhttps接続でダウンロードする場合は以下のコマンドで。(ただし，GitHub上のリポジトリ設定で若干異なる場合もある)

```
$ git clone https://github.com/someone/somerepo.git
```

上記URLのsomeone, someprepoの部分はダウンロードしたいリポジトリによって変わる。 

#### ssh接続
```
git clone git@github.com:<repo>.git
```
cloneするときのURL以下は**ブラウザ上のgithubでcloneしたいリポジトリに移動し、`code`をクリックすることで確認できる。**


#### publicの場合
```
$ git clone https://github.com/<repo>
```

#### privateの場合
```
$ git clone https://<username>@github.com/someone/somerepo.git
```

**Wikiページをcloneする場合は`.git`の前に`.wiki`をつける。**


- **参照**
    [リポジトリをクローンする](https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository)
   

## 最新情報のダウンロード / 更新ファイルのアップロード

ダウンロードしたファイルをいじるときには，まず，Gitサーバから最新バージョンをダウンロードしてから開始。

```
$ git pull origin main
```

これはサーバ(origin)から，masterブランチ(ブランチは後述)をダウンロードしてローカルリポジトリを更新し(fetch)，作業ディレクトリに反映(merge)するという意味。

ファイルを更新したら，gitサーバ(origin)にアップロードする。

```
$ git add <更新したファイル名>
$ git commit -m “修正点を少し書く”    <=ローカルリポジトリ(手元)に登録
$ git push origin main           <=リモートリポジトリに反映
```

とりあえず，これで最低限のファイル共有/共同編集はできる。

git addは，更新したファイルのうち，リモートリポジトリに反映したいファイルを指定(stagingとよぶ。これにより対象ファイルはstaging areaに移動)する。指定方法は以下のようにいろいろある。

```
    $ git add . 新規作成ファイルと更新ファイルを全部指定
    $ git add -u 前回から更新したファイルのみ指定(新規作成ファイルは含まない)
    $ git add -A .新規作成ファイル，更新ファイル，削除ファイル全部指定
```

ただし，リモートリポジトリは，知らないヒトが勝手に’git push’で書き換えたりできるとよくないので，アクセス制限をできるようになっている。アクセス制限がかかっているリモートリポジトリの内容の修正をリクエストするにはPullRequestをする(後述)。


## gitサーバでリポジトリを削除する方法

1. 削除したいリポジトリのページに移動
1. 上の一覧から`Settings`をクリック
1. 下の方にある`Delete this repository`をクリック
1. 警告を読んで、消したいリポジトリの名前を入力
1. `I understand the consequences, delete this repository`をクリック


- **参照**
    [Qiita「githubでリポジトリを削除する方法」](https://qiita.com/PlanetMeron/items/4d164eff7bff2243cf06)


## ローカルリポジトリの削除(git initの取り消し)

.gitファイルを削除して、git initしたディレクトリに対して、それを取り消す

```
$rm -rf .git
```

- **参照**
    [Qiita 「git init取り消し」](https://qiita.com/majihuwa_z/items/ec0d2e1ac21d68769693)


## コミット履歴の確認

```
     $ git log
```
`--graph`というオプションをつけるとコミットログをアスキーアートでカラフルに表示シてくれる。たくさんブランチがあるリポジトリなどでは見やすくなる
```
     $ git log --graph
```



## コミットのキャンセル

#### ステージングのキャンセル

ステージング(git add)から変更ファイルを取り消す場合は下記コマンドを実行します。
```
$ git rm --cached <ファイル名>
```
ステージング(git add)から削除するだけでなく、ファイル自体も削除する場合には下記コマンドを実行します。
```
$ git rm -f <ファイル名>
```

#### コミットの取り消し

直前に行ったコミットを取り消すには下記コマンドを実行します。

作業ディレクトリの内容はコミット時のままで、「コミットした」ということだけが取り消されます。

「--soft」オプションは省略できます。
```
$ git reset [--soft] HEAD^
```
作業ディレクトリに加えた変更点もコミット前に戻す場合は以下のコマンドです。
```
$ git reset --hard HEAD^
```
作業ディレクトリをローカルリポジトリの最新状態にするには下記コマンドを実行します。

indexもクリーンされます。
```
$ git reset --hard HEAD
```

#### コミット後の修正

前回のコミットを破棄して、現在のIndex内容で新しくコミットします。

「reset」と「commit」を実行することと同様の処理となります。

コミットメッセージの修正なども行えます。
```
$ git commit --amend
```

- **参照**
    [Camp Netwoek「Gitローカルリポジトリ操作」](http://capm-network.com/?tag=Git%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E6%93%8D%E4%BD%9C)


## プッシュの取り消し

基本、プッシュした情報をローカルリポジトリに戻すことはできない。
そこで、コミットを打ち消すコミットを生成する（git revertコマンド）。プッシュ済みのコミットを消す方法もあるが、よくなさそう。。git revertでは打ち消したコミットの記録が残る。


#### git revert

- 指定したコミットを、add前に戻してくれるコマンド。

- ターミナル(間違って、masterにpushしちゃった時など)
    ```
    % git log                    # コミットログの確認
    % git revert 間違えたコミットID   # 指定したコミットを、add前に戻す
    # ターミナルが編集できなくなるので、`:q`で脱出
    ```
    - GitHub Desktopを確認すると、git revertで生成したコミットが生成されてるハズ。これをpushすれば、リモートリポジトリで打ち消されているハズ。この時、ローカルからも消えるので、注意。

- 参)ターミナルで実施する場合
    ```
    % git pull                            # 念のため、ローカルのmasterを最新にする
    % git checkout pushすべきだったブランチ    # ブランチを切り替える
    % git merge master
    % git add .                           # 変更箇所をadd
    % git commit -m "コミットメッセージ"
    % git push origin pushしたかったブランチ
    ```

    ※ 念のため、ローカルのmasterをpull(最新)にしてから、作業してたブランチも最新状態をmerge(反映)し、pushすべきだったブランチにpushするイメージ。




## その他のコマンド

#### よく使用するコマンド
|コマンド|概要|
| --- | --- |
|git init|対象のディレクトリをバージョン管理できる入れ物に格納してくれるイメージ|
|git add ●●|●●をインデックスに追加。※ git add . とすると「全て」を対象にできる|
|git commit -m 'メッセージ'|コミット|
|git status|現在のファイルの状態(staging等)一覧を表示する|
|git reset <ファイル名>|間違えてgit addしたファイルの取り消し(stagingの取り消し)|
|git log|コミットログの履歴確認（コミットID、コミットメッセージ、日時）|
|git remote add origin リモートリポジトリのURL(https：//github.com/GitHubのユーザー名/リモートリポジトリ名.git)|ローカルリポジトリにリモートリポジトリの情報を付与し、紐づける|
|git push origin ブランチ名|ローカルの変更点を、リモートに反映。ブランチ名 masterなら、マスターブランチにプッシュ。|
|git pull origin master|リモートリポジトリ（origin）のマスターブランチをローカルリポジトリに反映。|
|git clone https：//github.com/ユーザー名/リモートリポジト名.git|リモートリポジトからローカルリポジトリにダウンロード|
|
|git remote -v|ローカルにクローンしたリポジトリのリモートURL確認方法|

#### コミットメッセージ例

|コミットメーセージ|意味|
| --- | --- |
|Create ●● class|クラス作成|
|Add relation with ●●|リレーションの追加|
|Add presence validation of ●●|バリデーションの追加|
|Add #parse_body for parse body's markdown| - | 	


## 参照

### 上記にも記入済み

- [Qiita「githubでリポジトリを削除する方法」](https://qiita.com/PlanetMeron/items/4d164eff7bff2243cf06)
- [Qiita 「git init取り消し」](https://qiita.com/majihuwa_z/items/ec0d2e1ac21d68769693)
- [Camp Netwoek「Gitローカルリポジトリ操作」](http://capm-network.com/?tag=Git%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E6%93%8D%E4%BD%9C)

### その他

- [Qiita「GitとGitHubの基礎」](https://qiita.com/manbolila/items/01c2f6a5cf2ffc473f92)
- [Qiita「ローカルgitリポジトリでリモートのリポジトリURLを確認する方法」](https://qiita.com/zhao-xy/items/a35add58575ef7d9d4dc)
- [Qiita「【GitHub】アカウント名を変更するときの注意点](https://qiita.com/aiandrox/items/d1c19ffabad7b8cc187a)