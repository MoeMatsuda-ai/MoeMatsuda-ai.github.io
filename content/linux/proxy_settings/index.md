---
tags: ["linux", "bash", "proxy"]
title: "Proxy settings  "
date: 2023-04-29T06:12:44Z
draft: 
---

## Ubuntu 22.04 LTS
### /etc/environment 
```
export no_proxy=localhost,127.0.0.1,localhost,*<domain>
export ftp_proxy=http://<proxy server>:<port>/
export http_proxy=http://<proxy server>:<port>/
export https_proxy=http://<proxy server>:<port>/
export all_proxy=socks://<proxy server>:<port>/
export FTP_PROXY=http://<proxy server>:<port>/
export HTTP_PROXY=http://<proxy server>:<port>/
export HTTPS_PROXY=http://<proxy server>:<port>/
export ALL_PROXY=socks://<proxy server>:<port>/
```

### apt
`/etc/apt/apt.conf`に以下を追記

```
Acquire::http::Proxy "http://proxy.cc.yamaguchi-u.ac.jp:8080/";
```
### Discord
1. `whereis discord`でパスを確認
2. 上記で確認したディレクトリ下にある`discord.desktop`の`Exec=/usr/share/discord/Discord`部分を以下のように書き換え
    ```bash
    Exec=env http_proxy=http://<proxy-server>:<port> https_proxy=http://<proxy-server>:<port> /usr/share/discord/Discord --proxy-server="http://<proxy-server>:<port>"
    ```
3. reboot

## Windows for Linux
### /etc/environment
```
http_proxy=http://<proxy>:<port>
https_proxy=https://<proxy>:<port>
```

### /etc/bash.bashrc
```
export http_proxy=http://<proxy>:<port>
export https_proxy=https://<proxy>:<port>
```

### /etc/apt/apt.conf
```
Acquire::http::Proxy "http://<proxy>:<port>";
Acquire::https::Proxy "http://<proxy>:<port>";
```

### /etc/wgetrc
```
http_proxy = http://<proxy>:<port>
https_proxy = http://<proxy>:<port>
ftp_proxy = http://<proxy>:<port>
```

### anaconda3/envs/<env name>
```
proxy_servers:
    http: http://<proxy server>:<port>
    https: https://<proxy server>:<port>
```

次のコマンドで設定内容を確認
```bash
$ conda config --show
```

