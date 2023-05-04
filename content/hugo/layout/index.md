---
tags: ["hugo"]
title: "Layout"
date: 2023-04-15T21:41:07Z
draft: false
---

## ロゴ（左上隅）の変更
1. `layout/partials/logo.html`を生成
1. logoの設定を書き込む

## ファビコンの変更
1. faviconがSVG, PNGまたはICOの場合は、ローカルの`static/images`ディレクトリに`favicon.svg`, `favicon.png`または`favicon.ico`という名前で画像を保存
1. `layout/partials/`に`favicon.html`という名前で新しいファイルを生成し、次のように書き込む：
    ```html
    <link rel="icon" href="/images/favicon.png" type="image/png">
    ```

## メニューのChapter番号を表示
1. `layout/partials`に`menu-pre.html`ファイルを生成し、次のように書き込む：
    ```html
    {{ if (eq .Params.archetype "chapter") }}<b style="display: inline-block; font-weight: 700; padding-left: .3rem; color: #007bff; text-align: left; width: 1.7rem;">{{ .Params.weight }}.</b> {{ end }}
    ```
## 参考文献
- [Customization :: Hugo Relearn Theme](https://mcshelby.github.io/hugo-theme-relearn/basics/customization/#change-the-logo)
- [hugo-theme-relearn repo](https://github.com/McShelby/hugo-theme-relearn)
