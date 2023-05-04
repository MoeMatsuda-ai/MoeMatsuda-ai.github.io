---
tags: ["python", "matplotlib"]
title: "Matplotlib"
date: 2022-11-22T08:10:00Z
draft: true
---



## Matplotlibとは？

グラフやそれ以外の2次元の形式で行うデータの可視化に用いるライブラリ。

出版に適したグラフを作るのに非常に適しており、IPythonとうまく統合されているためIPythonとmatplotlibはデータのグラフ化や探索を容易に行えるインタラクティブな環境を提供。
ウィンドウに表示されているツールバーからプロットの特定の領域をズームしたり、プロットで表示されれる範囲を変更することができる。

<br>




## Matplotlibにおけるグラフを書く方法

1. pypplot インターフェース
    - 単純なグラフの描画には便利

1. オズジェクト指向インターフェース
    - サブグラフを用意するなど細かい指定をするときに便利



<br><br>


## Pyplotインターフェース
- `plt.`から始まる命令で簡単にグラフをかける
- 単純なグラフ作成向け


<br><br>


#### Numpyモジュールの使用
数学関数の描画には、ベクトル・行列演算用の**NumPy**モジュールを使うと便利。Numpyはリストと似ているが数値データの処理に特化した**メソッド**が色々用意されている。

(例)
```python
import numpy as np
step=0.1
time=np.arange(0,20+step,step) 
sint=np.sin(time) 
cost=np.cos(time)

plt.figure(figsize=(8, 4))
plt.plot(time, sint, label="sin t") 
plt.plot(time, cost, label="cos t") 
plt.show()
```

以下のようにグラフをカスタマイズできる。

```python
# ラベルの追加
plt.xlabel("time [s]")  
plt.ylabel("y") 
# 凡例の追加
plt.legend(loc="upper right")
# png, jpg, pdf等へのグラフの出力
plt.savefig('figure.png')    
```




<br><br>


## オブジェクト指向インターフェース
- グラフの見栄え等に関する細かい設定をすることができる。
- コンテナと呼ばれるオブジェクトの中に、描画パーツやさらにコンテナを配置していくことでグラフを作成する。

<br><br>


#### matplotlibのオブジェクト指向インターフェースの基本構造

matplotlibのオブジェクト指向インタフェースでは，以下のように階層的にコンテナや基本パーツを配置する。

- [Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure) (図)コンテナ
    - 全ての描画オブジェクトに対して，一番上の階層にあるクラス。
    - 複数のグラフ等(Axesオブジェクト等)を配置するキャンバス的な役割のオブジェクト
- [Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) (座標系)コンテナ
    - 個々のグラフ等に対応するオブジェクト
    - 以下の座標軸(Axis)や描画グラフ(Primitives)を要素として登録する
- [Axis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Axis) (座標軸)コンテナ
    - 個々の座標軸を表現するオブジェクト
    - ラベルや目盛りなどを要素とする
- Primitives (基本パーツ)
    - 直線オブジェクト(Line2D), テキストオブジェクト(Text)など各グラフに描画するオブジェクト
    - コンテナの中に配置する

(例)
```python
step = 0.1
time = np.arange(0, 20 + step, step)  
sint = np.sin(time)  
cost = np.cos(time)  

# グラフの（タイトルなどの）フォントの大きさを設定
plt.rcParams["font.size"] = 16   
fig = plt.figure(figsize=(6, 5))  # figsize=(横:縦)

# 座標(Axes)オブジェクトの生成
ax1 = fig.add_subplot(211)  # （2行1列の1番目）
ax2 = fig.add_subplot(212)  

ax1.plot(time, sint, label="sin t") 
ax2.plot(time, cost, label="cos t") 

# ax1にラベル等の追加
ax1.legend(loc="upper right")  # 右上に配置
ax1.set_title("graph example") 
ax1.set_xlabel("t [s]")  
ax1.set_ylabel("sin t") 
ax1.grid(True)  
ax1.set_xlim(0, 20)  
ax1.set_ylim(-1, 1) 

# ax2にラベル等の追加
ax2.legend(loc="upper right") 
ax2.set_xlabel("t [s]") 
ax2.set_ylabel("cos t") 
ax2.grid(True) 
ax2.set_xlim(0, 20)
ax2.set_ylim(-1, 1)

# タイトルやラベルが重ならないように配置調整し、Figureオブジェクトを描画
plt.tight_layout()  
# 拡張子に応じてpng,jpg,pdf等で出力
plt.savefig('triangular.png')    
plt.show()      # 以上の命令を出力(画面表示)
```

<br><br>


## ヒートマップ

3次元グラフのz軸の値を、2次元グラフ上の色や濃淡で表したグラフをヒートマップと呼ぶ。

