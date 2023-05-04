---
tags: ["github"]
title: "Confirmation of difference"
date: 2022-11-22T09:10:10Z
draft: false
---


## ファイルの変更差分の確認
```
$ git diff [変更前のコミット識別子]..[変更後のコミット識別子]
```

## ブランチ同士の差分の確認
```
$ git diff master..develop
```
masterブランチにプルリクエストを送る前にdevelopブランチに追加した内容を確認できる

## git pull する前に、リモート追跡ブランチとの差分を確認する
1. リモートリポジトリからの変更内容の取得
     ```
     $ git fetch origin
     ```
2. ローカルリポジトリのmasterブランチの最新コミット(HEAD)とリモート追跡ブランチ(origin/master)を比較
     ```
     $ git diff HEAD..origin/master
     ```
## git push する前に、リモート追跡ブランチとの差分を確認する
-    
     ```
     $ git diff origin/master..HEAD
     ```

<br><br>



# 参考
- [第9話 git diff で差分を確認！【連載】マンガでわかるGit ～コマンド編～](https://www.r-staffing.co.jp/engineer/entry/20200228_1)