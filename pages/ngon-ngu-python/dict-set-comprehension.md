---
icon: sparkles
---

# Dictionary và Set Comprehension

## 1. Giới thiệu

**Comprehension** là cách viết ngắn gọn và dễ đọc để tạo Dictionary và Set từ một iterable (list, tuple, range, v.v.).

### Lợi ích của Comprehension:
- ✅ Code ngắn gọn hơn
- ✅ Dễ đọc và dễ hiểu
- ✅ Thường nhanh hơn vòng lặp thông thường
- ✅ Pythonic (theo phong cách Python)

## 2. Dictionary Comprehension

### 2.1 - Cú pháp cơ bản

```python
# Cú pháp
new_dict = {key_expression: value_expression for item in iterable}
```

### 2.2 - Ví dụ đơn giản

```python
# Tạo dictionary: số -> bình phương
squares = {x: x**2 for x in range(1, 6)}
print(squares)
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Tạo dictionary từ hai lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
students = {name: age for name, age in zip(names, ages)}
print(students)
# {'Alice': 25, 'Bob': 30, 'Charlie': 35}
```

### 2.3 - So sánh với vòng lặp thông thường

```python
# Cách 1: Vòng lặp thông thường
squares = {}
for x in range(1, 6):
    squares[x] = x**2

# Cách 2: Dictionary Comprehension (ngắn gọn hơn!)
squares = {x: x**2 for x in range(1, 6)}
```

## 3. Dictionary Comprehension với điều kiện

### 3.1 - Thêm điều kiện if

```python
# Chỉ lấy số chẵn
even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)
# {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# Lọc học sinh điểm cao
scores = {"Alice": 85, "Bob": 60, "Charlie": 92, "David": 55}
passed = {name: score for name, score in scores.items() if score >= 70}
print(passed)
# {'Alice': 85, 'Charlie': 92}
```

### 3.2 - Điều kiện if-else

```python
# Phân loại số chẵn/lẻ
numbers = {x: ("even" if x % 2 == 0 else "odd") for x in range(1, 6)}
print(numbers)
# {1: 'odd', 2: 'even', 3: 'odd', 4: 'even', 5: 'odd'}

# Chuyển đổi nhiệt độ
temps_c = {"Ha Noi": 30, "Da Nang": 28, "TP HCM": 32}
temps_f = {city: (temp * 9/5 + 32 if temp else 0) for city, temp in temps_c.items()}
print(temps_f)
# {'Ha Noi': 86.0, 'Da Nang': 82.4, 'TP HCM': 89.6}
```

## 4. Ví dụ thực tế với Dictionary Comprehension

### Ví dụ 1: Đếm ký tự trong chuỗi

```python
text = "hello"
char_count = {char: text.count(char) for char in text}
print(char_count)
# {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```

### Ví dụ 2: Đảo ngược dictionary

```python
original = {"a": 1, "b": 2, "c": 3}
reversed_dict = {value: key for key, value in original.items()}
print(reversed_dict)
# {1: 'a', 2: 'b', 3: 'c'}
```

### Ví dụ 3: Chuyển đổi list thành lookup dictionary

```python
fruits = ["apple", "banana", "cherry"]
fruit_index = {fruit: index for index, fruit in enumerate(fruits)}
print(fruit_index)
# {'apple': 0, 'banana': 1, 'cherry': 2}
```

### Ví dụ 4: Tạo dictionary từ list với điều kiện

```python
words = ["apple", "banana", "kiwi", "cherry", "date"]
long_words = {word: len(word) for word in words if len(word) > 5}
print(long_words)
# {'banana': 6, 'cherry': 6}
```

## 5. Nested Dictionary Comprehension

### 5.1 - Comprehension lồng nhau

```python
# Tạo bảng cửu chương
multiplication_table = {
    x: {y: x*y for y in range(1, 6)}
    for x in range(1, 6)
}
print(multiplication_table)
# {
#     1: {1: 1, 2: 2, 3: 3, 4: 4, 5: 5},
#     2: {1: 2, 2: 4, 3: 6, 4: 8, 5: 10},
#     ...
# }
```

### 5.2 - Flatten nested dictionary

