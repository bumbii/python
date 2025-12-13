---
icon: circle-nodes
---

# Tập hợp (Set)

## 1. Set là gì?

**Set** là một cấu trúc dữ liệu cho phép lưu trữ các phần tử **không trùng lặp** và **không có thứ tự**. Set rất hữu ích khi bạn cần loại bỏ các phần tử trùng lặp hoặc thực hiện các phép toán tập hợp.

**Đặc điểm của Set:**
- **Không có thứ tự**: Các phần tử không được sắp xếp theo thứ tự cụ thể
- **Không trùng lặp**: Mỗi phần tử chỉ xuất hiện một lần
- **Có thể thay đổi (mutable)**: Có thể thêm, xoá phần tử
- **Phần tử phải là immutable**: Chỉ chứa các kiểu dữ liệu không thay đổi (số, chuỗi, tuple)
- **Không có index**: Không thể truy cập bằng index như List

Ví dụ set hợp lệ:

```python
numbers = {1, 2, 3, 4, 5}
fruits = {"apple", "banana", "orange"}
mixed = {1, "hello", 3.14, True}
```

## 2. Sự khác biệt giữa Set, List và Dictionary

| Đặc điểm | List | Tuple | Set | Dictionary |
| --- | --- | --- | --- | --- |
| Ký hiệu | `[]` | `()` | `{}` | `{"key": "value"}` |
| Có thứ tự | Có | Có | Không | Không (3.7+ có) |
| Trùng lặp | Có | Có | Không | Key không trùng |
| Thay đổi | Có | Không | Có | Có |
| Truy cập | Index | Index | Không | Key |

## 3. Cách tạo Set

### Tạo set bằng cặp ngoặc nhọn {}

```python
fruits = {"apple", "banana", "orange"}
numbers = {1, 2, 3, 4, 5}
```

### Tạo set bằng hàm set()

```python
# Từ list
my_list = [1, 2, 3, 2, 1]
my_set = set(my_list)
print(my_set)  # {1, 2, 3} - tự động loại bỏ trùng lặp

# Từ chuỗi
text = "hello"
char_set = set(text)
print(char_set)  # {'h', 'e', 'l', 'o'} - chỉ có 1 chữ 'l'

# Từ tuple
my_tuple = (1, 2, 3, 2, 1)
my_set = set(my_tuple)
print(my_set)  # {1, 2, 3}
```

### Tạo set rỗng

```python
# Chú ý: KHÔNG dùng {} vì đó sẽ là dictionary rỗng!
empty_set = set()  # Đúng
# wrong_set = {}  # SAI! Đây là dictionary rỗng
```

### Set tự động loại bỏ phần tử trùng lặp

```python
numbers = {1, 2, 3, 2, 1, 4, 3, 5}
print(numbers)  # {1, 2, 3, 4, 5}
```

## 4. Các thao tác cơ bản với Set

### Lấy số lượng phần tử

```python
fruits = {"apple", "banana", "orange"}
print(len(fruits))  # 3
```

### Kiểm tra phần tử có trong set không

```python
fruits = {"apple", "banana", "orange"}

if "apple" in fruits:
    print("Có táo!")

if "mango" not in fruits:
    print("Không có xoài")
```

### Thêm phần tử

```python
fruits = {"apple", "banana"}

# Thêm 1 phần tử
fruits.add("orange")
print(fruits)  # {"apple", "banana", "orange"}

# Thêm nhiều phần tử cùng lúc
fruits.update(["mango", "grape"])
print(fruits)  # {"apple", "banana", "orange", "mango", "grape"}
```

### Xoá phần tử

```python
fruits = {"apple", "banana", "orange", "mango"}

# remove() - lỗi nếu phần tử không tồn tại
fruits.remove("banana")
print(fruits)  # {"apple", "orange", "mango"}

# discard() - không lỗi nếu phần tử không tồn tại
fruits.discard("grape")  # Không có "grape" nhưng không lỗi

# pop() - xoá và trả về một phần tử ngẫu nhiên
item = fruits.pop()
print(f"Đã xoá: {item}")

# clear() - xoá toàn bộ set
fruits.clear()
print(fruits)  # set()
```

