---
description: Các bài tập về *args và **kwargs - Cơ bản
icon: asterisk
---

# Bài tập *args và **kwargs - Cơ bản

## Phần 1: *args

1. Viết hàm **`sum_all(*numbers)`** tính tổng tất cả các số.

```python
def sum_all(*numbers):
    pass

# Test
print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15
```

2. Viết hàm **`multiply_all(*numbers)`** nhân tất cả các số.

```python
def multiply_all(*numbers):
    pass

# Test
print(multiply_all(2, 3, 4))  # 24
```

3. Viết hàm **`find_max(*numbers)`** tìm số lớn nhất.

```python
def find_max(*numbers):
    pass

# Test
print(find_max(1, 5, 3, 9, 2))  # 9
```

4. Viết hàm **`concat_strings(*strings)`** nối các chuỗi.

```python
def concat_strings(*strings):
    pass

# Test
print(concat_strings("Hello", " ", "World"))  # "Hello World"
```

5. Viết hàm **`average(*numbers)`** tính trung bình cộng.

```python
def average(*numbers):
    pass

# Test
print(average(10, 20, 30))  # 20.0
```

## Phần 2: **kwargs

6. Viết hàm **`print_info(**kwargs)`** in thông tin dạng key: value.

```python
def print_info(**kwargs):
    pass

# Test
print_info(name="Alice", age=25, city="Hanoi")
```

7. Viết hàm **`create_user(**user_data)`** tạo dictionary user.

```python
def create_user(**user_data):
    pass

# Test
user = create_user(name="Bob", email="bob@example.com", age=30)
print(user)
```

8. Viết hàm **`count_kwargs(**kwargs)`** đếm số keyword arguments.

```python
def count_kwargs(**kwargs):
    pass

# Test
print(count_kwargs(a=1, b=2, c=3))  # 3
```

9. Viết hàm **`get_value(key, **kwargs)`** lấy giá trị theo key.

```python
def get_value(key, **kwargs):
    pass

# Test
print(get_value("name", name="Alice", age=25))  # "Alice"
```

10. Viết hàm **`filter_kwargs(**kwargs)`** chỉ giữ values > 0.

```python
def filter_kwargs(**kwargs):
    pass

# Test
result = filter_kwargs(a=5, b=-3, c=10, d=0)
print(result)  # {'a': 5, 'c': 10}
```

## Phần 3: Kết hợp *args và **kwargs

11. Viết hàm **`flexible_function(*args, **kwargs)`** in cả args và kwargs.

```python
def flexible_function(*args, **kwargs):
    pass

# Test
flexible_function(1, 2, 3, name="Alice", age=25)
```

12. Viết hàm **`calculate(operation, *numbers, **options)`** thực hiện phép tính.

```python
def calculate(operation, *numbers, **options):
    # operation: "add", "multiply", etc.
    # options có thể chứa "round": True
    pass

# Test
print(calculate("add", 1, 2, 3, 4))  # 10
print(calculate("multiply", 2, 3, 4))  # 24
```

13. Viết hàm **`format_message(template, *args, **kwargs)`** format chuỗi.

```python
def format_message(template, *args, **kwargs):
    pass

# Test
msg = format_message("Hello {name}, you are {age} years old", name="Alice", age=25)
print(msg)
```

14. Viết hàm **`build_url(base, *paths, **params)`** tạo URL.

```python
def build_url(base, *paths, **params):
    # base: "https://example.com"
    # paths: ["api", "users", "123"]
    # params: {"limit": 10, "page": 2}
    # Result: "https://example.com/api/users/123?limit=10&page=2"
    pass

# Test
url = build_url("https://api.com", "users", "123", limit=10, page=2)
print(url)
```

15. Viết hàm **`log_message(level, *messages, **config)`** ghi log.

```python
def log_message(level, *messages, **config):
    # level: "INFO", "ERROR", etc.
    # messages: các thông báo
    # config: timestamp=True, file="app.log"
    pass

# Test
log_message("INFO", "User", "logged in", timestamp=True)
```

## Phần 4: Unpacking

16. Dùng * unpack list để gọi hàm **`add(a, b, c)`**.

```python
def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
# Code của bạn ở đây
```

17. Dùng ** unpack dictionary để gọi hàm **`greet(name, age)`**.

```python
def greet(name, age):
    return f"Hello {name}, you are {age}"

person = {"name": "Alice", "age": 25}
# Code của bạn ở đây
```

18. Viết hàm **`merge_dicts(*dicts)`** merge nhiều dictionaries.

```python
def merge_dicts(*dicts):
    pass

# Test
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3}
dict3 = {"d": 4}
result = merge_dicts(dict1, dict2, dict3)
print(result)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

19. Viết hàm **`combine_lists(*lists)`** kết hợp nhiều lists.

```python
def combine_lists(*lists):
    pass

# Test
list1 = [1, 2, 3]
list2 = [4, 5]
list3 = [6, 7, 8, 9]
result = combine_lists(list1, list2, list3)
print(result)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

20. Viết hàm **`call_function(func, *args, **kwargs)`** gọi function với args và kwargs.

```python
def call_function(func, *args, **kwargs):
    # Gọi func với args và kwargs
    pass

# Test
def sample_func(a, b, c=10):
    return a + b + c

result = call_function(sample_func, 1, 2, c=20)
print(result)  # 23
```
