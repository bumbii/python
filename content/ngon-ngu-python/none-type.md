# None Type trong Python

`None` là một giá trị đặc biệt trong Python đại diện cho "không có giá trị" hoặc "giá trị rỗng". Nó là một object duy nhất thuộc kiểu `NoneType`.

## 1. Giới thiệu về None

### Định nghĩa

`None` là một constant đặc biệt trong Python:
- Đại diện cho sự vắng mặt của giá trị
- Là singleton - chỉ có một instance duy nhất trong Python
- Thuộc kiểu dữ liệu `NoneType`

```python
# Tạo biến với giá trị None
result = None
print(result)        # None
print(type(result))  # <class 'NoneType'>

# None là singleton - chỉ có 1 instance
a = None
b = None
print(a is b)  # True (cùng object trong bộ nhớ)
```

### None vs 0, False, "" (chuỗi rỗng)

```python
# None khác với 0
print(None == 0)    # False
print(None is 0)    # False

# None khác với False
print(None == False)  # False
print(None is False)  # False

# None khác với chuỗi rỗng
print(None == "")   # False
print(None is "")   # False

# None khác với list rỗng
print(None == [])   # False

# Nhưng None là falsy value
print(bool(None))   # False
```

## 2. Khi nào sử dụng None?

### Giá trị mặc định cho tham số hàm

```python
def greet(name=None):
    if name is None:
        print("Hello, Guest!")
    else:
        print(f"Hello, {name}!")

greet()          # Hello, Guest!
greet("Alice")   # Hello, Alice!

# Ứng dụng thực tế: tham số tùy chọn
def create_user(username, email=None, phone=None):
    user = {"username": username}
    if email is not None:
        user["email"] = email
    if phone is not None:
        user["phone"] = phone
    return user

print(create_user("john"))
# {'username': 'john'}

print(create_user("alice", email="alice@example.com"))
# {'username': 'alice', 'email': 'alice@example.com'}

print(create_user("bob", email="bob@example.com", phone="123-456"))
# {'username': 'bob', 'email': 'bob@example.com', 'phone': '123-456'}
```

### Hàm không có return statement

```python
def print_message(msg):
    print(msg)
    # Không có return statement

result = print_message("Hello")
print(result)  # None

# Các hàm chỉ có return (không có giá trị) cũng trả về None
def early_return(x):
    if x < 0:
        return  # Tương đương return None
    return x * 2

print(early_return(-5))  # None
print(early_return(5))   # 10
```

### Khởi tạo biến chưa có giá trị

```python
# Khởi tạo biến sẽ gán sau
result = None

# Logic xử lý
if some_condition:
    result = calculate_something()
else:
    result = calculate_other_thing()

# Kiểm tra biến chưa được gán
user_input = None

while user_input is None:
    user_input = input("Nhập tên (không để trống): ").strip()
    if not user_input:
        user_input = None
        print("Tên không được để trống!")

print(f"Xin chào, {user_input}!")
```

### Đánh dấu không tìm thấy kết quả

```python
def find_user(user_id, users):
    """Tìm user theo ID, trả về None nếu không tìm thấy"""
    for user in users:
        if user['id'] == user_id:
            return user
    return None  # Không tìm thấy

users = [
    {'id': 1, 'name': 'Alice'},
    {'id': 2, 'name': 'Bob'}
]

user = find_user(1, users)
if user is not None:
    print(f"Found: {user['name']}")
else:
    print("User not found")

user = find_user(999, users)
if user is None:
    print("User not found")  # In ra dòng này
```

## 3. Kiểm tra None

### Sử dụng 'is' và 'is not' (KHUYẾN KHÍCH)

```python
# ✅ ĐÚNG: Dùng 'is' để kiểm tra None
value = None

if value is None:
    print("Value is None")

if value is not None:
    print("Value has a value")
else:
    print("Value is None")  # In ra dòng này
```

### Tại sao không nên dùng == với None?

```python
# ❌ KHÔNG KHUYẾN KHÍCH: Dùng ==
value = None

if value == None:  # Hoạt động nhưng không được khuyến khích
    print("Value is None")

# ✅ NÊN DÙNG: is
if value is None:
    print("Value is None")

# Lý do:
# - 'is' kiểm tra identity (cùng object)
# - '==' kiểm tra equality (giá trị bằng nhau)
# - None là singleton, nên dùng 'is' chính xác và nhanh hơn
```

### None trong điều kiện boolean

```python
# None là falsy value
value = None

# Cách 1: Kiểm tra trực tiếp
if not value:
    print("Value is None or falsy")

# Cách 2: Kiểm tra rõ ràng (TỐT HƠN)
if value is None:
    print("Value is definitely None")

# Vấn đề khi dùng not:
numbers = []  # List rỗng

# ❌ Không chính xác
if not numbers:
    print("numbers is None")  # KHÔNG ĐÚNG - numbers là [], không phải None

# ✅ Chính xác
if numbers is None:
    print("numbers is None")
else:
    print("numbers is not None, but may be empty")  # Đúng
```

