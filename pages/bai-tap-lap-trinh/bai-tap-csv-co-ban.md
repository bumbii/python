---
description: Bài tập về CSV - Cơ bản
icon: table
---

# Bài tập CSV - Cơ bản

1. Tạo file CSV **`students.csv`** chứa thông tin 3 học sinh với các cột: name, age, grade.

```python
import csv

# Code của bạn ở đây
# Tạo file students.csv với header và 3 học sinh
```

2. Đọc file **`students.csv`** và in ra tất cả các dòng dưới dạng list.

```python
import csv

# Code của bạn ở đây
# Output: [['name', 'age', 'grade'], ['Alice', '15', '9'], ...]
```

3. Đọc file CSV và in ra từng dòng, bỏ qua dòng header.

```python
import csv

# Code của bạn ở đây
# Chỉ in dữ liệu, không in header
```

4. Tạo file CSV **`products.csv`** chứa: product_name, price, quantity cho 5 sản phẩm.

```python
import csv

products = [
    ['product_name', 'price', 'quantity'],
    ['Laptop', 1000, 5],
    ['Mouse', 20, 50],
    ['Keyboard', 50, 30],
    ['Monitor', 300, 10],
    ['Headphones', 80, 25]
]

# Code của bạn ở đây - ghi vào products.csv
```

5. Đọc file **`products.csv`** và tính tổng giá trị kho hàng (price * quantity).

```python
import csv

total_value = 0
# Code của bạn ở đây
print(f"Tổng giá trị kho hàng: ${total_value}")
```

6. Đọc file CSV dùng **`DictReader`** và in ra mỗi dòng dưới dạng dictionary.

```python
import csv

# Code của bạn ở đây với DictReader
```

7. Tạo file **`employees.csv`** dùng **`DictWriter`** với các cột: name, department, salary.

```python
import csv

employees = [
    {'name': 'Alice', 'department': 'IT', 'salary': 80000},
    {'name': 'Bob', 'department': 'HR', 'salary': 60000},
    {'name': 'Charlie', 'department': 'IT', 'salary': 90000}
]

# Code của bạn ở đây - ghi bằng DictWriter
```

8. Đọc file **`employees.csv`** và in ra tên của các nhân viên thuộc phòng IT.

```python
import csv

# Code của bạn ở đây
# Output: Alice, Charlie
```

9. Thêm 2 nhân viên mới vào cuối file **`employees.csv`** (append mode).

```python
import csv

new_employees = [
    ['David', 'Sales', 70000],
    ['Emily', 'Marketing', 65000]
]

# Code của bạn ở đây - dùng mode 'a'
```

10. Đọc file CSV và đếm số lượng dòng (không tính header).

```python
import csv

count = 0
# Code của bạn ở đây
print(f"Số lượng dòng dữ liệu: {count}")
```

11. Tạo file **`scores.csv`** với: student_name, math, english, science.

```python
import csv

scores = [
    ['student_name', 'math', 'english', 'science'],
    ['Alice', 85, 90, 88],
    ['Bob', 78, 85, 80],
    ['Charlie', 92, 88, 95]
]

# Code của bạn ở đây
```

12. Đọc **`scores.csv`** và tính điểm trung bình của từng học sinh.

```python
import csv

# Code của bạn ở đây
# Output:
# Alice: 87.67
# Bob: 81.00
# Charlie: 91.67
```

13. Đọc file CSV và lưu tất cả dữ liệu vào một list of dictionaries.

```python
import csv

data = []
# Code của bạn ở đây
print(data)
# [{'name': 'Alice', 'age': '25'}, {'name': 'Bob', 'age': '30'}, ...]
```

14. Tạo file CSV với delimiter là dấu chấm phẩy (;) thay vì dấu phẩy.

```python
import csv

data = [
    ['name', 'country', 'language'],
    ['Alice', 'USA', 'English'],
    ['Bob', 'France', 'French']
]

# Code của bạn ở đây - dùng delimiter=';'
```

15. Đọc file CSV (delimiter ;) và in ra dữ liệu.

```python
import csv

# Code của bạn ở đây - đọc file với delimiter=';'
```

16. Viết function **`read_csv_to_list(filename)`** đọc file CSV và trả về list of lists.

```python
import csv

def read_csv_to_list(filename):
    # Code của bạn ở đây
    pass

# Test
data = read_csv_to_list('students.csv')
print(data)
```

17. Viết function **`write_csv_from_list(filename, data)`** ghi list vào file CSV.

```python
import csv

def write_csv_from_list(filename, data):
    # Code của bạn ở đây
    pass

# Test
data = [
    ['name', 'age'],
    ['Alice', 25],
    ['Bob', 30]
]
write_csv_from_list('output.csv', data)
```

18. Đọc file CSV và tìm dòng có giá trị lớn nhất ở một cột cụ thể.

```python
import csv

# Giả sử có file products.csv với cột price
# Tìm sản phẩm có giá cao nhất

# Code của bạn ở đây
```

19. Đọc file **`employees.csv`** và tạo file mới chỉ chứa các nhân viên có salary > 70000.

```python
import csv

# Code của bạn ở đây
# Đọc employees.csv
# Lọc và ghi vào high_salary.csv
```

20. Viết function **`count_by_column(filename, column_name, value)`** đếm số dòng có giá trị cụ thể ở một cột.

```python
import csv

def count_by_column(filename, column_name, value):
    """
    Đếm số dòng có giá trị cụ thể ở cột column_name
    """
    # Code của bạn ở đây
    pass

# Test
# Đếm số nhân viên thuộc phòng IT
count = count_by_column('employees.csv', 'department', 'IT')
print(f"Số nhân viên IT: {count}")
```

{% hint style="info" %}
**Lưu ý quan trọng:**
- Luôn dùng `encoding='utf-8'` khi làm việc với ký tự tiếng Việt
- Dùng `newline=''` khi ghi file CSV
- Dùng context manager (`with`) để tự động đóng file
{% endhint %}
