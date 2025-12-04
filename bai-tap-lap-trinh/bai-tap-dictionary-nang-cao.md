---
description: Các bài tập về Dictionary - Nâng cao
icon: book
---

# Bài tập Dictionary - Nâng cao

1. Viết hàm **`merge_dicts`** gộp nhiều dictionaries thành một, xử lý conflicts (key trùng).

```python
def merge_dicts(*dicts, strategy="last"):
    # strategy: "last" (giữ giá trị cuối), "first" (giữ giá trị đầu), "list" (gộp thành list)
    pass

# Test
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict3 = {"c": 5, "d": 6}

print(merge_dicts(dict1, dict2, dict3))  # {"a": 1, "b": 3, "c": 5, "d": 6}
print(merge_dicts(dict1, dict2, dict3, strategy="list"))  # {"b": [2, 3], "c": [4, 5], ...}
```

2. Viết hàm **`invert_dict`** đảo ngược dictionary (values thành keys).

```python
def invert_dict(d):
    # Xử lý trường hợp values trùng nhau -> list of keys
    pass

# Test
original = {"a": 1, "b": 2, "c": 1}
inverted = invert_dict(original)
print(inverted)  # {1: ["a", "c"], 2: ["b"]}
```

3. Viết hàm **`flatten_dict`** làm phẳng nested dictionary.

```python
def flatten_dict(d, parent_key="", sep="."):
    # Chuyển {"a": {"b": {"c": 1}}} -> {"a.b.c": 1}
    pass

# Test
nested = {
    "user": {
        "name": "Alice",
        "address": {
            "city": "Hanoi",
            "country": "Vietnam"
        }
    }
}
flat = flatten_dict(nested)
print(flat)  # {"user.name": "Alice", "user.address.city": "Hanoi", ...}
```

4. Viết hàm **`unflatten_dict`** chuyển flat dictionary về nested.

```python
def unflatten_dict(d, sep="."):
    # Ngược lại với flatten_dict
    pass

# Test
flat = {"user.name": "Alice", "user.address.city": "Hanoi"}
nested = unflatten_dict(flat)
print(nested)
```

5. Viết hàm **`dict_diff`** tìm khác biệt giữa 2 dictionaries.

```python
def dict_diff(dict1, dict2):
    # Trả về: added, removed, modified, unchanged
    pass

# Test
old = {"a": 1, "b": 2, "c": 3}
new = {"a": 1, "b": 5, "d": 4}
diff = dict_diff(old, new)
print(diff)
# {
#     "added": {"d": 4},
#     "removed": {"c": 3},
#     "modified": {"b": (2, 5)},
#     "unchanged": {"a": 1}
# }
```

6. Viết hàm **`deep_get`** truy cập nested dictionary an toàn với default value.

```python
def deep_get(d, keys, default=None):
    # keys có thể là "user.address.city" hoặc ["user", "address", "city"]
    pass

# Test
data = {"user": {"address": {"city": "Hanoi"}}}
print(deep_get(data, "user.address.city"))  # "Hanoi"
print(deep_get(data, "user.phone", "N/A"))  # "N/A"
```

7. Viết hàm **`deep_set`** set giá trị trong nested dictionary, tự động tạo keys nếu chưa có.

```python
def deep_set(d, keys, value):
    # Tự động tạo nested dicts nếu cần
    pass

# Test
data = {}
deep_set(data, "user.address.city", "Hanoi")
print(data)  # {"user": {"address": {"city": "Hanoi"}}}
```

8. Viết hàm **`filter_dict`** lọc dictionary theo điều kiện.

```python
def filter_dict(d, predicate):
    # predicate: function nhận (key, value), trả về True/False
    pass

# Test
data = {"a": 1, "b": 2, "c": 3, "d": 4}
result = filter_dict(data, lambda k, v: v > 2)
print(result)  # {"c": 3, "d": 4}
```

9. Viết hàm **`map_dict`** áp dụng function lên values hoặc keys.

```python
def map_dict(d, func, target="values"):
    # target: "values", "keys", hoặc "both"
    pass

# Test
data = {"a": 1, "b": 2, "c": 3}
result = map_dict(data, lambda v: v * 2, target="values")
print(result)  # {"a": 2, "b": 4, "c": 6}
```

