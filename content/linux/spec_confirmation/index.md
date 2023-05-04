---
title: "Spec confirmation (Ubuntu)"
date: 2023-04-29T05:05:56Z
draft: false
---

プロセッサー，グラフィック，OSは「設定」で確認可能

## OSのバージョン
```bash
$ cat /etc/issue
```

## CPUコア数
```bash
$ cat /proc/cpuinfo
```
- `processor`: プロセッサのID
- `model name`: cpuの種類
- `cpu cores`: コアの数

## メモリ
```bash
$ sudo dmidecode --type memory
```
`demidecode`コマンドではハードウェアの物理RAMサイズと情報を確認でき，
コンピュータのDMIテーブル（SMBIOS）情報を表示してくれる．

メモリ以外にも以下の項目を確認可能
0. bios
1. system
2. baseboard
3. chassis
4. processor
5. memory (memory controller)
6. memory (memory module)
7. cache
8. connector (port connector)
9. slots (system slots)
10. (on board devices)


## cpuやmemoryの使用率等の確認

```bash
$ top
```
or
```bash
$ htop
```
or
```bash
$ ps aus | less
```
or 
```bash 
$ free
```
- `-h`: 単位などを見やすく表示
- `-m`: MB単位で表示（デフォルトはkB）
- `-g`: GB単位で表示

## ディスク確認方法
### SSD or HDD
```bash
$ cat /sys/block/sda/queue/rotational
```
- 0: SSD
- 1: HDD

### 型番の確認
```bash
$ sudo lshw -c disc
```

### ディスク使用率
```bash
$ df -h
```

### その他
- `sudo fdisk -l`
- `sudo blkid`
- `df -Th`
- `sudo du -sm ./* | sort -rn | head -5`

## GPU確認方法
### GPUの種類
```bash
$ lspci | grep -u nvidia
```

### nvidia driverのバージョン
```bash
$ cat /proc/driver/nvidia/version
```
### GPUの使用状況
``` bash
$ nvidia-smi -l
```



