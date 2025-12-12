# all([]) = True và any([]) = False

## Hiện tượng lạ

```python
# all() với empty list
print(all([]))  # True ✅

# any() với empty list
print(any([]))  # False ✅
```

**What the Python?!** Tại sao `all([])` lại True?! 🤔

## Giải thích

### Logic toán học

#### `all([])` = True - Vacuous truth

```python
# "Tất cả phần tử đều True?"
# Với empty list → Không có phần tử nào False
# → Vacuous truth → True

all([])  # True
all([True, True])  # True
all([True, False])  # False
```

**Tương tự trong toán học**: "Tất cả unicorns đều có cánh" → True (vì không có unicorn nào để phản bác!)

#### `any([])` = False - Không có gì True

```python
# "Có phần tử nào True không?"
# Với empty list → Không có phần tử
# → False

any([])  # False
any([False, False])  # False
any([False, True])  # True
```

## Ví dụ thực tế

### all()

```python
# Kiểm tra tất cả users active
users = []  # Không có users
all_active = all(user.is_active for user in users)
print(all_active)  # True ✅

# Hợp lý: "Tất cả users đều active" → True (không có user nào không active)
```

### any()

```python
# Có user nào admin không?
users = []  # Không có users
has_admin = any(user.is_admin for user in users)
print(has_admin)  # False ✅

# Hợp lý: Không có user → Không có admin
```

## So sánh với AND/OR

```python
# all() tương tự AND
all([True, True])   # = True and True = True
all([])             # = True (identity cho AND)

# any() tương tự OR
any([False, True])  # = False or True = True
any([])             # = False (identity cho OR)
```

## Identity elements

```python
# AND identity = True
True and x == x  # Với mọi x

# OR identity = False
False or x == x  # Với mọi x
```

## Thực tế

### Validate inputs

```python
def validate_all(items, validator):
    """Tất cả items phải valid"""
    return all(validator(item) for item in items)

# Empty list → Tất cả valid (vacuously)
validate_all([], lambda x: x > 0)  # True
```

### Check existence

```python
def has_any_error(results):
    """Có lỗi nào không?"""
    return any(r.has_error for r in results)

# Empty → Không có lỗi
has_any_error([])  # False
```

## Tóm tắt

> **all() và any() với empty:**
> - `all([])` = True (vacuous truth)
> - `any([])` = False (no evidence)
> - ✅ Consistent với logic toán học
> - ✅ Useful cho edge cases

**Nhớ**:
```python
all([])  # True - "Không có gì sai"
any([])  # False - "Không có gì đúng"
```

**Identity elements**:
- AND identity = True
- OR identity = False
