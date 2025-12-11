# List Comprehension

List comprehension là một trong những tính năng mạnh mẽ nhất của Python, giúp bạn tạo [list](./list) mới từ các iterable một cách ngắn gọn và dễ đọc.

## List Comprehension là gì?

List comprehension là cú pháp đặc biệt trong Python cho phép tạo list mới bằng cách áp dụng một biểu thức cho mỗi phần tử trong một iterable (list, tuple, string, v.v.), thường kết hợp với điều kiện lọc.

**Cú pháp cơ bản:**
```python
[biểu_thức for phần_tử in iterable]
```

**Cú pháp với điều kiện:**
```python
[biểu_thức for phần_tử in iterable if điều_kiện]
```

## Tại sao nên sử dụng List Comprehension?

### 1. Code ngắn gọn hơn

**Cách truyền thống:**
```python
squares = []
for x in range(10):
    squares.append(x**2)
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

**Với list comprehension:**
```python
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### 2. Hiệu suất tốt hơn

List comprehension thường chạy nhanh hơn vòng lặp for truyền thống vì được tối ưu hóa ở mức C trong CPython.

### 3. Dễ đọc và Pythonic

Code sử dụng list comprehension thường được coi là "Pythonic" hơn - phong cách lập trình được cộng đồng Python khuyến khích.

## Các ví dụ cụ thể

### Ví dụ 1: Chuyển đổi dữ liệu đơn giản

```python
# Chuyển đổi danh sách số thành bình phương
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers]
print(squares)  # [1, 4, 9, 16, 25]

# Chuyển đổi chuỗi thành chữ hoa
words = ['hello', 'world', 'python']
uppercase = [word.upper() for word in words]
print(uppercase)  # ['HELLO', 'WORLD', 'PYTHON']

# Lấy độ dài của mỗi từ
lengths = [len(word) for word in words]
print(lengths)  # [5, 5, 6]
```

### Ví dụ 2: Sử dụng điều kiện lọc (if)

```python
# Lọc số chẵn
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [n for n in numbers if n % 2 == 0]
print(evens)  # [2, 4, 6, 8, 10]

# Lọc số dương
mixed_numbers = [-3, -1, 0, 2, 5, -7, 8]
positives = [n for n in mixed_numbers if n > 0]
print(positives)  # [2, 5, 8]

# Lọc từ có độ dài > 4
words = ['cat', 'hello', 'dog', 'python', 'ai']
long_words = [word for word in words if len(word) > 4]
print(long_words)  # ['hello', 'python']
```

### Ví dụ 3: Kết hợp điều kiện và biến đổi

```python
# Bình phương các số chẵn
numbers = [1, 2, 3, 4, 5, 6]
even_squares = [n**2 for n in numbers if n % 2 == 0]
print(even_squares)  # [4, 16, 36]

# Chuyển các số âm thành dương
numbers = [-5, 3, -2, 8, -1]
absolute_negatives = [abs(n) for n in numbers if n < 0]
print(absolute_negatives)  # [5, 2, 1]
```

### Ví dụ 4: If-else trong List Comprehension

```python
# Phân loại số chẵn/lẻ
numbers = [1, 2, 3, 4, 5]
labels = ['even' if n % 2 == 0 else 'odd' for n in numbers]
print(labels)  # ['odd', 'even', 'odd', 'even', 'odd']

# Thay thế số âm bằng 0
numbers = [-3, 5, -1, 8, -2]
non_negative = [n if n >= 0 else 0 for n in numbers]
print(non_negative)  # [0, 5, 0, 8, 0]

# Chuẩn hóa điểm số
scores = [45, 78, 92, 35, 88]
passed = ['Pass' if score >= 50 else 'Fail' for score in scores]
print(passed)  # ['Fail', 'Pass', 'Pass', 'Fail', 'Pass']
```

### Ví dụ 5: Nested List Comprehension (Lồng nhau)

```python
# Tạo ma trận 3x3
matrix = [[i*3 + j for j in range(3)] for i in range(3)]
print(matrix)
# [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

# Làm phẳng (flatten) ma trận
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Tạo tất cả các cặp có thể
colors = ['red', 'green', 'blue']
sizes = ['S', 'M', 'L']
combinations = [(color, size) for color in colors for size in sizes]
print(combinations)
# [('red', 'S'), ('red', 'M'), ('red', 'L'), 
#  ('green', 'S'), ('green', 'M'), ('green', 'L'), 
#  ('blue', 'S'), ('blue', 'M'), ('blue', 'L')]
```

### Ví dụ 6: Xử lý chuỗi

