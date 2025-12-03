---
description: Các bài tập về Set - Cơ bản
icon: circle-nodes
---

# Bài tập Set - Cơ bản

1. Viết hàm có tên **`create_number_set`** tạo ra một set chứa các số từ 1 đến 10, dùng hàm `print` để in set.

2. Viết hàm có tên **`remove_duplicates`** nhận vào một list có thể chứa phần tử trùng lặp và trả về list mới không có phần tử trùng lặp.

```python
def remove_duplicates(my_list):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 2, 1, 4, 3, 5]
result = remove_duplicates(numbers)
print(result)  # [1, 2, 3, 4, 5]
```

{% hint style="info" %}
Gợi ý: Chuyển list sang set rồi chuyển lại list
{% endhint %}

3. Tạo một set **`fruits`** chứa tên của 5 loại trái cây. In ra:

* Số lượng trái cây trong set
* Kiểm tra xem "apple" có trong set không

4. Tạo set **`colors = {"red", "blue", "green"}`**. Thêm màu "yellow" vào set và in ra kết quả.

5. Tạo set **`numbers = {1, 2, 3, 4, 5}`**. Xoá số 3 khỏi set bằng phương thức `remove()` và in ra kết quả.

6. Tạo set **`animals = {"dog", "cat", "bird"}`**. Sử dụng phương thức `discard()` để xoá "fish" (không có trong set) và in ra kết quả. So sánh với `remove()`.

7. Viết hàm **`set_length`** nhận vào một set và trả về số lượng phần tử.

```python
def set_length(my_set):
    # Code của bạn ở đây
    pass

# Test
numbers = {1, 2, 3, 4, 5}
print(set_length(numbers))  # 5
```

8. Tạo hai set: **`set1 = {1, 2, 3, 4}`** và **`set2 = {3, 4, 5, 6}`**. Tìm hợp (union) của hai set và in ra.

Ví dụ kết quả:

```python
{1, 2, 3, 4, 5, 6}
```

9. Tạo hai set: **`set1 = {1, 2, 3, 4}`** và **`set2 = {3, 4, 5, 6}`**. Tìm giao (intersection) của hai set và in ra.

Ví dụ kết quả:

```python
{3, 4}
```

10. Tạo hai set: **`set1 = {1, 2, 3, 4}`** và **`set2 = {3, 4, 5, 6}`**. Tìm hiệu (difference) của set1 và set2, in ra.

Ví dụ kết quả:

```python
{1, 2}
```

11. Viết hàm **`add_multiple`** nhận vào một set và một list, thêm tất cả phần tử từ list vào set.

```python
def add_multiple(my_set, my_list):
    # Code của bạn ở đây
    pass

# Test
numbers = {1, 2, 3}
add_multiple(numbers, [4, 5, 6])
print(numbers)  # {1, 2, 3, 4, 5, 6}
```

{% hint style="info" %}
Gợi ý: Dùng phương thức `update()`
{% endhint %}

12. Tạo set **`numbers = {5, 3, 1, 4, 2}`**. Chuyển set thành list đã được sắp xếp và in ra.

13. Viết hàm **`common_elements`** nhận vào hai set và trả về set chứa các phần tử chung.

```python
def common_elements(set1, set2):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}
result = common_elements(set1, set2)
print(result)  # {3, 4, 5}
```

14. Tạo một chuỗi **`text = "hello"`**. Chuyển chuỗi thành set và đếm số ký tự duy nhất.

Ví dụ:

```python
text = "hello"
char_set = set(text)
print(char_set)  # {'h', 'e', 'l', 'o'}
print(len(char_set))  # 4
```

15. Viết hàm **`is_subset`** kiểm tra xem set1 có phải là tập con của set2 không.

```python
def is_subset(set1, set2):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}
print(is_subset(set1, set2))  # True

set3 = {1, 2, 6}
print(is_subset(set3, set2))  # False
```

16. Tạo set **`students = {"Alice", "Bob", "Charlie"}`**. Dùng vòng lặp `for` để in ra tên từng học sinh.

17. Viết chương trình tạo hai set:

* **`math_class = {"Alice", "Bob", "Charlie"}`**
* **`science_class = {"Bob", "Charlie", "David"}`**

Tìm và in ra:

* Học sinh học cả hai lớp
* Học sinh chỉ học Toán
* Tất cả học sinh

18. Tạo set **`numbers = {1, 2, 3, 4, 5}`**. Sử dụng phương thức `pop()` để lấy và xoá một phần tử, in ra phần tử đã xoá và set còn lại.

19. Viết hàm **`symmetric_diff`** nhận vào hai set và trả về hiệu đối xứng (phần tử có trong một trong hai set nhưng không có trong cả hai).

```python
def symmetric_diff(set1, set2):
    # Code của bạn ở đây
    pass

# Test
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
result = symmetric_diff(set1, set2)
print(result)  # {1, 2, 5, 6}
```

20. Viết chương trình kiểm tra xem hai set có rời rạc (không có phần tử chung) hay không.

```python
set1 = {1, 2, 3}
set2 = {4, 5, 6}

# Kiểm tra
if set1.isdisjoint(set2):
    print("Hai set rời rạc")
else:
    print("Hai set có phần tử chung")
```
