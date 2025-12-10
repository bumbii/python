# Boolean và Kiểu dữ liệu Boolean

Trong Python, Boolean là một kiểu dữ liệu logic chỉ có hai giá trị: **True** (đúng) hoặc **False** (sai). Boolean được sử dụng rất nhiều trong các biểu thức điều kiện, vòng lặp và logic của chương trình.

## 1. Giới thiệu về Boolean

### Định nghĩa

Boolean là kiểu dữ liệu chỉ có hai giá trị:
- `True` - đại diện cho giá trị đúng
- `False` - đại diện cho giá trị sai

**Lưu ý:** Trong Python, `True` và `False` phải viết hoa chữ cái đầu tiên.

```python
# Khai báo biến Boolean
is_student = True
is_adult = False

print(is_student)  # True
print(is_adult)     # False

# Kiểm tra kiểu dữ liệu
print(type(is_student))  # <class 'bool'>
```

### Boolean từ biểu thức so sánh

Boolean thường được tạo ra từ các phép so sánh:

```python
# So sánh bằng
print(5 == 5)   # True
print(5 == 3)   # False

# So sánh không bằng
print(5 != 3)   # True
print(5 != 5)   # False

# So sánh lớn hơn, nhỏ hơn
print(10 > 5)   # True
print(10 < 5)   # False
print(10 >= 10) # True
print(5 <= 3)   # False

# So sánh chuỗi
print("apple" == "apple")  # True
print("apple" == "Apple")  # False (phân biệt hoa thường)
```

## 2. Các toán tử Boolean (Logical Operators)

Python có ba toán tử logic chính để làm việc với Boolean:

### Toán tử AND (và)

Trả về `True` chỉ khi **tất cả** các điều kiện đều đúng.

```python
# Cả hai điều kiện đều đúng
print(True and True)    # True

# Một trong hai sai
print(True and False)   # False
print(False and True)   # False

# Cả hai đều sai
print(False and False)  # False

# Ví dụ thực tế
age = 20
is_student = True
print(age >= 18 and is_student)  # True (cả hai điều kiện đều đúng)

# Nhiều điều kiện
x = 5
print(x > 0 and x < 10 and x != 7)  # True
```

### Toán tử OR (hoặc)

Trả về `True` khi **ít nhất một** điều kiện đúng.

```python
# Ít nhất một điều kiện đúng
print(True or False)   # True
print(False or True)   # True
print(True or True)    # True

# Cả hai đều sai
print(False or False)  # False

# Ví dụ thực tế
has_ticket = False
is_vip = True
can_enter = has_ticket or is_vip
print(can_enter)  # True (chỉ cần một điều kiện đúng)
```

### Toán tử NOT (phủ định)

Đảo ngược giá trị Boolean.

```python
# Đảo ngược giá trị
print(not True)   # False
print(not False)  # True

# Ví dụ thực tế
is_raining = False
print(not is_raining)  # True (không mưa)

# Kết hợp với các toán tử khác
x = 5
print(not (x > 10))  # True (x không lớn hơn 10)
```

### Thứ tự ưu tiên của toán tử

Thứ tự ưu tiên từ cao đến thấp: `not` > `and` > `or`

```python
# Ví dụ về thứ tự ưu tiên
result = True or False and False
print(result)  # True
# Giải thích: False and False được tính trước = False
# Sau đó: True or False = True

# Sử dụng dấu ngoặc để làm rõ
result = (True or False) and False
print(result)  # False
```

## 3. Truthy và Falsy Values

Trong Python, không chỉ `True` và `False` mới có giá trị Boolean. Nhiều giá trị khác cũng được coi là "truthy" (tương đương True) hoặc "falsy" (tương đương False).

### Các giá trị Falsy (được coi là False)

```python
# Các giá trị sau được coi là False:

# 1. False
print(bool(False))  # False

# 2. None
print(bool(None))   # False

# 3. Số 0 (bất kỳ kiểu số nào)
print(bool(0))      # False
print(bool(0.0))    # False
print(bool(0j))     # False

# 4. Chuỗi rỗng
print(bool(""))     # False

# 5. Danh sách rỗng
print(bool([]))     # False

# 6. Tuple rỗng
print(bool(()))     # False

# 7. Dictionary rỗng
print(bool({}))     # False

# 8. Set rỗng
print(bool(set()))  # False
```

