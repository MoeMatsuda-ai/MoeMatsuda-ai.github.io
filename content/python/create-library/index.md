---
title: "Create Library"
date: 2022-11-22T08:08:38Z
draft: false 
---


# ライブラリの作成方法
1. directory に `__init.py__` ファイルを作成
2. `site-packages` ディレクトリに作成したライブラリを追加する（シンボリックリンクでも可）
   - site-packages の場所は 
      ```bash
      $ python -m site
      ```
      で確認できる
   - ディレクトリをパスに追加する場合は次の通り
      ```bash
      $ export PYTHONPATH="<path>:$PYTHONPATH"
      ```
