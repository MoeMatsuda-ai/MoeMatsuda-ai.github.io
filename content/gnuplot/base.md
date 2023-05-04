---
tags: ["gnuplot"]
title: "basic operation"
date: 2022-11-24T01:07:00Z
draft: false
---

## 基本コマンド

#### 関数の表示
```gnuplot
>plot x*x+2
```

<br>

#### カレントディレクトリの移動
```gnuplot
>cd 'C:\Users'
```
※ディレクトリやファイル名は'' ' ' ''で囲む

<br>

## データファイルの表示
```gnuplot
>plot 'test.dat'
```
※ファイル名は絶対パスまたは相対パスでOK
※ファイルデータのここの列はスペースで区切る

<br>

## データファイルのフィッティング
```gnuplot
f(x)=ax**2+bx+c
fit f(x) "data.d" u 1:2 via a,b,c
```
【出力結果】
```
...

Final set of parameters            Asymptotic Standard Error
=======================            ==========================

a               = 0.995618         +/- 0.005679     (0.5704%)
b               = 15.3268          +/- 0.051        (0.3327%)
c               = 0.970465         +/- 0.04439      (4.574%)

...
>
```
※`Final set of parameter`が最終的なフィッティングの結果を表す。`Asymptotic Standard Error`は何だろ？

<br>







## 便利なオプション
```gnuplot
>plot "ファイル名" [オプション]
```

|オプション|意味|
| --- | --- |
|with lines|点と点を線で結ぶ|
|using 1:2|データの1列目をx軸、2列めをy軸にとってプロットする|
|with points pointtype 2  (`pointtype`を`pt`と略してもOK！)|点の種類を2に変える ※【参考】[「gnuplotのグラフを調整するには」](http://www.proton.jp/main/apps/gnuplotadjust.html)|
|with lines linetype 3  (`linetype`を`lt`と略してもOK！)|線の種類を3に変える|
|with lp lt 3 lw 2 pt 5 ps 2|線の種類(lt)を3番目のもの，線の太さ(lw)を2に，点の種類(pt)を5番目のもの，点の大きさ(ps)を2にする。 (lp=linespoints,lt=linetype，lw=linewidth，pt=pointtype，ps=pointsize)|
|title "データのラベル"|プロットするデータの名前（凡例）を指定する※【参考】[「凡例、ラベル等」](http://nalab.mind.meiji.ac.jp/~mk/labo/howto/intro-gnuplot/node27.html)|
|unset key (またはnotitle)|データの名前（凡例）を消す|


## グラフの調整
```gnuplot
>set [オプション]
```

|オプション|意味|
| --- | --- |
|xtics 1|x軸の目盛間隔を設定|
|title "タイトル"|グラフのタイトルを設定|
|xlabel "ラベル"|x軸の軸ラベルを設定|
|mxtics [数]|x軸の副目盛の数を設定　※[数]は省略可。標準では1個の主目盛を10等分するように設定されている。|
|label at first 1.0,1.0 "コメント"|x軸、y軸上の指定の位置（ここでは（1.0,1.0））に文字を書く　※詳しくは[グラフに文字を書く](https://ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/gnuplot/label.html)参照|
|arrow from  1.0,0.0 to 1.0,4.0 nohead |(1.0, 0.0)から(1.0, 4.0)まで線を引く（データラベルはなし）|

## 参考文献
- [きれいなグラフを作ろう！gnuplot入門](https://www.library.osaka-u.ac.jp/doc/LS_20190111_gnuplot.pdf)
- [副目盛の表示と目盛の調整](http://dsl4.eee.u-ryukyu.ac.jp/DOCS/gnuplot/node101.html)
- [gnupotで軸に平行な線を引く](https://gordiustears.net/pararell-lines-with-axes-in-gnuplot/)
- []
