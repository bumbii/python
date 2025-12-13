---
icon: puzzle-piece
---


# Modules và Imports

## 1. Giới thiệu

**Module** là file Python chứa code (functions, classes, variables) có thể tái sử dụng trong các chương trình khác.

### Tại sao cần Modules?
- ✅ Tổ chức code tốt hơn
- ✅ Tái sử dụng code
- ✅ Chia nhỏ chương trình lớn
- ✅ Tránh trùng tên (namespace)
- ✅ Dễ bảo trì và debug

## 2. Import Module

### 2.1 - Cách 1: import module_name

```python
import math

# Dùng functions từ math module
result = math.sqrt(16)
print(result)  # 4.0

pi = math.pi
print(pi)  # 3.141592653589793
```

### 2.2 - Cách 2: from module import item

```python
from math import sqrt, pi

# Dùng trực tiếp không cần math.
result = sqrt(16)
print(result)  # 4.0
print(pi)      # 3.141592653589793
```

### 2.3 - Cách 3: import với alias

```python
import math as m

result = m.sqrt(16)
print(result)  # 4.0
```

### 2.4 - Cách 4: import all (không khuyến khích!)

```python
from math import *

# Import TẤT CẢ - dễ gây conflict!
result = sqrt(16)
print(result)
```

> **⚠️ **Lưu ý:** Tránh dùng `from module import *` vì có thể gây xung đột tên!**

## 3. Built-in Modules phổ biến

### 3.1 - math - Toán học

```python
import math

print(math.sqrt(16))      # 4.0 - Căn bậc 2
print(math.pow(2, 3))     # 8.0 - Lũy thừa
print(math.floor(3.7))    # 3 - Làm tròn xuống
print(math.ceil(3.2))     # 4 - Làm tròn lên
print(math.pi)            # 3.14159... - Số PI
print(math.e)             # 2.71828... - Số e
```

### 3.2 - random - Số ngẫu nhiên

```python
import random

# Số ngẫu nhiên từ 1-10
num = random.randint(1, 10)
print(num)

# Số thực ngẫu nhiên từ 0-1
num = random.random()
print(num)

# Chọn ngẫu nhiên từ list
fruits = ["apple", "banana", "cherry"]
choice = random.choice(fruits)
print(choice)

# Xáo trộn list
random.shuffle(fruits)
print(fruits)
```

### 3.3 - datetime - Ngày tháng

```python
from datetime import datetime, date, time

# Ngày giờ hiện tại
now = datetime.now()
print(now)  # 2024-12-04 14:30:00.123456

# Chỉ lấy ngày
today = date.today()
print(today)  # 2024-12-04

# Format datetime
formatted = now.strftime("%d/%m/%Y %H:%M:%S")
print(formatted)  # 04/12/2024 14:30:00
```

### 3.4 - os - Hệ điều hành

```python
import os

# Thư mục hiện tại
current_dir = os.getcwd()
print(current_dir)

# Kiểm tra file tồn tại
exists = os.path.exists("data.txt")
print(exists)

# List files trong folder
files = os.listdir(".")
print(files)

# Tạo folder
os.mkdir("new_folder")

# Đổi tên file
os.rename("old.txt", "new.txt")
```

### 3.5 - sys - System

```python
import sys

# Phiên bản Python
print(sys.version)

# Command line arguments
print(sys.argv)

# Thoát chương trình
# sys.exit()
```

## 4. Tạo Module riêng

### 4.1 - Tạo file module

Tạo file `mymath.py`:

```python
# mymath.py

def add(a, b):
    """Cộng hai số"""
    return a + b

def subtract(a, b):
    """Trừ hai số"""
    return a - b

def multiply(a, b):
    """Nhân hai số"""
    return a * b

PI = 3.14159

def circle_area(radius):
    """Tính diện tích hình tròn"""
    return PI * radius ** 2
```

### 4.2 - Import và sử dụng

```python
# main.py
import mymath

result = mymath.add(5, 3)
print(result)  # 8

area = mymath.circle_area(10)
print(area)  # 314.159
```

### 4.3 - Import specific items

```python
from mymath import add, PI

result = add(10, 20)
print(result)  # 30
print(PI)      # 3.14159
```

## 5. Module `__name__` và `__main__`

### 5.1 - Hiểu `__name__`

```python
# mymodule.py

def greet():
    print("Hello from mymodule!")

print(f"__name__ = {__name__}")

if __name__ == "__main__":
    print("Module được chạy trực tiếp")
    greet()
else:
    print("Module được import")
```

