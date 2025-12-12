# String interning - 'a' is 'a' nhưng...

## Hiện tượng lạ

```python
# Case 1: String đơn giản
a = "hello"
b = "hello"
print(a is b)  # True

# Case 2: String có khoảng trắng
x = "hello world"
y = "hello world"
print(x is y)  # True (trong Python interactive) hoặc False (tùy trường hợp)

# Case 3: String được tạo runtime
s1 = "hello"
s2 = "hel" + "lo"
print(s1 is s2)  # True

s3 = "hel"
s4 = s3 + "lo"
print(s1 is s4)  # False  <- What the Python?!
```

**Tại sao cùng nội dung "hello" nhưng khi so sánh `is` có khi True có khi False?!** 🤔

## Giải thích

### String Interning là gì?

**String interning** là kỹ thuật tối ưu bộ nhớ: Python lưu trữ mỗi string unique chỉ **một lần**, và tất cả references đều trỏ đến cùng object đó.

```python
# Thay vì:
# "hello" tại địa chỉ 0x1000
# "hello" tại địa chỉ 0x2000  (2 copies)

# Python làm:
# "hello" tại địa chỉ 0x1000
# Tất cả biến đều trỏ đến 0x1000  (1 copy duy nhất)
```

### Tại sao cần String Interning?

1. **Tiết kiệm bộ nhớ**: Không lưu trùng lặp strings
2. **So sánh nhanh hơn**: `is` (so sánh địa chỉ) nhanh hơn `==` (so sánh nội dung)
3. **Dictionary lookup nhanh hơn**: Dict keys là strings

## Khi nào strings được interned?

### ✅ Luôn được interned

#### 1. String literals (compile-time)

```python
# Strings được định nghĩa trực tiếp trong code
a = "hello"
b = "hello"
print(a is b)  # True
print(id(a) == id(b))  # True
```

#### 2. Strings giống identifiers

Strings chỉ chứa:
- Chữ cái (a-z, A-Z)
- Số (0-9)
- Underscore (_)

```python
# Giống tên biến/function → Được interned
s1 = "variable_name"
s2 = "variable_name"
print(s1 is s2)  # True

s1 = "hello123"
s2 = "hello123"
print(s1 is s2)  # True
```

#### 3. Empty string và single characters

```python
# Empty string
a = ""
b = ""
print(a is b)  # True

# Single character
c = "a"
d = "a"
print(c is d)  # True
```

### ❌ Không chắc chắn được interned

#### 1. Strings có khoảng trắng

```python
# Không luôn được interned
x = "hello world"
y = "hello world"
print(x is y)  # Có thể True hoặc False tùy context
```

#### 2. Strings có ký tự đặc biệt

```python
# Có ký tự đặc biệt
s1 = "hello!"
s2 = "hello!"
print(s1 is s2)  # Có thể True hoặc False

s1 = "hello@world"
s2 = "hello@world"
print(s1 is s2)  # Có thể True hoặc False
```

#### 3. Strings được tạo runtime

```python
# Compile-time concatenation - Được interned
s1 = "hello"
s2 = "hel" + "lo"  # Python optimizer tính lúc compile
print(s1 is s2)  # True

# Runtime concatenation - Không được interned
s3 = "hel"
s4 = s3 + "lo"  # Tính lúc runtime
print(s1 is s4)  # False
```

#### 4. Strings dài

```python
# String quá dài thường không được interned
long1 = "a" * 1000
long2 = "a" * 1000
print(long1 is long2)  # Thường là False
```

## Compile-time vs Runtime

### Compile-time optimization

```python
# Python optimizer "gộp" lúc compile
a = "hel" + "lo"  # Thành "hello" lúc compile
b = "hello"
print(a is b)  # True

# Với số
c = 2 + 3  # Thành 5 lúc compile
```

### Runtime concatenation

```python
# Tính lúc chạy → Tạo string mới
x = "hel"
y = x + "lo"  # Tạo string mới lúc runtime
z = "hello"
print(y is z)  # False - y là object mới
print(y == z)  # True - Nội dung giống nhau
```

## Ví dụ thực tế

### Case 1: Input từ user

```python
# User input luôn là string mới
name1 = input("Enter name: ")  # User nhập "Alice"
name2 = "Alice"  # String literal

print(name1 == name2)  # True - Nội dung giống
print(name1 is name2)  # False - Khác object!
```

### Case 2: Reading từ file

```python
# Đọc từ file tạo string mới
with open("data.txt") as f:
    line = f.readline().strip()  # "hello"

literal = "hello"

print(line == literal)  # True
print(line is literal)  # False (thường)
```

### Case 3: String operations

```python
# String operations tạo objects mới
original = "HELLO"
lower1 = original.lower()  # "hello"
lower2 = original.lower()  # "hello"

print(lower1 == lower2)  # True - Giống nội dung
print(lower1 is lower2)  # False - Khác objects
```

## Force interning với sys.intern()

Bạn có thể **force** Python intern một string:

