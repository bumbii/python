---
icon: equals
---

# Walrus Operator (:=)

## 1. Giới thiệu

**Walrus Operator** (`:=`) là một tính năng mới được thêm vào Python 3.8, còn gọi là **Assignment Expression** (biểu thức gán).

**Tên gọi:** Ký hiệu `:=` giống hình con hải mã (walrus) nằm nghiêng nên được gọi là "Walrus Operator".

**Tác dụng:**
- Gán giá trị cho biến TRONG một biểu thức
- Giảm code trùng lặp
- Tăng hiệu suất (tính toán 1 lần)
- Code ngắn gọn hơn

## 2. Cú pháp cơ bản

### 2.1 - So sánh với gán thông thường

**Gán thông thường:**
```python
# Gán rồi mới dùng (2 dòng)
x = 10
if x > 5:
    print(f"{x} lớn hơn 5")
```

**Walrus Operator:**
```python
# Gán và dùng trong cùng 1 biểu thức (1 dòng)
if (x := 10) > 5:
    print(f"{x} lớn hơn 5")
```

### 2.2 - Cú pháp

```python
(variable := expression)
```

**Lưu ý:** Thường cần dùng dấu ngoặc `()` để tránh lỗi cú pháp.

## 3. Ví dụ cơ bản

### 3.1 - Với câu lệnh if

**Trước Python 3.8:**
```python
length = len(my_list)
if length > 10:
    print(f"List có {length} phần tử")
```

**Với Walrus Operator:**
```python
if (length := len(my_list)) > 10:
    print(f"List có {length} phần tử")
```

### 3.2 - Với vòng lặp while

**Trước Python 3.8:**
```python
line = input("Nhập text (hoặc 'quit'): ")
while line != "quit":
    print(f"Bạn nhập: {line}")
    line = input("Nhập text (hoặc 'quit'): ")
```

**Với Walrus Operator:**
```python
while (line := input("Nhập text (hoặc 'quit'): ")) != "quit":
    print(f"Bạn nhập: {line}")
```

### 3.3 - Với list comprehension

**Trước Python 3.8:**
```python
# Tính toán 2 lần - không hiệu quả
results = [expensive_function(x) for x in data if expensive_function(x) > 0]
```

**Với Walrus Operator:**
```python
# Tính toán 1 lần - hiệu quả hơn
results = [y for x in data if (y := expensive_function(x)) > 0]
```

## 4. Use Cases thực tế

### 4.1 - Đọc file

**Cách cũ:**
```python
file = open("data.txt", "r")
line = file.readline()
while line:
    print(line.strip())
    line = file.readline()
file.close()
```

**Với Walrus:**
```python
with open("data.txt", "r") as file:
    while (line := file.readline()):
        print(line.strip())
```

### 4.2 - Input validation

**Cách cũ:**
```python
while True:
    value = input("Nhập số dương: ")
    try:
        number = int(value)
        if number > 0:
            break
        print("Phải là số dương!")
    except ValueError:
        print("Không phải số!")

print(f"Bạn nhập: {number}")
```

**Với Walrus:**
```python
while True:
    try:
        if (number := int(input("Nhập số dương: "))) > 0:
            break
        print("Phải là số dương!")
    except ValueError:
        print("Không phải số!")

print(f"Bạn nhập: {number}")
```

### 4.3 - Regex matching

**Cách cũ:**
```python
import re

text = "Email: alice@example.com"
match = re.search(r"(\w+)@(\w+\.\w+)", text)
if match:
    print(f"Username: {match.group(1)}")
    print(f"Domain: {match.group(2)}")
```

**Với Walrus:**
```python
import re

text = "Email: alice@example.com"
if (match := re.search(r"(\w+)@(\w+\.\w+)", text)):
    print(f"Username: {match.group(1)}")
    print(f"Domain: {match.group(2)}")
```

### 4.4 - Xử lý None/Empty

**Cách cũ:**
```python
data = get_data()
if data is not None:
    process(data)
```

**Với Walrus:**
```python
if (data := get_data()) is not None:
    process(data)
```

### 4.5 - List comprehension với filter

**Cách cũ - tính 2 lần:**
```python
numbers = [1, 2, 3, 4, 5]
# squared() được gọi 2 lần cho mỗi số thỏa điều kiện
result = [squared(x) for x in numbers if squared(x) > 10]

def squared(n):
    print(f"Computing {n}^2")
    return n ** 2
```

**Với Walrus - tính 1 lần:**
```python
numbers = [1, 2, 3, 4, 5]
result = [y for x in numbers if (y := squared(x)) > 10]

def squared(n):
    print(f"Computing {n}^2")
    return n ** 2
```

### 4.6 - Nested if

