# Class variables vs Instance variables

## Hiện tượng lạ

```python
class Dog:
    tricks = []  # Class variable

    def add_trick(self, trick):
        self.tricks.append(trick)

# Tạo 2 dogs
fido = Dog()
buddy = Dog()

# Fido học trick
fido.add_trick("roll over")
print(fido.tricks)  # ['roll over']

# Buddy cũng biết trick của Fido?!
print(buddy.tricks)  # ['roll over'] ❌ What?!
```

**What the Python?!** Tại sao buddy biết trick của fido?! 😱

## Giải thích

### Class variable = Shared

```python
class Dog:
    tricks = []  # Shared bởi TẤT CẢ instances!

# Tất cả dogs dùng CHUNG list
fido = Dog()
buddy = Dog()

print(fido.tricks is buddy.tricks)  # True - Cùng object!
```

### Instance variable = Riêng biệt

```python
class Dog:
    def __init__(self):
        self.tricks = []  # Mỗi instance có list riêng

fido = Dog()
buddy = Dog()

print(fido.tricks is buddy.tricks)  # False - Khác object
```

## Cách dùng đúng

### ✅ Instance variables trong `__init__`

```python
class Dog:
    def __init__(self, name):
        self.name = name    # Instance variable
        self.tricks = []    # Instance variable

    def add_trick(self, trick):
        self.tricks.append(trick)

fido = Dog("Fido")
buddy = Dog("Buddy")

fido.add_trick("roll over")
print(fido.tricks)   # ['roll over']
print(buddy.tricks)  # [] ✅
```

### ✅ Class variables cho constants

```python
class Circle:
    pi = 3.14159  # Class variable - constant

    def __init__(self, radius):
        self.radius = radius  # Instance variable

    def area(self):
        return Circle.pi * self.radius ** 2
```

### ✅ Class variables cho shared config

```python
class Database:
    connection_pool = []  # Shared pool
    max_connections = 10  # Config

    def __init__(self, db_name):
        self.db_name = db_name  # Instance-specific
```

## Lookup order

```python
class MyClass:
    class_var = "class"

    def __init__(self):
        self.instance_var = "instance"

obj = MyClass()

# Instance variable
print(obj.instance_var)  # "instance"

# Class variable qua instance
print(obj.class_var)     # "class"

# Class variable qua class
print(MyClass.class_var) # "class"
```

### Ghi đè class variable

```python
class Counter:
    count = 0  # Class variable

c1 = Counter()
c2 = Counter()

# Đọc qua instance
print(c1.count)  # 0 (từ class)

# Gán qua instance → Tạo instance variable!
c1.count = 10
print(c1.count)          # 10 (instance var)
print(c2.count)          # 0 (class var)
print(Counter.count)     # 0 (class var)
```

## Tóm tắt

> **Class vs Instance variables:**
> - Class var: Shared bởi tất cả instances
> - Instance var: Riêng cho mỗi instance
> - ✅ Dùng `__init__` cho instance vars
> - ⚠️ Mutable class vars (list, dict) rất nguy hiểm!

**Pattern**:
```python
class MyClass:
    class_var = "shared"  # Class variable

    def __init__(self):
        self.instance_var = "unique"  # Instance variable
```
