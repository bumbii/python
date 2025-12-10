# Vòng lặp lồng nhau và Control Flow

Vòng lặp lồng nhau (nested loops) là khi một vòng lặp nằm bên trong vòng lặp khác. Đây là kỹ thuật quan trọng khi làm việc với dữ liệu đa chiều như ma trận, bảng, hoặc các cấu trúc phức tạp.

## 1. Vòng lặp lồng nhau cơ bản

### For loop lồng nhau

```python
# Vòng lặp 2 cấp đơn giản
for i in range(3):
    for j in range(3):
        print(f"i={i}, j={j}")

# Kết quả:
# i=0, j=0
# i=0, j=1
# i=0, j=2
# i=1, j=0
# i=1, j=1
# i=1, j=2
# i=2, j=0
# i=2, j=1
# i=2, j=2
```

### While loop lồng nhau

```python
# While lồng nhau
i = 0
while i < 3:
    j = 0
    while j < 3:
        print(f"i={i}, j={j}")
        j += 1
    i += 1

# Kết quả tương tự như for loop trên
```

### Kết hợp for và while

```python
# For bên ngoài, while bên trong
for i in range(3):
    j = 0
    while j < 3:
        print(f"({i}, {j})", end=" ")
        j += 1
    print()  # Xuống dòng

# Kết quả:
# (0, 0) (0, 1) (0, 2)
# (1, 0) (1, 1) (1, 2)
# (2, 0) (2, 1) (2, 2)
```

## 2. In hình và pattern

### In hình chữ nhật

```python
# In hình chữ nhật 4x6
rows = 4
cols = 6

for i in range(rows):
    for j in range(cols):
        print("*", end=" ")
    print()  # Xuống dòng sau mỗi hàng

# Kết quả:
# * * * * * *
# * * * * * *
# * * * * * *
# * * * * * *
```

### In tam giác vuông

```python
# Tam giác vuông tăng dần
n = 5

for i in range(1, n + 1):
    for j in range(i):
        print("*", end=" ")
    print()

# Kết quả:
# *
# * *
# * * *
# * * * *
# * * * * *

# Tam giác vuông giảm dần
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()

# Kết quả:
# * * * * *
# * * * *
# * * *
# * *
# *
```

### In tam giác cân

```python
n = 5

# Tam giác cân
for i in range(1, n + 1):
    # In khoảng trắng
    for j in range(n - i):
        print(" ", end=" ")
    # In dấu sao
    for j in range(2 * i - 1):
        print("*", end=" ")
    print()

# Kết quả:
#         *
#       * * *
#     * * * * *
#   * * * * * * *
# * * * * * * * * *
```

### In hình thoi

```python
n = 5

# Nửa trên (bao gồm giữa)
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end=" ")
    for j in range(2 * i - 1):
        print("*", end=" ")
    print()

# Nửa dưới
for i in range(n - 1, 0, -1):
    for j in range(n - i):
        print(" ", end=" ")
    for j in range(2 * i - 1):
        print("*", end=" ")
    print()

# Kết quả:
#         *
#       * * *
#     * * * * *
#   * * * * * * *
# * * * * * * * * *
#   * * * * * * *
#     * * * * *
#       * * *
#         *
```

### In bảng số

```python
# Bảng nhân
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i * j:3}", end=" ")
    print()

# Kết quả:
#   1   2   3   4   5
#   2   4   6   8  10
#   3   6   9  12  15
#   4   8  12  16  20
#   5  10  15  20  25
```

## 3. Làm việc với List 2D (Ma trận)

### Tạo ma trận

```python
# Tạo ma trận 3x4 với giá trị 0
rows = 3
cols = 4

matrix = []
for i in range(rows):
    row = []
    for j in range(cols):
        row.append(0)
    matrix.append(row)

print(matrix)
# [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

# Cách ngắn gọn với list comprehension
matrix = [[0 for j in range(cols)] for i in range(rows)]
print(matrix)
```

### Duyệt ma trận

```python
# Ma trận ví dụ
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Duyệt qua từng phần tử
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        print(f"matrix[{i}][{j}] = {matrix[i][j]}")

# Kết quả:
# matrix[0][0] = 1
# matrix[0][1] = 2
# ...
# matrix[2][2] = 9

# Cách khác với enumerate
for i, row in enumerate(matrix):
    for j, value in enumerate(row):
        print(f"matrix[{i}][{j}] = {value}")
```

### In ma trận đẹp

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

# In ma trận
for row in matrix:
    for value in row:
        print(f"{value:3}", end=" ")
    print()

