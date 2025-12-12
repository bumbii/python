# 0.1 + 0.2 không bằng 0.3

## Hiện tượng lạ

```python
# Phép toán đơn giản
result = 0.1 + 0.2
print(result)           # 0.30000000000000004
print(result == 0.3)    # False

# Các ví dụ khác
print(0.1 + 0.1 + 0.1)         # 0.30000000000000004
print(0.1 + 0.1 + 0.1 == 0.3)  # False

print(1.2 - 1.0)               # 0.19999999999999996
print(1.2 - 1.0 == 0.2)        # False
```

**What the Python?!** Tại sao `0.1 + 0.2` không bằng `0.3`?! Toán học bị phá vỡ rồi sao?! 😱

## Giải thích

### Floating-point representation

Vấn đề **KHÔNG phải lỗi của Python**, mà là cách máy tính lưu trữ số thập phân theo **IEEE 754 floating-point** standard.

```python
# Máy tính lưu số dưới dạng binary (nhị phân)
# Một số thập phân KHÔNG thể biểu diễn chính xác trong binary

# Ví dụ: 0.1 trong binary là số vô hạn tuần hoàn
# 0.1 (decimal) = 0.0001100110011001100110011... (binary, vô hạn)

# Máy tính phải làm tròn → Mất độ chính xác
```

### Xem representation thực tế

```python
# Xem giá trị thực sự được lưu
print(f"{0.1:.20f}")   # 0.10000000000000000555
print(f"{0.2:.20f}")   # 0.20000000000000001110
print(f"{0.3:.20f}")   # 0.29999999999999998890

# Khi cộng lại
print(f"{0.1 + 0.2:.20f}")  # 0.30000000000000004441
```

## Tại sao lại như vậy?

### Binary không biểu diễn được mọi decimal

```python
# Giống như:
# - Decimal không biểu diễn được 1/3 chính xác
#   1/3 = 0.333333... (vô hạn)

# - Binary không biểu diễn được 0.1 chính xác
#   0.1 (decimal) = 0.00011001100110011... (binary, vô hạn)

# Ví dụ decimal:
print(1 / 3)              # 0.3333333333333333
print(1 / 3 * 3)          # 1.0 (may be)
print(1 / 3 + 1 / 3 + 1 / 3)  # 0.9999999999999999 or 1.0
```

### Một số decimal → binary chính xác, một số không

```python
# ✅ Chính xác (powers of 2)
print(0.5)        # 0.5 (= 1/2 = 2^-1)
print(0.25)       # 0.25 (= 1/4 = 2^-2)
print(0.125)      # 0.125 (= 1/8 = 2^-3)

print(0.5 + 0.5 == 1.0)     # True
print(0.25 + 0.25 == 0.5)   # True

# ❌ Không chính xác
print(0.1)        # 0.1 (không biểu diễn được chính xác)
print(0.2)        # 0.2 (không biểu diễn được chính xác)
print(0.3)        # 0.3 (không biểu diễn được chính xác)

print(0.1 + 0.2 == 0.3)     # False
```

## Các vấn đề thực tế

### Vấn đề 1: So sánh bằng

```python
# SAI - So sánh trực tiếp
price = 0.1 + 0.2
if price == 0.3:  # False!
    print("Đúng giá")
else:
    print("Sai giá")  # In ra dòng này!
```

### Vấn đề 2: Accumulation errors

```python
# Lỗi tích lũy khi cộng nhiều lần
total = 0.0
for _ in range(10):
    total += 0.1

print(total)           # 0.9999999999999999
print(total == 1.0)    # False!
```

### Vấn đề 3: Financial calculations

```python
# Tính tiền - RẤT NGUY HIỂM!
price = 0.1
quantity = 3
total = price * quantity

print(total)           # 0.30000000000000004
print(total == 0.3)    # False

# Nếu làm tròn sai → Mất tiền!
```

## Giải pháp

### 1. So sánh với epsilon (tolerance)

```python
# Dùng tolerance thay vì so sánh trực tiếp
def isclose(a, b, tolerance=1e-9):
    return abs(a - b) < tolerance

# Sử dụng
result = 0.1 + 0.2
print(isclose(result, 0.3))  # True ✅

# Hoặc dùng math.isclose (Python 3.5+)
import math

print(math.isclose(0.1 + 0.2, 0.3))  # True ✅
print(math.isclose(0.1 + 0.2, 0.3, rel_tol=1e-9))  # True
```

### 2. Dùng Decimal module

```python
from decimal import Decimal

# Dùng Decimal cho độ chính xác cao
a = Decimal('0.1')  # QUAN TRỌNG: Dùng string, không phải float!
b = Decimal('0.2')
c = a + b

print(c)            # 0.3
print(c == Decimal('0.3'))  # True ✅

# SAI - Dùng float
wrong = Decimal(0.1)  # Decimal('0.1000000000000000055511151231257827021181583404541015625')
print(wrong)  # Vẫn không chính xác!

# ĐÚNG - Dùng string
correct = Decimal('0.1')
print(correct)  # 0.1 ✅
```

### 3. Dùng fractions module

```python
from fractions import Fraction

# Dùng phân số
a = Fraction(1, 10)  # 1/10
b = Fraction(2, 10)  # 2/10
c = a + b

print(c)            # 3/10
print(c == Fraction(3, 10))  # True ✅
print(float(c))     # 0.3
```

### 4. Làm tròn kết quả

```python
# Làm tròn đến số chữ số mong muốn
result = round(0.1 + 0.2, 2)
print(result)           # 0.3
print(result == 0.3)    # True ✅

# Cẩn thận - round cũng có quirks
print(round(2.5))   # 2 (banker's rounding)
print(round(3.5))   # 4
```