## 5. Các phương thức quan trọng của Set

| Phương thức | Chức năng | Ví dụ |
| --- | --- | --- |
| `add(x)` | Thêm phần tử x | `my_set.add(5)` |
| `update(iterable)` | Thêm nhiều phần tử | `my_set.update([1, 2, 3])` |
| `remove(x)` | Xoá x (lỗi nếu không có) | `my_set.remove(5)` |
| `discard(x)` | Xoá x (không lỗi) | `my_set.discard(5)` |
| `pop()` | Xoá và trả về phần tử | `my_set.pop()` |
| `clear()` | Xoá toàn bộ | `my_set.clear()` |
| `copy()` | Tạo bản sao | `new_set = my_set.copy()` |

### Ví dụ chi tiết

```python
# Tạo set
colors = {"red", "blue", "green"}

# add() - Thêm 1 phần tử
colors.add("yellow")
print(colors)  # {"red", "blue", "green", "yellow"}

# update() - Thêm nhiều phần tử
colors.update(["purple", "orange"])
print(colors)

# remove() vs discard()
colors.remove("blue")  # OK
# colors.remove("pink")  # LỖI! Không có "pink"
colors.discard("pink")  # OK - Không lỗi

# pop() - Xoá ngẫu nhiên
removed_color = colors.pop()
print(f"Đã xoá: {removed_color}")
```

## 6. Các phép toán tập hợp

Set hỗ trợ các phép toán toán học trên tập hợp:

### Hợp (Union) - Gộp hai tập hợp

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Cách 1: Dùng phương thức union()
result = set1.union(set2)
print(result)  # {1, 2, 3, 4, 5}

# Cách 2: Dùng toán tử |
result = set1 | set2
print(result)  # {1, 2, 3, 4, 5}
```

### Giao (Intersection) - Phần tử chung

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Cách 1: Dùng phương thức intersection()
result = set1.intersection(set2)
print(result)  # {3, 4}

# Cách 2: Dùng toán tử &
result = set1 & set2
print(result)  # {3, 4}
```

### Hiệu (Difference) - Phần tử khác nhau

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Phần tử có trong set1 nhưng không có trong set2
result = set1.difference(set2)
print(result)  # {1, 2}

# Hoặc dùng toán tử -
result = set1 - set2
print(result)  # {1, 2}
```

### Hiệu đối xứng (Symmetric Difference) - Phần tử không chung

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Phần tử có trong set1 hoặc set2 nhưng không có trong cả hai
result = set1.symmetric_difference(set2)
print(result)  # {1, 2, 5, 6}

# Hoặc dùng toán tử ^
result = set1 ^ set2
print(result)  # {1, 2, 5, 6}
```

## 7. Các phương thức so sánh Set

| Phương thức | Chức năng | Toán tử |
| --- | --- | --- |
| `issubset()` | Kiểm tra tập con | `<=` |
| `issuperset()` | Kiểm tra tập cha | `>=` |
| `isdisjoint()` | Kiểm tra rời rạc | - |

### Tập con (Subset)

```python
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

print(set1.issubset(set2))  # True - set1 là tập con của set2
print(set1 <= set2)  # True
```

### Tập cha (Superset)

```python
set1 = {1, 2, 3, 4, 5}
set2 = {1, 2, 3}

print(set1.issuperset(set2))  # True - set1 chứa set2
print(set1 >= set2)  # True
```

### Tập rời rạc (Disjoint)

```python
set1 = {1, 2, 3}
set2 = {4, 5, 6}

print(set1.isdisjoint(set2))  # True - không có phần tử chung
```

## 8. Duyệt Set bằng vòng lặp

```python
fruits = {"apple", "banana", "orange"}

# Duyệt qua từng phần tử
for fruit in fruits:
    print(fruit)
```

