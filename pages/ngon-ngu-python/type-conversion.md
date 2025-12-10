# Chuyển đổi kiểu dữ liệu (Type Conversion)

Trong Python, chuyển đổi kiểu dữ liệu là quá trình thay đổi một giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác. Python hỗ trợ hai loại chuyển đổi: **Chuyển đổi ngầm định** (Implicit) và **Chuyển đổi tường minh** (Explicit).

## 1. Chuyển đổi ngầm định (Implicit Type Conversion)

Python tự động chuyển đổi kiểu dữ liệu trong một số trường hợp mà không cần lập trình viên can thiệp.

### Ví dụ về chuyển đổi ngầm định

```python
# Python tự động chuyển int sang float khi cần
number_int = 10
number_float = 3.14

# Khi cộng int và float, Python chuyển int thành float
result = number_int + number_float
print(result)        # 13.14
print(type(result))  # <class 'float'>

# Python giữ độ chính xác cao hơn
x = 5
y = 2.0
print(x / y)         # 2.5 (float)
print(type(x / y))   # <class 'float'>
```

### Hạn chế của chuyển đổi ngầm định

```python
# Python KHÔNG tự động chuyển đổi giữa số và chuỗi
number = 10
text = "20"

# Lỗi: không thể cộng int và str
# result = number + text  # TypeError

# Phải chuyển đổi tường minh
result = number + int(text)
print(result)  # 30
```

## 2. Chuyển đổi tường minh (Explicit Type Conversion)

Lập trình viên chủ động chuyển đổi kiểu dữ liệu bằng các hàm có sẵn.

### Chuyển đổi sang số nguyên - int()

```python
# Từ float sang int (bỏ phần thập phân, KHÔNG làm tròn)
float_num = 3.7
int_num = int(float_num)
print(int_num)  # 3 (không phải 4)

negative_float = -3.9
print(int(negative_float))  # -3 (bỏ phần thập phân)

# Từ string sang int
str_num = "100"
int_from_str = int(str_num)
print(int_from_str)  # 100
print(type(int_from_str))  # <class 'int'>

# Từ boolean sang int
print(int(True))   # 1
print(int(False))  # 0

# Lỗi khi chuyển đổi
# int("3.14")     # ValueError: invalid literal
# int("hello")    # ValueError: invalid literal
# int("10.5")     # ValueError: invalid literal
```

### Chuyển đổi từ chuỗi có hệ số khác nhau

```python
# Chuyển từ chuỗi nhị phân sang int
binary_str = "1010"
decimal_num = int(binary_str, 2)  # Tham số 2 = hệ nhị phân
print(decimal_num)  # 10

# Chuyển từ chuỗi thập lục phân sang int
hex_str = "FF"
decimal_from_hex = int(hex_str, 16)  # Tham số 16 = hệ thập lục phân
print(decimal_from_hex)  # 255

# Chuyển từ chuỗi bát phân sang int
octal_str = "17"
decimal_from_octal = int(octal_str, 8)  # Tham số 8 = hệ bát phân
print(decimal_from_octal)  # 15

# Tự động nhận diện hệ số (base 0)
print(int("0b1010", 0))  # 10 (nhị phân)
print(int("0xFF", 0))    # 255 (thập lục phân)
print(int("0o17", 0))    # 15 (bát phân)
```

### Chuyển đổi sang số thực - float()

```python
# Từ int sang float
int_num = 10
float_num = float(int_num)
print(float_num)  # 10.0

# Từ string sang float
str_num = "3.14"
float_from_str = float(str_num)
print(float_from_str)  # 3.14

# String với ký hiệu khoa học
scientific_str = "1.5e3"
float_from_scientific = float(scientific_str)
print(float_from_scientific)  # 1500.0

# Từ boolean sang float
print(float(True))   # 1.0
print(float(False))  # 0.0

# Giá trị đặc biệt
print(float('inf'))   # inf (vô cùng)
print(float('-inf'))  # -inf (âm vô cùng)
print(float('nan'))   # nan (not a number)

# Lỗi khi chuyển đổi
# float("hello")  # ValueError: could not convert string to float
```

