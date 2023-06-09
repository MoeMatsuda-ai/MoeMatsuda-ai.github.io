---
tags: ["hugo", "toml"]
title: "Config.tomlの設定"
date: 2023-04-15T19:32:31Z
draft: false
---
```toml
baseURL = '<URL>'
languageCode = 'ja-jp'
title = "Chiyo's blog"
theme = "hugo-theme-relearn"
publishDir = "docs"

[params]
  themeVariant = ["relearn-dark", "relearn-light", "green", "black", "blue", "learn"]
  ordersectionsby = "title"
  showVisitedLinks = true

[outputs]
  home = ["HTML", "RSS", "SEARCH", "SEARCHPAGE"] 
  section = ["HTML", "RSS", "PRINT"]

[Languages]
[Languages.en]
landingPageName = "<i class='fas fa-home'></i> Home"

[[menu.shortcuts]]
name = "<i class='fab fa-fw fa-github'></i> GitHub repo"
identifier = "ds"
url = "https://github.com/MoeMatsuda-ai/MoeMatsuda-ai.github.io"
weight = 50

[[menu.shortcuts]]
name = "<i class='fas fa-tags'></i> Tags"
url = "/tags"
weight = 70
```

- baseURL: サイトのルートURL
- publishDie: Webサイトで公開するリポジトリ以下のディレクトリ（githubではdocsを推奨）
- ordersection: `title`または`weight`を選択。titleの場合はtitle順、weightの場合はweightで設定された番号順にメニューを並べる
- showVisitedLinks: 訪れたページにはメニューにチェックマークを付ける
- menu.shortcuts: ショートカット（ここでは`Github repo`と`tags`を設定）
