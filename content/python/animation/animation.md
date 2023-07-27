---
title: "Animation"
date: 2023-07-27T09:47:46Z
draft: False
---

## FuncAnimation
```python
def plot(i, *fargs):
    plt.cla()
    y = fargs[]
    ax.plot(x, y)
    
fig = plt.figure()
ax = fig.add_subplot(111)
fargs = (np.arange(10))
anim = FuncAnimation(fig, plot_posture, frames=len(args[0]), interval=100, fargs=fargs)
plt.show()
```

保存する場合は以下のように書く
```python
anim.save("animation.fig", writer="pillow")
```
または
```python
anim.save("anim.mp4", writer="ffmpeg", dpi=100)
```

## `ffmpeg`でエラーが出る場合
次のようにffmpegをインストール
```bash
$ conda install -c anaconda ffmpeg
```
