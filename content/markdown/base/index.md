---
title: "Basic operation"
date: 2022-11-24T01:38:14Z
draft: false
---

## markdown 記法
|コマンド|概要|表示例|
| --- | --- | --- |
|#[space]|セクション| --- |
|##[space]|サブセクション| --- |
|###[space]|サブサブセクション| --- |
|-[space]|箇条書きリスト| --- |
|1.[space] <bz>   1.[space]|番号付きリスト <br>(数字はすべて1と記入することで順番に番号が割り振られる)| --- |
|- [ ] 文字|チェック付き箇条書きリスト| --- |
|>[spave]|引用| --- |
|>>[space]|二重引用| --- |
|`*[文字]*`|イタリック体|*イタリック*|
|`**[文字]**`|bold（太字）|**bold**|
|`***[文字]***`|強調(イタリック&ボールド)|***強調***|
|`~~取り消し線~~`|取り消し線|~~取り消し線~~|
|`***`|水平線(アスタリスクの変わりに`---`や`___`でも良い)| --- |
|`[リンク名](URL)`|リンクの記述| [Markdown記法](https://qiita.com/tbpgr/items/989c6badefff69377da7)|
|`` `[文字]` ``|文字の強調|`str`|
|```` ```python ````<br>print("Hello World) <br>```` ``` ````|ソースコードの記入(その他にもc言語やgnuplotなどでも使用できる)| --- |
|`<br>`|改行|改行します<br>※改行後に文字を記入|
|`&nbsp`|半角スペース|
|`&ensp`|半角より少し広めの空白|
|`&emsp`|全角スペース|
|`&thinsp`, `&nbsp`|より狭い空白|
  
※表示例が空欄のところは下記を参照


## セクション 〜様々な記法の表示例〜
## サブセクション
```markdown
## サブセクション
```

### サブサブセクション
```markdown
### サブサブセクション
```

#### サブサブサブセクション・・・
```markdown
#### サブサブサブセクション・・・
```

#### 箇条書き&番号付きリスト
- A
- B
  - C
  - D
    - E
    - F

1. a
1. b
- [ ] 箇条書き1
- [X] 箇条書き2

```markdown
- A
- B
  - C
  - D
    - E
    - F

1. a
1. b
- [ ] 箇条書き1
- [X] 箇条書き2
```



#### 引用
>引用1
  >>二重引用

```markdown
>引用1
  >>二重引用
```

#### ソースコード（Python, c)
```python
  for i in range(0, 10, 1):
    print(i)
```
```c
  #include<stdio.h>
  int main(void){
    int i;
    for(i = 0; i < 10; i++){
      print(i);
    }
    return 0;
  }
```
```````markdown
```python
  for i in range(0, 10, 1):
    print(i)
```
```c
  #include<stdio.h>
  int main(void){
    int i;
    for(i = 0; i < 10; i++){
      print(i);
    }
    return 0;
  }
```
```````
                      

#### 下線

<u>アンダーラインの例</u>

```
<u> 下線のcode </u>
```

#### 数式

数式は`$`や`$$`で囲むことでlatexと同様に表示することができる
- `$`は $\Deltax` のように組み込み
- `$$` は下記のように段落形式になる
  $$ x = \frac{-b\pm\sqrt{b^2}-4ac}{2a} $$

  ※ものによっては数式表示できないものもあるが、下記のようにヘッダーに記述しhtml形式に変換すれば数式表示が可能
  ```
  <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
  </script>
  <script type="text/x-mathjax-config">
  MathJax.Hub.Config({
  tex2jax: {
  inlineMath: [['$', '$'] ],
  displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
  }
  });
  </script>
  ```


- ```` 
  ```math 
  x = \frac{-b\pm\sqrt{b^2}-4ac}{2a}
  ``` 
  ````
  でもOKかも？
