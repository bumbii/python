---
description: Các bài tập về List - Nâng cao
icon: list
---


# Bài tập List - Nâng cao

1. Viết hàm **`flatten_list`** làm phẳng list lồng nhau (nested list) bất kỳ độ sâu.

```python
def flatten_list(nested_list):
    # Chuyển [1, [2, [3, 4], 5], 6] -> [1, 2, 3, 4, 5, 6]
    pass

# Test
nested = [1, [2, [3, 4], 5], 6]
flat = flatten_list(nested)
print(flat)  # [1, 2, 3, 4, 5, 6]
```

> **💡 Gợi ý: Dùng đệ quy hoặc stack**

2. Viết hàm **`chunk_list`** chia list thành các chunks có kích thước n.

```python
def chunk_list(lst, chunk_size):
    # Chia list thành các nhóm
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
chunks = chunk_list(numbers, 3)
print(chunks)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

3. Viết hàm **`rotate_list`** xoay list sang trái hoặc phải n vị trí.

```python
def rotate_list(lst, n, direction="right"):
    # n > 0: xoay, n < 0: xoay ngược
    pass

# Test
numbers = [1, 2, 3, 4, 5]
print(rotate_list(numbers, 2, "right"))  # [4, 5, 1, 2, 3]
print(rotate_list(numbers, 2, "left"))   # [3, 4, 5, 1, 2]
```

4. Viết hàm **`find_all_indices`** tìm tất cả vị trí của phần tử trong list.

```python
def find_all_indices(lst, value):
    pass

# Test
numbers = [1, 2, 3, 2, 4, 2, 5]
indices = find_all_indices(numbers, 2)
print(indices)  # [1, 3, 5]
```

5. Viết hàm **`sliding_window`** tạo sliding windows từ list.

```python
def sliding_window(lst, window_size):
    # Trả về list of windows
    pass

# Test
numbers = [1, 2, 3, 4, 5]
windows = sliding_window(numbers, 3)
print(windows)  # [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
```

6. Viết hàm **`merge_sorted_lists`** merge nhiều sorted lists thành một sorted list.

```python
def merge_sorted_lists(*lists):
    pass

# Test
list1 = [1, 3, 5]
list2 = [2, 4, 6]
list3 = [0, 7, 8]
merged = merge_sorted_lists(list1, list2, list3)
print(merged)  # [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

7. Viết hàm **`list_difference`** tìm hiệu hai lists (phần tử có trong list1 nhưng không có trong list2).

```python
def list_difference(list1, list2):
    # Giữ thứ tự và duplicates
    pass

# Test
list1 = [1, 2, 3, 2, 4]
list2 = [2, 4, 5]
diff = list_difference(list1, list2)
print(diff)  # [1, 3]
```

8. Viết hàm **`list_intersection_with_duplicates`** tìm giao của lists, giữ duplicates.

```python
def list_intersection_with_duplicates(list1, list2):
    pass

# Test
list1 = [1, 2, 2, 3, 4]
list2 = [2, 2, 3, 5]
intersection = list_intersection_with_duplicates(list1, list2)
print(intersection)  # [2, 2, 3]
```

9. Viết hàm **`partition_list`** chia list thành hai lists dựa trên điều kiện.

```python
def partition_list(lst, predicate):
    # Trả về (matching, not_matching)
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
evens, odds = partition_list(numbers, lambda x: x % 2 == 0)
print(evens)  # [2, 4, 6, 8]
print(odds)   # [1, 3, 5, 7, 9]
```

10. Viết hàm **`longest_increasing_subsequence`** tìm subsequence tăng dần dài nhất.

```python
def longest_increasing_subsequence(lst):
    pass

# Test
numbers = [10, 9, 2, 5, 3, 7, 101, 18]
lis = longest_increasing_subsequence(numbers)
print(lis)  # [2, 3, 7, 18] hoặc [2, 3, 7, 101]
```

11. Viết hàm **`group_consecutive`** nhóm các số liên tiếp.