```python
nested = {"a": {"x": 1, "y": 2}, "b": {"x": 3, "y": 4}}
flat = {f"{k1}_{k2}": v for k1, d in nested.items() for k2, v in d.items()}
print(flat)
# {'a_x': 1, 'a_y': 2, 'b_x': 3, 'b_y': 4}
```

## 6. Set Comprehension

### 6.1 - Cú pháp cơ bản

```python
# Cú pháp
new_set = {expression for item in iterable}
```

**Lưu ý:** Set tự động loại bỏ phần tử trùng lặp!

### 6.2 - Ví dụ đơn giản

```python
# Tạo set các số bình phương
squares = {x**2 for x in range(1, 6)}
print(squares)
# {1, 4, 9, 16, 25}

# Loại bỏ trùng lặp
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = {x for x in numbers}
print(unique)
# {1, 2, 3, 4}
```

### 6.3 - So sánh với vòng lặp thông thường

```python
# Cách 1: Vòng lặp thông thường
squares = set()
for x in range(1, 6):
    squares.add(x**2)

# Cách 2: Set Comprehension (ngắn gọn hơn!)
squares = {x**2 for x in range(1, 6)}
```

## 7. Set Comprehension với điều kiện

### 7.1 - Thêm điều kiện if

```python
# Chỉ lấy số chẵn
even_numbers = {x for x in range(1, 11) if x % 2 == 0}
print(even_numbers)
# {2, 4, 6, 8, 10}

# Lọc từ dài hơn 4 ký tự
words = ["cat", "dog", "elephant", "lion", "tiger"]
long_words = {word for word in words if len(word) > 4}
print(long_words)
# {'elephant', 'tiger'}
```

### 7.2 - Điều kiện if-else

```python
# Chuyển đổi: số chẵn thành "even", số lẻ thành "odd"
types = {"even" if x % 2 == 0 else "odd" for x in range(1, 6)}
print(types)
# {'odd', 'even'}  # Chỉ 2 phần tử vì set loại trùng lặp!
```

## 8. Ví dụ thực tế với Set Comprehension

### Ví dụ 1: Lấy các ký tự unique trong chuỗi

```python
text = "hello world"
unique_chars = {char for char in text if char != " "}
print(unique_chars)
# {'h', 'e', 'l', 'o', 'w', 'r', 'd'}
```

### Ví dụ 2: Lấy phần tử chung của nhiều lists

```python
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common = {x for x in list1 if x in list2}
print(common)
# {4, 5}
```

### Ví dụ 3: Tạo set các số chia hết cho 3 hoặc 5

```python
divisible = {x for x in range(1, 31) if x % 3 == 0 or x % 5 == 0}
print(divisible)
# {3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30}
```

### Ví dụ 4: Tìm các từ xuất hiện trong cả hai văn bản

```python
text1 = "Python is awesome and powerful"
text2 = "Python is easy and fun"
words1 = set(text1.lower().split())
words2 = set(text2.lower().split())
common_words = {word for word in words1 if word in words2}
print(common_words)
# {'python', 'is', 'and'}
```

## 9. Nested Set Comprehension

```python
# Lấy tất cả các số từ nested lists
nested_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
all_numbers = {num for sublist in nested_lists for num in sublist}
print(all_numbers)
# {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Lấy các số chẵn từ nested lists
even_numbers = {num for sublist in nested_lists for num in sublist if num % 2 == 0}
print(even_numbers)
# {2, 4, 6, 8}
```

## 10. So sánh Dictionary vs Set Comprehension

| Đặc điểm | Dictionary Comprehension | Set Comprehension |
| --- | --- | --- |
| Cú pháp | `{k: v for ...}` | `{x for ...}` |
| Kết quả | Dictionary (key-value) | Set (unique values) |
| Trùng lặp | Key trùng thì ghi đè | Tự động loại bỏ |
| Thứ tự | Giữ thứ tự (Python 3.7+) | Không có thứ tự |
| Sử dụng | Mapping, lookup | Unique values, set operations |

## 11. Tips và Best Practices

### 1. Khi nào nên dùng?

