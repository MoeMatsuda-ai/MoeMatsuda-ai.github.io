---
title: "Numpy"
date: 2022-11-22T08:11:04Z
draft: true
---



- Pythonではfor文などのループが低速
- 一般的にPythonではfor文を多様せず、numpyやPandas等の高速なライブラリを利用
- Numpyは多くの操作に対して静的型付きでコンパイルされた関数（c言語）への便利なインターフェースを提供
- Numpyではベクトル化操作により配列に対して操作を実行するだけで、各要素に適用される
- Numpyのベクトル化演算は、ufunc(ユニバーサル関数)を使用して実装されており、このufuncの主な目的は、Numpyの各要素に対して繰り返し演算を素早くすること


<br><br>


### 便利なNumpy関数

- 以下では`import numpy as np`としてnumpyをimportしているものとする
- npはnumpy, shapeは配列の形状, arrは任意の配列を示す

- **Numpyで実装されている演算子とその等価なufunc**
    |関数|等価なufunc|説明 |
    | --- | --- | --- |
    |+|np.add(arr, x)|加算(arrやxの順序はとわない。また配列同士、変数同士でも演算可)|
    |-|np.subtract(arr, x)|減算（以下同文）|
    |-|np.negative(arr)|単行マイナス|
    |*|np.multiply(以下略)|乗算|
    |/|np.divide|除算|
    |//|np.floor_divide|整数除算(小数点以下切り捨て)|
    |**|np.power|べき乗|
    |%|np.mod|剰余|

    <br>

- **Numpyで実装されている比較演算子とその等価なufunc**

    |演算子|等価なufunc|
    | --- | --- |
    |==| np.equal|
    |!=|np.not_equal|
    |<|np.less|
    |<=|np.less_equal|
    |>|np.greater|
    |>=|np.greater_equal|

- **Numpyのufunc**

    |関数|説明|引数|
    | --- | --- | --- |
    |arr.reshape(shape)|配列arrを指定したshapeの型に変形| shape |
    |arr[np.axis]|新しく次元を追加| --- |
    |np.concatenate([arr1, arr2, arr3])|次元の同じ複数の配列を結合|連結する配列(タプルまたは配列のリスト), `axis=0`で第1の軸方向に結合（デフォルト）, `axis=1`で第2の軸方向|
    |np.vstack([arr1, arr2])|混合次元の配列を垂直に重ねる|連結する配列|
    |np.hstack([arr1, arr2])|混合次元の配列を水平に重ねる|連結する配列|
    |np.split([arr], [a,b])|配列を分割|分割する配列, [a,b]は分割点を与えるインデクスのリスト|
    |np.vsplit([arr], [a])|配列の垂直方向の成分を分割|分割する配列, [a]は分割点を与えるインデクスのリスト|
    |np.hsplit([arr], [a])|配列の水平方向の成分を分割|分割する配列, [a]は分割点を与えるインデクスのリスト|
    |np.dsplit([arr], [a])|配列を第3軸に沿って分割|分割する配列, [a]は分割点を与えるインデクスのリスト|
    |np.absolute(arr) または np.abs(arr)|絶対値を返却（複素数データも扱える）|
    |np.sin(arr)|sin関数の計算結果を返却(cos, tanも同様)|
    |np.arcsin(arr)|arcsin関数の計算結果を返却(cos, tanも同様)|
    |np.exp(arr)|指数関数の計算結果を返却|
    |np.power(x, arr)|x^arrの値を返却|
    |np.log(x)|ln(x)の値を返却|
    |np.log2(x)|log2(x)の値を返却|
    |np.expm1(x)|`exp(x)-1` の値を返却(xの値が非常に小さいときに`np.exp` よりも良い制度で計算する)|
    |np.log1p(x)|`log(1+x)` の値を返却(xの値が非常に小さいときに`np.log` よりも良い制度で計算する)|
    

<br>

- **numpyの集約関数**

    |関数名|NaNセーフ版|説明|
    | --- | --- | --- |
    |np.sum|np.nansum|要素の合計を計算する|
    |np.prod|np.nanprod|要素の積を計算する|
    |np.mean|np.nanmean|要素の平均値を計算する|
    |np.std|np.nanstd|要素の標準偏差を計算する|
    |np.var|np.nanvar|要素の分散を計算する|
    |np.min|np.nanmin|最小値を見つける|
    |np.max|np.nanmax|最大値を見つける|
    |np.argmin|np.nanargmin|最小値のインデクスを返す|
    |np.argmax|np.nanargmax|最大値のインデクスを返す|
    |np.median|np.nanmedian|要素の中央値を計算する|
    |np.percentile|np.nanpercentile|パーセンタイルを計算する|
    |np.any|N/A|いずれかの要素がtrueであるかを評価する|
    |np.all|N/A|すべての要素がtrueであるかを評価する|

    ※arr.sum()のように配列に`.`をつけることで計算もできる

    
- **ufuncの特殊な機能**
    |概要|書き方|説明|
    | --- | --- | --- |
    |書き込み|np.power(2, arr, out=arr2)|powerの出力結果を`out=`で指定した配列arr2に直接書き込む。`arr2 = np.power(2, arr)`と等価だが、一時的な配列を作成しなくてすむため、非常に大きな配列などの場合にはメモリの節約につながる|
    |reduceメソッド|np.multiply.reduce(x)|任意のnumpy関数に対して`.reduce(x)`のようにすることで要素が1つになるまで演算を行う。ここではすべての要素の積を計算している。|
    |accumelateメソッド|np.multiply.accumelate(x)|reduceの中間バージョン)|
    |outerメソッド|np.multiply.outer(x, x)|2つの入力のすべての要素間で任意の計算が行える。ここではすべての要素間での積（外積）を求めている。|
    
    ※異なるサイズと形状の配列間で操作を可能とする**ブロードキャスト**機能と呼ばれるものもある


※その他にも`scipy.special`でガンマ関数や誤差関数などが実装されていたりもするので難しい計算などは検索してみること！

<br><br>


### ブロードキャスト

ブロードキャストとは異なるサイズの配列に対して二項ufunc（加算、減算、乗算など）を適用するための一連のルールである。

#### 1. ブロードキャストの基礎

1. 同じサイズの配列に対しての二項演算は要素ごとに実行される

1. ブロードキャストでは次のルールに従って行われる
    1. ２つの配列の次元数が異なる場合、次元数の少ない方の形状は、先頭の（左側）に１を補い次元数を揃える。

    1. ２つの配列の形状がいずれの次元でも一致しない場合、各次元のうち長さが１に等しい次元は、他方の配列形状と一致するように引き伸ばされる。

    1. いずれかの次元でサイズが不一致で、長さが１に等しくもない場合は、エラーとなる。



<br>



