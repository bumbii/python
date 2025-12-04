---
icon: wand-magic-sparkles
---

# Định dạng chuỗi (String Formatting)

## 1. Giới thiệu

**String Formatting** là cách tạo ra chuỗi có chứa giá trị của các biến. Python cung cấp nhiều cách để format string:

1. **f-strings** (khuyến khích, Python 3.6+)
2. **format()** method
3. **% operator** (cách cũ)
4. **Template strings**

## 2. F-Strings (Formatted String Literals)

### 2.1 - Cú pháp cơ bản

F-string bắt đầu bằng chữ `f` hoặc `F`, sau đó đặt biến trong `{}`.

```python
name = "Minh Anh"
age = 10

# Cách cũ (khó đọc)
message = "My name is " + name + " and I am " + str(age) + " years old"

# F-string (dễ đọc)
message = f"My name is {name} and I am {age} years old"
print(message)
# "My name is Minh Anh and I am 10 years old"
```

### 2.2 - Biểu thức trong f-string

Có thể đặt bất kỳ biểu thức Python nào trong `{}`:

```python
a = 5
b = 3

# Phép tính
print(f"{a} + {b} = {a + b}")  # "5 + 3 = 8"
print(f"{a} * {b} = {a * b}")  # "5 * 3 = 15"

# Gọi hàm
name = "python"
print(f"Uppercase: {name.upper()}")  # "Uppercase: PYTHON"

# Điều kiện
age = 15
print(f"Bạn là: {('Người lớn' if age >= 18 else 'Trẻ em')}")
# "Bạn là: Trẻ em"
```

### 2.3 - Format số

```python
# Số thập phân
pi = 3.14159
print(f"Pi = {pi:.2f}")  # "Pi = 3.14" (2 chữ số thập phân)
print(f"Pi = {pi:.4f}")  # "Pi = 3.1416" (4 chữ số)

# Số nguyên với dấu phẩy phân cách
big_number = 1000000
print(f"Number: {big_number:,}")  # "Number: 1,000,000"

# Phần trăm
rate = 0.856
print(f"Rate: {rate:.1%}")  # "Rate: 85.6%"
```

### 2.4 - Căn chỉnh và độ rộng

```python
name = "Alice"

# Căn trái (mặc định cho string)
print(f"{name:<10}|")  # "Alice     |"

# Căn phải
print(f"{name:>10}|")  # "     Alice|"

# Căn giữa
print(f"{name:^10}|")  # "  Alice   |"

# Với ký tự tùy chỉnh
print(f"{name:*^10}")  # "**Alice***"
```

### 2.5 - Format số với độ rộng

```python
numbers = [1, 10, 100, 1000]

for num in numbers:
    print(f"{num:5d}")  # Căn phải, độ rộng 5
# "    1"
# "   10"
# "  100"
# " 1000"

# Thêm số 0 đầu
for num in numbers:
    print(f"{num:05d}")
# "00001"
# "00010"
# "00100"
# "01000"
```

### 2.6 - Ký tự đặc biệt

```python
# Hiển thị dấu {} trong f-string
value = 10
print(f"{{value}} = {value}")  # "{value} = 10"

# Xuống dòng \n
print(f"Line 1\nLine 2")

# Tab \t
print(f"Name:\tAlice")
```

## 3. Phương thức format()

### 3.1 - Cú pháp cơ bản

```python
name = "Bob"
age = 20

message = "My name is {} and I am {} years old".format(name, age)
print(message)
# "My name is Bob and I am 20 years old"
```

### 3.2 - Đánh số vị trí

```python
message = "I like {0} and {1}, but {0} is my favorite".format("Python", "Java")
print(message)
# "I like Python and Java, but Python is my favorite"
```

### 3.3 - Đặt tên tham số

```python
message = "My name is {name} and I am {age} years old".format(
    name="Charlie",
    age=25
)
print(message)
```

### 3.4 - Format số với format()

