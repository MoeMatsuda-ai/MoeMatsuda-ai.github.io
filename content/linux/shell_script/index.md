---
tags: ["linux", "bash", "shell script"]
title: "Shell script"
date: 2023-03-29T06:36:40Z
draft: false
---

# シェルスクリプト
```
$mv arg.sh ~/bin/arg.sh
```

※このあとパス設定が必要だけど、すでにbinにパスが設定されてた…
パスの確認方法は
```
$printenv PATH
```

## シェルスクリプトの作成手順

1. ~/bin にbzdirファイルを作成
1. ファイルに書き込めたら次のコマンドを実行
    ```
    $chmod +x bzdir.sh 
    ```
    - ファイル内容は　~/bin/bzdir を参照

1. ~/.bashrcに下記の記述を書き込む
    ```
    "alias bzdir='bzdir.sh'
    ```
1. $source ~/.bashrcを実行
