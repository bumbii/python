# Name mangling với __private

## Hiện tượng lạ

```python
class MyClass:
    def __init__(self):
        self.__private = "secret"
        self._protected = "internal"
        self.public = "open"

obj = MyClass()

print(obj.public)      # "open" ✅
print(obj._protected)  # "internal" ✅
print(obj.__private)   # AttributeError! ❌

# Nhưng...
print(obj._MyClass__private)  # "secret" ✅ What?!
```

**What the Python?!** `__private` không thật sự private?! 🤔

## Giải thích

### Name Mangling

Python tự động đổi tên `__name` thành `_ClassName__name`:

```python
class MyClass:
    def __init__(self):
        self.__x = 10

# Python tự động rename
# self.__x → self._MyClass__x
```

### Xem attributes

```python
class MyClass:
    def __init__(self):
        self.__private = "secret"

obj = MyClass()
print(dir(obj))
# [..., '_MyClass__private', ...]

# Access trực tiếp
print(obj._MyClass__private)  # "secret"
```

## Conventions

### `public` - Public

```python
class MyClass:
    def __init__(self):
        self.public = "everyone can use"
```

### `_protected` - Protected (convention)

```python
class MyClass:
    def __init__(self):
        self._protected = "internal use"
        # Convention: Đừng dùng bên ngoài class
```

### `__private` - Name mangled

```python
class MyClass:
    def __init__(self):
        self.__private = "avoid name collision"
        # Để tránh collision với subclass
```

## Khi nào dùng name mangling?

### ✅ Tránh collision trong inheritance

```python
class Base:
    def __init__(self):
        self.__id = 1  # Name mangled

    def get_id(self):
        return self.__id

class Derived(Base):
    def __init__(self):
        super().__init__()
        self.__id = 2  # KHÔNG conflict với Base.__id

d = Derived()
print(d.get_id())         # 1 (Base.__id)
print(d._Derived__id)     # 2 (Derived.__id)
```

## Best Practices

### ✅ Dùng `_single` cho internal

```python
class MyClass:
    def __init__(self):
        self._internal = "use with care"  # ✅
```

### ❌ Không dùng `__double` trừ khi cần

```python
class MyClass:
    def __init__(self):
        self.__private = "rarely needed"  # ❌ Overkill
```

## Tóm tắt

> **Python naming conventions:**
> - `public` - Public API
> - `_protected` - Internal (convention only)
> - `__private` - Name mangled (tránh collision)
> - ✅ Dùng `_single` cho internal
> - ⚠️ `__double` KHÔNG truly private!

**Remember**: Python không có true private, chỉ có conventions!
