---
tags: ["docker", "systemctl"]
title: "Post Installation Steps for linux"
date: 2022-11-22T08:44:42Z
draft: false 
---


## Docker のインストール後の設定

### docker group に追加

### Docker サービスをデフォルトで起動時に開始するように設定
```bash
$ sudo systemctl enable docker.service
$ sudo systemctl enable containerd.service
```

無効化は以下の通り
```bash
$ sudo systemctl disable docker.service
$ sudo systemctl disable containerd.service
```
[インストール後の設定はこちら](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