**Khi chạy trực tiếp:** `python mymodule.py`
```
__name__ = __main__
Module được chạy trực tiếp
Hello from mymodule!
```

**Khi import:** `import mymodule`
```
__name__ = mymodule
Module được import
```

### 5.2 - Ứng dụng thực tế

```python
# calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# Code test chỉ chạy khi run trực tiếp
if __name__ == "__main__":
    print("Testing calculator...")
    print(f"5 + 3 = {add(5, 3)}")
    print(f"10 - 4 = {subtract(10, 4)}")
```

## 6. Module Search Path

Python tìm modules theo thứ tự:

1. **Thư mục hiện tại**
2. **PYTHONPATH** (biến môi trường)
3. **Thư mục cài đặt Python**

```python
import sys

# Xem module search path
print(sys.path)
```

### 6.1 - Thêm path mới

```python
import sys

# Thêm folder vào search path
sys.path.append("/path/to/my/modules")

# Giờ có thể import modules từ folder đó
import mymodule
```

## 7. Packages - Nhóm nhiều modules

### 7.1 - Cấu trúc Package

```
mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

### 7.2 - Tạo Package

**File: `mypackage/__init__.py`**
```python
# Có thể để trống hoặc có code khởi tạo
print("Initializing mypackage")
```

**File: `mypackage/module1.py`**
```python
def func1():
    return "Function from module1"
```

**File: `mypackage/module2.py`**
```python
def func2():
    return "Function from module2"
```

### 7.3 - Sử dụng Package

```python
# Cách 1: Import module từ package
from mypackage import module1
print(module1.func1())

# Cách 2: Import function cụ thể
from mypackage.module2 import func2
print(func2())

# Cách 3: Import package
import mypackage.module1
print(mypackage.module1.func1())
```

## 8. Ví dụ thực tế

### Ví dụ 1: Utils module

**File: `utils.py`**
```python
"""
Utilities module chứa các hàm tiện ích
"""

def format_currency(amount):
    """Format số thành tiền tệ"""
    return f"${amount:,.2f}"

def validate_email(email):
    """Kiểm tra email hợp lệ"""
    return "@" in email and "." in email

def get_initials(full_name):
    """Lấy chữ cái đầu"""
    words = full_name.split()
    return "".join(word[0].upper() for word in words)

# Test code
if __name__ == "__main__":
    print(format_currency(1234567.89))
    print(validate_email("test@example.com"))
    print(get_initials("Alice Bob Charlie"))
```

**Sử dụng:**
```python
from utils import format_currency, validate_email

price = 1234.56
print(format_currency(price))  # $1,234.56

email = "user@example.com"
if validate_email(email):
    print("Email hợp lệ")
```

### Ví dụ 2: Calculator package

**Cấu trúc:**
```
calculator/
    __init__.py
    basic.py
    advanced.py
```

**File: `calculator/basic.py`**
```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

**File: `calculator/advanced.py`**
```python
import math

def power(base, exponent):
    return base ** exponent

def sqrt(number):
    return math.sqrt(number)

def factorial(n):
    return math.factorial(n)
```

**File: `calculator/__init__.py`**
```python
"""
Calculator package - Các phép tính toán học
"""

from .basic import add, subtract, multiply, divide
from .advanced import power, sqrt, factorial

__all__ = ['add', 'subtract', 'multiply', 'divide', 'power', 'sqrt', 'factorial']
```

**Sử dụng:**
```python
# Cách 1: Import từ __init__.py
from calculator import add, sqrt

print(add(5, 3))     # 8
print(sqrt(16))      # 4.0

# Cách 2: Import module cụ thể
from calculator.basic import multiply
from calculator.advanced import power

print(multiply(4, 5))  # 20
print(power(2, 10))    # 1024
```

## 9. dir() - Xem nội dung module

```python
import math

# Xem tất cả items trong module
print(dir(math))

# Lọc chỉ lấy functions (không có __)
funcs = [item for item in dir(math) if not item.startswith("_")]
print(funcs)
```

## 10. help() - Xem documentation

```python
import math

# Xem help của module
help(math)

# Xem help của function cụ thể
help(math.sqrt)
```

## 11. reload() - Reload module

```python
import importlib
import mymodule

# Reload module (sau khi sửa code)
importlib.reload(mymodule)
```

## 12. Best Practices

