---
title: "Ssh_settings_wsl"
date: 2023-12-27T05:17:22Z
draft: false
---

# SSH settings on WSL

## 1. WindowsでOpenSSH serverのインストールと起動
1. 設定を開く
2. 「システム > オプション機能 > オプション機能を追加する > 機能を表示」
	の順番でクリック
3. OpenSSHクライアントをインストール
4. 「サービス」アプリを開く
5. OpenSSH SSH Serverをダブルクリック
	- メモ: [表示]タブの[詳細]で探すこと
6. [全般]タブの[スタートアップの種類]ドロップダウンメニュー
	から[自動]を選択
7. この画面からサービスを開始する場合は[開始(S)]をクリック

## 2. OpenSSHの設定
1. パスワードでの認証設定
	1. （デフォルトの設定では）パスワードでのssh接続はできないようになっている
	2. 公開鍵認証をOnにするには`C:\ProgramData\ssh\sshd_config`を開き，`#PubleyAuthentication yes`の行をアンコメント
		- 管理者権限での編集は，エディタを管理者権限で実行し，ファイルを開けばOK！
2. ポート番号の設定
	1. `C:\ProgramData\ssh\sshd_config`でポート番号を指定
	2. 「コントロールパネル>システムとセキュリティ>ファイアウォールの状態の確認>詳細設定>受信規則]から指定したポートが解放されているかを確認可能
3. ipアドレスの確認
	- PowerShellで`$ipconfig`を実行

## 3. Linuxクライアントでの設定
1. 


## 参考
- [Windows用OpenSSHの概要](https://learn.microsoft.com/ja-jp/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui)
	
