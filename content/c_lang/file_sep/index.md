---
tags: ["c"]
title: "Method of file division"
date: 2022-11-26T12:34:28Z
draft: false
---

## ファイル分割

c言語のファイル分割では関数等を書き込むファイル`.c``.h`ファイルと`main`関数を書き込むファイルの3つのファイルを用意する

1. 関数を書き込む`calc.c`ファイル
    ```c
    #ifndef _CALC_H_
    #define _CALC_H_
    
    //  関数avgのプロトタイプ宣言
    double avg(double,double);
    
    #endif // _CALC_H_
    ```

1. `calc.h`ファイル
    ```c
    #include "calc.h"
    
    //  平均値を求める関数
    double avg(double l,double m){
        //  引数l,mの平均値を求め、rに代入する。
        double r = (l + m) / 2.0;
        return r;
    }
    ```
    このファイルでは次のようにファイルに書き込み、プロトタイプ宣言を行う
    ```c
    #ifnfdef _(大文字で記述したファイル名)_H_
    #define _(大文字で記述したファイル名)_H_

    プロトタイプ宣言;
    プロトタイプ宣言;
    ：


    #endif // _（大文字で記述したファイル名)_H_
    ```
    ここで登場した`#ifndef``#define``#endif`はマクロといい、二重インクルードを防いでいる

1. main関数を書き込む`main.c`ファイル
    ```c
    #include <stdio.h>
    #include "calc.h"
    
    void main(){
    double d1,d2,d3;
    double a = 1.2,b = 3.4,c = 2.7;
    //   同じ計算が3回(関数を呼び出して計算）
    d1 = avg(a,b);
    d2 = avg(4.1,5.7);
    d3 = avg(c,2.8);
    printf("d1 = %f,d2 = %f,d3 = %f¥n",d1,d2,d3);
    }
    ```


## コンパイルの仕方

gcc はコマンドラインで与えられたソースファイルしか読み込まないため、すべての`.c`ソースファイルをまとめ上げて実行する必要がある

下記2パターンの方法で実行が可能

1. (即席回答)１コマンドで
    ```
    $ gcc main.c calc.c
    ```
    ※-o オプションで実行ファイル名を指定することも可能

    この方法ではオブジェクトファイル`*.o`は最後に掃除・削除されるため残らない

1. 3コマンドで
    ```
    $ gcc -c main.c
    $ gcc -c calc.c
    $ gcc main.o calc.o
    ```
    -c オプションではオブジェクトファイル`*.o`を作るところまでしてくれる

    この方法では途中までの`.o`ファイルも残るため、途中でコンパイルエラーが起きてもそれまでのオブジェクトファイルは残るという利点がある。したがってたくさんの`*.c`ファイルで構成される実務プログラムではこの方法で１本ずつコンパイルシていくのが一般的担っている。

<br>

#### c言語コンパイルのちょこっと解説

gcc は、3つの下請けを順次起動する、親玉に過ぎません。

1. プリプロセッサ - #include や #define を処理、本来(?)のC言語ソースにする
2. コンパイラ - *.c をコンパイルし、オブジェクトファイル *.o を作る
3. リンカ - 1個以上の *.o をまとめあげ、1個の実行形式ファイル(Windowsなら *.exe)を作る

<br>

gcc の -c オプションは、「上記2.まででいいよ」指示です。

<br>

即席回答 1. のやりかたは、これを全部まとめて1回にしてるだけ。

*.o は、実は途中でできてますが、こういう要求のしかたをされたgcc は、最後にキレイに掃除・削除してしまいます。


# 参考
- [一週間で身につくc言語の基本 -ファイル分割-](https://c-lang.sevendays-study.com/day7.html)
- [一週間で身につくc言語の基本 -複雑なファイル分割-](https://c-lang.sevendays-study.com/ex-day7.html)
- [Yahoo!知恵袋 -ソースファイルを複数使ったプログラムのコンパイル-](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10128407290)
- [もう一度基礎からc言語 -プロトタイプ宣言の省略-](https://dev.grapecity.co.jp/support/powernews/column/clang/015/page02.htm)
