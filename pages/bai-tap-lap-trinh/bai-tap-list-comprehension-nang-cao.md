---
description: Bài tập về List Comprehension - Nâng cao
icon: sparkles
---


# Bài tập List Comprehension - Nâng cao

1. Viết list comprehension tạo ma trận (matrix) 3x3 chứa các số từ 1 đến 9.

```python
matrix = # Code của bạn ở đây
print(matrix)
# Kết quả: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

> **💡 Gợi ý: Dùng nested list comprehension**

2. Cho list **`matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`**. Viết list comprehension để làm phẳng (flatten) ma trận thành list 1 chiều.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = # Code của bạn ở đây
print(flattened)
# Kết quả: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

3. Viết list comprehension tạo ma trận đơn vị (identity matrix) kích thước 4x4.

```python
identity = # Code của bạn ở đây
print(identity)
# Kết quả: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
```

4. Cho list **`words = ["hello", "world", "python", "programming"]`**. Viết list comprehension tạo dict với key là từ, value là độ dài của từ.

```python
words = ["hello", "world", "python", "programming"]
word_lengths = # Code của bạn ở đây (dùng dict comprehension)
print(word_lengths)
# Kết quả: {'hello': 5, 'world': 5, 'python': 6, 'programming': 11}
```

5. Viết list comprehension tạo list các số Fibonacci đầu tiên (từ 0 đến 100).

```python
# Tạo list chứa các số Fibonacci không vượt quá 100
fibonacci = # Code của bạn ở đây
print(fibonacci)
# Kết quả: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```

> **💡 Gợi ý: Không thể dùng list comprehension thuần túy. Hãy tạo một generator function trước.**

6. Cho list **`numbers = [1, 2, 3, 4, 5]`**. Viết list comprehension tạo tất cả các cặp (pair) có thể từ list này.

```python
numbers = [1, 2, 3, 4, 5]
pairs = # Code của bạn ở đây
print(pairs)
# Kết quả: [(1, 2), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5), (3, 4), (3, 5), (4, 5)]
```

7. Viết list comprehension tìm tất cả các số là bội số chung của 3 và 5 từ 1 đến 100.

```python
multiples = # Code của bạn ở đây
print(multiples)
# Kết quả: [15, 30, 45, 60, 75, 90]
```

8. Cho hai list **`list1 = [1, 2, 3]`** và **`list2 = [10, 20, 30]`**. Viết list comprehension tạo list chứa tổng của các phần tử tương ứng.

```python
list1 = [1, 2, 3]
list2 = [10, 20, 30]
sums = # Code của bạn ở đây
print(sums)
# Kết quả: [11, 22, 33]
```

> **💡 Gợi ý: Dùng hàm `zip()`**

9. Viết list comprehension tạo list chứa các số nguyên tố từ 2 đến 50.

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = # Code của bạn ở đây (dùng is_prime)
print(primes)
# Kết quả: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
```

10. Cho chuỗi **`text = "Hello World"`**. Viết list comprehension đếm số lần xuất hiện của mỗi ký tự (không phân biệt hoa thường).

```python
text = "Hello World"
char_count = # Code của bạn ở đây (dùng dict comprehension)
print(char_count)
# Kết quả: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

11. Cho list **`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`**. Viết list comprehension chia list thành các chunks kích thước 3.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
chunks = # Code của bạn ở đây
print(chunks)
# Kết quả: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

12. Viết list comprehension tạo bảng cửu chương từ 1 đến 10 dưới dạng nested list.

```python
multiplication_table = # Code của bạn ở đây
# Mỗi hàng là: [1x1, 1x2, ..., 1x10], [2x1, 2x2, ..., 2x10], ...
print(multiplication_table[0])  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(multiplication_table[1])  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

13. Cho list **`words = ["Python", "Java", "C++", "Ruby", "Go"]`**. Viết list comprehension lọc các từ có chứa chữ cái 'a' (không phân biệt hoa thường).

```python
words = ["Python", "Java", "C++", "Ruby", "Go"]
contains_a = # Code của bạn ở đây
print(contains_a)
# Kết quả: ['Java']
```

14. Viết list comprehension chuyển đổi list các số thành chuỗi binary (hệ nhị phân).

```python
numbers = [1, 2, 3, 4, 5, 10, 15, 20]
binary = # Code của bạn ở đây
print(binary)
# Kết quả: ['0b1', '0b10', '0b11', '0b100', '0b101', '0b1010', '0b1111', '0b10100']
```

> **💡 Gợi ý: Dùng hàm `bin()`**

15. Cho dict **`scores = {"Alice": 85, "Bob": 92, "Charlie": 78, "David": 95}`**. Viết dict comprehension lọc các học sinh có điểm >= 90.

```python
scores = {"Alice": 85, "Bob": 92, "Charlie": 78, "David": 95}
high_scores = # Code của bạn ở đây
print(high_scores)
# Kết quả: {'Bob': 92, 'David': 95}
```

16. Viết list comprehension tạo list các số hoàn hảo (perfect numbers) từ 1 đến 10000.

```python
def is_perfect(n):
    return n == sum([i for i in range(1, n) if n % i == 0])

perfect_numbers = # Code của bạn ở đây
print(perfect_numbers)
# Kết quả: [6, 28, 496, 8128]
```

> **💡 Số hoàn hảo là số bằng tổng các ước số dương của nó (không kể chính nó). Ví dụ: 6 = 1 + 2 + 3**

17. Cho list **`matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`**. Viết list comprehension chuyển vị (transpose) ma trận.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = # Code của bạn ở đây
print(transposed)
# Kết quả: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

> **💡 Gợi ý: Dùng `zip(*matrix)`**

18. Viết list comprehension tạo list các anagram pairs từ list các từ.

```python
words = ["listen", "silent", "enlist", "hello", "world"]
# Tìm các cặp từ là anagram (có cùng các chữ cái)
def are_anagrams(w1, w2):
    return sorted(w1) == sorted(w2) and w1 != w2

anagram_pairs = # Code của bạn ở đây
print(anagram_pairs)
# Kết quả: [('listen', 'silent'), ('listen', 'enlist'), ('silent', 'enlist')]
```

19. Cho list **`data = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}, {"name": "Charlie", "age": 22}]`**. Viết list comprehension lấy list tên của những người có tuổi > 23.

```python
data = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}, {"name": "Charlie", "age": 22}]
names = # Code của bạn ở đây
print(names)
# Kết quả: ['Alice', 'Bob']
```

20. Viết list comprehension tạo Pascal's Triangle (tam giác Pascal) với n hàng.

```python
def pascal_triangle(n):
    # Tạo n hàng của tam giác Pascal
    triangle = # Code của bạn ở đây
    return triangle

print(pascal_triangle(5))
# Kết quả:
# [[1],
#  [1, 1],
#  [1, 2, 1],
#  [1, 3, 3, 1],
#  [1, 4, 6, 4, 1]]
```

> **💡 Gợi ý: Mỗi phần tử là tổng của hai phần tử ở hàng trên. Có thể cần kết hợp với vòng lặp bình thường.**
