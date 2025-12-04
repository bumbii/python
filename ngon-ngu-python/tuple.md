---
icon: layer-group
---

# Tuple

## 1. Tuple là gì?

**Tuple** là một cấu trúc dữ liệu cho phép chứa nhiều giá trị **theo thứ tự**, giống như List. Tuy nhiên, có một điểm khác biệt quan trọng: Tuple **không thể thay đổi (immutable)** sau khi đã tạo.

Hãy tưởng tượng Tuple như một hộp đã được niêm phong - bạn có thể xem những gì bên trong nhưng không thể thay đổi hay thêm bớt.

**Đặc điểm của Tuple:**
- **Có thứ tự**: Các phần tử được sắp xếp theo thứ tự
- **Không thể thay đổi (immutable)**: Không thể thêm, xoá, hoặc sửa phần tử
- **Có thể chứa nhiều kiểu dữ liệu**: Số, chuỗi, boolean, v.v.
- **Cho phép trùng lặp**: Có thể có nhiều phần tử giống nhau

Ví dụ tuple hợp lệ:

```python
numbers = (1, 2, 3, 4, 5)
coordinates = (10.5, 20.3)
mixed = (1, "hello", True, 3.14)
fruits = ("apple", "banana", "orange")
```

## 2. Sự khác biệt giữa Tuple và List

| Đặc điểm | List | Tuple |
| --- | --- | --- |
| Ký hiệu | Ngoặc vuông `[]` | Ngoặc tròn `()` |
| Có thể thay đổi | Có (mutable) | Không (immutable) |
| Tốc độ | Chậm hơn | Nhanh hơn |
| Sử dụng bộ nhớ | Nhiều hơn | Ít hơn |
| Dùng khi nào | Dữ liệu cần thay đổi | Dữ liệu cố định |

**Ví dụ:**

```python
# List - Có thể thay đổi
my_list = [1, 2, 3]
my_list[0] = 10  # OK
my_list.append(4)  # OK

# Tuple - Không thể thay đổi
my_tuple = (1, 2, 3)
# my_tuple[0] = 10  # LỖI! Không thể thay đổi
# my_tuple.append(4)  # LỖI! Không có phương thức append
```

## 3. Cách tạo Tuple

### Tạo tuple bằng cặp ngoặc tròn ()

```python
fruits = ("apple", "banana", "orange")
numbers = (1, 2, 3, 4, 5)
coordinates = (10.5, 20.3, 15.7)
```

### Tạo tuple không cần ngoặc tròn

```python
fruits = "apple", "banana", "orange"  # Vẫn là tuple!
numbers = 1, 2, 3, 4, 5
```

### Tạo tuple có 1 phần tử

```python
# Phải có dấu phẩy sau phần tử duy nhất
single = (5,)  # Đây là tuple
print(type(single))  # <class 'tuple'>

# Không có dấu phẩy thì KHÔNG phải tuple
not_tuple = (5)  # Đây chỉ là số 5
print(type(not_tuple))  # <class 'int'>
```

### Tạo tuple rỗng

```python
empty_tuple = ()
another_empty = tuple()
```

### Tạo tuple từ list

```python
my_list = [1, 2, 3, 4]
my_tuple = tuple(my_list)
print(my_tuple)  # (1, 2, 3, 4)
```

### Tạo tuple từ chuỗi

```python
text = "Python"
char_tuple = tuple(text)
print(char_tuple)  # ('P', 'y', 't', 'h', 'o', 'n')
```

## 4. Các thao tác cơ bản với Tuple

### Lấy độ dài của tuple

```python
fruits = ("apple", "banana", "orange", "mango")
print(len(fruits))  # 4
```

### Truy cập phần tử theo index

```python
fruits = ("apple", "banana", "orange", "mango")

print(fruits[0])  # "apple"
print(fruits[1])  # "banana"
print(fruits[-1])  # "mango" (phần tử cuối)
print(fruits[-2])  # "orange" (phần tử áp cuối)
```

### Slicing (cắt tuple)

```python
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

print(numbers[2:5])  # (2, 3, 4)
print(numbers[:4])   # (0, 1, 2, 3)
print(numbers[5:])   # (5, 6, 7, 8, 9)
print(numbers[::2])  # (0, 2, 4, 6, 8) - bước nhảy 2
print(numbers[::-1]) # (9, 8, 7, 6, 5, 4, 3, 2, 1, 0) - đảo ngược
```

### Kiểm tra phần tử có trong tuple không

```python
fruits = ("apple", "banana", "orange")

if "apple" in fruits:
    print("Có táo!")

if "mango" not in fruits:
    print("Không có xoài")
```

### Nối tuple

```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
result = tuple1 + tuple2
print(result)  # (1, 2, 3, 4, 5, 6)
```

### Lặp tuple

```python
colors = ("red", "blue", "green")
repeated = colors * 3
print(repeated)
# ("red", "blue", "green", "red", "blue", "green", "red", "blue", "green")
```

