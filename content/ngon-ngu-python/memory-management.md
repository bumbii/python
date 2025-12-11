# Quản lý bộ nhớ trong Python (Memory Management)

Python tự động quản lý bộ nhớ thông qua cơ chế **Reference Counting** và **Garbage Collection**. Hiểu cách Python quản lý bộ nhớ giúp bạn viết code hiệu quả hơn và tránh memory leaks.

## 1. Cách Python lưu trữ dữ liệu

### Everything is an Object

Trong Python, mọi thứ đều là object - kể cả số, chuỗi, hàm, class.

```python
# Tất cả đều là objects
number = 42
text = "Hello"
my_list = [1, 2, 3]

# Kiểm tra ID của object (địa chỉ bộ nhớ)
print(id(number))   # Ví dụ: 140705844567328
print(id(text))     # Ví dụ: 2234567891234
print(id(my_list))  # Ví dụ: 2234567898765

# Mỗi object có type
print(type(number))  # <class 'int'>
print(type(text))    # <class 'str'>
print(type(my_list)) # <class 'list'>
```

### Biến là References (tham chiếu)

Biến trong Python không chứa giá trị trực tiếp, mà chứa **tham chiếu** (reference) đến object.

```python
# 'a' tham chiếu đến object số 100
a = 100

# 'b' tham chiếu đến cùng object với 'a'
b = a

print(id(a))  # 140705844567328
print(id(b))  # 140705844567328 (cùng ID)
print(a is b) # True (cùng object)

# Gán lại 'a' - tạo tham chiếu mới
a = 200
print(id(a))  # 140705844567360 (ID khác)
print(id(b))  # 140705844567328 (vẫn giữ ID cũ)
print(a is b) # False
```

### Minh họa với List (Mutable Object)

```python
# list1 tham chiếu đến một list object
list1 = [1, 2, 3]
print(id(list1))  # Ví dụ: 2234567898765

# list2 tham chiếu đến CÙNG object với list1
list2 = list1
print(id(list2))  # 2234567898765 (cùng ID)

# Thay đổi qua list2
list2.append(4)

# list1 cũng thay đổi (vì cùng object)
print(list1)  # [1, 2, 3, 4]
print(list2)  # [1, 2, 3, 4]

# Tạo list mới (copy)
list3 = list1.copy()
print(id(list3))  # ID khác (object mới)

list3.append(5)
print(list1)  # [1, 2, 3, 4] (không đổi)
print(list3)  # [1, 2, 3, 4, 5]
```

## 2. Reference Counting (Đếm tham chiếu)

### Khái niệm

Python theo dõi số lượng tham chiếu đến mỗi object. Khi số tham chiếu về 0, object được giải phóng.

```python
import sys

# Tạo object
a = [1, 2, 3]
print(sys.getrefcount(a))  # 2 (1 từ 'a', 1 từ getrefcount)

# Tạo thêm tham chiếu
b = a
print(sys.getrefcount(a))  # 3 (a, b, getrefcount)

c = a
print(sys.getrefcount(a))  # 4 (a, b, c, getrefcount)

# Xóa tham chiếu
del b
print(sys.getrefcount(a))  # 3 (a, c, getrefcount)

del c
print(sys.getrefcount(a))  # 2 (a, getrefcount)

# Khi del a, reference count = 0 → object bị xóa
```

### Ví dụ thực tế

```python
import sys

# Object với 1 reference
x = "Hello"
print(sys.getrefcount(x))  # Có thể > 2 (Python cache chuỗi)

# Object trong container
my_list = [1, 2, 3]
container = [my_list, my_list, my_list]
print(sys.getrefcount(my_list))  # 5 (my_list, 3 refs trong container, getrefcount)

# Xóa container
del container
print(sys.getrefcount(my_list))  # 2 (chỉ còn my_list và getrefcount)
```

## 3. Garbage Collection (Thu gom rác)

### Reference Counting không đủ

Reference counting không xử lý được **circular references** (tham chiếu vòng).