## 4. None với Collections

### None trong List

```python
# List chứa None
items = [1, None, 3, None, 5]
print(items)  # [1, None, 3, None, 5]

# Đếm số lượng None
count_none = items.count(None)
print(count_none)  # 2

# Lọc None ra khỏi list
filtered = [x for x in items if x is not None]
print(filtered)  # [1, 3, 5]

# Thay thế None bằng giá trị khác
replaced = [x if x is not None else 0 for x in items]
print(replaced)  # [1, 0, 3, 0, 5]
```

### None trong Dictionary

```python
# Dictionary với giá trị None
user = {
    'name': 'John',
    'email': None,
    'phone': None
}

# Lọc các key có giá trị None
active_fields = {k: v for k, v in user.items() if v is not None}
print(active_fields)  # {'name': 'John'}

# Phương thức get() trả về None nếu key không tồn tại
user = {'name': 'Alice'}
email = user.get('email')
print(email)  # None

# get() với giá trị mặc định
email = user.get('email', 'no-email@example.com')
print(email)  # no-email@example.com
```

### None vs Missing Key

```python
data = {
    'a': 1,
    'b': None,
    # 'c' không tồn tại
}

# Kiểm tra key tồn tại
print('a' in data)  # True
print('b' in data)  # True (tồn tại nhưng giá trị None)
print('c' in data)  # False (không tồn tại)

# Phân biệt None và missing key
if 'b' in data:
    if data['b'] is None:
        print("Key 'b' exists but value is None")

if 'c' in data:
    print("Key 'c' exists")
else:
    print("Key 'c' does not exist")
```

## 5. None với Functions

### Hàm trả về None ngầm định

```python
def no_return():
    x = 5 + 5

result = no_return()
print(result)  # None

# Các hàm built-in cũng có thể trả về None
numbers = [3, 1, 2]
result = numbers.sort()  # sort() sắp xếp in-place, không return gì
print(result)  # None
print(numbers)  # [1, 2, 3] (đã được sắp xếp)
```

### Pattern: Optional Return Value

```python
def divide(a, b):
    """Chia a cho b, trả về None nếu b = 0"""
    if b == 0:
        return None
    return a / b

# Sử dụng
result = divide(10, 2)
if result is not None:
    print(f"Result: {result}")  # Result: 5.0

result = divide(10, 0)
if result is None:
    print("Cannot divide by zero")  # In ra dòng này
```

### Đối số mặc định mutable - Cẩn thận!

```python
# ❌ NGUY HIỂM: Dùng list làm giá trị mặc định
def add_item(item, items=[]):  # KHÔNG NÊN
    items.append(item)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2] - KHÔNG MONG MUỐN!
print(add_item(3))  # [1, 2, 3] - KHÔNG MONG MUỐN!

# ✅ ĐÚNG: Dùng None và tạo mới bên trong
def add_item_correct(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item_correct(1))  # [1]
print(add_item_correct(2))  # [2] - ĐÚNG!
print(add_item_correct(3))  # [3] - ĐÚNG!

# Truyền list sẵn có
my_list = [10, 20]
print(add_item_correct(30, my_list))  # [10, 20, 30]
```

## 6. Nullish Coalescing (Giá trị mặc định)

### Sử dụng 'or' operator

```python
# Cung cấp giá trị mặc định cho None
name = None
display_name = name or "Guest"
print(display_name)  # Guest

# ⚠️ CẨN THẬN: 'or' kiểm tra falsy, không chỉ None
age = 0
display_age = age or 18
print(display_age)  # 18 (KHÔNG ĐÚNG - 0 cũng là falsy!)

# ✅ CHÍNH XÁC: Kiểm tra None cụ thể
age = 0
display_age = age if age is not None else 18
print(display_age)  # 0 (ĐÚNG)
```

### Pattern: Default Values

```python
def get_config(config=None):
    """Trả về config hoặc giá trị mặc định"""
    default_config = {
        'debug': False,
        'timeout': 30,
        'max_retries': 3
    }

    if config is None:
        return default_config

    # Merge với default (override)
    return {**default_config, **config}

# Sử dụng mặc định
print(get_config())
# {'debug': False, 'timeout': 30, 'max_retries': 3}

# Override một số giá trị
print(get_config({'debug': True, 'timeout': 60}))
# {'debug': True, 'timeout': 60, 'max_retries': 3}
```

## 7. None trong Class

### Thuộc tính khởi tạo None

