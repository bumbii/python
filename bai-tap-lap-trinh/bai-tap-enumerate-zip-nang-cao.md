---
description: Các bài tập về Enumerate và Zip - Nâng cao
icon: arrows-rotate
---


# Bài tập Enumerate và Zip - Nâng cao

1. Viết hàm **`enumerate_with_condition`** chỉ enumerate phần tử thỏa điều kiện.

```python
def enumerate_with_condition(lst, predicate):
    # Trả về list of (index, value) chỉ cho items thỏa predicate
    pass

# Test
numbers = [10, 25, 30, 15, 40, 5]
result = enumerate_with_condition(numbers, lambda x: x > 20)
print(result)  # [(1, 25), (2, 30), (4, 40)]
```

2. Viết hàm **`find_index_by_condition`** tìm index đầu tiên thỏa điều kiện.

```python
def find_index_by_condition(lst, predicate):
    # Trả về index hoặc -1
    pass

# Test
numbers = [10, 15, 20, 25, 30]
print(find_index_by_condition(numbers, lambda x: x > 20))  # 3
```

3. Viết hàm **`enumerate_nested`** enumerate nested list.

```python
def enumerate_nested(nested_list):
    # Trả về (outer_index, inner_index, value)
    pass

# Test
matrix = [[1, 2], [3, 4], [5, 6]]
for outer, inner, value in enumerate_nested(matrix):
    print(f"[{outer}][{inner}] = {value}")
# [0][0] = 1
# [0][1] = 2
# [1][0] = 3
# ...
```

4. Viết hàm **`rank_scores`** xếp hạng điểm (giữ index gốc).

```python
def rank_scores(scores):
    # Trả về list of (rank, original_index, score)
    pass

# Test
scores = [85, 95, 78, 92]
result = rank_scores(scores)
print(result)
# [(1, 1, 95), (2, 3, 92), (3, 0, 85), (4, 2, 78)]
```

5. Viết hàm **`sliding_window_enumerate`** tạo sliding windows với index.

```python
def sliding_window_enumerate(lst, window_size):
    # Trả về (start_index, window)
    pass

# Test
numbers = [1, 2, 3, 4, 5]
for index, window in sliding_window_enumerate(numbers, 3):
    print(f"{index}: {window}")
# 0: [1, 2, 3]
# 1: [2, 3, 4]
# 2: [3, 4, 5]
```

6. Viết hàm **`zip_with_default`** zip lists với giá trị mặc định khi hết.

```python
def zip_with_default(*lists, default=None):
    # Giống zip_longest nhưng tự implement
    pass

# Test
list1 = [1, 2, 3]
list2 = [4, 5]
result = list(zip_with_default(list1, list2, default=0))
print(result)  # [(1, 4), (2, 5), (3, 0)]
```

7. Viết hàm **`zip_dict`** zip nhiều dictionaries theo keys.

```python
def zip_dict(*dicts):
    # Kết hợp values của cùng key
    pass

# Test
dict1 = {"a": 1, "b": 2}
dict2 = {"a": 10, "b": 20}
dict3 = {"a": 100, "b": 200}
result = zip_dict(dict1, dict2, dict3)
print(result)
# {'a': (1, 10, 100), 'b': (2, 20, 200)}
```

8. Viết hàm **`transpose_list_of_dicts`** chuyển đổi list of dicts sang dict of lists.

```python
def transpose_list_of_dicts(records):
    # Dùng zip()
    pass

# Test
records = [
    {"name": "Alice", "age": 25, "city": "Hanoi"},
    {"name": "Bob", "age": 30, "city": "HCMC"}
]
result = transpose_list_of_dicts(records)
print(result)
# {
#     'name': ['Alice', 'Bob'],
#     'age': [25, 30],
#     'city': ['Hanoi', 'HCMC']
# }
```

9. Viết hàm **`parallel_max`** tìm max của từng cột trong nhiều lists.

```python
def parallel_max(*lists):
    # Trả về list max của từng vị trí
    pass

# Test
list1 = [1, 5, 3, 9]
list2 = [4, 2, 8, 6]
list3 = [3, 7, 2, 5]
print(parallel_max(list1, list2, list3))
# [4, 7, 8, 9]
```

10. Viết hàm **`enumerate_with_groups`** nhóm consecutive items.

```python
def enumerate_with_groups(lst):
    # Trả về (group_num, items_in_group)
    # Group thay đổi khi giá trị thay đổi
    pass

# Test
numbers = [1, 1, 1, 2, 2, 3, 3, 3, 3]
for group_id, items in enumerate_with_groups(numbers):
    print(f"Group {group_id}: {items}")
# Group 0: [1, 1, 1]
# Group 1: [2, 2]
# Group 2: [3, 3, 3, 3]
```

11. Viết hàm **`zip_longest_custom`** tự implement zip_longest.

