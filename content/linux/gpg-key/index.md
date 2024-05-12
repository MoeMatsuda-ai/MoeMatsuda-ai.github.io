---
title: "Gpg Key"
date: 2024-05-12T06:42:14Z
draft: true
---

## GPG keyの追加方法

### Trouble

次のような警告が出たのでGPG keyを追加

>W: 署名照合中にエラーが発生しました。リポジトリは更新されず、過去のインデックスファイルが使われます。GPG エラー: 
>https://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04  InRelease: 公開鍵を利用できないため、
>以下の署名は検証できませんでした: NO_PUBKEY 1488EB46E192A257
>W: https://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04/InRelease の取得に失敗しました  公
>開鍵を利用できないため、以下の署名は検証できませんでした: NO_PUBKEY 1488EB46E192A257

1. `https://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04`にアクセス
2. `/usr/share/keyrings`に鍵を追加

    ```bash
    $ curl -sS https://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04/Release.key | sudo gpg --dearmor -o /usr/share/keyrings/xUbuntu_22.04-archive-keyring.gpg
    ```
3. `/etc/apt/sources.list.d/`以下にある該当ファイルを書き換え
    1. `$ sudo nano /etc/apt/sources.list.d/home\:manuelschneid3r.list`
    2. `deb`とURLの間に`[signed-by=/usr/share/keyrings/xUbuntu_22.04-archive-keyrings.gpg]`を追加
        
        ```txt
        deb [signed-by=/usr/share/keyrings/xUbuntu_22.04-archive-keyring.gpg] https://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04/ /
        ```
