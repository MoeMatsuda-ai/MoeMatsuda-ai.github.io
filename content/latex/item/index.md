---
tags: ["latex"]
title: "Bulletins in latex"
date: 2022-11-22T09:31:40Z
draft: false
---


## 記号付き箇条書き

　見出し記号付きの箇条書きをするためには¥itemizeを使用する。

【入力例】
```latex
¥begin{itemize}
　　¥item aaa
　　¥item bbb
　　¥begin{itemize}
　　　　¥item ccc
　　¥end{itemize}
　　¥item ddd
¥end{itemize}
```

【出力例】
```
・ aaa
・ bbb
    - ccc
・ ddd
```

<br>




## itemizeのマークの変更

　itemizeを入れ子にすると、各項目の見出しとなる記号が変化する。
これらの記号は、クラスファイルのなかで次の命令に定義されている。

|レベル|命令|デフォルト|
| --- | --- | --- |
|１|¥labelitemi|●|
|２|¥labelitemii|−|
|３|¥labelitemiii|＊|
|４|¥labelitemiv|・|

【入力例１】itemizeの第１レベルの見出し記号を”○”に変更
```latex
¥renewcommand{¥labelitemi}{○}
　　¥begin{itemize}
　　　　¥item マークが変わった！
　　¥end{itemize}
```

【出力例１】
```
○ マークが変わった！
```


【入力例２】見出し記号を１つだけ”○”に変更
```latex
¥begin{itemize}
　　¥item 普通のマーク
　　¥item[○]マークが変わります
¥end{itemize}
```

【出力例２】
```
・ 普通のマーク
○ マークが変わります
```

<br>




## 番号付き箇条書き

　見出し番号付きの箇条書きをするためには¥enumerateを使用する。

【入力例】

```latex
¥begin{enumerate}
　　¥item aaa
　　¥begin{enumerate}
　　　　　¥item bbb
　　　　　¥begin{enumerate}
　　　　　　　　¥item ccc
　　　　　¥end{enumerate}
　　¥end{enumerate}
　　¥item ddd
　　¥item eee
¥end{enumerate}
```

【出力例】
```
1. aaa
    (a) bb
        i. ccc
2. ddd
3. eee
```

<br>




## enumerateの番号の変更

　enumerateの番号の出力形式を変更するには、カウンタの値を出力する命令を定義し直す。

|レベル|カウンタ|出力する命令|デフォルトの出力|
| --- | --- | --- | --- |
|１|enumi|¥theenumi|アラビア数字（１，２，３，・・・）|
|２|enumii|¥theenumii|小文字のアルファベット（a，b，c，・・・）|
|３|enumiii|¥theenumiii|小文字のローマ数字（小文字のローマ数字（ⅰ，ⅱ，ⅲ，・・・）|
|４|enumiv|¥theenumiv|大文字のアルファベット（A，B，C，・・・）|

【例】¥enumiカウンタを大文字のローマ数字で出力する設定

```latex
¥renewcommand{¥theenumi}{¥Roman{enumi}}
```

#### 番号の出力形式
|命令|出力形式|
| --- | --- |
|¥arabic|アラビア数字（１、２、３、・・・）|
|¥roman|ローマ数字（ⅰ、ⅱ、ⅲ、・・・）|
|¥Roman|ローマ数字（Ⅰ、Ⅱ、Ⅲ、・・・）|
|¥alph|アルファベット（a、b、c、・・・）|
|¥Alph|アルファベット（A、B、C、・・・）|


## 見出し語付き箇条書き

　見出し語付きの箇条書きをするためには¥descriptionを使用する。

【入力例】

```latex
¥begin{description}
　　¥item[日時] ○月○日
　　¥item[場所] どこか
　　¥item[時間] ○時○分
　 ¥end{description}
```

【出力例】

```
日時 ○月○日
場所 どこか
時間 ○時○分
```

<br>


## 参考
- [箇条書き](http://www3.otani.ac.jp/fkdsemi/pLaTeX_manual/kajyo.html)
