# Scope và Namespace trong Python

Scope (phạm vi) và Namespace (không gian tên) là hai khái niệm quan trọng giúp Python quản lý biến và tránh xung đột tên trong chương trình.

## 1. Namespace là gì?

### Định nghĩa

**Namespace** là một "không gian tên" - một tập hợp các tên (identifiers) và các đối tượng mà chúng tham chiếu đến. Mỗi tên trong namespace phải là duy nhất.

Hãy tưởng tượng namespace như một cuốn từ điển:
- **Key (tên biến)**: `age`, `name`, `calculate`
- **Value (giá trị)**: `25`, `"John"`, `<function>`

```python
# Namespace giống như một dictionary
# Ví dụ minh họa (không phải code thực)
# namespace = {
#     'x': 10,
#     'name': 'Python',
#     'calculate': <function object>
# }

x = 10
name = "Python"
def calculate():
    pass
```

### Các loại Namespace

Python có 4 loại namespace chính:

#### 1. Built-in Namespace (Namespace tích hợp)

Chứa các tên của các hàm và biến được tích hợp sẵn trong Python (như `print()`, `len()`, `int()`, v.v.).

```python
# Các hàm built-in luôn có sẵn
print(len([1, 2, 3]))  # len là built-in
print(type(5))          # type là built-in
print(abs(-10))         # abs là built-in

# Xem tất cả built-in names
import builtins
print(dir(builtins))
```

#### 2. Global Namespace (Namespace toàn cục)

Chứa các tên được định nghĩa ở cấp độ module (file Python).

```python
# Đây là global namespace của file này
global_var = "Tôi là biến toàn cục"
PI = 3.14159

def my_function():
    pass

class MyClass:
    pass

# Biến global_var, PI, my_function, MyClass đều nằm trong global namespace
```

#### 3. Enclosing Namespace (Namespace bao bọc)

Chứa các tên trong hàm bên ngoài (outer function) khi có nested functions.

```python
def outer_function():
    outer_var = "Tôi là biến của outer function"

    def inner_function():
        # inner_function có thể truy cập outer_var
        # outer_var nằm trong enclosing namespace
        print(outer_var)

    inner_function()

outer_function()  # In: Tôi là biến của outer function
```

#### 4. Local Namespace (Namespace cục bộ)

Chứa các tên được định nghĩa bên trong một hàm.

```python
def my_function():
    local_var = "Tôi là biến cục bộ"
    x = 10
    # local_var và x chỉ tồn tại trong hàm này
    print(local_var)

my_function()
# print(local_var)  # Lỗi: local_var không tồn tại ngoài hàm
```

## 2. Scope là gì?

### Định nghĩa

**Scope** (phạm vi) là khu vực trong code nơi một namespace có thể được truy cập trực tiếp. Scope xác định "phạm vi hoạt động" của một biến.

### LEGB Rule - Quy tắc tìm kiếm biến

Python tìm kiếm biến theo thứ tự **LEGB**:

1. **L - Local**: Scope cục bộ (trong hàm hiện tại)
2. **E - Enclosing**: Scope bao bọc (hàm bên ngoài)
3. **G - Global**: Scope toàn cục (cấp độ module)
4. **B - Built-in**: Scope tích hợp sẵn

```python
x = "global"  # Global scope

def outer():
    x = "enclosing"  # Enclosing scope

    def inner():
        x = "local"  # Local scope
        print(x)

    inner()

outer()  # In: local

# Python tìm x theo thứ tự: Local → Enclosing → Global → Built-in
```

### Minh họa LEGB Rule

```python
# Built-in: len() có sẵn trong Python
# Global: biến x ở cấp module
x = "global x"

def outer():
    # Enclosing: biến x trong outer function
    x = "enclosing x"

    def inner():
        # Local: biến x trong inner function
        x = "local x"
        print(f"1. Local x: {x}")  # Tìm thấy ở Local

    def inner2():
        # Không có x local, tìm ở Enclosing
        print(f"2. Enclosing x: {x}")

    inner()
    inner2()

outer()
print(f"3. Global x: {x}")  # Tìm thấy ở Global

# Kết quả:
# 1. Local x: local x
# 2. Enclosing x: enclosing x
# 3. Global x: global x
```

## 3. Local Scope (Phạm vi cục bộ)

### Biến local

Biến được tạo bên trong hàm chỉ tồn tại trong hàm đó.

```python
def my_function():
    local_var = 100  # Biến local
    print(f"Trong hàm: {local_var}")

my_function()  # In: Trong hàm: 100

# print(local_var)  # Lỗi: name 'local_var' is not defined
```

### Tham số của hàm cũng là biến local

```python
def greet(name):  # 'name' là biến local
    message = f"Hello, {name}!"  # 'message' cũng là local
    print(message)

greet("Alice")  # In: Hello, Alice!

# print(name)     # Lỗi: không tồn tại ngoài hàm
# print(message)  # Lỗi: không tồn tại ngoài hàm
```

