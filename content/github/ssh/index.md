---
title: "Public key authentication settings in github"
date: 2022-11-22T09:10:47Z
draft: false
---


#### 公開鍵を GitHub に登録することで、push 時などにパスワードを入力する手間が省略可能

## 公開鍵および秘密鍵の作成と登録
1. 公開鍵および秘密鍵を作成
    ```
    ssh-keygen -t ed25519
    ```
1. 公開鍵 を GitHub に登録
    ```
    cat ~/.ssh/id_ed25519.pub
    # コマンドを実行して表示されたすべての文字列を GitHub に登録
    #
    # ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX user@host
    # ↑こんな感じの文字列をすべてコピペ
    ```

    GitHub の公開鍵登録の手順は、
    1. Settings
    1. SSH and GPG keys
    1. [New SSH key]
    1. タイトルをつけ公開鍵をコピペし [Add SSH key]

1. SSH の設定 GitHub で使用する秘密鍵を設定するため、~/.ssh/config に[設定](https://github.com/MoeMatsuda-ai/info_study/wiki/Create-ssh_GitHub#%E5%85%AC%E9%96%8B%E9%8D%B5%E3%81%8A%E3%82%88%E3%81%B3%E7%A7%98%E5%AF%86%E9%8D%B5%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E7%99%BB%E9%8C%B2)を記述

最終行 (ProxyCommand の部分) は学内のコンピューターの場合にのみ設定
## 接続の確認
```
$ ssh -T git@github.com
```
ターミナルで実行して以下のように表示されればOK!
```
Hi (User名)! You've successfully authenticated, but GitHub does not provide shell access.
```
※途中で以下のプロンプトメッセージが表示されたら`yes`と入力
    ```
    The authenticity of host '[ssh.github.com]:443 (<no hostip for proxy command>)' can't be established.
    RSA key fingerprint is [以下省略].
    Are you sure you want to continue connecting (yes/no/[fingerprint])? The authenticity of host '[ssh.github.com]:443 (<no hostip for proxy command>)' can't be established.
    RSA key fingerprint is [以下略].
    Are you sure you want to continue connecting (yes/no/[fingerprint])? 
    ```

## ssh接続がうまく行かないとき
レポジトリのディレクトリに入り次のコマンドを入力
```
git config remote.origin.url
```
`https://github.com/[ユーザID]/[リポジトリ]`となっていたらレポジトリのディレクトリ内の`/.git/config`を開いて`url`の覧を
```
url = github.com:[ユーザID]/[リポジトリ].git
```
と書き換える。

または以下のコマンドを実行
```
git remote set-url origin [Host名]:[ユーザID]/[リポジトリ].git
```

※~/.ssh/configで設定していない場合は
```
git remote set-url origin git@github.com:[ユーザID]/[リポジトリ].git
```
でOK!

## 参照
[Qiita「Githubでssh接続する手順」](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)
[GitHubヘルプを参考にSSHキーの設定を行ってみた](https://dev.classmethod.jp/articles/github-ssh-setting/)