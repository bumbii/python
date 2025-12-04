---
icon: list
---


# Bài tập List

1. Viết hàm có tên **`create_numbers`** tạo ra list chứa các số từ 1 đến 10, dùng hàm print để in list
2. Viết hàm có tên **`create_even_numbers`** tạo ra list chứa các số chẵn từ 0 đến 20, dùng hàm print để in list
3. Viết hàm có tên **`create_odd_numbers`** tạo ra list chứa các số lẻ từ 1 đến 99, dùng hàm print để in list
4. Viết hàm **`create_friends`** thực hiện từng bước sau trong hàm:

* Tạo ra một list rỗng có tên **`friends`**&#x20;
* Thêm lần lượt tên 5 người bạn dùng hàm **`append`**
* Dùng từ khóa return để trả về danh sách **`friends`**&#x20;

**Sau đó:**

* Tạo ra một biến **`my_friends`** và gọi hàm **`create_friends`** để nhận về list friends
* In ra list **`my_friends`**&#x20;

5. Dùng lại hàm **`create_friends()`** ở bài 4, tạo một biến **`friends = create_friends()` .** Sau đó thực hiện các thao tác sau trên list **`friends` :**

* Chèn tên một người bạn mới vào vị trí số 2
* In ra số lượng người bạn thân: Tôi có {X} người bạn thân, trong đó X là chiều dài của list **`friends`** &#x20;
* In ra tên người bạn đứng đầu list&#x20;
* In ra tên người bạn đứng cuối list

6. Dùng lại hàm **`create_friends()`** ở bài 4, tạo một biến **`friends = my_friends()` .** Sau đó thực hiện các thao tác sau trên list **`friends` :**

* Dùng thao tác cắt list (slicing) để lấy tên 3 bạn đầu tiên trong list **`friends`** , rồi in ra list chứa 3 bạn này.
* Dùng thao tác cắt list (slicing) để lấy tên các bạn có index là số chẵn (0, 2, 4, 6...), rồi in ra list chứa tên các bạn này.
* Dùng thao tác cắt list (slicing) để lấy tên 3 bạn ở cuối list, rồi in ra list chứa tên 3 bạn này.

7. Tạo một list **`numbers`** chứa các số từ 1 đến 10. Sau đó:

* Xoá số 5 khỏi list bằng phương thức **`remove()`**
* In ra list sau khi xoá
* Đếm số lượng phần tử còn lại trong list

8. Tạo một list **`fruits`** chứa tên 5 loại trái cây. Sau đó:

* Dùng phương thức **`pop()`** để lấy và xoá phần tử cuối cùng
* In ra phần tử vừa lấy ra
* In ra list sau khi xoá

9. Viết hàm **`combine_lists`** nhận vào 2 list và trả về một list mới là kết quả của việc nối 2 list đó lại.

Ví dụ:

```python
def combine_lists(list1, list2):
    # Code của bạn ở đây
    pass

# Test
a = [1, 2, 3]
b = [4, 5, 6]
result = combine_lists(a, b)
print(result)  # [1, 2, 3, 4, 5, 6]
```

10. Tạo một list **`numbers`** chứa các số: 5, 2, 8, 1, 9, 3. Sau đó:

* Sắp xếp list theo thứ tự tăng dần bằng phương thức **`sort()`**
* In ra list đã sắp xếp
* Đảo ngược list bằng phương thức **`reverse()`**
* In ra list sau khi đảo ngược

11. Viết hàm **`check_item_exists`** nhận vào một list và một giá trị. Hàm sẽ kiểm tra xem giá trị đó có trong list không và trả về `True` hoặc `False`.

Ví dụ:

```python
def check_item_exists(my_list, item):
    # Code của bạn ở đây
    pass

# Test
fruits = ["apple", "banana", "orange"]
print(check_item_exists(fruits, "banana"))  # True
print(check_item_exists(fruits, "mango"))   # False
```

12. Tạo một list **`colors`** chứa tên 4 màu sắc. Sau đó:

* Tạo một list mới bằng cách nhân list **`colors`** với 3 (lặp lại 3 lần)
* In ra list mới
* In ra độ dài của list mới

Ví dụ kết quả:

```python
# colors = ["red", "blue", "green", "yellow"]
# Kết quả: ["red", "blue", "green", "yellow", "red", "blue", "green", "yellow", "red", "blue", "green", "yellow"]
```

13. Viết hàm **`find_max_number`** nhận vào một list các số và trả về số lớn nhất trong list.

```python
def find_max_number(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [5, 2, 8, 1, 9, 3]
print(find_max_number(numbers))  # 9
```

> **💡 Gợi ý: Dùng hàm **`max()`** hoặc dùng vòng lặp để tìm**

14. Viết hàm **`find_min_number`** nhận vào một list các số và trả về số nhỏ nhất trong list.

```python
def find_min_number(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [5, 2, 8, 1, 9, 3]
print(find_min_number(numbers))  # 1
```

15. Tạo một list **`numbers`** chứa các số: 1, 2, 3, 2, 4, 2, 5. Sau đó:

* Đếm xem số 2 xuất hiện bao nhiêu lần bằng phương thức **`count()`**
* Tìm vị trí (index) của số 4 bằng phương thức **`index()`**
* In ra kết quả

16. Viết hàm **`sum_list`** nhận vào một list các số và trả về tổng của tất cả các số trong list.

```python
def sum_list(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 4, 5]
print(sum_list(numbers))  # 15
```

> **💡 Gợi ý: Dùng hàm **`sum()`** hoặc dùng vòng lặp**

17. Viết hàm **`average_list`** nhận vào một list các số và trả về trung bình cộng của các số đó.

```python
def average_list(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [10, 20, 30, 40]
print(average_list(numbers))  # 25.0
```

18. Tạo một list **`mixed`** chứa cả số và chuỗi: `[1, "hello", 2, "world", 3]`. Viết chương trình tách list này thành 2 list riêng biệt:

* List **`numbers`** chỉ chứa các số
* List **`strings`** chỉ chứa các chuỗi

Sau đó in ra cả 2 list.

> **💡 Gợi ý: Dùng vòng lặp và hàm **`type()`** để kiểm tra kiểu dữ liệu**

19. Viết hàm **`remove_duplicates`** nhận vào một list có thể chứa các phần tử trùng lặp và trả về list mới không có phần tử trùng lặp.

```python
def remove_duplicates(my_list):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 2, 4, 1, 5, 3]
result = remove_duplicates(numbers)
print(result)  # [1, 2, 3, 4, 5]
```

> **💡 Gợi ý: Có thể dùng **`set()`** hoặc dùng vòng lặp để kiểm tra**

20. Viết chương trình tạo một list **`students`** chứa tên của 5 học sinh. Sau đó:

* In ra danh sách học sinh theo thứ tự ban đầu
* Sắp xếp danh sách theo thứ tự alphabet (A-Z) và in ra
* Sắp xếp danh sách theo thứ tự ngược (Z-A) và in ra
* In ra học sinh có tên đầu tiên theo alphabet
* In ra học sinh có tên cuối cùng theo alphabet

Ví dụ:

```python
students = ["Tuệ Nghi", "Minh Sang", "Phước Sâm", "Bảo Nguyên", "Đức Sơn"]

# Danh sách ban đầu
print("Ban đầu:", students)

# Sắp xếp A-Z
students.sort()
print("A-Z:", students)

# Sắp xếp Z-A
students.sort(reverse=True)
print("Z-A:", students)
```