### Chuyển đổi sang chuỗi - str()

```python
# Từ int sang string
number = 100
str_from_int = str(number)
print(str_from_int)      # "100"
print(type(str_from_int)) # <class 'str'>

# Từ float sang string
pi = 3.14159
str_from_float = str(pi)
print(str_from_float)  # "3.14159"

# Từ boolean sang string
print(str(True))   # "True"
print(str(False))  # "False"

# Từ list, tuple, dict sang string
my_list = [1, 2, 3]
print(str(my_list))  # "[1, 2, 3]"

my_dict = {"name": "John", "age": 30}
print(str(my_dict))  # "{'name': 'John', 'age': 30}"

# None sang string
print(str(None))  # "None"
```

### Chuyển đổi sang Boolean - bool()

```python
# Từ số sang boolean
print(bool(1))      # True
print(bool(0))      # False
print(bool(-5))     # True
print(bool(3.14))   # True
print(bool(0.0))    # False

# Từ chuỗi sang boolean
print(bool("Hello"))  # True
print(bool(""))       # False (chuỗi rỗng)
print(bool(" "))      # True (có khoảng trắng)

# Từ list, tuple, dict sang boolean
print(bool([1, 2]))   # True (không rỗng)
print(bool([]))       # False (rỗng)
print(bool({}))       # False (dict rỗng)
print(bool({1, 2}))   # True (set không rỗng)

# None sang boolean
print(bool(None))  # False
```

### Chuyển đổi sang List - list()

```python
# Từ string sang list (tách từng ký tự)
text = "Hello"
char_list = list(text)
print(char_list)  # ['H', 'e', 'l', 'l', 'o']

# Từ tuple sang list
my_tuple = (1, 2, 3, 4)
my_list = list(my_tuple)
print(my_list)  # [1, 2, 3, 4]

# Từ set sang list
my_set = {3, 1, 2}
my_list = list(my_set)
print(my_list)  # [1, 2, 3] (set tự động sắp xếp)

# Từ dictionary sang list (lấy keys)
my_dict = {"a": 1, "b": 2}
keys_list = list(my_dict)
print(keys_list)  # ['a', 'b']

# Từ range sang list
range_obj = range(5)
numbers = list(range_obj)
print(numbers)  # [0, 1, 2, 3, 4]
```

### Chuyển đổi sang Tuple - tuple()

```python
# Từ list sang tuple
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)  # (1, 2, 3)

# Từ string sang tuple
text = "Python"
char_tuple = tuple(text)
print(char_tuple)  # ('P', 'y', 't', 'h', 'o', 'n')

# Từ set sang tuple
my_set = {3, 1, 2}
my_tuple = tuple(my_set)
print(my_tuple)  # (1, 2, 3)

# Từ dictionary sang tuple (lấy keys)
my_dict = {"x": 10, "y": 20}
keys_tuple = tuple(my_dict)
print(keys_tuple)  # ('x', 'y')
```

### Chuyển đổi sang Set - set()

```python
# Từ list sang set (loại bỏ phần tử trùng)
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)  # {1, 2, 3}

# Từ string sang set (loại bỏ ký tự trùng)
text = "hello"
char_set = set(text)
print(char_set)  # {'h', 'e', 'l', 'o'}

# Từ tuple sang set
my_tuple = (1, 2, 2, 3)
my_set = set(my_tuple)
print(my_set)  # {1, 2, 3}

# Từ dictionary sang set (lấy keys)
my_dict = {"a": 1, "b": 2}
keys_set = set(my_dict)
print(keys_set)  # {'a', 'b'}

# Tạo set rỗng
empty_set = set()  # KHÔNG dùng {} (đó là dict rỗng)
print(type(empty_set))  # <class 'set'>
```

