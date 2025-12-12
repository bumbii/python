# Phép chia / vs //

## Hiện tượng lạ

```python
# Phép chia bình thường
print(10 / 3)    # 3.3333333333333335
print(10 / 2)    # 5.0  <- Chú ý: 5.0 không phải 5

# Phép chia lấy phần nguyên
print(10 // 3)   # 3
print(10 // 2)   # 5

# Với số âm - BẤT NGỜ!
print(-10 / 3)   # -3.3333333333333335
print(-10 // 3)  # -4  <- What the Python?!
print(-7 // 2)   # -4  <- Không phải -3!
```

**Tại sao `-10 // 3` là `-4` chứ không phải `-3`?!** 🤔

## Giải thích

### `/` - True Division (Python 3)

Luôn trả về `float`, kể cả khi chia hết:

```python
print(10 / 2)    # 5.0 (float)
print(9 / 3)     # 3.0 (float)
print(7 / 2)     # 3.5 (float)

# Luôn là float
print(type(10 / 2))  # <class 'float'>
print(type(9 / 3))   # <class 'float'>
```

### `//` - Floor Division

Chia và **làm tròn xuống** (floor) về số nguyên gần nhất:

```python
# Số dương
print(10 // 3)   # 3 (floor(3.333...) = 3)
print(7 // 2)    # 3 (floor(3.5) = 3)

# Số âm - Làm tròn XUỐNG (về âm vô cực)
print(-10 // 3)  # -4 (floor(-3.333...) = -4)
print(-7 // 2)   # -4 (floor(-3.5) = -4)
```

### Floor vs Truncate

Đây là điểm quan trọng:

```python
import math

# Floor: Làm tròn xuống (về -∞)
print(math.floor(3.7))   # 3
print(math.floor(-3.7))  # -4  <- Xuống!

# Truncate: Cắt phần thập phân (về 0)
print(math.trunc(3.7))   # 3
print(math.trunc(-3.7))  # -3  <- Về 0!

# Python // dùng FLOOR, không phải TRUNCATE
print(10 // 3)    # 3 (floor)
print(-10 // 3)   # -4 (floor, không phải -3)
```

## So sánh chi tiết

### Với số dương

```python
a, b = 10, 3

print(a / b)     # 3.3333333333333335 (float)
print(a // b)    # 3 (int)
print(a % b)     # 1 (remainder)

# Công thức: a = (a // b) * b + (a % b)
# 10 = 3 * 3 + 1 ✅
```

### Với số âm

```python
a, b = -10, 3

print(a / b)     # -3.3333333333333335
print(a // b)    # -4 (floor(-3.33...) = -4)
print(a % b)     # 2

# Công thức vẫn đúng:
# -10 = (-4) * 3 + 2
# -10 = -12 + 2 ✅
```

### Bất ngờ với modulo

```python
# Số dương
print(10 % 3)    # 1
print(10 // 3)   # 3

# Số âm - KẾT QUẢ KHÁC NHIỀU NGÔN NGỮ KHÁC!
print(-10 % 3)   # 2 (không phải -1!)
print(-10 // 3)  # -4

# Trong C/Java: -10 % 3 = -1
# Trong Python: -10 % 3 = 2
```

## Python 2 vs Python 3

### Python 2 - Classic Division

```python
# Python 2
print(10 / 3)    # 3 (integer division)
print(10.0 / 3)  # 3.3333... (float division)

# Phải import để dùng true division
from __future__ import division
print(10 / 3)    # 3.3333... (true division)
```

### Python 3 - True Division

```python
# Python 3 (hiện tại)
print(10 / 3)    # 3.3333... (luôn float)
print(10 // 3)   # 3 (floor division)
```

## Các trường hợp đặc biệt

### Division by zero

```python
# True division
try:
    print(10 / 0)
except ZeroDivisionError as e:
    print(e)  # division by zero

# Floor division
try:
    print(10 // 0)
except ZeroDivisionError as e:
    print(e)  # integer division or modulo by zero
```

### Với float

```python
# Floor division với float vẫn trả về float
print(10.0 // 3)     # 3.0 (float)
print(10 // 3.0)     # 3.0 (float)
print(10.5 // 2)     # 5.0

# Kiểu int chỉ khi cả hai là int
print(10 // 3)       # 3 (int)
print(type(10 // 3)) # <class 'int'>
```

### Với số âm và float

```python
print(-10.5 // 3)    # -4.0 (floor(-3.5) = -4)
print(-7.8 // 2.5)   # -4.0 (floor(-3.12) = -4)

# Cẩn thận!
print(-1 // 2)       # -1 (không phải 0!)
```

## Use cases thực tế

### Chia đều items

```python
# Chia 10 items cho 3 người
total_items = 10
people = 3

items_per_person = total_items // people  # 3
remainder = total_items % people          # 1

print(f"Mỗi người: {items_per_person} items")
print(f"Thừa: {remainder} items")
```

### Tính số trang

