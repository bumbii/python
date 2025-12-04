---
description: Các bài tập về Set Comprehension - Cơ bản
icon: circle
---

# Bài tập Set Comprehension - Cơ bản

1. Viết set comprehension tạo set các số bình phương từ 1 đến 5.

```python
# Kết quả: {1, 4, 9, 16, 25}
squares = # Code của bạn ở đây
print(squares)
```

2. Viết set comprehension loại bỏ phần tử trùng lặp từ list.

```python
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]
# Kết quả: {1, 2, 3, 4, 5}
unique = # Code của bạn ở đây
print(unique)
```

3. Viết set comprehension lấy các ký tự unique trong chuỗi (không tính khoảng trắng).

```python
text = "hello world"
# Kết quả: {'h', 'e', 'l', 'o', 'w', 'r', 'd'}
unique_chars = # Code của bạn ở đây
print(unique_chars)
```

4. Viết set comprehension lấy chỉ số chẵn từ 1 đến 20.

```python
# Kết quả: {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}
even_numbers = # Code của bạn ở đây
print(even_numbers)
```

5. Viết set comprehension lấy các từ dài hơn 4 ký tự.

```python
words = ["cat", "dog", "elephant", "lion", "tiger", "ant"]
# Kết quả: {'elephant', 'tiger'}
long_words = # Code của bạn ở đây
print(long_words)
```

6. Viết set comprehension viết hoa tất cả các tên.

```python
names = ["alice", "bob", "charlie", "david"]
# Kết quả: {'ALICE', 'BOB', 'CHARLIE', 'DAVID'}
upper_names = # Code của bạn ở đây
print(upper_names)
```

7. Viết set comprehension lấy chữ cái đầu của mỗi từ.

```python
words = ["apple", "banana", "cherry", "date", "avocado", "apricot"]
# Kết quả: {'a', 'b', 'c', 'd'}
initials = # Code của bạn ở đây
print(initials)
```

8. Viết set comprehension lấy số chia hết cho 3 hoặc 5 từ 1-30.

```python
# Kết quả: {3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30}
divisible = # Code của bạn ở đây
print(divisible)
```

9. Viết set comprehension lấy độ dài unique của các từ.

```python
words = ["a", "ab", "abc", "ab", "abcd", "abc"]
# Kết quả: {1, 2, 3, 4}
unique_lengths = # Code của bạn ở đây
print(unique_lengths)
```

10. Viết set comprehension lấy phần tử có trong cả hai lists.

```python
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
# Kết quả: {4, 5}
common = # Code của bạn ở đây
print(common)
```

11. Viết set comprehension lấy tất cả vowels từ chuỗi.

```python
text = "Hello World"
vowels = "aeiouAEIOU"
# Kết quả: {'e', 'o'}
found_vowels = # Code của bạn ở đây
print(found_vowels)
```

12. Viết set comprehension lấy số âm từ list.

```python
numbers = [-5, -3, 0, 2, -1, 7, -8, 10]
# Kết quả: {-8, -5, -3, -1}
negative = # Code của bạn ở đây
print(negative)
```

13. Viết set comprehension lấy extension từ tên files.

```python
files = ["document.pdf", "image.png", "script.py", "data.csv", "photo.jpg"]
# Kết quả: {'pdf', 'png', 'py', 'csv', 'jpg'}
extensions = # Code của bạn ở đây
print(extensions)
```

14. Viết set comprehension lấy các số nguyên tố từ 2-20 (dùng hàm is_prime).

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Kết quả: {2, 3, 5, 7, 11, 13, 17, 19}
primes = # Code của bạn ở đây
print(primes)
```

15. Viết set comprehension lấy từ xuất hiện trong cả hai văn bản.

```python
text1 = "Python is awesome and powerful"
text2 = "Python is easy and fun"
words1 = text1.lower().split()
words2 = text2.lower().split()
# Kết quả: {'python', 'is', 'and'}
common_words = # Code của bạn ở đây
print(common_words)
```

16. Viết set comprehension lấy chữ số từ chuỗi.

```python
text = "My phone number is 0123456789"
# Kết quả: {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'}
digits = # Code của bạn ở đây
print(digits)
```

17. Viết set comprehension lấy tất cả prefix 2 ký tự từ danh sách từ.

```python
words = ["apple", "apricot", "banana", "band", "cherry"]
# Kết quả: {'ap', 'ba', 'ch'}
prefixes = # Code của bạn ở đây
print(prefixes)
```

18. Viết set comprehension lấy các từ palindrome (đọc xuôi ngược như nhau).

```python
words = ["level", "hello", "radar", "world", "noon", "python"]
# Kết quả: {'level', 'radar', 'noon'}
palindromes = # Code của bạn ở đây
print(palindromes)
```

19. Viết set comprehension lấy domain từ email addresses.

```python
emails = ["alice@gmail.com", "bob@yahoo.com", "charlie@gmail.com", "david@outlook.com"]
# Kết quả: {'gmail.com', 'yahoo.com', 'outlook.com'}
domains = # Code của bạn ở đây
print(domains)
```

20. Viết set comprehension lấy các số perfect square từ 1-100.

```python
import math
# Một số là perfect square nếu sqrt của nó là số nguyên
# Kết quả: {1, 4, 9, 16, 25, 36, 49, 64, 81, 100}
perfect_squares = # Code của bạn ở đây
print(perfect_squares)
```
