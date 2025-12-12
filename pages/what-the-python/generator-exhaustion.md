# Generator exhaustion - Dùng 1 lần rồi... hết!

## Hiện tượng lạ

```python
gen = (x for x in range(5))

# Lần 1
print(list(gen))  # [0, 1, 2, 3, 4] ✅

# Lần 2
print(list(gen))  # [] ❌ Rỗng?!
```

**What the Python?!** Generator dùng 1 lần rồi hết?! 😱

## Giải thích

### Generator là iterator, chỉ dùng 1 lần

```python
gen = (x for x in range(3))

# Iterate lần 1
for x in gen:
    print(x)  # 0, 1, 2

# Iterate lần 2
for x in gen:
    print(x)  # Không in gì! Generator đã exhausted
```

### Generator không store values

```python
# List - Store values
lst = [x for x in range(1000000)]  # Chiếm RAM!

# Generator - Generate on-the-fly
gen = (x for x in range(1000000))  # Không chiếm RAM
```

## Giải pháp

### ✅ Solution 1: Convert sang list

```python
# Nếu cần dùng nhiều lần
gen = (x for x in range(5))
data = list(gen)  # Convert 1 lần

print(data)  # [0, 1, 2, 3, 4]
print(data)  # [0, 1, 2, 3, 4] ✅
```

### ✅ Solution 2: Tạo lại generator

```python
def create_gen():
    return (x for x in range(5))

# Dùng lần 1
gen1 = create_gen()
print(list(gen1))  # [0, 1, 2, 3, 4]

# Dùng lần 2
gen2 = create_gen()
print(list(gen2))  # [0, 1, 2, 3, 4] ✅
```

### ✅ Solution 3: itertools.tee

```python
import itertools

gen = (x for x in range(5))
gen1, gen2 = itertools.tee(gen, 2)

print(list(gen1))  # [0, 1, 2, 3, 4]
print(list(gen2))  # [0, 1, 2, 3, 4] ✅
```

## Khi nào dùng generator?

### ✅ Dùng khi

```python
# 1. Data lớn
def read_large_file(filename):
    with open(filename) as f:
        for line in f:  # Generator
            yield line.strip()

# 2. Infinite sequences
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 3. Pipeline
squares = (x**2 for x in range(1000000))
evens = (x for x in squares if x % 2 == 0)
```

## Tóm tắt

> **Generators:**
> - ✅ Memory efficient
> - ⚠️ Chỉ iterate 1 lần
> - 🔧 Convert sang list nếu cần reuse
> - 🔄 Hoặc tạo lại generator

**Pattern**:
```python
# Dùng 1 lần
gen = (x for x in data)

# Dùng nhiều lần
data_list = list(gen)
```
