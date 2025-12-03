---
description: Các bài tập về Modules - Cơ bản
icon: puzzle-piece
---

# Bài tập Modules - Cơ bản

1. Import module `math` và tính căn bậc 2 của 144.

```python
# Code của bạn ở đây
```

2. Import `randint` từ module `random` và tạo số ngẫu nhiên từ 1-100.

```python
# Code của bạn ở đây
```

3. Import module `datetime` với alias `dt` và in ngày hiện tại.

```python
# Code của bạn ở đây
```

4. Tạo file module `greetings.py` với hàm `say_hello(name)`.

```python
# File: greetings.py

def say_hello(name):
    # Code của bạn ở đây
    pass

# File: main.py
# Import và sử dụng
```

5. Tạo module `calculator.py` với 4 hàm: add, subtract, multiply, divide.

```python
# File: calculator.py

def add(a, b):
    pass

def subtract(a, b):
    pass

def multiply(a, b):
    pass

def divide(a, b):
    pass

# Test khi chạy trực tiếp
if __name__ == "__main__":
    pass
```

6. Sử dụng `os.getcwd()` để in thư mục hiện tại.

```python
# Code của bạn ở đây
```

7. Sử dụng `os.path.exists()` kiểm tra file "data.txt" có tồn tại không.

```python
# Code của bạn ở đây
```

8. Tạo module `constants.py` chứa các hằng số: PI, E, SPEED_OF_LIGHT.

```python
# File: constants.py

PI = # Code của bạn ở đây
E = # Code của bạn ở đây
SPEED_OF_LIGHT = # Code của bạn ở đây (299792458 m/s)
```

9. Sử dụng `random.choice()` chọn ngẫu nhiên một màu từ list.

```python
import random

colors = ["red", "blue", "green", "yellow", "purple"]
# Code của bạn ở đây
```

10. Tạo module `utils.py` với hàm `is_even(n)` và `is_odd(n)`.

```python
# File: utils.py

def is_even(n):
    # Trả về True nếu n chẵn
    pass

def is_odd(n):
    # Trả về True nếu n lẻ
    pass
```

11. Sử dụng `datetime.now()` và format thành "DD/MM/YYYY HH:MM:SS".

```python
from datetime import datetime

# Code của bạn ở đây
```

12. Tạo module `math_helpers.py` với hàm `square(n)` và `cube(n)`.

```python
# File: math_helpers.py

def square(n):
    # Trả về n²
    pass

def cube(n):
    # Trả về n³
    pass
```

13. Sử dụng `sys.version` để in phiên bản Python.

```python
# Code của bạn ở đây
```

14. Tạo module `string_utils.py` với hàm `reverse_string(s)`.

```python
# File: string_utils.py

def reverse_string(s):
    # Đảo ngược chuỗi
    pass

def is_palindrome(s):
    # Kiểm tra palindrome
    pass
```

15. Sử dụng `math.ceil()` và `math.floor()` với số 3.7.

```python
import math

# Code của bạn ở đây
```

16. Tạo module `list_helpers.py` với hàm `get_first(lst)` và `get_last(lst)`.

```python
# File: list_helpers.py

def get_first(lst):
    # Trả về phần tử đầu
    pass

def get_last(lst):
    # Trả về phần tử cuối
    pass
```

17. Sử dụng `os.listdir()` để list tất cả files trong thư mục hiện tại.

```python
# Code của bạn ở đây
```

18. Tạo module `temperature.py` chuyển đổi Celsius/Fahrenheit.

```python
# File: temperature.py

def celsius_to_fahrenheit(c):
    # F = C * 9/5 + 32
    pass

def fahrenheit_to_celsius(f):
    # C = (F - 32) * 5/9
    pass
```

19. Sử dụng `random.shuffle()` để xáo trộn một list.

```python
import random

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Code của bạn ở đây
```

20. Tạo package `mytools` với 2 modules: `formatter.py` và `validator.py`.

```
mytools/
    __init__.py
    formatter.py
    validator.py
```

```python
# File: mytools/formatter.py
def format_name(name):
    # Viết hoa chữ cái đầu
    pass

# File: mytools/validator.py
def validate_age(age):
    # Kiểm tra age >= 0 và age <= 150
    pass

# File: mytools/__init__.py
from .formatter import format_name
from .validator import validate_age
```