```python
def group_consecutive(lst):
    pass

# Test
numbers = [1, 2, 3, 5, 6, 8, 9, 10]
groups = group_consecutive(numbers)
print(groups)  # [[1, 2, 3], [5, 6], [8, 9, 10]]
```

12. Viết hàm **`run_length_encoding`** mã hóa Run-Length Encoding.

```python
def run_length_encoding(lst):
    # [1, 1, 1, 2, 2, 3] -> [(1, 3), (2, 2), (3, 1)]
    pass

def run_length_decoding(encoded):
    # Ngược lại
    pass

# Test
data = [1, 1, 1, 2, 2, 3, 3, 3, 3]
encoded = run_length_encoding(data)
print(encoded)  # [(1, 3), (2, 2), (3, 4)]
decoded = run_length_decoding(encoded)
print(decoded)  # [1, 1, 1, 2, 2, 3, 3, 3, 3]
```

13. Viết hàm **`cartesian_product`** tính tích Descartes của nhiều lists.

```python
def cartesian_product(*lists):
    pass

# Test
list1 = [1, 2]
list2 = ['a', 'b']
list3 = ['x', 'y']
product = cartesian_product(list1, list2, list3)
print(product)
# [(1, 'a', 'x'), (1, 'a', 'y'), (1, 'b', 'x'), ...]
```

14. Viết hàm **`permutations_custom`** tạo tất cả hoán vị của list (không dùng itertools).

```python
def permutations_custom(lst):
    pass

# Test
items = [1, 2, 3]
perms = permutations_custom(items)
print(len(perms))  # 6
print(perms)  # [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
```

15. Viết hàm **`combinations_custom`** tạo tất cả tổ hợp k phần tử (không dùng itertools).

```python
def combinations_custom(lst, k):
    pass

# Test
items = [1, 2, 3, 4]
combs = combinations_custom(items, 2)
print(combs)  # [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
```

16. Viết hàm **`find_majority_element`** tìm phần tử xuất hiện > n/2 lần.

```python
def find_majority_element(lst):
    # Trả về phần tử hoặc None
    pass

# Test
numbers = [3, 3, 4, 2, 3, 3, 3]
majority = find_majority_element(numbers)
print(majority)  # 3
```

> **💡 Gợi ý: Boyer-Moore Voting Algorithm**

17. Viết hàm **`two_sum`** tìm hai số có tổng bằng target.

```python
def two_sum(lst, target):
    # Trả về indices của hai số
    pass

# Test
numbers = [2, 7, 11, 15]
result = two_sum(numbers, 9)
print(result)  # [0, 1] (vì 2 + 7 = 9)
```

18. Viết hàm **`three_sum`** tìm ba số có tổng bằng target.

```python
def three_sum(lst, target):
    # Trả về tất cả triplets unique
    pass

# Test
numbers = [-1, 0, 1, 2, -1, -4]
result = three_sum(numbers, 0)
print(result)  # [[-1, -1, 2], [-1, 0, 1]]
```

19. Viết hàm **`max_subarray_sum`** tìm tổng lớn nhất của subarray liên tiếp.

```python
def max_subarray_sum(lst):
    # Kadane's Algorithm
    pass

# Test
numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_sum = max_subarray_sum(numbers)
print(max_sum)  # 6 (subarray: [4, -1, 2, 1])
```

20. Viết hàm **`product_except_self`** tính tích của tất cả phần tử trừ phần tử tại index đó.

```python
def product_except_self(lst):
    # Không được dùng phép chia
    pass

# Test
numbers = [1, 2, 3, 4]
result = product_except_self(numbers)
print(result)  # [24, 12, 8, 6]
```

21. Viết hàm **`find_duplicate`** tìm số bị trùng trong list [1..n] có n+1 phần tử.

```python
def find_duplicate(lst):
    # List chứa các số từ 1 đến n, với đúng một số xuất hiện 2 lần
    # O(n) time, O(1) space
    pass

# Test
numbers = [1, 3, 4, 2, 2]
duplicate = find_duplicate(numbers)
print(duplicate)  # 2
```

