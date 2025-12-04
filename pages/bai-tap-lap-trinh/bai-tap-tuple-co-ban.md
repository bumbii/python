---
description: Các bài tập về Tuple - Cơ bản
icon: layer-group
---

# Bài tập Tuple - Cơ bản

1. Viết hàm có tên **`create_number_tuple`** tạo ra một tuple chứa các số từ 1 đến 10, dùng hàm `print` để in tuple.

2. Viết hàm có tên **`create_fruit_tuple`** tạo ra một tuple chứa tên của 5 loại trái cây. In ra tuple.

Ví dụ:

```python
("apple", "banana", "orange", "mango", "grape")
```

3. Tạo một tuple **`colors`** chứa 4 màu sắc. In ra:

* Màu đầu tiên
* Màu cuối cùng
* Độ dài của tuple

4. Tạo tuple **`numbers`** chứa các số từ 0 đến 9. Sử dụng slicing để in ra:

* 3 số đầu tiên
* 3 số cuối cùng
* Các số ở vị trí chẵn (index 0, 2, 4, 6...)

5. Viết hàm **`check_item_in_tuple`** nhận vào một tuple và một giá trị, kiểm tra xem giá trị đó có trong tuple không và trả về `True` hoặc `False`.

```python
def check_item_in_tuple(my_tuple, item):
    # Code của bạn ở đây
    pass

# Test
fruits = ("apple", "banana", "orange")
print(check_item_in_tuple(fruits, "banana"))  # True
print(check_item_in_tuple(fruits, "mango"))   # False
```

6. Tạo hai tuple **`tuple1 = (1, 2, 3)`** và **`tuple2 = (4, 5, 6)`**. Nối chúng lại thành một tuple mới và in ra.

7. Tạo tuple **`colors = ("red", "blue", "green")`**. Lặp tuple 3 lần và in ra kết quả.

Ví dụ kết quả:

```python
("red", "blue", "green", "red", "blue", "green", "red", "blue", "green")
```

8. Viết hàm **`count_occurrences`** nhận vào một tuple và một giá trị, đếm số lần xuất hiện của giá trị đó trong tuple.

```python
def count_occurrences(my_tuple, value):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 2, 4, 2, 5)
print(count_occurrences(numbers, 2))  # 3
```

9. Tạo tuple **`fruits = ("apple", "banana", "orange", "mango")`**. Tìm vị trí (index) của "orange" trong tuple.

10. Viết chương trình tạo tuple chứa tên của 5 học sinh. Sau đó:

* In ra tên học sinh đầu tiên
* In ra tên học sinh cuối cùng
* Kiểm tra xem "Minh Sang" có trong danh sách không

11. Viết hàm **`get_first_last`** nhận vào một tuple và trả về một tuple mới chứa phần tử đầu tiên và cuối cùng.

```python
def get_first_last(my_tuple):
    # Code của bạn ở đây
    pass

# Test
numbers = (1, 2, 3, 4, 5)
print(get_first_last(numbers))  # (1, 5)
```

12. Tạo tuple **`numbers = (5, 2, 8, 1, 9, 3, 7)`**. Viết chương trình:

* Tìm số lớn nhất trong tuple
* Tìm số nhỏ nhất trong tuple
* Tính tổng tất cả các số

{% hint style="info" %}
Gợi ý: Dùng các hàm `max()`, `min()`, `sum()`
{% endhint %}

13. Viết hàm **`tuple_to_list`** chuyển đổi một tuple thành list.

```python
def tuple_to_list(my_tuple):
    # Code của bạn ở đây
    pass

# Test
my_tuple = (1, 2, 3, 4, 5)
result = tuple_to_list(my_tuple)
print(result)  # [1, 2, 3, 4, 5]
print(type(result))  # <class 'list'>
```

14. Viết hàm **`list_to_tuple`** chuyển đổi một list thành tuple.

```python
def list_to_tuple(my_list):
    # Code của bạn ở đây
    pass

# Test
my_list = [1, 2, 3, 4, 5]
result = list_to_tuple(my_list)
print(result)  # (1, 2, 3, 4, 5)
print(type(result))  # <class 'tuple'>
```

15. Tạo tuple **`coordinates = (10, 20)`**. Sử dụng unpacking để gán giá trị cho hai biến `x` và `y`, sau đó in ra `x` và `y`.

Ví dụ:

```python
coordinates = (10, 20)
# Unpacking
x, y = coordinates
print(f"x = {x}, y = {y}")  # x = 10, y = 20
```

16. Viết chương trình unpacking tuple **`student = ("Tuệ Nghi", 11, "5A")`** thành 3 biến: `name`, `age`, `class_name`, sau đó in ra thông tin.

17. Viết hàm **`swap_values`** nhận vào hai giá trị và trả về hai giá trị đã hoán đổi (sử dụng tuple).

```python
def swap_values(a, b):
    # Code của bạn ở đây
    pass

# Test
x, y = swap_values(5, 10)
print(x, y)  # 10 5
```

18. Tạo tuple **`numbers = (1, 2, 3, 4, 5)`**. Dùng vòng lặp `for` để in ra từng số trong tuple.

19. Tạo tuple **`fruits = ("apple", "banana", "orange")`**. Dùng vòng lặp với `enumerate()` để in ra index và tên trái cây.

Ví dụ kết quả:

```
0: apple
1: banana
2: orange
```

20. Viết hàm **`create_student_tuple`** tạo ra một tuple chứa thông tin học sinh (tên, tuổi, lớp) và trả về tuple đó.

```python
def create_student_tuple(name, age, grade):
    # Code của bạn ở đây
    pass

# Test
student = create_student_tuple("Minh Sang", 11, "5A")
print(student)  # ("Minh Sang", 11, "5A")
print(type(student))  # <class 'tuple'>
```
