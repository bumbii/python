# Operator precedence - not True == False

## Hiện tượng lạ

```python
print(not True == False)   # False ❌
print(not (True == False)) # True

# Tương tự
print(not 1 == 2)   # False
print(not (1 == 2)) # True
```

**What the Python?!** `not True == False` không phải True sao?! 🤔

## Giải thích

### Operator precedence

```python
# Python evaluate:
not True == False
# = not (True == False)  # == có precedence cao hơn not
# = not False
# = True

# KHÔNG phải:
# = (not True) == False
# = False == False
# = True
```

### Bảng precedence (cao → thấp)

```
1. ()           # Parentheses
2. **           # Exponentiation
3. +x, -x, ~x   # Unary plus, minus, NOT
4. *, /, //, %  # Multiplication, Division
5. +, -         # Addition, Subtraction
6. <<, >>       # Shifts
7. &            # Bitwise AND
8. ^            # Bitwise XOR
9. |            # Bitwise OR
10. ==, !=, <, >, <=, >=, is, in  # Comparisons
11. not         # Boolean NOT
12. and         # Boolean AND
13. or          # Boolean OR
```

## Ví dụ phổ biến

### `not` và `==`

```python
# not có precedence THẤP hơn ==
not x == y  # = not (x == y)

# Dùng ()
(not x) == y  # Rõ ràng hơn
```

### `and` và `or`

```python
# and có precedence cao hơn or
a or b and c  # = a or (b and c)

# Không phải
(a or b) and c
```

### Arithmetic và comparison

```python
# Arithmetic trước comparison
2 + 3 == 5  # = (2 + 3) == 5 = True

1 < 2 + 3   # = 1 < (2 + 3) = True
```

## Best Practice

### ✅ Luôn dùng ()

```python
# ✅ Rõ ràng
if (not value) == expected:
    pass

# ❌ Confusing
if not value == expected:
    pass
```

## Tóm tắt

> **Operator precedence:**
> - Comparison (`==`) > `not`
> - `and` > `or`
> - ✅ Luôn dùng `()` để rõ ràng

**Nhớ**: **Khi nghi ngờ, dùng ()!**