```python
def zip_longest_custom(*iterables, fillvalue=None):
    # Không dùng itertools.zip_longest
    pass

# Test
list1 = [1, 2, 3]
list2 = ['a', 'b']
result = list(zip_longest_custom(list1, list2, fillvalue='?'))
print(result)  # [(1, 'a'), (2, 'b'), (3, '?')]
```

12. Viết hàm **`merge_sorted_lists_indexed`** merge sorted lists và giữ index gốc.

```python
def merge_sorted_lists_indexed(list1, list2):
    # Trả về merged list với (value, source_list, original_index)
    pass

# Test
list1 = [1, 3, 5]
list2 = [2, 4, 6]
result = merge_sorted_lists_indexed(list1, list2)
print(result)
# [(1, 'list1', 0), (2, 'list2', 0), (3, 'list1', 1), ...]
```

13. Viết hàm **`enumerate_with_prev_next`** enumerate với previous và next value.

```python
def enumerate_with_prev_next(lst):
    # Trả về (index, prev, current, next)
    pass

# Test
numbers = [10, 20, 30, 40, 50]
for i, prev, curr, next in enumerate_with_prev_next(numbers):
    print(f"{i}: prev={prev}, curr={curr}, next={next}")
# 0: prev=None, curr=10, next=20
# 1: prev=10, curr=20, next=30
# ...
# 4: prev=40, curr=50, next=None
```

14. Viết hàm **`zip_with_operation`** áp dụng operation cho mỗi cặp.

```python
def zip_with_operation(list1, list2, operation):
    # operation: function nhận 2 params
    pass

# Test
list1 = [1, 2, 3, 4]
list2 = [10, 20, 30, 40]
result = zip_with_operation(list1, list2, lambda a, b: a * b)
print(result)  # [10, 40, 90, 160]
```

15. Viết hàm **`find_differences_indexed`** tìm vị trí khác nhau giữa 2 lists.

```python
def find_differences_indexed(list1, list2):
    # Trả về list of (index, value1, value2)
    pass

# Test
list1 = [1, 2, 3, 4, 5]
list2 = [1, 5, 3, 8, 5]
result = find_differences_indexed(list1, list2)
print(result)  # [(1, 2, 5), (3, 4, 8)]
```

16. Viết hàm **`enumerate_chunks`** enumerate theo chunks.

```python
def enumerate_chunks(lst, chunk_size):
    # Trả về (chunk_index, chunk)
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for index, chunk in enumerate_chunks(numbers, 3):
    print(f"Chunk {index}: {chunk}")
# Chunk 0: [1, 2, 3]
# Chunk 1: [4, 5, 6]
# Chunk 2: [7, 8, 9]
```

17. Viết hàm **`parallel_statistics`** tính statistics cho nhiều lists.

```python
def parallel_statistics(*lists):
    # Trả về dict with min, max, avg cho từng position
    pass

# Test
list1 = [10, 20, 30]
list2 = [15, 25, 35]
list3 = [12, 22, 32]
result = parallel_statistics(list1, list2, list3)
print(result)
# [
#     {'min': 10, 'max': 15, 'avg': 12.33},
#     {'min': 20, 'max': 25, 'avg': 22.33},
#     {'min': 30, 'max': 35, 'avg': 32.33}
# ]
```

18. Viết hàm **`cyclic_zip`** zip với cycling (lặp lại list ngắn hơn).

```python
def cyclic_zip(list1, list2):
    # List ngắn hơn sẽ lặp lại
    pass

# Test
list1 = [1, 2, 3, 4, 5, 6]
list2 = ['a', 'b']
result = list(cyclic_zip(list1, list2))
print(result)
# [(1, 'a'), (2, 'b'), (3, 'a'), (4, 'b'), (5, 'a'), (6, 'b')]
```

> **💡 Gợi ý: Dùng itertools.cycle()**

19. Viết hàm **`enumerate_alternating`** enumerate nhóm chẵn/lẻ riêng.

```python
def enumerate_alternating(lst):
    # Trả về (even_index, odd_index, value)
    pass

# Test
numbers = [10, 20, 30, 40, 50, 60]
for ei, oi, val in enumerate_alternating(numbers):
    print(f"even_idx={ei}, odd_idx={oi}, value={val}")
# even_idx=0, odd_idx=None, value=10
# even_idx=None, odd_idx=0, value=20
# even_idx=1, odd_idx=None, value=30
# ...
```

20. Viết hàm **`weighted_average_parallel`** tính weighted average.

```python
def weighted_average_parallel(values_lists, weights):
    # values_lists: list of lists
    # weights: list of weights
    # Trả về list weighted averages
    pass

# Test
math = [80, 90, 70]
english = [85, 88, 75]
science = [90, 85, 80]
weights = [0.4, 0.3, 0.3]

result = weighted_average_parallel([math, english, science], weights)
print(result)
# [85.5, 88.1, 74.5]
```

