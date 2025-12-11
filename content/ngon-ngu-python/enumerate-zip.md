---
icon: arrows-rotate
---

# Enumerate và Zip

## 1. Giới thiệu

`enumerate()` và `zip()` là hai built-in functions rất hữu ích trong Python giúp làm việc với iterables (lists, tuples, strings) hiệu quả hơn.

### Tại sao cần học?
- ✅ Duyệt qua items và index cùng lúc
- ✅ Kết hợp nhiều iterables lại với nhau
- ✅ Code ngắn gọn và dễ đọc hơn
- ✅ Tránh dùng `range(len(list))` - không Pythonic!

## 2. enumerate() - Đánh số index

### 2.1 - Vấn đề cần giải quyết

```python
# ❌ CÁCH CŨ - Không tốt
fruits = ["apple", "banana", "cherry"]
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# ✅ CÁCH TỐT - Dùng enumerate
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

### 2.2 - Cú pháp

```python
enumerate(iterable, start=0)
```

- `iterable`: List, tuple, string, v.v.
- `start`: Số bắt đầu (mặc định là 0)

### 2.3 - Ví dụ cơ bản

```python
# Ví dụ 1: Đánh số từ 0
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Output:
# 0: apple
# 1: banana
# 2: cherry

# Ví dụ 2: Đánh số từ 1
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}: {fruit}")

# Output:
# 1: apple
# 2: banana
# 3: cherry
```

### 2.4 - enumerate() trả về gì?

```python
fruits = ["apple", "banana", "cherry"]
result = enumerate(fruits)
print(result)  # <enumerate object>

# Chuyển sang list để xem
print(list(enumerate(fruits)))
# [(0, 'apple'), (1, 'banana'), (2, 'cherry')]
```

## 3. Ví dụ thực tế với enumerate()

### Ví dụ 1: Hiển thị menu

```python
menu = ["Pizza", "Burger", "Pasta", "Salad"]

print("=== MENU ===")
for number, dish in enumerate(menu, start=1):
    print(f"{number}. {dish}")

# Output:
# === MENU ===
# 1. Pizza
# 2. Burger
# 3. Pasta
# 4. Salad
```

### Ví dụ 2: Tìm vị trí phần tử

```python
students = ["Alice", "Bob", "Charlie", "David"]
search_name = "Charlie"

for index, name in enumerate(students):
    if name == search_name:
        print(f"Tìm thấy {search_name} ở vị trí {index}")
        break
else:
    print(f"Không tìm thấy {search_name}")
```

### Ví dụ 3: Đánh số dòng file

```python
with open("data.txt", "r", encoding="utf-8") as file:
    for line_number, line in enumerate(file, start=1):
        print(f"Dòng {line_number}: {line.strip()}")
```

### Ví dụ 4: Tạo dictionary với index

```python
fruits = ["apple", "banana", "cherry"]

# Tạo dict: index -> fruit
fruit_dict = {index: fruit for index, fruit in enumerate(fruits)}
print(fruit_dict)
# {0: 'apple', 1: 'banana', 2: 'cherry'}

# Tạo dict: fruit -> index
index_dict = {fruit: index for index, fruit in enumerate(fruits)}
print(index_dict)
# {'apple': 0, 'banana': 1, 'cherry': 2}
```

### Ví dụ 5: Xử lý list với điều kiện

```python
numbers = [10, 25, 30, 15, 40, 5]

# Tìm tất cả vị trí có giá trị > 20
for index, num in enumerate(numbers):
    if num > 20:
        print(f"Vị trí {index}: {num}")

# Output:
# Vị trí 1: 25
# Vị trí 2: 30
# Vị trí 4: 40
```

## 4. zip() - Kết hợp iterables

### 4.1 - Vấn đề cần giải quyết

```python
# ❌ CÁCH CŨ - Không tốt
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]

for i in range(len(names)):
    print(f"{names[i]} is {ages[i]} years old")

# ✅ CÁCH TỐT - Dùng zip
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

### 4.2 - Cú pháp

```python
zip(*iterables)
```

- `*iterables`: Một hoặc nhiều iterables (lists, tuples, strings)
- Trả về: Iterator chứa tuples

### 4.3 - Ví dụ cơ bản

```python
# Ví dụ 1: Kết hợp 2 lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]

for name, age in zip(names, ages):
    print(f"{name}: {age}")

# Output:
# Alice: 25
# Bob: 30
# Charlie: 35

# Ví dụ 2: Kết hợp 3 lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["Hanoi", "HCMC", "Da Nang"]

for name, age, city in zip(names, ages, cities):
    print(f"{name}, {age}, {city}")

# Output:
# Alice, 25, Hanoi
# Bob, 30, HCMC
# Charlie, 35, Da Nang
```

### 4.4 - zip() trả về gì?

```python
names = ["Alice", "Bob"]
ages = [25, 30]

result = zip(names, ages)
print(result)  # <zip object>

# Chuyển sang list để xem
print(list(zip(names, ages)))
# [('Alice', 25), ('Bob', 30)]
```