### Chuyển đổi sang Dictionary - dict()

```python
# Từ list of tuples sang dictionary
pairs = [("a", 1), ("b", 2), ("c", 3)]
my_dict = dict(pairs)
print(my_dict)  # {'a': 1, 'b': 2, 'c': 3}

# Từ list of lists
pairs = [["x", 10], ["y", 20]]
my_dict = dict(pairs)
print(my_dict)  # {'x': 10, 'y': 20}

# Sử dụng zip để tạo dictionary
keys = ["name", "age", "city"]
values = ["John", 30, "NYC"]
my_dict = dict(zip(keys, values))
print(my_dict)  # {'name': 'John', 'age': 30, 'city': 'NYC'}

# Từ keyword arguments
my_dict = dict(name="Alice", age=25)
print(my_dict)  # {'name': 'Alice', 'age': 25}
```

## 3. Các hàm chuyển đổi khác

### ord() và chr() - Ký tự và mã ASCII/Unicode

```python
# ord(): Chuyển ký tự sang mã số
print(ord('A'))    # 65
print(ord('a'))    # 97
print(ord('0'))    # 48
print(ord('đ'))    # 273 (Unicode)

# chr(): Chuyển mã số sang ký tự
print(chr(65))     # 'A'
print(chr(97))     # 'a'
print(chr(273))    # 'đ'

# Ứng dụng: Mã hóa Caesar Cipher đơn giản
def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            ascii_offset = ord('A') if char.isupper() else ord('a')
            encrypted_char = chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
            result += encrypted_char
        else:
            result += char
    return result

print(caesar_encrypt("Hello", 3))  # Khoor
```

### bin(), oct(), hex() - Chuyển sang hệ số khác

```python
number = 255

# Chuyển sang nhị phân (binary)
binary = bin(number)
print(binary)  # '0b11111111'

# Chuyển sang bát phân (octal)
octal = oct(number)
print(octal)   # '0o377'

# Chuyển sang thập lục phân (hexadecimal)
hexadecimal = hex(number)
print(hexadecimal)  # '0xff'

# Loại bỏ tiền tố
print(bin(number)[2:])  # '11111111'
print(oct(number)[2:])  # '377'
print(hex(number)[2:])  # 'ff'
```

### format() - Định dạng số

```python
number = 255

# Định dạng nhị phân
print(format(number, 'b'))   # 11111111

# Định dạng bát phân
print(format(number, 'o'))   # 377

# Định dạng thập lục phân
print(format(number, 'x'))   # ff (chữ thường)
print(format(number, 'X'))   # FF (chữ hoa)

# Định dạng số thực
pi = 3.14159
print(format(pi, '.2f'))     # 3.14 (2 chữ số thập phân)
print(format(pi, '.4f'))     # 3.1416 (4 chữ số thập phân)

# Định dạng phần trăm
ratio = 0.756
print(format(ratio, '.1%'))  # 75.6%
```

## 4. Xử lý lỗi khi chuyển đổi

### Sử dụng try-except

```python
# Chuyển đổi an toàn với try-except
def safe_int_convert(value):
    try:
        return int(value)
    except ValueError:
        print(f"Không thể chuyển '{value}' sang int")
        return None

print(safe_int_convert("123"))    # 123
print(safe_int_convert("hello"))  # Không thể chuyển 'hello' sang int, None
print(safe_int_convert("3.14"))   # Không thể chuyển '3.14' sang int, None

# Chuyển đổi với giá trị mặc định
def int_with_default(value, default=0):
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

print(int_with_default("100"))     # 100
print(int_with_default("abc"))     # 0
print(int_with_default(None))      # 0
print(int_with_default("xyz", -1)) # -1
```

### Kiểm tra trước khi chuyển đổi

