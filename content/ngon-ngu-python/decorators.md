# Decorators (Hàm trang trí)

Decorator là một pattern thiết kế cho phép thêm chức năng mới vào một hàm hoặc class mà không cần thay đổi code gốc của chúng. Decorator trong Python sử dụng ký hiệu `@` đặt trước hàm hoặc class.

## 1. Giới thiệu về Decorators

### Vấn đề cần giải quyết

```python
# Không dùng decorator - Code lặp lại
def say_hello():
    print("--- Start ---")
    print("Hello!")
    print("--- End ---")

def say_goodbye():
    print("--- Start ---")
    print("Goodbye!")
    print("--- End ---")

# Code "--- Start ---" và "--- End ---" bị lặp lại!
```

### Giải pháp với Decorator

```python
# Decorator tự động thêm "--- Start ---" và "--- End ---"
def add_border(func):
    def wrapper():
        print("--- Start ---")
        func()
        print("--- End ---")
    return wrapper

@add_border
def say_hello():
    print("Hello!")

@add_border
def say_goodbye():
    print("Goodbye!")

say_hello()
# --- Start ---
# Hello!
# --- End ---

say_goodbye()
# --- Start ---
# Goodbye!
# --- End ---
```

### Cách hoạt động

```python
# Khi viết:
@add_border
def say_hello():
    print("Hello!")

# Tương đương với:
def say_hello():
    print("Hello!")
say_hello = add_border(say_hello)
```

## 2. Decorator cơ bản

### Decorator đơn giản

```python
def my_decorator(func):
    def wrapper():
        print("Something before the function")
        func()
        print("Something after the function")
    return wrapper

@my_decorator
def greet():
    print("Hello, World!")

greet()
# Something before the function
# Hello, World!
# Something after the function
```

### Decorator với tham số

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"Result: {result}")
        return result
    return wrapper

@my_decorator
def add(a, b):
    return a + b

@my_decorator
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

add(5, 3)
# Calling add with args: (5, 3), kwargs: {}
# Result: 8

greet("Alice", greeting="Hi")
# Calling greet with args: ('Alice',), kwargs: {'greeting': 'Hi'}
# Result: Hi, Alice!
```

## 3. Decorator thực tế

### Decorator đo thời gian thực thi

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(2)
    return "Done!"

@timer
def calculate_sum(n):
    total = sum(range(n))
    return total

result = slow_function()  # slow_function took 2.0012 seconds
print(result)             # Done!

total = calculate_sum(1000000)  # calculate_sum took 0.0234 seconds
print(total)                     # 499999500000
```

### Decorator logging

```python
def log(func):
    def wrapper(*args, **kwargs):
        print(f"[LOG] Calling function: {func.__name__}")
        print(f"[LOG] Arguments: args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"[LOG] Return value: {result}")
        return result
    return wrapper

@log
def divide(a, b):
    return a / b

result = divide(10, 2)
# [LOG] Calling function: divide
# [LOG] Arguments: args=(10, 2), kwargs={}
# [LOG] Return value: 5.0
```

### Decorator kiểm tra quyền truy cập

```python
def require_permission(permission):
    def decorator(func):
        def wrapper(user, *args, **kwargs):
            if user.get("permission") == permission:
                return func(user, *args, **kwargs)
            else:
                return f"Permission denied. Required: {permission}"
        return wrapper
    return decorator

@require_permission("admin")
def delete_user(user, user_id):
    return f"User {user_id} deleted by {user['name']}"

@require_permission("editor")
def edit_post(user, post_id):
    return f"Post {post_id} edited by {user['name']}"

# Test
admin = {"name": "Alice", "permission": "admin"}
editor = {"name": "Bob", "permission": "editor"}
viewer = {"name": "Charlie", "permission": "viewer"}

print(delete_user(admin, 123))    # User 123 deleted by Alice
print(delete_user(editor, 123))   # Permission denied. Required: admin
print(edit_post(editor, 456))     # Post 456 edited by Bob
print(edit_post(viewer, 456))     # Permission denied. Required: editor
```

### Decorator cache/memoization

```python
def memoize(func):
    cache = {}

    def wrapper(*args):
        if args in cache:
            print(f"Returning cached result for {args}")
            return cache[args]

        print(f"Calculating result for {args}")
        result = func(*args)
        cache[args] = result
        return result

    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(5))
# Calculating result for (5,)
# Calculating result for (4,)
# Calculating result for (3,)
# Calculating result for (2,)
# Calculating result for (1,)
# Calculating result for (0,)
# Returning cached result for (1,)
# Returning cached result for (2,)
# 5

print(fibonacci(5))  # Returning cached result for (5,)
```

## 4. Decorator với tham số

### Decorator factory

```python
def repeat(times):
    """Decorator nhận tham số: số lần lặp lại"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!

@repeat(times=5)
def say_hi():
    print("Hi!")

say_hi()
# Hi!
# Hi!
# Hi!
# Hi!
# Hi!
```