```python
import sys

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# Tạo circular reference
node1 = Node(1)
node2 = Node(2)

node1.next = node2  # node1 → node2
node2.next = node1  # node2 → node1 (vòng!)

print(sys.getrefcount(node1))  # 3 (node1, node2.next, getrefcount)
print(sys.getrefcount(node2))  # 3 (node2, node1.next, getrefcount)

# Xóa node1 và node2
del node1
del node2

# Reference count vẫn > 0 (vì tham chiếu lẫn nhau)
# → Reference counting KHÔNG giải phóng được
# → Cần Garbage Collector
```

### Garbage Collector tự động

Python có bộ **Garbage Collector** tự động phát hiện và xóa circular references.

```python
import gc

# Xem cấu hình garbage collector
print(gc.get_threshold())  # (700, 10, 10)
# 700: số object mới trước khi chạy generation 0 collection
# 10: tần suất collection cho generation 1
# 10: tần suất collection cho generation 2

# Xem số lượng collections đã chạy
print(gc.get_count())  # (số object, số collections gen0, gen1, gen2)

# Chạy garbage collection thủ công
collected = gc.collect()
print(f"Collected {collected} objects")

# Kiểm tra GC có bật không
print(gc.isenabled())  # True

# Tắt GC (KHÔNG KHUYẾN KHÍCH)
# gc.disable()

# Bật lại GC
# gc.enable()
```

### Generations trong Garbage Collector

Python GC sử dụng 3 generations (thế hệ):

```python
import gc

# Generation 0: Objects mới tạo
# Generation 1: Objects sống sót qua collection gen 0
# Generation 2: Objects sống sót qua collection gen 1

# Xem thống kê
stats = gc.get_stats()
for i, stat in enumerate(stats):
    print(f"Generation {i}: {stat}")

# Ví dụ output:
# Generation 0: {'collections': 45, 'collected': 1234, 'uncollectable': 0}
# Generation 1: {'collections': 4, 'collected': 56, 'uncollectable': 0}
# Generation 2: {'collections': 0, 'collected': 0, 'uncollectable': 0}
```

## 4. Mutable vs Immutable Objects

### Immutable Objects (Không thay đổi được)

Immutable objects không thể thay đổi sau khi tạo. Python tối ưu bằng cách **tái sử dụng** object.

```python
# Số nguyên nhỏ (-5 đến 256) được cache
a = 10
b = 10
print(a is b)  # True (cùng object)
print(id(a) == id(b))  # True

# Số lớn hơn không được cache (có thể khác nhau)
x = 1000
y = 1000
print(x is y)  # False (Python 3.8+: có thể True trong cùng dòng)
print(id(x) == id(y))  # False

# Chuỗi ngắn được interned (cache)
s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (cùng object)

# Chuỗi có ký tự đặc biệt có thể không được interned
s3 = "hello world!"
s4 = "hello world!"
print(s3 is s4)  # Có thể False (tùy Python version)

# Tuple là immutable
t = (1, 2, 3)
# t[0] = 10  # Lỗi: 'tuple' object does not support item assignment
```

### Mutable Objects (Thay đổi được)

Mutable objects có thể thay đổi mà không tạo object mới.

```python
# List là mutable
list1 = [1, 2, 3]
id_before = id(list1)

list1.append(4)  # Thay đổi object hiện tại
id_after = id(list1)

print(id_before == id_after)  # True (vẫn là object cũ)

# Dictionary là mutable
dict1 = {"a": 1}
id_before = id(dict1)

dict1["b"] = 2
id_after = id(dict1)

print(id_before == id_after)  # True

# Set là mutable
set1 = {1, 2, 3}
id_before = id(set1)

set1.add(4)
id_after = id(set1)

print(id_before == id_after)  # True
```

### Ảnh hưởng đến Memory

```python
# Immutable: Tạo object mới → tốn memory nếu thay đổi nhiều
s = "a"
for i in range(5):
    s += "a"  # Tạo string mới mỗi lần
    print(id(s))  # ID khác nhau mỗi lần

# Mutable: Thay đổi object hiện tại → tiết kiệm memory
lst = ["a"]
id_original = id(lst)
for i in range(5):
    lst.append("a")  # Không tạo object mới
    print(id(lst) == id_original)  # True mọi lần
```

## 5. Copy vs Deep Copy

