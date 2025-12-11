---
description: Các cách khác nhau để truyền đối số vào hàm
icon: right-long
---

# Các cách truyền đối số vào hàm

### 1. Truyền đối số theo vị trí (Positional Arguments)

Đây là cách phổ biến nhất: giá trị được gán cho tham số theo **thứ tự khai báo**.

```python
def greet(name, age):
    print(f"My name is {name}, I am {age} years old.")

greet("Alice", 20)   # name = "Alice", age = 20
```

***

### 2. Truyền đối số theo tên (Keyword Arguments)

Có thể chỉ định rõ tham số nào nhận giá trị nào, không phụ thuộc vào thứ tự.

```python
greet(age=25, name="Bob")   # name = "Bob", age = 25
```

📌 Ưu điểm: code dễ đọc, tránh nhầm lẫn thứ tự.

***

### 3. Tham số mặc định (Default Arguments)

Có thể định nghĩa giá trị mặc định cho tham số, khi gọi hàm có thể bỏ qua.

```python
def introduce(name, country="Vietnam"):
    print(f"My name is {name}, I come from {country}.")

introduce("Alice")               # country = "Vietnam"
introduce("Bob", country="USA")  # country = "USA"
```

***

### 4. Truyền số lượng đối số không cố định

#### a) `*args` – danh sách đối số (tuple)

Dùng khi không biết trước số lượng tham số.

```python
def add(*args):
    return sum(args)

print(add(1, 2, 3))        # 6
print(add(10, 20, 30, 40)) # 100
```

#### b) `**kwargs` – đối số từ khóa động (dictionary)

Cho phép truyền nhiều đối số dạng tên=giá trị.

```python
def show_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

show_info(name="Alice", age=21, country="Vietnam")
```

***

### 5. Truyền kết hợp (Mixed Arguments)

Python cho phép kết hợp nhiều kiểu tham số, nhưng có **quy tắc thứ tự**:

```
(positional) → (default) → (*args) → (keyword-only) → (**kwargs)
```

Ví dụ:

```python
def demo(a, b=2, *args, c, **kwargs):
    print(a, b, args, c, kwargs)

demo(1, 3, 4, 5, c=6, x=7, y=8)
# a=1, b=3, args=(4,5), c=6, kwargs={'x':7, 'y':8}
```

***

### 6. Truyền đối số bằng "unpacking" (`*` và `**`)

Có thể dùng `*` và `**` để "giải nén" list/tuple/dict khi gọi hàm.

```python
def multiply(x, y, z):
    return x * y * z

numbers = (2, 3, 4)
print(multiply(*numbers))   # 24

info = {"x": 2, "y": 3, "z": 5}
print(multiply(**info))     # 30
```
