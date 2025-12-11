---
description: Các bài tập về Dictionary Comprehension - Cơ bản
icon: book-open
---

# Bài tập Dictionary Comprehension - Cơ bản

1. Viết dictionary comprehension tạo dictionary từ 1 đến 5, với key là số và value là bình phương của số đó.

```python
# Kết quả: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
squares = # Code của bạn ở đây
print(squares)
```

2. Viết dictionary comprehension tạo dictionary từ list tên, với key là tên và value là độ dài của tên.

```python
names = ["Alice", "Bob", "Charlie", "David"]
# Kết quả: {'Alice': 5, 'Bob': 3, 'Charlie': 7, 'David': 5}
name_lengths = # Code của bạn ở đây
print(name_lengths)
```

3. Viết dictionary comprehension chuyển đổi Celsius sang Fahrenheit.

```python
celsius = {"Ha Noi": 30, "Da Nang": 28, "TP HCM": 32}
# Công thức: F = C * 9/5 + 32
fahrenheit = # Code của bạn ở đây
print(fahrenheit)
```

4. Viết dictionary comprehension tạo dictionary từ hai lists (names và ages).

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
# Kết quả: {'Alice': 25, 'Bob': 30, 'Charlie': 35}
students = # Code của bạn ở đây
print(students)
```

5. Viết dictionary comprehension đảo ngược key và value.

```python
original = {"a": 1, "b": 2, "c": 3}
# Kết quả: {1: 'a', 2: 'b', 3: 'c'}
reversed_dict = # Code của bạn ở đây
print(reversed_dict)
```

6. Viết dictionary comprehension tạo dictionary với key là số từ 1-10, value là "even" hoặc "odd".

```python
# Kết quả: {1: 'odd', 2: 'even', 3: 'odd', ...}
number_types = # Code của bạn ở đây
print(number_types)
```

7. Viết dictionary comprehension chỉ lấy học sinh có điểm >= 70.

```python
scores = {"Alice": 85, "Bob": 60, "Charlie": 92, "David": 55}
# Kết quả: {'Alice': 85, 'Charlie': 92}
passed = # Code của bạn ở đây
print(passed)
```

8. Viết dictionary comprehension đếm số lần xuất hiện của mỗi ký tự trong chuỗi.

```python
text = "hello"
# Kết quả: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
char_count = # Code của bạn ở đây
print(char_count)
```

9. Viết dictionary comprehension tạo dictionary từ list, với index làm key.

```python
fruits = ["apple", "banana", "cherry"]
# Kết quả: {0: 'apple', 1: 'banana', 2: 'cherry'}
fruit_dict = # Code của bạn ở đây
print(fruit_dict)
```

10. Viết dictionary comprehension viết hoa tất cả values.

```python
names = {"first": "alice", "last": "smith"}
# Kết quả: {'first': 'ALICE', 'last': 'SMITH'}
upper_names = # Code của bạn ở đây
print(upper_names)
```

11. Viết dictionary comprehension tính lập phương của các số từ 1-5.

```python
# Kết quả: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
cubes = # Code của bạn ở đây
print(cubes)
```

12. Viết dictionary comprehension chỉ lấy các từ dài hơn 5 ký tự.

```python
words = ["apple", "banana", "kiwi", "cherry", "date"]
# Kết quả: {'banana': 6, 'cherry': 6}
long_words = # Code của bạn ở đây
print(long_words)
```

13. Viết dictionary comprehension nhân tất cả giá trị với 2.

```python
prices = {"apple": 10, "banana": 5, "orange": 8}
# Kết quả: {'apple': 20, 'banana': 10, 'orange': 16}
doubled_prices = # Code của bạn ở đây
print(doubled_prices)
```

14. Viết dictionary comprehension tạo bảng cửu chương cho số 5.

```python
# Kết quả: {1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40, 9: 45, 10: 50}
table_5 = # Code của bạn ở đây
print(table_5)
```

15. Viết dictionary comprehension lấy chữ cái đầu của mỗi tên.

```python
names = {"Alice": 25, "Bob": 30, "Charlie": 35}
# Kết quả: {'Alice': 'A', 'Bob': 'B', 'Charlie': 'C'}
initials = # Code của bạn ở đây
print(initials)
```

16. Viết dictionary comprehension chuyển đổi inches sang cm (1 inch = 2.54 cm).

```python
measurements = {"height": 60, "width": 40, "depth": 20}
# Kết quả: {'height': 152.4, 'width': 101.6, 'depth': 50.8}
cm_measurements = # Code của bạn ở đây
print(cm_measurements)
```

17. Viết dictionary comprehension tạo dictionary với key là ký tự, value là mã ASCII.

```python
letters = "ABC"
# Kết quả: {'A': 65, 'B': 66, 'C': 67}
ascii_dict = # Code của bạn ở đây
print(ascii_dict)
```

18. Viết dictionary comprehension chỉ lấy số chẵn và bình phương của chúng.

```python
# Từ 1 đến 10, chỉ lấy số chẵn
# Kết quả: {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
even_squares = # Code của bạn ở đây
print(even_squares)
```

19. Viết dictionary comprehension áp dụng giảm giá 20% cho tất cả sản phẩm.

```python
products = {"Laptop": 1000, "Mouse": 20, "Keyboard": 50}
# Kết quả: {'Laptop': 800.0, 'Mouse': 16.0, 'Keyboard': 40.0}
discounted = # Code của bạn ở đây
print(discounted)
```

20. Viết dictionary comprehension thêm prefix "Mr." vào tên nam và "Ms." vào tên nữ.

```python
people = {"Alice": "female", "Bob": "male", "Charlie": "male", "Diana": "female"}
# Kết quả: {'Alice': 'Ms. Alice', 'Bob': 'Mr. Bob', 'Charlie': 'Mr. Charlie', 'Diana': 'Ms. Diana'}
titled_names = # Code của bạn ở đây
print(titled_names)
```
