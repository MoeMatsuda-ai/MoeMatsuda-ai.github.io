---
tags: ["github"]
title: "Settings"
date: 2022-11-22T09:08:59Z
draft: false
---

## アカウントの作成
[GitHubのホームページ](https://github.com/)でアカウントを作成する
#### **pro版（GitHub Education)への変更方法**
1. [GitHub Education](https://education.github.com/)にアクセス
1. 右上の[Benefits](https://education.github.com/benefits)をクリック
1. IndividualsのGet student benefitsを選択
    ```
    申し込むための資格が書いてあります。
    学生であること。
    学校からもらったメアドがあること。
    GitHubアカウントを持っていること。
    13歳以上であること。 Screenshot from 2020-09-23 15-02-45.png
    ```
1. `Add an email address`から学校のアドレスを追加
1. `How do you plan to use GitHub?`にgithubの利用目的を記入
1. `Submit your information`を押して完了
    ※利用目的は形式的なものなので（多分）適当に書いてOK!

## 参考ページ
[Qiita , @Kobayashi2019「**GitHub Educationのメリットと申請方法**」](https://qiita.com/Kobayashi2019/items/5adb9bde57691a770419)


## gitコマンドのインストール

git コマンドをローカルマシンにインストールする。 Mac OSの場合は，Xcode コマンドラインツールをインストールしていたら，gitコマンドもインストールされている。

apt-get対応のLinuxディストリビューションなら以下でたいていOK。

```
$apt-get install git 
```

## 自分のアカウント情報のローカルマシンへの登録

```
$git config --global user.name <ユーザーネーム>
$git config --global user.email <登録したメールアドレス>
$git config --global core.editer vi   #コメント編集につかいたいエディタを設定（デフォルトはvi）
```

`--global`は，ローカルリポジトリ作成時のデフォルト設定にするためのオプション。 特定のリポジトリでのみ別の設定にしたいときには，ダウンロードしたポジトリ内に移動してから`--local`を指定して実行する。

## 必要に応じてproxy設定

外部とのネットワーク接続にproxy設定が必要な環境の場合は，Proxy設定のページを見て設定をする。ターミナルとgitのproxy設定をする。


<br><br><br>




## git pull するたびに警告が出る…
- [Git2.27での git pull 時の warning について](https://qiita.com/tearoom6/items/0237080aaf2ad46b1963)