### Decorator với prefix

```python
def prefix_decorator(prefix):
    def decorator(func):
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            return f"{prefix}: {result}"
        return wrapper
    return decorator

@prefix_decorator("INFO")
def get_status():
    return "System running"

@prefix_decorator("ERROR")
def get_error():
    return "Something went wrong"

print(get_status())  # INFO: System running
print(get_error())   # ERROR: Something went wrong
```

### Decorator validate input

```python
def validate_positive(func):
    def wrapper(x):
        if x < 0:
            raise ValueError("Input must be positive")
        return func(x)
    return wrapper

def validate_range(min_val, max_val):
    def decorator(func):
        def wrapper(x):
            if not (min_val <= x <= max_val):
                raise ValueError(f"Input must be between {min_val} and {max_val}")
            return func(x)
        return wrapper
    return decorator

@validate_positive
def square_root(x):
    return x ** 0.5

@validate_range(0, 100)
def percentage_to_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

print(square_root(16))  # 4.0
# print(square_root(-4))  # ValueError: Input must be positive

print(percentage_to_grade(85))  # B
# print(percentage_to_grade(150))  # ValueError: Input must be between 0 and 100
```

## 5. Nhiều Decorators (Stacking)

### Áp dụng nhiều decorators

```python
def bold(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"<b>{result}</b>"
    return wrapper

def italic(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"<i>{result}</i>"
    return wrapper

def underline(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"<u>{result}</u>"
    return wrapper

# Decorators được áp dụng từ dưới lên trên
@bold
@italic
@underline
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
# <b><i><u>Hello, Alice!</u></i></b>

# Tương đương với:
# greet = bold(italic(underline(greet)))
```

### Thứ tự thực thi

```python
def decorator_1(func):
    print("Decorator 1 applied")
    def wrapper(*args, **kwargs):
        print("Decorator 1: Before")
        result = func(*args, **kwargs)
        print("Decorator 1: After")
        return result
    return wrapper

def decorator_2(func):
    print("Decorator 2 applied")
    def wrapper(*args, **kwargs):
        print("Decorator 2: Before")
        result = func(*args, **kwargs)
        print("Decorator 2: After")
        return result
    return wrapper

@decorator_1
@decorator_2
def say_hello():
    print("Hello!")

# Khi định nghĩa:
# Decorator 2 applied
# Decorator 1 applied

print("--- Calling function ---")
say_hello()
# --- Calling function ---
# Decorator 1: Before
# Decorator 2: Before
# Hello!
# Decorator 2: After
# Decorator 1: After
```

## 6. functools.wraps

### Vấn đề với metadata

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        """This is the wrapper function"""
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def greet(name):
    """This function greets someone"""
    return f"Hello, {name}!"

# Metadata bị mất
print(greet.__name__)  # wrapper (KHÔNG phải greet!)
print(greet.__doc__)   # This is the wrapper function (SAI!)
```

### Giải pháp với functools.wraps

```python
from functools import wraps

def my_decorator(func):
    @wraps(func)  # Giữ lại metadata của func
    def wrapper(*args, **kwargs):
        """This is the wrapper function"""
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def greet(name):
    """This function greets someone"""
    return f"Hello, {name}!"

# Metadata được giữ lại
print(greet.__name__)  # greet (ĐÚNG!)
print(greet.__doc__)   # This function greets someone (ĐÚNG!)
```

### Best Practice: Luôn dùng @wraps

```python
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def calculate_sum(n):
    """Calculate sum of numbers from 0 to n"""
    return sum(range(n))

# Metadata đúng
print(calculate_sum.__name__)  # calculate_sum
print(calculate_sum.__doc__)   # Calculate sum of numbers from 0 to n
```

## 7. Class-based Decorators

### Decorator dạng class

```python
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.count = 0

    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"{self.func.__name__} has been called {self.count} time(s)")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    print("Hello!")

say_hello()  # say_hello has been called 1 time(s) / Hello!
say_hello()  # say_hello has been called 2 time(s) / Hello!
say_hello()  # say_hello has been called 3 time(s) / Hello!

print(f"Total calls: {say_hello.count}")  # Total calls: 3
```

### Class decorator với tham số

```python
class Repeat:
    def __init__(self, times):
        self.times = times

    def __call__(self, func):
        def wrapper(*args, **kwargs):
            for _ in range(self.times):
                result = func(*args, **kwargs)
            return result
        return wrapper

@Repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Bob")
# Hello, Bob!
# Hello, Bob!
# Hello, Bob!
```

## 8. Decorator cho Class

### Decorator cho class

```python
def add_str_method(cls):
    """Add __str__ method to class"""
    def __str__(self):
        return f"{self.__class__.__name__}({', '.join(f'{k}={v}' for k, v in self.__dict__.items())})"
    cls.__str__ = __str__
    return cls