### Các giá trị Truthy (được coi là True)

```python
# Tất cả các giá trị khác đều được coi là True:

# Số khác 0
print(bool(1))      # True
print(bool(-5))     # True
print(bool(3.14))   # True

# Chuỗi không rỗng
print(bool("Hello")) # True
print(bool(" "))     # True (khoảng trắng vẫn là ký tự)

# List, tuple, dict, set không rỗng
print(bool([1, 2]))     # True
print(bool((1,)))       # True
print(bool({"a": 1}))   # True
print(bool({1, 2}))     # True
```

### Ứng dụng của Truthy/Falsy

```python
# Kiểm tra danh sách có rỗng không
my_list = []
if not my_list:
    print("Danh sách rỗng")  # In ra dòng này

# Kiểm tra chuỗi có giá trị không
name = input("Nhập tên: ")
if name:
    print(f"Xin chào, {name}!")
else:
    print("Bạn chưa nhập tên")

# Giá trị mặc định
user_input = ""
value = user_input or "Giá trị mặc định"
print(value)  # Giá trị mặc định
```

## 4. Hàm bool()

Hàm `bool()` chuyển đổi một giá trị thành Boolean.

```python
# Chuyển đổi số
print(bool(10))    # True
print(bool(0))     # False
print(bool(-5))    # True

# Chuyển đổi chuỗi
print(bool("Python"))  # True
print(bool(""))        # False

# Chuyển đổi list
print(bool([1, 2, 3])) # True
print(bool([]))        # False

# So sánh trực tiếp
number = 5
is_positive = bool(number > 0)
print(is_positive)  # True
```

## 5. Boolean trong câu lệnh điều kiện

Boolean được sử dụng chủ yếu trong các câu lệnh điều kiện:

```python
# If statement
age = 18
if age >= 18:
    print("Bạn đã trưởng thành")
else:
    print("Bạn chưa trưởng thành")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Kết hợp nhiều điều kiện
score = 85
attendance = 90

if score >= 80 and attendance >= 80:
    print("Đạt yêu cầu")
else:
    print("Không đạt yêu cầu")
```

## 6. Các hàm trả về Boolean

Nhiều hàm và phương thức trong Python trả về giá trị Boolean:

### Kiểm tra chuỗi

```python
text = "Hello World"

# Kiểm tra chữ cái
print(text.isalpha())  # False (có khoảng trắng)
print("Hello".isalpha())  # True

# Kiểm tra chữ số
print("123".isdigit())  # True
print("12.3".isdigit()) # False

# Kiểm tra chữ và số
print("Hello123".isalnum())  # True

# Kiểm tra chữ thường/hoa
print("hello".islower())  # True
print("HELLO".isupper())  # True

# Kiểm tra khoảng trắng
print("   ".isspace())  # True

# Kiểm tra bắt đầu/kết thúc
print("Hello".startswith("He"))  # True
print("Hello".endswith("lo"))    # True
```

### Kiểm tra membership (in/not in)

```python
# Kiểm tra trong chuỗi
print("H" in "Hello")      # True
print("x" in "Hello")      # False
print("x" not in "Hello")  # True

# Kiểm tra trong list
numbers = [1, 2, 3, 4, 5]
print(3 in numbers)        # True
print(10 in numbers)       # False

# Kiểm tra trong dictionary (kiểm tra key)
person = {"name": "John", "age": 30}
print("name" in person)    # True
print("John" in person)    # False (kiểm tra key, không phải value)
```

### Kiểm tra identity (is/is not)

```python
# So sánh identity (cùng object trong bộ nhớ)
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (giá trị giống nhau)
print(a is b)   # False (khác object)
print(a is c)   # True (cùng object)

# Với None nên dùng 'is'
value = None
print(value is None)   # True (cách đúng)
print(value == None)   # True (nhưng không khuyến khích)

# Với số nhỏ và chuỗi ngắn (Python cache)
x = 5
y = 5
print(x is y)  # True (Python cache số nhỏ)

a = "hello"
b = "hello"
print(a is b)  # True (Python cache chuỗi ngắn)
```

## 7. Short-circuit Evaluation

Python sử dụng short-circuit evaluation với `and` và `or`:

