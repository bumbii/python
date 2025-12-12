# is vs == - Khi nào dùng cái nào?

## Sự khác biệt

### `==` - Equality (giá trị bằng nhau)

```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # True - Cùng giá trị
```

### `is` - Identity (cùng object)

```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a is b)  # False - Khác object

c = a
print(a is c)  # True - Cùng object
```

## Khi nào dùng `is`

### ✅ So sánh với None

```python
# ✅ ĐÚNG
if value is None:
    pass

# ❌ SAI
if value == None:
    pass
```

### ✅ So sánh với True/False

```python
# ✅ OK
if flag is True:
    pass

# ✅ Nhưng tốt hơn
if flag:
    pass
```

### ✅ Kiểm tra cùng object

```python
if a is b:
    print("Cùng object")
```

## Khi nào dùng `==`

### ✅ So sánh giá trị

```python
# ✅ Strings
if name == "Alice":
    pass

# ✅ Numbers
if count == 10:
    pass

# ✅ Lists/dicts
if data == expected:
    pass
```

## Cạm bẫy

### String/int caching

```python
# Strings
a = "hello"
b = "hello"
print(a is b)  # True (interned)

# Integers
x = 256
y = 256
print(x is y)  # True (cached)

x = 257
y = 257
print(x is y)  # False (not cached)
```

## Tóm tắt

> **`is` vs `==`:**
> - `is` → Identity (cùng object?)
> - `==` → Equality (cùng giá trị?)
> - ✅ `is` cho: None, True, False
> - ✅ `==` cho: strings, numbers, data structures

**Pattern**:
```python
if value is None:  # Identity
if value == expected:  # Equality
```
