---
tags: ["windows", "PowerShell"]
title: "Exception handling on PowerShell "
date: 2023-04-13T14:25:36Z
draft: false
---

あまりPowerShellを使用しないため知らなかったPowerShellでの例外処理について

## 実行環境
使用するPowerShellのバージョンは以下の通り（詳細は省略）
```powershell
> $PSVersionTable

Name                           Value
----                           -----
PSVersion                      7.3.4
```

## リダイレクト
PowerShellでは複数の出力ストリームが用意されており，これらのストリームには特定のコマンド（PowerShellでいうコマンドレット）やリダイレクトを使用して書き込むことが可能。
一部を除き，出力ストリームのリダイレクトがサポートされている。

### リダイレクト演算子
PowerShellのリダイレクトでは次のような演算子が用意されている。
ただし成功ストリーム（1）は規定値なので省略可能。

|演算子|概要|構文|
| :-- | :------ | : --| 
|>|指定したストリームのファイルへの書き込み（上書き）|n>|
|>>|指定したストリームのファイルへの書き込み（追加）|n>>|
|>&1|指定したストリームをSuccessストリームにリダイレクト|n>&1|

ここで，`n`はストリーム番号を表す。

## 出力ストリーム

|ストリーム|詳細|導入バージョン|Writeコマンドレット|
|:--|:----|:--|:--|
|1|Successストリーム|PowerShell 2.0| Write-Output|
|2|Errorストリーム|PowerHhell 2.0|Write-Error|
|3|Warningストリーム|PowerShell 3.0|Write-Warning|
|4|Verboseストリーム|PowerShell 3.0|Write-Warning|
|5|Debugストリーム|PowerShell 3.0|Write-Debug|
|6|Informationストリーム|PowerShell 5.0|Write-Information, Write-Host|
|N/A|Progresssストリーム|PowerShell 2.0|Write-Progress|
|*|すべてのストリーム|PowerShell 3.0|

※ただしProgressリダイレクトはサポートなし


## PowerShellのエラー処理
PowerShellでは終了エラーと終了しないエラーが存在する。

ステートメント終了エラー及びスクリプト終了エラーは`try`ステートメントを使用してトラップすることができる。

```powershell
> try{
    date -j
}
catch{
    echo ($PSItem.Exception.Message) > .\test.log
    continue
}
```

エラーは`$error`や`$PSItem.Exception.Message`で参照できる。

## 参照
- [PowerShell のエラーハンドリングを（今度こそ）理解する](https://qiita.com/mkht/items/24da4850f9d000b35fc4)
- [about_Redirection](https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_redirection?view=powershell-7.3)
- [about_Output_Streams](https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_output_streams?view=powershell-7.3)
- [例外について知りたかったことのすべて](https://learn.microsoft.com/ja-jp/powershell/scripting/learn/deep-dives/everything-about-exceptions?view=powershell-7.3)
