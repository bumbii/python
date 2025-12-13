---
icon: asterisk
---

# *args và **kwargs

## 1. Giới thiệu

`*args` và `**kwargs` cho phép function nhận **số lượng arguments không xác định**.

### Tại sao cần?
- ✅ Function linh hoạt hơn
- ✅ Không cần biết trước số lượng parameters
- ✅ Dễ mở rộng
- ✅ Viết wrapper functions

## 2. *args - Variable Positional Arguments

### 2.1 - Cú pháp

```python
def function_name(*args):
    # args là tuple chứa tất cả arguments
    pass
```

### 2.2 - Ví dụ cơ bản

```python
def sum_all(*numbers):
    """Tính tổng tất cả các số"""
    total = 0
    for num in numbers:
        total += num
    return total

# Gọi với số lượng arguments khác nhau
print(sum_all(1, 2, 3))           # 6
print(sum_all(1, 2, 3, 4, 5))     # 15
print(sum_all(10, 20))            # 30
```

### 2.3 - args là tuple

```python
def print_args(*args):
    print(f"Type: {type(args)}")
    print(f"Args: {args}")
    print(f"Length: {len(args)}")

print_args(1, 2, 3, "hello", True)
# Type: <class 'tuple'>
# Args: (1, 2, 3, 'hello', True)
# Length: 5
```

## 3. **kwargs - Variable Keyword Arguments

### 3.1 - Cú pháp

```python
def function_name(**kwargs):
    # kwargs là dictionary chứa tất cả keyword arguments
    pass
```

### 3.2 - Ví dụ cơ bản

```python
def print_info(**kwargs):
    """In thông tin dạng key=value"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="Hanoi")
# name: Alice
# age: 25
# city: Hanoi

print_info(product="Laptop", price=1000, brand="Dell")
# product: Laptop
# price: 1000
# brand: Dell
```

### 3.3 - kwargs là dictionary

```python
def print_kwargs(**kwargs):
    print(f"Type: {type(kwargs)}")
    print(f"Kwargs: {kwargs}")
    print(f"Length: {len(kwargs)}")

print_kwargs(a=1, b=2, c=3)
# Type: <class 'dict'>
# Kwargs: {'a': 1, 'b': 2, 'c': 3}
# Length: 3
```

## 4. Kết hợp *args và **kwargs

### 4.1 - Thứ tự parameters

```python
def full_function(normal_arg, *args, default_arg="default", **kwargs):
    print(f"Normal: {normal_arg}")
    print(f"Args: {args}")
    print(f"Default: {default_arg}")
    print(f"Kwargs: {kwargs}")

full_function(1, 2, 3, 4, default_arg="custom", x=10, y=20)
# Normal: 1
# Args: (2, 3, 4)
# Default: custom
# Kwargs: {'x': 10, 'y': 20}
```

**Thứ tự bắt buộc:**
1. Positional arguments
2. `*args`
3. Keyword arguments (có default)
4. `**kwargs`

### 4.2 - Ví dụ thực tế

```python
def create_user(username, email, *roles, **extra_info):
    """Tạo user với roles và thông tin bổ sung"""
    user = {
        "username": username,
        "email": email,
        "roles": list(roles),
        "extra": extra_info
    }
    return user

user = create_user(
    "alice",
    "alice@example.com",
    "admin",
    "editor",
    age=25,
    city="Hanoi"
)
print(user)
# {
#     'username': 'alice',
#     'email': 'alice@example.com',
#     'roles': ['admin', 'editor'],
#     'extra': {'age': 25, 'city': 'Hanoi'}
# }
```

## 5. Unpacking với * và **

### 5.1 - Unpacking list/tuple với *

```python
def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]

# ❌ Sai
# result = add(numbers)  # TypeError

# ✅ Đúng - Unpack list
result = add(*numbers)
print(result)  # 6

# Tương đương với:
result = add(numbers[0], numbers[1], numbers[2])
```

### 5.2 - Unpacking dictionary với **

```python
def greet(name, age, city):
    return f"{name}, {age} years old, from {city}"

person = {"name": "Alice", "age": 25, "city": "Hanoi"}

# ✅ Unpack dictionary
message = greet(**person)
print(message)
# Alice, 25 years old, from Hanoi

# Tương đương với:
message = greet(name="Alice", age=25, city="Hanoi")
```

## 6. Ví dụ thực tế

### Ví dụ 1: Wrapper function

```python
def log_function_call(func):
    """Decorator log function calls"""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        print(f"Args: {args}")
        print(f"Kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"Result: {result}")
        return result
    return wrapper

@log_function_call
def calculate(a, b, operation="add"):
    if operation == "add":
        return a + b
    elif operation == "multiply":
        return a * b

calculate(5, 3, operation="multiply")
```

### Ví dụ 2: Flexible configuration

```python
def configure_app(**settings):
    """Cấu hình ứng dụng"""
    default_config = {
        "debug": False,
        "port": 8000,
        "host": "localhost"
    }

    # Merge với settings
    config = {**default_config, **settings}
    return config

# Sử dụng
config1 = configure_app(debug=True, port=3000)
config2 = configure_app(host="0.0.0.0")
print(config1)
print(config2)
```

