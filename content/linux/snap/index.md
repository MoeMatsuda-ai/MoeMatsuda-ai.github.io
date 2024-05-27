---
title: "Snap Basic"
date: 2024-05-27T04:58:07Z
draft: true
---

# snapの使い方

## アップデート
```bash
$ sudo snap refresh --list # upgrade list
$ sudo snap list # package list
$ sudo snap refresh # update
$ sudo snap find <package name>
$ sudo snap info <package name>
$ sudo snap install <package name>
$ sudo snap remove <package name>
```

## timer
```bash
$ sudo snap refresh --time                  # check scheduler
$ sudo snap set system refresh.timer=4:00   # set timer for 4:00 only
$ sudo snap unset system refresh.timer      # reset timer
$ sudo snap changes
```