**Cách cũ:**
```python
user = get_user(user_id)
if user:
    profile = get_profile(user)
    if profile:
        settings = get_settings(profile)
        if settings:
            print(settings)
```

**Với Walrus:**
```python
if (user := get_user(user_id)) and \
   (profile := get_profile(user)) and \
   (settings := get_settings(profile)):
    print(settings)
```

## 5. Ví dụ nâng cao

### Ví dụ 1: Parse data

```python
data = [
    "name:Alice",
    "age:25",
    "invalid",
    "city:Hanoi",
    "salary:1000"
]

# Extract key-value pairs
parsed = []
for item in data:
    if (parts := item.split(":")) and len(parts) == 2:
        key, value = parts
        parsed.append({key: value})

print(parsed)
# [{'name': 'Alice'}, {'age': '25'}, {'city': 'Hanoi'}, {'salary': '1000'}]
```

### Ví dụ 2: Batch processing

```python
def process_batch(items, batch_size=3):
    i = 0
    while (batch := items[i:i+batch_size]):
        if not batch:  # Empty batch
            break
        print(f"Processing batch: {batch}")
        i += batch_size
        if i >= len(items):
            break

data = [1, 2, 3, 4, 5, 6, 7, 8]
process_batch(data)
```

### Ví dụ 3: Find first match

```python
def find_first_match(items, condition):
    return next((item for item in items if condition(item)), None)

# Với Walrus - có thể dùng giá trị match
numbers = [1, 2, 3, 4, 5, 6]
if (result := find_first_match(numbers, lambda x: x > 3)):
    print(f"First match: {result}")
```

### Ví dụ 4: Memoization trong list comprehension

```python
def expensive_check(n):
    print(f"Checking {n}")
    return n % 2 == 0 and n > 5

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Không dùng walrus - gọi expensive_check 2 lần
result = [(n, expensive_check(n)) for n in numbers if expensive_check(n)]

# Dùng walrus - gọi expensive_check 1 lần
result = [(n, is_valid) for n in numbers if (is_valid := expensive_check(n))]
print(result)
```

### Ví dụ 5: Stream processing

```python
import time

def get_sensor_data():
    """Giả lập đọc dữ liệu từ sensor"""
    import random
    return random.randint(0, 100)

# Monitor sensor và alert nếu giá trị cao
print("Monitoring sensor (Ctrl+C to stop)...")
try:
    while (value := get_sensor_data()) is not None:
        if value > 80:
            print(f"ALERT: High value detected: {value}")
        else:
            print(f"Normal: {value}")
        time.sleep(1)
except KeyboardInterrupt:
    print("\nStopped monitoring")
```

### Ví dụ 6: Configuration loading

```python
def load_config(env):
    configs = {
        "dev": {"debug": True, "host": "localhost"},
        "prod": {"debug": False, "host": "example.com"}
    }
    return configs.get(env)

# Với walrus
if (config := load_config("dev")):
    print(f"Loaded config: {config}")
    if config.get("debug"):
        print("Debug mode is ON")
else:
    print("Config not found")
```

### Ví dụ 7: Filtering với transformation

```python
# Lọc và transform cùng lúc
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Chỉ lấy số chẵn và nhân 2, chỉ tính 1 lần
result = [doubled for n in numbers if (doubled := n * 2) % 4 == 0]
print(result)  # [4, 8, 12, 16, 20]
```

### Ví dụ 8: Early termination

```python
def process_until_threshold(data, threshold=1000):
    total = 0
    processed = []

    for item in data:
        if (total := total + item) > threshold:
            print(f"Threshold reached at {total}")
            break
        processed.append(item)

    return processed

data = [100, 200, 300, 400, 500]
result = process_until_threshold(data)
print(result)
```

### Ví dụ 9: API response handling

```python
def get_user_data(user_id):
    # Giả lập API call
    users = {
        1: {"name": "Alice", "age": 25},
        2: {"name": "Bob", "age": 30}
    }
    return users.get(user_id)

# Chain checking với walrus
user_id = 1
if (user := get_user_data(user_id)) and (name := user.get("name")):
    print(f"Welcome, {name}!")
    if (age := user.get("age")) and age >= 18:
        print("You are an adult")
else:
    print("User not found")
```

### Ví dụ 10: Cache with expiry

```python
import time

class CachedValue:
    def __init__(self, compute_func, ttl=5):
        self.compute_func = compute_func
        self.ttl = ttl
        self.cached = None
        self.cached_time = 0

    def get(self):
        current_time = time.time()
        if (age := current_time - self.cached_time) > self.ttl:
            print(f"Cache expired (age: {age:.1f}s), recomputing...")
            self.cached = self.compute_func()
            self.cached_time = current_time
        else:
            print(f"Using cached value (age: {age:.1f}s)")
        return self.cached

# Sử dụng
def expensive_computation():
    print("Computing...")
    return sum(range(1000000))

cached = CachedValue(expensive_computation, ttl=3)
print(cached.get())  # Compute
time.sleep(2)
print(cached.get())  # Use cache
time.sleep(2)
print(cached.get())  # Cache expired, recompute
```