### Biến local không ảnh hưởng biến global cùng tên

```python
x = "global"

def my_function():
    x = "local"  # Tạo biến local mới, không ảnh hưởng global x
    print(f"Trong hàm: {x}")

my_function()      # In: Trong hàm: local
print(f"Ngoài hàm: {x}")  # In: Ngoài hàm: global
```

## 4. Global Scope (Phạm vi toàn cục)

### Biến global

Biến được tạo ở cấp độ module (ngoài tất cả các hàm).

```python
# Biến global
global_var = "Tôi là biến toàn cục"

def function1():
    print(global_var)  # Đọc biến global: OK

def function2():
    print(global_var)  # Cũng đọc được

function1()  # In: Tôi là biến toàn cục
function2()  # In: Tôi là biến toàn cục
print(global_var)  # In: Tôi là biến toàn cục
```

### Từ khóa global

Để **thay đổi** biến global bên trong hàm, phải dùng từ khóa `global`.

```python
count = 0  # Biến global

def increment():
    global count  # Khai báo sẽ dùng biến global
    count += 1    # Thay đổi biến global
    print(f"Count = {count}")

increment()  # Count = 1
increment()  # Count = 2
increment()  # Count = 3
print(count)  # 3
```

### Lỗi khi không dùng global

```python
counter = 0

def increment():
    # Không có từ khóa global
    # counter += 1  # Lỗi: UnboundLocalError
    # Python nghĩ counter là biến local nhưng chưa được gán giá trị
    pass

# Cách đúng: dùng global
def increment_correct():
    global counter
    counter += 1

increment_correct()
print(counter)  # 1
```

### Khi nào nên dùng global?

```python
# ❌ KHÔNG NÊN: Lạm dụng global
score = 0

def add_score(points):
    global score
    score += points

def reset_score():
    global score
    score = 0

# ✅ NÊN: Dùng tham số và return
def add_score(current_score, points):
    return current_score + points

score = 0
score = add_score(score, 10)
score = add_score(score, 5)
print(score)  # 15
```

## 5. Enclosing Scope (Phạm vi bao bọc)

### Nested Functions

Hàm bên trong có thể truy cập biến của hàm bên ngoài.

```python
def outer():
    x = "outer x"

    def inner():
        print(x)  # Truy cập biến của outer

    inner()

outer()  # In: outer x
```

### Từ khóa nonlocal

Để **thay đổi** biến của hàm bên ngoài, dùng từ khóa `nonlocal`.

```python
def outer():
    count = 0

    def inner():
        nonlocal count  # Khai báo dùng biến của outer
        count += 1
        print(f"Count = {count}")

    inner()  # Count = 1
    inner()  # Count = 2
    print(f"Final count = {count}")  # Final count = 2

outer()
```

### Lỗi khi không dùng nonlocal

```python
def outer():
    x = 10

    def inner():
        # x += 1  # Lỗi: UnboundLocalError
        # Python nghĩ x là local nhưng chưa được gán
        pass

    inner()

# Cách đúng:
def outer_correct():
    x = 10

    def inner():
        nonlocal x
        x += 1
        print(x)

    inner()  # In: 11

outer_correct()
```

### Ví dụ thực tế: Closure

```python
def make_multiplier(n):
    def multiplier(x):
        return x * n  # Truy cập n từ enclosing scope
    return multiplier

# Tạo các hàm nhân
times_2 = make_multiplier(2)
times_3 = make_multiplier(3)
times_5 = make_multiplier(5)

print(times_2(10))  # 20
print(times_3(10))  # 30
print(times_5(10))  # 50
```

## 6. Built-in Scope

### Namespace tích hợp sẵn

Python cung cấp sẵn nhiều hàm và biến.

```python
# Các hàm built-in
print()
len()
type()
int()
str()
list()
dict()

# Xem tất cả built-in
import builtins
print(dir(builtins))
```

### Ghi đè built-in (KHÔNG NÊN làm)

```python
# ❌ KHÔNG NÊN: Ghi đè built-in function
print("Before override")

print = "Now print is a string"
# print("After override")  # Lỗi: 'str' object is not callable

# Khôi phục (phức tạp)
import builtins
print = builtins.print
print("Restored")  # Hoạt động lại

# ❌ KHÔNG NÊN đặt tên biến trùng built-in
list = [1, 2, 3]  # Ghi đè hàm list()
# my_list = list(range(5))  # Lỗi: 'list' object is not callable
```

## 7. Hàm globals() và locals()

### globals() - Xem global namespace

```python
x = 10
y = 20

def my_function():
    print(globals())  # Dictionary chứa tất cả biến global

my_function()

# Truy cập biến global qua globals()
print(globals()['x'])  # 10

# Thêm biến global động
globals()['z'] = 30
print(z)  # 30
```

