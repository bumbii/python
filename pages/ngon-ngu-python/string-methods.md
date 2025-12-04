---
icon: text
---

# Các phương thức của String

## 1. Giới thiệu

String (chuỗi ký tự) là một trong những kiểu dữ liệu quan trọng nhất trong Python. Python cung cấp rất nhiều phương thức hữu ích để làm việc với string.

**Lưu ý:** String trong Python là **immutable** (không thể thay đổi). Tất cả các phương thức đều trả về string mới, không thay đổi string gốc.

## 2. Phương thức thay đổi chữ hoa/thường

### 2.1 - upper() - Chuyển thành CHỮ HOA

```python
text = "Hello World"
result = text.upper()
print(result)  # "HELLO WORLD"
print(text)    # "Hello World" - không thay đổi
```

### 2.2 - lower() - Chuyển thành chữ thường

```python
text = "Hello World"
result = text.lower()
print(result)  # "hello world"
```

### 2.3 - capitalize() - Viết hoa chữ cái đầu

```python
text = "hello world"
result = text.capitalize()
print(result)  # "Hello world"
```

### 2.4 - title() - Viết hoa đầu mỗi từ

```python
text = "hello world python"
result = text.title()
print(result)  # "Hello World Python"
```

### 2.5 - swapcase() - Đổi hoa <-> thường

```python
text = "Hello World"
result = text.swapcase()
print(result)  # "hELLO wORLD"
```

## 3. Phương thức kiểm tra (trả về True/False)

### 3.1 - startswith() - Bắt đầu bằng...

```python
text = "Python Programming"
print(text.startswith("Python"))  # True
print(text.startswith("Java"))    # False
```

### 3.2 - endswith() - Kết thúc bằng...

```python
filename = "document.pdf"
print(filename.endswith(".pdf"))  # True
print(filename.endswith(".doc"))  # False
```

### 3.3 - isdigit() - Tất cả là chữ số

```python
print("12345".isdigit())   # True
print("123a5".isdigit())   # False
print("".isdigit())        # False
```

### 3.4 - isalpha() - Tất cả là chữ cái

```python
print("Hello".isalpha())   # True
print("Hello123".isalpha()) # False
print("Hello ".isalpha())  # False (có khoảng trắng)
```

### 3.5 - isalnum() - Chữ cái hoặc chữ số

```python
print("Hello123".isalnum())  # True
print("Hello 123".isalnum()) # False (có khoảng trắng)
```

### 3.6 - isspace() - Tất cả là khoảng trắng

```python
print("   ".isspace())  # True
print("  a ".isspace()) # False
```

### 3.7 - isupper() và islower()

```python
print("HELLO".isupper())  # True
print("hello".islower())  # True
print("Hello".isupper())  # False
```

## 4. Phương thức tìm kiếm

### 4.1 - find() - Tìm vị trí đầu tiên

```python
text = "Hello World"
position = text.find("World")
print(position)  # 6

# Không tìm thấy -> trả về -1
position = text.find("Python")
print(position)  # -1
```

### 4.2 - rfind() - Tìm vị trí cuối cùng

```python
text = "hello hello hello"
print(text.find("hello"))   # 0 (đầu tiên)
print(text.rfind("hello"))  # 12 (cuối cùng)
```

### 4.3 - index() - Giống find() nhưng báo lỗi

```python
text = "Hello World"
position = text.index("World")
print(position)  # 6

# Không tìm thấy -> LỖI!
# position = text.index("Python")  # ValueError
```

### 4.4 - count() - Đếm số lần xuất hiện

```python
text = "hello hello world"
count = text.count("hello")
print(count)  # 2
```

## 5. Phương thức thay thế

### 5.1 - replace() - Thay thế chuỗi

```python
text = "Hello World"
result = text.replace("World", "Python")
print(result)  # "Hello Python"

# Thay thế nhiều lần
text = "apple apple apple"
result = text.replace("apple", "orange")
print(result)  # "orange orange orange"

# Giới hạn số lần thay thế
result = text.replace("apple", "orange", 2)
print(result)  # "orange orange apple"
```

## 6. Phương thức tách và nối

### 6.1 - split() - Tách chuỗi thành list

