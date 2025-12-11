---
icon: table
---

# Làm việc với CSV

## 1. Giới thiệu

**CSV (Comma-Separated Values)** là định dạng file văn bản dùng để lưu trữ dữ liệu dạng bảng. Mỗi dòng trong file là một hàng dữ liệu, các giá trị được ngăn cách bởi dấu phẩy.

### Tại sao học CSV?
- ✅ Định dạng phổ biến để trao đổi dữ liệu
- ✅ Dễ đọc bằng mắt thường
- ✅ Mở được bằng Excel, Google Sheets
- ✅ Thư viện csv của Python rất dễ sử dụng

### Ví dụ file CSV

```csv
name,age,city
Alice,25,New York
Bob,30,Los Angeles
Charlie,22,Chicago
```

## 2. Module csv

Python có module `csv` built-in để làm việc với file CSV.

```python
import csv
```

## 3. Đọc File CSV

### 3.1 - Đọc CSV với csv.reader()

```python
import csv

# Mở và đọc file CSV
with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)

    # Đọc từng dòng
    for row in csv_reader:
        print(row)
```

**Output:**
```
['name', 'age', 'city']
['Alice', '25', 'New York']
['Bob', '30', 'Los Angeles']
['Charlie', '22', 'Chicago']
```

### 3.2 - Bỏ qua header (dòng tiêu đề)

```python
import csv

with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)

    # Bỏ qua dòng đầu tiên
    next(csv_reader)

    for row in csv_reader:
        name, age, city = row
        print(f"{name} is {age} years old and lives in {city}")
```

**Output:**
```
Alice is 25 years old and lives in New York
Bob is 30 years old and lives in Los Angeles
Charlie is 22 years old and lives in Chicago
```

### 3.3 - Đọc CSV thành list

```python
import csv

with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)
    data = list(csv_reader)

print(data)
# [['name', 'age', 'city'], ['Alice', '25', 'New York'], ...]
```

## 4. Đọc CSV với DictReader

`DictReader` đọc mỗi dòng thành dictionary với key là tên cột.

```python
import csv

with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)

    for row in csv_reader:
        print(row)
        print(f"Name: {row['name']}, Age: {row['age']}")
```

**Output:**
```
{'name': 'Alice', 'age': '25', 'city': 'New York'}
Name: Alice, Age: 25
{'name': 'Bob', 'age': '30', 'city': 'Los Angeles'}
Name: Bob, Age: 30
...
```

### Ưu điểm của DictReader
- ✅ Truy cập dữ liệu bằng tên cột
- ✅ Code dễ đọc và bảo trì
- ✅ Tự động xử lý header

## 5. Ghi File CSV

### 5.1 - Ghi CSV với csv.writer()

```python
import csv

# Dữ liệu cần ghi
data = [
    ['name', 'age', 'city'],
    ['Alice', 25, 'New York'],
    ['Bob', 30, 'Los Angeles'],
    ['Charlie', 22, 'Chicago']
]

# Ghi vào file
with open('output.csv', 'w', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file)

    # Ghi từng dòng
    for row in data:
        csv_writer.writerow(row)
```

### 5.2 - Ghi nhiều dòng cùng lúc

```python
import csv

data = [
    ['name', 'age', 'city'],
    ['Alice', 25, 'New York'],
    ['Bob', 30, 'Los Angeles']
]

with open('output.csv', 'w', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(data)  # writerows với s
```

### 5.3 - Ghi CSV với delimiter khác

```python
import csv

data = [
    ['name', 'age', 'city'],
    ['Alice', 25, 'New York']
]

# Dùng tab thay vì comma
with open('output.tsv', 'w', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file, delimiter='\t')
    csv_writer.writerows(data)
```

## 6. Ghi CSV với DictWriter

```python
import csv

# Dữ liệu dạng dictionary
data = [
    {'name': 'Alice', 'age': 25, 'city': 'New York'},
    {'name': 'Bob', 'age': 30, 'city': 'Los Angeles'},
    {'name': 'Charlie', 'age': 22, 'city': 'Chicago'}
]

# Ghi vào file
with open('output.csv', 'w', newline='', encoding='utf-8') as file:
    fieldnames = ['name', 'age', 'city']
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)

    # Ghi header
    csv_writer.writeheader()

    # Ghi dữ liệu
    for row in data:
        csv_writer.writerow(row)
```

## 7. Thêm dữ liệu vào CSV (Append)

