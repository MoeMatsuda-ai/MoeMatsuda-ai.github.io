---
tags: ["latex"]
title: "References"
date: 2022-11-22T09:31:51Z
draft: false 
---

## LaTeXでの参考文献の書き方

```latex
\begin{thebibliography}{99}
\bibitem{参照ラベル名1} 文献情報
\bibitem{参照ラベル2名} 文献情報
......
......
\end{thebibliography}
```

このように記述してタイプセットすると、文献番号が`\bibitem`の登録順に[1], [2], [3], ... のように表される。

**本文中で文献情報を参照するには次のように記述する**

```latex
....といったことが指摘されている\cite{ラベル名a}\cite{ラベル名b}
```

これをタイプセットすると`....といったことが指摘されている[6][9]`のように表示される。

文中で文献番号だけでなくページ数などをオプション表示させるには次のように記述する。

```latex
....といったことが指摘されている
\cite{ラベル名a}\cite[第3章127ページ]{ラベル名b}。
```

<br>




## 引用を上付き右カッコで表示する

LaTeXの引用表示を[xxx]ではなくxxx)にする方法。プリアンブルに次のように書く。

```latex
\makeatletter
\def\@cite#1{\textsuperscript{#1)}}
\makeatother
```

他にいろいろ変えたければ、\textsuperscript{#1)}の部分を編集する (#1が冒頭に出てきたxxxにあたる)。
参考文献一覧の先頭も同様にに変えたい場合、プリアンブルの\makeatletter～\makeatother中に次のように書く。

```latex
\def\@biblabel#1{#1)}
```

#### 〇`\makeatleter`, `\maketother`とは？

また，再定義するマクロの名前や再定義の内容に @ が現れる場合は，次のように再定義全体を `\makeatletter` と `\makeatother` で挟んでおく必要がある．

```latex
\usepackage{foo}
\makeatletter
\renewcommand\bar{... 20pt ...}
\makeatother
```

<br>


## 参考
- [参考文献情報の書き方](http://www.ic.daito.ac.jp/~mizutani/tex/drill/drillbook3.html)
- [創作メモ 【参考文献の表示の変更】](http://nabew.blog113.fc2.com/blog-entry-19.html)
- [LaTeX Wiki パッケージ](https://texwiki.texjp.org/?%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8)



## bibtex の使い方

1. `.bib`拡張子のファイルを用意し、内容を記述

    ```latex
    % 論文の場合
    @article{hoshino2019,
        author  = {Hikaru Hoshino and Yoshihiko Susuki and T. John Koo and Takashi Hikihara},
        journal = {Journal of Dynamic Systems, Measurement, and Control},
        title   = {Structural Analysis and Control of a Model of Two-Site Electricity and Heat Supply},
        year    = {2019},
        volume  = {141},
        number  = {10},
        pages   = {101004},
        doi     = {10.1115/1.4043703},
    }
    % 本の場合
    @book{biggar2014,
        author    = {Darryl R.Biggar and Mohammad Reza Hesamzadeh},
        title     = {The Economics of Electricity Market},
        publisher = {John Wiley & Sons},
        isbn      = {9781118775752},
        year      = {2014},
    }
    ```

1. 本文中の参考文献を出力したい一に以下の記述を追加
    ```latex
    \bibliographystyle{junsrt} %参考文献出力スタイル
    \bibliography{hoge} %hoge.bibから拡張子を外した名前
    ```

    なお、参考文献出力スタイル(bibliographystyle)には主に以下のスタイルがあります。

    |欧文用|	和文用	|特徴|
    | --- | --- | --- |
    |plain|	jplain	|参考文献をアルファベット順で出力する|
    |unsrt|	junsrt	|参考文献を引用された順で出力する|

# 参考
- [thebibliography 環境](http://ideas.paunix.org/latex/latex_6_bib.htm)
- [BiBTeXとは Qiita](https://qiita.com/SUZUKI_Masaya/items/14f9727845e020f8e7e9)
- [星野光　参考文献の書き方](https://www.eng.u-hyogo.ac.jp/faculty/hoshino/pc/latex/bibtex/)
- [LaTeX 参考文献処理(BibTeX)](http://www.yamamo10.jp/yamamoto/comp/latex/bibtex/bibtex.html)
- [BiBTeXでのURLの書き方](https://gist.github.com/momota10s/97887692ebe01f24d234)
- [学術論文の情報をそれらしい形で出力する方法 Quiita](https://qiita.com/SUZUKI_Masaya/items/a552ad66705f4f9a5710)