```python
import sys

# Không được interned
a = "hello world!"
b = "hello world!"
print(a is b)  # False

# Force interning
a = sys.intern("hello world!")
b = sys.intern("hello world!")
print(a is b)  # True
```

### Khi nào nên dùng sys.intern()?

#### ✅ Nên dùng khi:

1. **Có rất nhiều strings trùng lặp**
   ```python
   # Processing log files với nhiều repeated strings
   log_levels = [sys.intern(level) for level in log_data]
   ```

2. **Dictionary lookups nhiều**
   ```python
   # Dictionary với nhiều lookups
   cache = {}
   key = sys.intern("user_data")  # Faster lookups
   ```

3. **Memory-constrained applications**
   ```python
   # Tiết kiệm RAM khi có nhiều string giống nhau
   ```

#### ❌ Không nên dùng khi:

1. Strings không lặp lại nhiều
2. Strings short-lived (tồn tại ngắn)
3. Performance không quan trọng

## `is` vs `==` với Strings

### Khi nào dùng `is`?

```python
# ✅ So sánh với None, True, False
if value is None:
    pass

# ✅ Kiểm tra cùng object (hiếm khi cần với strings)
if a is b:
    print("Same object")
```

### Khi nào dùng `==`?

```python
# ✅ So sánh nội dung strings (hầu hết trường hợp)
if username == "admin":
    pass

if password == stored_password:
    pass

# ✅ So sánh strings từ input/file/runtime
if user_input == "yes":
    pass
```

## Các lỗi phổ biến

### Bug 1: Dùng `is` thay vì `==`

```python
# SAI - Dùng is để so sánh
def check_status(status):
    if status is "active":  # ❌ Bug!
        return True

# Có thể work với literals
print(check_status("active"))  # True (may be)

# Nhưng fail với runtime strings
user_status = input("Status: ")  # User nhập "active"
print(check_status(user_status))  # False - Bug!

# ĐÚNG - Dùng ==
def check_status(status):
    if status == "active":  # ✅
        return True
```

### Bug 2: Rely on interning behavior

```python
# SAI - Assume strings được interned
def optimize_lookup(key):
    # Giả sử key được interned
    if key is "user_id":  # ❌ Không reliable!
        return fast_path()

# ĐÚNG - Luôn dùng ==
def optimize_lookup(key):
    if key == "user_id":  # ✅
        return fast_path()
```

### Bug 3: Performance premature optimization

```python
# SAI - Intern mọi string without reason
class UserManager:
    def __init__(self):
        # Không cần thiết
        self.username = sys.intern(username)  # ❌ Overkill

# ĐÚNG - Chỉ intern khi cần
class UserManager:
    def __init__(self):
        self.username = username  # ✅ Simple
```

## Testing string interning

### Kiểm tra có được interned không

```python
def check_interned(s1, s2):
    print(f"Values equal: {s1 == s2}")
    print(f"Same object (interned): {s1 is s2}")
    print(f"ID of s1: {id(s1)}")
    print(f"ID of s2: {id(s2)}")

# Test
check_interned("hello", "hello")
check_interned("hello world", "hello world")
```

## Tóm tắt

| String | Interned? | Lý do |
|--------|-----------|-------|
| `"hello"` | ✅ Luôn | String literal |
| `"hello123"` | ✅ Luôn | Giống identifier |
| `""` | ✅ Luôn | Empty string |
| `"a"` | ✅ Luôn | Single char |
| `"hello world"` | ⚠️ Có thể | Có space, tùy context |
| `"hello!"` | ⚠️ Có thể | Có ký tự đặc biệt |
| `"hel" + "lo"` | ✅ Có | Compile-time concat |
| `s + "lo"` | ❌ Không | Runtime concat |
| `input()` | ❌ Không | Runtime tạo |
| `sys.intern(s)` | ✅ Luôn | Force interned |

## Best Practices

### ✅ Nên làm

```python
# 1. Luôn dùng == để so sánh strings
if name == "Alice":  # ✅
    pass

# 2. Chỉ dùng is với None, True, False
if value is None:  # ✅
    pass

# 3. Dùng sys.intern() cho strings lặp lại nhiều
cache_keys = [sys.intern(key) for key in frequent_keys]  # ✅
```

### ❌ Tránh làm

```python
# 1. Dùng is để so sánh string content
if status is "active":  # ❌
    pass

# 2. Rely on interning cho logic
if key is expected_key:  # ❌ Unreliable
    pass

# 3. Intern mọi string without reason
every_string = sys.intern(s)  # ❌ Overkill
```

## Ghi nhớ

> **String interning là optimization detail, không phải feature!**
> - ✅ Luôn dùng `==` để so sánh string content
> - ❌ Đừng dùng `is` để so sánh strings
> - ⚠️ Interning behavior có thể thay đổi giữa các Python versions
> - 🔧 Chỉ dùng `sys.intern()` khi thật sự cần optimize

**Nguyên tắc vàng**: **`is` for identity, `==` for equality!**