10. Viết hàm **`group_by`** nhóm list of dicts theo một key.

```python
def group_by(items, key):
    # Trả về dict: {key_value: [items with that key_value]}
    pass

# Test
students = [
    {"name": "Alice", "class": "5A", "score": 90},
    {"name": "Bob", "class": "5B", "score": 85},
    {"name": "Charlie", "class": "5A", "score": 95}
]
by_class = group_by(students, "class")
print(by_class)
# {
#     "5A": [{"name": "Alice", ...}, {"name": "Charlie", ...}],
#     "5B": [{"name": "Bob", ...}]
# }
```

11. Viết hàm **`dict_path_exists`** kiểm tra path có tồn tại trong nested dict không.

```python
def dict_path_exists(d, path):
    # path: "user.address.city" hoặc ["user", "address", "city"]
    pass

# Test
data = {"user": {"name": "Alice", "address": {"city": "Hanoi"}}}
print(dict_path_exists(data, "user.address.city"))  # True
print(dict_path_exists(data, "user.phone"))  # False
```

12. Viết hàm **`dict_to_xml`** chuyển dictionary thành XML string (đơn giản).

```python
def dict_to_xml(d, root_tag="root"):
    # Chuyển {"name": "Alice", "age": 25} -> <root><name>Alice</name><age>25</age></root>
    pass

# Test
data = {"name": "Alice", "age": 25}
xml = dict_to_xml(data, "user")
print(xml)
```

13. Viết hàm **`normalize_dict`** chuẩn hóa dictionary (lowercase keys, strip values, etc.).

```python
def normalize_dict(d, lowercase_keys=True, strip_strings=True):
    pass

# Test
data = {"Name ": "Alice  ", "AGE": "25"}
normalized = normalize_dict(data)
print(normalized)  # {"name": "Alice", "age": "25"}
```

14. Viết class **`DotDict`** cho phép truy cập dictionary như object attributes.

```python
class DotDict:
    def __init__(self, d):
        # d là dictionary
        pass

    # Implement __getattr__, __setattr__, __delattr__

# Test
data = DotDict({"name": "Alice", "age": 25})
print(data.name)  # "Alice"
data.city = "Hanoi"
print(data.city)  # "Hanoi"
```

15. Viết hàm **`dict_query`** query dictionary giống SQL.

```python
def dict_query(data, select=None, where=None, order_by=None):
    # data: list of dicts
    # select: list of keys to return
    # where: function filter
    # order_by: key to sort
    pass

# Test
students = [
    {"name": "Alice", "age": 20, "score": 90},
    {"name": "Bob", "age": 22, "score": 85},
    {"name": "Charlie", "age": 21, "score": 95}
]

result = dict_query(
    students,
    select=["name", "score"],
    where=lambda x: x["score"] > 85,
    order_by="score"
)
print(result)
# [{"name": "Alice", "score": 90}, {"name": "Charlie", "score": 95}]
```

16. Viết hàm **`dict_aggregate`** tính toán aggregate functions.

```python
def dict_aggregate(data, group_by_key, aggregations):
    # aggregations: {"field": "function"} như {"score": "avg", "count": "count"}
    pass

# Test
sales = [
    {"product": "A", "region": "North", "amount": 100},
    {"product": "A", "region": "North", "amount": 150},
    {"product": "B", "region": "South", "amount": 200}
]

result = dict_aggregate(
    sales,
    group_by_key="product",
    aggregations={"amount": "sum", "count": "count"}
)
print(result)
# {
#     "A": {"amount_sum": 250, "count": 2},
#     "B": {"amount_sum": 200, "count": 1}
# }
```

17. Viết **`CachedDict`** - dictionary với cache và TTL.

```python
import time

class CachedDict:
    def __init__(self, ttl_seconds=60):
        self.data = {}
        self.timestamps = {}
        self.ttl = ttl_seconds

    def __setitem__(self, key, value):
        # Set value với timestamp
        pass

    def __getitem__(self, key):
        # Get value, check TTL
        pass

    def is_expired(self, key):
        pass

    def cleanup(self):
        # Xoá expired items
        pass

# Test
cache = CachedDict(ttl_seconds=5)
cache["key1"] = "value1"
print(cache["key1"])  # "value1"
time.sleep(6)
# print(cache["key1"])  # KeyError hoặc expired
```

