---
title: "pythonの基本2"
date: 2022-11-22T08:07:24Z
draft: true
---

## Pythonの便利なモジュール


### **モジュール・パッケージ・ライブラリの違い**
1. ライブラリ 

    クラスや関数を記述したファイル(.py)
1. パッケージ 

    いくつかのモジュールを一つのディレクトリにまとめたもの
1. ライブラリ 

    いくつかのパッケージをまとめたもの。モジュールやパッケージをライブラリと呼ぶこともある

<br>


### pythonのライブラリ
1. Numpy

    - N次元配列(N-dimensional array, ndarray)でベクトルや行列などの数値計算を行うためのモジュール
    - C言語で記述されているため高速処理可能
    - Numpyモジュールで生成する配列の型名はnumpy.ndarray


1. pandas

    - データ解析を容易にするPythonのサードパーティライブラリ
    - データ構造に対して様々な処理を施す機能を提供しており、他のライブラリをバックエンドとして利用して連携して動作できることやデータに対する豊富な処理機能を備えているため、高度なデータ解析に有用なツール
    - NumpyのようにC言語による実装であるため，配列演算が高速で大規模データの扱いが容易

1. matplotlib

    - グラフなどのデータの可視化に用いるライブラリ
    - 出版に適したグラフを作るのに非常に適しており，IPythonとうまく統合されているためIPythonとmatplotlibはデータのグラフ化や探索を容易に行えるインタラクティブな環境を提供

1. IPython

    - インタラクティブで探索的な計算を行うことができ、ロバスト性と生産性を持つ環境を提供
    - Pythonのシェルを拡張したもので、Pythonのコードの記述、テスト、デバッグを加速するように設計されている。特に、インタラクティブなデータ操作とmatplotlibによるデータの可視化に非常に便利。
    - 標準的なターミナル操作形式のIPythonシェル以外にも、以下のものも提供
        - Webブラウザを通じてIPythonと接続することができる、mathematica風のHTMLノートブック
        - インラインのグラフ描画、複数行の編集、文法のハイライトが可能なQtフレームワークを用いたGUIコンソール
        - 並列・分散コンピューティングをインタラクティブに行える基盤

1. Scipy

    科学計算の計算における様々な一般的な問題に取り組めるパッケージ群。
    - scipy.integrate：数値積分ルーチンや微分方程式ソルバ
    - scipy.linalg：線形代数ルーチンやnumpy.linalgで提供されている機能を拡張した行列の分解機能
    - scipy.optimaze：関数の最適化（最短化）と求根アルゴリズム
    - scipy.signal：信号処理ツール
    - scipy.sparse：疎（スパース）なデータを持つ行列や線形システムの解法
    - scipy.special：ガンマ関数のような多数の一般的な数学の関数を実装したFortanのライブラリSPECFUNを使うためのラッパー
    - scipy.stats：標準的な連続分布や離散分布（密度関数、サンプラー、連続分布関数）、様々な統計検定、その他の記述統計
    - scipy.weave：配列計算の加速のために用いるインラインでのC++コードを利用するためのツール



<br><br>




### 標準モジュール
|モジュール名|記述法|概要|
| --- | --- | --- |
|print|print("出力1", "出力2", sep='sep', end='end')|引数を出力する。sepには値の間に挿入される文字列（デフォルトはsep=' '）、endには最後の値の後につかされる文字列（デフォルトはend='\n'）を指定|
|dir|dir(オブジェクト名)|オブジェクトのすべての属性（含まれる関数やメソッド等）を表示|
|type|type(オブジェクト名)|どのような型のオブジェクトであるかを確認できる。|
|sum|sum(リスト)|リスト要素の数値の合計を返却する|
|input|input("文字列")|文字列を出力し、キーボードからの入力を返却する|
|max|max(x,y,z,key=function)|x,y,zの中で最も大きい値を返却する。`key'に任意の関数f(x)を渡すと `argmax f(x)'を計算する（関数f(x), f(y), f(z) の計算結果が最大となる変数を返す)



<br>

### Jupyter notebook
|コマンド|記述法|概要|
| --- | --- | --- |
|%timeit|%timeit function()|指定した関数の実行時間を計算|


<br>

### NumPyライブラリ
|モジュール名|記述法|import|概要|
| --- | --- | --- | --- |
|arange|np.arange(0, 20+step, step)|numpy|0以上20+step未満の数値をstep刻みで生成|
|sin|np.sin(time)|numpy|timeの各要素に対するsin関数の値をリスト化|
|mean|np.mean(L)|numpy|Lの平均値を計算|
|std|np.std(L)|numpy|Lの標準偏差を計算|




<br>