### 5. Nhân với integer trước

```python
# Trick: Nhân với 10, 100, ... để biến thành int
# SAI
price_per_item = 0.1
quantity = 3
total = price_per_item * quantity  # 0.30000000000000004

# ĐÚNG - Dùng cents
price_per_item_cents = 10  # 10 cents
quantity = 3
total_cents = price_per_item_cents * quantity  # 30
total_dollars = total_cents / 100  # 0.3
```

## Use cases cho từng giải pháp

### math.isclose() - Cho tính toán khoa học

```python
import math

# Tính toán khoa học, physics
def calculate_velocity(distance, time):
    velocity = distance / time
    expected = 299792.458  # km/s

    if math.isclose(velocity, expected, rel_tol=1e-9):
        return "Đúng tốc độ ánh sáng!"
```

### Decimal - Cho financial calculations

```python
from decimal import Decimal, ROUND_HALF_UP

# Tính toán tài chính
def calculate_total(items):
    total = Decimal('0')
    for item in items:
        price = Decimal(str(item['price']))
        quantity = Decimal(str(item['quantity']))
        total += price * quantity

    # Làm tròn 2 chữ số
    return total.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)

items = [
    {'price': 0.1, 'quantity': 3},
    {'price': 0.2, 'quantity': 2},
]
print(calculate_total(items))  # 0.70 ✅
```

### Fraction - Cho toán học chính xác

```python
from fractions import Fraction

# Phân số chính xác
def solve_equation():
    # x = 1/3 + 1/6
    x = Fraction(1, 3) + Fraction(1, 6)
    print(x)  # 1/2 ✅

    # So sánh chính xác
    if x == Fraction(1, 2):
        print("Đúng!")
```

## Common mistakes

### Mistake 1: So sánh trực tiếp

```python
# SAI
if 0.1 + 0.2 == 0.3:  # ❌
    pass

# ĐÚNG
import math
if math.isclose(0.1 + 0.2, 0.3):  # ✅
    pass
```

### Mistake 2: Dùng float cho money

```python
# SAI
balance = 100.0
balance -= 0.1
balance -= 0.1
balance -= 0.1
print(balance == 99.7)  # ❌ False

# ĐÚNG
from decimal import Decimal
balance = Decimal('100.0')
balance -= Decimal('0.1')
balance -= Decimal('0.1')
balance -= Decimal('0.1')
print(balance == Decimal('99.7'))  # ✅ True
```

### Mistake 3: Accumulation trong loop

```python
# SAI
total = 0.0
for i in range(100):
    total += 0.01
print(total == 1.0)  # ❌ False
print(total)  # 0.9999999999999999

# ĐÚNG
from decimal import Decimal
total = Decimal('0')
for i in range(100):
    total += Decimal('0.01')
print(total == Decimal('1.0'))  # ✅ True
```

## Testing với float

```python
import math

def test_calculation():
    result = complex_calculation()
    expected = 123.456

    # SAI
    assert result == expected  # ❌ Có thể fail

    # ĐÚNG
    assert math.isclose(result, expected, rel_tol=1e-9)  # ✅

    # Hoặc với pytest
    # pytest.approx()
```

## Khi nào dùng float OK?

### ✅ OK với float

```python
# 1. Graphics, game development (không cần chính xác tuyệt đối)
position_x = 10.5
position_y = 20.3

# 2. Measurements (đã có sai số từ sensor)
temperature = 25.6
humidity = 60.2

# 3. Tính toán gần đúng
average = sum(values) / len(values)

# 4. So sánh với epsilon
if math.isclose(result, expected):
    pass
```

### ❌ KHÔNG dùng float

```python
# 1. Money, finance
price = Decimal('19.99')  # ✅ Dùng Decimal

# 2. Exact fractions
ratio = Fraction(1, 3)  # ✅ Dùng Fraction

# 3. Counters, indices
count = 0  # ✅ Dùng int
```

## Best Practices

```python
# 1. Luôn dùng math.isclose cho so sánh float
import math

if math.isclose(a, b, rel_tol=1e-9):
    pass

# 2. Dùng Decimal cho tiền
from decimal import Decimal

price = Decimal('19.99')

# 3. Dùng string cho Decimal
correct = Decimal('0.1')  # ✅
wrong = Decimal(0.1)      # ❌

# 4. Round kết quả display
display_value = round(0.1 + 0.2, 2)  # 0.3

# 5. Document tolerance trong tests
assert math.isclose(result, expected, rel_tol=1e-6)  # Tolerance rõ ràng
```

## Tóm tắt

| Vấn đề | Giải pháp | Use case |
|--------|-----------|----------|
| `0.1 + 0.2 != 0.3` | `math.isclose()` | Tính toán khoa học |
| Money calculations | `Decimal` | Finance |
| Exact fractions | `Fraction` | Toán học |
| Display rounding | `round()` | UI output |
| Accumulation errors | `Decimal` hoặc `int` | Loops, totals |

## Ghi nhớ

> **Float không chính xác tuyệt đối!**
> - ❌ KHÔNG so sánh float với `==`
> - ✅ Dùng `math.isclose()` để so sánh
> - 💰 Dùng `Decimal` cho money
> - 🔢 Dùng `Fraction` cho phân số chính xác
> - 📊 Dùng `round()` cho display
> - ⚠️ Đây KHÔNG phải bug Python, mà là cách máy tính hoạt động!

**Golden Rule**: **Never use `==` with floats, always use tolerance-based comparison!**
