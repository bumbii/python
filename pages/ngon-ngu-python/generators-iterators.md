# Generators và Iterators

Generators và Iterators là hai khái niệm quan trọng trong Python giúp làm việc hiệu quả với chuỗi dữ liệu lớn mà không cần load toàn bộ vào bộ nhớ.

## 1. Iterators (Trình lặp)

### Iterator là gì?

Iterator là một object có thể duyệt qua (iterate) từng phần tử một, tuân theo **Iterator Protocol**.

**Iterator Protocol** yêu cầu:
- Có phương thức `__iter__()`: Trả về chính object đó
- Có phương thức `__next__()`: Trả về phần tử tiếp theo, raise `StopIteration` khi hết

```python
# List là iterable (có thể lặp), KHÔNG phải iterator
my_list = [1, 2, 3]

# Tạo iterator từ iterable
my_iterator = iter(my_list)

# Lấy từng phần tử
print(next(my_iterator))  # 1
print(next(my_iterator))  # 2
print(next(my_iterator))  # 3

# Hết phần tử → StopIteration
# print(next(my_iterator))  # StopIteration
```

### For loop sử dụng iterator ngầm định

```python
# Khi dùng for loop
for item in [1, 2, 3]:
    print(item)

# Python thực ra làm:
iterator = iter([1, 2, 3])
while True:
    try:
        item = next(iterator)
        print(item)
    except StopIteration:
        break
```

### Tạo Iterator tùy chỉnh

```python
class Counter:
    """Iterator đếm từ start đến end"""

    def __init__(self, start, end):
        self.current = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        self.current += 1
        return self.current - 1

# Sử dụng
counter = Counter(1, 5)

for num in counter:
    print(num)  # 1, 2, 3, 4, 5

# Hoặc dùng next()
counter2 = Counter(10, 12)
print(next(counter2))  # 10
print(next(counter2))  # 11
print(next(counter2))  # 12
# print(next(counter2))  # StopIteration
```

### Iterator vô hạn

```python
class InfiniteCounter:
    """Iterator đếm vô hạn"""

    def __init__(self, start=0):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        self.current += 1
        return self.current - 1

# Sử dụng với break
counter = InfiniteCounter()

for num in counter:
    if num >= 5:
        break
    print(num)  # 0, 1, 2, 3, 4
```

## 2. Generators (Trình tạo)

### Generator là gì?

Generator là một cách đơn giản để tạo iterator bằng cách dùng từ khóa `yield`.

**Lợi ích:**
- Code ngắn gọn hơn iterator class
- Tự động implement Iterator Protocol
- Tiết kiệm bộ nhớ (lazy evaluation)

```python
# Generator function
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Tạo generator object
counter = count_up_to(5)

print(type(counter))  # <class 'generator'>

# Duyệt qua generator
for num in counter:
    print(num)  # 1, 2, 3, 4, 5
```

### yield vs return

```python
# return: Kết thúc hàm ngay lập tức
def with_return(n):
    for i in range(n):
        return i  # Chỉ trả về 0

print(with_return(5))  # 0

# yield: Tạm dừng, giữ trạng thái, tiếp tục sau
def with_yield(n):
    for i in range(n):
        yield i  # Trả về từng giá trị

gen = with_yield(5)
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2
```

### Generator expression

```python
# List comprehension (load hết vào memory)
squares_list = [x**2 for x in range(1000000)]
print(type(squares_list))  # <class 'list'>

# Generator expression (lazy evaluation)
squares_gen = (x**2 for x in range(1000000))
print(type(squares_gen))  # <class 'generator'>

# Sử dụng
for square in squares_gen:
    if square > 100:
        break
    print(square)
```

## 3. So sánh Generator và List

### Bộ nhớ

```python
import sys

# List: Load toàn bộ vào memory
numbers_list = [x for x in range(1000000)]
print(f"List size: {sys.getsizeof(numbers_list)} bytes")
# List size: ~8000000 bytes

# Generator: Chỉ lưu công thức
numbers_gen = (x for x in range(1000000))
print(f"Generator size: {sys.getsizeof(numbers_gen)} bytes")
# Generator size: ~200 bytes
```

### Hiệu năng

```python
import time

# List: Tạo toàn bộ ngay
start = time.time()
numbers_list = [x**2 for x in range(1000000)]
total = sum(numbers_list)
print(f"List time: {time.time() - start:.4f}s")

# Generator: Tạo từng phần tử khi cần
start = time.time()
numbers_gen = (x**2 for x in range(1000000))
total = sum(numbers_gen)
print(f"Generator time: {time.time() - start:.4f}s")

# Generator thường nhanh hơn và tiết kiệm memory hơn
```

### Sử dụng một lần

