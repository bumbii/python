# Chained assignment - a = b = []

## Hiện tượng lạ

```python
# Chained assignment
a = b = []

# Sửa a
a.append(1)

# b cũng thay đổi?!
print(a)  # [1]
print(b)  # [1] ❌
```

**What the Python?!** Sửa `a` mà `b` cũng đổi?! 😱

## Giải thích

### Chained assignment = Cùng object

```python
a = b = []
# Tương đương:
# temp = []
# a = temp
# b = temp

# a và b trỏ đến CÙNG list
print(a is b)  # True
```

## Với immutable - OK

```python
x = y = 10
x = 20  # Tạo object MỚI, reassign x

print(x)  # 20
print(y)  # 10 ✅ Không ảnh hưởng
```

## Với mutable - NGUY HIỂM

```python
# List
a = b = []
a.append(1)
print(b)  # [1] ❌

# Dict
x = y = {}
x["key"] = "value"
print(y)  # {'key': 'value'} ❌
```

## Cách đúng

### ✅ Assign riêng

```python
a = []
b = []

a.append(1)
print(a)  # [1]
print(b)  # [] ✅
```

### ✅ Hoặc copy

```python
a = []
b = a.copy()

a.append(1)
print(a)  # [1]
print(b)  # [] ✅
```

## Tóm tắt

> **Chained assignment:**
> - `a = b = []` → Cùng object
> - ⚠️ NGUY HIỂM với mutable
> - ✅ Assign riêng hoặc copy

**Pattern**:
```python
# ❌ Tránh
a = b = []

# ✅ Làm
a = []
b = []
```
