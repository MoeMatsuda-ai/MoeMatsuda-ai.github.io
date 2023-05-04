---
tags: ["python", "numpy"]
title: "Creating dateset by Numpy"
date: 2023-04-29T06:44:22Z
draft: false
---

## データの生成
### 等差数列の生成
```python
np.arange(start, stop, step)
```

### 要素数を指定した等差数列の生成
```python
np.linspace(start, stop, num, endpoint=True)
```
- endpoint: stopを数列に含むか否か（デフォルトはTrue）

### 同じ値で初期化した配列の生成
- 0で初期化
    ```python
    np.zeros(shape)
    ```
    ```python
    np.zeros_like(arr)
    ```

- 1で初期化
    ```python
    np.ones(shape)
    ```
    ```python
    np.ones_like(arr)
    ```

- 任意の値 (fill_value) で初期化
    ```python
    np.full(shape, fill_value)
    ```
    ```python
    np.full_like(arr, fill_value)
    ```

- 空の配列を生成
    ```python
    np.empty(shape)
    ```
    ```python
    np.empty_like(arr)
    ```

### 単位テンソルの生成
```python
np.eye(shape)
```