---
description: Các bài tập về Tuple - Nâng cao
icon: layer-group
---


# Bài tập Tuple - Nâng cao

1. Viết hàm **`merge_tuples`** nhận vào nhiều tuple (sử dụng *args) và trả về một tuple mới chứa tất cả các phần tử.

```python
def merge_tuples(*tuples):
    # Code của bạn ở đây
    pass

# Test
result = merge_tuples((1, 2), (3, 4), (5, 6))
print(result)  # (1, 2, 3, 4, 5, 6)
```

2. Viết hàm **`tuple_stats`** nhận vào một tuple chứa các số và trả về một tuple chứa (min, max, trung bình, tổng).

```python
def tuple_stats(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = (10, 20, 30, 40, 50)
stats = tuple_stats(numbers)
print(stats)  # (10, 50, 30.0, 150)
```

3. Tạo tuple lồng nhau **`students`** chứa thông tin của 5 học sinh (mỗi học sinh là một tuple gồm tên, tuổi, điểm). Viết chương trình:

* In ra thông tin của học sinh thứ 3
* In ra tên của tất cả học sinh
* Tìm học sinh có điểm cao nhất

4. Viết hàm **`unpack_with_star`** nhận vào một tuple có ít nhất 3 phần tử và unpacking với cú pháp `first, *middle, last`. In ra từng phần.

```python
def unpack_with_star(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 4, 5, 6, 7)
unpack_with_star(numbers)
# first = 1
# middle = [2, 3, 4, 5, 6]
# last = 7
```

5. Viết hàm **`reverse_tuple`** đảo ngược thứ tự các phần tử trong tuple và trả về tuple mới.

```python
def reverse_tuple(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 4, 5)
reversed_numbers = reverse_tuple(numbers)
print(reversed_numbers)  # (5, 4, 3, 2, 1)
```

> **💡 Gợi ý: Có thể dùng slicing `[::-1]` hoặc hàm `reversed()`**

6. Viết hàm **`find_duplicates`** nhận vào một tuple và trả về tuple chứa các phần tử xuất hiện nhiều hơn 1 lần.

```python
def find_duplicates(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 2, 4, 3, 5, 2)
duplicates = find_duplicates(numbers)
print(duplicates)  # (2, 3)
```

7. Viết hàm **`tuple_intersection`** nhận vào hai tuple và trả về tuple mới chứa các phần tử có trong cả hai tuple.

```python
def tuple_intersection(tuple1, tuple2):
    # Code của bạn ở đây
    pass

# Test
tuple1 = (1, 2, 3, 4, 5)
tuple2 = (3, 4, 5, 6, 7)
result = tuple_intersection(tuple1, tuple2)
print(result)  # (3, 4, 5)
```

8. Viết hàm **`tuple_difference`** nhận vào hai tuple và trả về tuple chứa các phần tử có trong tuple1 nhưng không có trong tuple2.

```python
def tuple_difference(tuple1, tuple2):
    # Code của bạn ở đây
    pass

# Test
tuple1 = (1, 2, 3, 4, 5)
tuple2 = (3, 4, 5, 6, 7)
result = tuple_difference(tuple1, tuple2)
print(result)  # (1, 2)
```

9. Viết hàm **`sort_tuple`** nhận vào một tuple chứa các số và trả về tuple mới đã được sắp xếp tăng dần.

```python
def sort_tuple(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (5, 2, 8, 1, 9, 3)
sorted_numbers = sort_tuple(numbers)
print(sorted_numbers)  # (1, 2, 3, 5, 8, 9)
```

> **💡 Gợi ý: Chuyển sang list, sort, rồi chuyển lại tuple**

10. Viết hàm **`split_tuple`** nhận vào một tuple và một số n, chia tuple thành hai tuple tại vị trí n.

```python
def split_tuple(my_tuple, n):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 4, 5, 6, 7, 8)
left, right = split_tuple(numbers, 4)
print(left)   # (1, 2, 3, 4)
print(right)  # (5, 6, 7, 8)
```

11. Tạo dictionary với tuple làm key. Ví dụ: lưu trữ thông tin về các điểm trên bản đồ (toạ độ x, y) và tên địa điểm.

```python
# Tạo dictionary
locations = {
    (0, 0): "Start",
    (10, 5): "Checkpoint 1",
    (20, 10): "Checkpoint 2",
    (30, 15): "End"
}

# In ra tên địa điểm tại toạ độ (10, 5)
print(locations[(10, 5)])  # "Checkpoint 1"
```

12. Viết hàm **`flatten_tuple`** nhận vào một tuple lồng nhau và trả về tuple phẳng (không còn tuple con).

```python
def flatten_tuple(nested_tuple):
    # Code của bạn ở đây
    pass

# Test
nested = (1, (2, 3), (4, (5, 6)), 7)
flat = flatten_tuple(nested)
print(flat)  # (1, 2, 3, 4, 5, 6, 7)
```

> **💡 Gợi ý: Dùng đệ quy hoặc vòng lặp với `isinstance()`**

13. Viết hàm **`tuple_frequency`** nhận vào một tuple và trả về dictionary đếm số lần xuất hiện của mỗi phần tử.

