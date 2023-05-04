---
tags: ["python", "pytorch"]
title: "Torch"
date: 2022-11-22T08:12:48Z
draft: false 
---

## About calcuration of gradient

### How not to calculate gradient
#### Use no_grad
For example;
```python
with torch.no_grad():
    y = x*2
```

**We can use as decorator**
```python
@torch.no_grad()
def doubler(x):
    return x*2
```

#### Use .detach() -> ?

#### Use .reaquires_grad -> ?

# reference
- [Pytorchの「.detach()」と「with no_grad():」と「.requires_grad = False」の違い](https://qiita.com/tttamaki/items/28f13a1507eb63387901)
- [PyTorchの新しい推論モードについて](PyTorchの新しい推論モードについて)
