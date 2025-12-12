# Extended unpacking - a, *b, c = [1,2,3,4,5]

## Extended unpacking (Python 3)

```python
# Bắt "phần còn lại" với *
a, *b, c = [1, 2, 3, 4, 5]

print(a)  # 1
print(b)  # [2, 3, 4] ✅ List!
print(c)  # 5
```

## Các trường hợp

### Đầu list

```python
first, *rest = [1, 2, 3, 4]
print(first)  # 1
print(rest)   # [2, 3, 4]
```

### Cuối list

```python
*init, last = [1, 2, 3, 4]
print(init)  # [1, 2, 3]
print(last)  # 4
```

### Giữa list

```python
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5
```

### Rỗng OK

```python
a, *b = [1]
print(a)  # 1
print(b)  # [] ✅ Empty list
```

## Function arguments

```python
def func(a, *args, b):
    print(a, args, b)

func(1, 2, 3, b=4)
# Output: 1 (2, 3) 4
```

## Tóm tắt

> **Extended unpacking:**
> - `*var` bắt nhiều values thành list
> - ✅ Chỉ 1 `*` per unpacking
> - ✅ `*` có thể ở đầu, giữa, cuối

**Pattern**:
```python
first, *rest = values
*init, last = values
first, *middle, last = values
```
