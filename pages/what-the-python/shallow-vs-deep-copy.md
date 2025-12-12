# Shallow copy vs Deep copy

## Sự khác biệt

### Shallow copy - Copy cấp 1

```python
import copy

original = [[1, 2], [3, 4]]
shallow = original.copy()  # or copy.copy(original)

# Sửa inner list
shallow[0].append(5)

print(original)  # [[1, 2, 5], [3, 4]] ❌
print(shallow)   # [[1, 2, 5], [3, 4]]
```

### Deep copy - Copy đệ quy

```python
import copy

original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)

# Sửa inner list
deep[0].append(5)

print(original)  # [[1, 2], [3, 4]] ✅
print(deep)      # [[1, 2, 5], [3, 4]]
```

## Khi nào dùng?

### ✅ Shallow: Flat structures

```python
# List phẳng
nums = [1, 2, 3]
copy_nums = nums.copy()  # ✅ Shallow đủ

# Dict phẳng
data = {"name": "Alice", "age": 25}
copy_data = data.copy()  # ✅ Shallow đủ
```

### ✅ Deep: Nested structures

```python
# Nested list
matrix = [[1, 2], [3, 4]]
copy_matrix = copy.deepcopy(matrix)  # ✅ Cần deep

# Dict với list values
data = {"users": [{"name": "Alice"}]}
copy_data = copy.deepcopy(data)  # ✅ Cần deep
```

## Performance

```python
import copy
import timeit

data = [[1, 2, 3] * 100 for _ in range(100)]

# Shallow - Nhanh
timeit.timeit(lambda: data.copy(), number=10000)

# Deep - Chậm hơn
timeit.timeit(lambda: copy.deepcopy(data), number=10000)
```

## Tóm tắt

> **Shallow vs Deep:**
> - Shallow: Copy cấp 1
> - Deep: Copy đệ quy tất cả
> - ✅ Shallow cho flat structures
> - ✅ Deep cho nested structures

**Pattern**:
```python
# Shallow
new = original.copy()

# Deep
import copy
new = copy.deepcopy(original)
```