### locals() - Xem local namespace

```python
def my_function():
    a = 1
    b = 2
    c = 3
    print(locals())  # {'a': 1, 'b': 2, 'c': 3}

my_function()

# Ở global scope, locals() == globals()
x = 100
print(locals() == globals())  # True
```

## 8. Ví dụ thực tế

### Counter với closure

```python
def create_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    def decrement():
        nonlocal count
        count -= 1
        return count

    def get_count():
        return count

    return increment, decrement, get_count

# Tạo counter
inc, dec, get = create_counter()

print(inc())  # 1
print(inc())  # 2
print(inc())  # 3
print(dec())  # 2
print(get())  # 2
```

### Configuration Manager

```python
# config.py
APP_NAME = "My Application"
VERSION = "1.0.0"
DEBUG = True

def get_config():
    return {
        'app_name': APP_NAME,
        'version': VERSION,
        'debug': DEBUG
    }

def set_debug(value):
    global DEBUG
    DEBUG = value

# main.py
print(get_config())
set_debug(False)
print(get_config())
```

### Bank Account với encapsulation

```python
def create_account(initial_balance):
    balance = initial_balance  # Private variable (enclosing scope)

    def deposit(amount):
        nonlocal balance
        if amount > 0:
            balance += amount
            return f"Deposited {amount}. New balance: {balance}"
        return "Invalid amount"

    def withdraw(amount):
        nonlocal balance
        if 0 < amount <= balance:
            balance -= amount
            return f"Withdrew {amount}. New balance: {balance}"
        return "Insufficient funds or invalid amount"

    def get_balance():
        return balance

    return deposit, withdraw, get_balance

# Tạo tài khoản
deposit, withdraw, get_balance = create_account(1000)

print(get_balance())      # 1000
print(deposit(500))       # Deposited 500. New balance: 1500
print(withdraw(200))      # Withdrew 200. New balance: 1300
print(get_balance())      # 1300

# Không thể truy cập trực tiếp biến balance từ bên ngoài
```

## 9. Bài tập thực hành

### Bài 1: Phân biệt scope

```python
x = "global"

def outer():
    x = "outer"

    def inner():
        x = "inner"
        print(f"inner x = {x}")

    inner()
    print(f"outer x = {x}")

outer()
print(f"global x = {x}")

# Kết quả:
# inner x = inner
# outer x = outer
# global x = global
```

### Bài 2: Tạo ID generator

```python
def create_id_generator(start=1):
    current_id = start - 1

    def next_id():
        nonlocal current_id
        current_id += 1
        return current_id

    def reset():
        nonlocal current_id
        current_id = start - 1

    return next_id, reset

# Sử dụng
next_id, reset = create_id_generator(100)

print(next_id())  # 100
print(next_id())  # 101
print(next_id())  # 102
reset()
print(next_id())  # 100
```

### Bài 3: Temperature Converter

```python
CELSIUS_TO_FAHRENHEIT = lambda c: (c * 9/5) + 32
FAHRENHEIT_TO_CELSIUS = lambda f: (f - 32) * 5/9

def temperature_converter():
    last_conversion = None

    def celsius_to_fahrenheit(celsius):
        nonlocal last_conversion
        fahrenheit = CELSIUS_TO_FAHRENHEIT(celsius)
        last_conversion = f"{celsius}°C = {fahrenheit}°F"
        return fahrenheit

    def fahrenheit_to_celsius(fahrenheit):
        nonlocal last_conversion
        celsius = FAHRENHEIT_TO_CELSIUS(fahrenheit)
        last_conversion = f"{fahrenheit}°F = {celsius}°C"
        return celsius

    def get_last_conversion():
        return last_conversion

    return celsius_to_fahrenheit, fahrenheit_to_celsius, get_last_conversion

# Sử dụng
c_to_f, f_to_c, get_last = temperature_converter()

print(c_to_f(25))      # 77.0
print(get_last())      # 25°C = 77.0°F
print(f_to_c(98.6))    # 37.0
print(get_last())      # 98.6°F = 37.0°C
```

## Tổng kết

- **Namespace**: Không gian chứa các tên (biến, hàm, class) và giá trị của chúng
  - Built-in, Global, Enclosing, Local

- **Scope**: Phạm vi mà một namespace có thể được truy cập
  - **LEGB Rule**: Local → Enclosing → Global → Built-in

- **Từ khóa quan trọng**:
  - `global`: Thay đổi biến global từ trong hàm
  - `nonlocal`: Thay đổi biến của hàm bên ngoài (enclosing)

- **Best Practices**:
  - ✅ Hạn chế dùng biến global
  - ✅ Dùng tham số và return thay vì global
  - ✅ Không ghi đè built-in functions/variables
  - ✅ Sử dụng closure để encapsulation dữ liệu