```python
# Tách theo khoảng trắng (mặc định)
text = "Hello World Python"
words = text.split()
print(words)  # ["Hello", "World", "Python"]

# Tách theo ký tự cụ thể
text = "apple,banana,orange"
fruits = text.split(",")
print(fruits)  # ["apple", "banana", "orange"]

# Giới hạn số lần tách
text = "a-b-c-d-e"
parts = text.split("-", 2)
print(parts)  # ["a", "b", "c-d-e"]
```

### 6.2 - join() - Nối list thành chuỗi

```python
words = ["Hello", "World", "Python"]
result = " ".join(words)
print(result)  # "Hello World Python"

# Nối bằng dấu phẩy
fruits = ["apple", "banana", "orange"]
result = ", ".join(fruits)
print(result)  # "apple, banana, orange"

# Nối không có gì giữa các từ
letters = ["H", "e", "l", "l", "o"]
result = "".join(letters)
print(result)  # "Hello"
```

### 6.3 - splitlines() - Tách theo dòng

```python
text = "Line 1\nLine 2\nLine 3"
lines = text.splitlines()
print(lines)  # ["Line 1", "Line 2", "Line 3"]
```

## 7. Phương thức loại bỏ khoảng trắng

### 7.1 - strip() - Xoá khoảng trắng hai đầu

```python
text = "   Hello World   "
result = text.strip()
print(result)  # "Hello World"
print(f"'{result}'")  # 'Hello World'
```

### 7.2 - lstrip() - Xoá bên trái

```python
text = "   Hello World   "
result = text.lstrip()
print(f"'{result}'")  # 'Hello World   '
```

### 7.3 - rstrip() - Xoá bên phải

```python
text = "   Hello World   "
result = text.rstrip()
print(f"'{result}'")  # '   Hello World'
```

### 7.4 - Xoá ký tự cụ thể

```python
text = "***Hello World***"
result = text.strip("*")
print(result)  # "Hello World"

url = "https://example.com/"
clean_url = url.rstrip("/")
print(clean_url)  # "https://example.com"
```

## 8. Phương thức căn chỉnh

### 8.1 - center() - Căn giữa

```python
text = "Hello"
result = text.center(20)
print(f"'{result}'")  # '       Hello        '

# Với ký tự tùy chỉnh
result = text.center(20, "*")
print(result)  # "*******Hello********"
```

### 8.2 - ljust() - Căn trái

```python
text = "Hello"
result = text.ljust(20, "-")
print(result)  # "Hello---------------"
```

### 8.3 - rjust() - Căn phải

```python
text = "Hello"
result = text.rjust(20, "-")
print(result)  # "---------------Hello"
```

### 8.4 - zfill() - Thêm số 0 vào đầu

```python
number = "42"
result = number.zfill(5)
print(result)  # "00042"

# Hữu ích cho format số
numbers = ["1", "10", "100"]
for num in numbers:
    print(num.zfill(5))
# 00001
# 00010
# 00100
```

## 9. Phương thức encode/decode

### 9.1 - encode() - Chuyển string thành bytes

```python
text = "Hello"
encoded = text.encode("utf-8")
print(encoded)  # b'Hello'
print(type(encoded))  # <class 'bytes'>
```

### 9.2 - decode() - Chuyển bytes thành string

```python
encoded = b'Hello'
text = encoded.decode("utf-8")
print(text)  # "Hello"
print(type(text))  # <class 'str'>
```

## 10. Các phương thức khác

### 10.1 - len() - Độ dài chuỗi

```python
text = "Hello World"
length = len(text)
print(length)  # 11
```

### 10.2 - Truy cập ký tự theo index

```python
text = "Hello"
print(text[0])   # "H"
print(text[-1])  # "o"
print(text[1:4]) # "ell"
```

### 10.3 - in - Kiểm tra chuỗi con

```python
text = "Hello World"
print("World" in text)  # True
print("Python" in text) # False
```

### 10.4 - ord() và chr() - Chuyển đổi ký tự <-> mã ASCII

```python
# Ký tự -> Mã ASCII
print(ord("A"))  # 65
print(ord("a"))  # 97

# Mã ASCII -> Ký tự
print(chr(65))  # "A"
print(chr(97))  # "a"
```

