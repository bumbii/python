---
description: Các bài tập về Enumerate và Zip - Cơ bản
icon: arrows-rotate
---

# Bài tập Enumerate và Zip - Cơ bản

## Phần 1: enumerate()

1. Viết chương trình in list fruits với index từ 0.

```python
fruits = ["apple", "banana", "cherry", "date"]
# Output:
# 0: apple
# 1: banana
# 2: cherry
# 3: date

# Code của bạn ở đây
```

2. Viết chương trình in list với số thứ tự bắt đầu từ 1.

```python
fruits = ["apple", "banana", "cherry"]
# Output:
# 1: apple
# 2: banana
# 3: cherry

# Code của bạn ở đây
```

3. Viết hàm **`find_index`** tìm vị trí đầu tiên của phần tử trong list.

```python
def find_index(lst, target):
    # Dùng enumerate()
    pass

# Test
numbers = [10, 20, 30, 40, 50]
print(find_index(numbers, 30))  # 2
print(find_index(numbers, 100))  # -1 (không tìm thấy)
```

4. Viết hàm **`find_all_indices`** tìm tất cả vị trí của phần tử.

```python
def find_all_indices(lst, target):
    # Dùng enumerate()
    pass

# Test
numbers = [1, 2, 3, 2, 4, 2, 5]
print(find_all_indices(numbers, 2))  # [1, 3, 5]
```

5. Viết chương trình in menu với số thứ tự.

```python
menu = ["Pizza", "Burger", "Pasta", "Salad"]
# Output:
# === MENU ===
# 1. Pizza
# 2. Burger
# 3. Pasta
# 4. Salad

# Code của bạn ở đây
```

6. Viết hàm **`enumerate_dict`** tạo dictionary với index làm key.

```python
def enumerate_dict(lst):
    # Trả về {0: item1, 1: item2, ...}
    pass

# Test
fruits = ["apple", "banana", "cherry"]
print(enumerate_dict(fruits))
# {0: 'apple', 1: 'banana', 2: 'cherry'}
```

7. Viết hàm **`print_with_line_numbers`** in text với số dòng.

```python
def print_with_line_numbers(text):
    lines = text.split("\\n")
    # In mỗi dòng với số thứ tự
    pass

# Test
text = "Line one\\nLine two\\nLine three"
print_with_line_numbers(text)
# 1: Line one
# 2: Line two
# 3: Line three
```

8. Viết hàm **`find_even_indices`** tìm vị trí của tất cả số chẵn.

```python
def find_even_indices(numbers):
    # Trả về list indices
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
print(find_even_indices(numbers))  # [1, 3, 5, 7]
```

9. Viết hàm **`replace_by_index`** thay thế phần tử tại vị trí cụ thể.

```python
def replace_by_index(lst, target_index, new_value):
    # Dùng enumerate()
    pass

# Test
fruits = ["apple", "banana", "cherry"]
print(replace_by_index(fruits, 1, "orange"))
# ["apple", "orange", "cherry"]
```

10. Viết hàm **`enumerate_string`** đánh số từng ký tự trong chuỗi.

```python
def enumerate_string(text):
    # In index: char
    pass

# Test
enumerate_string("Python")
# 0: P
# 1: y
# 2: t
# 3: h
# 4: o
# 5: n
```

## Phần 2: zip()

11. Viết chương trình kết hợp 2 lists names và ages.

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
# Output:
# Alice: 25
# Bob: 30
# Charlie: 35

# Code của bạn ở đây
```

12. Viết hàm **`create_dict_from_lists`** tạo dictionary từ 2 lists.

```python
def create_dict_from_lists(keys, values):
    # Dùng zip() và dict()
    pass

# Test
keys = ["name", "age", "city"]
values = ["Alice", 25, "Hanoi"]
print(create_dict_from_lists(keys, values))
# {'name': 'Alice', 'age': 25, 'city': 'Hanoi'}
```

13. Viết hàm **`combine_lists`** kết hợp 3 lists thành list of tuples.

```python
def combine_lists(list1, list2, list3):
    # Dùng zip()
    pass

# Test
names = ["Alice", "Bob"]
ages = [25, 30]
cities = ["Hanoi", "HCMC"]
print(combine_lists(names, ages, cities))
# [('Alice', 25, 'Hanoi'), ('Bob', 30, 'HCMC')]
```

14. Viết hàm **`sum_parallel`** tính tổng từng cặp phần tử.

```python
def sum_parallel(list1, list2):
    # Trả về list tổng
    pass

# Test
list1 = [1, 2, 3, 4]
list2 = [10, 20, 30, 40]
print(sum_parallel(list1, list2))
# [11, 22, 33, 44]
```

15. Viết hàm **`compare_lists`** so sánh từng cặp phần tử.

```python
def compare_lists(list1, list2):
    # In ra các cặp bằng nhau và khác nhau
    pass

# Test
list1 = [1, 2, 3, 4]
list2 = [1, 5, 3, 8]
compare_lists(list1, list2)
# Position 0: 1 == 1 (Equal)
# Position 1: 2 != 5 (Different)
# Position 2: 3 == 3 (Equal)
# Position 3: 4 != 8 (Different)
```

16. Viết hàm **`unzip_pairs`** tách list of pairs thành 2 lists.

```python
def unzip_pairs(pairs):
    # Dùng zip(*pairs)
    pass

# Test
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
nums, letters = unzip_pairs(pairs)
print(nums)     # [1, 2, 3]
print(letters)  # ['a', 'b', 'c']
```

17. Viết hàm **`calculate_total_scores`** tính tổng điểm 3 môn.

```python
def calculate_total_scores(math, english, science):
    # Trả về list tổng điểm
    pass

# Test
math = [85, 90, 78]
english = [88, 82, 95]
science = [92, 88, 80]
print(calculate_total_scores(math, english, science))
# [265, 260, 253]
```

18. Viết hàm **`format_full_names`** kết hợp first names và last names.

```python
def format_full_names(first_names, last_names):
    # Trả về list full names
    pass

# Test
first = ["Alice", "Bob", "Charlie"]
last = ["Smith", "Johnson", "Brown"]
print(format_full_names(first, last))
# ['Alice Smith', 'Bob Johnson', 'Charlie Brown']
```

19. Viết hàm **`multiply_parallel`** nhân từng cặp phần tử.

```python
def multiply_parallel(list1, list2):
    # Trả về list tích
    pass

# Test
list1 = [2, 3, 4, 5]
list2 = [10, 20, 30, 40]
print(multiply_parallel(list1, list2))
# [20, 60, 120, 200]
```

20. Viết hàm **`create_person_records`** tạo list of dictionaries.

```python
def create_person_records(names, ages, cities):
    # Mỗi person là dict với keys: name, age, city
    pass

# Test
names = ["Alice", "Bob"]
ages = [25, 30]
cities = ["Hanoi", "HCMC"]
print(create_person_records(names, ages, cities))
# [
#     {'name': 'Alice', 'age': 25, 'city': 'Hanoi'},
#     {'name': 'Bob', 'age': 30, 'city': 'HCMC'}
# ]
```
