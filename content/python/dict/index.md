---
tags: ["python"]
title: "Dict"
date: 2022-11-22T08:08:52Z
draft: true
---


## 1. 辞書(dict)の特徴


| 名前       |    例                       |                                                      |
|:-------------|:----------------------------|:------------------------------------------------------|
| リスト(list)   | ``L=["kiwi", "banana", "apple"]``  | インデックス番号付き集合               |
| タプル(tuple)| ``T=("kiwi", "banana", "apple")``      |インデックス番号付き集合(代入不可)       |
| **辞書(dict)**  | ``D={"kiwi":3, "banana":2, "apple":3}`` | **インデックス番号無し (key,value) 対応表** |
| 集合(set)   | ``S={"kiwi", "banana", "apple"}``     | インデックス番号無し集合                |



- **書式:** `dict_name={key 1: value 1, key 2: value 2, ...}`
- 辞書(`dict`)には，検索のための`key`と，検索キーに紐付けられる`value`のペアを登録する。
- 各要素に対するインデックスは存在しない。

**注意:** 
- **Python 3.5以前** ではdictに対する要素の登録順序と，実際に保存されている順序と異なることがある。(**順序非保存**)
- **Python 3.7以降** ではdictでも順序は保存(**順序保存**)
- Python 3.6では非公式に順序保存

<br><br>

## 2. dictの定義

```python
reward={"cheese" : 100 , # リストや辞書等では，折返し記号"\"なしで改行可
        "enemy" : -10, 
        "friend" : -1}

print(reward)
print(reward["friend"]) # 辞書の参照は dict[key]

Qvalue={(1,"right") : 0.5, 
        (1,"left") : 1.5, 
        (2,"right") : 0, 
        (2, "left") : -1} 

print(Qvalue)
print(Qvalue[(2,"right")])
```

##### 出力結果

```
{'cheese': 100, 'enemy': -10, 'friend': -1}
-1

{(1, 'right'): 0.5, (1, 'left'): 1.5, (2, 'right'): 0, (2, 'left'): -1}
0
```

<be><be>

## 3. 辞書の更新・追加

1. dict[key]の使用

`dict[key]=new_value`

- `key`が辞書`dict`に存在しない　→　`{key:new_value}`のペアを登録
- `key`が辞書`dict`に存在する　→　`key`に対応する`value`を`new_value`に変更

1. dict.setdefault()の使用

メソッド`dict.setdefault(key,value)`を使用する。

- `key`が辞書`dict`に存在しない場合　→　`{key:value}`ペアを登録する
- `key`が辞書`dict`に存在する場合　→　変化なし
- 返り値は`key`に対する`value`（上記の処理後に返却)


<br><br>

## 4. 辞書の参照の仕方

1. dict[key]
    - 直接辞書要素にアクセスする
    - 存在しないキーに対してアクセスするとエラーになる
1. dct.get(key)
    - 存在しないキーに対してもエラーにならず、`None`が返り値になる
1. dict.get(key,[default])
    - メソッド`dict.get()`は存在しないkeyにアクセスした場合に返す値(difault)を指定できる。
    - 注）`[]`で囲んだ引数は、省略可能なことを示す。

<br><br>


## 5. 辞書の値一覧の返却

- doct.keys()
    辞書に含まれるすべてのkeyの一覧を返却する

- dict.values()
    辞書に含まれるすべてのvalueの一覧を返却する

<br><br>


## 6. 関数とMutableな引数

- 引数が**Immutable(変更不可)**　→　呼び出した側の引数（実引数）は変化しない
    - int
    - float
    - str
    - tuple 型など…
- 引数が**Mutable(変更可)**　→　実引数も変化
    - list
    - dict
    - set 型など…


<br><br>