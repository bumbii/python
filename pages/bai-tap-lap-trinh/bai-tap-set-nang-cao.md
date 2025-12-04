---
description: Các bài tập về Set - Nâng cao
icon: circle-nodes
---

# Bài tập Set - Nâng cao

1. Viết hàm **`count_unique_words`** nhận vào một chuỗi văn bản và đếm số từ duy nhất (không phân biệt hoa thường).

```python
def count_unique_words(text):
    # Code của bạn ở đây
    pass

# Test
text = "Python is fun and Python is easy"
count = count_unique_words(text)
print(count)  # 5 (python, is, fun, and, easy)
```

2. Viết hàm **`find_missing_numbers`** nhận vào một set chứa các số từ 1 đến n (nhưng thiếu một số), tìm các số bị thiếu.

```python
def find_missing_numbers(numbers, n):
    # Code của bạn ở đây
    pass

# Test
numbers = {1, 2, 4, 6, 7, 9, 10}
missing = find_missing_numbers(numbers, 10)
print(missing)  # {3, 5, 8}
```

3. Viết hàm **`all_subsets`** nhận vào một set và trả về tất cả các tập con của set đó.

```python
def all_subsets(my_set):
    # Code của bạn ở đây
    pass

# Test
my_set = {1, 2, 3}
result = all_subsets(my_set)
print(result)
# [set(), {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}]
```

{% hint style="info" %}
Gợi ý: Dùng itertools.combinations hoặc đệ quy
{% endhint %}

4. Viết hàm **`set_operations`** nhận vào ba set và trả về dictionary chứa kết quả các phép toán.

```python
def set_operations(set1, set2, set3):
    # Code của bạn ở đây
    # Trả về dict với keys: "union_all", "intersection_all", "difference"
    pass

# Test
set1 = {1, 2, 3}
set2 = {2, 3, 4}
set3 = {3, 4, 5}
result = set_operations(set1, set2, set3)
print(result)
# {
#     "union_all": {1, 2, 3, 4, 5},
#     "intersection_all": {3},
#     "unique_to_set1": {1}
# }
```

5. Viết hàm **`powerset`** tính lũy thừa tập hợp (tất cả các tập con có thể) của một set.

```python
def powerset(my_set):
    # Code của bạn ở đây
    pass

# Test
my_set = {1, 2}
result = powerset(my_set)
print(result)
# {frozenset(), frozenset({1}), frozenset({2}), frozenset({1, 2})}
```

6. Viết hàm **`find_duplicates_in_lists`** nhận vào nhiều list và trả về set chứa các phần tử xuất hiện ở nhiều hơn một list.

```python
def find_duplicates_in_lists(*lists):
    # Code của bạn ở đây
    pass

# Test
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
list3 = [4, 5, 6, 7]
duplicates = find_duplicates_in_lists(list1, list2, list3)
print(duplicates)  # {3, 4, 5, 6}
```

7. Viết hàm **`jaccard_similarity`** tính độ tương đồng Jaccard giữa hai set.

Công thức: J(A,B) = |A ∩ B| / |A ∪ B|

```python
def jaccard_similarity(set1, set2):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
similarity = jaccard_similarity(set1, set2)
print(similarity)  # 0.333... (2/6)
```

8. Viết hàm **`partition_set`** chia một set thành hai set dựa trên một điều kiện (hàm).

```python
def partition_set(my_set, condition):
    # Code của bạn ở đây
    pass

# Test
numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
evens, odds = partition_set(numbers, lambda x: x % 2 == 0)
print(evens)  # {2, 4, 6, 8, 10}
print(odds)   # {1, 3, 5, 7, 9}
```

9. Viết hàm **`most_common_letters`** nhận vào một chuỗi và số n, trả về set chứa n ký tự xuất hiện nhiều nhất.

```python
def most_common_letters(text, n):
    # Code của bạn ở đây
    pass

# Test
text = "hello world"
result = most_common_letters(text, 3)
print(result)  # {'l', 'o', ' '} (hoặc thứ tự khác)
```

