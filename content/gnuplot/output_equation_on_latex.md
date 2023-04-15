---
title: "How to insert formulas like latex"
date: 2022-11-24T01:07:41Z
draft: false 
---

## gnuplotでlatex形式の数式を挿入

### 準備
gnuplot では直接pdfをつくらず`LaTeX（TikZ）`を経由することで美しいグラフのpdfをつくることができる。

このグラフ作成には`tikz`環境を使用し、これにより作成されたtexファイルを読み込みタイプセットすることが可能である。

ただしこの環境と関連するファイルは`TeXLive`には含まれておらず、Linux等の環境ではGnuplotのインストール時にpackageマネージャーがスタイルファイル
`gnuplot-lua-tikz`とそれに関連するファイルをLaTeXが探索するファイルにインストールしてくれるが、Windowsでは自分で環境を整える必要がある。

1. ターミナル（コマンドプロンプト）で`c/texlive/texmx-local/tex/latex`に移動し、`gnuplot`ファイルを作成する。
2. `gnuplot`を起動して`texlive/texmx-local/tex/latex/gnuplot`に移動し、以下のコマンドを実行する。
  ```set terminal tikz createstyle```
3. コマンドプロンプト上で`gnuplot`ファイルに移動し、`mktexlsr`を実行して`ls-IR`を更新する。

### TeXソースコードの生成
次のように入力し、出力をtilzにしてプロットする。
```gnuolot
set terminal tikz
set output "filename.tex"
plot sin(x)
```
### TeXで画像を出力

次のようにTeXファイルに記入することで`filename.tex`の画像を出力することができる。
```tex
\documentclass[dvipdfmx]{jarticle}
\usepackage{tikz}
\usepackage{gnuplot-lua-tikz}
\begin{document}
  \input{filename.tex}
\end{document}
```



### 【参考文献】
- [gnuplotからTikZを介してpdfを生成](https://geniusium.hatenablog.com/entry/2018/09/16/114600)
- [Gnuplot で LaTex 用の綺麗なグラフを作成する](https://mano.xyz/post/2017-03-22-gnuplot-latex-graph/)
- [gnuplotでTeXフォントを用いる](http://irotorishink.web.fc2.com/pc/gnuplot_memo/tikz/tikz.pdf)