### Shallow Copy (Copy nông)

Copy nông tạo object mới nhưng **không copy** các object bên trong.

```python
import copy

# List lồng nhau
original = [[1, 2], [3, 4]]

# Shallow copy
shallow = copy.copy(original)
# Hoặc: shallow = original.copy()
# Hoặc: shallow = original[:]

print(id(original))  # ID khác
print(id(shallow))   # ID khác

# Nhưng các list bên trong vẫn là cùng object
print(id(original[0]))  # ID giống
print(id(shallow[0]))   # ID giống
print(original[0] is shallow[0])  # True

# Thay đổi list con
shallow[0].append(5)

print(original)  # [[1, 2, 5], [3, 4]] - BỊ THAY ĐỔI!
print(shallow)   # [[1, 2, 5], [3, 4]]
```

### Deep Copy (Copy sâu)

Deep copy tạo object mới và **copy đệ quy** tất cả objects bên trong.

```python
import copy

# List lồng nhau
original = [[1, 2], [3, 4]]

# Deep copy
deep = copy.deepcopy(original)

print(id(original))     # ID khác
print(id(deep))         # ID khác

# Các list bên trong cũng khác nhau
print(id(original[0]))  # ID khác
print(id(deep[0]))      # ID khác
print(original[0] is deep[0])  # False

# Thay đổi list con
deep[0].append(5)

print(original)  # [[1, 2], [3, 4]] - KHÔNG THAY ĐỔI
print(deep)      # [[1, 2, 5], [3, 4]]
```

### Ví dụ thực tế

```python
import copy

class Person:
    def __init__(self, name, hobbies):
        self.name = name
        self.hobbies = hobbies  # list

# Original
alice = Person("Alice", ["reading", "coding"])

# Shallow copy
alice_shallow = copy.copy(alice)
alice_shallow.name = "Alice Clone"  # OK - string immutable
alice_shallow.hobbies.append("gaming")  # ẢNH HƯỞNG alice!

print(alice.name)     # Alice (không đổi)
print(alice.hobbies)  # ['reading', 'coding', 'gaming'] - BỊ THAY ĐỔI!

# Deep copy
bob = Person("Bob", ["swimming", "running"])
bob_deep = copy.deepcopy(bob)
bob_deep.name = "Bob Clone"
bob_deep.hobbies.append("cycling")  # KHÔNG ảnh hưởng bob

print(bob.name)     # Bob (không đổi)
print(bob.hobbies)  # ['swimming', 'running'] - KHÔNG THAY ĐỔI
print(bob_deep.hobbies)  # ['swimming', 'running', 'cycling']
```

## 6. Memory Profiling

### Đo kích thước object

```python
import sys

# Kích thước của object
print(sys.getsizeof(1))           # 28 bytes (int)
print(sys.getsizeof("a"))         # 50 bytes (str)
print(sys.getsizeof([]))          # 56 bytes (empty list)
print(sys.getsizeof([1, 2, 3]))   # 80 bytes (list with 3 items)
print(sys.getsizeof({}))          # 64 bytes (empty dict)

# Chú ý: getsizeof() chỉ đo kích thước object,
# KHÔNG bao gồm objects mà nó tham chiếu đến

my_list = [[1, 2, 3], [4, 5, 6]]
print(sys.getsizeof(my_list))  # Chỉ đo list ngoài
# Không tính kích thước của [1, 2, 3] và [4, 5, 6]
```

### Đo tổng kích thước (bao gồm nested objects)

```python
import sys

def get_size(obj, seen=None):
    """Tính tổng kích thước bao gồm cả nested objects"""
    size = sys.getsizeof(obj)
    if seen is None:
        seen = set()

    obj_id = id(obj)
    if obj_id in seen:
        return 0

    seen.add(obj_id)

    if isinstance(obj, dict):
        size += sum([get_size(v, seen) for v in obj.values()])
        size += sum([get_size(k, seen) for k in obj.keys()])
    elif hasattr(obj, '__dict__'):
        size += get_size(obj.__dict__, seen)
    elif hasattr(obj, '__iter__') and not isinstance(obj, (str, bytes, bytearray)):
        size += sum([get_size(i, seen) for i in obj])

    return size

# Test
data = {
    'numbers': [1, 2, 3, 4, 5],
    'nested': {
        'list': [10, 20, 30],
        'dict': {'a': 1, 'b': 2}
    }
}

print(f"Shallow size: {sys.getsizeof(data)} bytes")
print(f"Total size: {get_size(data)} bytes")
```

