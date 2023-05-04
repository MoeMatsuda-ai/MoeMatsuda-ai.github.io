---
tags: ["linux", "bash", "proxy"]
title: "Proxy settings  "
date: 2023-04-29T06:12:44Z
draft: 
---

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

### /etc/apt/apt.conf or /etc/apt/apt.conf.d/proxy.conf 
```
Acquire::http::Proxy "http://proxy.cc.yamaguchi-u.ac.jp:8080/";
```