```python
# Generator chỉ dùng được 1 lần
gen = (x for x in range(5))

# Lần 1: OK
for num in gen:
    print(num, end=" ")  # 0 1 2 3 4
print()

# Lần 2: Không in gì (đã hết)
for num in gen:
    print(num, end=" ")  # (không in gì)

# List có thể dùng nhiều lần
numbers = [0, 1, 2, 3, 4]

for num in numbers:
    print(num, end=" ")  # 0 1 2 3 4
print()

for num in numbers:
    print(num, end=" ")  # 0 1 2 3 4 (vẫn OK)
```

## 4. Ví dụ Generator thực tế

### Đọc file lớn từng dòng

```python
def read_large_file(file_path):
    """Generator đọc file từng dòng"""
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()

# Sử dụng
# for line in read_large_file('huge_file.txt'):
#     process(line)  # Xử lý từng dòng, không load hết vào memory
```

### Fibonacci sequence

```python
def fibonacci(n):
    """Generator tạo n số Fibonacci đầu tiên"""
    a, b = 0, 1
    count = 0

    while count < n:
        yield a
        a, b = b, a + b
        count += 1

# Sử dụng
for fib in fibonacci(10):
    print(fib, end=" ")  # 0 1 1 2 3 5 8 13 21 34
print()

# Lấy 5 số đầu
fib_gen = fibonacci(5)
print(list(fib_gen))  # [0, 1, 1, 2, 3]
```

### Fibonacci vô hạn

```python
def fibonacci_infinite():
    """Generator tạo chuỗi Fibonacci vô hạn"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Lấy 10 số đầu
fib = fibonacci_infinite()
for _ in range(10):
    print(next(fib), end=" ")  # 0 1 1 2 3 5 8 13 21 34
print()

# Hoặc dùng itertools.islice
import itertools
fib = fibonacci_infinite()
first_10 = list(itertools.islice(fib, 10))
print(first_10)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Prime numbers generator

```python
def primes():
    """Generator tạo số nguyên tố vô hạn"""
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

    n = 2
    while True:
        if is_prime(n):
            yield n
        n += 1

# Lấy 10 số nguyên tố đầu
prime_gen = primes()
for _ in range(10):
    print(next(prime_gen), end=" ")  # 2 3 5 7 11 13 17 19 23 29
print()
```

### Chunking data

```python
def chunk_data(data, chunk_size):
    """Chia data thành các chunks"""
    for i in range(0, len(data), chunk_size):
        yield data[i:i + chunk_size]

# Sử dụng
data = list(range(20))

for chunk in chunk_data(data, 5):
    print(chunk)

# [0, 1, 2, 3, 4]
# [5, 6, 7, 8, 9]
# [10, 11, 12, 13, 14]
# [15, 16, 17, 18, 19]
```

### Pipeline pattern

```python
def read_numbers(file_path):
    """Đọc số từ file"""
    for line in open(file_path):
        yield int(line.strip())

def filter_even(numbers):
    """Lọc số chẵn"""
    for num in numbers:
        if num % 2 == 0:
            yield num

def square(numbers):
    """Bình phương"""
    for num in numbers:
        yield num ** 2

# Pipeline: đọc → lọc → bình phương
# numbers = read_numbers('numbers.txt')
# even_numbers = filter_even(numbers)
# squared = square(even_numbers)
#
# for result in squared:
#     print(result)
```

## 5. Generator Methods

### send()

```python
def echo_generator():
    """Generator nhận giá trị từ bên ngoài"""
    while True:
        received = yield
        print(f"Received: {received}")

gen = echo_generator()
next(gen)  # Khởi động generator

gen.send("Hello")     # Received: Hello
gen.send("World")     # Received: World
gen.send(123)         # Received: 123
```

### send() với giá trị trả về

```python
def running_average():
    """Tính trung bình động"""
    total = 0
    count = 0

    while True:
        value = yield total / count if count > 0 else 0
        total += value
        count += 1

avg = running_average()
next(avg)  # Khởi động

print(avg.send(10))  # 10.0
print(avg.send(20))  # 15.0
print(avg.send(30))  # 20.0
```

### throw()

```python
def error_handler():
    """Generator xử lý exception"""
    while True:
        try:
            value = yield
            print(f"Received: {value}")
        except ValueError as e:
            print(f"ValueError caught: {e}")

gen = error_handler()
next(gen)

gen.send(42)                           # Received: 42
gen.throw(ValueError, "Invalid input") # ValueError caught: Invalid input
gen.send(100)                          # Received: 100
```

### close()

```python
def count_forever():
    """Generator đếm vô hạn"""
    count = 0
    try:
        while True:
            yield count
            count += 1
    finally:
        print("Generator closed")

gen = count_forever()

print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2

gen.close()       # Generator closed
# print(next(gen))  # StopIteration
```

## 6. yield from (Python 3.3+)

### Delegate to sub-generator

```python
def generator_1():
    yield 1
    yield 2

def generator_2():
    yield 3
    yield 4