## 6. Khi KHÔNG nên dùng Walrus

### 6.1 - Code khó đọc

```python
# TRÁNH - Quá phức tạp
if (x := (y := (z := func()))) > 10:
    pass

# TỐT - Dễ đọc hơn
z = func()
y = z
x = y
if x > 10:
    pass
```

### 6.2 - Chỉ gán đơn giản

```python
# TRÁNH - Không cần thiết
x := 10  # SyntaxError! Phải trong expression

# TỐT
x = 10
```

### 6.3 - Không có điều kiện

```python
# TRÁNH - Dùng walrus không mang lại lợi ích
result = (x := expensive_function())

# TỐT
result = expensive_function()
x = result
```

## 7. Best Practices

### 1. Dùng dấu ngoặc

```python
# TỐT - Rõ ràng
if (n := len(items)) > 10:
    pass

# CÓ THỂ LỖI - Không có ngoặc
if n := len(items) > 10:  # SyntaxError
    pass
```

### 2. Đặt tên biến rõ ràng

```python
# TỐT
if (user_count := len(users)) > 100:
    print(f"Too many users: {user_count}")

# TRÁNH
if (x := len(users)) > 100:
    print(f"Too many users: {x}")
```

### 3. Không lạm dụng

```python
# TRÁNH - Quá nhiều walrus
if (a := func1()) and (b := func2(a)) and (c := func3(b)):
    pass

# TỐT - Dễ đọc hơn
a = func1()
if a:
    b = func2(a)
    if b:
        c = func3(b)
```

### 4. Sử dụng khi có lợi ích rõ ràng

```python
# TỐT - Tránh tính toán 2 lần
result = [y for x in data if (y := transform(x)) is not None]

# TỐT - Giảm code lặp
while (line := file.readline()):
    process(line)
```

## 8. So sánh Before/After

### Ví dụ 1: Input loop

**Before:**
```python
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break
    process(user_input)
```

**After:**
```python
while (user_input := input("Enter command: ")) != "quit":
    process(user_input)
```

### Ví dụ 2: Search in list

**Before:**
```python
found = None
for item in items:
    if condition(item):
        found = item
        break

if found:
    print(f"Found: {found}")
```

**After:**
```python
if (found := next((item for item in items if condition(item)), None)):
    print(f"Found: {found}")
```

### Ví dụ 3: Dictionary get

**Before:**
```python
value = config.get("key")
if value is not None:
    process(value)
```

**After:**
```python
if (value := config.get("key")) is not None:
    process(value)
```

## 9. Lưu ý quan trọng

### 9.1 - Chỉ hoạt động trong expression

```python
# OK - Trong if
if (x := 10) > 5:
    pass

# OK - Trong while
while (x := get_value()) is not None:
    pass

# OK - Trong list comprehension
result = [y for x in data if (y := transform(x))]

# ERROR - Standalone
x := 10  # SyntaxError
```

### 9.2 - Scope của biến

```python
# Biến được tạo có scope của block chứa nó
if (x := 10) > 5:
    print(x)  # OK - x = 10

print(x)  # OK - x vẫn tồn tại ngoài if
```

### 9.3 - Python 3.8+

Walrus operator chỉ hoạt động từ Python 3.8 trở lên:

```python
import sys
print(sys.version)  # Kiểm tra version

# Nếu < 3.8, sẽ gặp SyntaxError
```

## 10. Tổng kết

**Ưu điểm:**
- Code ngắn gọn hơn
- Giảm code lặp
- Tăng hiệu suất (tính 1 lần thay vì nhiều lần)
- Dễ đọc (trong nhiều trường hợp)

**Nhược điểm:**
- Có thể làm code khó hiểu nếu lạm dụng
- Chỉ hỗ trợ từ Python 3.8+
- Cần thời gian để làm quen

**Khi nào nên dùng:**
- Khi cần gán và kiểm tra điều kiện
- Khi muốn tránh tính toán 2 lần
- Khi muốn giảm code lặp trong vòng lặp
- Khi code vẫn dễ đọc sau khi dùng

**Khi nào KHÔNG nên dùng:**
- Khi làm code khó đọc
- Khi không mang lại lợi ích rõ ràng
- Khi team chưa quen với Python 3.8+

## Bài giảng trên YouTube

Cập nhật sau