##### PyPlot インターフェース
|記述法|import|用途|
| --- | --- | --- |
|plt.figure(figsize=(8.4))| matplotlib.pyplot |figureオブジェクトの生成、figsuzeは省略可能|
|plt.plot(x, y, label="y=x")| matplotlib.pyplot |x軸y軸データを指定しプロット。labelは省略可能|
|plt.xlabel("time[s]")| matplotlib.pyplot |pltにx軸ラベルを追加|
|plt.legend(loc="upper right")| matplotlib.pyplot |plt似凡例(plot()の引数に指定したlabel)を追加|
|plt.show| matplotlib.pyplot |グラフオブジェクトpltの描画|

<br>

##### オブジェクト指向インターフェース
|記述法|import|用途|
| --- | --- | --- |
|ax1 = fig.add_subplot(211)| --- |figの中に座標(Axes)オブジェクト生成。2行1列に配置した1番目とするオブジェクトの生成が1つだけの場合は`ax`とする。|
|ax1.plot(time, sint, label="sin t")| --- |ax1にsin関数の折れ線グラフ(Primitives)登録(labelは省略可)|
|ax1.legend(loc="upper right")| --- | plot()で指定したlabelを右上に配置|
|ax1.set_xlabel("t [s]")| --- |x軸ラベルの挿入|
|ax1.grid(True)| --- |格子を描く|
|ax1.set_xlim(0, 20)| --- |描画範囲の指定|
|plt.tight_layout()| --- |タイトルやラベルが重ならないように配置調整し、Figureオブジェクトを描画|
|plt.savefig('triangular.png')| --- |グラフを保存したい場合。拡張子に応じてpng,jpg,pdf等の出力可能|
|plt.show()| --- |画像の出力。Jupyter Notebookの場合は省略可能|

<br>

### Pandasライブラリ
|モジュール名|記述法|概要|
| --- | --- | --- |
|timeit|%timeit df.at['y', 'b']|df.at['x', 'a']の実行速度を出力|
|idxmin()|df.idxmin()|最小値を持つ場所を示すインデックスを返す|
|idxmax()|df.idxmax()|最大値を持つ場所を示すインデックスを返す|
|agg|df.groupby(['country']).price.agg([len, min, max])|列ごとに異なる関数を使って集約したい場合や複数の関数を同時に使って集約できる。len, min, maxの３つの記述統計量について集約を行っている|


## 便利な関数

|関数名|実行例|実行結果|概要|
| --- | --- | --- | --- |
|type()|print(type(x))|<class 'int'>|xの型名を返却する|
|-|-|-|-|
|-|-|-|-|
|-|-|-|-|
|-|-|-|-|

※mathモジュール、randomモジュールに関しては下記参照

<br><br>



## 便利な書き方
- 実行例
    print(type(x) is bool)
    print(type(x) is not bool)
- 実行結果
    False
    True

- 実行例

<br><br>




## モジュールのいろいろな読み込み方法, p.81
```python
import <module>
import <module> as <alias> ## モジュールに省略名をつける。最もよく使われる(多分)
from <module> import <function> ## 関数呼び出し時にモジュール名不要にする (多用しないこと。同名関数が異なるモジュールにあるときトラブルのもと)
```
例)
```python
import math
print(math.cos(0))
import math as ma
print(ma.cos(0))
from math import cos
print(cos(0))
```


## math モジュール p.78

mathモジュールを読み込むと，いろいろな数学関数や定数を使える(一覧p.80-81)

次のセルは，math モジュールの読み込みと関数実行の例。

```python
import math ## mathモジュールの読み込み
x=math.pi/2
math.sin(x)
```
- 実行結果
    1.0


<br><br>


## モジュール内の関数呼び出し

モジュール名に続けて関数名を書く。`math`モジュールにある`sin()`関数ならば次のように書く。

```python
math.sin()
```
マニュアル等での表記も同様に書くのが一般。



<br><br>

## mathモジュールの関数や定数

- 数学関数の例
    - `math.sin()`
    - `math.cos()`
    - `math.log()`
- 定数の例
    - `math.pi`
    - `math.e`
    
ライブラリやモジュール, 関数についての詳細を知りたいときには以下のように`help()`を使う
```python
help(math)
help(math.sin)
```


**注意:**
jupyter notebook上で一度`import`したライブラリやモジュールは他のセルでも使える。複数のセルで同じモジュールを何度も`import`する必要はない。




## random モジュール p.82
関数例
- `random.randint(min,max)`   ## randomモジュールの`randint()`関数
- `random.random()`

実行例
```python
import random
x=random.random()
print(x)
```

- ramdint(a,b)：a以上b以下の値をランダムに生成
- random()：0以上1未満の値をランダムに生成





