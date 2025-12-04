---
description: Bài tập về Đệ quy (Recursion) - Cơ bản
icon: repeat
---


# Bài tập Recursion - Cơ bản

1. Viết hàm đệ quy **`countdown(n)`** đếm ngược từ n về 0 và in ra mỗi số.

```python
def countdown(n):
    # Code của bạn ở đây
    pass

# Test
countdown(5)
# Output:
# 5
# 4
# 3
# 2
# 1
# 0
```

2. Viết hàm đệ quy **`count_up(n)`** đếm từ 1 đến n và in ra mỗi số.

```python
def count_up(n):
    # Code của bạn ở đây
    pass

# Test
count_up(5)
# Output:
# 1
# 2
# 3
# 4
# 5
```

3. Viết hàm đệ quy **`factorial(n)`** tính giai thừa của n.

```python
def factorial(n):
    # n! = n * (n-1) * ... * 1
    # 5! = 5 * 4 * 3 * 2 * 1 = 120
    pass

# Test
print(factorial(5))  # 120
print(factorial(0))  # 1
print(factorial(3))  # 6
```

> **💡 Base case: n = 0 hoặc n = 1, trả về 1**

4. Viết hàm đệ quy **`sum_to_n(n)`** tính tổng các số từ 1 đến n.

```python
def sum_to_n(n):
    # 1 + 2 + 3 + ... + n
    pass

# Test
print(sum_to_n(5))   # 15 (1+2+3+4+5)
print(sum_to_n(10))  # 55
```

5. Viết hàm đệ quy **`power(base, exp)`** tính base mũ exp.

```python
def power(base, exp):
    # base^exp
    # 2^3 = 2 * 2 * 2 = 8
    pass

# Test
print(power(2, 3))  # 8
print(power(5, 2))  # 25
print(power(3, 0))  # 1
```

6. Viết hàm đệ quy **`fibonacci(n)`** tính số Fibonacci thứ n.

```python
def fibonacci(n):
    # fib(0) = 0, fib(1) = 1
    # fib(n) = fib(n-1) + fib(n-2)
    pass

# Test
print(fibonacci(0))  # 0
print(fibonacci(1))  # 1
print(fibonacci(6))  # 8
print(fibonacci(10)) # 55
```

7. Viết hàm đệ quy **`sum_digits(n)`** tính tổng các chữ số của một số nguyên.

```python
def sum_digits(n):
    # 123 -> 1 + 2 + 3 = 6
    pass

# Test
print(sum_digits(123))   # 6
print(sum_digits(999))   # 27
print(sum_digits(5))     # 5
```

> **💡 Gợi ý: Dùng n % 10 để lấy chữ số cuối, n // 10 để bỏ chữ số cuối**

8. Viết hàm đệ quy **`count_digits(n)`** đếm số lượng chữ số của một số nguyên.

```python
def count_digits(n):
    # 123 -> 3 chữ số
    pass

# Test
print(count_digits(123))    # 3
print(count_digits(99999))  # 5
print(count_digits(5))      # 1
```

9. Viết hàm đệ quy **`reverse_number(n)`** đảo ngược một số nguyên.

```python
def reverse_number(n):
    # 123 -> 321
    pass

# Test
print(reverse_number(123))   # 321
print(reverse_number(5040))  # 405
```

10. Viết hàm đệ quy **`sum_list(lst)`** tính tổng các phần tử trong list.

```python
def sum_list(lst):
    # [1, 2, 3, 4, 5] -> 15
    pass

# Test
print(sum_list([1, 2, 3, 4, 5]))  # 15
print(sum_list([10, 20, 30]))     # 60
print(sum_list([]))               # 0
```

> **💡 Base case: list rỗng trả về 0**

11. Viết hàm đệ quy **`find_max(lst)`** tìm số lớn nhất trong list.

```python
def find_max(lst):
    pass

# Test
print(find_max([3, 7, 2, 9, 1]))  # 9
print(find_max([5, 5, 5]))        # 5
print(find_max([100]))            # 100
```

12. Viết hàm đệ quy **`find_min(lst)`** tìm số nhỏ nhất trong list.

```python
def find_min(lst):
    pass

# Test
print(find_min([3, 7, 2, 9, 1]))  # 1
print(find_min([5, 5, 5]))        # 5
print(find_min([100]))            # 100
```

13. Viết hàm đệ quy **`reverse_string(s)`** đảo ngược một chuỗi.

```python
def reverse_string(s):
    pass

# Test
print(reverse_string("hello"))   # "olleh"
print(reverse_string("Python"))  # "nohtyP"
print(reverse_string("a"))       # "a"
```

14. Viết hàm đệ quy **`is_palindrome(s)`** kiểm tra chuỗi có phải palindrome không.

```python
def is_palindrome(s):
    # Palindrome: đọc xuôi ngược như nhau
    pass

# Test
print(is_palindrome("radar"))    # True
print(is_palindrome("hello"))    # False
print(is_palindrome("level"))    # True
print(is_palindrome("a"))        # True
```

15. Viết hàm đệ quy **`count_char(s, char)`** đếm số lần xuất hiện của ký tự trong chuỗi.

```python
def count_char(s, char):
    pass

# Test
print(count_char("hello", "l"))      # 2
print(count_char("programming", "m")) # 2
print(count_char("python", "z"))     # 0
```

16. Viết hàm đệ quy **`multiply(a, b)`** nhân hai số dương bằng cách cộng lặp đi lặp lại.

```python
def multiply(a, b):
    # 3 * 4 = 3 + 3 + 3 + 3 = 12
    # Sử dụng đệ quy, không dùng toán tử *
    pass

# Test
print(multiply(3, 4))   # 12
print(multiply(5, 6))   # 30
print(multiply(7, 0))   # 0
```

17. Viết hàm đệ quy **`gcd(a, b)`** tính ước số chung lớn nhất của hai số (Euclidean algorithm).

```python
def gcd(a, b):
    # Greatest Common Divisor
    # gcd(48, 18) = 6
    pass

# Test
print(gcd(48, 18))  # 6
print(gcd(100, 50)) # 50
print(gcd(17, 13))  # 1
```

> **💡 Gợi ý: gcd(a, b) = gcd(b, a % b), base case: b = 0**

18. Viết hàm đệ quy **`list_length(lst)`** tính độ dài của list (không dùng hàm len()).

```python
def list_length(lst):
    pass

# Test
print(list_length([1, 2, 3, 4, 5]))  # 5
print(list_length([]))               # 0
print(list_length(["a", "b"]))       # 2
```

19. Viết hàm đệ quy **`contains(lst, item)`** kiểm tra item có trong list không.

```python
def contains(lst, item):
    pass

# Test
print(contains([1, 2, 3, 4], 3))    # True
print(contains([1, 2, 3, 4], 5))    # False
print(contains([], 1))              # False
```

20. Viết hàm đệ quy **`print_list(lst)`** in từng phần tử của list (mỗi phần tử một dòng).

```python
def print_list(lst):
    pass

# Test
print_list([1, 2, 3, 4, 5])
# Output:
# 1
# 2
# 3
# 4
# 5
```
