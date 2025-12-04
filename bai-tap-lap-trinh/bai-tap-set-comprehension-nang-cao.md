---
description: Các bài tập về Set Comprehension - Nâng cao
icon: circle
---


# Bài tập Set Comprehension - Nâng cao

1. Viết set comprehension flatten nested lists và loại bỏ duplicates.

```python
nested_lists = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
# Kết quả: {1, 2, 3, 4, 5}
flat_unique = # Code của bạn ở đây
print(flat_unique)
```

2. Viết set comprehension lấy tất cả substrings độ dài 2 từ chuỗi.

```python
text = "hello"
# Kết quả: {'he', 'el', 'll', 'lo'}
substrings = # Code của bạn ở đây
print(substrings)
```

3. Viết set comprehension lấy tất cả factors (ước số) của các số trong list.

```python
numbers = [12, 18, 24]
# Kết quả: {1, 2, 3, 4, 6, 8, 9, 12, 18, 24}
all_factors = # Code của bạn ở đây
print(all_factors)
```

> **💡 Gợi ý: Nested comprehension để tìm factors của mỗi số**

4. Viết set comprehension tìm tất cả anagrams của một từ trong danh sách.

```python
target = "listen"
words = ["enlist", "silent", "hello", "inlets", "world"]
# Kết quả: {'enlist', 'silent', 'inlets'}
anagrams = # Code của bạn ở đây
print(anagrams)
```

5. Viết set comprehension lấy unique pairs từ list (không tính thứ tự).

```python
items = [1, 2, 3, 4]
# Kết quả: {(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)}
pairs = # Code của bạn ở đây
print(pairs)
```

6. Viết set comprehension lấy tất cả possible sums của hai số trong list.

```python
numbers = [1, 2, 3, 4, 5]
# Kết quả: {3, 4, 5, 6, 7, 8, 9}
possible_sums = # Code của bạn ở đây
print(possible_sums)
```

7. Viết set comprehension extract hashtags từ text.

```python
text = "I love #Python and #Coding! #Python is #awesome #coding"
# Kết quả: {'#python', '#coding', '#awesome'} (lowercase)
hashtags = # Code của bạn ở đây
print(hashtags)
```

8. Viết set comprehension tìm common elements trong nhiều lists.

```python
lists = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9]
]
# Kết quả: {5} (phần tử có trong tất cả lists)
common_all = # Code của bạn ở đây
print(common_all)
```

> **💡 Gợi ý: Dùng set.intersection() hoặc & operator**

9. Viết set comprehension lấy unique characters từ nhiều strings.

```python
strings = ["hello", "world", "python"]
# Kết quả: {'h', 'e', 'l', 'o', 'w', 'r', 'd', 'p', 'y', 't', 'n'}
all_chars = # Code của bạn ở đây
print(all_chars)
```

10. Viết set comprehension tìm numbers có chữ số lặp lại.

```python
# Từ 10 đến 100, tìm số có chữ số lặp (như 11, 22, 33, ...)
# Kết quả: {11, 22, 33, 44, 55, 66, 77, 88, 99}
repeated_digits = # Code của bạn ở đây
print(repeated_digits)
```

11. Viết set comprehension lấy unique word lengths từ văn bản (min 3 ký tự).

```python
text = "The quick brown fox jumps over the lazy dog"
# Kết quả: {3, 4, 5} (độ dài của các từ >= 3 ký tự)
word_lengths = # Code của bạn ở đây
print(word_lengths)
```

12. Viết set comprehension tìm Pythagorean triples a² + b² = c² (a, b, c <= 20).

```python
# Kết quả: {(3, 4, 5), (5, 12, 13), (6, 8, 10), ...}
pythagorean_triples = # Code của bạn ở đây
print(pythagorean_triples)
```

> **💡 Gợi ý: Triple nested comprehension với điều kiện a² + b² = c²**

13. Viết set comprehension extract unique IP addresses từ log.

```python
log = [
    "192.168.1.1 - GET /home",
    "192.168.1.2 - POST /api",
    "192.168.1.1 - GET /about",
    "10.0.0.1 - GET /home"
]
# Kết quả: {'192.168.1.1', '192.168.1.2', '10.0.0.1'}
ip_addresses = # Code của bạn ở đây
print(ip_addresses)
```

14. Viết set comprehension tìm words có cả vowels và consonants.

```python
words = ["hello", "why", "rhythm", "python", "a", "the"]
vowels = set("aeiou")
# Kết quả: {'hello', 'python', 'the'}
mixed_words = # Code của bạn ở đây
print(mixed_words)
```

15. Viết set comprehension lấy unique sorted tuple từ list of lists.

```python
lists = [[3, 1, 2], [2, 1, 3], [1, 2, 3], [4, 5, 6]]
# Kết quả: {(1, 2, 3), (4, 5, 6)}
unique_sorted = # Code của bạn ở đây
print(unique_sorted)
```

