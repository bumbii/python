---
description: Các bài tập về Dictionary (Từ điển)
icon: book
---


# Bài tập Dictionary

1. Viết hàm có tên **`create_student_info`** tạo ra một dictionary chứa thông tin học sinh với các key: `"name"`, `"age"`, `"grade"`. Gán giá trị tương ứng cho mỗi key và dùng hàm `print` để in dictionary.

Ví dụ kết quả:

```python
{"name": "Minh Anh", "age": 10, "grade": 5}
```

2. Viết hàm có tên **`create_fruit_prices`** tạo ra một dictionary chứa tên và giá của 5 loại trái cây. Sau đó in ra dictionary này.

Ví dụ:

```python
{"apple": 15000, "banana": 10000, "orange": 20000, "mango": 25000, "grape": 30000}
```

3. Tạo một dictionary có tên **`student`** với các thông tin: tên, tuổi, trường học. In ra tên của học sinh bằng cách truy cập key `"name"`.

Ví dụ:

```python
student = {"name": "Tuệ Nghi", "age": 11, "school": "Trường ABC"}
# In ra: Tuệ Nghi
```

4. Tạo dictionary **`scores`** chứa điểm của 4 môn học: toán, văn, tiếng anh, khoa học. In ra điểm môn toán.

5. Viết chương trình tạo dictionary **`phonebook`** chứa tên và số điện thoại của 3 người bạn. Sau đó:

* In ra số điện thoại của người bạn đầu tiên
* Kiểm tra xem tên "Minh Sang" có trong danh bạ không và in ra kết quả

6. Tạo dictionary **`student`** với thông tin: tên và tuổi. Sau đó:

* Thêm key `"grade"` với giá trị là 5
* In ra dictionary sau khi thêm

Ví dụ:

```python
student = {"name": "Phước Sâm", "age": 10}
# Sau khi thêm: {"name": "Phước Sâm", "age": 10, "grade": 5}
```

7. Tạo dictionary **`product`** với các key: `"name"`, `"price"`, `"quantity"`. Sau đó:

* Thay đổi giá (price) thành một giá trị mới
* In ra dictionary sau khi thay đổi

8. Tạo dictionary **`student`** với thông tin: tên, tuổi, lớp, trường. Xoá key `"school"` khỏi dictionary và in ra kết quả.

9. Viết hàm **`get_student_age`** nhận vào một dictionary chứa thông tin học sinh và trả về tuổi của học sinh. Nếu không có thông tin tuổi thì trả về 0.

```python
def get_student_age(student):
    # Code của bạn ở đây
    pass

# Test
student1 = {"name": "Bảo Nguyên", "age": 11}
student2 = {"name": "Đức Sơn"}

print(get_student_age(student1))  # 11
print(get_student_age(student2))  # 0
```

> **💡 Gợi ý: Dùng phương thức `get()` với giá trị mặc định**

10. Tạo dictionary **`scores`** chứa điểm của 5 môn học. Viết chương trình in ra tất cả các tên môn học (keys) trong dictionary.

Ví dụ kết quả:

```
math
literature
english
science
history
```

11. Tạo dictionary **`fruit_prices`** chứa tên và giá của 4 loại trái cây. Viết chương trình in ra tất cả các giá (values) trong dictionary.

12. Tạo dictionary **`student`** với thông tin: tên, tuổi, lớp. Viết chương trình duyệt qua dictionary và in ra từng cặp key-value theo định dạng: `"key: value"`

Ví dụ kết quả:

```
name: Hồng Phúc
age: 10
grade: 5
```

13. Viết hàm **`count_students`** nhận vào một dictionary chứa thông tin nhiều học sinh (nested dictionary) và trả về số lượng học sinh.

Ví dụ:

```python
def count_students(students):
    # Code của bạn ở đây
    pass

# Test
students = {
    "student1": {"name": "Gia Hưng", "age": 11},
    "student2": {"name": "Hoàng Thịnh", "age": 10},
    "student3": {"name": "Trọng Phát", "age": 11}
}

print(count_students(students))  # 3
```

14. Tạo dictionary **`scores`** với điểm của 4 môn học. Viết chương trình tính điểm trung bình của các môn học và in ra kết quả.

Ví dụ:

```python
scores = {"math": 9.5, "literature": 8.0, "english": 9.0, "science": 8.5}
# Điểm trung bình: 8.75
```

> **💡 Gợi ý: Dùng hàm `sum()` với `scores.values()` và `len()`**

15. Viết hàm **`update_student_info`** nhận vào một dictionary học sinh và một dictionary chứa thông tin cập nhật. Hàm sẽ cập nhật thông tin học sinh và trả về dictionary đã cập nhật.

```python
def update_student_info(student, updates):
    # Code của bạn ở đây
    pass

# Test
student = {"name": "Tuệ Nghi", "age": 10, "grade": 5}
updates = {"age": 11, "school": "Trường ABC"}

result = update_student_info(student, updates)
print(result)
# {"name": "Tuệ Nghi", "age": 11, "grade": 5, "school": "Trường ABC"}
```

16. Viết chương trình tạo dictionary **`inventory`** chứa tên sản phẩm và số lượng trong kho. Sau đó:

* Kiểm tra xem sản phẩm "apple" có trong kho không
* Nếu có, in ra số lượng
* Nếu không, in ra "Sản phẩm không có trong kho"

17. Viết hàm **`merge_dictionaries`** nhận vào 2 dictionary và trả về một dictionary mới chứa tất cả các cặp key-value từ cả 2 dictionary.

```python
def merge_dictionaries(dict1, dict2):
    # Code của bạn ở đây
    pass

# Test
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

result = merge_dictionaries(dict1, dict2)
print(result)  # {"a": 1, "b": 2, "c": 3, "d": 4}
```

18. Viết chương trình nhận vào một chuỗi văn bản và đếm số lần xuất hiện của mỗi từ. Lưu kết quả vào dictionary và in ra.

Ví dụ:

```python
text = "python is fun python is easy"
# Kết quả: {"python": 2, "is": 2, "fun": 1, "easy": 1}
```

> **💡 Gợi ý: Dùng phương thức `split()` để tách chuỗi thành list các từ, sau đó duyệt qua từng từ và đếm.**

19. Viết hàm **`find_max_score`** nhận vào dictionary chứa điểm của các môn học và trả về tên môn học có điểm cao nhất.

```python
def find_max_score(scores):
    # Code của bạn ở đây
    pass

# Test
scores = {"math": 9.5, "literature": 8.0, "english": 9.0, "science": 8.5}
print(find_max_score(scores))  # "math"
```

20. Viết chương trình tạo danh bạ điện thoại đơn giản với các chức năng:

* Thêm người liên hệ mới (tên và số điện thoại)
* Tìm số điện thoại theo tên
* Xoá người liên hệ
* Hiển thị tất cả liên hệ

Ví dụ:

```python
phonebook = {}

# Thêm liên hệ
phonebook["Minh Sang"] = "0901234567"
phonebook["Phước Sâm"] = "0907654321"

# Tìm số điện thoại
name = "Minh Sang"
if name in phonebook:
    print(f"Số điện thoại của {name}: {phonebook[name]}")

# Xoá liên hệ
del phonebook["Minh Sang"]

# Hiển thị tất cả
for name, phone in phonebook.items():
    print(f"{name}: {phone}")
```
