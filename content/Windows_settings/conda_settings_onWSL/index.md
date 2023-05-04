---
tags: ["python", "conda", "windows", "wsl", "x11"]
title: "Anaconda settings on WSL"
date: 2023-04-13T14:25:36Z
draft: false
---

## 出力用DISPLAYの設定
### x11のインストール
1. wslにX11をインストール
    ```bash
    $ sudo apt install x11
    ```

### VcXsrvのインストールと設定
1. [SourceForge.net](https://ja.wikipedia.org/wiki/SourceForge.net)からインストーラーをダウンロード
1. インストーラーを実行し，VcXsrvをインストール（推奨の設定でOK！）
1. VcXsrvを起動
    1. Display settings: Multiple windowsを選択し，次へをクリック
    1. Client startup: Start no clientを選択肢，次へをクリック
    1. Extra settings: ClipboardとPrimary Selection, Native openglにチェックが入っていることを確認し，Disable access controlにチェックを入れてから次へをクリック
    1. Finish configuration: Save configurationをクリックしてデスクトップ等にconfigを保存してから完了をクリック
1. `Windows+R`でダイアログボックスを開き，`shell:startup`と入力してエクスプローラーのスタートアップアプリを開く
1. デスクトップ等に保存していたVcXsrvのconfigファイルをスタートアップアプリに移動させる

### Display環境変数のエクスポート
以下の1文を`.bashrc`に追加
```bash	
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0.0
```

#### 参照
- [WSL上にXサーバをインストールしてGUIを実現する（VcXsrv編）, メディアID](https://atmarkit.itmedia.co.jp/ait/articles/1812/06/news040.html)
- [Windows10のWSL上でX11アプリケーションを実行してみた，DevelopersIO](https://dev.classmethod.jp/articles/wsl-x-window/)
- [errorについて](https://rin-ka.net/windows-x-server/)
