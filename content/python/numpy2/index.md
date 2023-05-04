---
tags: ["python", "numpy"]
title: "Numpy2"
date: 2022-11-22T08:10:50Z
draft: true
---

## 1. Numpy　概要

Pythonにはデータの集合を扱うための様々なデータ型がある。

#### 標準で用意されているもの

| 名前       |    例                       |                                                      |
|:-------------|:----------------------------|:------------------------------------------------------|
| リスト(list)   | ``L=["kiwi", "banana", "apple"]``  | インデックス番号付き集合               |
| タプル(tuple) | ``T=("kiwi", "banana", "apple")`` | インデックス番号付き集合(代入不可)   |
| 辞書(dict)  | ``D={"kiwi":3, "banana":2, "apple":3}`` | インデックス番号無し (key,value) 対応表 |
| 集合(set)   | ``S={"kiwi", "banana", "apple"}``     | インデックス番号無し集合                |

#### 拡張モジュールを利用するもの。

| 名前       |    例                       |                                                      |
|:-------------|:----------------------------|:------------------------------------------------------|
| **numpy.ndarray**   | ``N=np.array([1,2,3])``  | **数値計算用の多次元配列**（**ブロードキャスト**を提供する高速で目盛り効率の良い多次元配列が実装されている。 ）|
| pandas.Series | ``s=pd.Series([280,198],index=['tomato','banana'])``      | 行に名前がある1次元配列       |
| pandas.DataFrame | ``df=pd.DataFrame([['tomato',280],['banana', 198]], columns=['name','price'])`` | 列や行に名前がある2次元配列       |

<br>

### Numpyとは？

Numpyとは**N次元配列(N-dimensional array, ndarray)を定義し、ベクトルや行列をはじめとする数値計算を行うためのモジュール**であり、以下のような特徴を持つ。

- C言語で記述されているため高速処理可能
- 高速に動作し、呼び出しにループ記法を必要としない標準的な数学関数
- Numpyモジュールで生成する配列の型名は`numpy.ndarray`
- ディスクへの読み書きに加え、メモリマップファイル機能を提供する入出力
- 行列計算、乱数生成、フーリエ変換の各機能
- C, C++, Fortran へのインタフェース(C言語呼び出しのAPIがあることで、NumpyからC言語で書かれた外部ライブラリへデータを渡したり、逆に外部ライブラリの計算結果をNumpyに戻し、ndarrayとして扱うこともできる。)

※Numpyはデータ演算の基盤を提供するが、実際に構造化データや表形式データを分析する場面ではpandasを用いるのが一般的


<br>

### モジュールの読み込み
NumPyモジュールは慣例的に`np`の名称で利用される。
```python
import numpy as np
print(np.__version__)
```

<br>

### Numpyのマニュアル参照

```python
np?
```

<br>

### Numpyの関数とメソッド

- 配列`ndarray`の**生成**や，**複数の配列に対する操作**(結合等)には, NumPyの**関数**を使う
- すで生成されている`ndarray`オブジェクトの**加工**には，`ndarray`に対する**メソッド**を使う

※　以下では，NumPyの関数とメソッドの説明の際に，両者を以下のように書いて区別する
- **関数**: `numpy.array()`のように，モジュール名`numpy`もしくは略称`np`をつけて説明
- **メソッド**: `ndarray.reshape()`のように、`ndarray`をつけて説明（`ndarray`の部分には配列名が入る）

<br>



## 2. 配列`ndarray`の生成

### 生成関数一覧
|関数|説明|
| --- | --- |
|array|リスト、タプル、Python配列、その他列挙型といったデータを受取り、ndarrayを生成（要素の型は推測されてもの、あるいは明示的に指定されたもの）|
|asarray|array同様ndarrayを生成。ただし入力がndarrayの場合には新規に変数を生成しない|
|arange|Python組み込み関数のrange関数と同じ動作でndarrayを生成|
|ones, ones_like|指定された形状の配列で要素をすべて 1 で埋めたndarrayを生成|
|zeros, zeros_like|ones, ones_like同様にndarrayを生成。要素はすべて 0 で埋められる|
|empty, empty_like|以下同文。要素は初期化されておらず不定|
|eye, identity|N ✕ N の単位行列となるndarrayを生成|


### ndarray に関する情報の取得
|コマンド|説明|
| --- | --- |
|x.dtype|値のデータ型(int, float など)|
|x.ndim| 次元|
|x.shape| 形状(1次元なら要素数、2次元なら行と列数etc.)|
|x.size| 要素数|
|x.itemsize| 要素のメモリサイズ [byte]|
|len(x)| 1次元配列に対しては要素数と同じ|

