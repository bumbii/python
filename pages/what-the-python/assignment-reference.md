# Assignment tạo reference, không phải copy

## Hiện tượng lạ

```python
# Tạo list
original = [1, 2, 3]
copy = original  # "Copy"?

# Sửa copy
copy.append(4)

# Original cũng thay đổi?!
print(original)  # [1, 2, 3, 4] ❌
print(copy)      # [1, 2, 3, 4]
```

**What the Python?!** Sửa `copy` mà `original` cũng đổi?! 😱

## Giải thích

### Assignment = Reference

```python
a = [1, 2, 3]
b = a  # b trỏ đến CÙNG list với a

# Kiểm tra
print(a is b)  # True - Cùng object!
print(id(a) == id(b))  # True
```

## Với immutable objects - OK

```python
# Với int (immutable)
x = 10
y = x
y = 20  # Tạo object MỚI

print(x)  # 10 ✅
print(y)  # 20
```

## Với mutable objects - NGUY HIỂM

```python
# List
list1 = [1, 2]
list2 = list1
list2.append(3)
print(list1)  # [1, 2, 3] ❌

# Dict
dict1 = {"a": 1}
dict2 = dict1
dict2["b"] = 2
print(dict1)  # {'a': 1, 'b': 2} ❌
```

## Cách copy đúng

### ✅ Shallow copy

```python
# List
original = [1, 2, 3]
copy = original.copy()  # or list(original) or original[:]

copy.append(4)
print(original)  # [1, 2, 3] ✅
print(copy)      # [1, 2, 3, 4]

# Dict
original = {"a": 1}
copy = original.copy()

# Set
original = {1, 2}
copy = original.copy()
```

### ✅ Deep copy (nested)

```python
import copy

original = [[1, 2], [3, 4]]
shallow = original.copy()
deep = copy.deepcopy(original)

shallow[0].append(5)
print(original)  # [[1, 2, 5], [3, 4]] ❌ Shallow không đủ!

deep[0].append(6)
print(original)  # [[1, 2, 5], [3, 4]] ✅ Deep OK!
```

## Tóm tắt

> **Assignment:**
> - `=` tạo reference, KHÔNG copy
> - ✅ Dùng `.copy()` cho shallow copy
> - ✅ Dùng `copy.deepcopy()` cho deep copy

**Pattern**:
```python
new_list = original.copy()  # Shallow
new_list = copy.deepcopy(original)  # Deep
```
