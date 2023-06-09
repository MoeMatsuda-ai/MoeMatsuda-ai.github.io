---
tags: ["python"]
title: "List"
date: 2022-11-22T08:09:47Z
draft: true
---

## データの集合を扱うためのデータ型

以下は標準で用意されているもの。

| 名前       |    例                       |                                                      |
|:-------------|:--------------------|:--------------------------------|
| **リスト(list)**   | ``L=["kiwi", "banana", 100 ]``  | **インデックス番号付き集合**               |
| タプル(tuple)| ``T=("kiwi", "banana", 100 )``      |インデックス番号付き集合(代入不可)       |
| 辞書(dict)  | ``D={"kiwi":3, "banana":2, "apple":3}`` | インデックス番号無し (key,value) 対応表 |
| 集合(set)   | ``S={"kiwi", "banana", "apple"}``     | インデックス番号無し集合                |

以下は拡張モジュールを利用するもの。

| 名前       |   例           |         |
|---|---|---|
| numpy.ndarray   | ``N=np.array([1,2,3])``  | 数値計算用の多次元配列 |
| pandas.Series | ``s=pd.Series([280,198],index=['tomato','banana'])``      | 行に名前がある1次元配列       |
| pandas.DataFrame | ``df=pd.DataFrame([['tomato',280],['banana', 198]], columns=['name','price'])`` | 列や行に名前がある2次元配列       |



<br><br>


### リストの定義の仕方

|定義の仕方|コマンド|printによる出力結果|
| --- | --- | --- |
|