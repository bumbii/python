# UnboundLocalError - Biến toàn cục bỗng không tồn tại?

## Hiện tượng lạ

```python
count = 0

def increment():
    print(count)  # Đọc biến toàn cục
    count += 1    # UnboundLocalError! ❌

increment()
```

**Error**: `UnboundLocalError: local variable 'count' referenced before assignment`

**What the Python?!** Tại sao dòng đầu đọc được `count` nhưng dòng sau lại lỗi?! 😱

## Giải thích

### Python xác định scope LÚC COMPILE

```python
count = 0

def increment():
    print(count)  # Python thấy dòng dưới có 'count ='
    count += 1    # → Coi count là LOCAL variable
    # → Nhưng chưa được assign → UnboundLocalError
```

Python scan toàn bộ function và thấy `count = ...` → coi `count` là **local variable** cho cả function!

### Giải pháp: Khai báo `global`

```python
count = 0

def increment():
    global count  # Khai báo count là global
    print(count)  # OK
    count += 1    # OK ✅

increment()
print(count)  # 1
```

## Các trường hợp tương tự

### Với list

```python
# ❌ SAI
items = []

def add_item(item):
    items.append(item)  # OK - Chỉ modify, không assign
    items = items + [item]  # ❌ UnboundLocalError!

# ✅ ĐÚNG
items = []

def add_item(item):
    items.append(item)  # ✅ Modify in-place OK
```

### Với nested scopes

```python
def outer():
    x = 0

    def inner():
        print(x)  # OK - Đọc từ outer
        x += 1    # ❌ UnboundLocalError!

    inner()

# ✅ ĐÚNG - Dùng nonlocal
def outer():
    x = 0

    def inner():
        nonlocal x  # Khai báo x từ outer scope
        print(x)
        x += 1     # ✅

    inner()
    print(x)  # 1
```

## global vs nonlocal

### `global` - Biến toàn cục

```python
x = 0

def modify():
    global x  # x ở global scope
    x = 10

modify()
print(x)  # 10
```

### `nonlocal` - Biến từ outer function

```python
def outer():
    x = 0

    def inner():
        nonlocal x  # x từ outer(), không phải global
        x = 10

    inner()
    print(x)  # 10
```

## Best Practices

### ✅ Tránh dùng global

```python
# ❌ Tránh
count = 0

def increment():
    global count
    count += 1

# ✅ Tốt hơn - Dùng class
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

counter = Counter()
counter.increment()
```

### ✅ Return giá trị mới

```python
# ✅ Functional style
def increment(count):
    return count + 1

count = 0
count = increment(count)
```

## Tóm tắt

> **UnboundLocalError xảy ra khi:**
> - ❌ Đọc biến trước khi assign trong cùng scope
> - 🔧 Fix: Dùng `global` hoặc `nonlocal`
> - ✅ Better: Tránh dùng global, dùng return/class thay thế

**Pattern**:
```python
# Global
global var_name

# Nonlocal
nonlocal var_name
```