```python
pi = 3.14159

# Số thập phân
print("{:.2f}".format(pi))  # "3.14"

# Căn chỉnh
print("{:>10}".format("Hello"))  # "     Hello"
print("{:<10}".format("Hello"))  # "Hello     "
print("{:^10}".format("Hello"))  # "  Hello   "
```

## 4. % Operator (Cách cũ)

### 4.1 - Cú pháp cơ bản

```python
name = "David"
age = 30

message = "My name is %s and I am %d years old" % (name, age)
print(message)
```

### 4.2 - Các ký hiệu format

| Ký hiệu | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `%s` | String | `"%s" % "hello"` |
| `%d` | Integer | `"%d" % 42` |
| `%f` | Float | `"%f" % 3.14` |
| `%.2f` | Float (2 số thập phân) | `"%.2f" % 3.14159` |
| `%x` | Hex (lowercase) | `"%x" % 255` → `"ff"` |
| `%X` | Hex (uppercase) | `"%X" % 255` → `"FF"` |

### 4.3 - Ví dụ

```python
# String
print("Hello %s!" % "World")  # "Hello World!"

# Integer
print("I have %d apples" % 5)  # "I have 5 apples"

# Float
print("Pi = %.2f" % 3.14159)  # "Pi = 3.14"

# Nhiều giá trị
print("Name: %s, Age: %d" % ("Eve", 35))
```

## 5. So sánh các cách format

```python
name = "Alice"
age = 25
score = 95.678

# 1. f-string (KHUYẾN KHÍCH)
print(f"Name: {name}, Age: {age}, Score: {score:.2f}")

# 2. format()
print("Name: {}, Age: {}, Score: {:.2f}".format(name, age, score))

# 3. % operator (cách cũ)
print("Name: %s, Age: %d, Score: %.2f" % (name, age, score))
```

**Kết quả giống nhau:**
```
Name: Alice, Age: 25, Score: 95.68
```

## 6. Format số nâng cao

### 6.1 - Số với dấu

```python
positive = 42
negative = -42

# Luôn hiển thị dấu
print(f"{positive:+d}")  # "+42"
print(f"{negative:+d}")  # "-42"

# Dấu cho số âm, khoảng trắng cho số dương
print(f"{positive: d}")  # " 42"
print(f"{negative: d}")  # "-42"
```

### 6.2 - Hệ số khác (Binary, Octal, Hex)

```python
number = 42

# Binary
print(f"{number:b}")   # "101010"
print(f"{number:#b}")  # "0b101010" (với prefix)

# Octal
print(f"{number:o}")   # "52"
print(f"{number:#o}")  # "0o52"

# Hexadecimal
print(f"{number:x}")   # "2a" (lowercase)
print(f"{number:X}")   # "2A" (uppercase)
print(f"{number:#X}")  # "0X2A" (với prefix)
```

### 6.3 - Số với dấu phẩy phân cách

```python
big_number = 1234567890

print(f"{big_number:,}")  # "1,234,567,890"

# Kết hợp với số thập phân
price = 1234567.89
print(f"{price:,.2f}")  # "1,234,567.89"
```

### 6.4 - Đơn vị tiền tệ

```python
price = 1234.56

# Việt Nam Đồng
print(f"{price:,.0f} VNĐ")  # "1,235 VNĐ"

# US Dollar
print(f"${price:,.2f}")  # "$1,234.56"
```

## 7. Format ngày tháng

```python
from datetime import datetime

now = datetime.now()

# Các format phổ biến
print(f"{now:%Y-%m-%d}")  # "2025-12-04"
print(f"{now:%d/%m/%Y}")  # "04/12/2025"
print(f"{now:%H:%M:%S}")  # "14:30:45"

# Đầy đủ
print(f"{now:%Y-%m-%d %H:%M:%S}")  # "2025-12-04 14:30:45"

# Tên tháng và ngày
print(f"{now:%B %d, %Y}")  # "December 04, 2025"
print(f"{now:%A, %B %d, %Y}")  # "Thursday, December 04, 2025"
```

## 8. Ví dụ thực tế

### Ví dụ 1: In bảng điểm

