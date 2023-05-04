---
tags: ["github"]
title: "About resetting commit and rm the file"
date: 2022-11-22T09:12:34Z
draft: false
---



## コミットの取り消し
#### 直前のコミットの取り消し
```bash
$ git reset <打ち消したいコミットID>
```
**直前のコミットを打ち消す場合には**以下のコマンドを使用

```bash
$ git reset --soft HEAD^
```
- `--soft`オプション：ワークディレクトリの内容はそのままでコミットだけを取り消したい場合に使用
- `--hard`オプション：コミット取り消した上でワークディレクトリの内容も書き換えたい場合に使用
- `HEAD^`: 直前のコミットを意味
- `HEAD~{n}`n個前のコミットを意味

## コミットの打ち消し
```bash
$ git revert <コミットのハッシュ値>
```
作業ツリーを指定したコミット時点の状態にまで戻し、コミットを行う。

## コミットの上書き
直前のコミットに上書きする場合は以下のコマンドを使用
```bash
$ git commit --amend
```

## リモートリポジトリからのみ特定のファイルを削除
```bash
git rm --cached <target file>
```
ディレクトリを削除する場合は
```bash
$ git rm --cached -r <target directory>
```

# reference
- [[Git]コミットの取り消し、打ち消し、上書き]([Git]コミットの取り消し、打ち消し、上書き)
- [【Git入門】git commitを取り消したい、元に戻す方法まとめ](https://tech-blog.rakus.co.jp/entry/20210528/git)
- [Gitのリモートリポジトリから特定のファイルを削除する方法
](https://aduce.jp/dev/remove-files-in-remote-git-repo)
