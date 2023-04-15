var relearn_search_index = [
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "C language",
    "uri": "/c_lang/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Docker",
    "uri": "/docker/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Github",
    "uri": "/github/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Gnuplot",
    "uri": "/gnuplot/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Hugo",
    "uri": "/hugo/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Keyboard",
    "uri": "/keyboard/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Latex",
    "uri": "/latex/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Linux",
    "uri": "/linux/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Markdown",
    "uri": "/markdown/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "python",
    "uri": "/python/index.html"
  },
  {
    "content": "Windowsの設定についてのあれこれ\n",
    "description": "",
    "tags": null,
    "title": "Windows settings",
    "uri": "/windows_settings/index.html"
  },
  {
    "content": "ロゴ（左上隅）の変更 layout/partials/logo.htmlを生成 logoの設定を書き込む ファビコンの変更 faviconがSVG, PNGまたはICOの場合は、ローカルのstatic/imagesディレクトリにfavicon.svg, favicon.pngまたはfavicon.icoという名前で画像を保存 layout/partials/にfavicon.htmlという名前で新しいファイルを生成し、次のように書き込む： \u003clink rel=\"icon\" href=\"/images/favicon.png\" type=\"image/png\"\u003e メニューのChapter番号を表示 layout/partialsにmenu-pre.htmlファイルを生成し、次のように書き込む： {{ if (eq .Params.archetype \"chapter\") }}\u003cb style=\"display: inline-block; font-weight: 700; padding-left: .3rem; color: #007bff; text-align: left; width: 1.7rem;\"\u003e{{ .Params.weight }}.\u003c/b\u003e {{ end }} 参考文献 Customization :: Hugo Relearn Theme hugo-theme-relearn repo ",
    "description": "",
    "tags": null,
    "title": "Layout",
    "uri": "/hugo/layout/index.html"
  },
  {
    "content": " プログラミング言語やら何やらかんやらのメモ…\n",
    "description": "",
    "tags": null,
    "title": "Moai's blog",
    "uri": "/index.html"
  },
  {
    "content": "baseURL = '\u003cURL\u003e' languageCode = 'ja-jp' title = \"Chiyo's blog\" theme = \"hugo-theme-relearn\" publishDir = \"docs\" [params] themeVariant = [\"relearn-dark\", \"relearn-light\", \"green\", \"black\", \"blue\", \"learn\"] ordersectionsby = \"title\" showVisitedLinks = true [outputs] home = [\"HTML\", \"RSS\", \"SEARCH\", \"SEARCHPAGE\"] section = [\"HTML\", \"RSS\", \"PRINT\"] [Languages] [Languages.en] landingPageName = \"\u003ci class='fas fa-home'\u003e\u003c/i\u003e Home\" [[menu.shortcuts]] name = \"\u003ci class='fab fa-fw fa-github'\u003e\u003c/i\u003e GitHub repo\" identifier = \"ds\" url = \"https://github.com/MoeMatsuda-ai/MoeMatsuda-ai.github.io\" weight = 50 [[menu.shortcuts]] name = \"\u003ci class='fas fa-tags'\u003e\u003c/i\u003e Tags\" url = \"/tags\" weight = 70 baseURL: サイトのルートURL publishDie: Webサイトで公開するリポジトリ以下のディレクトリ（githubではdocsを推奨） ordersection: titleまたはweightを選択。titleの場合はtitle順、weightの場合はweightで設定された番号順にメニューを並べる showVisitedLinks: 訪れたページにはメニューにチェックマークを付ける menu.shortcuts: ショートカット（ここではGithub repoとtagsを設定） ",
    "description": "",
    "tags": null,
    "title": "Config.tomlの設定",
    "uri": "/hugo/config/index.html"
  },
  {
    "content": "出力用DISPLAYの設定 x11のインストール wslにX11をインストール $ sudo apt install x11 VcXsrvのインストールと設定 SourceForge.netからインストーラーをダウンロード インストーラーを実行し，VcXsrvをインストール（推奨の設定でOK！） VcXsrvを起動 Display settings: Multiple windowsを選択し，次へをクリック Client startup: Start no clientを選択肢，次へをクリック Extra settings: ClipboardとPrimary Selection, Native openglにチェックが入っていることを確認し，Disable access controlにチェックを入れてから次へをクリック Finish configuration: Save configurationをクリックしてデスクトップ等にconfigを保存してから完了をクリック Windows+Rでダイアログボックスを開き，shell:startupと入力してエクスプローラーのスタートアップアプリを開く デスクトップ等に保存していたVcXsrvのconfigファイルをスタートアップアプリに移動させる Display環境変数のエクスポート 以下の1文を.bashrcに追加\nexport DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0.0 参照 WSL上にXサーバをインストールしてGUIを実現する（VcXsrv編）, メディアID Windows10のWSL上でX11アプリケーションを実行してみた，DevelopersIO errorについて ",
    "description": "",
    "tags": null,
    "title": "Anaconda settings on WSL",
    "uri": "/windows_settings/conda_settings_onwsl/index.html"
  },
  {
    "content": " 機能の有効化\nコントロールパネル＞プログラム＞Windowsの機能の有効化または無効化をクリック 以下の２つのチェックを入れる Linux用Windowsサブシステム 仮想マシンプラットフォーム wslのインストール\nwsl --install Linuxディストリビューションをインストール\nオンラインストアからダウンロードできるLinuxディストリビューションの一覧を表示 $ wsl --list --online wsl --l -o 任意のLinuxディストリビューションをインストール $ wsl --install -d \u003cDistribution Name\u003e Linuxディストリビューションを起動し、User NameとPasswordを設定\nerror: 0x800701bcが出てすぐにwslが落ちてしまう場合はwsl1からwsl2へアップグレード Linuxカーネル更新プログラムパッケージをダウンロード 更新ぷろぐらぺっケージをダブルクリックして実行 以下のコマンドでwsl2を既定のバージョンとして設定 $ wsl --set-default-version 2 参考 WSL を使用して Windows に Linux をインストールする 古いバージョンの WSL の手動インストール手順 Windows10 HomeでもDockerの環境構築ができる ！！　WSL1 からWSL2に変更する際に出るエラー　error : 0x800701bc の解決方！　（2020年9月） ",
    "description": "",
    "tags": null,
    "title": "Installing WSL",
    "uri": "/windows_settings/install_wsl/index.html"
  },
  {
    "content": "CapsLockとCtrlの入れ替え installする場合 このリンクからCtrl2Capをダウンロードし、任意の場所に展開． cmdを管理者権限で開き、展開した場所に移動 $ ctrl2cap /instalを実行. 再起動 uninstallする場合 cmdを管理者権限で開き、Ctrl2Capをダウンロードした場所に移動． $ ctrl2cap /uninstallを実行． ",
    "description": "",
    "tags": null,
    "title": "setting Keyboard",
    "uri": "/windows_settings/keyboard/index.html"
  },
  {
    "content": "エディタのショートカットキー 移動系 ショートカットキー 概要 Ctrl+Home ファイルの先頭に移動 Ctrl＋End ファイルの末尾に移動 Home 行頭に移動 End 行末に移動 Ctrl＋← 単語の先頭に移動 Ctrl+→ 単語の末尾に移動 分割 ショートカットキー 概要 ショートカットキー 概要 Ctrl＋\\ ※\\は右上の｜のキーボード 編集画面を分割表示 Ctrl＋１or２or 3 … 分割した画面間を移動 ファイルやディレクトリの開き方 ショートカットキー 概要 Ctrl＋N 新規ファイル Ctrl＋Shift＋N 新規ウィンドウ Ctrl＋o ファイルを開く 文字列検索 ショートカットキー 概要 Ctrl＋F エディタ内検索 Ctrl＋H エディタ内置換 F3 次の検索結果にジャンプ Shift＋F3 前の検索結果にジャンプ ",
    "description": "",
    "tags": null,
    "title": "Shortcut",
    "uri": "/linux/shortcut/index.html"
  },
  {
    "content": "シェルスクリプト $mv arg.sh ~/bin/arg.sh ※このあとパス設定が必要だけど、すでにbinにパスが設定されてた… パスの確認方法は\n$printenv PATH シェルスクリプトの作成手順 ~/bin にbzdirファイルを作成\nファイルに書き込めたら次のコマンドを実行\n$chmod +x bzdir.sh ファイル内容は　~/bin/bzdir を参照 ~/.bashrcに下記の記述を書き込む\n\"alias bzdir='bzdir.sh' $source ~/.bashrcを実行\n",
    "description": "",
    "tags": null,
    "title": "シェルスクリプト",
    "uri": "/linux/shell_script/index.html"
  },
  {
    "content": "コンソールの起動 Ctel+F[2~3] 以下のコマンドを実行することでコンソール画面からXwindowを起動することもできる $ startx ログインするアカウント名を入力 passwordを入力 X windowへの復帰 Ctrl-Alt-F7 コマンド停止方法 Ctrl + C コマンド kill ps r を入力 PID（プロセスID）を確認 kill [PID] を入力 コマンド kill② ps auxw | grep yes （axでもOK）で実行しているコマンドyesのPID（2列目）を検索 kill [PID] を入力 コマンド kill③ topでPIDを確認 topコマンド実行中にkをタイプ killしたいPIDを入力＆Enter Send PID \u003cPID\u003e signalでEnter killall yesと入力　→※同じコマンド名のものはすべてkillされる topコマンド topコマンドでよく使う or 便利そうな機能\nコンソール上で入出力を受け付けない際の対処法 Ctrl-sで入出力を受け付けなくなる Ctrl-q で復帰 aptコマンド(Ubuntu Linux等) コマンド 概要 インストールされているパッケージの一覧を表示する $apt list –installed インストールされているパッケージを最新状態にする $apt-get update パッケージをインストールする $apt-get install package [package …] ユーザーの追加方法 $ useradd \u003coption\u003e \u003cuser name\u003e オプション m: ホームディレクトリを追加 パーミッション 権限の変更 $ chmod u+w ユーザー所有権の変更 $ chown \u003cuser name\u003e:\u003cgroup name\u003e \u003cfile name\u003e \u003cuser name\u003e:\u003cgroup name\u003eはユーザー所有権とグループ所有権 グループ所有権は省略可 パスワードの変更 $ passwd \u003cuser name\u003e バックグラウンド処理 $ \u003ccommand\u003e \u0026 \u0026をつけ忘れた場合 コマンド実行中にCtrl-zでコマンドを中断 bgとタイプ　→　バックグラウンド処理に移行 fgとタイプ　→　コンソール上で処理を再開 エイリアス エイリアスの作成 alias em=`emacs` ※ここではemという名前でemacsのエイリアスを作成\nエイリアスを無効にしてコマンドを実行 \\\u003cコマンド\u003e エイリアスの確認 alias \u003cエイリアス名\u003e エイリアスの削除 unalias em .bashrc のエイリアス設定も消去 シンボリックリンク ホームディレクトリにディレクトリ ~/c と ~/tmp を作成し、tmpから c へのシンボリックリンクを作成するには下記のようにする。\n$cd $mkdir c tmp $cd tmp $ln -s ../c シンボリックリンクの削除 $unlink c または rm c ※ただし rm c で削除する場合は rm c/ としてしまうと元のディレクトリの中身まで削除してしまうので注意！！\nリダイレクト \u003eをリダイレクトよぶ。リダイレクトの左で実行したコマンドの標準出力が、リダイレクトの右に書い たファイルに出力される。\n(例)ls -IR の出力をファイルls-IRに書き込む\n$ls -IR \u003e ls-IR パイプ |をパイプとよぶ。パイプの左側で実行したコマンドの標準出力が、パイプの右側のコマンドの標準入 力になる。\n（例）\nファイルから文字列PIを含む行をすべて抜き出す\n$less math.h | grep IR 【補足】math.hのファイルのパス(所在)を調べるにはlocateコマンドをインストールして使う\n$ sudo -E apt-get update $ sudo -E apt install mlocate $ locate math.h ファイルの先頭から50行のみを出力する。\nhead -50 \u003cファイル名\u003e | less ファイルの末尾50行のみを出力する。\ntail -50 \u003cファイル名\u003e | less CSVファイルの2列目のみを抜き出して表示する。\n$cut -f 2 -d \",\" retu.csv -f が表示する項数、-dが区切りの文字、-fと-dは基本一緒に使う\n2つのファイルの各行をくっつけて別のファイルに出力する。\n$paste -d \" \" data[1-2].txt \u003e data3.txt または\n$paste -d \" \" data1.txt data2.txt \u003e data3.txt 文字列の置換 ストリームエディタ sed を使うと、文字列の置 換を簡単にできる。あるファイル中の文字列 1 を 文字列 2 に置換した内容を出力したいときには以 下を実行する。\n$ sed −e ”s/文字列1/文字列2/g” \u003cファイル名\u003e ※gはすべての文字列を置換するためのオプション。これがない場合は各行で一番はじめにあった文字列1のみが置換される。\n（例）\nファイルの空白をすべて削除\n$sed -i -e \"s/ //g\" ファイル名 -i はファイルの中身そのものの変更 gはすべてのマッチした文字列を置換（gの指定がなく1行に２つ以上文字がある場合は1つ目しか置換されない ファイルの連続した5つのスペースをタブに変換してその結果をファイルに保存\n$sed -i -e \"s/[(space)(tab)][(space)(tab)]*/[(tab)]/g\" ファイル名 ※(space)および(tab)はそれぞれスペースキー、タブキーをクリック\nファイルの各行のはじめ(行頭)にある空白およびタブをすべて削除する方法\n$ sed -i -e \"s/^[ \\t]*//\" test ※^は行頭を表す\nその他の様々なコマンド コマンド 概要 locate \u003cファイル名\u003e そのファイルがシステム上のどこにあるか、一覧を表示するコマンド which \u003cコマンド\u003e 実行されるコマンドがどこのパスにあるか表示 diff ファイル1と2の違いを表示 cd - もとのディレクトリに移動 df ディスク使用率を表示 wc \u003cファイル名\u003e ファイルに含まれる文字数や行数を表示 nkf -g \u003cファイル名\u003e 日本語のテキストファイルの文字コードを判断 nkf -w \u003cファイル名\u003e テキストファイルの文字コードをUTF-8に変換 ",
    "description": "",
    "tags": null,
    "title": "Command",
    "uri": "/linux/command/index.html"
  },
  {
    "content": "Python Docstring Docstringとはメソッドやクラスについての説明文（コメント） __doc__というアトリビュート（属性）に格納されている `で書くこともできるが，一般的には\"で書く 対話型シェル等の環境でhelp関数を使用することで出力することも可能 VS Codeでは関数等にカーソルを合わせることで表示される Docstringは次のように定義分の先頭に記述する．\ndef test_func(param1, param2): \"\"\"Summary line. Extended description of function. Args: param1 (int): Description of param1 param2 (str): Description of param2 Returns: bool: Description of return value \"\"\" return True Docstringの書き方には様々なスタイルが存在している．\nGooglesスタイル #!/usr/bin/python # -*- coding: utf-8 -*- \"\"\"モジュールの説明タイトル - ソースコードの一番始めに記載すること - importより前に記載する Todo: TODOリストを記載 - conf.pyの``sphinx.ext.todo`` を有効にしないと使用できない - conf.pyの``todo_include_todos = True``にしないと表示されない \"\"\" import json import inspect class testClass() : \"\"\"クラスの説明タイトル クラスの説明文 Attributes: 属性1 (型): 説明 属性2 (:obj:`型`): 説明. \"\"\" def print_test(self, param1, param2) : \"\"\"関数の説明タイトル 関数の説明文 Args: 引数1 (型): 説明 引数2 (:obj:`型`, optional): 説明. Examples: 関数の使い方 \u003e\u003e\u003e print_test (\"test\", \"message\") test message \"\"\" return param1*param2 GoogleスタイルではAttributesやArgs, Returns, Yieds, Raises, Examples, Note, Todo という用途別のセクションが存在\nAttributes: 属性 Args: 引数 Returns: 返り値 Yields: yeild文を使用した関数の返り値 Raises: 例外処理 Examples: 使用例 Note: 注釈 Todo: Todoリスト（実装予定の処理など） 関数アノテーション Python3.0以降では関数アノテーション（Function Annotations）という仕組みが導入され， 関数の引数や返り値に直接型を記述することができる． ただしあくまで注釈のため，（環境によっては処理に使用されることもあるが）実行時に チェックされたりはしない．\ndef test_func(param1: str, param2: int) -\u003e tuple[str, int]: return (param1, param2) 参考 GoogleスタイルのPython Docstringの入門 Pythonのdocstring（ドキュメンテーション文字列）の書き方 DOCSTRING (J. Nishii HP) ",
    "description": "",
    "tags": null,
    "title": "Docstring",
    "uri": "/python/docstring/index.html"
  },
  {
    "content": "US配列でmozc（日本語）の使用 Ubuntu 22.04 入力ソースの変更 設定の地域と言語から，入力ソースを日本語（Mozc）のみにする Mozcのみに設定すると自動的に（たぶん）US配列に対応します キー割当の変更（半角全角キーをctrl+spaceに変更） 設定の『キーボード」の設定を選択 日本語（Mozc）の右側をクリックし，設定をクリック Mozc プロパティの「キー設定の選択」の「編集」を選択し，Hankak/zenkakuのところをすべてCtrl+Spaceに変更 モード/コマンドが以下3つのところの入力キーのところを3回クリック 変換前入力/半角空白を入力 変換中/半角空白を入力 直接入力/IMEを有効化 入力文字なし/IMEを無効化 ctrl+Spaceを押す 参考 Ubuntu18.04にて，USキーボードを用いて英数字と日本語（ひらがな）の切り替えを行う方法 ",
    "description": "",
    "tags": null,
    "title": "Mozc_settings",
    "uri": "/keyboard/mozc_settings/index.html"
  },
  {
    "content": "操作方法 gnuplotをC言語のプログラムから制御するには，パイプを使うのが最も簡単である．ここでは，C言語のプログラムによりパイプの生成しgnuplotを起動を行い，パイプを通してコマンドを送る．C言語のプログラム内にコマンドを記述することにより，プログラマーの意図したとおりにgnuplotを操作することができる．\nパイプを開く\nパイプを開くためには，ファイルポインターをつかう．そのためファイルポインターを格 納する変数を用意しなくてはならない．パイプの先もファイルとして扱われるのである． FILE *hoge; 次にgnuplotを立ち上げて，そこにパイプを接続する必要がある．次のようにする． hoge = popen(\"gnuplot -persist\",\"w\"); popen()関数がパイプを開く命令である．これで，gnuplot が立ち上がり，パイプを 通して，コマンドを送ることができる．オプションのpersistで，gnuplotが終了し てもグラフが残るようにしている．そうしないと，コンピューターの動作は高速なので， gnuplotは一瞬にして終了し，グラフが消えてしまい，ほとんど動作内容が分からなく なる．popen()関数の戻り値はパイプの情報を示すファイルポインターである．この ファイルポインターを指定して，コマンドを送ることになる． パイプを通してコマンドを送る パイプを通して，gnuplotにコマンドを送るのはfprintf()関数を使う． c fprintf(hoge, \"plot sin(x)\\n\"); このfprintfを使って，gnuplotにいくらでもコマンドを送ることができる．あたかも，C言語の向こう側でgnuplotが立ち上がって，それから命令を送っているかのように動作する．このようなことができるのが，コマンドを打ち込むCharacter-based User Interface(CUI)の良いところである．\nパイプを閉じる すべての動作が終了したならば，パイプを閉じなくてはならない．これも，ファイルの操作と全く同じである． c pclose(hoge); （例）三角関数のグラフ作成プログラム\n1 #include \u003cstdio.h\u003e 2 3 int main(void){ 4 FILE *gp; 5 6 gp = popen(\"gnuplot -persist\",\"w\"); 7 fprintf(gp, \"plot sin(x)\\n\"); 8 9 pclose(gp); 10 11 return 0; 12 } 参考文献 c言語からgnuplotを操作する(平成19年7月11日、山本昌志) ",
    "description": "",
    "tags": null,
    "title": "Using gniplot on C",
    "uri": "/c_lang/using_gniplot/index.html"
  },
  {
    "content": "ファイル分割 c言語のファイル分割では関数等を書き込むファイル.c``.hファイルとmain関数を書き込むファイルの3つのファイルを用意する\n関数を書き込むcalc.cファイル\n#ifndef _CALC_H_ #define _CALC_H_ // 関数avgのプロトタイプ宣言 double avg(double,double); #endif // _CALC_H_ calc.hファイル\n#include \"calc.h\" // 平均値を求める関数 double avg(double l,double m){ // 引数l,mの平均値を求め、rに代入する。 double r = (l + m) / 2.0; return r; } このファイルでは次のようにファイルに書き込み、プロトタイプ宣言を行う\n#ifnfdef _(大文字で記述したファイル名)_H_ #define _(大文字で記述したファイル名)_H_ プロトタイプ宣言; プロトタイプ宣言; ： #endif // _（大文字で記述したファイル名)_H_ ここで登場した#ifndef``#define``#endifはマクロといい、二重インクルードを防いでいる\nmain関数を書き込むmain.cファイル\n#include \u003cstdio.h\u003e #include \"calc.h\" void main(){ double d1,d2,d3; double a = 1.2,b = 3.4,c = 2.7; // 同じ計算が3回(関数を呼び出して計算） d1 = avg(a,b); d2 = avg(4.1,5.7); d3 = avg(c,2.8); printf(\"d1 = %f,d2 = %f,d3 = %f¥n\",d1,d2,d3); } コンパイルの仕方 gcc はコマンドラインで与えられたソースファイルしか読み込まないため、すべての.cソースファイルをまとめ上げて実行する必要がある\n下記2パターンの方法で実行が可能\n(即席回答)１コマンドで\n$ gcc main.c calc.c ※-o オプションで実行ファイル名を指定することも可能\nこの方法ではオブジェクトファイル*.oは最後に掃除・削除されるため残らない\n3コマンドで\n$ gcc -c main.c $ gcc -c calc.c $ gcc main.o calc.o -c オプションではオブジェクトファイル*.oを作るところまでしてくれる\nこの方法では途中までの.oファイルも残るため、途中でコンパイルエラーが起きてもそれまでのオブジェクトファイルは残るという利点がある。したがってたくさんの*.cファイルで構成される実務プログラムではこの方法で１本ずつコンパイルシていくのが一般的担っている。\nc言語コンパイルのちょこっと解説 gcc は、3つの下請けを順次起動する、親玉に過ぎません。\nプリプロセッサ - #include や #define を処理、本来(?)のC言語ソースにする コンパイラ - *.c をコンパイルし、オブジェクトファイル *.o を作る リンカ - 1個以上の *.o をまとめあげ、1個の実行形式ファイル(Windowsなら *.exe)を作る gcc の -c オプションは、「上記2.まででいいよ」指示です。\n即席回答 1. のやりかたは、これを全部まとめて1回にしてるだけ。\n*.o は、実は途中でできてますが、こういう要求のしかたをされたgcc は、最後にキレイに掃除・削除してしまいます。\n参考 一週間で身につくc言語の基本 -ファイル分割- 一週間で身につくc言語の基本 -複雑なファイル分割- Yahoo!知恵袋 -ソースファイルを複数使ったプログラムのコンパイル- もう一度基礎からc言語 -プロトタイプ宣言の省略- ",
    "description": "",
    "tags": null,
    "title": "Method of file division",
    "uri": "/c_lang/file_sep/index.html"
  },
  {
    "content": "プリアンブル Packages \\documentclass[dvipdfmx]{jsarticle} \\usepackage[dvipdfmx]{graphicx} \\usepackage[dvipdfmx]{color} \\usepackage{amsmath} \\usepackage{mathtools} \\usepackage{ascmac} \\usepackage{comment} \\usepackage{algorithmic} \\usepackage{algorithm} \\usepackage{here} \\usepackage{listings,jvlisting} \\usepackage{bm} \\usepackage{multicol} \\usepackage[square,sort,comma,numbers]{natbib} \\usepackage[subrefformat=simple]{subcaption}%サブキャプションを付けたいときに必要 gnuplotでlatex形式の数式を表示するための設定 % \\usepackage{gnuplot-lua-tikz} % \\usepackage{tikz} algorithm (疑似コード) の表示の設定 \\renewcommand{\\algorithmicrequire}{\\textbf{Input:}} \\renewcommand{\\algorithmicensure}{\\textbf{Output:}} ### 参考文献の文献番号の表示形式を変更 \\makeatletter%再定義に＠が使用される場合に\\makeatletterと\\makeatotherで挟む \\def\\@cite#1{\\textsuperscript{#1)}}%引用文献の文献番号の表示方法を変更 \\def\\@biblabel#1{#1)}%参考文献の先頭も変更 \\makeatother 文献番号等の色やリンクの設定 \\usepackage[dvipdfmx]{hyperref} \\hypersetup{% hyperrefオプションリスト setpagesize=false, bookmarksnumbered=true,%ブックマークを作成 bookmarksopen=true,%ブックマークを開く colorlinks=true,%カラーリンクを使用 linkcolor=black, %内部参照リンクカラー citecolor=blue, %文献カラー % filecolor=, %ローカルファイル参照リンクカラー urlcolor=blue, } program（c言語）の記述形式についての設定 \\renewcommand{\\lstlistingname}{program} % %c言語の設定 気に入ってる方 \\lstset{ language=c, basicstyle={\\ttfamily\\small}, tabsize=2, frame=trBL, numbers=left, numberstyle={\\ttfamily\\small}, breaklines=true, captionpos=t %キャプションを一番下にするならcaptions=b } jsreportでchapterの改行を削除する設定 % chapterの改行を削除 \\makeatletter \\def\\@makechapterhead#1{% \\vspace*{2\\Cvs}% 欧文は50pt {\\parindent \\z@ \\raggedright \\normalfont \\ifnum \\c@secnumdepth \u003e\\m@ne \\huge\\headfont \\@chapapp\\thechapter\\@chappos %% \\par\\nobreak %% \\vskip \\Cvs % 欧文は20pt \\fi \\interlinepenalty\\@M%先頭の空白で、章とチャプター名の間に空白が挿入される \\huge \\headfont #1\\par\\nobreak \\vskip 3\\Cvs} } % 欧文は40pt \\makeatother In document bibtexの表示 \\bibliographystyle{junsrt} \\nocite{*} \\bibliography{reference} ",
    "description": "",
    "tags": null,
    "title": "よく使う設定",
    "uri": "/latex/myset/index.html"
  },
  {
    "content": "markdown 記法 コマンド 概要 表示例 #[space] セクション — ##[space] サブセクション — ###[space] サブサブセクション — -[space] 箇条書きリスト — 1.[space] 1.[space] 番号付きリスト (数字はすべて1と記入することで順番に番号が割り振られる) — - [ ] 文字 チェック付き箇条書きリスト — \u003e[spave] 引用 — »[space] 二重引用 — *[文字]* イタリック体 イタリック **[文字]** bold（太字） bold ***[文字]*** 強調(イタリック\u0026ボールド) 強調 ~~取り消し線~~ 取り消し線 取り消し線 *** 水平線(アスタリスクの変わりに---や___でも良い) — [リンク名](URL) リンクの記述 Markdown記法 `[文字]` 文字の強調 str ```pythonprint(“Hello World) ``` ソースコードの記入(その他にもc言語やgnuplotなどでも使用できる) — \u003cbr\u003e 改行 改行します※改行後に文字を記入 \u0026nbsp 半角スペース \u0026ensp 半角より少し広めの空白 \u0026emsp 全角スペース \u0026thinsp, \u0026nbsp より狭い空白 ※表示例が空欄のところは下記を参照\nセクション 〜様々な記法の表示例〜 サブセクション ## サブセクション サブサブセクション ### サブサブセクション サブサブサブセクション・・・ #### サブサブサブセクション・・・ 箇条書き\u0026番号付きリスト A B C D E F a b 箇条書き1 箇条書き2 - A - B - C - D - E - F 1. a 1. b - [ ] 箇条書き1 - [X] 箇条書き2 引用 引用1\n二重引用\n\u003e引用1 \u003e\u003e二重引用 ソースコード（Python, c) for i in range(0, 10, 1): print(i) #include\u003cstdio.h\u003e int main(void){ int i; for(i = 0; i \u003c 10; i++){ print(i); } return 0; } ```python for i in range(0, 10, 1): print(i) ``` ```c #include\u003cstdio.h\u003e int main(void){ int i; for(i = 0; i \u003c 10; i++){ print(i); } return 0; } ``` 下線 アンダーラインの例\n\u003cu\u003e 下線のcode \u003c/u\u003e 数式 数式は$や$$で囲むことでlatexと同様に表示することができる\n$は $\\Deltax` のように組み込み\n$$ は下記のように段落形式になる $$ x = \\frac{-b\\pm\\sqrt{b^2}-4ac}{2a} $$\n※ものによっては数式表示できないものもあるが、下記のようにヘッダーに記述しhtml形式に変換すれば数式表示が可能\n\u003cscript type=\"text/javascript\" async src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML\"\u003e \u003c/script\u003e \u003cscript type=\"text/x-mathjax-config\"\u003e MathJax.Hub.Config({ tex2jax: { inlineMath: [['$', '$'] ], displayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"] ] } }); \u003c/script\u003e ```math x = \\frac{-b\\pm\\sqrt{b^2}-4ac}{2a} ``` でもOKかも？\n",
    "description": "",
    "tags": null,
    "title": "Basic operation",
    "uri": "/markdown/base/index.html"
  },
  {
    "content": "gnuplotでlatex形式の数式を挿入 準備 gnuplot では直接pdfをつくらずLaTeX（TikZ）を経由することで美しいグラフのpdfをつくることができる。\nこのグラフ作成にはtikz環境を使用し、これにより作成されたtexファイルを読み込みタイプセットすることが可能である。\nただしこの環境と関連するファイルはTeXLiveには含まれておらず、Linux等の環境ではGnuplotのインストール時にpackageマネージャーがスタイルファイル gnuplot-lua-tikzとそれに関連するファイルをLaTeXが探索するファイルにインストールしてくれるが、Windowsでは自分で環境を整える必要がある。\nターミナル（コマンドプロンプト）でc/texlive/texmx-local/tex/latexに移動し、gnuplotファイルを作成する。 gnuplotを起動してtexlive/texmx-local/tex/latex/gnuplotに移動し、以下のコマンドを実行する。 set terminal tikz createstyle コマンドプロンプト上でgnuplotファイルに移動し、mktexlsrを実行してls-IRを更新する。 TeXソースコードの生成 次のように入力し、出力をtilzにしてプロットする。\nset terminal tikz set output \"filename.tex\" plot sin(x) TeXで画像を出力 次のようにTeXファイルに記入することでfilename.texの画像を出力することができる。\n\\documentclass[dvipdfmx]{jarticle} \\usepackage{tikz} \\usepackage{gnuplot-lua-tikz} \\begin{document} \\input{filename.tex} \\end{document} 【参考文献】 gnuplotからTikZを介してpdfを生成 Gnuplot で LaTex 用の綺麗なグラフを作成する gnuplotでTeXフォントを用いる ",
    "description": "",
    "tags": null,
    "title": "How to insert formulas like latex",
    "uri": "/gnuplot/output_equation_on_latex/index.html"
  },
  {
    "content": "gnuplotのコマンドをファイルで保存する方法 拡張子は.plt コメントは#を使う コマンドを順に入力していけばOK!（コマンドの頭に特殊な文字を入れる必要はない） コマンドファイルの拡張子を.plt以外にした場合 下記のコマンドを打ち込む\n\u003e load \"コマンドファイル名.拡張子\" 参考文献 コマンド・ファイルを実行する ",
    "description": "",
    "tags": null,
    "title": "Command file",
    "uri": "/gnuplot/command_file/index.html"
  },
  {
    "content": "基本コマンド 関数の表示 \u003eplot x*x+2 カレントディレクトリの移動 \u003ecd 'C:\\Users' ※ディレクトリやファイル名は’’ ’ ’ ‘‘で囲む\nデータファイルの表示 \u003eplot 'test.dat' ※ファイル名は絶対パスまたは相対パスでOK ※ファイルデータのここの列はスペースで区切る\nデータファイルのフィッティング f(x)=ax**2+bx+c fit f(x) \"data.d\" u 1:2 via a,b,c 【出力結果】\n... Final set of parameters Asymptotic Standard Error ======================= ========================== a = 0.995618 +/- 0.005679 (0.5704%) b = 15.3268 +/- 0.051 (0.3327%) c = 0.970465 +/- 0.04439 (4.574%) ... \u003e ※Final set of parameterが最終的なフィッティングの結果を表す。Asymptotic Standard Errorは何だろ？\n便利なオプション \u003eplot \"ファイル名\" [オプション] オプション 意味 with lines 点と点を線で結ぶ using 1:2 データの1列目をx軸、2列めをy軸にとってプロットする with points pointtype 2 (pointtypeをptと略してもOK！) 点の種類を2に変える ※【参考】「gnuplotのグラフを調整するには」 with lines linetype 3 (linetypeをltと略してもOK！) 線の種類を3に変える with lp lt 3 lw 2 pt 5 ps 2 線の種類(lt)を3番目のもの，線の太さ(lw)を2に，点の種類(pt)を5番目のもの，点の大きさ(ps)を2にする。 (lp=linespoints,lt=linetype，lw=linewidth，pt=pointtype，ps=pointsize) title “データのラベル” プロットするデータの名前（凡例）を指定する※【参考】「凡例、ラベル等」 unset key (またはnotitle) データの名前（凡例）を消す グラフの調整 \u003eset [オプション] オプション 意味 xtics 1 x軸の目盛間隔を設定 title “タイトル” グラフのタイトルを設定 xlabel “ラベル” x軸の軸ラベルを設定 mxtics [数] x軸の副目盛の数を設定　※[数]は省略可。標準では1個の主目盛を10等分するように設定されている。 label at first 1.0,1.0 “コメント” x軸、y軸上の指定の位置（ここでは（1.0,1.0））に文字を書く　※詳しくはグラフに文字を書く参照 arrow from 1.0,0.0 to 1.0,4.0 nohead (1.0, 0.0)から(1.0, 4.0)まで線を引く（データラベルはなし） 参考文献 きれいなグラフを作ろう！gnuplot入門 副目盛の表示と目盛の調整 gnupotで軸に平行な線を引く [] ",
    "description": "",
    "tags": null,
    "title": "basic operation",
    "uri": "/gnuplot/base/index.html"
  },
  {
    "content": "gnuplotのインストール方法 $ sudo apt update $ sudo apt install gnuplot $ sudo apt install gnuplot-x11 gnuplot-x11をインストールすると、出力端末が\"X11\"になる。\n出力端末は以下の3つのパッケージが使用可能。ただしこれらは 排他的なパッケージのため、どれか1つのみしかインストールできない。 （他のをインストールしようとすると、すでにインストールされていた パッケージはアンインストールされる。）\ngnuplot-qt gnuplot-x11 gnuplot-nox 参考 Ubuntuのリポジトリからインストールできるgnuplotのパッケージについて LinuxにGnuplotをインストール ",
    "description": "",
    "tags": null,
    "title": "How to install gnuplot",
    "uri": "/gnuplot/install/index.html"
  },
  {
    "content": "グラフが記述した位置に正しく出力されない もとのやり方 \\begin{figure}[h] \\end{figure} このやり方では画像を連続して出力する場合などにテキストの最後にまとめて出力されてしまう。\n解決法 usepackage{here} \\begin{figure}[H]%[H]オプションで記述した位置に強制的に出力する \\end{figure} 参考 TeXで図をコード記述位置に強制的に出力する\n図表番号が正しく表示されない。 問題点 \\begin{figure}[H] \\label{graph3_4} \\begin{center} \\scalebox{0.9}{\\input{kadai3_4_graph.tex}} \\caption{$\\alpha = 1/4 $における分散$\\langle x(t)\\rangle$と時間$t$の関係} \\end{center} \\end{figure} \\begin{figure}[h] \\label{graph3_2} \\begin{center} \\scalebox{0.9}{\\input{kadai3_2_graph.tex}} \\caption{$\\alpha = 1/2$における分散$\\langle x(t)\\rangle$と時間$t$の関係} \\end{center} \\end{figure} \\begin{figure}[h] \\label{graph3_1} \\begin{center} \\scalebox{0.9}{\\input{kadai3_1_graph.tex}} \\caption{$\\alpha = 1$における分散$\\langle x(t)\\rangle$と時間$t$の関係} \\end{center} \\end{figure} 図\\ref{graph3_4}, \\ref{graph3_2}, \\ref{graph3_1} と書くと図4, 4, 4と出力されてしまう\n解決法 captionの中にlabelをかく\n\\begin{figure}[H] \\begin{center} \\scalebox{0.9}{\\input{kadai3_4_graph.tex}} \\caption{$\\alpha = 1/4 $における分散$\\langle x(t)\\rangle$と時間$t$の関係\\label{graph3_4}} \\end{center} \\end{figure} 参考 LaTeXの図番号がおかしい問題 - \\label{}を\\caption{}内に挿入 ",
    "description": "",
    "tags": null,
    "title": "Problem",
    "uri": "/latex/problem/index.html"
  },
  {
    "content": "LaTeXでの参考文献の書き方 \\begin{thebibliography}{99} \\bibitem{参照ラベル名1} 文献情報 \\bibitem{参照ラベル2名} 文献情報 ...... ...... \\end{thebibliography} このように記述してタイプセットすると、文献番号が\\bibitemの登録順に[1], [2], [3], … のように表される。\n本文中で文献情報を参照するには次のように記述する\n....といったことが指摘されている\\cite{ラベル名a}\\cite{ラベル名b} これをタイプセットすると....といったことが指摘されている[6][9]のように表示される。\n文中で文献番号だけでなくページ数などをオプション表示させるには次のように記述する。\n....といったことが指摘されている \\cite{ラベル名a}\\cite[第3章127ページ]{ラベル名b}。 引用を上付き右カッコで表示する LaTeXの引用表示を[xxx]ではなくxxx)にする方法。プリアンブルに次のように書く。\n\\makeatletter \\def\\@cite#1{\\textsuperscript{#1)}} \\makeatother 他にいろいろ変えたければ、\\textsuperscript{#1)}の部分を編集する (#1が冒頭に出てきたxxxにあたる)。 参考文献一覧の先頭も同様にに変えたい場合、プリアンブルの\\makeatletter～\\makeatother中に次のように書く。\n\\def\\@biblabel#1{#1)} 〇\\makeatleter, \\maketotherとは？ また，再定義するマクロの名前や再定義の内容に @ が現れる場合は，次のように再定義全体を \\makeatletter と \\makeatother で挟んでおく必要がある．\n\\usepackage{foo} \\makeatletter \\renewcommand\\bar{... 20pt ...} \\makeatother 参考 参考文献情報の書き方 創作メモ 【参考文献の表示の変更】 LaTeX Wiki パッケージ bibtex の使い方 .bib拡張子のファイルを用意し、内容を記述\n% 論文の場合 @article{hoshino2019, author = {Hikaru Hoshino and Yoshihiko Susuki and T. John Koo and Takashi Hikihara}, journal = {Journal of Dynamic Systems, Measurement, and Control}, title = {Structural Analysis and Control of a Model of Two-Site Electricity and Heat Supply}, year = {2019}, volume = {141}, number = {10}, pages = {101004}, doi = {10.1115/1.4043703}, } % 本の場合 @book{biggar2014, author = {Darryl R.Biggar and Mohammad Reza Hesamzadeh}, title = {The Economics of Electricity Market}, publisher = {John Wiley \u0026 Sons}, isbn = {9781118775752}, year = {2014}, } 本文中の参考文献を出力したい一に以下の記述を追加\n\\bibliographystyle{junsrt} %参考文献出力スタイル \\bibliography{hoge} %hoge.bibから拡張子を外した名前 なお、参考文献出力スタイル(bibliographystyle)には主に以下のスタイルがあります。\n欧文用 和文用 特徴 plain jplain 参考文献をアルファベット順で出力する unsrt junsrt 参考文献を引用された順で出力する 参考 thebibliography 環境 BiBTeXとは Qiita 星野光　参考文献の書き方 LaTeX 参考文献処理(BibTeX) BiBTeXでのURLの書き方 学術論文の情報をそれらしい形で出力する方法 Quiita ",
    "description": "",
    "tags": null,
    "title": "References",
    "uri": "/latex/references/index.html"
  },
  {
    "content": "記号付き箇条書き 見出し記号付きの箇条書きをするためには¥itemizeを使用する。\n【入力例】\n¥begin{itemize} ¥item aaa ¥item bbb ¥begin{itemize} ¥item ccc ¥end{itemize} ¥item ddd ¥end{itemize} 【出力例】\n・ aaa ・ bbb - ccc ・ ddd itemizeのマークの変更 itemizeを入れ子にすると、各項目の見出しとなる記号が変化する。 これらの記号は、クラスファイルのなかで次の命令に定義されている。\nレベル 命令 デフォルト １ ¥labelitemi ● ２ ¥labelitemii − ３ ¥labelitemiii ＊ ４ ¥labelitemiv ・ 【入力例１】itemizeの第１レベルの見出し記号を”○”に変更\n¥renewcommand{¥labelitemi}{○} ¥begin{itemize} ¥item マークが変わった！ ¥end{itemize} 【出力例１】\n○ マークが変わった！ 【入力例２】見出し記号を１つだけ”○”に変更\n¥begin{itemize} ¥item 普通のマーク ¥item[○]マークが変わります ¥end{itemize} 【出力例２】\n・ 普通のマーク ○ マークが変わります 番号付き箇条書き 見出し番号付きの箇条書きをするためには¥enumerateを使用する。\n【入力例】\n¥begin{enumerate} ¥item aaa ¥begin{enumerate} ¥item bbb ¥begin{enumerate} ¥item ccc ¥end{enumerate} ¥end{enumerate} ¥item ddd ¥item eee ¥end{enumerate} 【出力例】\n1. aaa (a) bb i. ccc 2. ddd 3. eee enumerateの番号の変更 enumerateの番号の出力形式を変更するには、カウンタの値を出力する命令を定義し直す。\nレベル カウンタ 出力する命令 デフォルトの出力 １ enumi ¥theenumi アラビア数字（１，２，３，・・・） ２ enumii ¥theenumii 小文字のアルファベット（a，b，c，・・・） ３ enumiii ¥theenumiii 小文字のローマ数字（小文字のローマ数字（ⅰ，ⅱ，ⅲ，・・・） ４ enumiv ¥theenumiv 大文字のアルファベット（A，B，C，・・・） 【例】¥enumiカウンタを大文字のローマ数字で出力する設定\n¥renewcommand{¥theenumi}{¥Roman{enumi}} 番号の出力形式 命令 出力形式 ¥arabic アラビア数字（１、２、３、・・・） ¥roman ローマ数字（ⅰ、ⅱ、ⅲ、・・・） ¥Roman ローマ数字（Ⅰ、Ⅱ、Ⅲ、・・・） ¥alph アルファベット（a、b、c、・・・） ¥Alph アルファベット（A、B、C、・・・） 見出し語付き箇条書き 見出し語付きの箇条書きをするためには¥descriptionを使用する。\n【入力例】\n¥begin{description} ¥item[日時] ○月○日 ¥item[場所] どこか ¥item[時間] ○時○分 ¥end{description} 【出力例】\n日時 ○月○日 場所 どこか 時間 ○時○分 参考 箇条書き ",
    "description": "",
    "tags": null,
    "title": "Bulletins in latex",
    "uri": "/latex/item/index.html"
  },
  {
    "content": "\\begin{figure}[位置指定] \\centering \\includegraphics[オプション]{ファイル名} \\caption{図のタイトル\\label{ラベル} \\end{figure} .tex拡張子の図を挿入するときは次のように記述する\n\\begin{figure}[H] \\centering \\scalebox{0.6}{\\input{ファイル名}} \\caption{図のタイトル\\label{ラベル}} \\end{figure} 位置指定 位置指定 出力場所 h 記述した部分 t ページの上部 b ページの下部 p 独立したページ オプション オプション指定 指定方法 keepaspectratio 縦横の比を維持 scale 図のサイズの変更(例:scale=0.7) width 横幅の指定(例:width=130mm) height 高さの指定(例:height=60mm) angle 回転角の指定(例:angle=90) origin 回転角の時の原点，c:中心，tl:左上，tr:右上，bl:左下，br：右下(例:origin=c) draft 図が入る枠だけ表示 clip BoundingBoxからはみ出た分を切り取る 複数枚のグラフを横に並べて表示 figure の中で minipage を使って，画像一つ分の領域を確保してから includegraphics を使う． \\linewidth, \\textwidth などを使って領域の幅を調整する． subcaption を使う時は，大抵プリアンブルに次のように書くとよい．\n\\usepackage[subrefformat=parens]{subcaption} subcaption パッケージが使用しているスタイルと競合する場合は諦めて， (a)や(b)などの文字を直接打ち込んで挿入する． 以下は1行2列で2つの画像を挿入する例．\n% --- Figure ------------------------------ \\begin{figure}[H] \\begin{tabular}{cc} % -- (a) -- \\begin{minipage}{0.45\\linewidth} \\centering \\includegraphics[keepaspectratio, scale=0.6]{fig/a.pdf} \\subcaption{1つめ} \\end{minipage} % --------- % \\vspace と \\hspace を駆使して間隔を調節 % -- (b) -- \\begin{minipage}{0.45\\linewidth} \\centering \\includegraphics[keepaspectratio, scale=0.6]{fig/b.pdf} \\subcaption{2つめ} \\end{minipage} % --------- %% main caption \\caption{Hogehoge} \\label{fig:1} \\end{tabular} \\end{figure*} % ----------------------------------------- \\minipage を応用すれば任意の配置で図を置くことができる． \\subcaption{} は minipage の中に必ず入れないといけない点に注意． 入れなかった場合，普通の caption が図Xでなくて (c) 等になってしまう．\n参考 LaTeX 図 LaTeX 図の挿入 TeXで好きな位置に図を配置する TeXによる文書作成 図の挿入 文字の拡大・縮小 - scalebox, resizebox ",
    "description": "",
    "tags": null,
    "title": "Figure",
    "uri": "/latex/figure/index.html"
  },
  {
    "content": "表の書き方 \\begin{table} \\label{ラベル名} \\centering \\caption{表題} \\begin{tabular}{|c|c|c|}%3列で表示、列と列の間に縦罫線を引く \\hline 西暦 \u0026 測定者 \u0026 測定方法 \u0026 測定結果 \\\\ \u0026 \u0026 \u0026 $\\times 10^8$ [m/sec] \\\\ \\hline \\hline 1638 \u0026 Galileo \u0026 二人が離れてランプの光を見る \u0026 (音速10倍以上) \\\\ 1675 \u0026 Roemer \u0026 木星の衛星の観測から \u0026 2 \\\\ \\hline \\end{tabular} \\end{table} コマンド コマンド 概要 \\hline 横罫線を引く ※2回かけば2つ横罫線が引かれる \\multicolmn{横に結合するマスの数}{表示形式、|c|等}{文字} 横に並んだ表の要素を結合する \\cline{3-5} 任意の列に横罫線を引く(ここでは3列目から5列目に横罫線を引く) packageを用いた表作成 概要 コマンド 備考 package セルの結合（縦） \\multirow{結合要素数}{*}{文字} 縦に並んだ表の要素を結合 multirow 幅を指定した横罫線 \\toprule[] 表の最上部の横罫線を引きます．は線幅です．線幅を設定しないデフォルトを強く推奨します． booktabs 横罫線(列見出しと本文、幅指定) \\midrule[] 列見出しと本文の間に横罫線を引きます． booktabs 横罫線(表の最下部、幅指定) \\bottomrule[] 表の最下部の横罫線を引きます． booktabs 任意の行への縦罫線 \\cmidrule{a-b} a 行目から b 行目まで罫線を引きます．trim の設定(lr)を強く勧めます． booktabs 行間スペース \\addlinespace[] 行間にスペースを挿入します． booktabs 二重罫線(\\cmidrule) \\morecmidrules \\cmidrule を二重罫線にするときに使います．他の罫線 (\\toprule, \\midrule, \\bottomrule) では不要です． booktabs スペースありの罫線 \\specialrule{}{}{} 上下にスペースを挿入した罫線を引きます．これを使う場合，三つの引数が必須です． booktabs ※＜wd＞は幅指定（pt,em, cmなど)\n※「」は線のトリミングの指定です．「(lr)」とすると，列の幅より少し短い罫線になります．格好良い罫線が引きますので，このオプションをつけることを強く推奨します．「l{-2.3mm}r{3.4mm}」のようにすると，罫線を左側に 2.3 mm 伸び，右側に 3.4 mm 短くなります．\n※「」と「」は，罫線上下の空白の幅を指定します．幅指定は (1pt, 0.5em, 1.2mm) のようにします．\ntabularの設定パラメータ パラメータ 動作 備考 l 左詰(left) — r 右詰 — c センタリング 引き続くブロックのセンタリング指定 p{長さ} 上/左詰めの幅指定カラム(paragraph) — m{長さ} 中/左詰めの幅指定カラム(middle) arry.styが必要 b{長さ} 下/左詰めの幅指定カラム(bottom) arry.styが必要 @{文字列} 文字列がセパレーターになる — ` ` 縦線(1本) ` ` 参考文献 LaTeX 表組 ",
    "description": "",
    "tags": null,
    "title": "Table",
    "uri": "/latex/table/index.html"
  },
  {
    "content": "LaTexコマンド集 概要 コマンド 詳細 パッケージ 文字サイズの変更 \\scalebox{倍率}{文字} 特定の文字やtexファイルを＜倍率＞倍にして出力する。{倍率}の部分を{幅}[高さ]のようにかき分けてもOK! graphics 行間の調整 \\begin{spacing}{倍率} 文章 \\end{spacing} 指定した倍率に行間を変更する setspace 部分的に2段組みにする \\begin{multicols}{2} 2段組にしたい文章 \\end{multicols} 2のところをかえれば多段組にできるかも(?) multicol 特殊文字 表示 コマンド 概要 Å {\\AA} 数式環境以外で単位Åを表示する。ただし数式中では\\mathrm{\\mathring{A}}とするか\\mathrm{\\AA}とする。 文字サイズ コマンド 標準を10ptとしたときの大きさ \\tiny 5pt \\scriptsize 7pt \\footnotesize 8pt \\small 9pt \\normalsize 10pt \\large 12pt \\Large 14.4pt \\LARGE 17.28pt \\huge 20.74pt \\Huge 24.88pt 数式環境 環境名 環境 パッケージ 特徴 equation \\begin{equation}\\end{equation} — 1行の数式を記入でき、数式番号がつく equation \\begin{equation*}・・・ amsmath equation環境とほとんど同じだが、数式番号がつかない eqnarray \\begin{eqnarray} 数式 $=$ 数式\\数式 $=$ 数式\\end{eqnarray} — 複数行の数式を、$で挟んでいる＝をそろえて表示する。※数式番号は各行に表示されるが、\\nonumberを使用してはならない。 eqnarray \\begin{eqnarray*}・・・ — 数式番号がつかない split \\begin{split} 数式 $= 数式 数式 $= 数式\\end{split} amsmath eqnarray環境の代替。equation環境の中で使用し、\u0026=をそろえて表示し、数式番号は複数行の中間に一つだけ表示する align \\begin{align} 数式 $= 数式\\・・・ amsmath {\u0026= で数式の=をそろえて表示し、数式番号を各行ごとに表示する。 align \\begin{align*}・・・ amsmath 数式番号がつかない aligned \\begin{aligned}・・・ amsmath equation環境内で使用でき、一部分のみalign環境にすることができる gather \\begin{gather}・・・ amsmath 複数の数式を中央揃えで表示し、各行ごとに数式番号をつける 数式表示 コマンド パッケージ 概要 \\bm{a} bm 括弧内の文字をベクトル（太字）で表示する \\label{数式のラベル} — 数式にラベル付けできる。数式の数式番号やページ数を呼び出すときに使用する。数式環境下で使用する \\ref{ラベル名} — 数式につけた式番号をラベル名を指定することで表示できる \\frac{分子}{分母} — 分数表示 \\int_{上限}^{下限} — 積分表示 \\left\u003c括弧なら何でも\u003e・・・\\right\u003c括弧\u003e — 括弧のサイズを括弧内の数式に自動で合わせる \\hspace{50pt} — { }内に指定した幅の文だけスペースを生成。使用できる単位は「pt」「pc」「mm」「cm」 \\; または \\: または \\, 空白を生成。左に行くにつれて大きくなる \\begin{pmatrix} a11 \u0026 a12 \u0026 a13\\\\\\\\ a21 \u0026 a22 \u0026 a23 \\\\\\\\ \\end{pmatrix} amsmath 行列 \\begin{vmatrix} a11 \u0026 a12 \u0026 a13\\\\\\\\ a21 \u0026 a22 \u0026 a23 \\\\\\\\ \\end{vmatrix} amsmath 行列式 \\cdot — どっと(中央) \\cdots — 3点ドット(中央) \\vdots — 縦の3点ドット \\ddots — 斜めの3点ドット ギリシャ文字 **ギリシャ文字を使用する場合にも数式環境下で記述する必要がある。\n出力 入力 出力 入力 出力 入力 α \\alpha β \\beta γ \\gamma δ \\delta ϵ \\epsilon ε \\varepsilon ζ \\zeta η \\eta θ \\theta ϑ \\vartheta ι \\iota κ \\kappa λ \\lambda μ \\mu ν \\nu ξ \\xi o o π \\pi ϖ \\varpi ρ \\rho ϱ \\varrho σ \\sigma ς \\varsigma τ \\tau υ \\upsilon ϕ \\phi φ \\varphi χ \\chi ψ \\psi ω \\omega Γ \\Gamma Λ \\Lambda Σ \\Sigma Ψ \\Psi Δ \\Delta Ξ \\Xi Υ \\Upsilon Ω \\Omega Θ \\Theta Π \\Pi Φ \\Phi ∑ \\sum ∏ \\prod — — — — 数学記号 出力 コマンド Å \\mathrm{\\mathring{A}} ₁P₂ {}_1P_2 ≤ \\leq ≥ \\geq ∈ \\in ± \\pm ≃ \\simeq ・ \\cdot ∂ \\partial 分数 frac{分子}{分母} ∇ \\nabla Δ（デルタ，ラプラシアン） \\Delta ≡ \\equiv 期待値の記号\u003c\u003e \\langle, \\rangle Ⅱ $\\rm{I\\hspace{-.01em}I}$ A(数式中で斜体表示を解除) \\rm{A} A(行列を表すA，太字かつ斜体無し) \\mathbf{A} Vebatim環境内での数式表示 Verbatim環境内で数式を使う場合は**プリアンブルに\\usepackage{fancyvrb}**と記述し、以下のようにドキュメント内に書く。\n\\begin{spacing}{0.8} \\begin{Verbatim}[commandchars=\\\\\\{\\}, codes={\\catcode`$=3\\catcode`_=8\\catcode`^=7}] $\\sum_[i=1]^[n]M_i$ \\end{Verbatim} \\begin{Verbatim}[%frame=single, numbers=left, commandchars=\\\\\\{\\},codes={\\catcode`$=3\\catcode`_=8\\catcode`^=7}] $f(x) = \\frac{1}{x} \\end{Verbatim} ※どちらがいいのかわからない…\nアルゴリズムの擬似コード https://li-feel.hatenablog.com/entry/2017/12/19/160618 https://qiita.com/jirojiro/items/0ae13aac9112a804f8d5 https://qiita.com/harmegiddo/items/04ae672402bb8c1d01a6 ソースコード LaTeXにソースコードを美しく貼る方法 図の挿入(input) https://hydrocoast.jp/index.php?LaTeX/%E5%9B%B3 https://www.okomeda.net/wp/484/ http://www.yamamo10.jp/yamamoto/comp/latex/make_doc/insert_fig/index.php https://atatat.hatenablog.com/entry/cloud_latex18_subcaption https://medemanabu.net/latex/scalebox-resizebox/ https://qiita.com/poemn/items/9142339749c87ebdb536 表紙テンプレ 卒論をTeXフォーマットなしから書くためのtips Quiita「LaTeXの卒論の表紙テンプレート \u003e\u003c」 参考文献 LaTeX - コマンド一覧 複数行の数式 【LaTeX】括弧類のかき方一覧と大きさの変更方法まとめ TeXで好きな位置に図を配置する LaTeXの特殊文字・特別記号 空白-水平方向のスペース - quad, hspace TeX 行間の調整 【LaTex】 fancyvrb — 洗練されたverbatim拡張機能の提供 TeXの記憶(89) — Verbatim環境の中で数式を表示する ",
    "description": "",
    "tags": null,
    "title": "Basic",
    "uri": "/latex/base/index.html"
  },
  {
    "content": "リポジトリのダウンロード GitHubにあるリモートリポジトリをhttps接続でダウンロードする場合は以下のコマンドで。(ただし，GitHub上のリポジトリ設定で若干異なる場合もある)\n$ git clone https://github.com/someone/somerepo.git 上記URLのsomeone, someprepoの部分はダウンロードしたいリポジトリによって変わる。\nssh接続 git clone git@github.com:\u003crepo\u003e.git cloneするときのURL以下はブラウザ上のgithubでcloneしたいリポジトリに移動し、codeをクリックすることで確認できる。\npublicの場合 $ git clone https://github.com/\u003crepo\u003e privateの場合 $ git clone https://\u003cusername\u003e@github.com/someone/somerepo.git Wikiページをcloneする場合は.gitの前に.wikiをつける。\n参照 リポジトリをクローンする 最新情報のダウンロード / 更新ファイルのアップロード ダウンロードしたファイルをいじるときには，まず，Gitサーバから最新バージョンをダウンロードしてから開始。\n$ git pull origin main これはサーバ(origin)から，masterブランチ(ブランチは後述)をダウンロードしてローカルリポジトリを更新し(fetch)，作業ディレクトリに反映(merge)するという意味。\nファイルを更新したら，gitサーバ(origin)にアップロードする。\n$ git add \u003c更新したファイル名\u003e $ git commit -m “修正点を少し書く” \u003c=ローカルリポジトリ(手元)に登録 $ git push origin main \u003c=リモートリポジトリに反映 とりあえず，これで最低限のファイル共有/共同編集はできる。\ngit addは，更新したファイルのうち，リモートリポジトリに反映したいファイルを指定(stagingとよぶ。これにより対象ファイルはstaging areaに移動)する。指定方法は以下のようにいろいろある。\n$ git add . 新規作成ファイルと更新ファイルを全部指定 $ git add -u 前回から更新したファイルのみ指定(新規作成ファイルは含まない) $ git add -A .新規作成ファイル，更新ファイル，削除ファイル全部指定 ただし，リモートリポジトリは，知らないヒトが勝手に’git push’で書き換えたりできるとよくないので，アクセス制限をできるようになっている。アクセス制限がかかっているリモートリポジトリの内容の修正をリクエストするにはPullRequestをする(後述)。\ngitサーバでリポジトリを削除する方法 削除したいリポジトリのページに移動 上の一覧からSettingsをクリック 下の方にあるDelete this repositoryをクリック 警告を読んで、消したいリポジトリの名前を入力 I understand the consequences, delete this repositoryをクリック 参照 Qiita「githubでリポジトリを削除する方法」 ローカルリポジトリの削除(git initの取り消し) .gitファイルを削除して、git initしたディレクトリに対して、それを取り消す\n$rm -rf .git 参照 Qiita 「git init取り消し」 コミット履歴の確認 $ git log --graphというオプションをつけるとコミットログをアスキーアートでカラフルに表示シてくれる。たくさんブランチがあるリポジトリなどでは見やすくなる\n$ git log --graph コミットのキャンセル ステージングのキャンセル ステージング(git add)から変更ファイルを取り消す場合は下記コマンドを実行します。\n$ git rm --cached \u003cファイル名\u003e ステージング(git add)から削除するだけでなく、ファイル自体も削除する場合には下記コマンドを実行します。\n$ git rm -f \u003cファイル名\u003e コミットの取り消し 直前に行ったコミットを取り消すには下記コマンドを実行します。\n作業ディレクトリの内容はコミット時のままで、「コミットした」ということだけが取り消されます。\n「–soft」オプションは省略できます。\n$ git reset [--soft] HEAD^ 作業ディレクトリに加えた変更点もコミット前に戻す場合は以下のコマンドです。\n$ git reset --hard HEAD^ 作業ディレクトリをローカルリポジトリの最新状態にするには下記コマンドを実行します。\nindexもクリーンされます。\n$ git reset --hard HEAD コミット後の修正 前回のコミットを破棄して、現在のIndex内容で新しくコミットします。\n「reset」と「commit」を実行することと同様の処理となります。\nコミットメッセージの修正なども行えます。\n$ git commit --amend 参照 Camp Netwoek「Gitローカルリポジトリ操作」 プッシュの取り消し 基本、プッシュした情報をローカルリポジトリに戻すことはできない。 そこで、コミットを打ち消すコミットを生成する（git revertコマンド）。プッシュ済みのコミットを消す方法もあるが、よくなさそう。。git revertでは打ち消したコミットの記録が残る。\ngit revert 指定したコミットを、add前に戻してくれるコマンド。\nターミナル(間違って、masterにpushしちゃった時など)\n% git log # コミットログの確認 % git revert 間違えたコミットID # 指定したコミットを、add前に戻す # ターミナルが編集できなくなるので、`:q`で脱出 GitHub Desktopを確認すると、git revertで生成したコミットが生成されてるハズ。これをpushすれば、リモートリポジトリで打ち消されているハズ。この時、ローカルからも消えるので、注意。 参)ターミナルで実施する場合\n% git pull # 念のため、ローカルのmasterを最新にする % git checkout pushすべきだったブランチ # ブランチを切り替える % git merge master % git add . # 変更箇所をadd % git commit -m \"コミットメッセージ\" % git push origin pushしたかったブランチ ※ 念のため、ローカルのmasterをpull(最新)にしてから、作業してたブランチも最新状態をmerge(反映)し、pushすべきだったブランチにpushするイメージ。\nその他のコマンド よく使用するコマンド コマンド 概要 git init 対象のディレクトリをバージョン管理できる入れ物に格納してくれるイメージ git add ●● ●●をインデックスに追加。※ git add . とすると「全て」を対象にできる git commit -m ‘メッセージ’ コミット git status 現在のファイルの状態(staging等)一覧を表示する git reset \u003cファイル名\u003e 間違えてgit addしたファイルの取り消し(stagingの取り消し) git log コミットログの履歴確認（コミットID、コミットメッセージ、日時） git remote add origin リモートリポジトリのURL(https：//github.com/GitHubのユーザー名/リモートリポジトリ名.git) ローカルリポジトリにリモートリポジトリの情報を付与し、紐づける git push origin ブランチ名 ローカルの変更点を、リモートに反映。ブランチ名 masterなら、マスターブランチにプッシュ。 git pull origin master リモートリポジトリ（origin）のマスターブランチをローカルリポジトリに反映。 git clone https：//github.com/ユーザー名/リモートリポジト名.git リモートリポジトからローカルリポジトリにダウンロード git remote -v ローカルにクローンしたリポジトリのリモートURL確認方法 コミットメッセージ例 コミットメーセージ 意味 Create ●● class クラス作成 Add relation with ●● リレーションの追加 Add presence validation of ●● バリデーションの追加 Add #parse_body for parse body’s markdown - 参照 上記にも記入済み Qiita「githubでリポジトリを削除する方法」 Qiita 「git init取り消し」 Camp Netwoek「Gitローカルリポジトリ操作」 その他 Qiita「GitとGitHubの基礎」 Qiita「ローカルgitリポジトリでリモートのリポジトリURLを確認する方法」 Qiita「【GitHub】アカウント名を変更するときの注意点 ",
    "description": "",
    "tags": null,
    "title": "Repository Operations",
    "uri": "/github/repository-edit/index.html"
  },
  {
    "content": "コミットの取り消し 直前のコミットの取り消し $ git reset \u003c打ち消したいコミットID\u003e 直前のコミットを打ち消す場合には以下のコマンドを使用\n$ git reset --soft HEAD^ --softオプション：ワークディレクトリの内容はそのままでコミットだけを取り消したい場合に使用 --hardオプション：コミット取り消した上でワークディレクトリの内容も書き換えたい場合に使用 HEAD^: 直前のコミットを意味 HEAD~{n}n個前のコミットを意味 コミットの打ち消し $ git revert \u003cコミットのハッシュ値\u003e 作業ツリーを指定したコミット時点の状態にまで戻し、コミットを行う。\nコミットの上書き 直前のコミットに上書きする場合は以下のコマンドを使用\n$ git commit --amend リモートリポジトリからのみ特定のファイルを削除 git rm --cached \u003ctarget file\u003e ディレクトリを削除する場合は\n$ git rm --cached -r \u003ctarget directory\u003e reference [Git]コミットの取り消し、打ち消し、上書き 【Git入門】git commitを取り消したい、元に戻す方法まとめ Gitのリモートリポジトリから特定のファイルを削除する方法 ",
    "description": "",
    "tags": null,
    "title": "About resetting commit and rm the file",
    "uri": "/github/commit/index.html"
  },
  {
    "content": "公開鍵を GitHub に登録することで、push 時などにパスワードを入力する手間が省略可能 公開鍵および秘密鍵の作成と登録 公開鍵および秘密鍵を作成\nssh-keygen -t ed25519 公開鍵 を GitHub に登録\ncat ~/.ssh/id_ed25519.pub # コマンドを実行して表示されたすべての文字列を GitHub に登録 # # ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX user@host # ↑こんな感じの文字列をすべてコピペ GitHub の公開鍵登録の手順は、\nSettings SSH and GPG keys [New SSH key] タイトルをつけ公開鍵をコピペし [Add SSH key] SSH の設定 GitHub で使用する秘密鍵を設定するため、~/.ssh/config に設定を記述\n最終行 (ProxyCommand の部分) は学内のコンピューターの場合にのみ設定\n接続の確認 $ ssh -T git@github.com ターミナルで実行して以下のように表示されればOK!\nHi (User名)! You've successfully authenticated, but GitHub does not provide shell access. ※途中で以下のプロンプトメッセージが表示されたらyesと入力 The authenticity of host '[ssh.github.com]:443 (\u003cno hostip for proxy command\u003e)' can't be established. RSA key fingerprint is [以下省略]. Are you sure you want to continue connecting (yes/no/[fingerprint])? The authenticity of host '[ssh.github.com]:443 (\u003cno hostip for proxy command\u003e)' can't be established. RSA key fingerprint is [以下略]. Are you sure you want to continue connecting (yes/no/[fingerprint])? ssh接続がうまく行かないとき レポジトリのディレクトリに入り次のコマンドを入力\ngit config remote.origin.url https://github.com/[ユーザID]/[リポジトリ]となっていたらレポジトリのディレクトリ内の/.git/configを開いてurlの覧を\nurl = github.com:[ユーザID]/[リポジトリ].git と書き換える。\nまたは以下のコマンドを実行\ngit remote set-url origin [Host名]:[ユーザID]/[リポジトリ].git ※~/.ssh/configで設定していない場合は\ngit remote set-url origin git@github.com:[ユーザID]/[リポジトリ].git でOK!\n参照 Qiita「Githubでssh接続する手順」 GitHubヘルプを参考にSSHキーの設定を行ってみた\n",
    "description": "",
    "tags": null,
    "title": "Public key authentication settings in github",
    "uri": "/github/ssh/index.html"
  },
  {
    "content": "ファイルの変更差分の確認 $ git diff [変更前のコミット識別子]..[変更後のコミット識別子] ブランチ同士の差分の確認 $ git diff master..develop masterブランチにプルリクエストを送る前にdevelopブランチに追加した内容を確認できる\ngit pull する前に、リモート追跡ブランチとの差分を確認する リモートリポジトリからの変更内容の取得 $ git fetch origin ローカルリポジトリのmasterブランチの最新コミット(HEAD)とリモート追跡ブランチ(origin/master)を比較 $ git diff HEAD..origin/master git push する前に、リモート追跡ブランチとの差分を確認する $ git diff origin/master..HEAD 参考 第9話 git diff で差分を確認！【連載】マンガでわかるGit ～コマンド編～ ",
    "description": "",
    "tags": null,
    "title": "Confirmation of difference",
    "uri": "/github/diff/index.html"
  },
  {
    "content": "ブランチとは？ ブランチとは平行世界のようなものである。 ブランチを活用することでmasterブランチをそのまま据え置いた状態で、別のブランチで新機能を試しながら作ることができる。\nブランチの正体は？ github公式ドキュメントによると、\nブランチとは（中略）コミットを指す軽量なポインタに過ぎません と説明されている。\nリポジトリの正体は.gitという隠しフォルダのことであり、この中にあるrefs/heads/masterファイルこそがブランチの正体である。 このファイルの中身をcatしてみると\ndd95ddf066d452949bb54304bbf43ab3dadfee25 のように英数字の羅列が保存してある。これはコミットIDまたはコミットハッシュ値と呼ばれている。またコミットによって生成されたデータのことをコミットオブジェクトといい、一つのコミットオブジェクトに対して４０文字のIDを割り当てるのがコミットIDである。\nつまりブランチとはただ単に特定のコミットIDを指しているだけである。\nまたコミットオブジェクトにはそれぞれ\ntree parent author committer の情報が保存されており、parentが一つ前のコミットIDを示している。\n例 作成したsample.txtに何かしらの変更を加え、\n$ git add sample.text $ git commit -m \"2回目のコミット\" $ git log とすると、次のような結果が得られる。\nこのとき以下のように実行すると、コミットオブジェクトを確認することができる\n$ git cat-file -p 0e9556 tree e290b48b356d721ae54d1edb03993802cc98bad8\nparent 02f11b759bfeb461e117c5da18bb2dcbe06d862a\nauthor llminatolllXXX@mail.coml1562052826 +0900\ncommit errllminatolllXXX@mail.coml1562052826 +0900\nこのparentの部分が前のコミットのコミットIDを表しており、一番はじめのコミットではpaerntは保存されていない\nひとことメモ　** コミットIDは何を元に作られているの？** コミットID（コミットハッシュ値）は、実はこのコミットオブジェクトのバイト数と中身を使い、計算されて作られています。よって、コミットした人の名前やコミットした時間、指し示すparent、treeが違えばコミットハッシュ値も違うものになります。\nその証拠に、同じ内容をコミットしていても、あなたの練習用リポジトリとわかばちゃんのコミットIDは違うはずです。コミットハッシュ値についてもっと深く知りたい方は、こちらの記事が詳しいのでおすすめです。\nGitのコミットハッシュ値は何を元にどうやって生成されているのか ブランチの操作 今存在するブランチの確認\n$ git branch ※アスタリスクのついているブランチが現在のブランチ\nブランチの作成\n$ git branch \u003cbranch name\u003e ローカルブランチの作成をリモートにプッシュ\n$ git push origin \u003cbranch name\u003e ブランチの移動\n$ git checkout \u003cbranch name\u003e ※指定したブランチへ移動する\n-bオプションを指定するとブランチの作成とチェックアウトを同時に行える -fオプションを指定するとブランチを強制的に切り替えることができる（コミットしていない作業データは消えるため注意) リモートブランチの反映\n$ git fetch origin ブランチの削除\n$ git branch -d \u003cbranch name\u003e # ローカルブランチの削除(強制削除する場合は`-D`オプションに変更) $ git push origin --delete \u003cbranch name\u003e # リモートブランチの削除(`$ git push origin :\u003cbranch name\u003e` でも可) remote には存在するブランチが local には存在しない場合\n$ git brantch -a でブランチを表示\n$ git checkout -b release origin/release で解決できる! 参考 第2話 ブランチとは？ポインタってどういう意味？作成・確認・切り替え方法【連載】マンガでわかるGit ～コマンド編～ Git Branch コマンド リモートブランチの更新が見えない時 ",
    "description": "",
    "tags": null,
    "title": "Branch",
    "uri": "/github/branch/index.html"
  },
  {
    "content": "group内で作成したrepositoryのアクセス権限を設定する方法\n操作したいrepositoryのsettingsをクリック 左のAccessのCollaborators and teamsをクリックし、パスワードを入力 Add peopleまたはAdd teamsをクリックし、アクセスを許可するpeopleまたはgroupを追加する ",
    "description": "",
    "tags": null,
    "title": "Repository Access Restrictions",
    "uri": "/github/repository-access/index.html"
  },
  {
    "content": "ローカルリポジトリの作成 リモートリポジトリに登録したいディレクトリにして次のコマンドでバージョン管理のための初期化を行う。\n$ git init これで，ローカルリポジトリ(.git/)が作られ，git initを実行したディレクトリが作業ディレクトリになる。\n以下のようにgit initでローカルリポジトリ用のディレクトリを新規作成することもできる。\n$ git init \u003ctarget directory\u003e $ cd \u003ctarget directory\u003e .gitignoreの作成 gitコマンドでは無視したいファイルが有る時(LaTeXの一時ファイル等)は，.gitignoreという名前のファイルを作っておく。 以下は例。latex関連の一時ファイルを無視するように設定している。\n$ cat .gitignore *.aux *.idx *.log *.toc *.ist *.bbl *.blg *.dvi *.ilg *.ind *.lot *.out *.synctex.gz *~ ローカルリポジトリに登録するファイルやディレクトリの指定 下記のいずれかのコマンドで登録するファイルやディレクトリを指定\n$ git add . # 現在のディレクトリにある全てのファイル/ディレクトリを登録 $ git add figures/ # ディレクトリ figures/ 以下のファイルを登録 $ git add *.tex # すべての .tex ファイルを登録 $ git add \u003cファイル名\u003e #特定のファイルのみを登録 ローカルリポジトリにファイル登録 git addで指定したファイルやディレクトリを，ローカルリポジトリに登録する。\n$ git commit -m \"first commit\" -mは1行コメントをつけるオプション。 更新したファイルをローカルリポジトリに反映するときにも，同様にgit addとgit commitを実行する。ここまではローカルリポジトリの管理。\ngitサーバ上で新規リモートリポジトリを登録 GitHubにログイン\n左上のRepositoriesの隣りにあるNewのタブをクリック\nrepository作成ページで以下のことを記入\nRepository name : リポジトリの名前 Description : リポジトリの内容 Public / Privateの選択 Create repositoryをクリック\nリポジトリ作成後のすべきこと（コマンドライン）が記載されたページが表示されるので、URLの覧をチェックしておく。以下はその一例。\necho \"# re\" \u003e\u003e README.md git init git add README.md git commit -m \"first commit\" git branch -M main git remote add origin https://github.com/\u003cユーザーネーム\u003e/\u003crepository名\u003e.git git push -u origin main コマンドラインの上にHTTPSかSSHかを選択する覧もあるので、SSHにする場合はここで選択しておく\n参照 ITmedia 「Git/GitHubにおけるリモートリポジトリの作成、確認、変更、更新時の5コマンド」 SAMURAIENGINEER 「【Git初心者向け】リポジトリの作成からpushまで」 トークンの作成 2021年8月13日以降、GitHubのリポジトリにアクセスするには、ユーザ名とパスワードではなくアクセストークンが必要になった。\nGitHubにログイン 右上のアイコンをクリックし、一覧からSettingsをクリック 左下のDeveloper settingsをクリック 左の覧からPersonal avvess tokensをクリック 右上のGenerate new tokenをクリックしてアクセストークンを作成 以下のことを記入 Note : トークン名 Expiration : トークンが使用できる期限。この期限が切れると新しくトークンを作成する必要がある。（上限あり） Select scopes : 少なくともrepoの覧はチェックを入れること。 トークンは一度ページを移動すると二度と見れなくなってしまうため、作成後はコピーして保存しておくこと！！！ 参照 アクセストークンの作成方法 Qiita「アクセストークンとSSH接続について」 Gitサーバへの登録 ローカルリポジトリとgitサーバ上のリモートリポジトリの紐付け ローカルリポジトリ(要はgit管理したいプログラム群のあるディレクトリ)をgitサーバ上のリモートリポジトリと紐付ける。リモートリポジトリを作成した際に表示されたすべきこと（コマンドライン）を順次実行していく。 以下はその一例。\ngit branch -M main git remote add origin https://github.com/\u003cユーザーネーム\u003e/\u003crepository名\u003e.git git push -u origin main ただしURLの覧にはhttps://とgithub.com/...の間に\u003cトークン\u003e@を加えて実行する。\n$ git remote add origin https://\u003cトークン\u003e@github.com/\u003cユーザーネーム\u003e/\u003crepository名\u003e.git ユーザーネームとパスワードを求められたらユーザーネームには自分の登録名、パスワードにはトークンを打ち込む\ngit remoteは，サーバ上のファイル置き場(リモートリポジトリ)を登録する命令。 この例では，URL(https://github.com/\u003cユーザーネーム\u003e/\u003crepository名\u003e.git)を，originという名前(識別子)で登録している。 識別子 origin は他の名前にしても良いが，慣習的にこの名称が使われている。 someone/somerepoの部分は，GitHub上に作ったリポジトリの名前に従って設定する。\nただし，非公開リポジトリ(private repository)に登録する場合は，以下のようにGitHubの認証情報を加える。\n$ git remote add origin https://\u003cusername\u003e@github.com/s\u003cユーザーネーム\u003e/\u003crepository名\u003e.git セキュリティを高めるためには，ssh keyをGitHubに登録しておいて，ssh通信にするほうが無難。この場合のgit rmoteは以下のなる。\n$ git remote add origin git@github.com:someone/somerepo.git 登録情報の確認 $ git remote -v 登録情報を間違えていたら，以下のコマンドで一旦削除して再登録する\n$ git remote rm origin ",
    "description": "",
    "tags": null,
    "title": "How to Create Repository",
    "uri": "/github/create-repository/index.html"
  },
  {
    "content": "アカウントの作成 GitHubのホームページでアカウントを作成する\npro版（GitHub Education)への変更方法 GitHub Educationにアクセス 右上のBenefitsをクリック IndividualsのGet student benefitsを選択 申し込むための資格が書いてあります。 学生であること。 学校からもらったメアドがあること。 GitHubアカウントを持っていること。 13歳以上であること。 Screenshot from 2020-09-23 15-02-45.png Add an email addressから学校のアドレスを追加 How do you plan to use GitHub?にgithubの利用目的を記入 Submit your informationを押して完了 ※利用目的は形式的なものなので（多分）適当に書いてOK! 参考ページ Qiita , @Kobayashi2019「GitHub Educationのメリットと申請方法」\ngitコマンドのインストール git コマンドをローカルマシンにインストールする。 Mac OSの場合は，Xcode コマンドラインツールをインストールしていたら，gitコマンドもインストールされている。\napt-get対応のLinuxディストリビューションなら以下でたいていOK。\n$apt-get install git 自分のアカウント情報のローカルマシンへの登録 $git config --global user.name \u003cユーザーネーム\u003e $git config --global user.email \u003c登録したメールアドレス\u003e $git config --global core.editer vi #コメント編集につかいたいエディタを設定（デフォルトはvi） --globalは，ローカルリポジトリ作成時のデフォルト設定にするためのオプション。 特定のリポジトリでのみ別の設定にしたいときには，ダウンロードしたポジトリ内に移動してから--localを指定して実行する。\n必要に応じてproxy設定 外部とのネットワーク接続にproxy設定が必要な環境の場合は，Proxy設定のページを見て設定をする。ターミナルとgitのproxy設定をする。\ngit pull するたびに警告が出る… Git2.27での git pull 時の warning について ",
    "description": "",
    "tags": null,
    "title": "Settings",
    "uri": "/github/settings/index.html"
  },
  {
    "content": "Docker のインストール後の設定 docker group に追加 Docker サービスをデフォルトで起動時に開始するように設定 $ sudo systemctl enable docker.service $ sudo systemctl enable containerd.service 無効化は以下の通り\n$ sudo systemctl disable docker.service $ sudo systemctl disable containerd.service インストール後の設定はこちら\n",
    "description": "",
    "tags": null,
    "title": "Post Installation Steps for linux",
    "uri": "/docker/post-installation-step/index.html"
  },
  {
    "content": "docker での copy と mount コピー ホストとコンテナ間でファイルをコピーするときは次のようにする\n$ docker cp \u003coption\u003e \u003cコピー元path\u003e \u003cコピー先path\u003e コンテナのパスは\u003ccontainer name\u003e:\u003cpath\u003eのように書く\nマウント ※マウントはコンテナをrunするときにオプションとして指定する\nバインドマウント 既存（ホスト側）のファイルやフォルダをマウントする方法のこと。\n普通のファイル同様に編集やバックアップが可能となるため、頻繁にアクセスするファイルなどはこちらに置く。\n$ docker run (省略) -v \u003cマウント元のパス\u003e:\u003cマウントポイント\u003e (省略) ボリュームマウント ボリュームを作成し、マウントする方法のこと。\nDockerホストから変更を加えたくないようなファイルなどはこちらに置く。\nボリュームの作成\n$ docker volume create \u003cvolume name\u003e ボリュームの削除\n$ docker volume rm \u003cvolume name\u003e マウント方法\n$ docker run (省略) -v \u003cボリューム名\u003e:\u003cマウントポイント\u003e (省略) ※ただしボリュームが存在しないときには新規作成される。\ndocker volume コマンドにおけるサブコマンド\nサブコマンド 意味 create ボリュームの作成 inspect ボリュームの詳細情報を確認 ls ボリューム一覧を確認 prune コンテナからマウントされていないボリュームをすべて削除 rm ボリュームの削除 ボリュームマウントとバインドマウントを明示的に指定した設定方法 $ --mount type=\u003cbind or volume\u003e,src=\u003cマウント元\u003e,dst=\u003cマウント先\u003e ※この方法ではバインドマウントとボリュームマウントが明示的に指定されているためわかりやすく、 ボリュームが存在しない場合には新規作成されずエラーが出力される。そのため-vオプションより --mountオプションを使用することが推奨されている。\nsrc は source でもOK dst は destination でもOK type=tmpfs としてメモリーを特定のマウント先に指定することもできる。 appendix ボリュームのバックアップ方法 $ docker run --rm -v \u003cvolume name\u003e:/src -v \u003cバックアップ先のフォルダ名\u003e:/dest busybox tar czf /dest/backup.tar.gz -C /src . 軽量なLinux イメージの busybox を起動 バックアップ対象をコンテナの /src にボリュームマウント Docker ホストの任意のディレクトリを /dest にバインドマウント /src 以下の全ファイルが /dest/backup.tar.gz にバックアップされる コンテナが破棄される ※ただしこの方法ではバックアップしたいボリュームのボリューム名がわかっていなければならない。 バックアップ対象をボリューム名ではなくコンテナのディレクトリ名で指定したい場合は--volume-fromオプションを使用する！\n$ docker run --rm --volume-from \u003ccontainer name\u003e -v \u003cバックアップ先\u003e:/dest busybox tar czf /dest/bachup.tar.gz -C /var/lib/mysql . バックアップのリストア バックアップを取っておいたデータを任意のvolumeに復元する方法\n$ docker run --rm -v \u003cvolume名\u003e:/dest -v \u003cバックアップデータの置かれているディレクトリ\u003e:/src busybox tar xzf /src/backup.ta.gz -C /dest データボリュームコンテナ ",
    "description": "",
    "tags": null,
    "title": "Copy and Mount from Docker container or to Docker container",
    "uri": "/docker/copy-mount/index.html"
  },
  {
    "content": "1. Dockerのインストールの仕方 古いバージョンをアンインストール\n$ sudo apt-get remove docker docker-engine docker.io containerd runc It’s OK if apt-get reports that none of these packages are installed.\n1.1 Install methods Dockerのリポジトリをセットアップしてそこからインストール方法が推奨されている。\n異なる方法もあるが、ここではリポジトリからインストールを行う。\nリポジトリの設定\n$ sudo -E apt-get update $ sudo apt-get install \\ ca-certificates \\ curl \\ gnupg \\ lsb-release Dockerの公式GPGキーを追加\n$ sudo mkdir -p /etc/apt/keyrings $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg 次のコマンドを使用して、リポジトリを設定\n$ echo \\ \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\ $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list \u003e /dev/null 1.2 DockerEngineのインストール aptパッケージインデックスを更新し、Docker Engine、containerd、Docker Composeの最新バージョンをインストールするか、次の手順に進んで特定のバージョンをインストールする $ sudo apt-get update $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin Docker Engineの特定のバージョンをインストールするには、リポジトリに使用可能なバージョンをリストしてから、以下を選択してインストールを行う リポジトリで利用可能なバージョンを一覧表示\n$ apt-cache madison docker-ce たとえば、2番目の列のバージョン文字列を(5:20.10.16~3-0~ubuntu-jammy)使用して特定のバージョンをインストールするならば、次のようなコマンドを実行する\n$ sudo apt-get install docker-ce=5:20.10.13~3-0~ubuntu-hirsute docker-ce-cli=5:20.10.13~3-0~ubuntu-hirsute containerd.io docker-compose-plugin 1.3 proxyの設定 Docker Engine の proxy 設定 docker pull などでイメージを落としてくる場合はDocker Engine にプロキシ設定をする必要がある。\n/lib/systemd/system/docker.serviceで環境変数を指定。[Service]の欄の下にEnvironmentを追記すればOK！\n[Service] Environment=HTTP_PROXY=http://{HOST}:{port} Environment=HTTPS_PROXY=http://{HOST}:{port} Docker コンテナ起動時の proxy 設定 ~/.docker/config.json を書いておくとコンテナ内に HTTP_PROXY などを自動で設定してくれる\n※Docker Compose のときにはつかえない？\n{ \"proxies\": { \"default\": { \"httpProxy\": \"http://{HOST}:{port}\", \"httpsProxy\": \"http://{HOST}:{port}\" } } } proxy設定の反映とDockerを再起動\n$ sudo systemctl daemon-reload $ sudo systemctl restart docker やってみたけどあまり意味のなかった設定 upstartの人\n$ sudo cat /etc/default/docker （省略) export no_proxy='export no_proxy=127.0.0.1,localhost,xxx.xxx.xxx.xxx' export NO_PROXY=\"${no_proxy}\" export http_proxy='http://your.proxy.url:port/' export HTTP_PROXY=\"${http_proxy}\" export https_proxy='https://your.proxy.url:port/' export HTTPS_PROXY=\"${https_proxy}\" Systemdの人\n$ sudo cat /etc/systemd/docker.service （省略） [Service] Environment=\"HTTP_PROXY=http://your.proxy.url:port/\" \"HTTPS_PROXY=https://your.proxy.url:port/\" ※　/lib/systemd/system/docker.serviceと併用しようとするとDockerが起動しなくなるので注意！2つの設定が競合するのかな？\ndocker.service.dにファイルの追加\n$ cd /etc/systemd/system/ $ mkdir docker.service.d $ sudo nano http-proxy.conf -\u003e 内容の書き込み $ cat /etc/systemd/system/docker.service.d/http-proxy.conf [Service] Environment=\"HTTP_PROXY=http://proxy.example.com:8080/\" Environment=\"HTTPS_PROXY=http://proxy.example.com:8080/\" 1.4 確認 hello-worldイメージを走らせ、Dockerが正しくインストールされていることを確認 $ sudo docker run hello-world 2. Dockerのアンインストール方法 Docker Engine、CLI、Containerd、およびDockerComposeパッケージをアンインストール\n$ sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-compose-plugin ホスト上のイメージ、コンテナー、ボリューム、またはカスタマイズされた構成ファイルは自動的に削除ない。すべてのイメージ、コンテナー、およびボリュームを削除するには下記を実行\n$ sudo rm -rf /var/lib/docker $ sudo rm -rf /var/lib/containerd ※編集した構成ファイルは手動で削除する必要がある\n3. 問題とその解決策 3.1 $ sudo docker run hello-worldを実行するとタイムアウトしてしまう インターネットに接続できない -\u003e proxyを設定（上記参照）\nproxy 設定してもDockerイメージが取得できない(conectできない)… おそらく公開鍵の問題！\napt updateなどを実行すると、「公開鍵を利用できないため、以下の署名は検証できませんでした」というエラーが出る。\nつまりGPGエラーが問題だった！\nということでOpenGPG鍵をインポート\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-k DockerのインストールでもGPG鍵キーのインストールはしているが、おそらく以下のどちらかが問題だった…\nInstall methodの 2. でもインストールしてるけどetcのところをusrにしなければならなかった 1.2 DockerEngineのインストールはどちらも実行してしまい、DockerイメージをダウングレードしてしまったためGPGエラーが起こった（？） 補足（やってみたけど意味のなかったこと） GPGエラーについて\nW: 署名照合中にエラーが発生しました。 リポジトリは更新されず、過去のインデックスファイルが使われます。 GPG エラー: http://packages.cloud.google.com/apt cloud-sdk-xenial InRelease: 公開鍵を利用できないため、 以下の署名は検証できませんでした: NO_PUBKEY 6A030B21BA07F4FB\nと出力されたため、apt-keyコマンドでパブリックキーを追加した（パブリックキーの有効期限切れだと思った…）\n$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6A030B21BA07F4FB -\u003e apt-keyではproxyにうまく接続できない問題が発生…\n-\u003e --keyserver-optionを使用してproxyサーバを指定\n$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --keyserver-option http-proxy=http://x:y@proxy:port --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9 Executing: gpg --ignore-time-conflict --no-options --no-default-keyring --secret-keyring /tmp/tmp.oqJcUg9wwq --trustdb-name /etc/apt/trustdb.gpg --keyring /etc/apt/trusted.gpg --primary-keyring /etc/apt/trusted.gpg --keyserver hkp://keyserver.ubuntu.com:80 --keyserver-option http-proxy=http://x:y@proxy:port --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9 gpg: 鍵A88D21E9をhkpからサーバーkeyserver.ubuntu.comに要求 gpg: 鍵A88D21E9: 公開鍵“Docker Release Tool (releasedocker) \u003cdocker@dotcloud.com\u003e”を読み込みました gpg: 処理数の合計: 1 gpg: 読込み: 1 (RSA: 1) 3.2 インターネットに（ブラウザで）接続できない proxyの設定とGPG鍵のインストールで$ sudo docker run hello-worldは実行できるようになったが、未だChromeやFireFoxが使えない（インターネットに接続できない）…\ndocker ではUbuntuの以下4つのバージョンでしか正常に動作することが保証されてなかったため、Ubuntu21.04ではうまく行かなかった\nUbuntu Jammy 22.04 (LTS) Ubuntu Impish 21.10 Ubuntu Focal 20.04 (LTS) Ubuntu Bionic 18.04 (LTS) 22.04 に upgrade したら使えるように！　→ Ubuntu22.04 のproxy設定を手動にしたら使えるようになった！\n参考 Dockerのインストール Docker Engine インストール（Ubuntu 向け） Install Docker Engine on Ubuntu Installation Guide(NVIDIA) proxy設定 プロキシ環境下の Docker Proxy環境でdockerを外に繋ぐ方法 プロキシサーバを使うように Docker を設定 プロキシーサーバー利用の設定 Ubuntu 18.04 LTS / 20.04 LTS に Docker をインストールする 問題 GPGエラーについて GPGエラーの解決策（「apt-key が非推奨になったので」 【Ubuntu】 apt update時のGPGエラー対処 ubuntuで認証プロキシ配下からapt-keyを使うとき ",
    "description": "",
    "tags": null,
    "title": "How to install Docker",
    "uri": "/docker/installation-docker/index.html"
  },
  {
    "content": "docker の cuda コンテナの追加設定 1. .bashrc の変更 /home/ と /root/ 以下に保存 /home/ はボリュームマウントしているので、新しくコンテナを作成する場合は設定ファイルを /home/ の保存し、作成したコンテナで /home/ 以下の設定ファイルをコピーすること！ 2. python のライブラリの追加 ライブラリを追加するディレクトリにパスを通す\n$ export PYTHONPATH=\"/root/.local/lib/python3.8/site-pachages/:$PYTHONPATH\" moysnn ライブラリのシンボリックリンクを\"/root/.local/lib/python3.8/site-pachages/“以下に作成 3. コマンドのインストール tree trash ",
    "description": "",
    "tags": null,
    "title": "Docker Container for Cuda",
    "uri": "/docker/container-cuda/index.html"
  },
  {
    "content": "dockerでsshを行う場合にはopensshd-serverをインストールし、設定を行う必要がある。\nsettings.sh\nexport DEBIAN_FRONTEND=noninteractive apt-get install -y openssh-server export mkdir /var/run/sshd export ENV=NOTVISIBLE \"in users profile\" echo \"export VISIBLE=now\" \u003e\u003e /etc/profile echo \"service ssh start\" \u003e\u003e /etc/profile Dockerfile\nRUN bash /tmp/setting.sh EXPOSE \u003cport\u003e CMD [\"/usr/sbin/sshd\", \"-D\"] ただしssh-serverが起動していなければ接続できない。そのため、コンテナ内で以下のコマンドを使用し、サーバーが止まっていないかを確認すること。\n$ service ssh status start or stop ssh $ service ssh start $ service ssh stop trouble 何度もuser名などを変えているとssh接続できない… known_hostsファイルの情報と異なるためsshできなくなる\n$ ssh-keygen -f \"\u003cpath of known-hosts file\u003e\" -R \"[\u003chost\u003e]:\u003cport\u003e\" と実行すればOK! (log標準出力でも表示されるのでそちらを参照！）\n詳しくはこちら 参照 docker 「コンテナを ssh 接続できるようにするDockerfile」チュートリアル解説 Docker Ubuntu18.04でtzdataをinstallするときにtimezoneの選択をしないでinstallする はじめてのLinux(CentOS)サーバ構築 〜SSH接続、IP制限〜 「SSHホスト鍵が変わってるよ！」と怒られたときの対処 ",
    "description": "",
    "tags": null,
    "title": "Connect to Docker Container via ssh",
    "uri": "/docker/container-ssh/index.html"
  },
  {
    "content": " update $ sudo apt update $ sudo apt upgrade file のダウンロード $ sudo curl -L \"https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose 権限の付与 $ sudo chmod +x /usr/local/bin/docker-compose 動作確認 $ docker-compose --version docker compose のアップグレード docker compose の v1 系をインストールしてしまっていたので v2 系にグレードアップ\n1系のDocker compose の削除 /usr/local/bin/にあるdocker-composeディレクトリを削除\n$ sudo trash docker-compose 新しいDocker compose のインストール 以下のコマンドを実行して Docker Compose の現時点での最新安定版をダウンロードします。\n$ DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker} $ mkdir -p $DOCKER_CONFIG/cli-plugins $ curl -SL https://github.com/docker/compose/releases/download/v2.4.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose このコマンドによって、アクティブユーザーの$HOMEディレクトリ配下に Compose がインストールされます。 システム上の全ユーザー向けに Docker Compose をインストールする場合は、~/.docker/cli-pluginsの部分を/usr/local/lib/docker/cli-pluginsに置き換えます。\n別のバージョンをインストールする場合はv2.4.1 の部分を書き換える\n実行バイナリに対して実行権限を与えます。\n$ chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose インストール結果をテストします。\n$ docker compose version アンインストールする場合 curlを使って Docker Compose をインストールしていた場合は、次のようにしてアンインストールします。 $ rm $DOCKER_CONFIG/cli-plugins/docker-compose 参考 docker docs ",
    "description": "",
    "tags": null,
    "title": "How to install Docker Compose",
    "uri": "/docker/instalation-docker-compose/index.html"
  },
  {
    "content": "dockerでcudaコンテナの作成 cuda の　GPG key 登録 古いキーの削除\n$ sudo apt-key del 7fa2af80 ヘルパーパッケージを利用したキーの登録 nvidia が提供している、nvidia リポジトリ用の新しい署名キーのインストールを自動化する新しいヘルパーパッケージを利用して鍵を登録\n$ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.0-1_all.deb $ sudo dpkg -i cuda-keyring_1.0-1_all.deb ※ubuntu2204とx86_64は該当のものに書き換える\nremove の仕方 ※インストール時にターミナルに表示された文\nA deprecated public CUDA GPG key appear to be installed. To remove the key, run this command: sudo apt-key del 7fa2af80 結局必要だったのかわからなかったけどとりあえずやったこと Setting up NVIDIA Container Toolkit パッケージリポジトリと GPG key のセットアップ\n$ distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\ \u0026\u0026 curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \\ \u0026\u0026 curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \\ sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \\ sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list nvidia-docker2 パッケージのインストール\n$ sudo apt-get update $ sudo apt-get install -y nvidia-docker2 Docker demon のリスタート\n$ sudo systemctl restart docker ベースとなるCUDAコンテナを実行することによって、動作するセットアップをテスト\n$ sudo docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi 以下のような出力ならOK！\n+-----------------------------------------------------------------------------+ | NVIDIA-SMI 450.51.06 Driver Version: 450.51.06 CUDA Version: 11.0 | |-------------------------------+----------------------+----------------------+ | GPU Name Persistence-M| Bus-Id Disp.A | Volatile Uncorr. ECC | | Fan Temp Perf Pwr:Usage/Cap| Memory-Usage | GPU-Util Compute M. | | | | MIG M. | |===============================+======================+======================| | 0 Tesla T4 On | 00000000:00:1E.0 Off | 0 | | N/A 34C P8 9W / 70W | 0MiB / 15109MiB | 0% Default | | | | N/A | +-------------------------------+----------------------+----------------------+ +-----------------------------------------------------------------------------+ | Processes: | | GPU GI CI PID Type Process name GPU Memory | | ID ID Usage | |=============================================================================| | No running processes found | +-----------------------------------------------------------------------------+ containerd コンテナエンジンとしてcontainerdをシステムにインストールするために、いくつかの前提モジュールをインストール\n$ sudo modprobe overlay \\ \u0026\u0026 sudo modprobe br_netfilter これらを確実に持続させることができる\n$ cat \u003c\u003cEOF | sudo tee /etc/modules-load.d/containerd.conf overlay br_netfilter EOF apt が HTTPS 上でリポジトリを使用できるようにするためのパッケージをインストール\n$ sudo apt update $ sudo apt-get install \\ ca-certificates \\ curl \\ gnupg \\ lsb-release リポジトリとGPG key の追加\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/ docker-archive-keyring.gpg $ echo \\ \"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\ $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list \u003e /dev/null ※1回やってたらいらないかも…\nDockerfile and docker-compose.yml の作成 docker compose と Dockerfileを使う場合 こちらを参照 コンテナ作成後の設定 鍵の作成 ssh server の起動 $ bash ./sterter.sh vscodeのsettings.jsonとkeyboard.jsonの設定 rootのパスワード設定 Dockerfile のみの場合 こちらを参照 trouble apt が使えない… コンテナにはproxyを通してたけどaptに通すのを忘れてた…\nDockerfile の apt update の前に以下の文を追加\nRUN echo 'Acquire::http::proxy \"http://proxy.cc.yamaguchi-u.ac.jp:8080\"; \\ Acquire::https::proxy \"https://proxy.cc.yamaguchi-u.ac.jp:8080\";' \u003e /etc/apt/apt.conf nvidia gpg key の更新 $ sudo apt-key del 7fa2af80 $ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-keyring_1.0-1_all.deb $ sudo dpkg -i cuda-keyring_1.0-1_all.deb $ sudo apt update cuda version を下げるとapt update が通らなくなる RUN apt-get update \u0026\u0026 apt-get install -y \\ bzr \\ cvs \\ git \\ mercurial \\ subversion みたいな感じで update と install をつなげてみたけどだめだった…\nnvidiaのドライバが使えなくなった… nvidia driverのバージョンを落としてインストールし直す nvidia container toolkitをインストール proxy設定 参照 Dockerhub nvidia/cuda NVIDA Installation Guide 【Docker】GPU が使える Jupyter Notebook 環境を最速で用意する NVIDIA Docker って今どうなってるの？ (19.11版) 西井先生のページ NVIDIA Container Toolkit (NVIDIA Docker) は何をしてくれるか Dockerfileのプロキシ設定 コンテナで Hello world docker上でjupyter-notebookを使用する方法 NVIDIA DockerイメージのGPGキー更新に関する備忘録 NVIDIAのリポジトリのキーが更新されました。（2022年4月28日） Dockerfile のベストプラクティス docker-composeで作成されるものの名前を明示的に指定する方法 CudaをDockerで使用する際のDockerfileの作成 次のようなDockerfileを作成する\nFROM nvidia/cuda:11.4.0-cudnn8-devel-ubuntu20.04 USER root COPY ./requirements.txt /tmp WORKDIR /code # ENV DEBIAN_FRONTEND noninteractive ENV https_proxy \"http://\u003cproxy server\u003e\" ENV https_proxy \"http://\u003cproxy server\u003e\" RUN echo 'Acquire::http::proxy \"http://\u003cproxy server\u003e\"; \\ Acquire::https::proxy \"https://\u003cproxy server\u003e\";' \u003e /etc/apt/apt.conf RUN apt-get update \u0026\u0026 apt-get install -y \\ curl \\ python3 \\ python3-distutils RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \u0026\u0026 python3 get-pip.py RUN pip install -r /tmp/requirements.txt proxy 設定は以下のようにする ENV https_proxy \"http://~~~\" ENV http_proxy \"http://~~~\" **cuda の　version を下げると apt update が通らなくなったので、RUN apt-get update 以下はコメントアウトして、 pythonなどはコンテナ作成後にアタッチしてインストールした… 同じ階層に requirememts.txt を作成し、 Dockerfile で呼び出せるようにする。 このファイルには必要なパッケージを記入しておく\njupyter jupyterlab numpy pandas matplotlib scikit-learn scikit-image scipy torch torchvision tqdm albumentations tensorflow-gpu Pillow opencv-python 作成したディレクトリ構造は次のようになる\n$ tree my-nvidia-cuda/ my-nvidia-cuda/ ├── Dockerfile ├── requirements.txt └── src └── test.ipynb Docker イメージをビルド\n$ cd my-nvidia-cuda $ docker build . -t \u003cimage name\u003e Docker コンテナを起動\n$ sudo docker run -it --gpus=all -v \"$PWD\":/code -p 8888:8888 --name \u003ccontainer name\u003e \u003cimage name\u003e /bin/bash --gpusはgpuのを列挙 ",
    "description": "",
    "tags": null,
    "title": "Docker Compose",
    "uri": "/docker/docker-compose-cuda/index.html"
  },
  {
    "content": "systemctl の使い方 Docker の起動と停止 $ systemctl start docker.service $ systemctl stop docker.service $ systemctl stop docker.socket 設定の反映と再起動 $ systemctl deamon-reload $ systemctl restart docker.service docker コマンド $ docker \u003c上位コマンド\u003e \u003c副コマンド\u003e \u003cオプション\u003e \u003c対象\u003e \u003c引数\u003e option オプションの書式 内容 –name \u003cコンテナ名\u003e コンテナ名の指定 -p \u003cホストのポート番号\u003e:\u003cコンテナのポート番号\u003e ポート番号の指定 -v \u003cホストのディスク\u003e:\u003cコンテナのディレクトリ\u003e ボリュームのマウント –net=\u003cネットワーク\u003e コンテナをネットワークに接続 -e \u003c環境変数名\u003e=\u003c値\u003e 環境変数の指定 -d バックグラウンドで実行(detach: デタッチモードの略) -i コンテナに操作端末（キーボード）をつなぐ -t 特殊キーを使用可能にする -help ヘルプの表示 –rm コンテナ終了時に自動的にコンテナを削除する –workdir , -w コンテナ内部の作業ディレクトリを変更する Docker container の作成 $ docker run \u003coption\u003e \u003ccontainer image\u003e \u003c引数\u003e docker runコマンドは、イメージをダウンロードするdocker pull, コンテナを作成するdocker create, コンテナを起動するdocker startコマンドを一つにまとめたもの。\nコンテナを起動せずに作成したい(docker createしたい)場合などに, docker createとdocker startを分けて使用する。\nDocker 起動と停止 $ docker start \u003ccontainer name or container ID\u003e #container の起動(container ID は他と重複しない先頭数文字だけでOK！) $ docker stop \u003ccontainer name or container ID\u003e #container のストップ 便利なコマンド $ docker logs \u003ccontainer name\u003e #logの確認 container の破棄 $ docker container ls #起動中のコンテナの表示(`docker ps`のように省略可) $ docker container rm \u003ccontainer name\u003e #コンテナの削除(``docker rm`のように省略可) 起動していないコンテナをすべて削除する場合は\n$ docker container prune image の破棄 $ docker image ls #ダウンロードしたイメージ一覧 $ docker image rm \u003crepository\u003e:\u003ctag\u003e #imageの削除(※tag が latest という最新版を表す値の場合は省略可, `docker rmi` のように省略可) Docker の容量利用状況の確認 $ docker system df Build Cache の削除 $ docker builder prune ※キャッシュが貯まると容量を大量に食うので注意！\ndetachとattach detach Ctrl+P, Ctrl+Q\nattach\n$ docker attach \u003ccontainer name or containerID\u003e shellの実行 コマンド コンテナの状態 シェル終了時 docker run 停止時 コンテナ終了 docker exec 稼働時 稼働のまま 実行中のコンテナの場合\n$ docker exec -it \u003ccontainer name\u003e /bin/bash を実行することでシェルが起動する\n※ここでexitしてもdocker exec で実行したものが終了するだけのため、コンテナは終了しない\n停止中のコンテナの場合\n$ docker run --name \u003ccontainer name\u003e -it \u003cconteinaer image\u003e /bin/bash を実行することでシェルが起動する\n※ここでexitするとコンテナも終了する\n補足\nここではあくまで/bin/bashというコマンドを実行しているだけのため、/bin/passwd(パスワードの変更画面を表示)のような他のコマンドを実行することもできる。 他のシェルを使用したい場合には /bin/bash でなく /bin/sh/ のように実行することもできる 現在使用しているシェルはecho $SHELL, 使用可能なシェルはcat /etc/shellsで確認することができる。 ",
    "description": "",
    "tags": null,
    "title": "Basic docker usage",
    "uri": "/docker/base/index.html"
  },
  {
    "content": "補足 1回限り動かすコンテナの使い方 （例）go言語でコンパイルするためのコンテナを作成する場合\n$ docker run --rm -v \"$PWD\":/usr/src/myapp -w /usr/src/myapp golang:1.13 go built -v ここではgo built -v を実行してコンテナを終了・削除している。\n",
    "description": "",
    "tags": null,
    "title": "Appendix",
    "uri": "/docker/appendix/index.html"
  },
  {
    "content": "About calcuration of gradient How not to calculate gradient Use no_grad For example;\nwith torch.no_grad(): y = x*2 We can use as decorator\n@torch.no_grad() def doubler(x): return x*2 Use .detach() -\u003e ? Use .reaquires_grad -\u003e ? reference Pytorchの「.detach()」と「with no_grad():」と「.requires_grad = False」の違い PyTorchの新しい推論モードについて ",
    "description": "",
    "tags": null,
    "title": "Torch",
    "uri": "/python/torch/index.html"
  },
  {
    "content": "pickleの使用方法 Saving with openでの保存、読み込み with open(\"filename.pkl\", \"wb\") as f: pickle.dump(data, f) with open(\"filename.pkl\", \"rb\") as f: hoge = pickle.load(f) pandasでの保存、読み込み import pandas as pd pd.to_pickle(data, \"filename.pkl\") hoge = pd.read_pickle(\"filename.pkl\") joblib(?)での保存、読み込み joblib.dump(data, \"filename.jb\", compress=3) hoge = joblib.load(\"filename.jb\") ",
    "description": "",
    "tags": null,
    "title": "Pickle",
    "uri": "/python/pickle/index.html"
  },
  {
    "content": " セル 編集モードへの変更：ダブルクリックまたは\"Enter\" コマンドモードへの変更：ESC セルの内容の実行 Windows：Ctrl+Enter MacOS：command+Return OS共通：Shift+Enter Markdownセルとcodeセル Markdownセル：テキストを入力するためのセル Codeセル：Pythonの実行を行うセル arkdownセルの編集方法 “#“でタイトル “##“でサブタイトル “-“で箇条書き “太文字“で太文字 便利なショートカットキー（Window） コマンドモード ショートカットキー 説明 F 検索・置換 Ctrl -Shift Ctrl -Shift Enter 編集モードにする P コマンドパレットを開く Shift -Enter Ctrl -Enter Alt -Enter Y コードセルにする M マークダウンセルにする R rawセルにする 1 見出し１にする 2 見出し２にする 3 見出し３にする 4 見出し４にする 5 見出し５にする 6 見出し６にする K 上のセルを選択する Up 上のセルを選択する Down 下のセルを選択する J 下のセルを選択する Shift -K Shift -Up Shift -Down Shift -J A 上にセルを追加する B 下にセルを追加する X 選択しているセルをカット C 選択しているセルをコピー Shift -V V 下に貼り付け Z セルの削除をやり直す DD 選択しているセルを削除する Shift -M Ctrl -S S 保存する L 行番号の表示・非表示 O セルの出力結果の表示・非表示 Shift -O H キーボードショートカット表示 I×2 カーネルをインタラプト 0 カーネルを再起動 Esc ページャーを閉じる Q ページャーを閉じる Shift -L Shift -Space Space 下にスクロール 編集モード ショートカットキー 説明 Tab コード補完・タブ Shift-Tab ツールチップ Ctrl-] インデント Ctrl-[ ディデント Ctrl-A 全選択 Ctrl-Z やり直し Ctrl-Shift - Ctrl-Y やり直し Ctrl-Home セルの最初に移動 Ctrl-Up セルの最初に移動 Ctrl-End セルの最後に移動 Ctrl-Down セルの最後に移動 Ctrl-Left 一単語前に移動 Ctrl-Right 一単語後に移動 Ctrl-Backspace 前の単語を削除 Ctrl-Delete 後の単語を削除 Ctrl-M コマンドモードにする Ctrl-Shift-F コマンドパレットを開く Ctrl-Shift-P コマンドパレットを開く Esc コマンドモードにする Shift-Enter セルを実行し、下のセルを選択する Ctrl-Enter セルを実行する Alt-Enter セルを実行し、下にセルを追加する Ctrl-Shift-Minus セルを分割する Ctrl-S 保存する Down カーソルを下に移動 Up カーソルを上に移動 Ctrl-/ 選択部分をコメントアウト Kernel セルの左の “In[]” の括弧内の数字は実行を行った順番を示す。 順番によっては正常に作動しない場合もあるため最後は左上の欄から\"Kernel \u003e Restart \u0026 Run All\"をクリック ",
    "description": "",
    "tags": null,
    "title": "Jupyter notebook",
    "uri": "/python/jupyter/index.html"
  },
  {
    "content": "filtfiltを用いたバンドパスフィルタ(バターワースフィルタ)の記述例 #バターワースフィルタ（バンドパス） fp = np.array([25, 50]) #通過域端周波数[Hz] fs = np.array([10, 100]) #阻止域端周波数[Hz] gpass = 3 #通過域端最大損失[dB] gstop = 40 #阻止域端最小損失[dB] def bandpass(x, samplerate, fp, fs, gpass, gstop):#samplerate がサンプリング周波数 fn = samplerate / 2 #ナイキスト周波数 wp = fp / fn #ナイキスト周波数で通過域端周波数を正規化 ws = fs / fn #ナイキスト周波数で阻止域端周波数を正規化 N, Wn = signal.buttord(wp, ws, gpass, gstop) #オーダーとバターワースの正規化周波数を計算 b, a = signal.butter(N, Wn, 'bandpass') #フィルタ伝達関数の分子と分母を計算 y = signal.filtfilt(b, a, x) #信号に対してフィルタをかける return y #フィルタ後の信号を返す y = bandpass(f_biceps, samplerate, fp, fs, gpass, gstop) scipy.signal.filtfilt scipyのfiltfiltを使用する場合は以下のようにインポートする\nfrom scipy import signal import matplotlib.pyplot as plt ※pltはインポートしなくても大丈夫？\nfiltfiltの記述の仕方 filtfiltでバターワースフィルターをかける場合には以下のように記述する\nb, a = signal.butter(8, 0.125) y = signal.filtfilt(b, a, x, padlen=150) filtfiltのパラメータと返り値 scipy.signal.filtfilt(b, a, x, axis=- 1, padtype='odd', padlen=None, method='pad', irlen=None)` parameters\nb : (N,)arrau_like フィルターの分子係数\na : (N,)array_like フィルターの分母係数\na[0]が1でなければaもbもa[0]で正規化される。\nx : array_like フィルターをかける配列のデータ\naxis : int, optional フィルターを適用するx軸。デフォルトは-1\npadtype\npandlen\nmethod\nirlen\nreturn\nndarray xと同じ形状の(?)フィルタリングされた出力 バターワースデジタルフィルター、バターワースアナログフィルターの設計 バターワースフィルターの設計ではscipy.signal.butterモジュールを使用する。 このモジュールでは N 次元のデジタル、またはアナログバターワースフィルターを設計し、係数を返す。\n記述方法 from scipy import signal import matplotlib.pyplot as plt b, a = signal.butter(4, 100, 'low', analog=True) パラメータと返り値 scipy.signal.butter(N, Wn, btype='low', analog=False, output='ba', fs=None) parameters\nN : int フィルターの次数　←　buttorモジュールで必要な最低次数を求められる(？)\nWn : array_like 臨界周波数。\nローパス、ハイパスフィルターでは、Wn はスカラー。バンドパス、バンドストップフィルターでは長さ2の配列。\nバターワースフィルターでは、ゲインが通過帯域の1/√2 まで低下する点(「-3dB点」)を表す。\nアナログフィルターでは Wn は各周波数(例：rad/s)\nbtype : {‘lowpass’, ‘highpass’, ‘bandpass’, ‘bandstop’}, optional filterのタイプ。デフォルトはlowpass\nanalog\noutput\nfs\nReturns\nb, a : nadarray, ndarray IIR フィルターの分子 (b) および 分母 (a) 多項式。 output=‘ba’ のときだけ返される。\nz, p, k\nsos\nバターワースフィルターの次数選択 バターワースフィルターの次数選択では buttord モジュールを用いる。\nこのモジュールでは、通過帯域で gpass dB 以上の減衰がなく、停止帯域で gstop dB 以上の減衰がある最低次のデジタルまたはアナログバターワースフィルタの次数を返す。\n記述方法 from scipy import signal import matplotlib.pyplot as pltN, Wn = signal.buttord([20, 50], [14, 60], 3, 40, True) b, a = signal.butter(N, Wn, 'band', True) w, h = signal.freqs(b, a, np.logspace(1, 2, 500)) パラメータと返り値 scipy.signal.buttord(wp, ws, gpass, gstop, analog=False, fs=None) parameters\nwp, ws : float 通過帯域と阻止帯域のエッジ周波数。\nデジタルフィルタの場合、これらはfsと同じ単位である。デフォルトでは、fsは 2 half-cycles/sample なので、これらは0から1に正規化され、1がナイキスト周波数となる。(wpとwsはhalf-cycles/sample )例えば\nローパス：wp=0.2, ws=0.3 ハイパス：wp = 0.3, ws = 0.2 バンドパス：wp = [0.2, 0.5]、ws = [0.1, 0.6]. バンドストップ：wp＝［0.1，0.6］，ws＝［0.2，0.5］。 アナログフィルタの場合、wpとwsは角周波数（例：rad/s）です。\ngpass : float 通過帯域の最大損失(dB)。\ngstop : float 停止帯域の最小減衰量（dB）。\nanalog : bool, optional\nfs : float, optional デジタルシステムのサンプリング周波数\nreturns\nord : int 使用を満たすバターワースフィルターの最低次数\nwn : ndarray or float バターワース固有振動数（すなわち “3dB振動数”）。フィルタリングの結果を得るために、butterと一緒に使用する必要がある。fs が指定された場合、これは同じ単位であり、fs も butter に渡さなければならない。\n参考 scipy.signal.filtfilt scipy.signal.butter scipy.signal.buttor ",
    "description": "",
    "tags": null,
    "title": "Filter with python",
    "uri": "/python/filter/index.html"
  },
  {
    "content": "ライブラリの作成方法 directory に __init.py__ ファイルを作成 site-packages ディレクトリに作成したライブラリを追加する（シンボリックリンクでも可） site-packages の場所は $ python -m site で確認できる ディレクトリをパスに追加する場合は次の通り $ export PYTHONPATH=\"\u003cpath\u003e:$PYTHONPATH\" ",
    "description": "",
    "tags": null,
    "title": "Create Library",
    "uri": "/python/create-library/index.html"
  },
  {
    "content": "pip のアップデート pip と setuptools のアップデート $ python -m pip install --upgrade pip setuptools ※-mはインターフェイスオプションで、pythonのモジュール（パッケージ）を実行するために使用\nパッケージのアップデート $ pip install -U \u003cpackage-name\u003e または\n$ pip install --upgrade \u003cpackage name\u003e naconda のアップデート すべてのパッケージをアップデート $ conda update --all 特定のパッケージのアップデート $ conda update \u003cpackage name1\u003e \u003cpackage name2\u003e anaconda 本体のアップデート $ conda update -n base -c defaults conda または\n$ conda update -n base conda ※上は(base)と作成した仮想環境両方アップデートされた…（下のコマンドは不明）\n※よく使うオプションは以下の通り\n-n は --name の略で、環境名の指定 -c は --channel の略で、デフォルトリポジトリだけでなくチャネルを追加で指定 参考 Anaconda パッケージ アップデート方法 pipでアップデートするときのコマンド pip update ",
    "description": "",
    "tags": null,
    "title": "Anaconda Update",
    "uri": "/python/anaconda-update/index.html"
  },
  {
    "content": "Pythonのプログラムの作成と実行 方法1: C言語のように，テキスト形式でプログラムを書いて実行\n$ vi program.py # プログラム作成 $ python program.py # プログラム実行 注) Pythonはインタプリタ型言語なのでコンパイルは不要。\n方法2: jupyter notebookやIpython等を用いてインタラクティブに実行\nコメント #：1行コメント 複数行コメント：“““コメント”””　※ダブルクォートの代わりにシングルを使っても良い →ドックストリング モジュール・パッケージ・ライブラリ モジュール: クラスや関数を記述したファイル(.py) パッケージ: いくつかのモジュールを一つのディレクトリ(フォルダ)にまとめたもの ライブラリ: いくつかのパッケージをまとめたもの。モジュールやパッケージをライブラリと呼ぶこともある 標準ライブラリ math: 数学関数モジュール random: 乱数発生モジュール 外部ライブラリ：追加インストール必要 NumPy: 数値計算用の多次元配列ライブラリ。C言語で作られているので高速 SciPy: 科学計算ライブラリ pandas: データフレーム(エクセルのような表形式)のデータ解析ライブラリ scikit-learn: 機械学習ライブラリ モジュールやパッケージ，ライブラリに含まれるオブジェクト(クラスや関数等)を使うには，以下の例のようにimportを用いて読み込みを行う。\nPythonのデータ型について すべてのPythonオブジェクトはC言語の構造体で定義されており、C言語等の静的型付言語などと比べてオーバーヘッドが生じる\n【例】 integer(long)型\nstruct _longobject{ long ob_refcnt; PyTypeObject ob_type; size_t ob_size; long ob_digit[1]; }; ob_refcnt : Pythonが目盛りの割当と解除を自動的に行うための参照カウンタ ob_type : 変数の方を表すコード ob_size : この後に続くデータの大きさ ob_digit : このPython変数が持つ実際の整数値 PythonリストとNumpy配列 種類 概要 Pytonリスト ポインタ列へのポインタを格納した動的配列。各ポインタは完全なPythonオブジェクトを示すため、柔軟性に利点を持つ一方ですべての変数が同じ方であるケースでは情報が冗長になる。 Numpy配列 すべてのデータの型が同じ固定型の配列のため柔軟性に欠ける一方でデータの保存と操作がはるかに効率的 immutable と mutable 関数の引数(仮引数)の値を関数内で変更した場合，引数が**immutable(変更不可)**な型ならば呼び出した側の引数(実引数)は変化しない。**mutable(変更可能)**ならば，実引数も変化。\nimmutable: int, float, str, tuple 等 mutable: list, dict, set 等(これらについては後述) immutableな引数については， 返り値を使って更新するようにする。\n",
    "description": "",
    "tags": null,
    "title": "Pythonの基本",
    "uri": "/python/base/index.html"
  },
  {
    "content": "hugoでプロジェクトを作成 $ hugo new site \u003cプロジェクト名\u003e Congratulations! Your new Hugo site is created in PATH/hugo/test. Just a few more steps and you're ready to go: 1. Download a theme into the same-named folder. Choose a theme from https://themes.gohugo.io/ or create your own with the \"hugo new theme \u003cTHEMENAME\u003e\" command. 2. Perhaps you want to add some content. You can add single files with \"hugo new \u003cSECTIONNAME\u003e/\u003cFILENAME\u003e.\u003cFORMAT\u003e\". 3. Start the built-in live server via \"hugo server\". プロジェクトを作成すると次のようなファイルが作成される\n$ tree \u003cdirectory name\u003e/ -L 1 \u003cdirectory name\u003e/ ├── archetypes ├── config.toml ├── content ├── data ├── layouts ├── public ├── resources ├── static └── themes ページの設定はconfig.tomlから変更できる。\nテーマは公式ページからダウンロードし使用する。 テーマの変更や言語設定などもconfig.tomlから行う。\n$ cat web-blog/config.toml baseURL = 'https://...' # ページを公開するドメイン名 languageCode = 'en-us' # 日本語ならja-jp title = \"\u003cblog name\u003e\" theme = \"kraiklyn\" # ダウンロードしたテーマ homeの作成 $ hugo new --kind home _index.md 章の作成 $ hugo new --kind chapter \u003cchapter name\u003e/_index.md 次のような内容が書かれた\u003cchapter\u003e/_index.mdが生成されるため、\n+++ archetype = \"chapter\" title = \"{{ replace .Name \"-\" \" \" | title }}\" weight = X +++ Lorem Ipsum. Xの部分を数字に置き換える。メニューはその順番で表示される。\n記事の作成 $ hugo new posts/test.md このコマンドを実行するとcontents/posts/test.mdが作成される。\nlocalで表示 また、次のコマンドを実行するとlocalhost:1313でプレビューが見れるようになる。\n$ hugo server -D webサイトの構築 次のコマンドを実行でpublicフォルダに静的ファイルが作成される。\n$ hugo thema Hugo Relearn Theme Hugo Learn Theme TinyWorks Kraiklyn 参考 HUGOの使い方 静的サイトジェネレータ「Hugo」と技術文書公開向けテーマ「Docsy」でOSSサイトを作る Hugo Relearn Theme \u003e Content ",
    "description": "",
    "tags": null,
    "title": "hugo note",
    "uri": "/hugo/hugo-note/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
