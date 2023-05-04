---
tags: ["latex"]
title: "Basic"
date: 2022-11-22T09:30:50Z
draft: false
---

## LaTexコマンド集

|概要|コマンド|詳細|パッケージ|
| --- | --- | --- | --- |
|文字サイズの変更|\scalebox{倍率}{文字}|特定の文字やtexファイルを＜倍率＞倍にして出力する。<br>{倍率}の部分を{幅}[高さ]のようにかき分けてもOK!|graphics|
|行間の調整|\begin{spacing}{倍率} <br> 文章 <br> \end{spacing}|指定した倍率に行間を変更する|setspace|
|部分的に2段組みにする|\begin{multicols}{2} <br> 2段組にしたい文章 <br> \end{multicols}|`2`のところをかえれば多段組にできるかも(?)|multicol|


<br>


## 特殊文字
|表示|コマンド|概要|
| --- | --- | --- |
|Å|{\AA}|数式環境以外で単位`Å`を表示する。ただし数式中では`\mathrm{\mathring{A}}`とするか`\mathrm{\AA}`とする。|



<br>

## 文字サイズ

|コマンド|標準を10ptとしたときの大きさ|
| --- | --- |
|\tiny|5pt|
|\scriptsize|7pt|
|\footnotesize|8pt|
|\small|9pt|
|\normalsize|10pt|
|\large|12pt|
|\Large|14.4pt|
|\LARGE|17.28pt|
|\huge|20.74pt|
|\Huge|24.88pt|



<br>

## 数式環境
|環境名|環境|パッケージ|特徴|
| --- | --- | --- | --- |
|equation|\begin{equation}<br>\end{equation}| --- |1行の数式を記入でき、数式番号がつく|
|equation|\begin{equation*}・・・| amsmath |equation環境とほとんど同じだが、数式番号がつかない|
|eqnarray|\begin{eqnarray}<br>  数式 $=$ 数式\\<br>数式 $=$ 数式<br>\end{eqnarray}| --- |複数行の数式を、$で挟んでいる`＝`をそろえて表示する。<br>※数式番号は各行に表示されるが、`\nonumber`を使用してはならない。|
|eqnarray|\begin{eqnarray*}・・・| --- |数式番号がつかない|
|split|\begin{split}<br>  数式 $= 数式<br>  数式 $= 数式<br>\end{split}|amsmath|eqnarray環境の代替。equation環境の中で使用し、`&=`をそろえて表示し、数式番号は複数行の中間に一つだけ表示する|
|align|\begin{align}<br>  数式 $= 数式\\・・・|amsmath|{`&=` で数式の`=`をそろえて表示し、数式番号を各行ごとに表示する。|
|align|\begin{align*}・・・|amsmath|数式番号がつかない|
|aligned|\begin{aligned}・・・|amsmath|`equation`環境内で使用でき、一部分のみ`align`環境にすることができる|
|gather|\begin{gather}・・・|amsmath|複数の数式を中央揃えで表示し、各行ごとに数式番号をつける|

<br>

## 数式表示
|コマンド|パッケージ|概要|
| --- | --- | --- |
|\bm{a}|bm|括弧内の文字をベクトル（太字）で表示する|
|`\label{数式のラベル}`| --- | 数式にラベル付けできる。数式の数式番号やページ数を呼び出すときに使用する。<br>`数式環境下で使用する`|
|`\ref{ラベル名}`| --- |数式につけた式番号をラベル名を指定することで表示できる|
|`\frac{分子}{分母}`| --- |分数表示|
|`\int_{上限}^{下限}`| --- |積分表示|
|`\left<括弧なら何でも>・・・\right<括弧>`| --- |括弧のサイズを括弧内の数式に自動で合わせる|
|`\hspace{50pt}`| --- |`{ }`内に指定した幅の文だけスペースを生成。使用できる単位は「pt」「pc」「mm」「cm」|
|`\;` または `\:` または `\,`|空白を生成。左に行くにつれて大きくなる|
|`\begin{pmatrix}` <br> `a11 & a12 & a13\\\\` <br> `a21 & a22 & a23 \\\\` <br> `\end{pmatrix}`|amsmath|行列|
|`\begin{vmatrix}` <br> `a11 & a12 & a13\\\\` <br> `a21 & a22 & a23 \\\\` <br> `\end{vmatrix}`|amsmath|行列式|
|`\cdot`| --- |どっと(中央)|
|`\cdots`| --- |3点ドット(中央)|
|`\vdots`| --- |縦の3点ドット|
|`\ddots`| --- |斜めの3点ドット|


<br>

## ギリシャ文字
**ギリシャ文字を使用する場合にも数式環境下で記述する必要がある。
|出力|入力|出力|入力|出力|入力|
| --- | --- | --- | --- | --- | --- |
|α|\alpha|β|\beta|γ|\gamma|
|δ|\delta|ϵ|\epsilon|ε|\varepsilon
|ζ|\zeta|η|\eta|θ|\theta|
|ϑ|\vartheta|ι|\iota|κ|\kappa|
|λ|\lambda|μ|\mu|ν|\nu|
|ξ|\xi|o|o|π|\pi|
|ϖ|\varpi|ρ|\rho|ϱ|\varrho|
|σ|\sigma|ς|\varsigma|τ|\tau|
|υ|\upsilon|ϕ|\phi|φ|\varphi|
|χ|\chi|ψ|\psi|ω|\omega|
|Γ|\Gamma|Λ|\Lambda|Σ|\Sigma|
|Ψ|\Psi|Δ|\Delta|Ξ|\Xi|
|Υ|\Upsilon|Ω|\Omega|Θ|\Theta|
|Π|\Pi|Φ|\Phi|∑|\sum|
|∏|\prod| --- | --- | --- | --- |


<br>

## 数学記号
|出力|コマンド|
| --- | --- |
|Å|\mathrm{\mathring{A}}|
|₁P₂|`{}_1P_2`|
|≤|`\leq`|
|≥|`\geq`|
|∈|`\in`|
|±|`\pm`|
|≃|`\simeq`|
|・|`\cdot`|
|∂|`\partial`|
|分数|frac{分子}{分母}|
|∇|`\nabla`|
|Δ（デルタ，ラプラシアン）|`\Delta`|
|≡|`\equiv`|
|期待値の記号<>|\langle, \rangle|
|Ⅱ|$\rm{I\hspace{-.01em}I}$|
|A(数式中で斜体表示を解除)|\rm{A}|
|A(行列を表すA，太字かつ斜体無し)|\mathbf{A}|

<br>

## Vebatim環境内での数式表示

Verbatim環境内で数式を使う場合は**プリアンブルに`\usepackage{fancyvrb}`**と記述し、以下のようにドキュメント内に書く。

```latex
\begin{spacing}{0.8}
    \begin{Verbatim}[commandchars=\\\{\}, codes={\catcode`$=3\catcode`_=8\catcode`^=7}]
 $\sum_[i=1]^[n]M_i$