# Kết quả:
#   1   2   3   4
#   5   6   7   8
#   9  10  11  12
```

### Tính tổng các phần tử

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Tổng tất cả phần tử
total = 0
for row in matrix:
    for value in row:
        total += value

print(f"Tổng: {total}")  # Tổng: 45

# Tổng từng hàng
for i, row in enumerate(matrix):
    row_sum = sum(row)
    print(f"Tổng hàng {i}: {row_sum}")

# Tổng từng cột
cols = len(matrix[0])
for j in range(cols):
    col_sum = 0
    for i in range(len(matrix)):
        col_sum += matrix[i][j]
    print(f"Tổng cột {j}: {col_sum}")
```

## 4. Break trong vòng lặp lồng nhau

### Break chỉ thoát vòng lặp trong cùng

```python
# Break chỉ thoát vòng lặp j
for i in range(3):
    print(f"Vòng lặp i = {i}")
    for j in range(5):
        if j == 2:
            print(f"  Break tại j = {j}")
            break
        print(f"  j = {j}")

# Kết quả:
# Vòng lặp i = 0
#   j = 0
#   j = 1
#   Break tại j = 2
# Vòng lặp i = 1
#   j = 0
#   j = 1
#   Break tại j = 2
# Vòng lặp i = 2
#   j = 0
#   j = 1
#   Break tại j = 2
```

### Thoát cả hai vòng lặp với flag

```python
# Sử dụng biến cờ (flag)
found = False

for i in range(5):
    for j in range(5):
        if i * j == 12:
            print(f"Tìm thấy tại i={i}, j={j}")
            found = True
            break
    if found:
        break

# Kết quả: Tìm thấy tại i=3, j=4
```

### Thoát với else clause

```python
# else của for chỉ chạy khi KHÔNG có break
for i in range(3):
    for j in range(3):
        if i == 1 and j == 1:
            print(f"Break tại i={i}, j={j}")
            break
    else:
        continue  # Tiếp tục vòng lặp i
    break  # Chỉ chạy khi có break ở vòng j

print("Đã thoát vòng lặp")
```

### Sử dụng function để thoát

```python
# Dùng return để thoát cả hai vòng lặp
def find_pair_sum(matrix, target):
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == target:
                return (i, j)  # Thoát ngay lập tức
    return None  # Không tìm thấy

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
result = find_pair_sum(matrix, 5)
print(result)  # (1, 1)
```

## 5. Continue trong vòng lặp lồng nhau

### Continue chỉ bỏ qua lần lặp hiện tại

```python
# Continue bỏ qua phần còn lại của vòng lặp trong cùng
for i in range(3):
    for j in range(5):
        if j == 2:
            continue  # Bỏ qua j=2, tiếp tục j=3
        print(f"i={i}, j={j}", end="  ")
    print()

# Kết quả:
# i=0, j=0  i=0, j=1  i=0, j=3  i=0, j=4
# i=1, j=0  i=1, j=1  i=1, j=3  i=1, j=4
# i=2, j=0  i=2, j=1  i=2, j=3  i=2, j=4
```

### Bỏ qua đường chéo của ma trận

```python
# In ma trận nhưng bỏ qua đường chéo chính
n = 5

for i in range(n):
    for j in range(n):
        if i == j:
            print(".", end=" ")
            continue
        print("*", end=" ")
    print()

# Kết quả:
# . * * * *
# * . * * *
# * * . * *
# * * * . *
# * * * * .
```

## 6. Ví dụ thực tế

### Tìm kiếm trong list 2D

```python
# Tìm vị trí của một giá trị trong ma trận
def find_value(matrix, target):
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == target:
                return (i, j)
    return None

data = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

position = find_value(data, 50)
if position:
    print(f"Tìm thấy tại vị trí {position}")  # Tìm thấy tại vị trí (1, 1)
else:
    print("Không tìm thấy")
```

### Chuyển vị ma trận (Transpose)

```python
# Ma trận gốc
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

# Tạo ma trận chuyển vị
rows = len(matrix)
cols = len(matrix[0])

transpose = []
for j in range(cols):
    new_row = []
    for i in range(rows):
        new_row.append(matrix[i][j])
    transpose.append(new_row)

print("Ma trận gốc:")
for row in matrix:
    print(row)

print("\nMa trận chuyển vị:")
for row in transpose:
    print(row)

# Kết quả:
# Ma trận gốc:
# [1, 2, 3]
# [4, 5, 6]
#
# Ma trận chuyển vị:
# [1, 4]
# [2, 5]
# [3, 6]
```

### Nhân hai ma trận

```python
# Nhân ma trận A (2x3) với B (3x2)
A = [
    [1, 2, 3],
    [4, 5, 6]
]

B = [
    [7, 8],
    [9, 10],
    [11, 12]
]

# Kích thước kết quả: (rows của A) x (cols của B)
rows_A = len(A)
cols_A = len(A[0])
cols_B = len(B[0])

# Tạo ma trận kết quả
result = [[0 for j in range(cols_B)] for i in range(rows_A)]

# Nhân ma trận
for i in range(rows_A):
    for j in range(cols_B):
        for k in range(cols_A):
            result[i][j] += A[i][k] * B[k][j]

print("Kết quả A × B:")
for row in result:
    print(row)

# Kết quả:
# [58, 64]
# [139, 154]
```