（例）
```python
%matplotlib inline
import numpy as np
from matplotlib import pyplot as plt

data = [[1,2,3,4],
        [2,3,4,5],
        [3,4,5,6],
        [4,5,6,7]]

fig=plt.figure(figsize=(6, 5))
ax=fig.subplots() 

ax.invert_yaxis() # y軸を上下ひっくり返す

map=ax.pcolor(data,cmap="seismic") # 数値データからカラーデータを作成 cmapの値により配色変化
fig.colorbar(map, ax=ax) # カラーデータと軸データを使ってグラフデータ生成

plt.show() 
```

- カラーマップ指定
    カラーマップに用いる配色は，`ax.pcolor()`の引数`cmap`で指定している。
    - cmap(カラーマップ)の一覧は[こちら](http://pynote.hatenablog.com/entry/seaborn-color-map)。いろいろと変えてみると楽しい

- 軸目盛りの間隔
    x軸やy軸の目盛(tick)の間隔を変更したいときは，リストで指定する。以下は，0から9までの整数値を軸名に指定する場合の例。
    ```python
    ax.set_xticks([range(0,11,1)])
    tick = [i for i in range(0, 5, 1)]
    ax.set_yticks(tick)
    ```
    注) リストではなく，numpy配列でも良い


<br><br>





## 棒グラフ

```python
plt.bar(x, y, width)
```
- x：x軸
- y：y軸
- width：横幅


**2つの棒グラフを表示**
```python
import matplotlib.pyplot as plt
import numpy as np

height1 = [80, 65, 100, 42, 54] # y座標①
height2 = [55, 100, 98, 30, 21] # y座標②

left = np.arange(len(height1))
labels = ['Japanese', 'Math', 'Science', 'Social', 'English'] # 座標軸に表示する文字列

width = 0.3

plt.bar(left, height1, color='r', width=width, align='center') # 1つ目のデータを表示
plt.bar(left+width, height2, color='b', width=width, align='center') # 2つ目のデータを表示

plt.xticks(left+width/2, labels) # 指定した文字列を座標軸に表示
plt.show()
```


**【参考】**

- [【Python】matplotlibで色んな種類の棒グラフを表示する方法](https://www.sejuku.net/blog/74185)
- [Pyplot(1) 棒グラフ](https://qiita.com/iwama_takumi/items/faaf784a77812c0295de)
- [matplotlib で棒グラフを描く](https://pythondatascience.plavox.info/matplotlib/%E6%A3%92%E3%82%B0%E3%83%A9%E3%83%95)


<br><br>








## グラフで矢印の表示

```python 
ax.annotate('', xy=point['end'], xytext=point['start'], arrowprops=dict(shrink=0, width=1, headwidth=8, headlength=10, connectionstyle='arc3', facecolor='gray', edgecolor='gray'))
```
※'start'から'end'方向への矢印

【引数】
- s：注釈文章の内容
- xy：終点の位置
- xytext：始点の位置（テキストの位置）
- arrowprops：始点と終点間を結ぶ矢印の設定
    - width：矢印の線の幅
    - headwith：矢印自体の横幅
    - headlength：矢印自体の長さ
    - shrink：矢印を縮小する割合
    etc.

※始点と終点の経路は`connectionstyle`で制御できる


**【参考】
- [[Matplotlib] 注釈と矢印](https://python.atelierkobato.com/annotate/)
- [matplotlibで矢印を描画したい! annotateを使おう! ](https://qiita.com/haru1843/items/e85fe45163cd9763023c)


<br><br>






## グラフ上での日本語表記

`japanize_matplotlib` を import すればOK!（※外部ライブラリをインストール必要あり）

```
pip install japanize-matplotlib
```

```python
import japanize_matplotlib
```

これだけで日本語表記ができる！！


<br>



## style の変更と自作
```python
plt.style.use('<style name>')
```
でスタイルを変更できる。使用可能なスタイルは以下のコマンドで確認可
```python
plt.style.available
```

- デフォルトで付属しているスタイルは`~/anaconda3/lib/python3.9/site-packages/matplotlib/mpl-data/stylelib`にある。
- 自作する場合は`~/.config/matplotlib/stylelib`の下に`.mplstyle`ファルを作成する

[mplstyleファイルの設定の仕方はこちらを参照](https://matplotlib.org/stable/tutorials/introductory/customizing.html#the-default-matplotlibrc-file)

#### 参考
- [【Matplotlibの使い方】Matplotlibで作成したグラフをカッコ良くする方法](https://hogelog.com/python/customizing-matplotlib.html)
- [note.nkmk.me](https://note.nkmk.me/python-matplotlib-matplotlibrc-stylesheet/)
- [Matplotlib スタイルによるグラフの見た目の変更](https://helve-blog.com/posts/python/matplotlib-object-oriented-style/)
- [Customizing Matplotlib with style sheets and rcParams](https://matplotlib.org/stable/tutorials/introductory/customizing.html)

