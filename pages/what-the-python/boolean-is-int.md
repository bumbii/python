# True + True = 2 - Boolean là int?!

## Hiện tượng lạ

```python
# Phép toán với Boolean
print(True + True)   # 2
print(True + False)  # 1
print(True * 5)      # 5
print(False * 100)   # 0

# So sánh
print(True == 1)     # True
print(False == 0)    # True

# isinstance
print(isinstance(True, int))   # True
print(isinstance(False, int))  # True
```

**What the Python?!** Boolean có thể cộng, nhân như số? Và `isinstance(True, int)` trả về True?! 😱

## Giải thích

### Boolean là subclass của int

Trong Python, `bool` là **subclass** của `int`!

```python
# Kiểm tra class hierarchy
print(bool.__bases__)  # (<class 'int'>,)
print(issubclass(bool, int))  # True

# Bool inherits từ int
print(type(True))   # <class 'bool'>
print(type(False))  # <class 'bool'>

# Nhưng cũng là int
print(isinstance(True, int))   # True
print(isinstance(False, int))  # True
```

### Giá trị của True và False

```python
# True = 1, False = 0
print(int(True))   # 1
print(int(False))  # 0

# Chúng BẰNG 1 và 0
print(True == 1)   # True
print(False == 0)  # True

# Nhưng không phải cùng object (identity khác)
print(True is 1)   # False
print(False is 0)  # False
```

## Arithmetic với Boolean

### Phép cộng

```python
print(True + True)    # 2
print(True + False)   # 1
print(False + False)  # 0

# Cộng với số
print(True + 5)       # 6
print(False + 10)     # 10
print(3 + True)       # 4
```

### Phép nhân

```python
print(True * 5)       # 5
print(False * 100)    # 0
print(True * False)   # 0
print(True * True)    # 1
```

### Phép trừ và chia

```python
print(True - False)   # 1
print(5 - True)       # 4
print(10 / True)      # 10.0
print(10 // True)     # 10
```

### Phép mũ

```python
print(True ** 10)     # 1
print(2 ** True)      # 2
print(2 ** False)     # 1
```

## Use cases hợp lệ

### 1. Đếm số lượng True

```python
# Đếm số phần tử thỏa điều kiện
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
count_even = sum(n % 2 == 0 for n in numbers)
print(count_even)  # 5

# sum() hoạt động vì True = 1, False = 0
```

### 2. Boolean indexing

```python
options = ["No", "Yes"]
is_confirmed = True

# Dùng boolean làm index
print(options[is_confirmed])   # "Yes"
print(options[False])          # "No"

# Tương đương
print(options[1])  # "Yes"
print(options[0])  # "No"
```

### 3. Conditional arithmetic

```python
def calculate_price(base_price, is_member):
    # Discount 10% cho member
    discount = is_member * 0.1  # True * 0.1 = 0.1, False * 0.1 = 0
    return base_price * (1 - discount)

print(calculate_price(100, True))   # 90.0
print(calculate_price(100, False))  # 100.0
```

### 4. Toggle values

```python
# Chuyển đổi 0 <-> 1
value = 0
value = 1 - value  # Toggle
print(value)  # 1

# Tương tự với boolean
flag = False
flag = not flag  # Cách thông thường
# hoặc
flag = True - flag  # Trick (không khuyến khích)
```

## Lịch sử - Tại sao thiết kế như vậy?

### Python 2.2 (2001)

- Trước Python 2.3, không có kiểu `bool` riêng
- Dùng `1` và `0` thay cho True và False

```python
# Python 2.2 trở về trước
if 1:  # Dùng 1 thay cho True
    print("True")
```

### Python 2.3 (2003)

- Thêm `bool` type với `True` và `False`
- **Quyết định thiết kế**: Làm `bool` subclass của `int` để:
  - ✅ Backward compatibility
  - ✅ Code cũ vẫn chạy
  - ✅ `1` và `0` vẫn có thể dùng như boolean

## Khi nào nên/không nên dùng arithmetic

### ✅ Nên dùng

```python
# 1. Đếm số lượng
count = sum(condition for item in items)

# 2. Boolean indexing (nếu rõ ràng)
result = ["Fail", "Pass"][is_passed]

# 3. Bitwise operations
flags = is_read | (is_write << 1) | (is_execute << 2)
```

### ❌ Không nên dùng

```python
# 1. Phép toán khó hiểu
discount = is_member * 0.1  # ❌ Confusing
# Tốt hơn:
discount = 0.1 if is_member else 0  # ✅ Clear

# 2. Boolean arithmetic phức tạp
result = (flag1 + flag2) * flag3 - flag4  # ❌ What?
# Tốt hơn:
if flag1 or flag2:
    if flag3 and not flag4:
        result = ...  # ✅ Readable

# 3. Toggle với arithmetic
value = 1 - value  # ❌ Cryptic
# Tốt hơn:
value = not value  # ✅ Clear
```

## So sánh với 1 và 0

### Equality (==)

