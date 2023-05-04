---
tags: ["github", "branch"]
title: "Branch"
date: 2022-11-22T09:09:52Z
draft: false
---


## ブランチとは？
ブランチとは平行世界のようなものである。
ブランチを活用することでmasterブランチをそのまま据え置いた状態で、別のブランチで新機能を試しながら作ることができる。


## ブランチの正体は？
[github公式ドキュメント](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E6%A9%9F%E8%83%BD-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%A8%E3%81%AF)によると、
>ブランチとは（中略）コミットを指す軽量なポインタに過ぎません
と説明されている。

リポジトリの正体は`.git`という隠しフォルダのことであり、この中にある`refs/heads/master`ファイルこそがブランチの正体である。
このファイルの中身をcatしてみると
```
dd95ddf066d452949bb54304bbf43ab3dadfee25
```
のように英数字の羅列が保存してある。これは<u>**コミットID**</u>または<u>**コミットハッシュ値**</u>と呼ばれている。またコミットによって生成されたデータのことを<u>コミットオブジェクト</u>といい、一つのコミットオブジェクトに対して４０文字のIDを割り当てるのがコミットIDである。

つまりブランチとは<u>**ただ単に特定のコミットIDを指しているだけ**</u>である。

またコミットオブジェクトにはそれぞれ
- tree
- parent
- author
- committer

の情報が保存されており、`parent`が一つ前のコミットIDを示している。

## 例
作成した`sample.txt`に何かしらの変更を加え、
```
$ git add sample.text
$ git commit -m "2回目のコミット"
$ git log
```
とすると、次のような結果が得られる。

![コミットしたときのログ](jpg/github/commit_log.jpg)

このとき以下のように実行すると、コミットオブジェクトを確認することができる

```
$ git cat-file -p 0e9556
```
>tree e290b48b356d721ae54d1edb03993802cc98bad8
>
>parent 02f11b759bfeb461e117c5da18bb2dcbe06d862a
>
>author llminatolll<XXX@mail.com>l1562052826 +0900
>
>commit errllminatolll<XXX@mail.com>l1562052826 +0900

この`parent`の部分が前のコミットのコミットIDを表しており、一番はじめのコミットでは`paernt`は保存されていない

#### ひとことメモ　** コミットIDは何を元に作られているの？**

>コミットID（コミットハッシュ値）は、実はこのコミットオブジェクトのバイト数と中身を使い、計算されて作られています。よって、コミットした人の名前やコミットした時間、指し示すparent、treeが違えばコミットハッシュ値も違うものになります。
>
>その証拠に、同じ内容をコミットしていても、あなたの練習用リポジトリとわかばちゃんのコミットIDは違うはずです。コミットハッシュ値についてもっと深く知りたい方は、こちらの記事が詳しいのでおすすめです。
>
> - [Gitのコミットハッシュ値は何を元にどうやって生成されているのか](https://www.r-staffing.co.jp/engineer/entry/20190719_1)

<br>




## ブランチの操作

- 今存在するブランチの確認
     ```
     $ git branch
     ```
     ※**アスタリスクのついているブランチが現在のブランチ**

- ブランチの作成
     ```
     $ git branch <branch name>
     ```

- ローカルブランチの作成をリモートにプッシュ
     ```bash 
     $ git push origin <branch name>
     ```

- ブランチの移動
     ```
     $ git checkout <branch name>
     ```
     ※指定したブランチへ移動する
     
     - `-b`オプションを指定するとブランチの作成とチェックアウトを同時に行える
     - `-f`オプションを指定するとブランチを強制的に切り替えることができる（<u>コミットしていない作業データは消えるため注意</u>)

- リモートブランチの反映
     ```bash 
     $ git fetch origin
     ```

- ブランチの削除
     ```bash 
     $ git branch -d <branch name> # ローカルブランチの削除(強制削除する場合は`-D`オプションに変更)
     $ git push origin --delete <branch name> # リモートブランチの削除(`$ git push origin :<branch name>` でも可)
     ```

- remote には存在するブランチが local には存在しない場合
    ```
    $ git brantch -a 
    ```
    でブランチを表示
    ```
    $ git checkout -b release origin/release
    ```
    で解決できる!
<br><br>




## 参考
- [第2話 ブランチとは？ポインタってどういう意味？作成・確認・切り替え方法【連載】マンガでわかるGit ～コマンド編～](https://www.r-staffing.co.jp/engineer/entry/20190719_1)
- [Git Branch コマンド](https://www.atlassian.com/ja/git/tutorials/using-branches#:~:text=git%20branch%20%E3%81%AF%E3%80%81%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%AE,%E3%81%AB%E6%88%BB%E3%81%99%E6%A9%9F%E8%83%BD%E3%82%82%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82)
- [リモートブランチの更新が見えない時](https://awesome-linus.com/2018/03/11/cannot-get-remote-branch/)
