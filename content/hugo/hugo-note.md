---
tags: ["c", "gnuplot"]
title: "hugo note"
date: 2022-11-22T06:18:27Z
draft: false
---

## hugoでプロジェクトを作成
```bash
$ hugo new site <プロジェクト名>
Congratulations! Your new Hugo site is created in PATH/hugo/test.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".
```
プロジェクトを作成すると次のようなファイルが作成される

```bash
$ tree <directory name>/ -L 1
<directory name>/
├── archetypes
├── config.toml
├── content
├── data
├── layouts
├── public
├── resources
├── static
└── themes
```

ページの設定は`config.toml`から変更できる。

テーマは[公式ページ](https://themes.gohugo.io/)からダウンロードし使用する。
テーマの変更や言語設定なども`config.toml`から行う。

```bash
$ cat web-blog/config.toml 
baseURL = 'https://...' # ページを公開するドメイン名
languageCode = 'en-us' # 日本語ならja-jp
title = "<blog name>"
theme = "kraiklyn" # ダウンロードしたテーマ
```

## homeの作成
```bash
$ hugo new --kind home _index.md
```

## 章の作成
```bash
$ hugo new --kind chapter <chapter name>/_index.md
```
次のような内容が書かれた`<chapter>/_index.md`が生成されるため、
```
+++
archetype = "chapter"
title = "{{ replace .Name "-" " " | title }}"
weight = X
+++

Lorem Ipsum.
```
`X`の部分を数字に置き換える。メニューはその順番で表示される。

## 記事の作成

```bash
$ hugo new posts/test.md
```
このコマンドを実行すると`contents/posts/test.md`が作成される。

## localで表示
また、次のコマンドを実行すると`localhost:1313`でプレビューが見れるようになる。

```bash
$ hugo server -D
```

## webサイトの構築
次のコマンドを実行でpublicフォルダに静的ファイルが作成される。
```bash
$ hugo 
```


## thema
- [Hugo Relearn Theme](https://themes.gohugo.io/themes/hugo-theme-relearn/)
- [Hugo Learn Theme](https://themes.gohugo.io/themes/hugo-theme-learn/)
- [TinyWorks](https://themes.gohugo.io/themes/tinyworks/)
- [Kraiklyn](https://themes.gohugo.io/themes/kraiklyn/)

## 参考
- [HUGOの使い方](https://hacknote.jp/archives/54404/)
- [静的サイトジェネレータ「Hugo」と技術文書公開向けテーマ「Docsy」でOSSサイトを作る](https://knowledge.sakura.ad.jp/22908/)
- [Hugo Relearn Theme > Content](https://mcshelby.github.io/hugo-theme-relearn/cont/index.html)