```python
# Kiểm tra chuỗi có phải số không
def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False

print(is_number("123"))    # True
print(is_number("3.14"))   # True
print(is_number("hello"))  # False

# Sử dụng phương thức của string
text = "12345"
if text.isdigit():
    number = int(text)
    print(number)  # 12345

# Kiểm tra chuỗi có thể chuyển thành float
def can_convert_to_float(s):
    if s.replace('.', '', 1).replace('-', '', 1).isdigit():
        return True
    return False

print(can_convert_to_float("3.14"))   # True
print(can_convert_to_float("-5.2"))   # True
print(can_convert_to_float("abc"))    # False
```

## 5. Ứng dụng thực tế

### Chuyển đổi input từ người dùng

```python
# Input luôn trả về string, cần chuyển đổi
age_str = input("Nhập tuổi của bạn: ")
age = int(age_str)

# An toàn hơn với xử lý lỗi
while True:
    try:
        age = int(input("Nhập tuổi của bạn: "))
        if age > 0:
            break
        else:
            print("Tuổi phải là số dương!")
    except ValueError:
        print("Vui lòng nhập một số hợp lệ!")

print(f"Bạn {age} tuổi")
```

### Tính tổng từ chuỗi số

```python
# Chuỗi chứa các số cách nhau bởi dấu phẩy
numbers_str = "10,20,30,40,50"

# Tách chuỗi và chuyển thành số
numbers = [int(x) for x in numbers_str.split(",")]
total = sum(numbers)
print(f"Tổng: {total}")  # Tổng: 150

# Hoặc dùng map
numbers_str = "5.5, 10.2, 3.8, 7.1"
numbers = list(map(float, numbers_str.split(", ")))
print(numbers)  # [5.5, 10.2, 3.8, 7.1]
print(sum(numbers))  # 26.6
```

### Chuyển đổi dữ liệu từ file

```python
# Giả sử đọc điểm số từ file (dạng chuỗi)
scores_str = ["85", "92", "78", "95", "88"]

# Chuyển sang số để tính toán
scores = [int(score) for score in scores_str]
average = sum(scores) / len(scores)
print(f"Điểm trung bình: {average:.2f}")  # Điểm trung bình: 87.60
```

## 6. Bảng tóm tắt các hàm chuyển đổi

| Hàm | Mô tả | Ví dụ |
|-----|-------|-------|
| `int()` | Chuyển sang số nguyên | `int("10")` → `10` |
| `float()` | Chuyển sang số thực | `float("3.14")` → `3.14` |
| `str()` | Chuyển sang chuỗi | `str(100)` → `"100"` |
| `bool()` | Chuyển sang boolean | `bool(1)` → `True` |
| `list()` | Chuyển sang list | `list("abc")` → `['a','b','c']` |
| `tuple()` | Chuyển sang tuple | `tuple([1,2])` → `(1, 2)` |
| `set()` | Chuyển sang set | `set([1,1,2])` → `{1, 2}` |
| `dict()` | Chuyển sang dictionary | `dict([('a',1)])` → `{'a': 1}` |
| `ord()` | Ký tự → mã số | `ord('A')` → `65` |
| `chr()` | Mã số → ký tự | `chr(65)` → `'A'` |
| `bin()` | Số → chuỗi nhị phân | `bin(10)` → `'0b1010'` |
| `oct()` | Số → chuỗi bát phân | `oct(10)` → `'0o12'` |
| `hex()` | Số → chuỗi thập lục phân | `hex(255)` → `'0xff'` |

## Tổng kết

- **Chuyển đổi ngầm định**: Python tự động chuyển đổi (ví dụ: int + float → float)
- **Chuyển đổi tường minh**: Lập trình viên chủ động dùng hàm chuyển đổi
- Các hàm chuyển đổi phổ biến: `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `set()`, `dict()`
- Luôn xử lý lỗi khi chuyển đổi dữ liệu từ nguồn không đáng tin cậy (input, file, ...)
- Chuyển đổi kiểu dữ liệu rất quan trọng khi làm việc với input/output và xử lý dữ liệu