```python
# Lọc nguyên âm từ chuỗi
sentence = "Hello World"
vowels = [char for char in sentence if char.lower() in 'aeiou']
print(vowels)  # ['e', 'o', 'o']

# Tách và làm sạch dữ liệu
raw_data = "  apple,  banana,  orange  "
cleaned = [item.strip() for item in raw_data.split(',')]
print(cleaned)  # ['apple', 'banana', 'orange']

# Đếm ký tự trong mỗi từ
words = ['python', 'list', 'comprehension']
char_counts = [(word, len(word)) for word in words]
print(char_counts)  # [('python', 6), ('list', 4), ('comprehension', 13)]
```

### Ví dụ 7: Làm việc với dictionary

```python
# Tạo dictionary từ hai list
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'Hanoi']
person = {k: v for k, v in zip(keys, values)}
print(person)  # {'name': 'Alice', 'age': 25, 'city': 'Hanoi'}

# Lọc dictionary
scores = {'Alice': 85, 'Bob': 72, 'Charlie': 90, 'David': 65}
high_scorers = {name: score for name, score in scores.items() if score >= 80}
print(high_scorers)  # {'Alice': 85, 'Charlie': 90}

# Đảo ngược key-value
original = {'a': 1, 'b': 2, 'c': 3}
reversed_dict = {v: k for k, v in original.items()}
print(reversed_dict)  # {1: 'a', 2: 'b', 3: 'c'}
```

### Ví dụ 8: Ứng dụng thực tế

**Xử lý dữ liệu sinh viên:**
```python
students = [
    {'name': 'An', 'score': 85},
    {'name': 'Binh', 'score': 72},
    {'name': 'Chi', 'score': 90},
    {'name': 'Dung', 'score': 65}
]

# Lấy tên các sinh viên đạt điểm cao
high_achievers = [s['name'] for s in students if s['score'] >= 80]
print(high_achievers)  # ['An', 'Chi']

# Tính điểm trung bình cộng
avg_score = sum([s['score'] for s in students]) / len(students)
print(f"Điểm trung bình: {avg_score}")  # Điểm trung bình: 78.0
```

**Xử lý file CSV:**
```python
# Giả sử đọc từ file CSV
data = [
    "Name,Age,City",
    "Alice,25,Hanoi",
    "Bob,30,HCM",
    "Charlie,35,Danang"
]

# Parse dữ liệu (bỏ header)
parsed = [line.split(',') for line in data[1:]]
print(parsed)
# [['Alice', '25', 'Hanoi'], ['Bob', '30', 'HCM'], ['Charlie', '35', 'Danang']]

# Lấy chỉ tên và tuổi
names_ages = [(row[0], int(row[1])) for row in parsed]
print(names_ages)
# [('Alice', 25), ('Bob', 30), ('Charlie', 35)]
```

## Lưu ý khi sử dụng List Comprehension

### 1. Đừng lạm dụng

List comprehension phức tạp có thể làm code khó đọc:

```python
# Khó đọc
result = [[x*y for y in range(5) if y % 2 == 0] for x in range(10) if x % 3 == 0]

# Tốt hơn: Sử dụng vòng lặp thông thường
result = []
for x in range(10):
    if x % 3 == 0:
        row = []
        for y in range(5):
            if y % 2 == 0:
                row.append(x * y)
        result.append(row)
```

### 2. Cân nhắc về bộ nhớ

List comprehension tạo toàn bộ list trong bộ nhớ. Với dataset lớn, hãy xem xét sử dụng generator expression:

```python
# List comprehension - tạo toàn bộ list
squares_list = [x**2 for x in range(1000000)]

# Generator expression - tạo từng phần tử khi cần
squares_gen = (x**2 for x in range(1000000))
```

### 3. Không nên có side effects

```python
# Không nên
results = [print(x) for x in range(5)]  # Sử dụng print trong comprehension

# Nên
for x in range(5):
    print(x)
```

## So sánh với các phương pháp khác

```python
numbers = range(10)

# List comprehension
squares1 = [x**2 for x in numbers]

# map() với lambda
squares2 = list(map(lambda x: x**2, numbers))

# Vòng lặp for
squares3 = []
for x in numbers:
    squares3.append(x**2)

# Cả 3 đều cho kết quả giống nhau
print(squares1 == squares2 == squares3)  # True
```

## Kết luận

List comprehension là công cụ mạnh mẽ giúp code Python của bạn ngắn gọn, dễ đọc và hiệu quả hơn. Tuy nhiên, hãy sử dụng chúng một cách hợp lý - khi list comprehension trở nên quá phức tạp, đừng ngần ngại quay lại sử dụng vòng lặp for truyền thống để code dễ hiểu hơn.

Hãy thực hành với các ví dụ trên và dần dần list comprehension sẽ trở thành một phần tự nhiên trong cách viết code Python của bạn!