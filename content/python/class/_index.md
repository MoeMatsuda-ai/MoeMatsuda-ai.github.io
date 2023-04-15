---
title: "Class"
date: 2022-11-22T08:08:17Z
draft: true 
---


## クラス(class)
### 1. 用語(クラス, インスタンス，オブジェクト)
- **クラス**
    
    c言語でいう構造体のようなもの。クラス内で変数を定義することもできる。
    - int
    - float
    - list
    - tuple
    - dictなど

- **インスタンス (instance)**
    
    クラス(型)から生成されるデータのこと。インスタンス・オブジェクトともいう。
    - int（クラス）に対して，`1`, `2`, ..はインスタンス
    - list（クラス）に対して, `[1, 3]`はインスタンス

- **オブジェクト(object)**

    定義できるものは大体オブジェクト
    - クラス
    - インスタンス
    - メソッドなど

<br><br>


### 2. クラスの定義
#### キーワード
- **初期化メソッド**
    - 定義したクラスによりインスタンスを生成するときに実行される関数
- **インスタンス変数**
    - クラス内の様々なメソッド(関数)で使うことができる変数。クラス内でのみ使える大域変数のようなもの。
    - 大抵，初期化メソッドで生成・参照。
    - クラス内では，`self.name`のように`self.`をつけて参照 (具体例は次のセルの問に)
    - インスタンス化したオブジェクトからは`オブジェクト名.変数名` (`taro.name`など)で参照(具体例は次のセルの問に)
- **インスタンス・メソッド**
    - クラス内で第一引数に`self`を指定して定義する関数
    - クラス内では`self.関数名` で相互参照できる(引数からは`self`は省略)
    - インスタンス化したオブジェクトからは，`オブジェクト名.関数名` で参照(呼び出し時に第一引数`self`は省略)


#### 例
```python
class Name_list:
    def __init__(self, family="Momo", first="Taro"):  # 初期化メソッド(インスタンス生成時に実行)
        self.family = family  # インスタンス変数 family の生成
        self.first = first  # インスタンス変数には"self."をつける

    def print(self):  # インスタンス・メソッド(第一引数は必ずself)
        print("My name is {} {}.".format(self.first, self.family))  # インスタンス変数には"self."をつけて参照

momo = Name_list()  # インスタンスを生成し，変数momoに代入
dai = Name_list(family="Yamaguchi", first="Daisuki")  # インスタンスを生成し，変数daiに代入

momo.print()  # インスタンスmomoのメソッドprint()を実行
dai.print()  # インスタンスdaiのメソッドprint()を実行
print(momo.family)  # インスタンスmomoのインスタンス変数familyにアクセス
```

#### 実行結果
```
My name is Taro Momo.
My name is Daisuki Yamaguchi.
Momo
```

<br><br>

<div class="alert alert-success">

### 3. クラスの継承

</div>

```python
class Name_list:
    def __init__(self, family="Momo",first="Taro"):
        self.family = family
        self.first = first
    def print(self):
        print("My name is {} {}.".format(self.first, self.family))
```
上記クラス`Name_List`(本シート初めの例と同じ)の改造版のクラス`Name_List_osk`を定義し，インスタンス・メソッド`print`の表示を日本語にしたかったとする。
- 上記のクラス`Name_List`の一部のインスタンス・メソッドを修正したり，追加したりしたクラスを作成する場合，**クラスの継承**を用いる

<br>

#### 3.1 スーパークラスの一部の関数を置き換える
以下は初期化インスタンスは`class Name_list`と同じものを使い，`print()`を再定義したクラス

```python
class Name_list_osk(Name_list):  # class Name_Listを継承したクラス Name_list_jpを定義
def print(self):
    print("私の名前は{}{}です。".format(self.family, self.first))

```
- スーパークラス：継承対象のクラス（上記ではName_list）
- サブクラス（派生クラス）：再定義したクラス（Name_list_osk）
- スーパークラスを親クラス，サブクラスを子クラスと呼ぶことも

##### 実行例
```python
momo = Name_list()  # インスタンスを生成し，変数momoに代入
dai = Name_list_osk(family="山口", first="太郎")  # インスタンスを生成し，変数daiに代入

dai.print()
```
```
私の名前は山口太郎です。
```


#### 3.2 スーパークラスの関数を呼び出し，追加の処理を行う
```python
class NameID_list(Name_list):
    def __init__(self, family="Momo", first="Taro", ID="000"):
        super().__init__(family, first)  # スーパークラス(Name_list)の初期化メソッドを呼び出す
        self.ID = ID

    def printID(self):
        print("ID:" + self.ID)
    
```
- クラス`Name_list`を継承し，インスタンス変数に学籍番号を追加したクラス`NameID_list`
- `super().__init__()`を呼び出すことで，スーパークラスの初期化メソッドを実行

##### 実行例
```python
dai = NameID_list(family="Yamaguchi", first="Daisuki", ID="999")  # インスタンスを生成し，変数daiに代入
dai.printID()      # NameID_listで追加したインスタンス関数の呼び出し
dai.print()        # Name_listのインスタンス関数を呼び出せる
print(dai.family)  # スーパークラスの初期化メソッドにより，インスタンス変数`family`に値が代入されている。
```
```
ID:999
My name is Daisuki Yamaguchi.
Yamaguchi
```