10. Viết hàm **`check_all_unique`** nhận vào một list và kiểm tra xem tất cả phần tử có duy nhất không (không có phần tử trùng lặp).

```python
def check_all_unique(my_list):
    # Code của bạn ở đây
    pass

# Test
list1 = [1, 2, 3, 4, 5]
print(check_all_unique(list1))  # True

list2 = [1, 2, 3, 2, 4]
print(check_all_unique(list2))  # False
```

11. Viết hàm **`set_cartesian_product`** tính tích Descartes của hai set (tất cả các cặp có thể).

```python
def set_cartesian_product(set1, set2):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2}
set2 = {'a', 'b'}
result = set_cartesian_product(set1, set2)
print(result)
# {(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')}
```

12. Viết chương trình phân tích mối quan hệ giữa 3 lớp học. Cho trước:

* **`class_a = {"Alice", "Bob", "Charlie", "David"}`**
* **`class_b = {"Bob", "David", "Eve", "Frank"}`**
* **`class_c = {"Charlie", "David", "Frank", "George"}`**

Tìm:

* Học sinh học tất cả 3 lớp
* Học sinh học đúng 2 lớp
* Học sinh chỉ học 1 lớp

13. Viết hàm **`symmetric_difference_multiple`** tính hiệu đối xứng của nhiều set (phần tử xuất hiện số lẻ lần).

```python
def symmetric_difference_multiple(*sets):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3}
set2 = {2, 3, 4}
set3 = {3, 4, 5}
result = symmetric_difference_multiple(set1, set2, set3)
print(result)  # {1, 3, 5}
```

14. Viết hàm **`filter_set`** nhận vào một set và một hàm điều kiện, trả về set mới chỉ chứa các phần tử thỏa điều kiện.

```python
def filter_set(my_set, condition):
    # Code của bạn ở đây
    pass

# Test
numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
result = filter_set(numbers, lambda x: x > 5)
print(result)  # {6, 7, 8, 9, 10}
```

15. Viết hàm **`map_set`** áp dụng một hàm lên tất cả phần tử của set và trả về set mới.

```python
def map_set(my_set, func):
    # Code của bạn ở đây
    pass

# Test
numbers = {1, 2, 3, 4, 5}
result = map_set(numbers, lambda x: x ** 2)
print(result)  # {1, 4, 9, 16, 25}
```

16. Viết hàm **`find_unique_in_all`** nhận vào nhiều set và trả về set chứa các phần tử chỉ xuất hiện trong đúng một set.

```python
def find_unique_in_all(*sets):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set3 = {5, 6, 7, 8}
result = find_unique_in_all(set1, set2, set3)
print(result)  # {1, 2, 7, 8}
```

17. Viết hàm **`is_partition`** kiểm tra xem một tập hợp các set có phải là phân hoạch của một set lớn không (không overlap và hợp lại bằng set lớn).

```python
def is_partition(main_set, *subsets):
    # Code của bạn ở đây
    pass

# Test
main_set = {1, 2, 3, 4, 5, 6}
subset1 = {1, 2}
subset2 = {3, 4}
subset3 = {5, 6}
print(is_partition(main_set, subset1, subset2, subset3))  # True

subset4 = {1, 2, 3}
subset5 = {3, 4, 5, 6}
print(is_partition(main_set, subset4, subset5))  # False (3 overlap)
```

18. Viết hàm **`create_frozenset_dict`** tạo dictionary với frozen set làm key.

```python
def create_frozenset_dict(data):
    # data là list of tuples: (set, value)
    # Trả về dict với frozenset làm key
    pass

# Test
data = [
    ({1, 2}, "pair1"),
    ({3, 4}, "pair2"),
    ({5, 6}, "pair3")
]
result = create_frozenset_dict(data)
print(result)
# {frozenset({1, 2}): "pair1", frozenset({3, 4}): "pair2", ...}
```