## 11. Bảng tổng hợp các phương thức

### Thay đổi chữ hoa/thường

| Phương thức | Chức năng | Ví dụ |
| --- | --- | --- |
| `upper()` | Chữ HOA | `"hello".upper()` → `"HELLO"` |
| `lower()` | chữ thường | `"HELLO".lower()` → `"hello"` |
| `capitalize()` | Viết hoa đầu | `"hello".capitalize()` → `"Hello"` |
| `title()` | Viết hoa mỗi từ | `"hello world".title()` → `"Hello World"` |
| `swapcase()` | Đổi hoa/thường | `"Hello".swapcase()` → `"hELLO"` |

### Kiểm tra

| Phương thức | Chức năng |
| --- | --- |
| `startswith(x)` | Bắt đầu bằng x |
| `endswith(x)` | Kết thúc bằng x |
| `isdigit()` | Tất cả là chữ số |
| `isalpha()` | Tất cả là chữ cái |
| `isalnum()` | Chữ cái hoặc số |
| `isspace()` | Tất cả là khoảng trắng |
| `isupper()` | Tất cả là chữ HOA |
| `islower()` | Tất cả là chữ thường |

### Tìm kiếm và thay thế

| Phương thức | Chức năng |
| --- | --- |
| `find(x)` | Tìm vị trí đầu tiên của x |
| `rfind(x)` | Tìm vị trí cuối cùng của x |
| `index(x)` | Như find() nhưng báo lỗi |
| `count(x)` | Đếm số lần xuất hiện |
| `replace(old, new)` | Thay thế old bằng new |

### Tách và nối

| Phương thức | Chức năng |
| --- | --- |
| `split()` | Tách thành list |
| `join()` | Nối list thành string |
| `splitlines()` | Tách theo dòng |

### Loại bỏ khoảng trắng

| Phương thức | Chức năng |
| --- | --- |
| `strip()` | Xoá hai đầu |
| `lstrip()` | Xoá bên trái |
| `rstrip()` | Xoá bên phải |

### Căn chỉnh

| Phương thức | Chức năng |
| --- | --- |
| `center(n)` | Căn giữa |
| `ljust(n)` | Căn trái |
| `rjust(n)` | Căn phải |
| `zfill(n)` | Thêm số 0 đầu |

## 12. Ví dụ thực tế

### Ví dụ 1: Validate email

```python
def is_valid_email(email):
    email = email.strip().lower()
    if "@" not in email:
        return False
    if not email.endswith((".com", ".vn", ".net")):
        return False
    return True

print(is_valid_email("user@example.com"))  # True
print(is_valid_email("invalid-email"))     # False
```

### Ví dụ 2: Format tên

```python
def format_name(name):
    # Loại bỏ khoảng trắng thừa và viết hoa đúng
    name = name.strip().title()
    # Loại bỏ khoảng trắng giữa các từ
    words = name.split()
    return " ".join(words)

print(format_name("  tuệ   nghi  "))  # "Tuệ Nghi"
```

### Ví dụ 3: Parse CSV

```python
csv_line = "Alice,25,Hanoi"
data = csv_line.split(",")
name, age, city = data
print(f"Name: {name}, Age: {age}, City: {city}")
```

### Ví dụ 4: Validate số điện thoại

```python
def is_valid_phone(phone):
    # Loại bỏ khoảng trắng và dấu -
    phone = phone.replace(" ", "").replace("-", "")
    # Kiểm tra tất cả là số và độ dài 10
    return phone.isdigit() and len(phone) == 10

print(is_valid_phone("0901-234-567"))  # True
print(is_valid_phone("090-123-45"))    # False
```

### Ví dụ 5: Tạo slug cho URL

```python
def create_slug(title):
    # Chuyển thành chữ thường
    slug = title.lower()
    # Thay khoảng trắng bằng dấu -
    slug = slug.replace(" ", "-")
    # Loại bỏ ký tự đặc biệt (đơn giản)
    allowed = "abcdefghijklmnopqrstuvwxyz0123456789-"
    slug = "".join(c for c in slug if c in allowed)
    return slug

print(create_slug("Hello World Python"))
# "hello-world-python"
```

## Bài giảng trên YouTube

Cập nhật sau