### 1. Đặt tên module

```python
# ✅ TỐT - lowercase, underscore
my_module.py
utils.py
data_processing.py

# ❌ TRÁNH - uppercase, spaces
MyModule.py
My Module.py
```

### 2. Tổ chức imports

```python
# ✅ TỐT - Nhóm theo thứ tự:
# 1. Built-in modules
import os
import sys
from datetime import datetime

# 2. Third-party modules
import requests
import numpy as np

# 3. Local modules
from mypackage import mymodule
from utils import format_currency
```

### 3. Tránh circular imports

```python
# ❌ TRÁNH
# file_a.py
import file_b

# file_b.py
import file_a  # Circular import!
```

### 4. Sử dụng `if __name__ == "__main__"`

```python
# ✅ TỐT
def main_function():
    # Main logic here
    pass

if __name__ == "__main__":
    main_function()
```

### 5. Document modules

```python
# ✅ TỐT
"""
Utils module chứa các hàm tiện ích.

Functions:
    format_currency(amount): Format số thành tiền tệ
    validate_email(email): Kiểm tra email hợp lệ
"""

def format_currency(amount):
    """
    Format số thành tiền tệ.

    Args:
        amount (float): Số tiền

    Returns:
        str: Chuỗi định dạng
    """
    return f"${amount:,.2f}"
```

## 13. Ví dụ tổng hợp

### Student Management System

**File: `student.py`**
```python
"""
Student module - Quản lý thông tin học sinh
"""

class Student:
    def __init__(self, name, age, scores):
        self.name = name
        self.age = age
        self.scores = scores

    def get_average(self):
        return sum(self.scores) / len(self.scores)

    def get_grade(self):
        avg = self.get_average()
        if avg >= 90:
            return "A"
        elif avg >= 80:
            return "B"
        elif avg >= 70:
            return "C"
        elif avg >= 60:
            return "D"
        else:
            return "F"

    def __str__(self):
        return f"{self.name} ({self.age}): {self.get_average():.1f} - {self.get_grade()}"

if __name__ == "__main__":
    # Test code
    alice = Student("Alice", 20, [85, 90, 88])
    print(alice)
```

**File: `classroom.py`**
```python
"""
Classroom module - Quản lý lớp học
"""

from student import Student

class Classroom:
    def __init__(self, name):
        self.name = name
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def get_class_average(self):
        if not self.students:
            return 0
        total = sum(student.get_average() for student in self.students)
        return total / len(self.students)

    def get_top_students(self, n=3):
        sorted_students = sorted(self.students,
                                key=lambda s: s.get_average(),
                                reverse=True)
        return sorted_students[:n]

    def print_report(self):
        print(f"=== {self.name} ===")
        print(f"Total students: {len(self.students)}")
        print(f"Class average: {self.get_class_average():.1f}")
        print("
Top students:")
        for i, student in enumerate(self.get_top_students(), 1):
            print(f"{i}. {student}")

if __name__ == "__main__":
    # Test code
    classroom = Classroom("Class 10A")
    classroom.add_student(Student("Alice", 20, [85, 90, 88]))
    classroom.add_student(Student("Bob", 21, [92, 88, 95]))
    classroom.add_student(Student("Charlie", 20, [78, 82, 80]))
    classroom.print_report()
```

**File: `main.py`**
```python
"""
Main program - Chương trình chính
"""

from student import Student
from classroom import Classroom

def main():
    # Tạo lớp học
    class_10a = Classroom("Class 10A")

    # Thêm học sinh
    students_data = [
        ("Alice", 20, [85, 90, 88, 92]),
        ("Bob", 21, [92, 88, 95, 90]),
        ("Charlie", 20, [78, 82, 80, 85]),
        ("David", 21, [95, 92, 98, 96]),
        ("Eve", 20, [88, 86, 90, 92])
    ]

    for name, age, scores in students_data:
        student = Student(name, age, scores)
        class_10a.add_student(student)

    # In báo cáo
    class_10a.print_report()

if __name__ == "__main__":
    main()
```

## Bài giảng trên YouTube

Cập nhật sau

---

## 📝 Bài tập thực hành

Sau khi học xong bài này, hãy thực hành với các bài tập sau:

- **[Bài tập Modules cơ bản](/bai-tap-lap-trinh/bai-tap-modules-co-ban)**
- **[Bài tập Modules nâng cao](/bai-tap-lap-trinh/bai-tap-modules-nang-cao)**
