---
tags: ["python", "pandas", "pickle"]
title: "Pickle"
date: 2022-11-22T08:12:12Z
draft: false 
---

## pickleの使用方法
## Saving
#### with openでの保存、読み込み
```python
with open("filename.pkl", "wb") as f:
    pickle.dump(data, f)
```

```python
with open("filename.pkl", "rb") as f:
    hoge = pickle.load(f)
```

#### pandasでの保存、読み込み
```python
import pandas as pd
pd.to_pickle(data, "filename.pkl")
```
```python
hoge = pd.read_pickle("filename.pkl")
```

#### joblib(?)での保存、読み込み
```python
joblib.dump(data, "filename.jb", compress=3)
```
```python
hoge = joblib.load("filename.jb")
```


