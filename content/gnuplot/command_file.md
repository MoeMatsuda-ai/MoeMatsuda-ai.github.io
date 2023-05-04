---
tags: ["gnuplot"]
title: "Command file"
date: 2022-11-24T01:07:10Z
draft: false
---

## gnuplotのコマンドをファイルで保存する方法

- 拡張子は`.plt`
- コメントは`#`を使う
- コマンドを順に入力していけばOK!（コマンドの頭に特殊な文字を入れる必要はない）

## コマンドファイルの拡張子を`.plt`以外にした場合

下記のコマンドを打ち込む
```gnuplot
> load "コマンドファイル名.拡張子"
```

## 参考文献
- [コマンド・ファイルを実行する](http://nalab.mind.meiji.ac.jp/~mk/labo/howto/intro-gnuplot/node10.html)