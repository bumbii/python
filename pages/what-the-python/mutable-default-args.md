# Mutable default arguments - Cái bẫy nguy hiểm!

## Hiện tượng lạ

```python
def add_item(item, lst=[]):
    lst.append(item)
    return lst

# Lần 1
print(add_item("apple"))   # ['apple'] ✅

# Lần 2
print(add_item("banana"))  # ['apple', 'banana'] ❌ What?!

# Lần 3
print(add_item("orange"))  # ['apple', 'banana', 'orange'] ❌❌
```

**What the Python?!** Tại sao list cứ tích lũy dữ liệu từ lần gọi trước?! 😱

## Giải thích

### Default arguments được tạo 1 LẦN DUY NHẤT

Khi Python định nghĩa function, default arguments được **evaluate 1 lần** và **tái sử dụng** cho mọi lần gọi!

```python
def add_item(item, lst=[]):  # [] được tạo 1 LẦN duy nhất khi define
    lst.append(item)
    return lst

# Mỗi lần gọi function DÙNG CHUNG list đó!
print(id(add_item.__defaults__[0]))  # Địa chỉ bộ nhớ

result1 = add_item("apple")
print(id(result1))  # Cùng địa chỉ!

result2 = add_item("banana")
print(id(result2))  # Cùng địa chỉ!

# Tất cả trỏ đến CÙNG 1 list!
```

### Xem default object

```python
def add_item(item, lst=[]):
    lst.append(item)
    return lst

# Xem default values
print(add_item.__defaults__)  # ([],)

# Gọi function
add_item("apple")
print(add_item.__defaults__)  # (['apple'],) <- Default đã thay đổi!

add_item("banana")
print(add_item.__defaults__)  # (['apple', 'banana'],) <- Tiếp tục thay đổi!
```

## Tại sao lại thiết kế như vậy?

### Lý do kỹ thuật

```python
# Default arguments evaluate LÚC DEFINE, không phải lúc CALL

def create_time(time=datetime.now()):  # now() gọi 1 lần lúc define!
    return time

# Cả 3 lần gọi đều trả về CÙNG 1 thời điểm
print(create_time())  # 2025-12-12 10:00:00
time.sleep(2)
print(create_time())  # 2025-12-12 10:00:00 <- GIỐNG NHAU!
```

### Performance benefit

```python
# Nếu evaluate mỗi lần gọi → chậm
# Với immutable: không ảnh hưởng gì
# Với mutable: gây bug!

def process(data, config={"mode": "fast"}):  # Dict tạo 1 lần
    # Nếu phải tạo dict mỗi lần gọi → chậm không cần thiết
    pass
```

## Các kiểu mutable gặp vấn đề

### List

```python
def append_to(element, lst=[]):  # ❌ BUG!
    lst.append(element)
    return lst

print(append_to(1))  # [1]
print(append_to(2))  # [1, 2] <- Oops!
```

### Dictionary

```python
def add_user(name, users={}):  # ❌ BUG!
    users[name] = True
    return users

print(add_user("Alice"))  # {'Alice': True}
print(add_user("Bob"))    # {'Alice': True, 'Bob': True} <- Oops!
```

### Set

```python
def add_to_set(item, s=set()):  # ❌ BUG!
    s.add(item)
    return s

print(add_to_set(1))  # {1}
print(add_to_set(2))  # {1, 2} <- Oops!
```

### Custom objects

```python
class Counter:
    def __init__(self):
        self.count = 0

def increment(counter=Counter()):  # ❌ BUG!
    counter.count += 1
    return counter.count

print(increment())  # 1
print(increment())  # 2 <- Oops! Cùng 1 object
print(increment())  # 3
```

## Giải pháp

### ✅ Solution 1: Dùng None

```python
def add_item(item, lst=None):  # ✅ ĐÚNG
    if lst is None:
        lst = []  # Tạo list MỚI mỗi lần gọi
    lst.append(item)
    return lst

print(add_item("apple"))   # ['apple']
print(add_item("banana"))  # ['banana'] ✅
print(add_item("orange"))  # ['orange'] ✅
```

### ✅ Solution 2: Sentinel value

```python
_sentinel = object()

def add_item(item, lst=_sentinel):
    if lst is _sentinel:
        lst = []
    lst.append(item)
    return lst
```

### ✅ Solution 3: Docstring với immutable

```python
def add_item(item, lst=None):
    """
    Add item to list.

    Args:
        item: Item to add
        lst: List to add to (default: empty list)
    """
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```

## Patterns đúng

### Pattern 1: None-default

```python
# Lists
def process_items(items=None):
    if items is None:
        items = []
    # ...

# Dicts
def configure(options=None):
    if options is None:
        options = {}
    # ...

# Sets
def unique_items(items=None):
    if items is None:
        items = set()
    # ...
```

### Pattern 2: Copy từ template

```python
DEFAULT_CONFIG = {"mode": "fast", "debug": False}

def process(config=None):
    if config is None:
        config = DEFAULT_CONFIG.copy()  # COPY!
    # Modify config safely
    config["timestamp"] = time.time()
    return config
```

### Pattern 3: Immutable defaults

```python
# ✅ OK - Immutable
def greet(name="World"):  # str là immutable
    return f"Hello, {name}"

def multiply(x, y=1):  # int là immutable
    return x * y

def process(data, mode="fast"):  # str là immutable
    pass
```

