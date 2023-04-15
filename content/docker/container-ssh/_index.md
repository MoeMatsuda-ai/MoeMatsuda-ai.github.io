---
title: "Connect to Docker Container via ssh"
date: 2022-11-22T08:43:00Z
draft: false 
---


dockerでsshを行う場合にはopensshd-serverをインストールし、設定を行う必要がある。

> settings.sh
```bash
export DEBIAN_FRONTEND=noninteractive
apt-get install -y openssh-server 
export mkdir /var/run/sshd
export ENV=NOTVISIBLE "in users profile"
echo "export VISIBLE=now" >> /etc/profile
echo "service ssh start" >> /etc/profile
```

> Dockerfile
```Dockerfile
RUN bash /tmp/setting.sh

EXPOSE <port>
CMD ["/usr/sbin/sshd", "-D"]
```

ただしssh-serverが起動していなければ接続できない。そのため、コンテナ内で以下のコマンドを使用し、サーバーが止まっていないかを確認すること。

```bash
$ service ssh status
```

#### start or stop ssh
```bash
$ service ssh start
```
```
$ service ssh stop
```

# trouble
#### 何度もuser名などを変えているとssh接続できない…
known_hostsファイルの情報と異なるためsshできなくなる
```bash
$ ssh-keygen -f "<path of known-hosts file>" -R "[<host>]:<port>"
```
と実行すればOK! (log標準出力でも表示されるのでそちらを参照！）

- 詳しくは[こちら](https://qiita.com/hnw/items/0eeee62ce403b8d6a23c)


## 参照
- [docker 「コンテナを ssh 接続できるようにするDockerfile」チュートリアル解説](https://qiita.com/YumaInaura/items/1d5c18a9e55484ccad89)
- [Docker Ubuntu18.04でtzdataをinstallするときにtimezoneの選択をしないでinstallする](https://qiita.com/yagince/items/deba267f789604643bab)
- [はじめてのLinux(CentOS)サーバ構築 〜SSH接続、IP制限〜](https://qiita.com/dev-tatsuya/items/997c438019850e275a3e)
- [「SSHホスト鍵が変わってるよ！」と怒られたときの対処](https://qiita.com/hnw/items/0eeee62ce403b8d6a23c)