## 7. Best Practices

### ✅ NÊN làm

```python
# 1. Xóa biến không dùng nữa (giải phóng memory)
big_list = list(range(1000000))
# ... xử lý xong
del big_list

# 2. Dùng generator thay vì list (tiết kiệm memory)
# ❌ Tốn memory
squares_list = [x**2 for x in range(1000000)]

# ✅ Tiết kiệm memory
squares_gen = (x**2 for x in range(1000000))

# 3. Đọc file lớn từng dòng
# ❌ Tốn memory
with open('large_file.txt') as f:
    lines = f.readlines()  # Đọc hết vào memory

# ✅ Tiết kiệm memory
with open('large_file.txt') as f:
    for line in f:  # Đọc từng dòng
        process(line)

# 4. Dùng __slots__ cho class nhiều instances
class Point:
    __slots__ = ['x', 'y']  # Giảm memory consumption

    def __init__(self, x, y):
        self.x = x
        self.y = y

# 5. Clear cache khi không cần
import functools

@functools.lru_cache(maxsize=128)
def expensive_function(n):
    return n ** 2

# Khi không cần cache nữa
expensive_function.cache_clear()
```

### ❌ KHÔNG NÊN làm

```python
# 1. Tạo list lớn không cần thiết
# ❌
result = []
for i in range(1000000):
    result.append(i * 2)

# ✅ Dùng generator
def generate_results():
    for i in range(1000000):
        yield i * 2

# 2. Circular references không cần thiết
# ❌
class Node:
    def __init__(self, value):
        self.value = value
        self.parent = None
        self.children = []

# Cẩn thận với parent/children references

# 3. Giữ references đến objects lớn
# ❌
cache = {}
def process_data(data):
    cache[id(data)] = data  # Giữ reference → không giải phóng
    # ...
```

## 8. Bài tập thực hành

### Bài 1: So sánh shallow vs deep copy

```python
import copy

original = {
    'name': 'John',
    'scores': [85, 90, 92],
    'address': {
        'city': 'NYC',
        'zipcode': '10001'
    }
}

shallow = copy.copy(original)
deep = copy.deepcopy(original)

# Thay đổi scores
shallow['scores'].append(95)

print("Original:", original['scores'])
print("Shallow:", shallow['scores'])
print("Deep:", deep['scores'])

# Kết quả:
# Original: [85, 90, 92, 95] - BỊ THAY ĐỔI
# Shallow: [85, 90, 92, 95]
# Deep: [85, 90, 92] - KHÔNG THAY ĐỔI
```

### Bài 2: Memory-efficient data processing

```python
import sys

# ❌ Không hiệu quả
def process_numbers_list(n):
    numbers = [x for x in range(n)]
    squares = [x**2 for x in numbers]
    return sum(squares)

# ✅ Hiệu quả hơn
def process_numbers_gen(n):
    return sum(x**2 for x in range(n))

n = 1000000

# So sánh memory
list_result = process_numbers_list(n)
gen_result = process_numbers_gen(n)

print(f"Results equal: {list_result == gen_result}")
```

## Tổng kết

- **Reference Counting**: Python đếm số tham chiếu đến mỗi object
- **Garbage Collection**: Tự động phát hiện và xóa circular references
- **Immutable objects**: int, float, str, tuple, frozenset - không thay đổi được
- **Mutable objects**: list, dict, set - có thể thay đổi
- **Shallow copy**: Copy object nhưng không copy nested objects
- **Deep copy**: Copy đệ quy tất cả objects
- **Best practices**:
  - Xóa biến không dùng với `del`
  - Dùng generators thay vì lists khi xử lý dữ liệu lớn
  - Cẩn thận với circular references
  - Sử dụng `__slots__` cho classes có nhiều instances
  - Đọc file lớn từng dòng thay vì đọc hết vào memory
