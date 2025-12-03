---
icon: repeat
---

# Đệ quy (Recursion)

## 1. Giới thiệu

**Đệ quy** là kỹ thuật một function **gọi chính nó** để giải quyết vấn đề.

### Tại sao cần học Đệ quy?
- ✅ Giải các bài toán phức tạp một cách đơn giản
- ✅ Code ngắn gọn và dễ hiểu
- ✅ Áp dụng cho cấu trúc dữ liệu cây, đồ thị
- ✅ Nhiều thuật toán nổi tiếng dùng đệ quy

## 2. Cấu trúc Function Đệ quy

### 2.1 - Thành phần bắt buộc

```python
def recursive_function(parameters):
    # 1. BASE CASE - Điều kiện dừng
    if <base_condition>:
        return <base_value>

    # 2. RECURSIVE CASE - Gọi chính nó với input nhỏ hơn
    return recursive_function(<smaller_input>)
```

### 2.2 - Ví dụ đơn giản: Đếm ngược

```python
def countdown(n):
    # Base case: dừng khi n = 0
    if n == 0:
        print("Done!")
        return

    # Recursive case
    print(n)
    countdown(n - 1)  # Gọi chính nó với n nhỏ hơn

# Test
countdown(5)
# Output:
# 5
# 4
# 3
# 2
# 1
# Done!
```

## 3. Ví dụ cơ bản

### Ví dụ 1: Tính giai thừa

```python
def factorial(n):
    """
    n! = n * (n-1) * (n-2) * ... * 1
    5! = 5 * 4 * 3 * 2 * 1 = 120
    """
    # Base case
    if n == 0 or n == 1:
        return 1

    # Recursive case
    return n * factorial(n - 1)

# Test
print(factorial(5))  # 120
print(factorial(0))  # 1
```

**Visualization:**
```
factorial(5)
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * (4 * (3 * (2 * 1)))
= 5 * (4 * (3 * 2))
= 5 * (4 * 6)
= 5 * 24
= 120
```

### Ví dụ 2: Tính tổng từ 1 đến n

```python
def sum_to_n(n):
    # Base case
    if n == 0:
        return 0

    # Recursive case
    return n + sum_to_n(n - 1)

# Test
print(sum_to_n(5))  # 1+2+3+4+5 = 15
```

### Ví dụ 3: Lũy thừa

```python
def power(base, exponent):
    """
    Tính base^exponent
    2^3 = 2 * 2 * 2 = 8
    """
    # Base case
    if exponent == 0:
        return 1

    # Recursive case
    return base * power(base, exponent - 1)

# Test
print(power(2, 3))   # 8
print(power(5, 2))   # 25
```

## 4. Đệ quy vs Vòng lặp

### 4.1 - Cùng một bài toán

```python
# Đệ quy
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

# Vòng lặp
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Cả hai đều cho kết quả giống nhau
print(factorial_recursive(5))  # 120
print(factorial_iterative(5))  # 120
```

### 4.2 - Khi nào dùng?

| Đệ quy | Vòng lặp |
| --- | --- |
| Code ngắn, dễ hiểu | Code dài hơn |
| Phù hợp với cấu trúc cây | Phù hợp với list/array |
| Dùng nhiều bộ nhớ (stack) | Tiết kiệm bộ nhớ |
| Có thể chậm hơn | Thường nhanh hơn |

## 5. Fibonacci - Ví dụ kinh điển

### 5.1 - Dãy Fibonacci

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

Quy luật: `fib(n) = fib(n-1) + fib(n-2)`

### 5.2 - Implementation

```python
def fibonacci(n):
    # Base cases
    if n == 0:
        return 0
    if n == 1:
        return 1

    # Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2)

# Test
for i in range(10):
    print(f"fib({i}) = {fibonacci(i)}")

# Output:
# fib(0) = 0
# fib(1) = 1
# fib(2) = 1
# fib(3) = 2
# fib(4) = 3
# fib(5) = 5
# ...
```

## 6. Đệ quy với Lists

### Ví dụ 1: Tính tổng list

```python
def sum_list(lst):
    # Base case: list rỗng
    if not lst:
        return 0

    # Recursive case: phần tử đầu + tổng phần còn lại
    return lst[0] + sum_list(lst[1:])

# Test
print(sum_list([1, 2, 3, 4, 5]))  # 15
```

### Ví dụ 2: Tìm max trong list

```python
def find_max(lst):
    # Base case: chỉ 1 phần tử
    if len(lst) == 1:
        return lst[0]

    # Recursive case
    max_of_rest = find_max(lst[1:])
    return lst[0] if lst[0] > max_of_rest else max_of_rest

# Test
print(find_max([3, 7, 2, 9, 1]))  # 9
```

### Ví dụ 3: Đảo ngược list