## Khi nào mutable default hữu ích?

### Use case: Caching

```python
def fibonacci(n, cache={}):  # Intentional shared cache!
    if n in cache:
        return cache[n]

    if n < 2:
        return n

    result = fibonacci(n-1, cache) + fibonacci(n-2, cache)
    cache[n] = result
    return result

# Cache được share giữa các lần gọi
print(fibonacci(10))  # Tính và cache
print(fibonacci.__defaults__[0])  # {0: 0, 1: 1, 2: 1, ...}
print(fibonacci(20))  # Dùng cached values
```

### Use case: Singleton pattern

```python
def get_connection(conn=[]):  # Intentional!
    if not conn:
        conn.append(create_expensive_connection())
    return conn[0]

# Dùng chung 1 connection
db1 = get_connection()
db2 = get_connection()
assert db1 is db2  # True - cùng connection
```

**⚠️ Lưu ý**: Những use cases này NÊN document rõ ràng!

## Bugs thực tế

### Bug 1: Flask route với default dict

```python
# SAI
@app.route('/api/data')
def get_data(filters={}):  # ❌ Shared dict!
    filters['timestamp'] = time.time()
    return query_db(filters)

# Request 1: filters = {'timestamp': 100}
# Request 2: filters = {'timestamp': 100, 'timestamp': 200} <- Lỗi!

# ĐÚNG
@app.route('/api/data')
def get_data(filters=None):  # ✅
    if filters is None:
        filters = {}
    filters['timestamp'] = time.time()
    return query_db(filters)
```

### Bug 2: Class method với default list

```python
class TaskManager:
    # SAI
    def add_task(self, task, tasks=[]):  # ❌
        tasks.append(task)
        return tasks

    # ĐÚNG
    def add_task(self, task, tasks=None):  # ✅
        if tasks is None:
            tasks = []
        tasks.append(task)
        return tasks
```

### Bug 3: Logging function

```python
# SAI
def log_event(event, history=[]):  # ❌ Shared history!
    history.append({
        'event': event,
        'time': time.time()
    })
    return history

# ĐÚNG
def log_event(event, history=None):  # ✅
    if history is None:
        history = []
    history.append({
        'event': event,
        'time': time.time()
    })
    return history
```

## Testing để phát hiện

```python
def test_add_item():
    # Test multiple calls
    result1 = add_item("apple")
    result2 = add_item("banana")

    # Nếu có bug, result2 sẽ chứa cả "apple"
    assert "apple" not in result2  # Sẽ fail nếu dùng lst=[]

    # Hoặc check length
    assert len(result2) == 1  # Should only have 1 item
```

## Pylint warning

```python
# Pylint sẽ cảnh báo:
def add_item(item, lst=[]):  # W0102: Dangerous default value [] as argument
    pass

# Cách tắt warning (KHÔNG khuyến khích)
def add_item(item, lst=[]):  # pylint: disable=dangerous-default-value
    # Chỉ nếu bạn biết mình đang làm gì!
    pass
```

## Best Practices

### ✅ Luôn làm

```python
# 1. Dùng None cho mutable defaults
def process(items=None):
    if items is None:
        items = []

# 2. Document nếu intentional
def fibonacci(n, cache={}):  # pylint: disable=dangerous-default-value
    """
    Fibonacci with caching.
    WARNING: cache is intentionally shared between calls.
    """
    pass

# 3. Type hints rõ ràng
from typing import List, Optional

def add_item(item: str, lst: Optional[List[str]] = None) -> List[str]:
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```

### ❌ Tránh làm

```python
# 1. Mutable defaults
def process(data=[]):  # ❌
    pass

# 2. Default từ function call
def log(msg, timestamp=datetime.now()):  # ❌ Evaluate 1 lần!
    pass

# 3. Default object creation
def init(config=Config()):  # ❌ Create 1 lần!
    pass
```

## Tóm tắt

| Default Type | Safe? | Example | Fix |
|--------------|-------|---------|-----|
| `lst=[]` | ❌ | Shared list | `lst=None` |
| `d={}` | ❌ | Shared dict | `d=None` |
| `s=set()` | ❌ | Shared set | `s=None` |
| `obj=Obj()` | ❌ | Shared object | `obj=None` |
| `x=0` | ✅ | Immutable | OK |
| `name=""` | ✅ | Immutable | OK |
| `flag=True` | ✅ | Immutable | OK |
| `t=(1,2)` | ✅ | Immutable | OK |

## Ghi nhớ

> **KHÔNG BAO GIỜ dùng mutable objects làm default arguments!**
> - ❌ `lst=[]`, `d={}`, `s=set()`, `obj=Obj()`
> - ✅ Luôn dùng `None` và tạo mới trong function
> - ⚠️ Default được evaluate **1 LẦN** lúc define, **KHÔNG phải** mỗi lần gọi
> - 🐛 Đây là **BUG CỰC KỲ PHỔ BIẾN** với Python beginners
> - 🔧 Pylint sẽ warning: `W0102: Dangerous default value`

**Pattern an toàn**:
```python
def my_func(arg, mutable_arg=None):
    if mutable_arg is None:
        mutable_arg = []  # or {} or set()
    # Use mutable_arg safely
```

**Nhớ**: Default arguments = **function attributes**, không phải local variables!
