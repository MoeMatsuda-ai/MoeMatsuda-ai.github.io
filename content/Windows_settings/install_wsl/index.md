---
tags: ["windows", "wsl"]
title: "Installing WSL"
date: 2023-04-09T08:37:46Z
draft: false
---

1. 機能の有効化
    1. `コントロールパネル＞プログラム＞Windowsの機能の有効化または無効化`をクリック
    1. 以下の２つのチェックを入れる
        - Linux用Windowsサブシステム
        - 仮想マシンプラットフォーム

1. wslのインストール
    ```
    wsl --install
    ```

1. Linuxディストリビューションをインストール
    - オンラインストアからダウンロードできるLinuxディストリビューションの一覧を表示
        ```
        $ wsl --list --online wsl --l -o
        ```
    - 任意のLinuxディストリビューションをインストール
        ```
        $ wsl --install -d <Distribution Name>
        ```

1. Linuxディストリビューションを起動し、User NameとPasswordを設定
    - error: 0x800701bcが出てすぐにwslが落ちてしまう場合はwsl1からwsl2へアップグレード
        1. [Linuxカーネル更新プログラムパッケージ](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)をダウンロード
        1. 更新ぷろぐらぺっケージをダブルクリックして実行
        1. 以下のコマンドでwsl2を既定のバージョンとして設定
            ```
            $ wsl --set-default-version 2
            ```

## 参考
- [WSL を使用して Windows に Linux をインストールする](https://learn.microsoft.com/en-us/windows/wsl/install#step-4---download-the-linux-kernel-update-package)
- [古いバージョンの WSL の手動インストール手順](https://learn.microsoft.com/en-us/windows/wsl/install-manual)
- [Windows10 HomeでもDockerの環境構築ができる ！！　WSL1 からWSL2に変更する際に出るエラー　error : 0x800701bc の解決方！　（2020年9月）](https://qiita.com/iwasaki-hub/items/e034b3e0e6ed49a8851a)
