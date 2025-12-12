# Ellipsis ... - Không chỉ để slicing

## Ellipsis là gì?

```python
# Ellipsis là built-in constant
print(...)           # Ellipsis
print(type(...))     # <class 'ellipsis'>
print(Ellipsis)      # Ellipsis
print(... is Ellipsis)  # True
```

## Use cases

### 1. Placeholder code

```python
def not_implemented_yet():
    ...  # Tương tự pass

class MyClass:
    ...  # Empty class
```

### 2. Type hints

```python
from typing import Callable

# Function với bất kỳ args nào
func: Callable[..., int]  # Args bất kỳ, return int
```

### 3. NumPy slicing

```python
import numpy as np

arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

# ... = as many : as needed
print(arr[..., 0])  # Tương đương arr[:, :, 0]
```

## Tóm tắt

> **Ellipsis `...`:**
> - Built-in constant
> - ✅ Placeholder thay `pass`
> - ✅ Type hints
> - ✅ NumPy slicing

**Pattern**:
```python
def todo():
    ...  # Placeholder
```