18. Viết hàm **`dict_schema_validate`** validate dictionary theo schema.

```python
def dict_schema_validate(data, schema):
    # schema: {"key": {"type": type, "required": bool, "validator": func}}
    # Trả về (is_valid, errors)
    pass

# Test
schema = {
    "name": {"type": str, "required": True},
    "age": {"type": int, "required": True, "validator": lambda x: 0 < x < 150},
    "email": {"type": str, "required": False, "validator": lambda x: "@" in x}
}

data1 = {"name": "Alice", "age": 25, "email": "alice@example.com"}
valid, errors = dict_schema_validate(data1, schema)
print(valid, errors)  # True, []

data2 = {"name": "Bob", "age": -5}
valid, errors = dict_schema_validate(data2, schema)
print(valid, errors)  # False, ["age: invalid value"]
```

19. Viết hàm **`dict_to_object`** chuyển dictionary thành Python object.

```python
def dict_to_object(d):
    # Tạo object với attributes từ dict keys
    pass

# Test
data = {"name": "Alice", "age": 25, "city": "Hanoi"}
obj = dict_to_object(data)
print(obj.name)  # "Alice"
print(obj.age)   # 25
```

20. Viết **`OrderedCounter`** kết hợp Counter và giữ thứ tự.

```python
from collections import Counter

class OrderedCounter:
    def __init__(self, items=None):
        # Đếm items và giữ thứ tự xuất hiện đầu tiên
        pass

    def most_common(self, n=None):
        # Trả về n items phổ biến nhất
        pass

# Test
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = OrderedCounter(words)
print(counter.most_common(2))  # [("apple", 3), ("banana", 2)]
```

21. Viết hàm **`dict_compression`** nén dictionary bằng cách tối ưu keys lặp lại.

```python
def dict_compression(data):
    # Optimize storage cho list of dicts với keys giống nhau
    # Trả về: {"keys": [...], "values": [[...], [...]]}
    pass

def dict_decompression(compressed):
    # Chuyển về list of dicts
    pass

# Test
data = [
    {"name": "Alice", "age": 25, "city": "Hanoi"},
    {"name": "Bob", "age": 30, "city": "HCMC"}
]
compressed = dict_compression(data)
decompressed = dict_decompression(compressed)
assert data == decompressed
```

22. Viết **`MultiDict`** - dictionary có thể có nhiều values cho một key.

```python
class MultiDict:
    def __init__(self):
        self.data = {}

    def add(self, key, value):
        # Thêm value vào key (không replace)
        pass

    def get(self, key):
        # Trả về list values
        pass

    def get_one(self, key):
        # Trả về value đầu tiên
        pass

# Test
md = MultiDict()
md.add("color", "red")
md.add("color", "blue")
print(md.get("color"))  # ["red", "blue"]
```

23. Viết hàm **`dict_deep_merge`** merge nested dictionaries recursively.

```python
def dict_deep_merge(dict1, dict2):
    # Merge recursively, dict2 overrides dict1
    pass

# Test
dict1 = {"a": 1, "b": {"c": 2, "d": 3}}
dict2 = {"b": {"d": 4, "e": 5}, "f": 6}
result = dict_deep_merge(dict1, dict2)
print(result)  # {"a": 1, "b": {"c": 2, "d": 4, "e": 5}, "f": 6}
```

24. Viết **`ConfigDict`** - dictionary với dot notation và type conversion.

```python
class ConfigDict:
    def __init__(self, data=None):
        pass

    def get_int(self, key, default=0):
        pass

    def get_bool(self, key, default=False):
        pass

    def get_list(self, key, default=None):
        pass

# Test
config = ConfigDict({"port": "8080", "debug": "true", "hosts": "localhost,0.0.0.0"})
print(config.get_int("port"))  # 8080
print(config.get_bool("debug"))  # True
print(config.get_list("hosts"))  # ["localhost", "0.0.0.0"]
```

25. Viết hàm **`dict_performance_compare`** so sánh performance của dict operations.

```python
import time

def dict_performance_compare(size=10000):
    # So sánh:
    # - dict vs list lookup
    # - dict get vs []
    # - dict iteration methods
    # Trả về báo cáo với timing
    pass

# Test
report = dict_performance_compare(100000)
print(report)
```
