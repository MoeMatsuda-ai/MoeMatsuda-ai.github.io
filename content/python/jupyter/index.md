---
tags: ["python", "jupyter"]
title: "Jupyter notebook"
date: 2022-11-22T08:09:35Z
draft: false 
---




<!-- ## Jupyterの語源と読み方
もともと，プログラミング言語 Julia と Python と R を実行できる環境だったため Jupyter と名付けられたらしい。 
ギリシャ神話の神様ユピテル(ジュピター)とかけてるのだと思うが，こちらの綴は Jupiter と1文字違う。

Jupyterのほうは，Python(パイソン)の読み方に合わせて国内では"ジュパイター"と読む人もいるが，開発者は"ジュピター"と呼んでいるようで，Youtubeにある英語でのjupyter関連の解説を聞いても大抵"ジュピター"に聞こえる。
<br><br> -->


## セル
- 編集モードへの変更：ダブルクリックまたは"Enter"
- コマンドモードへの変更：ESC
- セルの内容の実行
    - Windows：Ctrl+Enter
    - MacOS：command+Return
    - OS共通：Shift+Enter
<br><br>


## Markdownセルとcodeセル
- Markdownセル：テキストを入力するためのセル
- Codeセル：Pythonの実行を行うセル
<br><br>


## arkdownセルの編集方法
- "#"でタイトル
- "##"でサブタイトル
- "-"で箇条書き
- "**太文字**"で太文字
<br><br>


## 便利なショートカットキー（Window）

#### コマンドモード
|ショートカットキー|説明|
| --- | --- |
|F |  	検索・置換|
|Ctrl | -Shift|-F 	コマンドパレットを開く
|Ctrl | -Shift|-P 	コマンドパレットを開く
|Enter |  	編集モードにする|
|P |  	コマンドパレットを開く|
|Shift | -Enter| 	セルを実行し、下のセルに移動する
|Ctrl | -Enter| 	セルを実行する
|Alt | -Enter| 	セルを実行し、下にセルを追加する
|Y |  	コードセルにする|
|M |  	マークダウンセルにする|
|R |  	rawセルにする|
|1 |  	見出し１にする|
|2 |  	見出し２にする|
|3 |  	見出し３にする|
|4 |  	見出し４にする|
|5 |  	見出し５にする|
|6 |  	見出し６にする|
|K |  	上のセルを選択する|
|Up |  	上のセルを選択する|
|Down |  	下のセルを選択する|
|J |  	下のセルを選択する|
|Shift | -K| 	上のセルと結合する
|Shift | -Up| 	上のセルと結合する
|Shift | -Down| 	下のセルと結合する
|Shift | -J| 	下のセルと結合する
|A |  	上にセルを追加する|
|B |  	下にセルを追加する|
|X |  	選択しているセルをカット|
|C |  	選択しているセルをコピー|
|Shift | -V| 	上に貼り付け
|V |  	下に貼り付け|
|Z |  	セルの削除をやり直す|
|DD |  	選択しているセルを削除する|
|Shift | -M| 	セルのマージ(選択してないなら下のセルと)
|Ctrl | -S| 	保存する
|S |  	保存する|
|L |  	行番号の表示・非表示|
|O |  	セルの出力結果の表示・非表示|
|Shift | -O| 	出力結果スクロール・非スクロール
|H |  	キーボードショートカット表示|
|I×2 |  	カーネルをインタラプト|
|0 |  	カーネルを再起動|
|Esc |  	ページャーを閉じる|
|Q |  	ページャーを閉じる|
|Shift | -L| 	全てのセルの行番号の表示・非表示
|Shift | -Space| 	上にスクロール
|Space |  	下にスクロール|


#### 編集モード
|ショートカットキー |  	説明|
| --- | --- |
|Tab |  	コード補完・タブ|
|Shift-Tab| 	ツールチップ|
|Ctrl-]| 	インデント|
|Ctrl-[| 	ディデント|
|Ctrl-A| 	全選択|
|Ctrl-Z| 	やり直し|
|Ctrl-Shift|-|Z 	やり直し
|Ctrl-Y| 	やり直し|
|Ctrl-Home| 	セルの最初に移動|
|Ctrl-Up| 	セルの最初に移動|
|Ctrl-End| 	セルの最後に移動|
|Ctrl-Down| 	セルの最後に移動|
|Ctrl-Left| 	一単語前に移動|
|Ctrl-Right| 	一単語後に移動|
|Ctrl-Backspace| 	前の単語を削除|
|Ctrl-Delete| 	後の単語を削除|
|Ctrl-M| 	コマンドモードにする|
|Ctrl-Shift-F| 	コマンドパレットを開く|
|Ctrl-Shift-P| 	コマンドパレットを開く|
|Esc |	コマンドモードにする|
|Shift-Enter| 	セルを実行し、下のセルを選択する|
|Ctrl-Enter| 	セルを実行する|
|Alt-Enter| 	セルを実行し、下にセルを追加する|
|Ctrl-Shift-Minus| 	セルを分割する|
|Ctrl-S| 	保存する|
|Down| 	カーソルを下に移動|
|Up| 	カーソルを上に移動|
|Ctrl-/| 	選択部分をコメントアウト|

<br><br>


## Kernel
- セルの左の "In[]" の括弧内の数字は実行を行った順番を示す。
- 順番によっては正常に作動しない場合もあるため最後は左上の欄から"Kernel > Restart & Run All"をクリック