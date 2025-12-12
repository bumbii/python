# Underscore _ - Nhiều ý nghĩa khác nhau

## Các cách dùng `_`

### 1. Last result trong REPL

```python
>>> 2 + 3
5
>>> _
5
>>> _ * 2
10
```

### 2. Throwaway variable

```python
# Không quan tâm giá trị
for _ in range(5):
    print("Hello")

# Unpacking
x, _, z = (1, 2, 3)  # Bỏ qua giá trị thứ 2
```

### 3. Number separator

```python
# Dễ đọc
million = 1_000_000
billion = 1_000_000_000

# Binary
bits = 0b_1010_1100
```

### 4. Private (convention)

```python
# Single underscore
class MyClass:
    def _internal(self):  # "Private" method
        pass

# Double underscore
class MyClass:
    def __private(self):  # Name mangling
        pass
```

### 5. Magic methods

```python
class MyClass:
    def __init__(self):  # Constructor
        pass

    def __str__(self):   # String representation
        pass
```

### 6. Internationalization (i18n)

```python
# Common convention
from gettext import gettext as _

print(_("Hello, World!"))
```

## Tóm tắt

> **Underscore `_`:**
> - REPL: Last result
> - Loop: Throwaway variable
> - Number: Separator (1_000_000)
> - `_name`: Protected (convention)
> - `__name`: Private (name mangling)
> - `__name__`: Magic methods

**Patterns**:
```python
for _ in range(n): ...  # Throwaway
x, _, z = values        # Ignore middle
num = 1_000_000         # Readability
```
