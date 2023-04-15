---
title: "Anaconda Update"
date: 2022-11-22T08:08:01Z
draft: false 
---


## pip のアップデート
### pip と setuptools のアップデート
```bash
$ python -m pip install --upgrade pip setuptools
```
※`-m`はインターフェイスオプションで、pythonのモジュール（パッケージ）を実行するために使用

### パッケージのアップデート
```bash
$ pip install -U <package-name>
```
または
```bash
$ pip install --upgrade <package name>
```


## naconda のアップデート

### すべてのパッケージをアップデート
```bash
$ conda update --all
```

### 特定のパッケージのアップデート
```bash
$ conda update <package name1> <package name2>
```

### anaconda 本体のアップデート
```bash 
$ conda update -n base -c defaults conda
```
または
```bash
$ conda update -n base conda
```

※上は(base)と作成した仮想環境両方アップデートされた…（下のコマンドは不明）

※[よく使うオプションは以下の通り](https://qiita.com/FukuharaYohei/items/928f5b417337a5068a07)
- `-n` は `--name` の略で、環境名の指定
- `-c` は `--channel` の略で、デフォルトリポジトリだけでなくチャネルを追加で指定


# 参考
- [Anaconda パッケージ アップデート方法](https://qiita.com/saspy/items/a9a66d510e180ed8d326)
- [pipでアップデートするときのコマンド pip update](https://qiita.com/HyunwookPark/items/242a8ceea656416b6da8)