```python
class User:
    def __init__(self, username, email=None):
        self.username = username
        self.email = email
        self.phone = None  # Sẽ set sau

    def set_phone(self, phone):
        self.phone = phone

    def get_contact_info(self):
        info = [self.username]
        if self.email is not None:
            info.append(f"Email: {self.email}")
        if self.phone is not None:
            info.append(f"Phone: {self.phone}")
        return ", ".join(info)

# Sử dụng
user1 = User("john")
print(user1.get_contact_info())  # john

user2 = User("alice", "alice@example.com")
user2.set_phone("123-456-7890")
print(user2.get_contact_info())
# alice, Email: alice@example.com, Phone: 123-456-7890
```

### Optional Chain Pattern

```python
class Address:
    def __init__(self, street, city):
        self.street = street
        self.city = city

class Person:
    def __init__(self, name, address=None):
        self.name = name
        self.address = address

# Truy cập an toàn với None
person1 = Person("John")
person2 = Person("Alice", Address("123 Main St", "NYC"))

# ❌ NGUY HIỂM: Không kiểm tra None
# print(person1.address.city)  # AttributeError

# ✅ AN TOÀN: Kiểm tra None
if person1.address is not None:
    print(person1.address.city)
else:
    print("No address")  # In ra dòng này

# Với person2
if person2.address is not None:
    print(person2.address.city)  # NYC

# Python 3.10+: Match-case
def get_city(person):
    match person.address:
        case None:
            return "Unknown"
        case Address(city=city):
            return city

print(get_city(person1))  # Unknown
print(get_city(person2))  # NYC
```

## 8. Best Practices

### ✅ NÊN làm

```python
# 1. Dùng 'is None' để kiểm tra
if value is None:
    print("Value is None")

# 2. Dùng None cho tham số mặc định mutable
def create_list(items=None):
    if items is None:
        items = []
    return items

# 3. Return None rõ ràng khi không tìm thấy
def find_item(item_id):
    # ...
    if not found:
        return None
    return item

# 4. Sử dụng type hints (Python 3.5+)
from typing import Optional

def get_user(user_id: int) -> Optional[dict]:
    # Có thể trả về dict hoặc None
    if user_exists(user_id):
        return {'id': user_id}
    return None
```

### ❌ KHÔNG NÊN làm

```python
# 1. Không dùng == để so sánh None
if value == None:  # KHÔNG TỐT
    pass

# 2. Không dùng list/dict làm default argument
def bad_function(items=[]):  # NGUY HIỂM
    pass

# 3. Không nhầm lẫn None với falsy values
if not value:  # CÓ THỂ SAI - value có thể là 0, [], "", False
    pass

# Tốt hơn:
if value is None:
    pass
```

## 9. Bài tập thực hành

### Bài 1: Tìm kiếm an toàn

```python
def safe_get(data, *keys, default=None):
    """Lấy giá trị nested dictionary an toàn"""
    for key in keys:
        if data is None or not isinstance(data, dict):
            return default
        data = data.get(key)
    return data if data is not None else default

# Test
user = {
    'name': 'John',
    'address': {
        'city': 'NYC',
        'zipcode': '10001'
    }
}

print(safe_get(user, 'name'))  # John
print(safe_get(user, 'address', 'city'))  # NYC
print(safe_get(user, 'address', 'country'))  # None
print(safe_get(user, 'address', 'country', default='USA'))  # USA
print(safe_get(user, 'phone', 'mobile'))  # None
```

### Bài 2: Filter None

```python
def remove_none(data):
    """Loại bỏ None khỏi nested structures"""
    if isinstance(data, dict):
        return {k: remove_none(v) for k, v in data.items() if v is not None}
    elif isinstance(data, list):
        return [remove_none(item) for item in data if item is not None]
    return data

# Test
data = {
    'name': 'John',
    'email': None,
    'phones': ['123-456', None, '789-012'],
    'address': {
        'street': '123 Main',
        'city': None,
        'country': 'USA'
    }
}

cleaned = remove_none(data)
print(cleaned)
# {'name': 'John', 'phones': ['123-456', '789-012'],
#  'address': {'street': '123 Main', 'country': 'USA'}}
```

## Tổng kết

- `None` là giá trị đặc biệt đại diện cho "không có giá trị"
- `None` là singleton - chỉ có một instance duy nhất
- Dùng `is None` và `is not None` để kiểm tra (KHÔNG dùng `==`)
- `None` là falsy value nhưng khác với `0`, `False`, `""`, `[]`
- Sử dụng `None` cho:
  - Giá trị mặc định của tham số
  - Khởi tạo biến chưa có giá trị
  - Đánh dấu không tìm thấy kết quả
- KHÔNG dùng mutable objects (list, dict) làm default argument - dùng `None` thay thế
- Type hint: Dùng `Optional[Type]` để chỉ ra giá trị có thể là None
