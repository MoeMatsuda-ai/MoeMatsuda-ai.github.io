---
tags: ["python"]
title: "Function"
date: 2022-11-22T08:09:22Z
draft: true
---



## 基本演算
- Cとおおむね同じ
- `++`, `--`は使えないが`+=`, `-=`は使える


<br><br>

## 関数の定義

- `def`で始まる行で関数名と引数を定義
- **次行から関数の終わりまではインデント**して命令文を書く
- 返り値は省略可
- Docstring（ドックストリング） は　`help(function_name)` を実行したときに出力される文字列（`function_name`関数の説明文）のこと。一般的に関数名の直後に書き、三重引用符で囲む
    ```python
    def function_name(args):
        """Docstring"""
        命令文       #ここから関数の終わりまでインデントをする
        return result
    ```
- 引数にデフォルト値を設定することもでき，デフォルト値の設定されている引数は呼び出し時に省略可能
    ```python
    def print_name(family="Momo",first="Taro"): # family: 姓,  first: 名
        print("My name is {0} {1}.".format(first, family))

    print_name(first="Daisuki")
    ```
- C言語と同様に引数を設定して呼び出すことで実行
    ```python
    print_name("Yamaguchi","Daisuki")
    My name is Daisuki Yamaguchi.
    ```
- 引数名をつけて，引数の値を指定することもできる。
    ```python
    print_name(family="Yamaguchi",first="Daisuki")
    My name is Daisuki Yamaguchi.
- 引数名をつければ，引数の順番はランダムでも良い
    ```python
    print_name(first="Daisuki",family="Yamaguchi")
    My name is Daisuki Yamaguchi.
    ```

<br>


### 複数の返り値をもつ関数

Pythonの関数では，**返り値を複数**指定できる。

```python
def interval(mean,sd): # 平均mean, 標準偏差sdから，サンプルの約68%が含まれる区間を出力
    return mean-sd, mean+sd
```

複数の返り値を，それぞれ別の変数で受け取ることができる。

```python
low,high=interval(70,10)
print(low,high)
```
- 実行結果
    60 80

複数の返り値を，一つの変数でまとめて受け取ることもできる。

```python
ret=interval(70,10)
print(ret[0], ret[1])
print(type(ret))      ## 返り値の型はタプル(要素の書き換えを出来ないリスト。タプルの詳細については後述)
## ret[0]=3            # 返り値の要素を変更するとエラーが出る。(タプルの要素は書き換え不可。後述)
```
- 実行結果
    60 80
    <class 'tuple'>



### 関数定義における型の明記
Python3.0以降では関数アノテーション（Function Annotations）という仕組みが導入され，
関数の引数や返り値に直接型を記述することができる．
ただしあくまで注釈のため，（環境によっては処理に使用されることもあるが）実行時に
チェックされたりはしない．
```python
def test_func(param1: str, param2: int) -> tuple[str, int]:
    return (param1, param2)
```



<br><br>



## print文

### フォーマット指定その1: printf形式
print("x=%d, y=%e" % (x, y))

<br>


### フォーマット指定方法その2: format method

今後おすすめの方法は，文字列に対するメソッド`format()`を使う["format()メソッド"](https://docs.python.org/ja/3.8/tutorial/inputoutput.html#the-string-format-method)と呼ばれる方法。

- 実行例
    print("x={0}, y={1}".format(x, y)) # {}の中の数字で，format()の何番目の引数か指定
    print("x={}, y={}".format(x, y))   # format()の引数順に表示するなら{}内の数字は省略可
    print("x={1}, y={0}".format(x, y)) # {}内の数字を変えてみた
    print("x={0:+d}, y={1:4.2f}".format(x, y)) # 数値フォーマットの指定も可能
- 実行結果
    x=9, y=False
    x=9, y=False
    x=False, y=9
    x=+9, y=0.00

<br>


## フォーマット指定方法その3: その他（他にも色々...）
- 実行例
    x=5
    print(f"x={x}")
    print("x="+str(x))
- 実行結果
    x=5
    x=5

<br><br>



## if文

<br>


### if文 
```python
x=1
if x == 0:
    print(x, "is zero")
elif x > 0:
    print(x, "is positive")
else:
    print(x, "is negative")
```
注) pythonはC言語のように`{}`を使わない。インデント(空白4文字)で構文単位を表現


<br>


### if-elseを1行で書く

**1行if文の書式** : `返り値 if 条件式 else 返り値`

例えば，絶対値を求める関数`absval`を`def`を使って書くと以下のようになる。
```python
def absval(x):
    if x>0:
        absval=x
    else:
        absval=-x
    return absval
```

この関数を1行にまとめて書くと，以下のようにとても簡潔になる。

```python
def absval(x):
    return x if x>0 else -x
```



<br><br>



## While文

<br>


### while文 
```python
i = 0
while i < 10:
    print(i, end=' ')
    i += 1
```

<br><br>


## for文

- **for文の特徴**

    Pythonのデフォルト実装では、動的に解釈を行う（型が柔軟である)という言語の性質上、CやFortranなどのように効率的なマシンコードへのコンパイルができないという特徴を持つ。この弱点を克服するための手法として
    
    - PyPyプロジェクト：PythonのJust-In-Time実装
    - Cythonプロジェクト：PythonコードをCコードに変換する
    - Numbaプロジェクト：Pythonコードブロックを高速LLVMバイトコードに変換する

    などが知られているが、このどれもが標準CPythonエンジンほどには普及していない。このようなPythonの低速性はfor文などの小さな操作を大量に繰り返す状況で顕著になる。
- **for文の構造**

    ```python
    for 変数 in イテラブル:
        実行文
    ```
    - **イテラブル**: 順に一つずつ要素を取り出すことができるオブジェクト
        - ex) リスト, `range()` でつくるシーケンスなど(後述)
    - `for` と `in` の間の変数にイテラブルの要素が順に代入される

<br>



#### リストの使用

**リスト**とはPythonに用意されている**配列の一種**で，要素を`[]`内に列挙する。要素の取り出しは，例えば以下のように`for`文で行える。
リストの詳細は今後の課題でも扱う。

```python
for x in [1, 5, 9]:
    print(x, end=" ")
```
- 実行結果
    1 5 9

リストの要素を順に変数に代入することも簡単にできる。

```python
numlist = [1, 5, 9]
for i in numlist:
    print(i, end=" ")
```
- 実行結果
    1 5 9 


<br>


#### range()関数

- `range(end)`: 0以上end**未満**の数列を生成
- **`range(begin, end)`**: begin以上end**未満**の数列を生成
- **`range(begin, end, step)`**: begin以上end**未満**の数列を生成。stepは要素間の間隔




<br><br>


