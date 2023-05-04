---
tags: ["docker"]
title: "Appendix"
date: 2022-11-22T08:41:11Z
draft: false 
---

## 補足
### 1回限り動かすコンテナの使い方
（例）go言語でコンパイルするためのコンテナを作成する場合
```bash
$ docker run --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp golang:1.13 go built -v
```
ここでは`go built -v` を実行してコンテナを終了・削除している。


