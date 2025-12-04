---
description: Các bài tập về Dictionary Comprehension - Nâng cao
icon: book
---


# Bài tập Dictionary Comprehension - Nâng cao

1. Viết dictionary comprehension tạo nested dictionary bảng cửu chương từ 1-5.

```python
# Kết quả: {1: {1: 1, 2: 2, 3: 3, 4: 4, 5: 5}, 2: {1: 2, 2: 4, ...}, ...}
multiplication_table = # Code của bạn ở đây
print(multiplication_table)
```

2. Viết dictionary comprehension làm phẳng nested dictionary.

```python
nested = {"a": {"x": 1, "y": 2}, "b": {"x": 3, "y": 4}}
# Kết quả: {'a_x': 1, 'a_y': 2, 'b_x': 3, 'b_y': 4}
flat = # Code của bạn ở đây
print(flat)
```

3. Viết dictionary comprehension nhóm danh sách số theo chẵn/lẻ.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Kết quả: {'even': [2, 4, 6, 8, 10], 'odd': [1, 3, 5, 7, 9]}
grouped = {
    "even": [n for n in numbers if n % 2 == 0],
    "odd": [n for n in numbers if n % 2 != 0]
}
print(grouped)
```

4. Viết dictionary comprehension đếm tần suất từ trong văn bản.

```python
text = "apple banana apple cherry banana apple"
words = text.split()
# Kết quả: {'apple': 3, 'banana': 2, 'cherry': 1}
word_freq = # Code của bạn ở đây
print(word_freq)
```

5. Viết dictionary comprehension merge nhiều dictionaries với xử lý conflict.

```python
dicts = [
    {"a": 1, "b": 2},
    {"b": 3, "c": 4},
    {"c": 5, "d": 6}
]
# Lấy giá trị cuối cùng khi key trùng
# Kết quả: {'a': 1, 'b': 3, 'c': 5, 'd': 6}
merged = {k: v for d in dicts for k, v in d.items()}
print(merged)
```

6. Viết dictionary comprehension tạo dictionary với multiple conditions.

```python
# Chỉ lấy số chia hết cho 2 và 3, value là số nhân với 10
numbers = range(1, 31)
# Kết quả: {6: 60, 12: 120, 18: 180, 24: 240, 30: 300}
special_numbers = # Code của bạn ở đây
print(special_numbers)
```

7. Viết dictionary comprehension tạo inverted index từ list of documents.

```python
documents = [
    "python is great",
    "java is popular",
    "python is easy"
]
# Kết quả: {'python': [0, 2], 'is': [0, 1, 2], 'great': [0], 'java': [1], ...}
inverted_index = # Code của bạn ở đây
print(inverted_index)
```

> **💡 Gợi ý: Dùng nested comprehension và enumerate**

8. Viết dictionary comprehension tính điểm trung bình cho mỗi học sinh.

```python
scores = {
    "Alice": [85, 90, 88],
    "Bob": [70, 75, 72],
    "Charlie": [95, 92, 98]
}
# Kết quả: {'Alice': 87.67, 'Bob': 72.33, 'Charlie': 95.0}
averages = # Code của bạn ở đây
print(averages)
```

9. Viết dictionary comprehension tạo lookup dictionary từ list of tuples.

```python
products = [
    ("P001", "Laptop", 1000),
    ("P002", "Mouse", 20),
    ("P003", "Keyboard", 50)
]
# Kết quả: {'P001': {'name': 'Laptop', 'price': 1000}, ...}
product_lookup = # Code của bạn ở đây
print(product_lookup)
```

10. Viết dictionary comprehension tạo matrix từ nested comprehension.

```python
size = 3
# Kết quả: {(0, 0): 0, (0, 1): 0, (0, 2): 0, (1, 0): 0, ...}
# Value = 1 nếu i == j (diagonal), ngược lại 0
identity_matrix = # Code của bạn ở đây
print(identity_matrix)
```

11. Viết dictionary comprehension phân loại điểm theo grade (A, B, C, D, F).

```python
scores = {"Alice": 95, "Bob": 78, "Charlie": 65, "David": 82, "Eve": 55}
# A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: <60
grades = # Code của bạn ở đây
print(grades)
```

12. Viết dictionary comprehension tạo histogram của độ dài từ.

```python
words = ["a", "ab", "abc", "ab", "abcd", "abc", "a"]
# Kết quả: {1: 2, 2: 2, 3: 2, 4: 1}
length_histogram = # Code của bạn ở đây
print(length_histogram)
```

13. Viết dictionary comprehension extract parameters từ URL query string.

```python
query_string = "name=Alice&age=25&city=Hanoi&country=Vietnam"
# Kết quả: {'name': 'Alice', 'age': '25', 'city': 'Hanoi', 'country': 'Vietnam'}
params = # Code của bạn ở đây
print(params)
```

14. Viết dictionary comprehension tạo adjacency list từ list of edges.

```python
edges = [(1, 2), (1, 3), (2, 3), (3, 4)]
# Kết quả: {1: [2, 3], 2: [3], 3: [4], 4: []}
graph = # Code của bạn ở đây
print(graph)
```

15. Viết dictionary comprehension normalize values (0-1 range).

```python
scores = {"Alice": 50, "Bob": 75, "Charlie": 100, "David": 25}
# Công thức: (value - min) / (max - min)
# Kết quả: {'Alice': 0.333..., 'Bob': 0.666..., 'Charlie': 1.0, 'David': 0.0}
normalized = # Code của bạn ở đây
print(normalized)
```

16. Viết dictionary comprehension tạo mapping giữa tên file và extension.

```python
files = ["document.pdf", "image.png", "script.py", "data.csv", "photo.jpg"]
# Kết quả: {'pdf': ['document.pdf'], 'png': ['image.png'], ...}
by_extension = # Code của bạn ở đây
print(by_extension)
```

17. Viết dictionary comprehension transpose dictionary of lists.

```python
data = {
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "city": ["Hanoi", "HCMC", "Da Nang"]
}
# Kết quả: [
#     {'name': 'Alice', 'age': 25, 'city': 'Hanoi'},
#     {'name': 'Bob', 'age': 30, 'city': 'HCMC'},
#     {'name': 'Charlie', 'age': 35, 'city': 'Da Nang'}
# ]
transposed = # Code của bạn ở đây
print(transposed)
```

18. Viết dictionary comprehension tạo lookup cho anagrams.

```python
words = ["listen", "silent", "hello", "world", "enlist"]
# Kết quả: {'eilnst': ['listen', 'silent', 'enlist'], 'ehllo': ['hello'], ...}
anagram_groups = # Code của bạn ở đây
print(anagram_groups)
```

> **💡 Gợi ý: Dùng sorted() để tạo signature cho mỗi từ**

19. Viết dictionary comprehension tính TF (term frequency) cho documents.

```python
documents = [
    "python is great",
    "python is powerful",
    "java is popular"
]
# TF = số lần xuất hiện / tổng số từ trong document
# Kết quả: {0: {'python': 0.333, 'is': 0.333, 'great': 0.333}, ...}
tf = # Code của bạn ở đây
print(tf)
```

20. Viết dictionary comprehension tạo mapping từ student ID sang full info.

```python
student_ids = ["S001", "S002", "S003"]
names = ["Alice", "Bob", "Charlie"]
ages = [20, 21, 22]
grades = ["A", "B", "A"]