```python
# True == 1
print(True == 1)    # True
print(False == 0)   # True

# Nhưng cẩn thận!
print(2 == True)    # False (2 != 1)
print(-1 == True)   # False
print(0.0 == False) # True
print(1.0 == True)  # True
```

### Identity (is)

```python
# True is not 1
print(True is 1)    # False
print(False is 0)   # False

# True và False là singleton
a = True
b = True
print(a is b)       # True (cùng object)
```

### Hash values

```python
# True và 1 có cùng hash
print(hash(True))   # 1
print(hash(1))      # 1
print(hash(False))  # 0
print(hash(0))      # 0

# Vì vậy có thể gây vấn đề trong dict/set
d = {True: "boolean", 1: "integer"}
print(d)  # {True: 'integer'} - 1 overwrite True!
```

## Trường hợp đặc biệt

### Dictionary keys

```python
# True và 1 coi như cùng key!
d = {}
d[True] = "A"
d[1] = "B"
print(d)  # {True: 'B'} - Chỉ có 1 entry!

# Tương tự với False và 0
d = {}
d[False] = "A"
d[0] = "B"
print(d)  # {False: 'B'}
```

### Set membership

```python
# True và 1 coi như duplicate
s = {True, 1, 2, False, 0, 3}
print(s)  # {False, True, 2, 3}
# Chỉ giữ True và False, loại 1 và 0
```

### List/Tuple indexing

```python
lst = ["A", "B", "C"]

# Boolean làm index
print(lst[True])   # "B" (index 1)
print(lst[False])  # "A" (index 0)

# Nhưng cẩn thận - chỉ dùng được với index 0, 1
# lst[True + True] sẽ là lst[2]
```

## Truthy vs True

### Phân biệt truthy và True

```python
# Truthy values (evaluate to True)
truthy_values = [1, "hello", [1], {1: 1}, True]

for val in truthy_values:
    if val:  # Truthy check
        print(f"{val} is truthy")

# Nhưng không phải tất cả đều == True
print(1 == True)      # True
print("hello" == True) # False
print([1] == True)    # False

# Chỉ 1 và True == True
```

### Bool() conversion

```python
# Conversion to bool
print(bool(0))      # False
print(bool(1))      # True
print(bool(2))      # True (truthy, not True)
print(bool(""))     # False
print(bool("hi"))   # True
print(bool([]))     # False
print(bool([1]))    # True
```

## Best Practices

### ✅ Nên làm

```python
# 1. Dùng True/False thay vì 1/0 cho boolean
is_valid = True  # ✅
is_valid = 1     # ❌

# 2. Dùng boolean operations
if is_active and not is_deleted:  # ✅
    pass

# 3. Explicit conversion
count = sum(1 for x in items if condition(x))  # ✅

# 4. Dùng bool() để convert
is_empty = bool(my_list)  # ✅ Clear intent
```

### ❌ Tránh làm

```python
# 1. Arithmetic với boolean
result = flag1 + flag2  # ❌ Confusing
result = flag1 or flag2  # ✅ Clear

# 2. So sánh explicit với True/False
if flag == True:  # ❌ Redundant
if flag:          # ✅ Pythonic

# 3. Boolean arithmetic tricks
value = (not value) * 1  # ❌ Cryptic
value = int(not value)   # ✅ If needed

# 4. Dùng 1/0 thay True/False
return 1 if condition else 0  # ❌
return True if condition else False  # ✅
# Hoặc tốt hơn:
return condition  # ✅
```

## Type checking

```python
# Kiểm tra type
def process(value):
    # Kiểm tra chính xác là bool
    if type(value) is bool:
        print("It's a bool")
    elif isinstance(value, bool):
        print("It's a bool or subclass")
    elif isinstance(value, int):
        print("It's an int (includes bool!)")

process(True)   # "It's a bool"
process(1)      # "It's an int (includes bool!)"

# Cẩn thận với isinstance
isinstance(True, int)  # True - bool is int!
```

## Tóm tắt

| Expression | Result | Reason |
|------------|--------|--------|
| `True + True` | `2` | 1 + 1 |
| `True * 5` | `5` | 1 * 5 |
| `False + 10` | `10` | 0 + 10 |
| `True == 1` | `True` | Cùng giá trị |
| `True is 1` | `False` | Khác object |
| `isinstance(True, int)` | `True` | bool subclass của int |
| `type(True) is int` | `False` | type là bool |
| `hash(True)` | `1` | Same hash |
| `{True: 'a', 1: 'b'}` | `{True: 'b'}` | 1 overwrites True |

## Ghi nhớ

> **`bool` là subclass của `int` trong Python!**
> - ✅ `True == 1` và `False == 0`
> - ✅ Có thể dùng arithmetic: `True + True = 2`
> - ✅ Hữu ích cho `sum()` counting
> - ⚠️ `True is not 1` (khác object)
> - ⚠️ Trong dict/set, `True` và `1` là duplicate
> - 🎯 Luôn dùng `True/False` thay vì `1/0` cho boolean logic

**Best practice**: Dùng boolean cho logic, dùng int cho arithmetic. Không mix!
