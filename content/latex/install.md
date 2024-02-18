---
title: "Installation for Latex"
date: 2024-01-19T13:18:25Z
draft: true
---

1. ミラーサイトから`install-tl-unx.tar.gz`をダウンロード
	```bash
	$ wget http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
	```

	または

	```bash
	$ curl -OL http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
	```
2. `install-tl-unx.ta.gz`の展開
	```bash
	$ tar xvf install-tl-unx.tar.gz
	```
3. root権限でインストーラを実行
	```bash
	$ sudo ./install-tl -no-gui -repository http://mirror.ctan.org/systems/texlive/tlnet/
	```
4. `I`を入力してインストールを開始
5. `/usr/local/bin`ディレクリ配下にシンボリックリンクを追加
	```bash
	$ sudo /usr/local/texlive/2023/bin/x86-linux/tlmgr path add
	```
6. アップデートは次のコマンドで実行
	```bash
	$ sudo tlmr update --self --all
	```

