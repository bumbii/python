# Integer caching - 256 is 256 nhưng 257 is not 257?

## Hiện tượng lạ

```python
# Số nhỏ
a = 256
b = 256
print(a is b)  # True

# Số lớn hơn 1 chút
x = 257
y = 257
print(x is y)  # False (trong Python interactive)
              # True (trong file .py)
```

**What the Python?!** Tại sao `256 is 256` là True nhưng `257 is 257` là False?! 🤔

Và tại sao kết quả lại khác nhau giữa interactive mode và file?!

## Giải thích

### Integer Caching/Interning

Python **pre-allocates** (tạo sẵn) integers từ **-5 đến 256** khi khởi động. Tất cả references đến các số này đều trỏ đến **cùng một object**.

```python
# CPython implementation detail
# Integers from -5 to 256 are cached

a = 100
b = 100
print(a is b)  # True - Cùng object được cache

x = 1000
y = 1000
print(x is y)  # Có thể True hoặc False tùy context
```

### Tại sao -5 đến 256?

Đây là quyết định dựa trên thống kê:
- **Số nhỏ** (-5 đến 256) được dùng **rất nhiều** trong code
- **Loop indices**: `for i in range(100)`
- **Array indices**: `arr[0]`, `arr[1]`, ...
- **Status codes**: HTTP 200, 404, ...
- **ASCII values**: 0-127

Việc cache giúp:
- ✅ Tiết kiệm bộ nhớ
- ✅ Tăng tốc độ so sánh
- ✅ Giảm garbage collection

## Test với các số khác nhau

```python
# Trong Python interactive mode:

# -6 (ngoài cache range)
a = -6
b = -6
print(a is b)  # False

# -5 (trong cache range)
a = -5
b = -5
print(a is b)  # True

# 0 (trong cache range)
a = 0
b = 0
print(a is b)  # True

# 256 (trong cache range)
a = 256
b = 256
print(a is b)  # True

# 257 (ngoài cache range)
a = 257
b = 257
print(a is b)  # False (trong interactive mode)
```

## Interactive Mode vs Script File

### Interactive Mode (Python REPL)

```python
# Trong Python REPL
>>> a = 257
>>> b = 257
>>> a is b
False  # Tạo 2 objects riêng biệt

# Mỗi lần Enter là 1 statement riêng
```

### Script File (.py)

```python
# Trong file test.py
a = 257
b = 257
print(a is b)  # True!

# Compile-time optimization
# Compiler thấy cùng 1 số trong cùng scope → dùng chung
```

### Tại sao khác nhau?

```python
# Interactive: Mỗi dòng compile riêng
>>> a = 257  # Compile và execute
>>> b = 257  # Compile và execute (tạo object mới)

# File: Cả file compile 1 lần
# Compiler optimize: "257 xuất hiện 2 lần trong cùng scope"
# → Dùng chung 1 object
```

## Kiểm tra với id()

```python
# Kiểm tra địa chỉ bộ nhớ
a = 256
b = 256
print(f"a: {id(a)}")  # Ví dụ: 4352451504
print(f"b: {id(b)}")  # 4352451504 - GIỐNG NHAU!

x = 257
y = 257
print(f"x: {id(x)}")  # Ví dụ: 140234567890
print(f"y: {id(y)}")  # 140234567891 - KHÁC NHAU! (trong REPL)
```

## Scope ảnh hưởng đến caching

### Cùng scope - Có thể optimize

```python
def test_same_scope():
    a = 1000
    b = 1000
    print(a is b)  # True - Cùng scope, compile-time optimization

test_same_scope()
```

### Khác scope - Không optimize

```python
def create_number():
    return 1000

a = create_number()
b = create_number()
print(a is b)  # False - Khác scope, tạo mới mỗi lần
```

## Ví dụ thực tế

### Example 1: Loop indices

```python
# Tại sao loop nhanh với range nhỏ
for i in range(100):  # i từ 0-99, tất cả đều cached
    # Không tạo object mới
    # So sánh i rất nhanh
    pass
```

### Example 2: Status codes

```python
HTTP_OK = 200  # Cached
HTTP_NOT_FOUND = 404  # Ngoài cache

# Nhiều requests với status 200
# → Tất cả dùng chung 1 object → Tiết kiệm RAM
responses = [{"status": 200} for _ in range(1000)]
```

### Example 3: Array indexing

```python
arr = [1, 2, 3, 4, 5]

# Indices 0-4 đều cached
for i in range(len(arr)):  # i = 0, 1, 2, 3, 4
    print(arr[i])  # Không tạo object mới cho i
```

## Khi nào dùng `is` vs `==` với integers?

### ✅ Luôn dùng `==` cho integers

```python
# ✅ ĐÚNG - So sánh giá trị
age = 25
if age == 18:
    print("Just turned adult")

count = 1000
if count == 1000:
    print("Reached milestone")
```

### ❌ KHÔNG dùng `is` với integers

```python
# ❌ SAI - Unreliable
score = get_score()  # Returns 100
if score is 100:  # Bug! Có thể False nếu 100 từ function
    print("Perfect!")

# ✅ ĐÚNG
if score == 100:
    print("Perfect!")
```

### ⚠️ Exception: So sánh với -5 đến 256 (không khuyến khích)