### Bàn cờ vua

```python
# Tạo bàn cờ vua 8x8
def create_chess_board():
    for i in range(8):
        for j in range(8):
            if (i + j) % 2 == 0:
                print("⬜", end=" ")
            else:
                print("⬛", end=" ")
        print()

create_chess_board()

# Kết quả: Bàn cờ đen trắng xen kẽ
```

### Sudoku validator

```python
# Kiểm tra hàng Sudoku có hợp lệ không
def is_valid_row(board, row):
    seen = set()
    for j in range(9):
        value = board[row][j]
        if value != 0:
            if value in seen:
                return False
            seen.add(value)
    return True

# Kiểm tra cột Sudoku có hợp lệ không
def is_valid_col(board, col):
    seen = set()
    for i in range(9):
        value = board[i][col]
        if value != 0:
            if value in seen:
                return False
            seen.add(value)
    return True

# Kiểm tra toàn bộ Sudoku
def is_valid_sudoku(board):
    # Kiểm tra tất cả hàng
    for i in range(9):
        if not is_valid_row(board, i):
            return False

    # Kiểm tra tất cả cột
    for j in range(9):
        if not is_valid_col(board, j):
            return False

    return True

# Test
sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

print(is_valid_sudoku(sudoku))  # True
```

### Tạo bảng lịch

```python
# Tạo lịch tháng
def print_calendar(days, start_day):
    """
    days: số ngày trong tháng
    start_day: ngày bắt đầu (0=Chủ nhật, 1=Thứ 2, ...)
    """
    print("CN  T2  T3  T4  T5  T6  T7")
    print("-" * 28)

    # In khoảng trống cho các ngày trước ngày đầu tháng
    for i in range(start_day):
        print("    ", end="")

    # In các ngày trong tháng
    for day in range(1, days + 1):
        print(f"{day:2}  ", end="")
        # Xuống dòng sau thứ 7
        if (day + start_day) % 7 == 0:
            print()

    print()  # Xuống dòng cuối

# Tháng 12/2024: 31 ngày, bắt đầu từ CN (0)
print("Tháng 12/2024")
print_calendar(31, 0)
```

## 7. Best Practices

### ✅ NÊN làm

```python
# 1. Sử dụng enumerate khi cần index
matrix = [[1, 2], [3, 4]]

for i, row in enumerate(matrix):
    for j, value in enumerate(row):
        print(f"[{i}][{j}] = {value}")

# 2. Sử dụng list comprehension cho ma trận đơn giản
matrix = [[i * j for j in range(5)] for i in range(5)]

# 3. Tách logic phức tạp thành functions
def process_matrix(matrix):
    for row in matrix:
        for value in row:
            # Process value
            pass

# 4. Đặt tên biến rõ ràng
for row_index in range(len(matrix)):
    for col_index in range(len(matrix[row_index])):
        value = matrix[row_index][col_index]
```

### ❌ KHÔNG NÊN làm

```python
# 1. Tránh lồng quá nhiều cấp (> 3 cấp)
# ❌ KHÔNG TỐT
for i in range(n):
    for j in range(n):
        for k in range(n):
            for l in range(n):  # Quá nhiều!
                # ...

# 2. Tránh logic phức tạp trong vòng lặp
# ❌ KHÔNG TỐT
for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        if complex_condition_1 and complex_condition_2:
            if another_condition:
                # Quá phức tạp!

# ✅ TỐT HƠN - Tách thành function
def should_process(i, j, value):
    return complex_condition_1 and complex_condition_2 and another_condition

for i, row in enumerate(matrix):
    for j, value in enumerate(row):
        if should_process(i, j, value):
            # Process
```

## Tổng kết

- **Nested loops**: Vòng lặp bên trong vòng lặp khác
- **Break**: Thoát khỏi vòng lặp trong cùng
- **Continue**: Bỏ qua phần còn lại, chuyển sang lần lặp tiếp theo
- **Ứng dụng**:
  - In hình và patterns
  - Ma trận 2D
  - Bảng và lịch
  - Tìm kiếm trong dữ liệu đa chiều
- **Best practices**:
  - Giới hạn độ sâu lồng nhau (tối đa 2-3 cấp)
  - Sử dụng enumerate khi cần index
  - Tách logic phức tạp thành functions
  - Đặt tên biến rõ ràng
  - Cân nhắc list comprehension cho code ngắn gọn hơn