### 関数
|関数|説明|
| --- | --- |
|astype|引数には`"型名"`を指定(ndarrayの配列に対して arr.dtype などでもOK)|

<br>

### 2.1 リストやタプルから`ndarray`への変換

1. リスト(list)のndarrayへの変換
    - ```python
        x = np.array([1, 2, 3])
        print(x)
        ```
        【出力】
        ```
        [1 2 3]
        ```
    - ```python
        l = [1, 3, 5]
        y = np.array(l, dtype='float')
        print(y)
        ```
        【出力】
        ```
        [1 3 5]
        ```
        <u>※`dtype=`で変数の型を明示的に指定</u>
    - ```python
        np.array([[0, 1], [2, 3]])
        ```
        【出力】
        ```
        array([[0, 1],
       [2, 3]])
       ```

1. タプル(tuple)からndarrayへの変換
    - ```python
        t = (2, 4, 6)
        z = np.array(t)
        print(z)
        ```
        【出力】
        ```
        [2 4 6]
        ```
<br>


### 2.2 関数を用いた配列`ndarray`の生成

####  同じ要素値をもつndarrayの生成

※以下での`shape`には配列の形状を記述する（配列の形状については後述）

1. 要素の初期値なし(適当な値が入っているおそれあり)
    ```python
    numpy.empty(shape) 
    ```
1. 要素値は0に初期化
    ```python
    numpy.zeros(shape) 
    ```
1. 要素値は0に初期化し、形状(shape)が配列aと同じになる
    ```python
    numpy.zeros_like(a)
    ```
1. 要素値は1に初期化
    ```python
    numpy.ones(shape) 
    ```
1. 要素値は1に初期化し、形状(shape)が配列aと同じになる
    ```python
    numpy.ones_like(a)
    ```
1. 要素値はvalに初期化
    ```python
    numpy.full(shape, val) 
    ```
1.  要素値はvalに初期化し、形状(shape)が配列aと同じになる
    ```python
    numpy.full_like(a, val)
    ```

    （例）
    ```python
    print(np.ones(10, dtype=int)) #値が1となる10個の要素を持つint型の配列
    print(np.full(5, np.pi)) #値がπ(np.pi)となる5個の要素を持つ配列
    ```

    ※上記のように要素の型を指定することも可能(要素の型の指定については以下で後述)

<br>



#### 等差数列の生成

1. 区間と間隔(step)を指定する方法
    - ```python
        np.arange(end) 
        #[0, end)の区間の整数値を生成
        ```
    - ```python
        np.arange(start, end) 
        #[start, end)の区間の整数値を生成
        ```
    - ```python
        np.arange(start, end, step) 
        #[start, end)の区間内でstep幅ごとの整数値を生成
        ```
1. 区間と分割数を指定する方法
    - ```python
        numpy.linspace(start, end, num)
        #[start, stop]の区間を端点を含むnum個の境界値で分割し、その境界値を返す
        ```
        **※numは端点を含むので、`num = 分割したい個数＋1`になることに注意**

<br>

#### 単位行列の生成

- ```python
    numpy.identity(n) #n×nの単位行列の生成
    ```

- ```python
    numpy.eye(n, m=n) #n×mの単位行列の生成
    ```
    ※`m`は省略可能。省略した場合は正方行列になる

<br>

#### 乱数による配列の生成