**Lưu ý:** Set không có thứ tự, nên thứ tự in ra có thể khác nhau mỗi lần chạy!

## 9. Chuyển đổi giữa các kiểu dữ liệu

### List sang Set (loại bỏ trùng lặp)

```python
my_list = [1, 2, 3, 2, 1, 4, 3, 5]
my_set = set(my_list)
print(my_set)  # {1, 2, 3, 4, 5}
```

### Set sang List

```python
my_set = {3, 1, 4, 2, 5}
my_list = list(my_set)
print(my_list)  # [1, 2, 3, 4, 5] - có thể đã được sắp xếp
```

### Set sang Tuple

```python
my_set = {1, 2, 3, 4, 5}
my_tuple = tuple(my_set)
print(my_tuple)  # (1, 2, 3, 4, 5)
```

## 10. Khi nào nên dùng Set?

**Nên dùng Set khi:**

1. **Loại bỏ phần tử trùng lặp**:
   ```python
   numbers = [1, 2, 3, 2, 1, 4, 3, 5]
   unique_numbers = list(set(numbers))
   print(unique_numbers)  # [1, 2, 3, 4, 5]
   ```

2. **Kiểm tra membership nhanh** (phần tử có trong tập hợp không):
   ```python
   # Set nhanh hơn List khi kiểm tra "in"
   allowed_users = {"alice", "bob", "charlie"}
   if "alice" in allowed_users:  # Rất nhanh!
       print("Access granted")
   ```

3. **Thực hiện phép toán tập hợp**:
   ```python
   class_a = {"Alice", "Bob", "Charlie"}
   class_b = {"Bob", "David", "Eve"}

   # Học sinh học cả hai lớp
   both_classes = class_a & class_b  # {"Bob"}

   # Tất cả học sinh
   all_students = class_a | class_b
   ```

4. **Lưu trữ các phần tử duy nhất**:
   ```python
   visited_urls = set()
   visited_urls.add("google.com")
   visited_urls.add("facebook.com")
   visited_urls.add("google.com")  # Không thêm lại
   ```

## 11. Frozen Set

**Frozen Set** là set không thể thay đổi (immutable):

```python
# Tạo frozen set
frozen = frozenset([1, 2, 3, 4, 5])

# Không thể thay đổi
# frozen.add(6)  # LỖI!
# frozen.remove(1)  # LỖI!

# Nhưng có thể làm key cho dictionary
my_dict = {
    frozenset([1, 2]): "value1",
    frozenset([3, 4]): "value2"
}
```

## 12. Ví dụ thực tế

### Ví dụ 1: Loại bỏ từ trùng lặp

```python
text = "python is fun and python is easy"
words = text.split()
unique_words = set(words)
print(f"Số từ duy nhất: {len(unique_words)}")
print(f"Các từ: {unique_words}")
```

### Ví dụ 2: Tìm học sinh học cả hai môn

```python
math_students = {"Alice", "Bob", "Charlie", "David"}
science_students = {"Bob", "David", "Eve", "Frank"}

# Học sinh học cả hai môn
both = math_students & science_students
print(f"Học cả hai môn: {both}")

# Chỉ học Toán
only_math = math_students - science_students
print(f"Chỉ học Toán: {only_math}")

# Tất cả học sinh
all_students = math_students | science_students
print(f"Tất cả học sinh: {all_students}")
```

### Ví dụ 3: Kiểm tra danh sách cho phép

```python
admin_users = {"alice", "bob", "admin"}
current_user = "charlie"

if current_user in admin_users:
    print("Quyền admin")
else:
    print("Quyền thường")
```

## Bài giảng trên YouTube

Cập nhật sau

---

## 📝 Bài tập thực hành

Sau khi học xong bài này, hãy thực hành với các bài tập sau:

- **[Bài tập Set cơ bản](/bai-tap-lap-trinh/bai-tap-set-co-ban)**
- **[Bài tập Set nâng cao](/bai-tap-lap-trinh/bai-tap-set-nang-cao)**
