---
tags: ["linux", "ubuntu", "us-keyboard"]
title: "Mozc settings"
date: 2022-11-29T08:12:45Z
draft: false
---

## US配列でmozc（日本語）の使用
- Ubuntu 22.04

#### 入力ソースの変更
1. 設定の地域と言語から，入力ソースを`日本語（Mozc）`のみにする
**Mozcのみに設定すると自動的に（たぶん）US配列に対応します**

#### キー割当の変更（半角全角キーを`ctrl+space`に変更）
1. 設定の『キーボード」の設定を選択
1. `日本語（Mozc）`の右側をクリックし，設定をクリック
1. Mozc プロパティの「キー設定の選択」の「編集」を選択し，`Hankak/zenkaku`のところをすべて`Ctrl+Space`に変更
    1.  モード/コマンドが以下3つのところの入力キーのところを3回クリック
        - 変換前入力/半角空白を入力
        - 変換中/半角空白を入力
        - 直接入力/IMEを有効化
        - 入力文字なし/IMEを無効化
    1.  ctrl+Spaceを押す

## 参考
- [Ubuntu18.04にて，USキーボードを用いて英数字と日本語（ひらがな）の切り替えを行う方法](https://magidropack.hatenablog.com/entry/2019/01/05/174048)
- 