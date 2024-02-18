---
tags: ["linux"]
title: "Remote Desktop"
date: 2024-02-18T17:00:46Z
draft: false
---

## WindowsからLinux (Ubuntu22.04) へのリモート接続の方法
### サーバ側（Ubuntu）の設定
1. 「設定」の「共有」を開く
2. 「リモートデスクトップ」をクリック
3. 「リモートデスクトップ」と「リモートコントロール」をONにする
- Ubuntu 20.04 LTSまではxrdpサーバをインストールする必要があったが，Ubuntu22.04 LTSからはすでにインストールされてるので不要になったみたい

### クライアント側（Windows）の設定
1. リモートデスクトップ接続を開く
2. 「コンピュータ名」にIPアドレス，「ユーザー名」にアクセスするユーザー名を記入し，接続をクリック

## Problems
### xrdpがのactive化でwarningが出る
1. `$ sudo systemctl status xrdp`と打つと，`[WARNING] Cannot read private key file /etc/xrdp/key-pem: Permission denied`と表示される
2. xrdpユーザをssl-certグループに追加
    ```bash 
    $ sudo gpasswd -a xrdp ssl-cert
    ```
3. xrdpのリスタート
    ```bash
    $ sudo systemctl restart xrdp
    ```

### 画面が真っ暗のまま動かない
- デスクトップとリモートで同時ログインはできないみたい　→　デスクトップをログアウトすれば良い！
- リモート接続を終了する場合はUbuntuでlog outすれば自動で接続が切れる

### Windowsからアクセスするとキーボードの種類によらずJIS配列になる
- xrdpの設定を変更
    ```bash
    $ cd /etc/xrpd/
    $ sudo mv km-00000411.ini ~/km-00000411.ini-org
    $ sudo cp km-00000409.ini km-00000411.ini
    $ sudo systemctl restart xrdp
    ```
- [こちらを参照](https://tamapoco.com/archives/6260#toc10)


## 参考
- [Ubuntu 22.04 LTSの新機能，リモートデスクトップのRDPサポートを使用する](https://gihyo.jp/admin/serial/01/ubuntu-recipe/0713)
- [【Ubuntu Tips】UbuntuにWindows10からリモートデスクトップで接続する方法 ~ xrdpパッケージ ~](https://tech.nkhn37.net/ubuntu-windows10-xrdp/)
- [Ubuntu 20.04 LTSをWindowsからリモート接続します（xrdpについて）](https://minokamo.tokyo/2020/08/16/2687/)
