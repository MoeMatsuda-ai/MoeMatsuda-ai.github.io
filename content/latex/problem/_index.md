---
title: "Problem"
date: 2022-11-22T09:32:05Z
draft: false
---


## グラフが記述した位置に正しく出力されない

### もとのやり方
```latex
\begin{figure}[h]
\end{figure}
```
**このやり方では画像を連続して出力する場合などにテキストの最後にまとめて出力されてしまう。**

### 解決法
```latex
usepackage{here}
\begin{figure}[H]%[H]オプションで記述した位置に強制的に出力する
\end{figure}
```

#### 参考
[TeXで図をコード記述位置に強制的に出力する](http://ac206223.ppp.asahi-net.or.jp/adiary/memo/adiary.cgi/hirosugu/TeX%E3%81%A7%E5%9B%B3%E3%82%92%E3%82%B3%E3%83%BC%E3%83%89%E8%A8%98%E8%BF%B0%E4%BD%8D%E7%BD%AE%E3%81%AB%E5%BC%B7%E5%88%B6%E7%9A%84%E3%81%AB%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8B)

<br><br><br>

## 図表番号が正しく表示されない。

<br>

#### 問題点

```tex
\begin{figure}[H]
\label{graph3_4}
    \begin{center}
        \scalebox{0.9}{\input{kadai3_4_graph.tex}}
        \caption{$\alpha = 1/4 $における分散$\langle x(t)\rangle$と時間$t$の関係}
    \end{center}
\end{figure}

\begin{figure}[h]
\label{graph3_2}
    \begin{center}
        \scalebox{0.9}{\input{kadai3_2_graph.tex}}
        \caption{$\alpha = 1/2$における分散$\langle x(t)\rangle$と時間$t$の関係}       
    \end{center}
\end{figure}
    
\begin{figure}[h]
\label{graph3_1}
    \begin{center}
        \scalebox{0.9}{\input{kadai3_1_graph.tex}}
        \caption{$\alpha = 1$における分散$\langle x(t)\rangle$と時間$t$の関係}
    \end{center}
\end{figure}

図\ref{graph3_4}, \ref{graph3_2}, \ref{graph3_1}
```

と書くと`図4, 4, 4`と出力されてしまう

<br>

#### 解決法

captionの中にlabelをかく

```tex
\begin{figure}[H]
    \begin{center}
        \scalebox{0.9}{\input{kadai3_4_graph.tex}}
        \caption{$\alpha = 1/4 $における分散$\langle x(t)\rangle$と時間$t$の関係\label{graph3_4}}
    \end{center}
\end{figure}
```

#### 参考
- [LaTeXの図番号がおかしい問題 - \label{}を\caption{}内に挿入](https://seihiguchi.hatenadiary.org/entry/20080708/1215542448)