```python
def reverse_list(lst):
    # Base case
    if len(lst) <= 1:
        return lst

    # Recursive case: phần tử cuối + đảo ngược phần còn lại
    return [lst[-1]] + reverse_list(lst[:-1])

# Test
print(reverse_list([1, 2, 3, 4, 5]))
# [5, 4, 3, 2, 1]
```

## 7. Đệ quy với Strings

### Ví dụ 1: Đảo ngược chuỗi

```python
def reverse_string(s):
    # Base case
    if len(s) <= 1:
        return s

    # Recursive case
    return s[-1] + reverse_string(s[:-1])

# Test
print(reverse_string("hello"))  # "olleh"
```

### Ví dụ 2: Kiểm tra palindrome

```python
def is_palindrome(s):
    # Base case: chuỗi rỗng hoặc 1 ký tự
    if len(s) <= 1:
        return True

    # Recursive case: kiểm tra đầu và cuối
    if s[0] != s[-1]:
        return False

    return is_palindrome(s[1:-1])

# Test
print(is_palindrome("radar"))   # True
print(is_palindrome("hello"))   # False
```

### Ví dụ 3: Đếm ký tự

```python
def count_char(s, char):
    # Base case
    if not s:
        return 0

    # Recursive case
    count = 1 if s[0] == char else 0
    return count + count_char(s[1:], char)

# Test
print(count_char("hello", "l"))  # 2
```

## 8. Nested Structures - Đệ quy sâu

### Ví dụ 1: Tính tổng nested list

```python
def sum_nested(lst):
    total = 0
    for item in lst:
        if isinstance(item, list):
            # Nếu là list, gọi đệ quy
            total += sum_nested(item)
        else:
            # Nếu là số, cộng vào
            total += item
    return total

# Test
nested = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
print(sum_nested(nested))  # 45
```

### Ví dụ 2: Làm phẳng nested list

```python
def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            # Đệ quy flatten sublist
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

# Test
nested = [1, [2, [3, 4], 5], 6]
print(flatten(nested))  # [1, 2, 3, 4, 5, 6]
```

## 9. Binary Search - Đệ quy với chia để trị

```python
def binary_search(lst, target, left=0, right=None):
    if right is None:
        right = len(lst) - 1

    # Base case: không tìm thấy
    if left > right:
        return -1

    # Tìm giữa
    mid = (left + right) // 2

    # Base case: tìm thấy
    if lst[mid] == target:
        return mid

    # Recursive cases
    if lst[mid] < target:
        # Tìm bên phải
        return binary_search(lst, target, mid + 1, right)
    else:
        # Tìm bên trái
        return binary_search(lst, target, left, mid - 1)

# Test
numbers = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(numbers, 7))   # 3
print(binary_search(numbers, 10))  # -1
```

## 10. Lỗi thường gặp

### Lỗi 1: Thiếu Base Case

```python
# ❌ SAI - Không có điều kiện dừng!
def infinite_recursion(n):
    return n + infinite_recursion(n - 1)
    # RecursionError: maximum recursion depth exceeded
```

### Lỗi 2: Base Case sai

```python
# ❌ SAI - Base case không bao giờ đạt được
def wrong_base(n):
    if n == 0:  # Nhưng n luôn dương!
        return 0
    return n + wrong_base(n + 1)  # n tăng, không giảm!
```

### Lỗi 3: Không tiến về Base Case

```python
# ❌ SAI - Input không giảm
def not_progressing(n):
    if n == 0:
        return 0
    return n + not_progressing(n)  # n không đổi!
```

## 11. Optimization - Memoization

### 11.1 - Vấn đề với Fibonacci thường

```python
# Chậm - tính lại nhiều lần
def fib_slow(n):
    if n <= 1:
        return n
    return fib_slow(n - 1) + fib_slow(n - 2)

# fib(5) = fib(4) + fib(3)
#        = (fib(3) + fib(2)) + (fib(2) + fib(1))
#        = ((fib(2) + fib(1)) + ...) + ...
# fib(2) được tính nhiều lần!
```

### 11.2 - Memoization solution

```python
def fib_memo(n, memo={}):
    # Kiểm tra cache
    if n in memo:
        return memo[n]

    # Base cases
    if n <= 1:
        return n

    # Tính và lưu vào cache
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

# Test - Nhanh hơn nhiều!
print(fib_memo(50))
```

## 12. Tips và Best Practices

### 1. Luôn có Base Case

```python
# ✅ TỐT
def good_recursion(n):
    if n == 0:  # Clear base case
        return 1
    return n * good_recursion(n - 1)
```

### 2. Đảm bảo tiến về Base Case

```python
# ✅ TỐT - n giảm dần về 0
def countdown(n):
    if n == 0:
        return
    print(n)
    countdown(n - 1)  # n giảm
```

### 3. Cân nhắc Iterative alternative

```python
# Nếu đệ quy quá phức tạp, dùng vòng lặp
def iterative_factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
```

### 4. Sử dụng Memoization khi cần

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

## Bài giảng trên YouTube

Cập nhật sau
