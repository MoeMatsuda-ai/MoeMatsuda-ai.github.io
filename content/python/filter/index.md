---
title: "Filter with python"
date: 2022-11-22T08:09:03Z
draft: false 
---


## filtfiltを用いたバンドパスフィルタ(バターワースフィルタ)の記述例

```python
#バターワースフィルタ（バンドパス）

fp = np.array([25, 50])       #通過域端周波数[Hz]
fs = np.array([10, 100])       #阻止域端周波数[Hz]
gpass = 3       #通過域端最大損失[dB]
gstop = 40      #阻止域端最小損失[dB]

def bandpass(x, samplerate, fp, fs, gpass, gstop):#samplerate がサンプリング周波数
    fn = samplerate / 2                           #ナイキスト周波数
    wp = fp / fn                                  #ナイキスト周波数で通過域端周波数を正規化
    ws = fs / fn                                  #ナイキスト周波数で阻止域端周波数を正規化
    N, Wn = signal.buttord(wp, ws, gpass, gstop)  #オーダーとバターワースの正規化周波数を計算
    b, a = signal.butter(N, Wn, 'bandpass')            #フィルタ伝達関数の分子と分母を計算
    y = signal.filtfilt(b, a, x)                  #信号に対してフィルタをかける
    return y                                      #フィルタ後の信号を返す


y = bandpass(f_biceps, samplerate, fp, fs, gpass, gstop)
```

<br><br><br>




## scipy.signal.filtfilt

**scipyのfiltfiltを使用する場合は以下のようにインポートする**

```python
from scipy import signal
import matplotlib.pyplot as plt
```
※pltはインポートしなくても大丈夫？

<br>

#### filtfiltの記述の仕方

filtfiltでバターワースフィルターをかける場合には以下のように記述する

```python
b, a = signal.butter(8, 0.125)
y = signal.filtfilt(b, a, x, padlen=150)
```

<br>

#### filtfiltのパラメータと返り値

```python
scipy.signal.filtfilt(b, a, x, axis=- 1, padtype='odd', padlen=None, method='pad', irlen=None)`
```

1. parameters

    - b : (*N*,)arrau_like
        フィルターの分子係数
    - a : (*N*,)array_like
        フィルターの分母係数

        a[0]が1でなければaもbもa[0]で正規化される。

    - x : array_like
        フィルターをかける配列のデータ

    - axis : int, optional
        フィルターを適用するx軸。デフォルトは-1

    - padtype
    - pandlen
    - method
    - irlen

1. return

    - ndarray
        xと同じ形状の(?)フィルタリングされた出力


<br>
<br><br>




## バターワースデジタルフィルター、バターワースアナログフィルターの設計

バターワースフィルターの設計では`scipy.signal.butter`モジュールを使用する。
このモジュールでは N 次元のデジタル、またはアナログバターワースフィルターを設計し、係数を返す。

<br>

#### 記述方法

```python
from scipy import signal
import matplotlib.pyplot as plt
b, a = signal.butter(4, 100, 'low', analog=True)
```

<br>

#### パラメータと返り値

```python
scipy.signal.butter(N, Wn, btype='low', analog=False, output='ba', fs=None)
```
1. parameters
    - N : int 
        フィルターの次数　←　`buttor`モジュールで必要な最低次数を求められる(？)
    - Wn : array_like
        臨界周波数。

        ローパス、ハイパスフィルターでは、Wn はスカラー。バンドパス、バンドストップフィルターでは長さ2の配列。

        バターワースフィルターでは、ゲインが通過帯域の1/√2 まで低下する点(「-3dB点」)を表す。

        アナログフィルターでは Wn は各周波数(例：rad/s)

    - btype : {‘lowpass’, ‘highpass’, ‘bandpass’, ‘bandstop’}, optional
        filterのタイプ。デフォルトはlowpass
        
    - analog
    - output
    - fs

1. Returns
    - b, a : nadarray, ndarray
        IIR フィルターの分子 (b) および 分母 (a) 多項式。   output='ba' のときだけ返される。

    - z, p, k
    - sos


<br><br><br>





## バターワースフィルターの次数選択

バターワースフィルターの次数選択では `buttord` モジュールを用いる。

このモジュールでは、通過帯域で gpass dB 以上の減衰がなく、停止帯域で gstop dB 以上の減衰がある最低次のデジタルまたはアナログバターワースフィルタの次数を返す。

<br>


#### 記述方法

```python
from scipy import signal
import matplotlib.pyplot as pltN, Wn = signal.buttord([20, 50], [14, 60], 3, 40, True)
b, a = signal.butter(N, Wn, 'band', True)
w, h = signal.freqs(b, a, np.logspace(1, 2, 500))
```

<br>


#### パラメータと返り値

```python
scipy.signal.buttord(wp, ws, gpass, gstop, analog=False, fs=None)
```

1. parameters

    - wp, ws : float
        通過帯域と阻止帯域のエッジ周波数。

        デジタルフィルタの場合、これらはfsと同じ単位である。デフォルトでは、fsは 2 half-cycles/sample なので、これらは0から1に正規化され、1がナイキスト周波数となる。(wpとwsはhalf-cycles/sample )例えば

                ローパス：wp=0.2, ws=0.3

                ハイパス：wp = 0.3, ws = 0.2

                バンドパス：wp = [0.2, 0.5]、ws = [0.1, 0.6].

                バンドストップ：wp＝［0.1，0.6］，ws＝［0.2，0.5］。

        アナログフィルタの場合、wpとwsは角周波数（例：rad/s）です。

    - gpass : float
        通過帯域の最大損失(dB)。

    - gstop : float
        停止帯域の最小減衰量（dB）。

    - analog : bool, optional

    - fs : float, optional
        デジタルシステムのサンプリング周波数

2. returns

    - ord : int
        使用を満たすバターワースフィルターの最低次数

    - wn : ndarray or float
        バターワース固有振動数（すなわち "3dB振動数"）。フィルタリングの結果を得るために、butterと一緒に使用する必要がある。fs が指定された場合、これは同じ単位であり、fs も butter に渡さなければならない。

<br><br><br>



## 参考
- [scipy.signal.filtfilt](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.filtfilt.html)
- [scipy.signal.butter](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.butter.html)
- [scipy.signal.buttor](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.buttord.html#scipy.signal.buttord)