@add_str_method
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 30)
print(person)  # Person(name=Alice, age=30)
```

### Singleton pattern với decorator

```python
def singleton(cls):
    instances = {}

    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return get_instance

@singleton
class Database:
    def __init__(self):
        print("Creating database connection...")
        self.connection = "Connected"

# Chỉ tạo 1 instance duy nhất
db1 = Database()  # Creating database connection...
db2 = Database()  # Không in gì (dùng instance cũ)
db3 = Database()  # Không in gì (dùng instance cũ)

print(db1 is db2)  # True
print(db2 is db3)  # True
```

## 9. Built-in Decorators

### @property

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        """Get radius"""
        return self._radius

    @radius.setter
    def radius(self, value):
        """Set radius with validation"""
        if value < 0:
            raise ValueError("Radius must be positive")
        self._radius = value

    @property
    def area(self):
        """Calculate area (read-only)"""
        import math
        return math.pi * self._radius ** 2

circle = Circle(5)
print(circle.radius)  # 5
print(circle.area)    # 78.53981633974483

circle.radius = 10
print(circle.area)    # 314.1592653589793

# circle.radius = -5  # ValueError: Radius must be positive
# circle.area = 100   # AttributeError: can't set attribute
```

### @staticmethod và @classmethod

```python
class MathOperations:
    pi = 3.14159

    @staticmethod
    def add(a, b):
        """Static method - không cần instance hay class"""
        return a + b

    @classmethod
    def get_pi(cls):
        """Class method - nhận class làm tham số đầu tiên"""
        return cls.pi

    @classmethod
    def create_from_string(cls, text):
        """Alternative constructor"""
        return cls()

# Gọi static method
print(MathOperations.add(5, 3))  # 8

# Gọi class method
print(MathOperations.get_pi())  # 3.14159

# Alternative constructor
obj = MathOperations.create_from_string("something")
```

### @dataclass (Python 3.7+)

```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"

    def greet(self):
        return f"Hi, I'm {self.name}, {self.age} years old"

# Tự động tạo __init__, __repr__, __eq__
person1 = Person("Alice", 30, "NYC")
person2 = Person("Bob", 25)

print(person1)  # Person(name='Alice', age=30, city='NYC')
print(person2)  # Person(name='Bob', age=25, city='Unknown')
print(person1 == person2)  # False
print(person1.greet())  # Hi, I'm Alice, 30 years old
```

## 10. Ví dụ thực tế

### Rate Limiter

```python
import time
from functools import wraps

def rate_limit(max_calls, period):
    """Giới hạn số lần gọi hàm trong khoảng thời gian"""
    calls = []

    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            # Xóa các lần gọi cũ ngoài period
            calls[:] = [call_time for call_time in calls if now - call_time < period]

            if len(calls) >= max_calls:
                raise Exception(f"Rate limit exceeded: max {max_calls} calls per {period} seconds")

            calls.append(now)
            return func(*args, **kwargs)
        return wrapper
    return decorator

@rate_limit(max_calls=3, period=10)
def api_call(endpoint):
    print(f"Calling API: {endpoint}")
    return {"status": "success"}

# Gọi 3 lần: OK
api_call("/users")  # OK
api_call("/posts")  # OK
api_call("/comments")  # OK

# Lần thứ 4: Lỗi
# api_call("/likes")  # Exception: Rate limit exceeded
```

### Retry decorator

```python
import time
from functools import wraps

def retry(max_attempts=3, delay=1):
    """Thử lại hàm nếu bị lỗi"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            attempts = 0
            while attempts < max_attempts:
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    attempts += 1
                    if attempts >= max_attempts:
                        print(f"Failed after {max_attempts} attempts")
                        raise
                    print(f"Attempt {attempts} failed: {e}. Retrying in {delay}s...")
                    time.sleep(delay)
        return wrapper
    return decorator

@retry(max_attempts=3, delay=2)
def unstable_api_call():
    import random
    if random.random() < 0.7:  # 70% fail rate
        raise ConnectionError("API unavailable")
    return "Success!"

result = unstable_api_call()
print(result)
```

## Tổng kết

- **Decorator**: Pattern thêm chức năng cho hàm/class mà không thay đổi code gốc
- **Cú pháp**: `@decorator_name` đặt trước hàm/class
- **Decorator function**: Nhận function làm tham số, trả về wrapper function
- **Decorator với tham số**: Cần 3 cấp hàm lồng nhau (decorator factory)
- **Stacking decorators**: Có thể áp dụng nhiều decorators, thực thi từ dưới lên
- **functools.wraps**: Giữ lại metadata của hàm gốc (LUÔN SỬ DỤNG)
- **Class decorator**: Dùng class với `__call__` làm decorator
- **Built-in decorators**: @property, @staticmethod, @classmethod, @dataclass
- **Ứng dụng thực tế**: Logging, timing, caching, authentication, validation, rate limiting, retry logic
