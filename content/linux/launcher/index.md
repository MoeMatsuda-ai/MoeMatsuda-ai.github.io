---
title: "Launcher for Linux"
date: 2024-02-18T03:44:00Z
draft: false
---
## 1. [Ulauncher](https://docs.ulauncher.io/en/stable/index.html)
Linux系のlauncherの一つ。
設定済みのキーボード・ショートカットとかtabキーとかが使用できるため，こちらをインストール。

### install
1. [こちら](https://ulauncher.io/#Download)からUbuntu用のインストーラーをダウンロード
2. 次のコマンドでインストール
    ```bash
    sudo apt install ./ulauncher_x.y.z_all.deb
    ```

### settings
1. アプリを起動
2. 歯車マークをクリックし，設定画面を開く
3. Hotkeyを`Alt+Space`に変更
4. Color Themeを変更
5. 設定ファイルは`~/.config/ulauncher/settings.json`に存在
6. 以下のExtensionsを追加
    - X11 Windows Swicher (`$ ws `)
    - Browser Bookmarks (`$ bb`)

## 2. [Albert](https://albertlauncher.github.io/)
Linux系で使用されているluncherの一つ。
Linuxで設定しているキーボード・ショートカットが使用できなかったためアンインストール済み。

### install
[ホームページ](https://software.opensuse.org/download.html?project=home:manuelschneid3r&package=albert)からインストール方法を確認できる。
今回はxUbuntuの22.04バージョンでインストール。

```bash
echo 'deb http://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04/ /' | sudo tee /etc/apt/sources.list.d/home:manuelschneid3r.list
curl -fsSL https://download.opensuse.org/repositories/home:manuelschneid3r/xUbuntu_22.04/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_manuelschneid3r.gpg > /dev/null
sudo apt update
sudo apt install albert
```

### uninstall
```bash
sudo apt-get remove albert
```

- アンストールだけする場合は`sudo apt-get remove albert`
- albertのパッケージと他の依存パッケージをアンインストールする場合は`sudo apt-get autoremove albert`
- configファイルとalbertのデータファイルを削除したい場合は`sudo apt-get purge albert`