## 5. Các phương thức của Tuple

Tuple chỉ có **2 phương thức** vì nó không thể thay đổi:

| Phương thức | Chức năng | Ví dụ |
| --- | --- | --- |
| `count(x)` | Đếm số lần xuất hiện của x | `my_tuple.count(5)` |
| `index(x)` | Tìm vị trí đầu tiên của x | `my_tuple.index(5)` |

### 5.1 - count(x): Đếm số lần xuất hiện

```python
numbers = (1, 2, 3, 2, 4, 2, 5, 2)
count = numbers.count(2)
print(count)  # 4 (số 2 xuất hiện 4 lần)
```

### 5.2 - index(x): Tìm vị trí của phần tử

```python
fruits = ("apple", "banana", "orange", "mango")
position = fruits.index("orange")
print(position)  # 2
```

Nếu phần tử không tồn tại sẽ báo lỗi:

```python
fruits = ("apple", "banana", "orange")
# position = fruits.index("grape")  # LỖI! ValueError
```

## 6. Duyệt Tuple bằng vòng lặp

### Duyệt qua từng phần tử

```python
fruits = ("apple", "banana", "orange")

for fruit in fruits:
    print(fruit)
# apple
# banana
# orange
```

### Duyệt theo index

```python
fruits = ("apple", "banana", "orange")

for i in range(len(fruits)):
    print(f"Index {i}: {fruits[i]}")
# Index 0: apple
# Index 1: banana
# Index 2: orange
```

### Duyệt với enumerate

```python
fruits = ("apple", "banana", "orange")

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# 0: apple
# 1: banana
# 2: orange
```

## 7. Unpacking Tuple

**Unpacking** là cách "mở gói" tuple để gán các giá trị cho nhiều biến.

### Unpacking cơ bản

```python
coordinates = (10, 20)
x, y = coordinates

print(x)  # 10
print(y)  # 20
```

### Unpacking với nhiều giá trị

```python
student = ("Minh Anh", 11, "5A")
name, age, class_name = student

print(name)  # "Minh Anh"
print(age)   # 11
print(class_name)  # "5A"
```

### Unpacking với dấu *

```python
numbers = (1, 2, 3, 4, 5, 6)
first, *middle, last = numbers

print(first)   # 1
print(middle)  # [2, 3, 4, 5]
print(last)    # 6
```

### Hoán đổi giá trị bằng Tuple

```python
a = 5
b = 10

# Hoán đổi không cần biến tạm
a, b = b, a

print(a)  # 10
print(b)  # 5
```

## 8. Khi nào nên dùng Tuple?

**Nên dùng Tuple khi:**

1. **Dữ liệu không cần thay đổi**: Như toạ độ, ngày tháng, thông tin cố định
   ```python
   birthday = (25, 12, 2015)  # Ngày sinh không đổi
   ```

2. **Muốn bảo vệ dữ liệu**: Không cho phép thay đổi vô tình
   ```python
   DAYS_IN_WEEK = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
   ```

3. **Làm key cho dictionary**: List không thể làm key, nhưng tuple có thể
   ```python
   locations = {
       (0, 0): "Start",
       (10, 5): "Checkpoint",
       (20, 10): "End"
   }
   ```

4. **Return nhiều giá trị từ hàm**:
   ```python
   def get_student_info():
       return "Tuệ Nghi", 11, "5A"

   name, age, class_name = get_student_info()
   ```

5. **Tiết kiệm bộ nhớ và nhanh hơn**: Tuple tốn ít bộ nhớ hơn List

**Nên dùng List khi:** Dữ liệu cần thêm, xoá, sửa thường xuyên

## 9. Tuple lồng nhau

Tuple có thể chứa tuple khác bên trong:

```python
students = (
    ("Minh Sang", 10, "5A"),
    ("Phước Sâm", 11, "5B"),
    ("Bảo Nguyên", 10, "5A")
)

# Truy cập
print(students[0])  # ("Minh Sang", 10, "5A")
print(students[0][0])  # "Minh Sang"
print(students[1][2])  # "5B"
```

## 10. Chuyển đổi giữa Tuple và List

### Tuple sang List

```python
my_tuple = (1, 2, 3, 4)
my_list = list(my_tuple)
print(my_list)  # [1, 2, 3, 4]

# Bây giờ có thể thay đổi
my_list.append(5)
print(my_list)  # [1, 2, 3, 4, 5]
```

### List sang Tuple

```python
my_list = [1, 2, 3, 4]
my_tuple = tuple(my_list)
print(my_tuple)  # (1, 2, 3, 4)
```

### "Thay đổi" Tuple bằng cách chuyển đổi

```python
# Tuple ban đầu
fruits = ("apple", "banana")

# Chuyển sang list, thay đổi, rồi chuyển lại tuple
temp_list = list(fruits)
temp_list.append("orange")
fruits = tuple(temp_list)

print(fruits)  # ("apple", "banana", "orange")
```

## Bài giảng trên YouTube

Cập nhật sau