1. 一様乱数による配列の生成
    - [numpy.random.rand(dim0, dim1, ...)](https://numpy.org/doc/stable/reference/random/generated/numpy.random.rand.html)
        ```python
        numpy.random.rand(dim0, dim1, ...) 
        #要素値が0から1の一様乱数であり、shapeが(d0, d1, ...)となるndarrayの生成
        ```
        (例)　**要素値が0から1の一様乱数である、2×3の二次元配列の生成**
        ```python
            np.random.rand(2, 3)
            ```

    - [numpy.random.randint(low, high, size)](https://numpy.org/doc/stable/reference/random/generated/numpy.random.randint.html)
        ```python
        numpy.random.randint(low, high, size) 
        #[low, high)の区間における整数乱数を要素値とし、shapeがsizeのndarrayを生成
        ```
        (例)　**0以上5以下の整数乱数を要素とする2×2×2の3次元配列の生成**
        ```python
            x = np.random.randint(0, 6, (2, 2, 2))
            y = np.random.randint(6, size=(2, 2, 2))
            ```

1. 正規分布に従う乱数の生成

    - ```python
        np.random.normal(loc, scale, size) 
        #平均がloc, 標準偏差scaleのガウス分布に従う乱数を要素とする、
        #shapeがsizeのndarrayを生成
        ```

    - ```python
        numpy.random.randn(d0, d1, d2, ...) 
        #平均0, 標準偏差1のガウス分布に従う乱数を要素とする、
        #shapeが(d0, d1, d2, ...)のndarrayを生成
        ```

    


## 3. `ndarray`の要素の型

### 要素の型の確認

リスト(list)では要素にいろいろな型を混在させることができるが、Numpyの配列では各要素が同じ型である必要がある。

- `ndarray`の要素のデータ型は次のように確認できる。

    ```python
    x = np.array([1, 2, 3])
    print(x.dtype)
    ```

- Numpyオブジェクトの要素の方は次のように陽に（明示的に）指定することもできる。
    ```python
    x = np.array([1, 2.1, 3], dtype=np.int)
    #x = np.array([1, 2.1, 3], dtype="int") # 上と同じ意味
    ```
    ※関数を用いて配列を生成するときも使用できる！

- 要素の型を混在させて定義させた場合、どちらかの型で定義される
    - `int`と`float`ではすべて`float`に変換して定義される。


<br>




## 4. 配列`ndarray`の次元、形状、要素数

配列`ndarray`の次元、形状、要素数は属性`ndim`, `shape`, `size`に定義されている。

次のように`ndim`, `shape`, `size`にアクセスすることで次元、形状、要素数の情報を取得することができる。

```python
x = np.array([[0, 1], [2, 3], [4, 5]])
print(x)
print(x.ndim) #次元
print(x.shape) #形状(1次元なら要素数、2次元なら行と列数etc.)
print(x.size) #要素数
print(x.itemsize) #各要素のメモリサイズ [byte]
print(x.nbytes) # 配列の合計サイズ [byte]
print(len(x)) #1次元配列に対しては要素数と同じ
```
【出力結果】
```
[[0 1]
 [2 3]
 [4 5]]
ndim: 2
shape: (3, 2)
size:  6
itemsize:  8
length: 3
```



## 5. 配列の参照

### 5.1 1次元配列の参照

`ndarray`の要素値を参照する方法はリスト(list)と同様に行うことができる。
つまりインデックスに`[begin:end:step]`と記述し範囲を指定することで参照できる。

(例)次のように定義したリストxについての参照
```python
x = np.arange(1, 10)
```
1. xの要素一覧
    ```python
    print(x)
    ```

1. 一番はじめの要素
    ```python
    x[0]
    ```

1. 最後から２番めの要素
    ```python
    x[-2]
    ```

1. はじめの３つの要素
    ```python
    x[:3]
    ```

1. 最後の３つの要素
    ```python
    x[-3:]
    ```

1. はじめの要素から、一つおきに要素値を表示
    ```python
    x[::2]
    ```
1. 要素を逆順に表示(インデックス指定のステップ値に負の値を使う)
    ```python
    x[::-1]
    ```
<br>

### 5.2 2次元配列の参照

`ndarray`の2次元配列では、行および列それぞれに対する範囲を`[行に対する範囲, 列に対する範囲]`と指定することで参照・スライスできる。

※スライス構文では`[start:stop:step]`のように指定する（stepは省略可）

(例)次のように定義した2次元配列の参照
```python
N = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(N)
```
```
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
```

1. はじめの行のみ
    ```python
    print(N[0, :])
    print(N[0])
    ```

1. 最後の列のみ
    ```python
    N[;, -1]
    ```

1. はじめの2行かつ、はじめの3列以内の要素
    ```python
    N[:2, :3]
    ```

1. 奇数番目の列とすべての行要素でできる行列
    ```python
    N[:, ::2]
    ```

1. `N`の右下部分の要素でできる2行2列の部分行列（インデックスに負の値を使う）
    ```python
    N[-2:, -2:]
    ```

1. 行を逆順にした（列順は変えない）行列
    ```python
    N[::-1,]
    ```

<br>

## 6 配列`ndarray`のコピー

配列`ndarray`のコピーには[shallow copy と Deep copy](https://docs.python.org/ja/3/library/copy.html)の2通りがある

- **Shallow Copy** : 浅いコピー
    - pythonではオブジェクトの生成時に固有の`id`がふられる。(C言語で言うポインタとはまた別のもの、ポインタの役割をするものは別に存在する？)
    - Shallow Copyではオブジェクトの`id`のみをコピーする。
    - 同じ`id`を参照するための別名をつくることになる。
    - 次のような変数への`ndarray`の代入もリストオブジェクトと同様にShallow Copyとなる。
        ```python
        p = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
        q = p
        ```

- **Deep Copy**  : 深いコピー
    - 新たなオブジェクトを生成し，そこに参照元の値をコピーすること。
    - `ndarray`の Deep Copy には，次のように`copy()`メソッドを使う。
        ```python
        p = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
        q = p.copy()
        ```
        
#### Shalow Copyでは値のコピーは行わず、値を参照するための`id`情報のコピーのみを行うので、ほとんどの場合Deep Copyより高速であり、メモリ消費も少ない。

<br>


## 7. 配列`ndarray`の変形

#### shapeの変更の仕方

|メソッド|概要|補足|
| --- | --- | --- |
|ndarray.reshape(new_shape)|1次元配列を多次元配列に変形|new_shape：shapeを整数かtupleで指定|
|ndarray.ravel()|多次元配列を1次元配列に変形(Shallow Copy)| --- |
|ndarray.flatten()|多次元配列を1次元配列に変形(Deep Copy)| --- |

※`ndarray.reshape()`メソッドと`ndarray.revel()`メソッドは要素値を**Shallow copy**し、配列の見かけ(`shape`)のみが異なるオブジェクトを生成する。

1. **`ndarray.reshape()`メソッドによるshapeの変更**

- 要素数9の1次元配列を3×3の2次元配列に変形する例
    ```python
    x = np.arange(9)
    print(x)
    x = x.reshape((3, 3))
    print(x)
    ```
    【出力】
    ```
    [0 1 2 3 4 5 6 7 8]
    [[0 1 2]
    [3 4 5]
    [6 7 8]]
    ```

- 配列のshapeに-1を指定する例
    ※-1を指定することで自動でサイズを決めてくれる
    ```python
    x = np.arange(9)
    print(x)
    x = x.reshape((3, -1))
    print(x)
    ```
    【出力】
    ```
    [0 1 2 3 4 5 6 7 8]
    [[0 1 2]
    [3 4 5]
    [6 7 8]]
    ```

- NumPyの関数`numpy.arange()`で生成した`ndarray`をメソッド`ndarray.reshape()`で変形する例
    ```python
    np.arange(9).reshape((3, 3)) 
    ```
    ```
    array([[0, 1, 2],
       [3, 4, 5],
       [6, 7, 8]])
    ```

- 1から9の整数値を要素とする縦ベクトルの定義（以下2つの方法のどちらでも同様の出力を得られる）
    1. ```python
        x = np.arange(1, 9).reshape((8, 1))
        ```
    1. ```python
        x = np.arange(1, 9)
        x = x[:, np.newaxis] # `np.newaxis`で新たな次元を追加(1次元なら2次元に、2次元なら3次元に)
        print(x)
        ```
    - 【出力】
        ```
        [[1]
        [2]
        [3]
        [4]
        [5]
        [6]
        [7]
        [8]]
        ```



## 8. 配列`ndarray`の要素の追加

#### 配列`x`に対して配列`y`を追加した配列は次のように得られる。
    ```python
    x = np.array([1, 2, 3])
    y = np.array([8, 9])
    x = np.append(x, y)
    print(x)
    ```
    【出力】
    ```
    [1 2 3 8 9]
    ```

#### 2次元配列における配列の要素の追加

1.  行数は変化させず、列数を増やす方向に`q`を結合する場合
    ```python
    np.append(p,q)
    ```
    または
    ```python
    L = np.append(p, q, axis=1)
    ```

1. 列数は変化させず、行数を増やす方向に`q`を結合する場合
    ```python
    L = np.append(p, q, axis=0)
    ```



<br><br>

## 参考資料
- [PythonDataScienceHandbook](https://github.com/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/02.02-The-Basics-Of-NumPy-Arrays.ipynb)
- [Numpy](https://numpy.org/)
- [numpy.random.rand(dim0, dim1, ...)](https://numpy.org/doc/stable/reference/random/generated/numpy.random.rand.html)
-  [numpy.random.randint(low, high, size)](https://numpy.org/doc/stable/reference/random/generated/numpy.random.randint.html)
- [shallow copy と Deep copy](https://docs.python.org/ja/3/library/copy.html)
- 