### Ví dụ 3: Format string builder

```python
def build_query(*conditions, **params):
    """Xây dựng SQL query"""
    query = "SELECT * FROM users"

    if conditions:
        where_clause = " AND ".join(conditions)
        query += f" WHERE {where_clause}"

    if params:
        order = params.get("order_by")
        limit = params.get("limit")

        if order:
            query += f" ORDER BY {order}"
        if limit:
            query += f" LIMIT {limit}"

    return query

# Sử dụng
q1 = build_query("age > 18", "active = true", order_by="name", limit=10)
print(q1)
# SELECT * FROM users WHERE age > 18 AND active = true ORDER BY name LIMIT 10
```

## 7. Tips và Best Practices

### 1. Đặt tên rõ ràng

```python
# ✅ TỐT - Tên mô tả rõ
def process_data(*data_items, **options):
    pass

# ❌ TRÁNH - Tên chung chung
def process(*args, **kwargs):
    pass
```

### 2. Document arguments

```python
def complex_function(*args, **kwargs):
    """
    Xử lý dữ liệu phức tạp.

    Args:
        *args: List of data items to process
        **kwargs: Configuration options
            - method (str): Processing method
            - verbose (bool): Print debug info
    """
    pass
```

### 3. Validate inputs

```python
def safe_divide(*numbers, **options):
    if not numbers:
        raise ValueError("At least one number required")

    result = numbers[0]
    for num in numbers[1:]:
        if num == 0:
            raise ValueError("Cannot divide by zero")
        result /= num

    return result
```

## 8. Common Patterns

### Pattern 1: Extend existing function

```python
def original_function(a, b):
    return a + b

def extended_function(a, b, *args, **kwargs):
    # Giữ hành vi cũ
    result = original_function(a, b)

    # Thêm tính năng mới
    if args:
        result += sum(args)

    return result
```

### Pattern 2: Forward arguments

```python
class BaseClass:
    def __init__(self, name):
        self.name = name

class ExtendedClass(BaseClass):
    def __init__(self, name, *args, **kwargs):
        # Forward to parent
        super().__init__(name)

        # Handle extra arguments
        self.extra = args
        self.options = kwargs
```

### Pattern 3: Flexible factory

```python
def create_object(obj_type, *args, **kwargs):
    """Factory tạo objects"""
    if obj_type == "list":
        return list(args)
    elif obj_type == "dict":
        return dict(**kwargs)
    elif obj_type == "tuple":
        return tuple(args)

# Sử dụng
lst = create_object("list", 1, 2, 3, 4)
dct = create_object("dict", name="Alice", age=25)
```

## 9. Lỗi thường gặp

### Lỗi 1: Thứ tự sai

```python
# ❌ SAI - **kwargs phải sau *args
def wrong_order(**kwargs, *args):
    pass

# ✅ ĐÚNG
def correct_order(*args, **kwargs):
    pass
```

### Lỗi 2: Unpack không đúng type

```python
def func(a, b, c):
    pass

# ❌ SAI - Unpack dict với *
data = {"a": 1, "b": 2, "c": 3}
# func(*data)  # Chỉ unpack keys!

# ✅ ĐÚNG - Unpack dict với **
func(**data)
```

### Lỗi 3: Mix positional và keyword

```python
def func(*args, **kwargs):
    pass

# ❌ SAI - Keyword arg sau positional khi có *args
# func(1, 2, normal=3, 4)  # SyntaxError

# ✅ ĐÚNG
func(1, 2, 4, normal=3)
```

## 10. Ví dụ tổng hợp

```python
def advanced_logger(level, *messages, **config):
    """
    Advanced logging function

    Args:
        level: Log level (INFO, WARNING, ERROR)
        *messages: Variable messages to log
        **config: Configuration options
            - timestamp (bool): Include timestamp
            - file (str): Output file
            - format (str): Message format
    """
    import datetime

    # Configuration
    include_timestamp = config.get("timestamp", True)
    output_file = config.get("file")
    msg_format = config.get("format", "{level}: {message}")

    # Build message
    combined_message = " ".join(str(msg) for msg in messages)

    if include_timestamp:
        ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = f"[{ts}] {msg_format.format(level=level, message=combined_message)}"
    else:
        log_entry = msg_format.format(level=level, message=combined_message)

    # Output
    if output_file:
        with open(output_file, "a") as f:
            f.write(log_entry + "\\n")
    else:
        print(log_entry)

# Sử dụng
advanced_logger("INFO", "Application", "started", "successfully", timestamp=True)
advanced_logger("ERROR", "Database", "connection", "failed", file="app.log")
advanced_logger("WARNING", "Low memory", timestamp=False, format="[{level}] {message}")
```

## Bài giảng trên YouTube

Cập nhật sau

---

## 📝 Bài tập thực hành

Sau khi học xong bài này, hãy thực hành với các bài tập sau:

- **[Bài tập Args & Kwargs cơ bản](/bai-tap-lap-trinh/bai-tap-args-kwargs-co-ban)**
- **[Bài tập Args & Kwargs nâng cao](/bai-tap-lap-trinh/bai-tap-args-kwargs-nang-cao)**