> **💡 Gợi ý: Floyd's Cycle Detection**

22. Viết hàm **`sort_by_frequency`** sắp xếp list theo tần suất xuất hiện.

```python
def sort_by_frequency(lst):
    # Phần tử xuất hiện nhiều lên đầu
    # Nếu tần suất bằng nhau, giữ thứ tự xuất hiện
    pass

# Test
items = [4, 5, 6, 5, 4, 3, 4]
sorted_items = sort_by_frequency(items)
print(sorted_items)  # [4, 4, 4, 5, 5, 6, 3]
```

23. Viết hàm **`dutch_national_flag`** sắp xếp list chỉ có 0, 1, 2.

```python
def dutch_national_flag(lst):
    # In-place sort, O(n) time, O(1) space
    pass

# Test
numbers = [2, 0, 1, 2, 0, 1, 0]
dutch_national_flag(numbers)
print(numbers)  # [0, 0, 0, 1, 1, 2, 2]
```

24. Viết hàm **`next_greater_element`** tìm phần tử lớn hơn tiếp theo cho mỗi phần tử.

```python
def next_greater_element(lst):
    # Trả về list, -1 nếu không có
    pass

# Test
numbers = [4, 5, 2, 10, 8]
result = next_greater_element(numbers)
print(result)  # [5, 10, 10, -1, -1]
```

> **💡 Gợi ý: Dùng stack**

25. Viết hàm **`trapping_rain_water`** tính lượng nước mưa có thể chứa.

```python
def trapping_rain_water(heights):
    # heights: list độ cao của các cột
    pass

# Test
heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
water = trapping_rain_water(heights)
print(water)  # 6
```

26. Viết class **`CircularList`** - list vòng (circular buffer).

```python
class CircularList:
    def __init__(self, capacity):
        self.capacity = capacity
        self.buffer = [None] * capacity
        self.head = 0
        self.size = 0

    def append(self, item):
        # Thêm item, ghi đè nếu đầy
        pass

    def get(self, index):
        # Lấy item theo index
        pass

    def __len__(self):
        return self.size

# Test
cl = CircularList(3)
cl.append(1)
cl.append(2)
cl.append(3)
cl.append(4)  # Ghi đè item đầu tiên
print(list(cl))  # [4, 2, 3]
```

27. Viết hàm **`sparse_list_compress`** nén sparse list (nhiều giá trị giống nhau).

```python
def sparse_list_compress(lst, default=0):
    # Chỉ lưu (index, value) của các phần tử khác default
    pass

def sparse_list_decompress(compressed, length, default=0):
    pass

# Test
sparse = [0, 0, 5, 0, 0, 0, 3, 0, 0, 7]
compressed = sparse_list_compress(sparse)
print(compressed)  # [(2, 5), (6, 3), (9, 7)]
decompressed = sparse_list_decompress(compressed, 10)
print(decompressed)  # [0, 0, 5, 0, 0, 0, 3, 0, 0, 7]
```

28. Viết hàm **`list_to_tree`** chuyển flat list thành tree structure.

```python
def list_to_tree(lst, id_key="id", parent_key="parent_id"):
    # Chuyển flat list thành nested dict tree
    pass

# Test
items = [
    {"id": 1, "parent_id": None, "name": "Root"},
    {"id": 2, "parent_id": 1, "name": "Child 1"},
    {"id": 3, "parent_id": 1, "name": "Child 2"},
    {"id": 4, "parent_id": 2, "name": "Grandchild"}
]
tree = list_to_tree(items)
print(tree)
```

29. Viết hàm **`moving_average`** tính moving average với window size.

```python
def moving_average(lst, window_size):
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
averages = moving_average(numbers, 3)
print(averages)  # [2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
```

30. Viết hàm **`list_binary_search`** tìm kiếm nhị phân (không dùng built-in).

```python
def list_binary_search(sorted_list, target):
    # Trả về index hoặc -1
    pass

# Test
numbers = [1, 3, 5, 7, 9, 11, 13, 15]
index = list_binary_search(numbers, 7)
print(index)  # 3
```
