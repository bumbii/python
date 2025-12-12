# Chained comparisons - 1 < 2 < 3

## Hiện tượng kỳ lạ

```python
# Toán học tự nhiên
print(1 < 2 < 3)      # True ✅
print(3 > 2 > 1)      # True ✅
print(1 < 3 > 2)      # True ✅

# Nhưng...
print(1 < 2 and 2 < 3)  # True
print((1 < 2) < 3)      # True (nhưng logic khác!)

# Thậm chí
print(1 == 1 < 2)     # True
print(1 < 2 == True)  # False ❌ What?!
```

**What the Python?!** Sao lại có thể chain comparisons như toán học?! 🤔

## Giải thích

### Chained comparisons = Syntactic sugar

```python
# Python cho phép
a < b < c

# Tương đương
a < b and b < c

# KHÔNG phải
(a < b) < c  # ❌ Sai!
```

### Evaluate left-to-right

```python
# 1 < 2 < 3
# = 1 < 2 and 2 < 3
# = True and True
# = True

# 3 < 2 < 1
# = 3 < 2 and 2 < 1
# = False and False
# = False
```

### Mỗi giá trị evaluate 1 lần

```python
def get_value():
    print("Called!")
    return 2

# Chỉ call 1 lần
result = 1 < get_value() < 3
# Output: "Called!" (chỉ 1 lần)
# Result: True
```

## Các operators hỗ trợ

```python
# Comparison operators
a < b < c       # Less than
a <= b <= c     # Less than or equal
a > b > c       # Greater than
a >= b >= c     # Greater than or equal
a == b == c     # Equality
a != b != c     # Inequality (cẩn thận!)

# Mix operators
a < b <= c      # OK
a == b < c      # OK
```

## Use cases hữu ích

### Range checking

```python
# ✅ Rõ ràng và Pythonic
age = 25
if 18 <= age < 65:
    print("Working age")

# ❌ Dài dòng
if age >= 18 and age < 65:
    print("Working age")
```

### Sorting check

```python
# Kiểm tra sorted
numbers = [1, 2, 3, 4, 5]
is_sorted = all(numbers[i] <= numbers[i+1] for i in range(len(numbers)-1))

# Hoặc
a, b, c = 1, 2, 3
if a <= b <= c:
    print("Sorted")
```

## Cạm bẫy

### Trap 1: Chaining với equality

```python
# Trông hợp lý
print(1 == 1 == 1)    # True ✅

# Nhưng...
print(1 == 1 == True) # True (vì 1 == True)
print(True == 1 == 1) # True

# Nhầm lẫn
print(1 == True == 1) # True (không phải False!)
```

### Trap 2: Chaining `!=`

```python
# KHÔNG như toán học!
print(1 != 2 != 3)    # True
# = 1 != 2 and 2 != 3
# = True and True

print(1 != 2 != 1)    # True ❌
# = 1 != 2 and 2 != 1
# = True and True
# Nhưng toán học: 1 ≠ 2 ≠ 1 không hợp lý!
```

### Trap 3: Mix với boolean

```python
# Confusing
print(1 < 2 == True)  # False!
# = 1 < 2 and 2 == True
# = True and False
# = False

print((1 < 2) == True)  # True
```

## Best Practices

### ✅ Nên dùng

```python
# Range checks
if min_val <= x <= max_val:
    pass

# Sorted checks
if a <= b <= c:
    pass

# Multiple equality
if x == y == z == 0:
    pass
```

### ❌ Tránh

```python
# Tránh chain !=
if a != b != c:  # ❌ Confusing
    pass

# Tránh mix với True/False
if x < y == True:  # ❌ Confusing
    pass

# Quá phức tạp
if a < b > c <= d != e:  # ❌ Hard to read
    pass
```

## Tóm tắt

> **Chained comparisons trong Python:**
> - ✅ `a < b < c` = `a < b and b < c`
> - ✅ Mỗi giá trị evaluate 1 lần
> - ⚠️ `!=` chaining confusing
> - 🎯 Best cho range checks: `min <= x <= max`

**Pattern**:
```python
# Range check
if low <= value <= high:
    pass

# Sorted check
if a <= b <= c:
    pass
```
