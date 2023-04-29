---
title: "Python Basics"
date: 2022-11-22T08:04:32Z
draft: false
---



## Pythonのプログラムの作成と実行

- **方法1**: C言語のように，テキスト形式でプログラムを書いて実行

  ```bash
  $ vi program.py # プログラム作成
  $ python program.py # プログラム実行
  ```

  注) Pythonは**インタプリタ型言語**なのでコンパイルは不要。


- **方法2**: jupyter notebookやIpython等を用いて**インタラクティブに実行**

<br>

## コメント

- #：1行コメント
- 複数行コメント："""コメント"""　※ダブルクォートの代わりにシングルを使っても良い →ドックストリング

<br><br>

## モジュール・パッケージ・ライブラリ

- **モジュール**: クラスや関数を記述したファイル(.py)
- **パッケージ**: いくつかのモジュールを一つのディレクトリ(フォルダ)にまとめたもの
- **ライブラリ**: いくつかのパッケージをまとめたもの。モジュールやパッケージをライブラリと呼ぶこともある


1. 標準ライブラリ
  - [math](https://docs.python.org/3/library/math.html): 数学関数モジュール
  - [random](https://docs.python.org/3/library/random.html): 乱数発生モジュール

2. 外部ライブラリ：追加インストール必要
  - [NumPy](https://numpy.org/): 数値計算用の多次元配列ライブラリ。C言語で作られているので高速
  - [SciPy](https://www.scipy.org/scipylib/index.html): 科学計算ライブラリ
  - [pandas](https://pandas.pydata.org/): データフレーム(エクセルのような表形式)のデータ解析ライブラリ
  - [scikit-learn](https://scikit-learn.org/stable/): 機械学習ライブラリ


モジュールやパッケージ，ライブラリに含まれるオブジェクト(クラスや関数等)を使うには，以下の例のように`import`を用いて読み込みを行う。



<br><br>





## Pythonのデータ型について
すべてのPythonオブジェクトはC言語の構造体で定義されており、C言語等の静的型付言語などと比べてオーバーヘッドが生じる

**【例】 integer(long)型**
```c
struct _longobject{
    long ob_refcnt;
    PyTypeObject ob_type;
    size_t ob_size;
    long ob_digit[1];
};
```
- ob_refcnt : Pythonが目盛りの割当と解除を自動的に行うための参照カウンタ
- ob_type : 変数の方を表すコード
- ob_size : この後に続くデータの大きさ
- ob_digit : このPython変数が持つ実際の整数値

<br>

### PythonリストとNumpy配列
|種類|概要|
| --- | --- |
|Pytonリスト|ポインタ列へのポインタを格納した**動的配列**。各ポインタは完全なPythonオブジェクトを示すため、柔軟性に利点を持つ一方ですべての変数が同じ方であるケースでは情報が冗長になる。|
|Numpy配列|すべてのデータの型が同じ**固定型**の配列のため柔軟性に欠ける一方でデータの保存と操作がはるかに効率的|


<br><br>






## immutable と mutable

関数の引数(仮引数)の値を関数内で変更した場合，引数が**immutable(変更不可)**な型ならば呼び出した側の引数(実引数)は変化しない。**mutable(変更可能)**ならば，実引数も変化。

- **immutable**: `int`, `float`, `str`, `tuple` 等
- **mutable**: `list`, `dict`, `set` 等(これらについては後述)
   
immutableな引数については， 返り値を使って更新するようにする。


