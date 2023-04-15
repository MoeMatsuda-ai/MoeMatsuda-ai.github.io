---
title: "よく使う設定"
date: 2022-11-25T12:17:42Z
draft: false
---

## プリアンブル
### Packages
```latex
\documentclass[dvipdfmx]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\usepackage[dvipdfmx]{color}
\usepackage{amsmath}
\usepackage{mathtools}
\usepackage{ascmac}
\usepackage{comment}
\usepackage{algorithmic}
\usepackage{algorithm}
\usepackage{here}
\usepackage{listings,jvlisting}
\usepackage{bm}
\usepackage{multicol}
\usepackage[square,sort,comma,numbers]{natbib}
\usepackage[subrefformat=simple]{subcaption}%サブキャプションを付けたいときに必要
```


#### gnuplotでlatex形式の数式を表示するための設定
```latex
% \usepackage{gnuplot-lua-tikz}
% \usepackage{tikz}
```

### algorithm (疑似コード) の表示の設定
```latex
\renewcommand{\algorithmicrequire}{\textbf{Input:}}
\renewcommand{\algorithmicensure}{\textbf{Output:}}

### 参考文献の文献番号の表示形式を変更
```
```latex
\makeatletter%再定義に＠が使用される場合に\makeatletterと\makeatotherで挟む
\def\@cite#1{\textsuperscript{#1)}}%引用文献の文献番号の表示方法を変更
\def\@biblabel#1{#1)}%参考文献の先頭も変更
\makeatother
```

### 文献番号等の色やリンクの設定
```latex
\usepackage[dvipdfmx]{hyperref}
\hypersetup{% hyperrefオプションリスト
    setpagesize=false,
    bookmarksnumbered=true,%ブックマークを作成
    bookmarksopen=true,%ブックマークを開く
    colorlinks=true,%カラーリンクを使用
    linkcolor=black, %内部参照リンクカラー
    citecolor=blue, %文献カラー
    % filecolor=, %ローカルファイル参照リンクカラー
    urlcolor=blue,
}
```

### program（c言語）の記述形式についての設定
```latex
\renewcommand{\lstlistingname}{program}
% %c言語の設定 気に入ってる方
\lstset{
    language=c,
    basicstyle={\ttfamily\small},
    tabsize=2,
    frame=trBL,
    numbers=left,
    numberstyle={\ttfamily\small},
    breaklines=true,
    captionpos=t
    %キャプションを一番下にするならcaptions=b
}
```

### jsreportでchapterの改行を削除する設定
```latex
% chapterの改行を削除
\makeatletter
\def\@makechapterhead#1{%
    \vspace*{2\Cvs}% 欧文は50pt
    {\parindent \z@ \raggedright \normalfont
    \ifnum \c@secnumdepth >\m@ne
    \huge\headfont \@chapapp\thechapter\@chappos
    %% \par\nobreak
    %% \vskip \Cvs % 欧文は20pt
    \fi
    　\interlinepenalty\@M%先頭の空白で、章とチャプター名の間に空白が挿入される
    \huge \headfont #1\par\nobreak
    \vskip 3\Cvs}
} % 欧文は40pt
\makeatother
```


## In document
### bibtexの表示
```latex
\bibliographystyle{junsrt}
\nocite{*}
\bibliography{reference}
```
