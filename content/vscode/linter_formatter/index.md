---
title: "Installation for linter (Flake8) and Formatter (Black Formatter)"
date: 2023-10-04T07:53:44Z
draft: false
---

## Usage for Linter on the VSCode
1. 拡張機能"Flake8"をインストール
1. settings.jsonを開き，以下を追記
    ```json
    "flake8.args": [
        "--max-line-length=88",
        "--ignore=E203,W503,W504"
    ]
    ```
    - `max-line-length`：1文の文字数
    - `E203`: `:`の前後にスペースがあるとエラー
    - `W503`: 演算子の前に改行があるとエラー
    - `W504`: 演算子の後に改行があるとエラー
        > しかしながら、PEP 8（Python の公式スタイルガイド）は、過去のバージョンとの互換性の
        >ために古い指針を維持していますが、実際には二項演算子の前での改行を推奨しています。
        >
        >これにはいくつかの理由がありますが、主に次のような利点が挙げられます。
        >
        >行の終わりに演算子があると、その演算子を見逃しやすくなる
        >一般的に、行の先頭に演算子があると、複数行にわたる式を読む際に整理されていると感じられる
        >black はこの「新しい」スタイルを採用しています。したがって、black でフォーマットされた
        >コードは、W503 に違反する可能性があります。
        >
        >black と flake8 を一緒に使用する場合、W503 の警告を無視するのが一般的です。

        【引用元】[PythonのLinterとFormatter設定](https://zenn.dev/yamaden/articles/23d3805fc85d99)
    


## Usage for Formatter on the VSCode
1. "Black Formatter"をインストール
1. settingsを開き，`Editor: Format On Save`にチェック
1. 「Blackフォーマッタ拡張機能がインストールされていますが，それを既定のフォーマッタとして使用しますか？」というメッセージが現れたら「はい」をクリック
1. 以下の文がsettings.jsonに追記されていることを確認
    ```json
    "[python]": {
    "editor.formatOnType": true,
    "editor.defaultFormatter": "ms-python.black-formatter"
    },
    "editor.formatOnSave": true,
    // "python.formatting.provider": "none",
    ```
    
    ※ただし最後の1文は今後非推奨になる予定らしいので削除（削除しても動作に問題はない！）

## Memo
- flake8とかをpipでインストールしてsettings.jsonで`python.linting.pylintEnabled`とか
を設定するという記事がいくつかあるが，2022年からこの方法は非推奨（今後廃止予定？）とな
り，VSCodeの拡張機能で設定することが推奨されているらしい（[Migration to Python Tools Extensions](https://github.com/microsoft/vscode-python/wiki/Migration-to-Python-Tools-Extensions)参照）

## Installation by pip and excusing Black on a terminal
1. `flake8`と`autopep8`がインストールされているか確認
    ```bash
    $ pip show flake8
    Name: flake8
    Version: 6.0.0
    ...
    $ pip show autopep8 
    Name: autopep8
    Version: 1.6.0
    ...
    ```
    のように出力されればインストール済み！

    エラーが出力された場合は次のコマンドでインストール
    ```bash
    $ pip install flake8
    $ pip install autopep8
    ```
1. 次のコマンドで確認可能
    ```bash
    $ autopep8 --in-place --aggressive --aggressive <file name>
    ```

詳しくは[こちら](https://arakan-pgm-ai.hatenablog.com/entry/2018/11/12/090000)を参照

**※VSCodeの拡張機能を使用する場合はpipでのインストールは不要！（VSCode側でインストールされるらしい）**


## 参考
- [Pythonのコードフォーマッター(black)、リンター(flake8)をVSCode拡張機能で導入](https://itc-engineering-blog.netlify.app/blogs/vscode-extensions-black-flake8)
- [PythonのLinterとFormatter設定](https://zenn.dev/yamaden/articles/23d3805fc85d99)
- [Flake8 extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.flake8)

