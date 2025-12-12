# List nhân với số - [[]] * 3 có gì lạ?

## Hiện tượng lạ

Bạn muốn tạo một lưới (grid) 3x3 để chơi tic-tac-toe:

```python
# Tạo 3 hàng, mỗi hàng có 3 ô
board = [[0, 0, 0]] * 3
print(board)
# [[0, 0, 0], [0, 0, 0], [0, 0, 0]]  <- Trông có vẻ đúng!

# Đánh dấu ô (0, 0) là X
board[0][0] = "X"
print(board)
# [['X', 0, 0], ['X', 0, 0], ['X', 0, 0]]  <- What the Python?!
```

**Tại sao thay đổi 1 ô lại ảnh hưởng đến cả 3 hàng?!** 😱

## Giải thích

### List multiplication tạo references, không phải copies!

Khi bạn dùng `[[0, 0, 0]] * 3`, Python không tạo 3 list riêng biệt. Thay vào đó, nó tạo 3 **references** (tham chiếu) đến **cùng 1 list**!

```python
# Tạo list
inner = [0, 0, 0]
board = [inner] * 3

# Cả 3 phần tử đều trỏ đến cùng 1 object
print(board[0] is board[1])  # True
print(board[1] is board[2])  # True
print(board[0] is board[2])  # True

# ID (địa chỉ bộ nhớ) giống nhau
print(id(board[0]))  # Ví dụ: 140234567890
print(id(board[1]))  # 140234567890 - GIỐNG NHAU!
print(id(board[2]))  # 140234567890 - GIỐNG NHAU!
```

### Minh họa bằng hình

```
# Bạn nghĩ sẽ là:
board[0] → [0, 0, 0]  (list riêng)
board[1] → [0, 0, 0]  (list riêng)
board[2] → [0, 0, 0]  (list riêng)

# Thực tế là:
board[0] ┐
board[1] ├→ [0, 0, 0]  (cùng 1 list!)
board[2] ┘
```

## So sánh các trường hợp

### 1. Với immutable objects (int, str, tuple) - OK

```python
# Nhân với int - Không sao
numbers = [0] * 5
print(numbers)  # [0, 0, 0, 0, 0]

numbers[0] = 1
print(numbers)  # [1, 0, 0, 0, 0] - Chỉ thay đổi 1 phần tử ✅

# Tại sao OK?
# Vì int là immutable, không thể thay đổi được
# Khi gán numbers[0] = 1, Python tạo reference mới, không sửa object cũ
```

```python
# Nhân với string - Không sao
words = ["hello"] * 3
print(words)  # ['hello', 'hello', 'hello']

words[0] = "world"
print(words)  # ['world', 'hello', 'hello'] ✅

# String cũng immutable nên OK
```

### 2. Với mutable objects (list, dict) - NGUY HIỂM!

```python
# Nhân với list - NGUY HIỂM!
matrix = [[0] * 3] * 3  # [[0,0,0]] * 3
matrix[0][0] = 1
print(matrix)
# [[1, 0, 0], [1, 0, 0], [1, 0, 0]]  ❌ Tất cả đều thay đổi!

# Nhân với dict - NGUY HIỂM!
users = [{}] * 3
users[0]["name"] = "Alice"
print(users)
# [{'name': 'Alice'}, {'name': 'Alice'}, {'name': 'Alice'}]  ❌
```

## Cách tạo list 2D đúng

### ❌ SAI - Dùng multiplication

```python
# SAI
board = [[0] * 3] * 3
```

### ✅ ĐÚNG - Dùng list comprehension

```python
# ĐÚNG - Mỗi hàng là list riêng biệt
board = [[0] * 3 for _ in range(3)]

# Hoặc
board = [[0 for _ in range(3)] for _ in range(3)]

# Test
board[0][0] = "X"
print(board)
# [['X', 0, 0], [0, 0, 0], [0, 0, 0]]  ✅ Chỉ thay đổi 1 ô!

# Kiểm tra - các hàng là list riêng biệt
print(board[0] is board[1])  # False ✅
```

### ✅ ĐÚNG - Dùng loop

```python
# Tạo từng hàng riêng biệt
board = []
for i in range(3):
    row = [0] * 3  # Tạo list mới mỗi lần
    board.append(row)
```

### ✅ ĐÚNG - Dùng copy.deepcopy

```python
import copy

# Tạo template
row = [0, 0, 0]
board = [copy.deepcopy(row) for _ in range(3)]
```

## Ví dụ thực tế - Bugs phổ biến

### Bug 1: Tic-Tac-Toe board

