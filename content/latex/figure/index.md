---
tags: ["latex"]
title: "Figure"
date: 2022-11-22T09:31:14Z
draft: false
---


```latex
\begin{figure}[位置指定]
\centering
\includegraphics[オプション]{ファイル名}
\caption{図のタイトル\label{ラベル}
\end{figure}
```

**`.tex`拡張子の図を挿入するときは次のように記述する**

```latex
\begin{figure}[H]
\centering
\scalebox{0.6}{\input{ファイル名}}
\caption{図のタイトル\label{ラベル}}
\end{figure}
```

<br>


## 位置指定

|位置指定|出力場所|
| --- | --- |
|h|記述した部分|
|t|ページの上部|
|b|ページの下部|
|p|独立したページ|

<br>



## オプション

|オプション指定|指定方法|
| --- | --- |
|keepaspectratio |縦横の比を維持|
|scale |図のサイズの変更(例:scale=0.7)|
|width |横幅の指定(例:width=130mm)|
|height |高さの指定(例:height=60mm)|
|angle |回転角の指定(例:angle=90)|
|origin |回転角の時の原点，c:中心，tl:左上，tr:右上，bl:左下，br：右下(例:origin=c)|
|draft |図が入る枠だけ表示|
|clip |BoundingBoxからはみ出た分を切り取る|

<br>




## 複数枚のグラフを横に並べて表示


figure の中で minipage を使って，画像一つ分の領域を確保してから includegraphics を使う．
\linewidth, \textwidth などを使って領域の幅を調整する．
subcaption を使う時は，大抵プリアンブルに次のように書くとよい．

```latex
\usepackage[subrefformat=parens]{subcaption}
```

subcaption パッケージが使用しているスタイルと競合する場合は諦めて， (a)や(b)などの文字を直接打ち込んで挿入する．
以下は1行2列で2つの画像を挿入する例．

```latex
% --- Figure ------------------------------
\begin{figure}[H]
\begin{tabular}{cc}
  % -- (a) --
  \begin{minipage}{0.45\linewidth}
    \centering
    \includegraphics[keepaspectratio, scale=0.6]{fig/a.pdf} 
    \subcaption{1つめ}
  \end{minipage}
  % ---------

  % \vspace と \hspace を駆使して間隔を調節

  % -- (b) --
  \begin{minipage}{0.45\linewidth}
    \centering
    \includegraphics[keepaspectratio, scale=0.6]{fig/b.pdf}
    \subcaption{2つめ}

  \end{minipage}
  % ---------

  %% main caption
  \caption{Hogehoge}
  \label{fig:1}  
\end{tabular}
\end{figure*}
% -----------------------------------------
```


\minipage を応用すれば任意の配置で図を置くことができる．
\subcaption{} は minipage の中に必ず入れないといけない点に注意．
入れなかった場合，普通の caption が図Xでなくて (c) 等になってしまう．

<br>


<br><br>

## 参考
- [LaTeX 図](https://www.okomeda.net/wp/484/)
- [LaTeX 図の挿入](http://www.yamamo10.jp/yamamoto/comp/latex/make_doc/insert_fig/index.php)
- [TeXで好きな位置に図を配置する](https://qiita.com/poemn/items/9142339749c87ebdb536)
- [TeXによる文書作成](https://atatat.hatenablog.com/entry/cloud_latex18_subcaption)
- [図の挿入](https://hydrocoast.jp/index.php?LaTeX/%E5%9B%B3)
- [文字の拡大・縮小 - scalebox, resizebox](https://medemanabu.net/latex/scalebox-resizebox/)

