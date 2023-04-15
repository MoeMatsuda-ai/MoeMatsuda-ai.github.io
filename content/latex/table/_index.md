---
title: "Table"
date: 2022-11-22T09:30:59Z
draft: false
---


## 表の書き方

```latex
\begin{table}
   \label{ラベル名}
   \centering
   \caption{表題}
   \begin{tabular}{|c|c|c|}%3列で表示、列と列の間に縦罫線を引く
      \hline
      西暦 & 測定者 & 測定方法 & 測定結果 \\
      & & & $\times 10^8$ [m/sec] \\
      \hline \hline
      1638 & Galileo & 二人が離れてランプの光を見る & (音速10倍以上) \\
      1675 & Roemer & 木星の衛星の観測から & 2 \\
      \hline
   \end{tabular}
\end{table}
```

<br>


## コマンド
|コマンド|概要|
| --- | --- |
|\hline|横罫線を引く ※2回かけば2つ横罫線が引かれる|
|\multicolmn{横に結合するマスの数}{表示形式、``\|c\|``等}{文字}|横に並んだ表の要素を結合する|
|\cline{3-5}|任意の列に横罫線を引く(ここでは3列目から5列目に横罫線を引く)|

<br>

## packageを用いた表作成
|概要|コマンド|備考|package|
| --- | --- | --- | --- |
|セルの結合（縦）|\multirow{結合要素数}{*}{文字}|縦に並んだ表の要素を結合|multirow|
|幅を指定した横罫線|\toprule[<wd>]|表の最上部の横罫線を引きます．<wd>は線幅です．線幅を設定しないデフォルトを強く推奨します．|booktabs|
|横罫線(列見出しと本文、幅指定)|\midrule[<wd>]	|列見出しと本文の間に横罫線を引きます．|booktabs|
|横罫線(表の最下部、幅指定)|\bottomrule[<wd>]|表の最下部の横罫線を引きます．|booktabs|
|任意の行への縦罫線|\cmidrule[<wd>](<trim>){a-b}|a 行目から b 行目まで罫線を引きます．trim の設定(lr)を強く勧めます．|booktabs|
|行間スペース|\addlinespace[<wd>]|行間にスペースを挿入します．|booktabs|
|二重罫線(\cmidrule)|\morecmidrules	|\cmidrule を二重罫線にするときに使います．他の罫線 (\toprule, \midrule, \bottomrule) では不要です．|booktabs|
|スペースありの罫線|\specialrule{<wd>}{<abovespace>}{<belowspace>}|上下にスペースを挿入した罫線を引きます．これを使う場合，三つの引数が必須です．|booktabs|

※＜wd＞は幅指定（pt,em, cmなど)

※「<trim>」は線のトリミングの指定です．「(lr)」とすると，列の幅より少し短い罫線になります．格好良い罫線が引きますので，このオプションをつけることを強く推奨します．「l{-2.3mm}r{3.4mm}」のようにすると，罫線を左側に 2.3 mm 伸び，右側に 3.4 mm 短くなります．

※「<abovespace>」と「<belowspace>」は，罫線上下の空白の幅を指定します．幅指定は (1pt, 0.5em, 1.2mm) のようにします．

<br>



## tabularの設定パラメータ
|パラメータ|動作|備考|
| --- | --- | --- |
|l|左詰(left)| --- |
|r|右詰| --- |
|c|センタリング|引き続くブロックのセンタリング指定|
|p{長さ}|上/左詰めの幅指定カラム(paragraph)| --- |
|m{長さ}|中/左詰めの幅指定カラム(middle)|`arry.sty`が必要|
|b{長さ}|下/左詰めの幅指定カラム(bottom)|`arry.sty`が必要|
|@{文字列}|文字列がセパレーターになる| --- |
|`|`|縦線(1本)| --- |
|`||`|縦線(2本)|3本以上も可能|

<br>

## 参考文献
- [LaTeX 表組](http://www.yamamo10.jp/yamamoto/comp/latex/make_doc/table/table.php)