### Short-circuit với AND

```python
# Nếu điều kiện đầu False, không kiểm tra điều kiện sau
def check_value():
    print("Hàm được gọi")
    return True

# False and ... → không gọi hàm check_value()
result = False and check_value()
print(result)  # False (không in "Hàm được gọi")

# True and ... → gọi hàm check_value()
result = True and check_value()
# In ra: "Hàm được gọi"
print(result)  # True
```

### Short-circuit với OR

```python
def check_value():
    print("Hàm được gọi")
    return False

# True or ... → không gọi hàm check_value()
result = True or check_value()
print(result)  # True (không in "Hàm được gọi")

# False or ... → gọi hàm check_value()
result = False or check_value()
# In ra: "Hàm được gọi"
print(result)  # False
```

### Ứng dụng thực tế

```python
# Tránh lỗi division by zero
x = 5
y = 0

# Cách 1: Kiểm tra trước khi chia
if y != 0 and x / y > 1:
    print("Thỏa mãn điều kiện")
else:
    print("Không thỏa mãn")  # In ra dòng này

# Cách 2: Giá trị mặc định
name = None
display_name = name or "Khách"
print(display_name)  # Khách
```

## 8. Bài tập thực hành

### Bài 1: Kiểm tra số chẵn lẻ

```python
number = int(input("Nhập một số: "))
is_even = (number % 2 == 0)

if is_even:
    print(f"{number} là số chẵn")
else:
    print(f"{number} là số lẻ")
```

### Bài 2: Kiểm tra năm nhuận

```python
year = int(input("Nhập năm: "))

# Năm nhuận: chia hết cho 4 NHƯNG không chia hết cho 100
# HOẶC chia hết cho 400
is_leap_year = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

if is_leap_year:
    print(f"{year} là năm nhuận")
else:
    print(f"{year} không phải năm nhuận")
```

### Bài 3: Kiểm tra tam giác hợp lệ

```python
a = float(input("Nhập cạnh a: "))
b = float(input("Nhập cạnh b: "))
c = float(input("Nhập cạnh c: "))

# Điều kiện: tổng hai cạnh bất kỳ phải lớn hơn cạnh còn lại
is_valid_triangle = (a + b > c) and (b + c > a) and (a + c > b)

if is_valid_triangle:
    print("Ba cạnh tạo thành tam giác hợp lệ")
else:
    print("Ba cạnh không tạo thành tam giác")
```

### Bài 4: Kiểm tra đăng nhập

```python
# Thông tin đúng
correct_username = "admin"
correct_password = "12345"

# Nhập thông tin
username = input("Tên đăng nhập: ")
password = input("Mật khẩu: ")

# Kiểm tra
is_valid_login = (username == correct_username) and (password == correct_password)

if is_valid_login:
    print("Đăng nhập thành công!")
else:
    print("Sai tên đăng nhập hoặc mật khẩu")
```

### Bài 5: Xếp loại học sinh

```python
math_score = float(input("Điểm Toán: "))
english_score = float(input("Điểm Tiếng Anh: "))
science_score = float(input("Điểm Khoa học: "))

# Tính điểm trung bình
average = (math_score + english_score + science_score) / 3

# Kiểm tra điều kiện
is_excellent = average >= 8 and math_score >= 7 and english_score >= 7 and science_score >= 7
is_good = average >= 6.5 and not is_excellent

if is_excellent:
    print(f"Xếp loại: Giỏi (ĐTB: {average:.2f})")
elif is_good:
    print(f"Xếp loại: Khá (ĐTB: {average:.2f})")
else:
    print(f"Xếp loại: Trung bình (ĐTB: {average:.2f})")
```

## Tổng kết

- Boolean có hai giá trị: `True` và `False`
- Toán tử logic: `and`, `or`, `not`
- Truthy values: các giá trị được coi là True (số khác 0, chuỗi không rỗng, list không rỗng, ...)
- Falsy values: các giá trị được coi là False (`False`, `None`, `0`, `""`, `[]`, `{}`, `()`, ...)
- Hàm `bool()` chuyển đổi giá trị thành Boolean
- So sánh: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Membership: `in`, `not in`
- Identity: `is`, `is not`
- Python sử dụng short-circuit evaluation với `and` và `or`
