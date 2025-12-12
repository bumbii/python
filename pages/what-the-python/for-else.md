# for-else và while-else - else khi nào chạy?

## Hiện tượng lạ

```python
# Tìm số chẵn
for num in [1, 3, 5, 7]:
    if num % 2 == 0:
        print("Found even!")
        break
else:
    print("No even found")  # In ra ✅

# Tìm số chẵn
for num in [1, 2, 3, 4]:
    if num % 2 == 0:
        print("Found even!")
        break
else:
    print("No even found")  # KHÔNG in ra!
```

**What the Python?!** `else` sau `for`?! Và chỉ chạy khi KHÔNG break?! 🤔

## Giải thích

### `else` chạy khi loop HOÀN THÀNH BÌNH THƯỜNG

```python
# else chạy khi:
# - Loop kết thúc tự nhiên (không break)
# - Hoặc loop không chạy (empty iterable)

# else KHÔNG chạy khi:
# - break
```

## for-else

### Ví dụ: Tìm kiếm

```python
def find_item(items, target):
    for item in items:
        if item == target:
            print(f"Found {target}!")
            break
    else:
        print(f"{target} not found")

find_item([1, 2, 3], 2)   # Found 2!
find_item([1, 2, 3], 5)   # 5 not found
```

### Thay thế flag pattern

```python
# ❌ Cách cũ
found = False
for item in items:
    if item == target:
        found = True
        break

if not found:
    print("Not found")

# ✅ Pythonic
for item in items:
    if item == target:
        break
else:
    print("Not found")
```

## while-else

```python
count = 0
while count < 5:
    print(count)
    count += 1
    if count == 3:
        break
else:
    print("Finished naturally")  # Không chạy (vì break)
```

## Khi nào dùng?

### ✅ Search với fallback

```python
for user in users:
    if user.id == target_id:
        process(user)
        break
else:
    print("User not found")
```

### ✅ Kiểm tra điều kiện

```python
# Kiểm tra số nguyên tố
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False  # break
    else:
        return True  # Loop hoàn thành → Prime!

print(is_prime(7))   # True
print(is_prime(10))  # False
```

## Confusion với if-else

```python
# if-else: else khi condition False
if condition:
    ...
else:
    ...  # Chạy khi condition False

# for-else: else khi KHÔNG break
for item in items:
    if ...:
        break
else:
    ...  # Chạy khi KHÔNG break
```

## Tóm tắt

> **for-else / while-else:**
> - `else` chạy khi loop HOÀN THÀNH (không break)
> - ✅ Dùng cho search với fallback
> - ⚠️ Khác với if-else!

**Pattern**:
```python
for item in items:
    if found:
        break
else:
    handle_not_found()
```