```python
def calculate_pages(total_items, items_per_page):
    # Làm tròn lên (ceiling)
    return (total_items + items_per_page - 1) // items_per_page

print(calculate_pages(10, 3))  # 4 trang
print(calculate_pages(9, 3))   # 3 trang
print(calculate_pages(8, 3))   # 3 trang
```

### Array indexing

```python
# Convert 1D index to 2D coordinates
def index_to_coords(index, width):
    row = index // width
    col = index % width
    return (row, col)

# Grid 3x3, index 7
print(index_to_coords(7, 3))  # (2, 1)
```

### Time calculations

```python
# Convert seconds to hours:minutes:seconds
def seconds_to_hms(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"

print(seconds_to_hms(3661))  # "01:01:01"
print(seconds_to_hms(7384))  # "02:03:04"
```

## Common Mistakes

### Mistake 1: Expect truncate thay vì floor

```python
# SAI - Nghĩ rằng // truncate về 0
print(-10 // 3)  # -4, không phải -3!

# Nếu muốn truncate, dùng int()
print(int(-10 / 3))  # -3 (truncate)

# Hoặc math.trunc()
import math
print(math.trunc(-10 / 3))  # -3
```

### Mistake 2: Quên `/` trả về float

```python
# SAI - Expect int
result = 10 / 2
if result == 5:  # So sánh int với float
    print("Equal")  # Vẫn True nhưng...

print(type(result))  # <class 'float'>

# ĐÚNG - Dùng //
result = 10 // 2  # int
```

### Mistake 3: Modulo với số âm

```python
# Trong Python
print(-10 % 3)   # 2 (không phải -1 như C/Java!)

# Nếu muốn behavior giống C
def c_modulo(a, b):
    return int(a % b) if a * b > 0 else int(a % b) - b

print(c_modulo(-10, 3))  # -1
```

## Ceiling division

```python
import math

# Cách 1: math.ceil
def ceil_div_1(a, b):
    return math.ceil(a / b)

# Cách 2: Trick với //
def ceil_div_2(a, b):
    return -(-a // b)

# Cách 3: Add (b-1)
def ceil_div_3(a, b):
    return (a + b - 1) // b

print(ceil_div_1(10, 3))  # 4
print(ceil_div_2(10, 3))  # 4
print(ceil_div_3(10, 3))  # 4
```

## Đảm bảo invariant

Python đảm bảo công thức này luôn đúng:

```python
# a = (a // b) * b + (a % b)

# Test
for a in [10, -10, 7, -7]:
    for b in [3, -3]:
        quotient = a // b
        remainder = a % b
        result = quotient * b + remainder
        print(f"{a} = ({quotient}) * {b} + ({remainder}) = {result}")
        assert a == result  # Luôn đúng
```

## Best Practices

### ✅ Nên làm

```python
# 1. Dùng // khi cần int
count = total // batch_size  # ✅

# 2. Dùng / cho calculation
average = total / count  # ✅

# 3. Convert về int nếu cần
result = int(a / b)  # ✅ Explicit

# 4. Document behavior với số âm
def divide_floor(a, b):
    """Floor division - rounds toward -infinity"""
    return a // b
```

### ❌ Tránh làm

```python
# 1. Mix / và // không rõ ràng
result = total / 2 // 3  # ❌ Confusing

# 2. Assume // truncate
value = -10 // 3  # ❌ Nghĩ là -3

# 3. Quên / returns float
if total / 2 == 5:  # ❌ Comparing float
    pass
```

## Performance

```python
import timeit

# // nhanh hơn một chút với int
print(timeit.timeit('10 // 3', number=1000000))   # ~0.03s
print(timeit.timeit('int(10 / 3)', number=1000000))  # ~0.06s

# Nhưng với float, gần bằng nhau
print(timeit.timeit('10.0 // 3.0', number=1000000))  # ~0.04s
print(timeit.timeit('10.0 / 3.0', number=1000000))   # ~0.04s
```

## Tóm tắt

| Operation | Result | Type | Behavior |
|-----------|--------|------|----------|
| `10 / 3` | 3.333... | float | True division |
| `10 // 3` | 3 | int | Floor division |
| `-10 / 3` | -3.333... | float | True division |
| `-10 // 3` | -4 | int | Floor (toward -∞) |
| `10.0 // 3` | 3.0 | float | Floor but returns float |
| `10 % 3` | 1 | int | Remainder |
| `-10 % 3` | 2 | int | Python-specific! |

## Ghi nhớ

> **`/` vs `//` trong Python:**
> - `/` → Luôn trả về **float** (true division)
> - `//` → **Floor division** (làm tròn xuống về -∞)
> - ⚠️ `//` không phải truncate! `-10 // 3 = -4` (không phải -3)
> - ⚠️ `-10 % 3 = 2` (khác C/Java!)
> - 🔧 Invariant: `a = (a // b) * b + (a % b)` luôn đúng
> - 🐍 Python 3: `/` luôn float, Python 2: `/` phụ thuộc type

**Quy tắc**: Dùng `//` cho integer division, `/` cho true division!