# Kết quả: {
#     'S001': {'name': 'Alice', 'age': 20, 'grade': 'A'},
#     'S002': {'name': 'Bob', 'age': 21, 'grade': 'B'},
#     ...
# }
students = # Code của bạn ở đây
print(students)
```

21. Viết dictionary comprehension tính cumulative sum.

```python
numbers = {"Jan": 100, "Feb": 150, "Mar": 200, "Apr": 120}
# Kết quả: {'Jan': 100, 'Feb': 250, 'Mar': 450, 'Apr': 570}
# Hint: Dùng itertools.accumulate hoặc tự tính
cumulative = # Code của bạn ở đây
print(cumulative)
```

22. Viết dictionary comprehension filter và transform nested data.

```python
users = [
    {"name": "Alice", "age": 25, "active": True},
    {"name": "Bob", "age": 17, "active": False},
    {"name": "Charlie", "age": 30, "active": True}
]
# Chỉ lấy user active và age >= 18, mapping name -> age
# Kết quả: {'Alice': 25, 'Charlie': 30}
adult_active_users = # Code của bạn ở đây
print(adult_active_users)
```

23. Viết dictionary comprehension tạo lookup cho substring search.

```python
words = ["apple", "application", "apply", "banana", "band"]
prefix = "app"
# Tìm tất cả từ bắt đầu với prefix, mapping word -> length
# Kết quả: {'apple': 5, 'application': 11, 'apply': 5}
prefix_words = # Code của bạn ở đây
print(prefix_words)
```

24. Viết dictionary comprehension calculate moving average.

```python
prices = {"Day1": 100, "Day2": 102, "Day3": 98, "Day4": 105, "Day5": 110}
window = 3
# Tính moving average với window size = 3
# Kết quả: {'Day3': 100.0, 'Day4': 101.67, 'Day5': 104.33}
moving_avg = # Code của bạn ở đây
print(moving_avg)
```

25. Viết dictionary comprehension tạo Caesar cipher mapping.

```python
shift = 3
# Tạo mapping a->d, b->e, c->f, ...
# Kết quả: {'a': 'd', 'b': 'e', 'c': 'f', ..., 'x': 'a', 'y': 'b', 'z': 'c'}
caesar_map = # Code của bạn ở đây
print(caesar_map)
```

> **💡 Gợi ý: Dùng ord(), chr() và modulo**
