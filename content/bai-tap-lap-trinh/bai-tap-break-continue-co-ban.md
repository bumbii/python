---
description: Các bài tập về Break, Continue, Pass - Cơ bản
icon: arrows-split-up-and-left
---

# Bài tập Break, Continue, Pass - Cơ bản

1. Viết chương trình in các số từ 1 đến 10, nhưng dừng lại khi gặp số 6 (sử dụng `break`).

Kết quả:
```
1 2 3 4 5
```

2. Viết chương trình in các số từ 1 đến 10, nhưng bỏ qua số 5 (sử dụng `continue`).

Kết quả:
```
1 2 3 4 6 7 8 9 10
```

3. Viết hàm **`find_first_even`** tìm số chẵn đầu tiên trong một list và trả về số đó. Nếu không tìm thấy, trả về `None`.

```python
def find_first_even(numbers):
    # Code của bạn ở đây (dùng break)
    pass

# Test
numbers = [1, 3, 5, 8, 9, 10]
print(find_first_even(numbers))  # 8
```

4. Viết hàm **`sum_positive`** tính tổng các số dương trong list (bỏ qua số âm và số 0 bằng `continue`).

```python
def sum_positive(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [10, -5, 20, -3, 30, 0, 40]
print(sum_positive(numbers))  # 100
```

5. Viết chương trình nhập số từ người dùng cho đến khi nhập số 0 thì dừng (dùng `break`).

```python
while True:
    number = int(input("Nhập số (0 để thoát): "))
    # Code của bạn ở đây
```

6. Viết hàm **`count_until`** đếm từ 1 đến n, nhưng dừng lại khi gặp số chia hết cho 7 đầu tiên.

```python
def count_until(n):
    # Code của bạn ở đây
    pass

# Test
count_until(20)
# In ra: 1 2 3 4 5 6 (dừng ở 7)
```

7. Viết hàm **`print_odd_numbers`** in các số lẻ từ 1 đến n (bỏ qua số chẵn bằng `continue`).

```python
def print_odd_numbers(n):
    # Code của bạn ở đây
    pass

# Test
print_odd_numbers(10)
# 1 3 5 7 9
```

8. Viết chương trình tìm kiếm tên trong danh sách. Nếu tìm thấy, in ra "Đã tìm thấy" và dừng tìm kiếm.

```python
students = ["Alice", "Bob", "Charlie", "David"]
search_name = "Charlie"

# Code của bạn ở đây (dùng break)
```

9. Viết hàm **`skip_multiples_of_3`** in các số từ 1 đến n, nhưng bỏ qua các số chia hết cho 3.

```python
def skip_multiples_of_3(n):
    # Code của bạn ở đây (dùng continue)
    pass

# Test
skip_multiples_of_3(10)
# 1 2 4 5 7 8 10
```

10. Viết hàm **`placeholder_function`** sử dụng `pass` làm placeholder (chưa cài đặt).

```python
def placeholder_function(x, y):
    # Code của bạn ở đây (dùng pass)
    pass

# Test
result = placeholder_function(5, 10)
print(result)  # None
```

11. Viết chương trình kiểm tra mật khẩu. Cho phép người dùng thử tối đa 3 lần. Nếu đúng, thoát vòng lặp.

```python
correct_password = "python123"
max_attempts = 3

# Code của bạn ở đây
```

12. Viết hàm **`find_index`** tìm vị trí đầu tiên của một giá trị trong list. Nếu không tìm thấy, trả về -1.

```python
def find_index(my_list, value):
    # Code của bạn ở đây (dùng break)
    pass

# Test
numbers = [10, 20, 30, 40, 50]
print(find_index(numbers, 30))  # 2
print(find_index(numbers, 100))  # -1
```

13. Viết hàm **`print_until_negative`** in các số trong list cho đến khi gặp số âm đầu tiên.

```python
def print_until_negative(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, -5, 6, 7]
print_until_negative(numbers)
# 1 2 3
```

14. Viết hàm **`count_positive`** đếm số lượng số dương trong list (bỏ qua số âm và 0).

```python
def count_positive(numbers):
    # Code của bạn ở đây (dùng continue)
    pass

# Test
numbers = [10, -5, 20, 0, -3, 30]
print(count_positive(numbers))  # 3
```

15. Viết chương trình in bảng cửu chương từ 1 đến 5, nhưng bỏ qua bảng cửu chương của 3.

```python
for i in range(1, 6):
    if i == 3:
        # Code của bạn ở đây (dùng continue)
        pass
    print(f"Bảng cửu chương {i}:")
    for j in range(1, 11):
        print(f"{i} x {j} = {i*j}")
```

16. Viết hàm **`search_in_matrix`** tìm một giá trị trong ma trận 2D. Nếu tìm thấy, trả về vị trí (row, col) và dừng tìm kiếm.

```python
def search_in_matrix(matrix, value):
    # Code của bạn ở đây (dùng break)
    pass

# Test
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(search_in_matrix(matrix, 5))  # (1, 1)
```

17. Viết chương trình tạo menu đơn giản. Cho phép người dùng chọn từ 1-3, nhập 0 để thoát.

```python
while True:
    print("1. Option 1")
    print("2. Option 2")
    print("3. Option 3")
    print("0. Exit")
    choice = input("Chọn: ")
    # Code của bạn ở đây (dùng break khi chọn 0)
```

18. Viết hàm **`sum_until_zero`** tính tổng các số trong list cho đến khi gặp số 0.

```python
def sum_until_zero(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 0, 4, 5]
print(sum_until_zero(numbers))  # 6
```

19. Viết hàm **`filter_empty_strings`** lọc bỏ các chuỗi rỗng từ list (dùng `continue`).

```python
def filter_empty_strings(strings):
    # Code của bạn ở đây
    pass

# Test
strings = ["hello", "", "world", "", "python"]
result = filter_empty_strings(strings)
print(result)  # ["hello", "world", "python"]
```

20. Viết class **`Student`** với `pass` làm placeholder (chưa cài đặt thuộc tính và phương thức).

```python
class Student:
    # Code của bạn ở đây (dùng pass)
    pass

# Test
student = Student()
print(type(student))  # <class '__main__.Student'>
```