```python
def tuple_frequency(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 2, 3, 3, 3, 4, 4, 4, 4)
frequency = tuple_frequency(numbers)
print(frequency)  # {1: 1, 2: 2, 3: 3, 4: 4}
```

14. Viết hàm **`create_tuple_from_string`** chuyển đổi một chuỗi thành tuple, trong đó mỗi từ là một phần tử.

```python
def create_tuple_from_string(text):
    # Code của bạn ở đây
    pass

# Test
text = "Python is fun and easy"
result = create_tuple_from_string(text)
print(result)  # ("Python", "is", "fun", "and", "easy")
```

15. Viết hàm **`compare_tuples`** nhận vào hai tuple và trả về `True` nếu chúng có cùng phần tử (không quan tâm thứ tự), ngược lại trả về `False`.

```python
def compare_tuples(tuple1, tuple2):
    # Code của bạn ở đây
    pass

# Test
tuple1 = (1, 2, 3, 4, 5)
tuple2 = (5, 4, 3, 2, 1)
print(compare_tuples(tuple1, tuple2))  # True

tuple3 = (1, 2, 3)
tuple4 = (1, 2, 4)
print(compare_tuples(tuple3, tuple4))  # False
```

16. Viết hàm **`zip_tuples`** nhận vào nhiều tuple có cùng độ dài và trả về tuple của các tuple (mỗi tuple con chứa các phần tử tại cùng vị trí).

```python
def zip_tuples(*tuples):
    # Code của bạn ở đây
    pass

# Test
names = ("Alice", "Bob", "Charlie")
ages = (25, 30, 35)
cities = ("Hanoi", "HCMC", "Danang")

result = zip_tuples(names, ages, cities)
print(result)
# (("Alice", 25, "Hanoi"), ("Bob", 30, "HCMC"), ("Charlie", 35, "Danang"))
```

> **💡 Gợi ý: Dùng hàm `zip()` hoặc vòng lặp**

17. Viết hàm **`rotate_tuple`** nhận vào một tuple và số n, xoay tuple sang phải n vị trí.

```python
def rotate_tuple(my_tuple, n):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 4, 5)
rotated = rotate_tuple(numbers, 2)
print(rotated)  # (4, 5, 1, 2, 3)
```

18. Viết hàm **`remove_item`** nhận vào một tuple và một giá trị, trả về tuple mới không chứa giá trị đó (xoá tất cả các lần xuất hiện).

```python
def remove_item(my_tuple, item):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 2, 4, 2, 5)
result = remove_item(numbers, 2)
print(result)  # (1, 3, 4, 5)
```

19. Viết hàm **`get_unique_elements`** nhận vào một tuple và trả về tuple mới chỉ chứa các phần tử duy nhất (không trùng lặp), giữ nguyên thứ tự xuất hiện đầu tiên.

```python
def get_unique_elements(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 2, 4, 1, 5, 3)
unique = get_unique_elements(numbers)
print(unique)  # (1, 2, 3, 4, 5)
```

20. Viết hàm **`partition_tuple`** nhận vào một tuple chứa các số và một giá trị pivot, trả về hai tuple: một chứa các số nhỏ hơn pivot, một chứa các số lớn hơn hoặc bằng pivot.

```python
def partition_tuple(my_tuple, pivot):
    # Code của bạn ở đây
    pass

# Test
numbers = (5, 2, 8, 1, 9, 3, 7, 4)
smaller, larger = partition_tuple(numbers, 5)
print(smaller)  # (2, 1, 3, 4)
print(larger)   # (5, 8, 9, 7)
```

21. Viết chương trình tạo tuple chứa 10 số ngẫu nhiên từ 1 đến 100, sau đó:

* Tính giá trị trung bình
* Tìm phương sai (variance)
* Tìm độ lệch chuẩn (standard deviation)

> **💡 Gợi ý: Dùng module `random` để tạo số ngẫu nhiên**

22. Viết hàm **`most_common`** nhận vào một tuple và trả về phần tử xuất hiện nhiều nhất.

```python
def most_common(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 2, 3, 3, 3, 4, 4)
result = most_common(numbers)
print(result)  # 3
```

23. Viết hàm **`tuple_product`** nhận vào một tuple chứa các số và trả về tích của tất cả các số.

```python
def tuple_product(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = (2, 3, 4, 5)
result = tuple_product(numbers)
print(result)  # 120 (2 * 3 * 4 * 5)
```

24. Viết hàm **`alternate_elements`** nhận vào hai tuple và trả về tuple mới chứa các phần tử xen kẽ từ hai tuple.

```python
def alternate_elements(tuple1, tuple2):
    # Code của bạn ở đây
    pass

# Test
tuple1 = (1, 2, 3)
tuple2 = ("a", "b", "c")
result = alternate_elements(tuple1, tuple2)
print(result)  # (1, "a", 2, "b", 3, "c")
```

25. Viết hàm **`cumulative_sum`** nhận vào một tuple chứa các số và trả về tuple mới chứa tổng tích lũy.

```python
def cumulative_sum(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 4, 5)
result = cumulative_sum(numbers)
print(result)  # (1, 3, 6, 10, 15)
# Giải thích: (1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5)
```