```python
import csv

# Dữ liệu mới
new_data = [
    ['David', 28, 'Boston'],
    ['Emily', 26, 'Seattle']
]

# Thêm vào cuối file
with open('data.csv', 'a', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(new_data)
```

## 8. Xử lý delimiter và quotechar

### 8.1 - Custom delimiter

```python
import csv

# File CSV dùng dấu chấm phẩy
with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file, delimiter=';')
    for row in csv_reader:
        print(row)
```

### 8.2 - Xử lý dấu ngoặc kép

```python
import csv

data = [
    ['name', 'quote'],
    ['Alice', 'She said "Hello"'],
    ['Bob', 'He likes "Python"']
]

with open('quotes.csv', 'w', newline='', encoding='utf-8') as file:
    csv_writer = csv.writer(file, quoting=csv.QUOTE_MINIMAL)
    csv_writer.writerows(data)
```

## 9. Ví dụ thực tế

### Ví dụ 1: Đọc và xử lý dữ liệu điểm số

```python
import csv

# Đọc file điểm học sinh
with open('scores.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)

    for student in csv_reader:
        name = student['name']
        math = int(student['math'])
        english = int(student['english'])
        average = (math + english) / 2

        print(f"{name}: Trung bình = {average:.1f}")
```

### Ví dụ 2: Lọc và ghi dữ liệu

```python
import csv

# Đọc dữ liệu và lọc
with open('employees.csv', 'r', encoding='utf-8') as infile:
    csv_reader = csv.DictReader(infile)

    # Lọc nhân viên có tuổi > 30
    filtered_data = [row for row in csv_reader if int(row['age']) > 30]

# Ghi dữ liệu đã lọc
with open('senior_employees.csv', 'w', newline='', encoding='utf-8') as outfile:
    fieldnames = ['name', 'age', 'department']
    csv_writer = csv.DictWriter(outfile, fieldnames=fieldnames)

    csv_writer.writeheader()
    csv_writer.writerows(filtered_data)
```

### Ví dụ 3: Đếm và thống kê

```python
import csv
from collections import Counter

# Đếm số người theo thành phố
with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)

    cities = [row['city'] for row in csv_reader]
    city_counts = Counter(cities)

    print("Thống kê theo thành phố:")
    for city, count in city_counts.items():
        print(f"{city}: {count} người")
```

## 10. Lỗi thường gặp

### Lỗi 1: Quên newline=''

```python
# ❌ SAI - Có thể tạo dòng trống
with open('data.csv', 'w') as file:
    csv_writer = csv.writer(file)

# ✅ ĐÚNG
with open('data.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)
```

### Lỗi 2: Quên encoding

```python
# ❌ SAI - Lỗi với ký tự tiếng Việt
with open('data.csv', 'r') as file:
    csv_reader = csv.reader(file)

# ✅ ĐÚNG
with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)
```

### Lỗi 3: Không đóng file

```python
# ❌ SAI
file = open('data.csv', 'r')
csv_reader = csv.reader(file)
# Quên file.close()

# ✅ ĐÚNG - Dùng with
with open('data.csv', 'r') as file:
    csv_reader = csv.reader(file)
    # Tự động đóng file
```

## 11. Tips và Best Practices

### 1. Luôn dùng context manager (with)

```python
# ✅ TỐT
with open('data.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)
    # Code của bạn
```

### 2. Xác định encoding

```python
# Với ký tự tiếng Việt
with open('data.csv', 'r', encoding='utf-8') as file:
    # Code của bạn
```

### 3. Dùng DictReader/DictWriter cho code dễ đọc

```python
# ✅ TỐT - Dễ hiểu
with open('data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row['name'])  # Rõ ràng
```

### 4. Xử lý exception

```python
try:
    with open('data.csv', 'r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            process(row)
except FileNotFoundError:
    print("File không tồn tại!")
except csv.Error as e:
    print(f"Lỗi CSV: {e}")
```

## 12. So sánh reader vs DictReader

| Feature | csv.reader | csv.DictReader |
| --- | --- | --- |
| Kiểu dữ liệu trả về | List | Dictionary |
| Truy cập dữ liệu | Theo index: row[0] | Theo key: row['name'] |
| Xử lý header | Thủ công | Tự động |
| Tốc độ | Nhanh hơn một chút | Chậm hơn một chút |
| Dễ đọc | Ít hơn | Nhiều hơn |

**Khuyến nghị:** Dùng DictReader/DictWriter cho hầu hết trường hợp vì code dễ đọc và bảo trì.