```python
# TỐT - Đơn giản, dễ đọc
squares = {x: x**2 for x in range(5)}

# TRÁNH - Quá phức tạp, khó đọc
complex = {
    x: y**2 + z**3
    for x in range(10)
    for y in range(10)
    for z in range(10)
    if x > 5 and y < 3 and z % 2 == 0
}
# Nên dùng vòng lặp thông thường cho trường hợp này!
```

### 2. Đặt tên rõ ràng

```python
# TỐT
student_grades = {name: score for name, score in zip(names, scores)}

# TRÁNH
d = {n: s for n, s in zip(names, scores)}  # Tên biến không rõ ràng
```

### 3. Giữ cho đơn giản

```python
# TỐT - Một điều kiện đơn giản
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}

# TRÁNH - Nhiều điều kiện phức tạp
# Nên dùng function hoặc vòng lặp thông thường
complex = {
    x: compute(x)
    for x in data
    if condition1(x) and condition2(x) or condition3(x)
}
```

### 4. Cẩn thận với nested comprehension

```python
# TỐT - Flatten đơn giản
flat = {item for sublist in nested for item in sublist}

# TRÁNH - Quá nhiều lồng nhau
very_nested = {
    x: {
        y: {z: x*y*z for z in range(5)}
        for y in range(5)
    }
    for x in range(5)
}
# Khó đọc! Nên tách thành nhiều bước
```

## 12. Ví dụ tổng hợp

### Ví dụ 1: Quản lý điểm học sinh

```python
students = ["Alice", "Bob", "Charlie", "David", "Eve"]
scores = [85, 92, 78, 95, 88]

# Tạo dictionary điểm
grade_dict = {name: score for name, score in zip(students, scores)}
print(grade_dict)

# Lọc học sinh đạt từ 80 trở lên
excellent = {name: score for name, score in grade_dict.items() if score >= 80}
print(excellent)
# {'Alice': 85, 'Bob': 92, 'David': 95, 'Eve': 88}

# Tạo set tên học sinh đạt điểm cao
top_students = {name for name, score in grade_dict.items() if score >= 90}
print(top_students)
# {'Bob', 'David'}
```

### Ví dụ 2: Phân tích văn bản

```python
text = "Python is powerful and Python is easy to learn"
words = text.lower().split()

# Đếm số lần xuất hiện của mỗi từ
word_count = {word: words.count(word) for word in set(words)}
print(word_count)
# {'python': 2, 'is': 2, 'powerful': 1, 'and': 1, 'easy': 1, 'to': 1, 'learn': 1}

# Lấy các từ unique (không trùng)
unique_words = {word for word in words}
print(unique_words)
# {'python', 'is', 'powerful', 'and', 'easy', 'to', 'learn'}

# Lấy các từ dài hơn 4 ký tự
long_words = {word for word in words if len(word) > 4}
print(long_words)
# {'python', 'powerful', 'learn'}
```

### Ví dụ 3: Chuyển đổi dữ liệu

```python
# Dữ liệu gốc
products = [
    ("Laptop", 1000),
    ("Mouse", 20),
    ("Keyboard", 50),
    ("Monitor", 300)
]

# Tạo dictionary giá
prices = {name: price for name, price in products}
print(prices)

# Áp dụng giảm giá 10%
discounted = {name: price * 0.9 for name, price in prices.items()}
print(discounted)
# {'Laptop': 900.0, 'Mouse': 18.0, 'Keyboard': 45.0, 'Monitor': 270.0}

# Lấy sản phẩm đắt tiền (> 100)
expensive = {name for name, price in prices.items() if price > 100}
print(expensive)
# {'Laptop', 'Monitor'}
```

## Bài giảng trên YouTube

Cập nhật sau

---

## 📝 Bài tập thực hành

Sau khi học xong bài này, hãy thực hành với các bài tập sau:

- **[Bài tập Dict Comprehension cơ bản](/bai-tap-lap-trinh/bai-tap-dict-comprehension-co-ban)**
- **[Bài tập Dict Comprehension nâng cao](/bai-tap-lap-trinh/bai-tap-dict-comprehension-nang-cao)**
- **[Bài tập Set Comprehension cơ bản](/bai-tap-lap-trinh/bai-tap-set-comprehension-co-ban)**
- **[Bài tập Set Comprehension nâng cao](/bai-tap-lap-trinh/bai-tap-set-comprehension-nang-cao)**