```python
# Technically works nhưng KHÔNG NÊN làm
count = 0
if count is 0:  # Works vì 0 được cached
    print("Empty")

# ✅ Tốt hơn
if count == 0:  # Rõ ràng, an toàn hơn
    print("Empty")
```

## Lỗi phổ biến

### Bug 1: Dùng `is` thay vì `==`

```python
# SAI
def check_status_code(code):
    if code is 200:  # ❌ Works với 200 nhưng unreliable
        return "OK"
    elif code is 404:  # ❌ Works với 404 nhưng unreliable
        return "Not Found"

# Có thể fail nếu code từ computation
status = 100 + 100  # = 200
print(check_status_code(status))  # Có thể không work

# ĐÚNG
def check_status_code(code):
    if code == 200:  # ✅
        return "OK"
    elif code == 404:  # ✅
        return "Not Found"
```

### Bug 2: Rely on caching behavior

```python
# SAI - Assume numbers được cached
def optimize_comparison(n):
    magic_number = 100
    if n is magic_number:  # ❌ Unreliable logic
        return "Magic!"

# Có thể fail
result = calculate_something()  # Returns 100
print(optimize_comparison(result))  # Có thể không match
```

### Bug 3: Singleton pattern với integers

```python
# SAI - Không nên làm
class Counter:
    _instance = 0  # ❌ Dùng int làm singleton?

    def __new__(cls):
        if cls._instance is 0:  # ❌ Bug potential
            cls._instance = 1
            return super().__new__(cls)
        return None

# ĐÚNG - Dùng None cho singleton
class Counter:
    _instance = None  # ✅

    def __new__(cls):
        if cls._instance is None:  # ✅
            cls._instance = super().__new__(cls)
        return cls._instance
```

## Testing caching behavior

```python
def test_integer_caching():
    print("Testing integer caching:")

    # Test cached range
    for n in [-6, -5, 0, 1, 100, 256, 257]:
        a = n
        b = n
        is_same = a is b
        cached = "CACHED" if is_same else "NOT CACHED"
        print(f"{n:4d}: {cached}")

# Run test
test_integer_caching()
```

Output (trong interactive mode):
```
Testing integer caching:
  -6: NOT CACHED
  -5: CACHED
   0: CACHED
   1: CACHED
 100: CACHED
 256: CACHED
 257: NOT CACHED
```

## CPython Implementation Detail

```python
# Trong CPython source code (C):
# Objects/longobject.c

# Small integers array
#define NSMALLNEGINTS    5  # -5 đến -1
#define NSMALLPOSINTS  257  # 0 đến 256

# Pre-allocated khi Python khởi động
static PyLongObject small_ints[NSMALLNEGINTS + NSMALLPOSINTS];
```

**⚠️ Lưu ý**: Đây là **CPython implementation detail**, không phải Python language specification. Các implementations khác (PyPy, Jython, IronPython) có thể khác.

## Tác động performance

### Với cached integers

```python
import timeit

# Fast - Cached
def test_cached():
    a = 100
    b = 100
    return a is b

print(timeit.timeit(test_cached, number=10000000))
# Rất nhanh - chỉ so sánh pointer
```

### Với non-cached integers

```python
# Slower - Not cached
def test_not_cached():
    a = 1000
    b = 1000
    return a is b

print(timeit.timeit(test_not_cached, number=10000000))
# Có thể tạo objects mới (tùy context)
```

### Best practice: Luôn dùng `==`

```python
# Consistent performance
def test_equality():
    a = 1000
    b = 1000
    return a == b

# Luôn reliable, performance vẫn tốt
```

## Tóm tắt

| Số | Cached? | `is` behavior | Lý do |
|----|---------|---------------|-------|
| -6 | ❌ | False | Ngoài range |
| -5 | ✅ | True | Trong range |
| 0 | ✅ | True | Trong range |
| 100 | ✅ | True | Trong range |
| 256 | ✅ | True | Trong range |
| 257 | ⚠️ | Tùy context | Ngoài range |
| 1000 | ⚠️ | Tùy context | Ngoài range |

## Best Practices

### ✅ Nên làm

```python
# 1. Luôn dùng == cho integers
if count == 100:  # ✅
    pass

if status == 200:  # ✅
    pass

# 2. Chỉ dùng is với None
if value is None:  # ✅
    pass

# 3. Hiểu caching để debug, không để rely on
# Debug: Tại sao a is b?
# Answer: Có thể do caching
```

### ❌ Tránh làm

```python
# 1. Dùng is với integers
if x is 100:  # ❌
    pass

# 2. Rely on caching behavior
if a is b:  # ❌ Với integers
    print("Same value")

# 3. Assume caching range
# ❌ Không assume implementation details
```

## Ghi nhớ

> **Integer caching (-5 to 256) là optimization, không phải feature!**
> - ✅ Luôn dùng `==` để so sánh integers
> - ❌ Đừng dùng `is` với integers
> - ⚠️ Caching behavior là CPython implementation detail
> - 🔍 Range: **-5 đến 256** (inclusive)

**Quy tắc vàng**:
- `is` → Identity (cùng object?)
- `==` → Equality (cùng giá trị?)

**Với integers, hầu như luôn muốn dùng `==`!**