\end{Verbatim}
```

```latex
\begin{Verbatim}[%frame=single, numbers=left, commandchars=\\\{\},codes={\catcode`$=3\catcode`_=8\catcode`^=7}]
$f(x) = \frac{1}{x}
\end{Verbatim}
```
※どちらがいいのかわからない…


<br><br>






## アルゴリズムの擬似コード
- https://li-feel.hatenablog.com/entry/2017/12/19/160618
- https://qiita.com/jirojiro/items/0ae13aac9112a804f8d5
- https://qiita.com/harmegiddo/items/04ae672402bb8c1d01a6
- 
## ソースコード
- [LaTeXにソースコードを美しく貼る方法](https://qiita.com/ta_b0_/items/2619d5927492edbb5b03)


## 図の挿入(input)
- https://hydrocoast.jp/index.php?LaTeX/%E5%9B%B3
- https://www.okomeda.net/wp/484/
- http://www.yamamo10.jp/yamamoto/comp/latex/make_doc/insert_fig/index.php
- https://atatat.hatenablog.com/entry/cloud_latex18_subcaption
- https://medemanabu.net/latex/scalebox-resizebox/
- https://qiita.com/poemn/items/9142339749c87ebdb536
- 

## 表紙テンプレ
- [卒論をTeXフォーマットなしから書くためのtips](https://yosshi71jp.hatenadiary.org/entry/20101210/1292005429)
- [Quiita「LaTeXの卒論の表紙テンプレート ><」](https://qiita.com/ganyariya/items/6fe38f371dc8fa3a49a4)


## 参考文献
- [LaTeX - コマンド一覧](http://www1.kiy.jp/~yoka/LaTeX/latex.html)
- [複数行の数式](https://uec.medit.link/latex/eqnalign.html)
- [【LaTeX】括弧類のかき方一覧と大きさの変更方法まとめ](https://mathlandscape.com/latex-bracket/)
- [TeXで好きな位置に図を配置する](https://qiita.com/poemn/items/9142339749c87ebdb536)
- [LaTeXの特殊文字・特別記号](http://www.ic.daito.ac.jp/~mizutani/tex/special_characters.html)
- [空白-水平方向のスペース - quad, hspace](https://medemanabu.net/latex/horizontal-space/)
- [TeX 行間の調整](https://saphir-jaune.hatenablog.com/entry/2016/07/27/232010)
- [【LaTex】 fancyvrb --- 洗練されたverbatim拡張機能の提供](https://konoyonohana.blog.fc2.com/blog-entry-165.html)
- [TeXの記憶(89) — Verbatim環境の中で数式を表示する](https://oversleptabit.com/archives/750)
- 