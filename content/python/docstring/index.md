---
tags: ["python"]
title: "Docstring"
date: 2023-03-29T06:10:48Z
draft: false
---

## Python Docstring
- Docstringとはメソッドやクラスについての説明文（コメント）
- `__doc__`というアトリビュート（属性）に格納されている
- `` ` ``で書くこともできるが，一般的には` " `で書く
- 対話型シェル等の環境で`help`関数を使用することで出力することも可能
- VS Codeでは関数等にカーソルを合わせることで表示される

Docstringは次のように定義分の先頭に記述する．

```python
def test_func(param1, param2):
    """Summary line.

    Extended description of function.

    Args:
        param1 (int): Description of param1
        param2 (str): Description of param2

    Returns:
        bool: Description of return value

    """
    return True
```

Docstringの書き方には様々なスタイルが存在している．

## Googlesスタイル
```python

#!/usr/bin/python
# -*- coding: utf-8 -*-
"""モジュールの説明タイトル

- ソースコードの一番始めに記載すること
- importより前に記載する

Todo:
    TODOリストを記載
    - conf.pyの``sphinx.ext.todo`` を有効にしないと使用できない
    - conf.pyの``todo_include_todos = True``にしないと表示されない
"""

import json
import inspect

class testClass() :
    """クラスの説明タイトル

    クラスの説明文

    Attributes:
        属性1 (型): 説明
        属性2 (:obj:`型`): 説明.
    """

    def print_test(self, param1, param2) :
        """関数の説明タイトル

        関数の説明文

        Args:
            引数1 (型): 説明
            引数2 (:obj:`型`, optional): 説明.

        Examples:

            関数の使い方

            >>> print_test ("test", "message")
               test message
        """
        return param1*param2
```

GoogleスタイルではAttributesやArgs, Returns, Yieds, Raises, Examples, Note, Todo
という用途別のセクションが存在
- Attributes: 属性
- Args: 引数
- Returns: 返り値
- Yields: yeild文を使用した関数の返り値
- Raises: 例外処理
- Examples: 使用例
- Note: 注釈
- Todo: Todoリスト（実装予定の処理など）



## 関数アノテーション
Python3.0以降では関数アノテーション（Function Annotations）という仕組みが導入され，
関数の引数や返り値に直接型を記述することができる．
ただしあくまで注釈のため，（環境によっては処理に使用されることもあるが）実行時に
チェックされたりはしない．
```python
def test_func(param1: str, param2: int) -> tuple[str, int]:
    return (param1, param2)
```

## 参考
- [GoogleスタイルのPython Docstringの入門](https://qiita.com/11ohina017/items/118b3b42b612e527dc1d)
- [Pythonのdocstring（ドキュメンテーション文字列）の書き方](https://note.nkmk.me/python-docstring/)
- [DOCSTRING (J. Nishii HP)](https://bcl.sci.yamaguchi-u.ac.jp/~jun/notebook/python/docstring/)
