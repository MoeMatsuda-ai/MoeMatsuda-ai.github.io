---
tags: ["c"]
title: "Using gniplot on C"
date: 2022-11-26T12:34:46Z
draft: false
---


## 操作方法

gnuplotをC言語のプログラムから制御するには，パイプを使うのが最も簡単である．ここでは，C言語のプログラムによりパイプの生成しgnuplotを起動を行い，パイプを通してコマンドを送る．C言語のプログラム内にコマンドを記述することにより，プログラマーの意図したとおりにgnuplotを操作することができる． 

1. パイプを開く
    1. パイプを開くためには，ファイルポインターをつかう．そのためファイルポインターを格 納する変数を用意しなくてはならない．パイプの先もファイルとして扱われるのである． 
        ```c
        FILE *hoge;
        ```
    1. 次にgnuplotを立ち上げて，そこにパイプを接続する必要がある．次のようにする． 
        ```c
        hoge = popen("gnuplot -persist","w");
        ```
    1. popen()関数がパイプを開く命令である．これで，gnuplot が立ち上がり，パイプを 通して，コマンドを送ることができる．オプションのpersistで，gnuplotが終了し てもグラフが残るようにしている．そうしないと，コンピューターの動作は高速なので， gnuplotは一瞬にして終了し，グラフが消えてしまい，ほとんど動作内容が分からなく なる．popen()関数の戻り値はパイプの情報を示すファイルポインターである．この ファイルポインターを指定して，コマンドを送ることになる．


1. パイプを通してコマンドを送る
    パイプを通して，gnuplotにコマンドを送るのはfprintf()関数を使う．
        ```c
        fprintf(hoge, "plot sin(x)\n");
        ```
    このfprintfを使って，gnuplotにいくらでもコマンドを送ることができる．あたかも，C言語の向こう側でgnuplotが立ち上がって，それから命令を送っているかのように動作する．このようなことができるのが，コマンドを打ち込むCharacter-based User Interface(CUI)の良いところである． 
    
1. パイプを閉じる
    すべての動作が終了したならば，パイプを閉じなくてはならない．これも，ファイルの操作と全く同じである．
        ```c
        pclose(hoge); 
        ```



***（例）三角関数のグラフ作成プログラム***

```c
1 #include <stdio.h>
2 
3 int main(void){
4   FILE *gp;
5 
6   gp = popen("gnuplot -persist","w");
7   fprintf(gp, "plot sin(x)\n");
8 
9   pclose(gp);
10 
11   return 0;
12 }
```

## 参考文献
- [c言語からgnuplotを操作する(平成19年7月11日、山本昌志)](http://www.yamamo10.jp/yamamoto/lecture/2007/5E_comp_app/gnuplot/html/node4.html)