21. Viết hàm **`enumerate_skip`** enumerate với skip pattern.

```python
def enumerate_skip(lst, skip=1):
    # skip=1: lấy mọi phần tử, skip=2: lấy 1 bỏ 1, etc.
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for index, value in enumerate_skip(numbers, skip=2):
    print(f"{index}: {value}")
# 0: 1
# 2: 3
# 4: 5
# ...
```

22. Viết hàm **`zip_matrix_columns`** zip columns của matrix.

```python
def zip_matrix_columns(matrix):
    # Trả về list of columns
    pass

# Test
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
result = zip_matrix_columns(matrix)
print(result)
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

23. Viết hàm **`enumerate_with_running_total`** enumerate với running total.

```python
def enumerate_with_running_total(lst):
    # Trả về (index, value, running_total)
    pass

# Test
numbers = [10, 20, 30, 40, 50]
for idx, val, total in enumerate_with_running_total(numbers):
    print(f"{idx}: value={val}, total={total}")
# 0: value=10, total=10
# 1: value=20, total=30
# 2: value=30, total=60
# ...
```

24. Viết hàm **`parallel_filter`** filter nhiều lists cùng lúc.

```python
def parallel_filter(predicate, *lists):
    # Giữ items ở vị trí thỏa predicate
    pass

# Test
list1 = [1, 2, 3, 4, 5]
list2 = [10, 20, 30, 40, 50]
list3 = ['a', 'b', 'c', 'd', 'e']

# Chỉ giữ positions where list1[i] % 2 == 0
filtered = parallel_filter(lambda x, y, z: x % 2 == 0, list1, list2, list3)
print(filtered)
# ([2, 4], [20, 40], ['b', 'd'])
```

25. Viết hàm **`enumerate_hierarchical`** enumerate cho hierarchical data.

```python
def enumerate_hierarchical(data, level=0):
    # data: nested list/dict structure
    # Trả về (level, path, value)
    pass

# Test
data = {
    "root": {
        "child1": [1, 2, 3],
        "child2": {
            "grandchild": [4, 5]
        }
    }
}

for level, path, value in enumerate_hierarchical(data):
    print(f"Level {level}: {path} = {value}")
```

26. Viết hàm **`zip_with_index_mapping`** tạo mapping giữa indices của 2 sorted lists.

```python
def zip_with_index_mapping(sorted_list1, sorted_list2):
    # Tìm matching elements và map indices
    pass

# Test
list1 = [1, 3, 5, 7, 9]
list2 = [2, 3, 5, 8, 9]
result = zip_with_index_mapping(list1, list2)
print(result)
# {(1, 1): 3, (2, 2): 5, (4, 4): 9}
```

27. Viết hàm **`rolling_window_enumerate`** enumerate với rolling statistics.

```python
def rolling_window_enumerate(lst, window_size, func):
    # Áp dụng func cho từng window
    # Trả về (index, window, result)
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for idx, window, avg in rolling_window_enumerate(numbers, 3, lambda w: sum(w)/len(w)):
    print(f"{idx}: {window} -> avg={avg:.1f}")
# 0: [1, 2, 3] -> avg=2.0
# 1: [2, 3, 4] -> avg=3.0
# ...
```

28. Viết hàm **`enumerate_with_context`** enumerate với context (n items trước/sau).

```python
def enumerate_with_context(lst, context_size=1):
    # Trả về (index, context_before, current, context_after)
    pass

# Test
numbers = [10, 20, 30, 40, 50]
for idx, before, curr, after in enumerate_with_context(numbers, context_size=1):
    print(f"{idx}: before={before}, curr={curr}, after={after}")
# 0: before=[], curr=10, after=[20]
# 1: before=[10], curr=20, after=[30]
# ...
```

29. Viết hàm **`multi_column_sort_enumerate`** sort và enumerate với multiple keys.

```python
def multi_column_sort_enumerate(data, *sort_keys):
    # data: list of dicts
    # sort_keys: list of keys to sort by
    # Trả về sorted data với original indices
    pass

# Test
students = [
    {"name": "Alice", "class": "A", "score": 85},
    {"name": "Bob", "class": "B", "score": 85},
    {"name": "Charlie", "class": "A", "score": 90}
]

for orig_idx, student in multi_column_sort_enumerate(students, "score", "name"):
    print(f"Original index {orig_idx}: {student}")
```

30. Viết hàm **`lazy_enumerate_zip`** tạo generator kết hợp enumerate và zip.

```python
def lazy_enumerate_zip(*lists, start=0):
    # Generator function
    # Trả về (index, (item1, item2, ...))
    pass

# Test
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [10, 20, 30]

for idx, (num, letter, val) in lazy_enumerate_zip(list1, list2, list3):
    print(f"{idx}: {num}, {letter}, {val}")
# 0: 1, a, 10
# 1: 2, b, 20
# 2: 3, c, 30
```
