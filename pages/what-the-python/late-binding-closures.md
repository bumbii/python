# Late binding closures trong vòng lặp

## Hiện tượng lạ

```python
# Tạo list các functions
functions = []
for i in range(5):
    functions.append(lambda: i)

# Gọi từng function
for func in functions:
    print(func())
```

**Bạn nghĩ sẽ in**: `0 1 2 3 4`

**Kết quả thực tế**: `4 4 4 4 4` ❌

**What the Python?!** Tất cả functions đều return 4?! 😱

## Giải thích

### Late Binding

Python closures sử dụng **late binding**: giá trị của biến được **lookup lúc function ĐƯỢC GỌI**, không phải lúc được TẠO!

```python
functions = []
for i in range(5):
    # Lambda KHÔNG capture giá trị của i
    # Lambda chỉ REFERENCE đến biến i
    functions.append(lambda: i)

# Sau loop, i = 4
# Tất cả lambdas đều reference đến CÙNG biến i
# Khi gọi, i đã = 4 → Tất cả return 4
```

### Minh họa

```python
# Sau khi loop kết thúc
print(i)  # 4

# Mọi lambda đều reference biến i này
functions[0]()  # Lookup i → 4
functions[1]()  # Lookup i → 4
functions[2]()  # Lookup i → 4
```

## Giải pháp

### ✅ Solution 1: Default argument (Khuyến khích!)

```python
functions = []
for i in range(5):
    # Default argument được evaluate LÚC TẠO
    functions.append(lambda x=i: x)  # Capture giá trị của i

# In ra đúng
for func in functions:
    print(func())  # 0 1 2 3 4 ✅
```

### ✅ Solution 2: functools.partial

```python
from functools import partial

def return_value(x):
    return x

functions = []
for i in range(5):
    functions.append(partial(return_value, i))

for func in functions:
    print(func())  # 0 1 2 3 4 ✅
```

### ✅ Solution 3: Function factory

```python
def make_func(x):
    return lambda: x  # x là local variable của make_func

functions = []
for i in range(5):
    functions.append(make_func(i))

for func in functions:
    print(func())  # 0 1 2 3 4 ✅
```

### ✅ Solution 4: List comprehension

```python
# List comprehension tạo scope riêng
functions = [lambda x=i: x for i in range(5)]

for func in functions:
    print(func())  # 0 1 2 3 4 ✅
```

## Ví dụ thực tế

### Bug 1: Event handlers

```python
# SAI
buttons = []
for i in range(5):
    # Tất cả buttons đều gọi callback với i=4!
    button = Button(onclick=lambda: print(f"Button {i}"))  # ❌
    buttons.append(button)

# ĐÚNG
buttons = []
for i in range(5):
    button = Button(onclick=lambda x=i: print(f"Button {x}"))  # ✅
    buttons.append(button)
```

### Bug 2: Tkinter callbacks

```python
import tkinter as tk

# SAI
for i in range(5):
    btn = tk.Button(
        root,
        text=str(i),
        command=lambda: print(i)  # ❌ Tất cả print 4
    )
    btn.pack()

# ĐÚNG
for i in range(5):
    btn = tk.Button(
        root,
        text=str(i),
        command=lambda x=i: print(x)  # ✅
    )
    btn.pack()
```

### Bug 3: Async callbacks

```python
import asyncio

# SAI
async def main():
    tasks = []
    for i in range(5):
        # Tất cả tasks đều dùng i=4
        tasks.append(asyncio.create_task(process(lambda: i)))  # ❌

# ĐÚNG
async def main():
    tasks = []
    for i in range(5):
        tasks.append(asyncio.create_task(process(lambda x=i: x)))  # ✅
```

## Nested loops

```python
# SAI
functions = []
for i in range(3):
    for j in range(3):
        functions.append(lambda: (i, j))  # ❌

for func in functions:
    print(func())  # Tất cả print (2, 2)

# ĐÚNG
functions = []
for i in range(3):
    for j in range(3):
        functions.append(lambda x=i, y=j: (x, y))  # ✅

for func in functions:
    print(func())  # (0,0), (0,1), (0,2), (1,0), ...
```

## List comprehension vs for loop

### For loop - Late binding

```python
# For loop - SHARED scope
funcs = []
for i in range(3):
    funcs.append(lambda: i)

print([f() for f in funcs])  # [2, 2, 2] ❌
```

### List comprehension - Early binding (Python 3)

```python
# Python 3: List comp có scope riêng
funcs = [lambda: i for i in range(3)]
print([f() for f in funcs])  # [2, 2, 2] ❌ Vẫn late binding!

# Phải dùng default arg
funcs = [lambda x=i: x for i in range(3)]
print([f() for f in funcs])  # [0, 1, 2] ✅
```

## Tóm tắt

> **Closures trong Python dùng LATE BINDING**
> - ❌ `lambda: i` - Reference biến i
> - ✅ `lambda x=i: x` - Capture giá trị i
> - 🐛 Bug phổ biến với loops + lambdas
> - 🔧 Luôn dùng default argument để capture values

**Pattern an toàn**:
```python
for i in range(n):
    func = lambda x=i: do_something(x)  # Capture i
```