19. Viết hàm **`sliding_window_unique`** nhận vào một list và kích thước cửa sổ k, trả về list các set (mỗi set chứa các phần tử duy nhất trong cửa sổ).

```python
def sliding_window_unique(my_list, k):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 2, 4, 5, 4, 6]
result = sliding_window_unique(numbers, 3)
print(result)
# [{1, 2, 3}, {2, 3}, {2, 3, 4}, {2, 4, 5}, {4, 5}, {4, 5, 6}]
```

20. Viết hàm **`build_graph_from_sets`** nhận vào nhiều set và xây dựng đồ thị (graph) biểu diễn mối quan hệ giữa chúng (hai set có cạnh nối nếu có phần tử chung).

```python
def build_graph_from_sets(*sets):
    # Trả về dict biểu diễn graph
    # Key: index của set, Value: list các index của set có phần tử chung
    pass

# Test
set1 = {1, 2, 3}
set2 = {2, 3, 4}
set3 = {5, 6, 7}
set4 = {4, 5, 6}

graph = build_graph_from_sets(set1, set2, set3, set4)
print(graph)
# {
#     0: [1],           # set1 connected to set2
#     1: [0, 3],        # set2 connected to set1, set4
#     2: [3],           # set3 connected to set4
#     3: [1, 2]         # set4 connected to set2, set3
# }
```

21. Viết hàm **`bloom_filter_check`** mô phỏng đơn giản Bloom Filter sử dụng set (kiểm tra membership hiệu quả).

```python
class SimpleBloomFilter:
    def __init__(self):
        self.data = set()

    def add(self, item):
        # Thêm item vào filter
        pass

    def contains(self, item):
        # Kiểm tra item có trong filter không
        pass

# Test
bloom = SimpleBloomFilter()
bloom.add("hello")
bloom.add("world")
print(bloom.contains("hello"))  # True
print(bloom.contains("python"))  # False
```

22. Viết hàm **`set_cover_greedy`** giải bài toán Set Cover đơn giản bằng thuật toán tham lam (tìm số set nhỏ nhất để phủ tất cả phần tử).

```python
def set_cover_greedy(universe, sets):
    # universe: set chứa tất cả phần tử cần phủ
    # sets: list các set có sẵn
    # Trả về list các index của set được chọn
    pass

# Test
universe = {1, 2, 3, 4, 5}
sets = [
    {1, 2},
    {2, 3, 4},
    {4, 5},
    {1, 5}
]
result = set_cover_greedy(universe, sets)
print(result)  # [1, 3] hoặc [1, 2] (có thể có nhiều đáp án)
```

23. Viết hàm **`hamming_distance_sets`** tính khoảng cách Hamming giữa hai set (số phần tử khác nhau).

```python
def hamming_distance_sets(set1, set2):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
distance = hamming_distance_sets(set1, set2)
print(distance)  # 4 ({1, 2} khác + {5, 6} khác)
```

24. Viết hàm **`optimize_storage`** nhận vào một list các chuỗi và trả về set các từ duy nhất, giúp tiết kiệm bộ nhớ.

```python
def optimize_storage(strings):
    # Phân tích và trả về thống kê
    pass

# Test
strings = ["hello world", "world peace", "hello python", "python world"]
words, stats = optimize_storage(strings)
print(words)  # {'hello', 'world', 'peace', 'python'}
print(stats)  # {'total_words': 8, 'unique_words': 4, 'saved_percentage': 50}
```

25. Viết hàm **`find_cliques`** tìm tất cả các nhóm set có phần tử chung với nhau (cliques).

```python
def find_cliques(*sets):
    # Trả về list các cliques (mỗi clique là list các index)
    pass

# Test
set1 = {1, 2}
set2 = {2, 3}
set3 = {3, 4}
set4 = {5, 6}

cliques = find_cliques(set1, set2, set3, set4)
print(cliques)  # [[0, 1, 2], [3]]
```