16. Viết set comprehension tìm characters xuất hiện trong tất cả words.

```python
words = ["hello", "help", "heal", "hero"]
# Kết quả: {'h', 'e', 'l'}
common_chars = # Code của bạn ở đây
print(common_chars)
```

17. Viết set comprehension lấy unique permutations của digits trong số.

```python
number = 1223
# Lấy tất cả số có thể tạo từ các chữ số này
# Kết quả: {1223, 1232, 1322, 2123, 2132, 2213, 2231, 2312, 2321, 3122, 3212, 3221}
# Hint: Convert to string, use itertools.permutations
from itertools import permutations
perms = # Code của bạn ở đây
print(perms)
```

18. Viết set comprehension tìm words có pattern giống nhau (cùng structure).

```python
# Pattern: "hello" -> (1,2,3,3,4), "book" -> (1,2,2,3)
words = ["hello", "belle", "happy", "puppy"]
target_pattern = tuple([i for i, c in enumerate("hello") if "hello".index(c) == i])
# Tìm words có cùng pattern với "hello"
# Kết quả: {'hello', 'belle'}
same_pattern = # Code của bạn ở đây
print(same_pattern)
```

19. Viết set comprehension tạo power set (tất cả subsets) của một set nhỏ.

```python
original = {1, 2, 3}
# Kết quả: {(), (1,), (2,), (3,), (1,2), (1,3), (2,3), (1,2,3)}
from itertools import combinations
power_set = # Code của bạn ở đây
print(power_set)
```

20. Viết set comprehension tìm palindromic substrings độ dài >= 3.

```python
text = "racecar"
# Kết quả: {'aca', 'cec', 'aceca', 'racecar'}
palindromic_substrings = # Code của bạn ở đây
print(palindromic_substrings)
```

21. Viết set comprehension lấy unique dates từ timestamps.

```python
timestamps = [
    "2024-01-15 10:30:00",
    "2024-01-15 14:20:00",
    "2024-01-16 09:00:00",
    "2024-01-16 16:45:00"
]
# Kết quả: {'2024-01-15', '2024-01-16'}
dates = # Code của bạn ở đây
print(dates)
```

22. Viết set comprehension tìm mutual friends giữa users.

```python
friendships = {
    "Alice": {"Bob", "Charlie", "David"},
    "Bob": {"Alice", "Charlie", "Eve"},
    "Charlie": {"Alice", "Bob", "Frank"}
}
user1, user2 = "Alice", "Bob"
# Kết quả: {'Charlie'}
mutual = # Code của bạn ở đây
print(mutual)
```

23. Viết set comprehension lấy unique n-grams từ text.

```python
text = "hello world"
n = 3  # trigrams
# Kết quả: {'hel', 'ell', 'llo', 'lo ', 'o w', ' wo', 'wor', 'orl', 'rld'}
ngrams = # Code của bạn ở đây
print(ngrams)
```

24. Viết set comprehension tìm words có unique characters (không có ký tự lặp).

```python
words = ["python", "java", "rust", "go", "swift", "ruby"]
# Kết quả: {'python', 'rust', 'go', 'swift'}
unique_char_words = # Code của bạn ở đây
print(unique_char_words)
```

25. Viết set comprehension tạo all possible coordinates trong grid.

```python
rows = 3
cols = 3
# Kết quả: {(0,0), (0,1), (0,2), (1,0), ..., (2,2)}
coordinates = # Code của bạn ở đây
print(coordinates)
```

26. Viết set comprehension tìm words containing all vowels.

```python
words = ["education", "queue", "aeiou", "hello", "beautiful"]
vowels = set("aeiou")
# Kết quả: {'education'}
all_vowel_words = # Code của bạn ở đây
print(all_vowel_words)
```

27. Viết set comprehension extract unique numbers từ mixed string.

```python
text = "I have 5 apples, 10 oranges, and 5 bananas. Total: 20 fruits."
# Kết quả: {5, 10, 20}
numbers = # Code của bạn ở đây
print(numbers)
```

> **💡 Gợi ý: Dùng regex hoặc str.isdigit()**

28. Viết set comprehension tìm connected components trong graph.

```python
edges = [(1, 2), (2, 3), (4, 5), (6, 7), (7, 8)]
# Tìm tất cả nodes
# Kết quả: {1, 2, 3, 4, 5, 6, 7, 8}
nodes = # Code của bạn ở đây
print(nodes)
```

29. Viết set comprehension lấy file basenames (không có extension).

```python
files = ["document.pdf", "image.png", "script.py", "data.csv"]
# Kết quả: {'document', 'image', 'script', 'data'}
basenames = # Code của bạn ở đây
print(basenames)
```

30. Viết set comprehension tìm Armstrong numbers (narcissistic numbers) <= 1000.

```python
# Armstrong number: số = tổng các chữ số mũ số lượng chữ số
# VD: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
# Kết quả: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407}
armstrong_numbers = # Code của bạn ở đây
print(armstrong_numbers)
```