## 5. zip() với độ dài khác nhau

### 5.1 - zip() dừng ở iterable ngắn nhất

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30]  # Chỉ có 2 phần tử

result = list(zip(names, ages))
print(result)
# [('Alice', 25), ('Bob', 30)]
# Charlie bị bỏ qua!
```

### 5.2 - Dùng itertools.zip_longest() để lấy hết

```python
from itertools import zip_longest

names = ["Alice", "Bob", "Charlie"]
ages = [25, 30]

result = list(zip_longest(names, ages, fillvalue="N/A"))
print(result)
# [('Alice', 25), ('Bob', 30), ('Charlie', 'N/A')]
```

## 6. Ví dụ thực tế với zip()

### Ví dụ 1: Tạo dictionary từ 2 lists

```python
keys = ["name", "age", "city"]
values = ["Alice", 25, "Hanoi"]

person = dict(zip(keys, values))
print(person)
# {'name': 'Alice', 'age': 25, 'city': 'Hanoi'}
```

### Ví dụ 2: Tính tổng từng cột

```python
scores_math = [85, 90, 78]
scores_english = [88, 82, 95]
scores_science = [92, 88, 80]

print("Tổng điểm từng học sinh:")
for i, (math, english, science) in enumerate(zip(scores_math, scores_english, scores_science), start=1):
    total = math + english + science
    print(f"Học sinh {i}: {total} điểm")

# Output:
# Tổng điểm từng học sinh:
# Học sinh 1: 265 điểm
# Học sinh 2: 260 điểm
# Học sinh 3: 253 điểm
```

### Ví dụ 3: Unzip (tách tuple)

```python
pairs = [("Alice", 25), ("Bob", 30), ("Charlie", 35)]

# Unzip bằng zip với *
names, ages = zip(*pairs)

print(names)  # ('Alice', 'Bob', 'Charlie')
print(ages)   # (25, 30, 35)

# Chuyển thành lists
names = list(names)
ages = list(ages)
```

### Ví dụ 4: So sánh 2 lists

```python
list1 = [1, 2, 3, 4, 5]
list2 = [1, 2, 9, 4, 5]

print("So sánh từng phần tử:")
for i, (a, b) in enumerate(zip(list1, list2)):
    if a != b:
        print(f"Vị trí {i}: {a} != {b}")
    else:
        print(f"Vị trí {i}: Giống nhau")

# Output:
# Vị trí 0: Giống nhau
# Vị trí 1: Giống nhau
# Vị trí 2: 3 != 9
# Vị trí 3: Giống nhau
# Vị trí 4: Giống nhau
```

### Ví dụ 5: Transpose matrix

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Transpose (chuyển vị)
transposed = list(zip(*matrix))
print(transposed)
# [(1, 4, 7), (2, 5, 8), (3, 6, 9)]

# Chuyển thành list of lists
transposed = [list(row) for row in zip(*matrix)]
print(transposed)
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

## 7. Kết hợp enumerate() và zip()

### 7.1 - enumerate() với zip()

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["Hanoi", "HCMC", "Da Nang"]

for index, (name, age, city) in enumerate(zip(names, ages, cities), start=1):
    print(f"{index}. {name} ({age}) - {city}")

# Output:
# 1. Alice (25) - Hanoi
# 2. Bob (30) - HCMC
# 3. Charlie (35) - Da Nang
```

### 7.2 - Ví dụ phức tạp hơn

```python
students = ["Alice", "Bob", "Charlie"]
scores_math = [85, 90, 78]
scores_english = [88, 82, 95]

print("=== BẢNG ĐIỂM ===")
for rank, (name, math, english) in enumerate(zip(students, scores_math, scores_english), start=1):
    average = (math + english) / 2
    print(f"{rank}. {name} - Math: {math}, English: {english}, Average: {average:.1f}")

# Output:
# === BẢNG ĐIỂM ===
# 1. Alice - Math: 85, English: 88, Average: 86.5
# 2. Bob - Math: 90, English: 82, Average: 86.0
# 3. Charlie - Math: 78, English: 95, Average: 86.5
```

## 8. Ví dụ tổng hợp

### Ví dụ 1: Quản lý sản phẩm

```python
products = ["Laptop", "Mouse", "Keyboard", "Monitor"]
prices = [1000, 20, 50, 300]
quantities = [5, 100, 50, 10]

print("=== DANH SÁCH SẢN PHẨM ===")
total_value = 0

for index, (product, price, qty) in enumerate(zip(products, prices, quantities), start=1):
    value = price * qty
    total_value += value
    print(f"{index}. {product}: ${price} x {qty} = ${value}")

print(f"\nTổng giá trị kho: ${total_value}")

# Output:
# === DANH SÁCH SẢN PHẨM ===
# 1. Laptop: $1000 x 5 = $5000
# 2. Mouse: $20 x 100 = $2000
# 3. Keyboard: $50 x 50 = $2500
# 4. Monitor: $300 x 10 = $3000
#
# Tổng giá trị kho: $12500
```

