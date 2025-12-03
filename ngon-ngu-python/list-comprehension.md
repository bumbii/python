---
icon: sparkles
---

# List comprehension

List Comprehension là một trong những tính năng rất hay của Python. Nó cho phép bạn tạo ra một list mới một cách ngắn gọn, bằng cách duyệt qua một iterable (list, tuple, range, string...) và áp dụng một biểu thức tính toán để chuyển giá trị từ iterable gốc sang giá trị trong list được tạo ra.

## 1. Cú pháp

```python
new_list = [expression for item in iterable]
```

Trong trường hợp có điều kiện thì cú pháp như sau:

```python
new_list = [expression for item in iterable if condition]
```

## 2. Ví dụ cơ bản

Để tạo ra một list chứa các số là bình phương của các số \[1, 2, 3, 4, 5], có thể dùng vòng lặp `for`&#x20;

```python
numbers = [1, 2, 3, 4, 5]
squares = []
for x in numbers:
    squares.append(x * x)
print(squares) # [1, 4, 9, 16, 25]
```

Với List comprehension, code sẽ ngắn gọn hơn:

<pre class="language-python"><code class="lang-python">numbers = [1, 2, 3, 4, 5]
<strong>squares = [x ** 2 for x in numbers]
</strong>print(squares) # [1, 4, 9, 16, 25]
</code></pre>

Ví dụ: Cho list **`friends`** chứa tên của một số người bạn, tạo 1 list chứa tên in hoa của list **`friends`**:

```python
friends = ["Anna", "Bob", "Chad", "David", "Emily"]
uppercase_friends = [friend.upper() for friend in friends]
print(uppercase_friends)
# ['ANNA', 'BOB', 'CHAD', 'DAVID', 'EMILY']
```

## 3. Ví dụ với điều kiện if

Cho 1 list chứa các số, tạo list chỉ chứa số dương, chỉ chứa số âm, chỉ chứa số chẵn, chỉ chứa số lẻ

```python
numbers = [-10, -7, -4, -2, -1, 0, 3, 6, 7, 8]
positive_numbers = [i for i in numbers if i > 0]
print(positive_numbers) # [3, 6, 7, 8]

negative_numbers = [i for i in numbers if i < 0]
print(negative_numbers) # [-10, -7, -4, -2, -1]

even_numbers = [i for i in numbers if i % 2 == 0]
print(even_numbers) # [-10, -4, -2, 0, 6, 8]

odd_numbers = [i for i in numbers if i % 2 == 1]
print(odd_numbers) # [-7, -2, 3, 7]
```

## 4. Ví dụ với if ... else

Cho dãy số từ 0 đến 4 (tạo bởi hàm `range(5)` , tạo một list mới tương ứng với dãy số, thay các chữ số bằng "even" nếu là số chẵn, "odd" nếu là số lẻ

```python
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)
# ['even', 'odd', 'even', 'odd', 'even']
```