```python
students = [
    {"name": "Alice", "math": 9.5, "english": 8.0},
    {"name": "Bob", "math": 7.5, "english": 9.0},
    {"name": "Charlie", "math": 8.5, "english": 7.5}
]

# Header
print(f"{'Name':<10} {'Math':>6} {'English':>8}")
print("-" * 26)

# Data
for student in students:
    print(f"{student['name']:<10} {student['math']:>6.1f} {student['english']:>8.1f}")
```

**Kết quả:**
```
Name         Math  English
--------------------------
Alice         9.5      8.0
Bob           7.5      9.0
Charlie       8.5      7.5
```

### Ví dụ 2: Progress bar

```python
def show_progress(current, total):
    percent = current / total
    bar_length = 30
    filled = int(bar_length * percent)
    bar = "=" * filled + "-" * (bar_length - filled)
    print(f"[{bar}] {percent:.1%} ({current}/{total})")

show_progress(25, 100)   # "[=======-----------------------] 25.0% (25/100)"
show_progress(50, 100)   # "[===============---------------] 50.0% (50/100)"
show_progress(75, 100)   # "[======================--------] 75.0% (75/100)"
show_progress(100, 100)  # "[==============================] 100.0% (100/100)"
```

### Ví dụ 3: Format hóa đơn

```python
items = [
    {"name": "Apple", "price": 15000, "qty": 5},
    {"name": "Banana", "price": 10000, "qty": 3},
    {"name": "Orange", "price": 20000, "qty": 2}
]

print("=" * 50)
print(f"{'Item':<20} {'Price':>10} {'Qty':>5} {'Total':>12}")
print("=" * 50)

total = 0
for item in items:
    subtotal = item['price'] * item['qty']
    total += subtotal
    print(f"{item['name']:<20} {item['price']:>10,} {item['qty']:>5} {subtotal:>12,}")

print("=" * 50)
print(f"{'TOTAL':>45} {total:>12,}")
```

### Ví dụ 4: Log message

```python
from datetime import datetime

def log(level, message):
    now = datetime.now()
    print(f"[{now:%Y-%m-%d %H:%M:%S}] {level:>7} | {message}")

log("INFO", "Server started")
log("WARNING", "High memory usage")
log("ERROR", "Connection failed")
```

**Kết quả:**
```
[2025-12-04 14:30:45]    INFO | Server started
[2025-12-04 14:30:46] WARNING | High memory usage
[2025-12-04 14:30:47]   ERROR | Connection failed
```

### Ví dụ 5: Format số điện thoại

```python
def format_phone(phone):
    # Loại bỏ tất cả ký tự không phải số
    digits = "".join(c for c in phone if c.isdigit())

    # Format: 0xxx-xxx-xxx
    if len(digits) == 10:
        return f"{digits[:4]}-{digits[4:7]}-{digits[7:]}"
    return phone

print(format_phone("0901234567"))     # "0901-234-567"
print(format_phone("090 123 4567"))   # "0901-234-567"
```

## 9. Template Strings

Cho những trường hợp đơn giản, có thể dùng Template:

```python
from string import Template

# Tạo template
t = Template("Hello $name, you are $age years old")

# Thay thế giá trị
result = t.substitute(name="Frank", age=40)
print(result)  # "Hello Frank, you are 40 years old"
```

## 10. Best Practices

1. **Ưu tiên dùng f-strings** - Dễ đọc, nhanh nhất
2. **Dùng format() cho template phức tạp** - Khi cần tái sử dụng
3. **Tránh % operator** - Cách cũ, khó đọc
4. **Đặt tên rõ ràng** - Giúp code dễ hiểu hơn

```python
# TỐT - Dễ đọc
print(f"{student_name} scored {score:.1f} points")

# TỐT - Tái sử dụng template
template = "Name: {name}, Score: {score:.1f}"
for student in students:
    print(template.format(**student))

# TRÁNH - Khó đọc
print("Name: %s, Score: %.1f" % (student_name, score))
```

## Bài giảng trên YouTube

Cập nhật sau