# Cách cũ: Dùng for loop
def combined_old():
    for value in generator_1():
        yield value
    for value in generator_2():
        yield value

# Cách mới: Dùng yield from
def combined_new():
    yield from generator_1()
    yield from generator_2()

# Sử dụng
for num in combined_new():
    print(num, end=" ")  # 1 2 3 4
print()
```

### Flatten nested list

```python
def flatten(nested_list):
    """Làm phẳng list lồng nhau"""
    for item in nested_list:
        if isinstance(item, list):
            yield from flatten(item)  # Đệ quy
        else:
            yield item

# Sử dụng
nested = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
flat = list(flatten(nested))
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 7. itertools - Module làm việc với Iterators

### itertools.count()

```python
import itertools

# Đếm vô hạn từ start
for i in itertools.count(start=10, step=2):
    if i > 20:
        break
    print(i, end=" ")  # 10 12 14 16 18 20
print()
```

### itertools.cycle()

```python
import itertools

# Lặp vô hạn
colors = ['red', 'green', 'blue']
color_cycle = itertools.cycle(colors)

for _ in range(7):
    print(next(color_cycle), end=" ")
# red green blue red green blue red
print()
```

### itertools.repeat()

```python
import itertools

# Lặp lại giá trị
for value in itertools.repeat('Hello', 3):
    print(value)  # Hello (3 lần)
```

### itertools.chain()

```python
import itertools

# Nối các iterables
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list3 = [7, 8, 9]

chained = itertools.chain(list1, list2, list3)
print(list(chained))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### itertools.islice()

```python
import itertools

# Cắt iterator
numbers = range(100)
first_10 = itertools.islice(numbers, 10)
print(list(first_10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Từ vị trí 5 đến 15
numbers = range(100)
slice_5_15 = itertools.islice(numbers, 5, 15)
print(list(slice_5_15))  # [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

### itertools.takewhile() và dropwhile()

```python
import itertools

numbers = [1, 2, 3, 4, 5, 1, 2, 3]

# Lấy phần tử cho đến khi điều kiện sai
result = itertools.takewhile(lambda x: x < 4, numbers)
print(list(result))  # [1, 2, 3]

# Bỏ phần tử cho đến khi điều kiện sai
result = itertools.dropwhile(lambda x: x < 4, numbers)
print(list(result))  # [4, 5, 1, 2, 3]
```

## 8. Best Practices

### ✅ Khi nào dùng Generator?

```python
# 1. Dữ liệu lớn, không cần load hết vào memory
def process_large_file(file_path):
    with open(file_path) as f:
        for line in f:  # Generator đọc từng dòng
            yield process_line(line)

# 2. Chuỗi vô hạn
def fibonacci_infinite():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 3. Pipeline xử lý dữ liệu
def pipeline():
    data = read_data()
    filtered = filter_data(data)
    transformed = transform_data(filtered)
    return transformed

# 4. Lazy evaluation
def squares():
    for i in range(1000000):
        yield i ** 2  # Chỉ tính khi cần
```

### ❌ Khi nào KHÔNG dùng Generator?

```python
# 1. Cần truy cập ngẫu nhiên (random access)
# ❌ Generator không hỗ trợ indexing
gen = (x for x in range(10))
# value = gen[5]  # TypeError

# ✅ Dùng list
numbers = [x for x in range(10)]
value = numbers[5]  # OK

# 2. Cần dùng nhiều lần
# ❌ Generator chỉ dùng 1 lần
gen = (x for x in range(5))
list(gen)  # [0, 1, 2, 3, 4]
list(gen)  # [] (rỗng!)

# ✅ Dùng list
numbers = [x for x in range(5)]
list(numbers)  # [0, 1, 2, 3, 4]
list(numbers)  # [0, 1, 2, 3, 4] (vẫn OK)

# 3. Cần biết độ dài
# ❌ Generator không có len()
gen = (x for x in range(10))
# length = len(gen)  # TypeError

# ✅ Dùng list
numbers = [x for x in range(10)]
length = len(numbers)  # 10
```

## Tổng kết

- **Iterator**: Object implement `__iter__()` và `__next__()`
- **Generator**: Cách đơn giản tạo iterator bằng `yield`
- **yield**: Tạm dừng hàm, giữ trạng thái, trả về giá trị
- **Generator expression**: `(x for x in iterable)` - giống list comprehension nhưng lazy
- **Lợi ích**:
  - Tiết kiệm bộ nhớ (không load hết vào memory)
  - Lazy evaluation (tính khi cần)
  - Hỗ trợ dữ liệu vô hạn
- **Hạn chế**:
  - Chỉ dùng 1 lần
  - Không hỗ trợ indexing
  - Không có len()
- **Generator methods**: send(), throw(), close()
- **yield from**: Delegate to sub-generator
- **itertools**: Module với nhiều công cụ làm việc với iterators
