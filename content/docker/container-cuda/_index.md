---
title: "Docker Container for Cuda"
date: 2022-11-22T08:43:12Z
draft: false 
---

## docker の cuda コンテナの追加設定
### 1. .bashrc の変更
- `/home/` と `/root/` 以下に保存
   - `/home/` はボリュームマウントしているので、新しくコンテナを作成する場合は設定ファイルを `/home/` の保存し、作成したコンテナで `/home/` 以下の設定ファイルをコピーすること！

### 2. python のライブラリの追加
ライブラリを追加するディレクトリにパスを通す
```
$ export PYTHONPATH="/root/.local/lib/python3.8/site-pachages/:$PYTHONPATH"
```
- moysnn ライブラリのシンボリックリンクを"/root/.local/lib/python3.8/site-pachages/"以下に作成

### 3. コマンドのインストール
- tree
- trash