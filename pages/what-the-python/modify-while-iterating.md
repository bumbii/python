# Sửa list trong khi đang iterate

## Hiện tượng lạ

```python
numbers = [1, 2, 3, 4, 5]

# Xóa số chẵn
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)

print(numbers)  # [1, 3, 5] ❌ Thiếu số 4?!
# Thực tế: [1, 3, 5] hoặc [1, 2, 3, 5] tùy implementation
```

**What the Python?!** Tại sao skip items?! 😱

## Giải thích

### Iterator bị lỗi khi list thay đổi

```python
numbers = [1, 2, 3, 4]

for i, num in enumerate(numbers):
    print(f"Index {i}: {num}")
    if num == 2:
        numbers.remove(2)  # Xóa → Indexes shift!

# Index 0: 1
# Index 1: 2
# Index 2: 4  ← Skip 3!
```

## Giải pháp

### ✅ Solution 1: Iterate qua copy

```python
numbers = [1, 2, 3, 4, 5]

# Iterate qua copy, modify original
for num in numbers.copy():  # or numbers[:]
    if num % 2 == 0:
        numbers.remove(num)

print(numbers)  # [1, 3, 5] ✅
```

### ✅ Solution 2: List comprehension

```python
numbers = [1, 2, 3, 4, 5]

# Tạo list mới
numbers = [num for num in numbers if num % 2 != 0]

print(numbers)  # [1, 3, 5] ✅
```

### ✅ Solution 3: filter()

```python
numbers = [1, 2, 3, 4, 5]

numbers = list(filter(lambda x: x % 2 != 0, numbers))

print(numbers)  # [1, 3, 5] ✅
```

### ✅ Solution 4: Iterate ngược

```python
numbers = [1, 2, 3, 4, 5]

# Iterate từ cuối → đầu
for i in range(len(numbers) - 1, -1, -1):
    if numbers[i] % 2 == 0:
        del numbers[i]

print(numbers)  # [1, 3, 5] ✅
```

## Với dictionary

```python
# ❌ SAI
data = {"a": 1, "b": 2, "c": 3}
for key in data:
    if data[key] % 2 == 0:
        del data[key]  # RuntimeError!

# ✅ ĐÚNG
data = {"a": 1, "b": 2, "c": 3}
for key in list(data.keys()):  # Copy keys
    if data[key] % 2 == 0:
        del data[key]
```

## Tóm tắt

> **Không modify collection khi đang iterate!**
> - ❌ Gây skip items hoặc RuntimeError
> - ✅ Iterate qua copy
> - ✅ List comprehension
> - ✅ Iterate ngược

**Pattern**:
```python
# Iterate qua copy
for item in items.copy():
    if condition:
        items.remove(item)

# List comprehension
items = [x for x in items if not condition]
```
