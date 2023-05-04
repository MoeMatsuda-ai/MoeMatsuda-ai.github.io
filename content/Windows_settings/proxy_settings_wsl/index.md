---
title: "Proxy settings on WSL"
date: 2023-04-29T06:30:35Z
draft: false 
---

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
```http_proxy = http://<proxy>:<port>
https_proxy = http://<proxy>:<port>
ftp_proxy = http://<proxy>:<port>
```