### Ví dụ 2: Tìm học sinh điểm cao nhất

```python
students = ["Alice", "Bob", "Charlie", "David", "Eve"]
math_scores = [85, 92, 78, 95, 88]
english_scores = [88, 85, 90, 92, 95]

# Tính điểm trung bình
averages = []
for name, math, english in zip(students, math_scores, english_scores):
    avg = (math + english) / 2
    averages.append((name, avg))

# Tìm điểm cao nhất
max_avg = max(averages, key=lambda x: x[1])
print(f"Học sinh giỏi nhất: {max_avg[0]} ({max_avg[1]} điểm)")

# In bảng xếp hạng
print("\n=== BẢNG XẾP HẠNG ===")
for rank, (name, avg) in enumerate(sorted(averages, key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {name}: {avg:.1f} điểm")
```

### Ví dụ 3: Parallel iteration với nhiều lists

```python
# Dữ liệu bán hàng theo quý
quarters = ["Q1", "Q2", "Q3", "Q4"]
revenue = [100000, 120000, 95000, 150000]
expenses = [60000, 70000, 65000, 80000]
growth = ["+5%", "+8%", "-3%", "+12%"]

print("=== BÁO CÁO TÀI CHÍNH ===")
for q, rev, exp, gr in zip(quarters, revenue, expenses, growth):
    profit = rev - exp
    print(f"{q}: Revenue ${rev:,} | Expenses ${exp:,} | Profit ${profit:,} | Growth {gr}")

# Output:
# === BÁO CÁO TÀI CHÍNH ===
# Q1: Revenue $100,000 | Expenses $60,000 | Profit $40,000 | Growth +5%
# Q2: Revenue $120,000 | Expenses $70,000 | Profit $50,000 | Growth +8%
# Q3: Revenue $95,000 | Expenses $65,000 | Profit $30,000 | Growth -3%
# Q4: Revenue $150,000 | Expenses $80,000 | Profit $70,000 | Growth +12%
```

## 9. So sánh enumerate() vs zip()

| Đặc điểm | enumerate() | zip() |
| --- | --- | --- |
| Mục đích | Thêm index cho iterable | Kết hợp nhiều iterables |
| Input | 1 iterable | Nhiều iterables |
| Output | (index, item) | (item1, item2, ...) |
| Độ dài | Giữ nguyên | Dừng ở ngắn nhất |
| Sử dụng | Khi cần index | Khi cần kết hợp |

## 10. Tips và Best Practices

### 1. Tránh dùng range(len())

```python
items = ["a", "b", "c"]

# ❌ TRÁNH
for i in range(len(items)):
    print(f"{i}: {items[i]}")

# ✅ TỐT
for i, item in enumerate(items):
    print(f"{i}: {item}")
```

### 2. Dùng zip() khi kết hợp lists

```python
keys = ["name", "age"]
values = ["Alice", 25]

# ❌ TRÁNH
d = {}
for i in range(len(keys)):
    d[keys[i]] = values[i]

# ✅ TỐT
d = dict(zip(keys, values))
```

### 3. Unpacking với *

```python
# Unzip data
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
numbers, letters = zip(*pairs)
print(numbers)  # (1, 2, 3)
print(letters)  # ('a', 'b', 'c')
```

### 4. Cẩn thận với độ dài khác nhau

```python
# zip() dừng ở ngắn nhất
list1 = [1, 2, 3]
list2 = [4, 5]

result = list(zip(list1, list2))
print(result)  # [(1, 4), (2, 5)]
# 3 bị mất!

# Dùng zip_longest nếu cần giữ tất cả
from itertools import zip_longest
result = list(zip_longest(list1, list2, fillvalue=0))
print(result)  # [(1, 4), (2, 5), (3, 0)]
```

### 5. enumerate() với string

```python
text = "Python"
for index, char in enumerate(text):
    print(f"{index}: {char}")

# Output:
# 0: P
# 1: y
# 2: t
# 3: h
# 4: o
# 5: n
```

## 11. Bài tập thực hành

### Bài 1: Tìm vị trí tất cả các số chẵn

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for index, num in enumerate(numbers):
    if num % 2 == 0:
        print(f"Số chẵn {num} ở vị trí {index}")
```

### Bài 2: Tạo bảng nhân

```python
num1 = [1, 2, 3, 4, 5]
num2 = [10, 20, 30, 40, 50]

for a, b in zip(num1, num2):
    print(f"{a} x {b} = {a * b}")
```

### Bài 3: Kết hợp enumerate() và zip()

```python
students = ["Alice", "Bob", "Charlie"]
scores = [85, 90, 78]

for rank, (student, score) in enumerate(zip(students, scores), start=1):
    grade = "Pass" if score >= 80 else "Fail"
    print(f"{rank}. {student}: {score} - {grade}")
```

## Bài giảng trên YouTube

Cập nhật sau