```python
# SAI
class TicTacToe:
    def __init__(self):
        self.board = [[" "] * 3] * 3  # BUG!

    def mark(self, row, col, player):
        self.board[row][col] = player

game = TicTacToe()
game.mark(0, 0, "X")
print(game.board)
# [['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' ']]  ❌

# ĐÚNG
class TicTacToe:
    def __init__(self):
        self.board = [[" " for _ in range(3)] for _ in range(3)]
```

### Bug 2: Tracking student scores

```python
# SAI - Tạo danh sách điểm cho 5 học sinh
scores = [[]] * 5

# Thêm điểm cho học sinh đầu tiên
scores[0].append(95)
scores[0].append(87)

print(scores)
# [[95, 87], [95, 87], [95, 87], [95, 87], [95, 87]]  ❌
# Tất cả học sinh có cùng điểm!

# ĐÚNG
scores = [[] for _ in range(5)]
scores[0].append(95)
scores[0].append(87)
print(scores)
# [[95, 87], [], [], [], []]  ✅
```

### Bug 3: Shopping carts

```python
# SAI
carts = [{"items": []}] * 3

# Khách hàng 0 thêm sản phẩm
carts[0]["items"].append("Apple")

print(carts)
# [{'items': ['Apple']}, {'items': ['Apple']}, {'items': ['Apple']}]  ❌
# Tất cả giỏ hàng đều có Apple!

# ĐÚNG
carts = [{"items": []} for _ in range(3)]
# Hoặc tốt hơn:
carts = [{"items": [].copy()} for _ in range(3)]
```

## Cách debug và phát hiện

### 1. Kiểm tra identity với `is`

```python
# Kiểm tra xem các phần tử có phải cùng 1 object không
lst = [[]] * 3

if lst[0] is lst[1]:
    print("WARNING: Cùng reference!")  # Sẽ in ra
```

### 2. Kiểm tra `id()`

```python
lst = [[]] * 3

print(f"ID of lst[0]: {id(lst[0])}")
print(f"ID of lst[1]: {id(lst[1])}")
print(f"ID of lst[2]: {id(lst[2])}")

# Nếu giống nhau → Cùng object!
```

### 3. Test thay đổi

```python
# Test bằng cách thay đổi 1 phần tử
lst = [[0]] * 3
lst[0].append(1)

if len(lst[1]) > 1:  # Nếu lst[1] cũng thay đổi
    print("BUG: Shared reference!")
```

## Khi nào multiplication an toàn?

### ✅ An toàn với immutable types

```python
# Int, float, str, tuple, frozenset, None - OK!
zeros = [0] * 10           # ✅ OK
spaces = [" "] * 5         # ✅ OK
nones = [None] * 3         # ✅ OK
tuples = [(1, 2)] * 4      # ✅ OK (tuple immutable)
```

### ❌ Nguy hiểm với mutable types

```python
# List, dict, set, custom objects - NGUY HIỂM!
lists = [[]] * 3           # ❌ NGUY HIỂM
dicts = [{}] * 3           # ❌ NGUY HIỂM
sets = [set()] * 3         # ❌ NGUY HIỂM

class User:
    pass

users = [User()] * 3       # ❌ NGUY HIỂM - Cùng 1 user!
```

## Best Practices

### 1. Luôn dùng list comprehension cho nested lists

```python
# ✅ LUÔN làm thế này
matrix = [[0 for _ in range(cols)] for _ in range(rows)]

# ❌ KHÔNG làm thế này
matrix = [[0] * cols] * rows
```

### 2. Kiểm tra identity khi debug

```python
# Khi debug nested structures
if any(lst[i] is lst[i+1] for i in range(len(lst)-1)):
    print("WARNING: Shared references detected!")
```

### 3. Sử dụng factory functions

```python
# Tốt cho structures phức tạp
def create_row():
    return [0, 0, 0]

board = [create_row() for _ in range(3)]
# Mỗi lần gọi create_row() tạo list mới
```

## Tóm tắt

| Code | An toàn? | Lý do |
|------|----------|-------|
| `[0] * 5` | ✅ | int là immutable |
| `["hi"] * 3` | ✅ | string là immutable |
| `[None] * 4` | ✅ | None là immutable |
| `[(1,2)] * 3` | ✅ | tuple là immutable |
| `[[]] * 3` | ❌ | list là mutable - shared reference! |
| `[{}] * 3` | ❌ | dict là mutable - shared reference! |
| `[set()] * 3` | ❌ | set là mutable - shared reference! |

## Ghi nhớ

> **List multiplication (`* n`) tạo n references đến cùng 1 object!**
> - ✅ An toàn với immutable objects (int, str, tuple)
> - ❌ Nguy hiểm với mutable objects (list, dict, set)
> - ✅ Luôn dùng **list comprehension** cho nested lists!

```python
# Ghi nhớ công thức này:
nested_list = [[initial_value for _ in range(cols)] for _ in range(rows)]
```
