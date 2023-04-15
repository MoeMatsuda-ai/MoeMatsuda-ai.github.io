---
title: "How to install gnuplot"
date: 2022-11-24T00:26:02Z
draft: false
---

## gnuplotのインストール方法
```bash
$ sudo apt update
$ sudo apt install gnuplot
$ sudo apt install gnuplot-x11
```

**gnuplot-x11をインストールすると、出力端末が"X11"になる。**

出力端末は以下の3つのパッケージが使用可能。ただしこれらは
排他的なパッケージのため、どれか1つのみしかインストールできない。
（他のをインストールしようとすると、すでにインストールされていた
パッケージはアンインストールされる。）

- gnuplot-qt
- gnuplot-x11
- gnuplot-nox

## 参考
- [Ubuntuのリポジトリからインストールできるgnuplotのパッケージについて](https://yutarine.blogspot.com/2019/12/ubuntu-gnuplot-packages.html)
- [LinuxにGnuplotをインストール](https://qiita.com/python_walker/items/0307cda7299608c6bb21)
