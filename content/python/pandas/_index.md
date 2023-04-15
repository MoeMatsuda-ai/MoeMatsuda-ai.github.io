---
title: "Pandas"
date: 2022-11-22T08:11:35Z
draft: true
---


## Pandasの概要

- データ解析を容易にするライブラリ
- データ解析などに有用なツール
- NumpyのようにC言語で実装されており，配列演算の高速化が図られているため大規模データの扱いが容易

<br>

#### PyDataとは？

- Pythonによるデータ管理/分析ツールのユーザと開発者のコミュニティ
- PyDataで話題とされるPythonツール群を総称して**PyData Stack**などと呼ぶ。

<br>

#### Pandasでできること

さまざまな形式で保存されたデータを読み込み、データを分析・処理したり
可視化，保存したりできる

- データを入出力する機能(CSV, Excel, RDB/*Relational DataBase*, HDF5など)
- データを効率的かつ高速に処理できる形式でデータを格納
- データのNaN（*Not a Number*、欠損値）処理
- データの一部取り出しや結合
- データの柔軟な変更やピボット(pivot)を処理
- データに対する統計処理や回帰処理等
- データの集約とグループ演算

<br><br>

## Pandasのデータ型
pandasのデータ構造には以下の3つがある
- Series: 1次元配列
- DataFrame: 2次元配列
- ~~panel: 3次元配列~~ ←　廃止済み

それぞれのデータの位置や属性を**行ラベル**、**列ラベル**、**アイテム名**で表現

<br>

#### 1. Series

- 1次元データ保存用のデータ構造
- 格納するデータに制限はなく、すべての要素が同じデータ型である必要もない
    ```python
    dat = pd.Serie([1, 3, 6, 12])
    dat = pd.Series(np.array([1, 3, np.nan, 12]))
    dat = pd.Series([1, 'aa', 2.34, 'd'])
    ```
- 行ラベルを指定しなかった場合には行ラベルは自動的に0から割り振られるが，生成時に引数としてindexを指定したり辞書型を渡すことで表ラベルを指定することも可能
    ```python
    dat = pd.Series([1, 3, 5, 12], index=['a', 'b', 'c', 'a'])
    dat = pd.Series({'a':1, 'b':3, 'c':6, 'd':12})
    ```
- 行ラベルはindexという属性で割り当てられている
    ```python
    dat.index = ['un', 'due', 'trois', 'quatre']
    print(dat8.index)
    ```
- シリーズ形式では辞書型と違いデータに順番があり、0からカウントアップする順序インデックスが割り当てられている（c言語の配列の添字みたいなもの）．
    そのため**iloc**プロパティで順序インデックスを使用することでデータを取り出すこともできる。
    ```python
    dat.iloc[3]
    ```

<br>

#### 2. DataFrame

- DataFrameは2次元のラベル付きデータ構造
- Numpyからは2次元のndarrayをそのまま入力することが可能
- 行ラベル(index)と列ラベル(culmn)を同時に指定することができ、行ラベルは`index`、列ラベルは`culmn`属性で参照/変更できる
    ```python
    fruit_dat = {'都道府県':['山梨', '福島', '長野'], '果物':['モモ', 'りんご', 'バナナ']}
    d = pd.DataFrame(fruit_dat)#辞書型からデータフレームに変換
    d.columns
    print(Index(['a_果物', 'b_収穫量順位', 'c_都道府県'], dtype='object'))
    ```
    **ただしデータの列の順序は、列ラベルによって自動的にソートされて順序が変わるため注意が必要**
- データフレームに格納する際に順序を変えないようにするにはcolumns引数によって列の順序を指定
    ```python
    d = pd.DataFrame(fruit_dat, columns = ['a_果物', 'c_都道府県', 'd_収穫量順位'])
    ```
- シリーズを要素に持つ辞書型やリストからデータフレームを生成することも可能（データフレーム生成時に指定できるデータの方法は下記参照）
    |データ型|概要説明|
    | --- | --- |
    |辞書型|辞書型の値としてリスト/タプル/シーケンスデータ/シリーズ/辞書型を値に持つもの|
    |リスト|辞書型、シリーズ、リストまたはタプルのリスト|
    |別のデータフレーム|データフレームの浅いコピーが生成される|
    |Numpyの2次元ndarrayもしくはMaskedArray|データフレームの場合は2次元なので、2次元配列を受け付ける|


###### **階層化インデックス**について

3次元以上のデータを2次元データ形式のデータフレームで扱うためには行ラベルや列ラベルを複数階層のデータにする必要がある。
そのために必要なのが**階層型インデックス**。
```python
df = pd.DataFrame(np.random.rand(4, 4), index = [['x', 'x', 'y', 'y'], [0, 1, 0, 1]], columns = ['Time_a', 'Time_b', 'Vel_a', 'Vel_b'])
a = df.xs(0, level=1, axis=0) #データフレームのdxメソッドを使って、特定のラベル値のデータを抜き出す
a
>      Time_a    Time_b     Vel_a     vel_b
> x  0.257451  0.764270  0.050375  0.620498
> y  0.980562  0.477471  0.342239  0.549118
```
この例ではランダムに生成した4×4の行列データに対して2次元リストによる行ラベル(index)指定により、
xとyで区別される階層と0と1で区別される階層の2階層の行ラベルがつけられている。また2行目では表ラベル(axis=0)が0の2層目(level=1)が0のデータを抽出している。

あとから階層型インデックスに変換する場合には次のように列ラベルを`_`で分割して多階層化する。
```python
df.columns = pd.MultiIndex.from_tuples([tuple(c.split('_')) for c in df.columns])
```

<br>

#### 3. Panel (現在は廃止済み)

- 3次元データの格納用に用意されたデータ構造
- indexは`major_axis`, columnは`minor_axis`という属性で割り当てられている
    ```python
    pp2 = pd.Pane(np.random/randn(2, 4, 3), items=['Item1', 'Item2'], major_axis=pd.data_range('2/1/2016', periods=4), minor_axis=['one', 'two', 'three'])
    print(pp2.major_axis)
    print(pp2.Item1.index)
    ```
- DataFrameに対して`items`という属性が1つ増えている
    ```python
    ## キーの準備（キー：アイテム名、値：データフレーム）
    data = {'Iyrm1': pd.DataFrame(np.random.randn(3, 2)), 'Item2' : pd.DataFrame(np.random.randn(3, 2))}
    pp1 = pd.Panel(data)
    pp1
    ``` 
    - ここではアイテム名として`Item1`, `Item2`を指定
    - `pp1.Item1`などのように記述することでそのアイテム名に対応するデータフレームにアクセスできる

**ただし上記のプログラムの下2行は等価であり、同じ値を出力!**



## API(Spplicatopm Programming Interfave)とは？

**API**とはデータ処理/解析向けに実装されている様々な機能にアクセスする窓口となっている関数や
メソッドのこと。

Pandasの機能はPandas固有のデータ型ので意義が中心にあり、それにアクセスするための機能として、
pandasの関数とデータ型のメソッドの2種類のAPIがある。

外部ライブラリでは、Numexprやbottleneck(ndarray用の高速関数実装), Cythonが高速化のために使用され、
MatplotlibやXlsxWriter(Excelへの書き込み機能を提供するライブラリ)などは拡張機能として利用できる。

また、Pandasの機能にはixやlocなどの**プロパティ**も若干含まれている。これらは属性に直接アクセスしないで何らかの処理を経由して属性にアクセスする仕組みであり、インスタンスの属性を取り出したり設定したりするのに用いられる。

<br>

### プロパティを使用したデータフレームのインデックス参照

下記のようなインデックス参照では、値を**参照**することも、その参照ポイントに値を**設定**することも可能。


|プロパティ|概要|
| --- | --- |
|at| 行ラベルと列ラベルによりスカラー値（1つのデータ）への参照を得る。`loc`より高速|
|iat|行番号と列番号によりスカラー値（1つのデータ）への参照を得る。`loc`より高速|
|loc|行ラベルと列ラベルによりベクトル（複数データ）またはスカラー値（1つのデータ）への参照を得る。|
|iloc|行番号と列番号によりベクトル（複数データ）またはスカラー値への参照を得る|
|ix|通常はlocのように機能するが、ラベルが指定されていない場合はilocのように機能する。|

|参照方法|説明|
| --- | --- |
|df.at['y', 'b']|y行かつb列の値|
|df.loc['y', 'b']|y行かつb列の値|
|df.loc['x':'y', 'b']|「「x行からy行(y行含む)」かつ「b列」の値|
|df.loc[:'y', :]|「最初の行からy行（y行含む）」かつ「b列」の値」|
|df.iat[0, 1]|0行1列の値|
|df.iloc[1, 1]|1行1列の値|
|df.iloc[0:2, -2:]|0〜１行かつ最後の２列の値|
|df.iloc[:1, :]|0行全列|
|df.ix['x', ['a', 'd']]|「x行」かつ「a列またはd列」|
|df.ix['x']|x行を取り出し（結果はシリーズ）|
|df.ix['x']['a']|x行かつa列|
|df.ix[:, 'a']|a列を取り出し（結果はシリーズ）|
|df.ix[df.d > 6, :2]|「d列が６より大の行」かつ「最初の２列」|

**同じデータを参照する方法は複数あるが、使っているOSやpandasの実装の改善等によって処理速度に差がある場合がある。そのような場合は`%timeit`マジックコマンドを使えば、簡単に調べることができる。**

<br>

### データフレームに対する直接インデックス参照

|参照方法|説明|
| --- | --- |
|df['a']|列ラベルaの列|
|df[['a', 'c']|列ラベルaよc|
|df[:2]|０行目と１行目|
|df[df['d'] > 6]|列ラベルdの列の値が６より大の行の行全体|

<br>

### 基本的な演算規則

シリーズやデータフレームなどに対する四則演算は、加減乗除の記号によって実現する方法とメソッドを使う方法の２種類がある。

1. 加減乗除
    要素ごとに演算を行う
    ```python
    ser_a1 = ser1 + ser2
    ```

3. メソッド
    インスタンスデータが変更されるものではないため、何らかの変数に格納する必要がある。
    ```python
    ser_a2 = ser1.add(ser2)
    ```

    **NaN**を含む式の計算はすべて**NaN**となるが、メソッドを使用した計算ではNaNを特定の
    値に置き換えて計算できるという利点がある。


## Pandasの使い方

<br><br>

### DataFlame

##### DataFlameの定義

1.  ```python
    pd.DataFrame({'Yes': [50, 21], 'No': [131, 2]})
    ```

    |  | Yes | No |
    | --- | --- | --- |
    | 0 | 50 | 131 |
    | 1 | 21 | 2 |

1. ```python
    pd.DataFrame({'Bob': ['I liked it.', 'It was awful.'], 'Sue': ['Pretty good.', 'Bland.']})
    ```

1.  ```python
    fruits = pd.DataFrame([[30, 21]], columns=['Apples', 'Bananas'])
    ```
<br>

##### index化

```python
fruit_sales = pd.DataFrame([[35, 21], [41, 34]], columns=['Apples', 'Bananas'],index=['2017 Sales', '2018 Sales'])
```
    
    
<br><br>

### Series

##### Seriesの定義

1. ```python
    pd.Series([1, 2, 3, 4, 5])
    ```


##### index化

1. ```python
    pd.Series([30, 35, 40], index=['2015 Sales', '2016 Sales', '2017 Sales'], name='Product A')
    ```


1. ```python
    quantities = ['4 cups', '1 cup', '2 large', '1 can']
    items = ['Flour', 'Milk', 'Eggs', 'Spam']
    recipe = pd.Series(quantities, index=items, name='Dinner')
    ```

<br><br>

### csvファイルへの入出力
    

```python
animals.to_csv("cows_and_goats.csv")
```

```python
reviews = pd.read_csv('../input/wine-reviews/winemag-data_first150k.csv', index_col=0)
```
※`index_col=0`で0列目を`index`に指定している。

<br>

##### **UnicodeDecodeError: 'utf-8' codec can't decode byte 0x92 in position 0: invalid start byte** というエラーが出る

【解決法】

1. **shift-jisの場合
    ```python
    import pandas as pd
    df = pd.read_csv("filename.csv", encoding="shift-jis")
    ```

1. windowsで作成されたファイルは以下の場合も

    ```python
    import pandas as pd
    df = pd.read_csv("filename.csv", encoding="cp932")
    ```

【参考】[エラー解決：pandas.read_csvで日本語を含んだcsvを読み込めない](https://paper.hatenadiary.jp/entry/2016/10/05/140013#%E8%A7%A3%E6%B1%BA%E6%B3%95%EF%BC%91%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E6%8C%87%E5%AE%9A)



## Pandasでのindexing

### indexによるデータへのアクセス

1. `attribute` や `operator []` によるアクセス

    `reviews`データが次のような値を持つとすると、

     	| --- |country|description|designation|
        | --- | --- | --- | --- |
        |0| Italy| 	Aromas include tropical fruit, broom, brimston... 	|Vulkà Bianco 	|
        |1| Portugal| 	This is ripe and fruity, a wine that is smooth...| 	Avidagos 	|
        |...| 	...| 	... |...|
        |129969| 	France| 	A dry style of Pinot Gris, this is crisp with ... 	|NaN 	|
        |129970| 	France| 	Big, rich and off-dry, this is powered by inte... 	|Lieu-dit Harth Cuvée Caroline 	|

    `reviews`の`country`プロパティへは以下のいずれかの方法でアクセスする

    ```python
    reviews.country
    reviews['country']
    ```
    ※ただし`[ ]`であれば`+, -, 空白` などの予約文字も扱え、以下のようにもう一度`[]`を使うだけでドリルダウンできる（下記の出力は`Italy`）

    ```python
    reviews['country'][0]
    ```

    <br><br>


1. `loc`や`iloc`によるアクセス

    

### 例文
1. 
    ```
    desc = reviews.description

    or

    desc = reviews["description"]

    desc is a pandas Series object, with an index matching the reviews DataFrame. In general, when we select a single column from a DataFrame, we'll get a Series.

    ```

1. 
    ```
    Solution:

    first_description = reviews.description.iloc[0]

    Note that while this is the preferred way to obtain the entry in the DataFrame, many other options will return a valid result, such as reviews.description.loc[0], reviews.description[0], and more!
    ```

1. 
    ```
    first_row = reviews.iloc[0]
    ```

1. 
    ```
    first_descriptions = reviews.description.iloc[:10]

    Note that many other options will return a valid result, such as desc.head(10) and reviews.loc[:9, "description"]. 
    ```

1. 
    ```
    indices = [1, 2, 3, 5, 8]
    sample_reviews = reviews.loc[indices]
    ```

1. 
    ```
    cols = ['country', 'province', 'region_1', 'region_2']
    indices = [0, 1, 10, 100]
    df = reviews.loc[indices, cols]
    ```

    1. 
    ```
    cols = ['country', 'variety']
    df = reviews.loc[:99, cols]

    or

    cols_idx = [0, 11]
    df = reviews.iloc[:100, cols_idx]
    ```

1. 
    ```
    italian_wines = reviews[reviews.country == 'Italy']
    ```

1. 
    ```
    top_oceania_wines = reviews.loc[
        (reviews.country.isin(['Australia', 'New Zealand']))
        & (reviews.points >= 95)
    ]
    ```


## Pandas 「Summary Functions and Maps」

1. Numpyで要約統計量の取得
    
    ```python
    median_points = reviews.points.median()
    ```

1. 
    ```python
    countries = reviews.country.unique()
    ```

1. 
    ```python
    reviews_per_country = reviews.country.value_counts()
    ```

1. 
    ```python
    centered_price = reviews.price - reviews.price.mean()
    ```
    
1. 
    ```python
    bargain_idx = (reviews.points / reviews.price).idxmax()
    bargain_wine = reviews.loc[bargain_idx, 'title']
    ```

1. 
    ```python
    n_trop = reviews.description.map(lambda desc: "tropical" in desc).sum()
    n_fruity = reviews.description.map(lambda desc: "fruity" in desc).sum()
    descriptor_counts = pd.Series([n_trop, n_fruity], index=['tropical', 'fruity'])
    ```

1. 
    ```python
    def stars(row):
    if row.country == 'Canada':
        return 3
    elif row.points >= 95:
        return 3
    elif row.points >= 85:
        return 2
    else:
        return 1

    star_ratings = reviews.apply(stars, axis='columns')
    ```



## Groutping and Sorting

### Groupwise amalysis

次のような`groupby()`関数を用いることで指定した列の同じ値を持つデータをグループ化し、
同じ操作を行うことができる。


1. point列の同じ値を持つものをグループ化し、その値が何回出現したかをカウントする。出力はpointの値と出現回数の
以下どちらの方法でもOK！

-   ```python
    reviews.groupby('points').points.count()
    ```
    `point`の値の小さい順で出力
    【出力結果】
    ```
    points
    80     397
    81     692
        ... 
    99      33
    100     19
    Name: points, Length: 21, dtype: int64
    ```

- ```python
    reviews.value_counts('points')
    ```
    出現回数の大きい順で出力

1. point列の同じ値を持つものをグループ化し、その`price`列の最小値を配列Seriesに格納
    ```python
    reviews.groupby('points').price.min()
    ```
    【出力結果】
    ```
    points
    80      5.0
    81      5.0
        ... 
    99     44.0
    100    80.0
    Name: price, Length: 21, dtype: float64
    ```

1. `title`列に同じ値を持つものをグループ化し、そのグループ内で最も行数が少ない要素の`title`列の値を出力
    ```python
    reviews.groupby('winery').apply(lambda df: df.title.iloc[0])
    ```


### その他
1. ```python
    reviews_written = reviews.groupby('taster_twitter_handle').size()
    reviews_written = reviews.groupby('taster_twitter_handle').taster_twitter_handle.count()
    ```

1. ```python
    best_rating_per_price = reviews.groupby('price')['points'].max().sort_index()
    ```

1. ```python
    price_extremes = reviews.groupby('variety').price.agg([min, max])
    ```

1. ```python
    sorted_varieties = price_extremes.sort_values(by=['min', 'max'], ascending=False)
    ```

1. ```python
    reviewer_mean_ratings = reviews.groupby('taster_name').points.mean()
    ```

1. ```python
    country_variety_counts = reviews.value_counts(['country', 'variety'])
    ```

    または
    
    ```python
    country_variety_counts = reviews.groupby(['country', 'variety']).variety.count().sort_values(ascending=False)
    ```
    ※`count()`モジュールは`size()`モジュールでもOK!


<br><br>


#### 参考文献
- https://qiita.com/propella/items/a9a32b878c77222630ae
- https://note.nkmk.me/python-pandas-map-applymap-apply/
- https://ejje.weblio.jp/content/fit
- https://note.nkmk.me/python-pandas-at-iat-loc-iloc/


## Data Types and Missing Values

1. ```python
    dtype = reviews.points.dtype
    ```

1. ```python
    point_strings = reviews.points.astype(str)
    ```

1. ```python
    missing_price_reviews = reviews[reviews.price.isnull()]
    n_missing_prices = len(missing_price_reviews)
    ```
    または
    ```python
    ## Cute alternative solution: if we sum a boolean series, True is treated as 1 and False as 0
    n_missing_prices = reviews.price.isnull().sum()
    ```
    または
    ```python
    ## or equivalently:
    n_missing_prices = pd.isnull(reviews.price).sum()
    ```

1. ```python
    reviews_per_region = reviews.fillna("unknown").groupby('region_1').region_1.count().sort_values(ascending=False)
    ```
    または
    ```python
    reviews_per_region = reviews.region_1.fillna('Unknown').value_counts().sort_values(ascending=False)
    ```



## Renaming and Combining

1. ```python
    renamed = reviews.rename(columns={'region_1':'region', 'region_2':'locale'})
    ```
    または
    ```python
    renamed = reviews.rename(columns=dict(region_1='region', region_2='locale'))
    ```

1. ```python
    reindexed = reviews.rename_axis('wines', axis='rows')
    ```
    
1. ```python
    combined_products = pd.concat([gaming_products, movie_products])
    ```

1. ```python
    powerlifting_combined = powerlifting_meets.set_index('MeetID').join(powerlifting_competitors.set_index('MeetID'))
    ```
    または
    ```python
    powerlifting_combined = powerlifting_meets.set_index("MeetID").join(powerlifting_competitors.set_index("MeetID"))
    ```


## Pandasの便利なfunction

### "shape" attribute

```python
wine_reviews.shape
```

【出力】
```
(129971, 14)
```

- DataFrameがどれくらいの大きさを持つかを出力する関数
- 14の異なる列に分割された130,000のレコードを持つ
- 約2,000万個のエントリを持つ



### "head()" command

```python
wine_reviews.head()
```

- 先頭から5行を表示するコマンド


### 差分を計算

```python
df_re = df.diff()
```
【出力結果】
```
     a    b     c
0  NaN  NaN   NaN
1  1.0  3.0   7.0
2  1.0  5.0  19.0
3  1.0  7.0  37.0
4  1.0  9.0  61.0
```


【引数】
|パラメータ|概要|
| --- | --- |
|periods|指定した行数分だけ前（もしくは後）の要素との差を求める<br> ※負の値も指定可能（付の値では後ろの要素が`NaN`の値をとる）|
|axis|`axis=1`と指定すると列ごとの差分を算出（デフォルトは`0`）|

【参考】
- [pandasで行・列の差分・変化率を取得するdiff, pct_change](https://note.nkmk.me/python-pandas-diff-pct-change/)



### index の割当
1. indexの初期化

    ```python
    df_i = df.reset_index()
    ```
    ※ノーマルではindexの値が新しい列として挿入される
    ※（）内に'drop=False'と記述するとデータ部はそのままでindexだけ変更できる

1. DataFrameの列をindexに指定
    ```python
    df_i = df.set_index('name')
    ```
    ※ `name` という列を index として指定

    【引数】
    |引数|コマンド|概要|
    | --- | --- | --- |
    |drop|`drop = False`|指定列がデータ列にも残る<br>デフォルトではindexに指定されたデータ列は消える(`drop = True`)|

【参考】
- [pandas.DataFrame, Seriesのインデックスを振り直すreset_index](https://note.nkmk.me/python-pandas-reset-index/)
- [pandas.DataFrameの列をインデックス（行名）に割り当てるset_index](https://note.nkmk.me/python-pandas-set-index/)

<br>



### カラム名の変更

```python
arra.columns = ['A', 'B']
```

【参考】
- [pandas.DataFrameの行名・列名の変更](https://note.nkmk.me/python-pandas-dataframe-rename/)



### DataFrameやSeriesの文字列や空白を削除

|概要|コマンド|
| --- | --- |
|文字列の置換| `.str.replace('置換前', '置換後')`|
|空白の削除(左右)|`.str.strip()`|
|空白の削除（左）|`.str.lstrip()`|
|空白の削除(右)|`.str.rstrip()`|

### 型変換と型判定

|概要|コマンド|
|---|---|
|if文で型を判定(出力は`True` or `false`|`if type(a) == int:`|
|str型とfloatまたはint型の変換|`.astype(変更後の型名(int or float or str))` <br> ※strからintへは直接変換できないため一度float型に変換する|
|各要素ごとに型の確認（配列として出力される）|`.dtype()`|

【参考】
- [Pythonでtype関数を利用して型判定する方法を現役エンジニアが解説【初心者向け】](https://techacademy.jp/magazine/34202)

<br>





### DataFrame または Series で特定の文字列を検索

|概要|コマンド|
| --- | --- |
|完全一致(==) <br> 要素が文字列に完全一致するとTrueとなるpandas.Seriesを取得できる。| ``変数名[変数名['列名'] == '検索する文字列']`` |

【参考】
- [pandasで特定の文字列を含む行を抽出（完全一致、部分一致）](https://note.nkmk.me/python-pandas-str-contains-match/)


<br>




### Series や DataFrame の結合

- **concat 関数**

下記のように記述することで DataFrame `s1` と`s2` が結合できる(結合したDataFrameが返却値)
```python
arr = pd.concat([s1, s2])
```

【引数】
|引数|引数の指定方法|概要|
| --- | --- | --- |
|axis|axis=0|縦方向に（行で）連結|
|axis|axis=1|横方向（列で）連結|
|join| よくわかってない... →　後で調べて|内部結合・外部結合を指定|


- **merge 関数**
    また調べて...

【参考】
- [pandas.DataFrame, Seriesを連結するconcat](https://note.nkmk.me/python-pandas-concat/)
- [pandasの使い方（merge、join、concat編）](https://pppurple.hatenablog.com/entry/2016/06/27/022310#concat%E9%96%A2%E6%95%B0)



### pandasで要素・行・列荷関数を適用

|対象|関数|概要|
| --- | --- | --- |
|Series|`map`|Series の各要素に関数を適用|
|Series, DataFrame| `apply` | Series の各要素に関数を適用（デフォルトは`axis=0`で各列に対する処理、`axis=0`で各行に対する処理も可能）|
|DataFrame|`applymap`|DataFrameの各要素に関数を適用|

```python
fx = lambda x: x * 2 / a
```


【参考】
- [pandasで要素、行、列に関数を適用するmap, applymap, apply](https://note.nkmk.me/python-pandas-map-applymap-apply/)

<br>



### pandas.DataFrameの行や列を削除
- [pandas.DataFrameの行・列を指定して削除するdrop](https://note.nkmk.me/python-pandas-drop/)
        
【参考】
- [pandasの文字列メソッドで置換や空白削除などの処理を行う](https://note.nkmk.me/python-pandas-str-replace-strip-etc/)


<br><br>







【参考】
- [pandasの文字列メソッドで置換や空白削除などの処理を行う](https://note.nkmk.me/python-pandas-str-replace-strip-etc/)
- [pandasで文字列と数値を相互変換、書式変更](https://note.nkmk.me/python-pandas-str-num-conversion/)
- [pandasで特定の文字列を含む行を抽出（完全一致、部分一致）](https://note.nkmk.me/python-pandas-str-contains-match/)
- [Pythonでtype関数を利用して型判定する方法を現役エンジニアが解説【初心者向け】](https://techacademy.jp/magazine/34202)
- [pandasの使い方（merge、join、concat編）](https://pppurple.hatenablog.com/entry/2016/06/27/022310#concat%E9%96%A2%E6%95%B0)
- [pandas.DataFrame, Seriesを連結するconcat](https://note.nkmk.me/python-pandas-concat/)
- [pandas.DataFrameの列をインデックス（行名）に割り当てるset_index](https://note.nkmk.me/python-pandas-set-index/)
- [pandas.DataFrame, Seriesのインデックスを振り直すreset_index](https://note.nkmk.me/python-pandas-reset-index/)
- [pandas.DataFrameの行名・列名の変更](https://note.nkmk.me/python-pandas-dataframe-rename/)
- [pandasで要素、行、列に関数を適用するmap, applymap, apply](https://note.nkmk.me/python-pandas-map-applymap-apply/)
- [pandasで行・列の差分・変化率を取得するdiff, pct_change](https://note.nkmk.me/python-pandas-diff-pct-change/)
- [pandas.DataFrameに列や行を追加（assign, appendなど）](https://note.nkmk.me/python-pandas-assign-append/)


