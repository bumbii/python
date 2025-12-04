---
icon: arrows-split-up-and-left
---

# Break, Continue và Pass

## 1. Giới thiệu

Khi làm việc với vòng lặp (`for` và `while`), chúng ta cần các câu lệnh để kiểm soát luồng thực thi. Python cung cấp 3 từ khoá quan trọng:

- **`break`**: Dừng vòng lặp ngay lập tức
- **`continue`**: Bỏ qua phần còn lại của vòng lặp hiện tại, chuyển sang vòng lặp tiếp theo
- **`pass`**: Không làm gì cả (placeholder)

## 2. Câu lệnh Break

### 2.1 - Break là gì?

**`break`** dùng để **thoát khỏi vòng lặp ngay lập tức**, bất kể vòng lặp còn bao nhiêu lần nữa.

### 2.2 - Cú pháp

```python
for item in sequence:
    if condition:
        break
    # code khác
```

### 2.3 - Ví dụ với vòng lặp for

```python
# Tìm số đầu tiên chia hết cho 7
for number in range(1, 100):
    if number % 7 == 0:
        print(f"Số đầu tiên chia hết cho 7: {number}")
        break  # Thoát khỏi vòng lặp
```

**Kết quả:**
```
Số đầu tiên chia hết cho 7: 7
```

### 2.4 - Ví dụ với vòng lặp while

```python
# Nhập số cho đến khi nhập 0
while True:
    number = int(input("Nhập một số (0 để thoát): "))
    if number == 0:
        print("Thoát chương trình!")
        break
    print(f"Bạn đã nhập: {number}")
```

### 2.5 - Ví dụ thực tế: Tìm kiếm

```python
students = ["Minh Sang", "Tuệ Nghi", "Phước Sâm", "Bảo Nguyên"]
search_name = "Phước Sâm"

found = False
for student in students:
    if student == search_name:
        print(f"Đã tìm thấy: {student}")
        found = True
        break

if not found:
    print("Không tìm thấy")
```

## 3. Câu lệnh Continue

### 3.1 - Continue là gì?

**`continue`** dùng để **bỏ qua phần còn lại** của vòng lặp hiện tại và **chuyển sang vòng lặp tiếp theo**.

### 3.2 - Cú pháp

```python
for item in sequence:
    if condition:
        continue  # Bỏ qua code phía dưới, chuyển sang vòng lặp tiếp theo
    # code này sẽ bị bỏ qua nếu continue được thực thi
```

### 3.3 - Ví dụ: In số lẻ

```python
# In các số lẻ từ 1 đến 10
for number in range(1, 11):
    if number % 2 == 0:  # Nếu là số chẵn
        continue  # Bỏ qua, không in
    print(number)  # Chỉ in số lẻ
```

**Kết quả:**
```
1
3
5
7
9
```

### 3.4 - Ví dụ: Bỏ qua giá trị không hợp lệ

```python
numbers = [10, -5, 20, -3, 30, 0, 40]

total = 0
for num in numbers:
    if num <= 0:  # Bỏ qua số âm và số 0
        continue
    total += num

print(f"Tổng các số dương: {total}")  # 100
```

### 3.5 - Ví dụ với while

```python
count = 0
while count < 10:
    count += 1
    if count == 5:  # Bỏ qua số 5
        continue
    print(count)
```

**Kết quả:** 1 2 3 4 6 7 8 9 10 (không có 5)

## 4. Câu lệnh Pass

### 4.1 - Pass là gì?

**`pass`** là một câu lệnh **không làm gì cả**. Nó được dùng như một placeholder (chỗ giữ chỗ) khi cú pháp yêu cầu phải có code nhưng bạn chưa muốn viết gì.

### 4.2 - Cú pháp

```python
for item in sequence:
    if condition:
        pass  # Tạm thời không làm gì
    # code khác
```

### 4.3 - Tại sao cần Pass?

Python yêu cầu mỗi khối code phải có ít nhất một câu lệnh. Nếu bạn để trống, sẽ bị lỗi:

```python
# LỖI! Không thể để trống
for i in range(5):
    # Lỗi SyntaxError
```

Dùng `pass` để giữ chỗ:

```python
# OK! Dùng pass
for i in range(5):
    pass  # Sẽ viết code sau
```

### 4.4 - Ví dụ: Placeholder cho hàm

```python
def calculate_average(numbers):
    pass  # TODO: Sẽ viết sau

def find_max(numbers):
    pass  # TODO: Sẽ viết sau
```

### 4.5 - Ví dụ: Placeholder cho class

```python
class Student:
    pass  # Sẽ thêm thuộc tính và phương thức sau

# Có thể tạo object ngay
student = Student()
```

### 4.6 - Ví dụ: Bỏ qua một điều kiện

```python
for number in range(1, 11):
    if number % 2 == 0:
        pass  # Tạm thời không xử lý số chẵn
    else:
        print(f"{number} là số lẻ")
```

## 5. So sánh Break, Continue và Pass

| Câu lệnh | Chức năng | Khi nào dùng |
| --- | --- | --- |
| **break** | Thoát khỏi vòng lặp | Khi muốn dừng vòng lặp hoàn toàn |
| **continue** | Bỏ qua vòng lặp hiện tại | Khi muốn bỏ qua một số trường hợp |
| **pass** | Không làm gì | Khi cần placeholder hoặc chưa viết code |

### Ví dụ so sánh

```python
# Break - Dừng khi gặp số 5
print("Break:")
for i in range(1, 11):
    if i == 5:
        break
    print(i, end=" ")  # 1 2 3 4

print("\n\nContinue:")
# Continue - Bỏ qua số 5
for i in range(1, 11):
    if i == 5:
        continue
    print(i, end=" ")  # 1 2 3 4 6 7 8 9 10

print("\n\nPass:")
# Pass - Không làm gì
for i in range(1, 11):
    if i == 5:
        pass
    print(i, end=" ")  # 1 2 3 4 5 6 7 8 9 10
```

## 6. Break và Continue trong vòng lặp lồng nhau

### 6.1 - Break chỉ thoát vòng lặp gần nhất

```python
# Break trong vòng lặp lồng nhau
for i in range(1, 4):
    print(f"\nDòng {i}:")
    for j in range(1, 6):
        if j == 3:
            break  # Chỉ thoát vòng lặp j
        print(j, end=" ")
```

**Kết quả:**
```
Dòng 1:
1 2
Dòng 2:
1 2
Dòng 3:
1 2
```

### 6.2 - Continue trong vòng lặp lồng nhau

```python
# Continue trong vòng lặp lồng nhau
for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            continue  # Bỏ qua khi i == j
        print(f"({i}, {j})", end=" ")
    print()  # Xuống dòng
```

**Kết quả:**
```
(1, 2) (1, 3)
(2, 1) (2, 3)
(3, 1) (3, 2)
```

## 7. Kết hợp với else trong vòng lặp

Python cho phép dùng `else` với vòng lặp. Khối `else` chỉ chạy khi vòng lặp **kết thúc bình thường** (không bị `break`).

### 7.1 - Vòng lặp với else (không có break)

```python
for number in range(1, 6):
    print(number)
else:
    print("Vòng lặp kết thúc bình thường")
```

### 7.2 - Vòng lặp với else (có break)

```python
for number in range(1, 10):
    if number == 5:
        print("Tìm thấy số 5!")
        break
else:
    print("Không tìm thấy số 5")  # Không chạy vì có break
```

### 7.3 - Ví dụ thực tế: Kiểm tra số nguyên tố

```python
def is_prime(n):
    if n < 2:
        return False

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            print(f"{n} không phải số nguyên tố (chia hết cho {i})")
            break
    else:
        print(f"{n} là số nguyên tố")
        return True
    return False

is_prime(17)  # 17 là số nguyên tố
is_prime(15)  # 15 không phải số nguyên tố (chia hết cho 3)
```

## 8. Các ví dụ thực tế

### Ví dụ 1: Xác thực đăng nhập

```python
max_attempts = 3
attempts = 0

while attempts < max_attempts:
    password = input("Nhập mật khẩu: ")

    if password == "python123":
        print("Đăng nhập thành công!")
        break
    else:
        attempts += 1
        print(f"Sai mật khẩu! Còn {max_attempts - attempts} lần thử")
else:
    print("Hết số lần thử. Tài khoản bị khoá!")
```

### Ví dụ 2: Lọc danh sách

```python
students = ["Alice", "Bob", "", "Charlie", None, "David", ""]

# Lọc bỏ tên rỗng
valid_students = []
for student in students:
    if not student:  # Nếu rỗng hoặc None
        continue
    valid_students.append(student)

print(valid_students)  # ["Alice", "Bob", "Charlie", "David"]
```

### Ví dụ 3: Tìm phần tử trong ma trận

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

search = 5
found = False

for row in matrix:
    for num in row:
        if num == search:
            print(f"Tìm thấy {search}!")
            found = True
            break
    if found:
        break  # Thoát cả vòng lặp ngoài
```

### Ví dụ 4: Menu chương trình

```python
while True:
    print("\n=== MENU ===")
    print("1. Xem danh sách")
    print("2. Thêm mới")
    print("3. Xoá")
    print("0. Thoát")

    choice = input("Chọn: ")

    if choice == "0":
        print("Tạm biệt!")
        break
    elif choice == "1":
        print("Hiển thị danh sách...")
    elif choice == "2":
        print("Thêm mới...")
    elif choice == "3":
        print("Xoá...")
    else:
        print("Lựa chọn không hợp lệ!")
        continue
```

## 9. Lưu ý quan trọng

1. **Break và Continue chỉ ảnh hưởng vòng lặp gần nhất**
2. **Pass không ảnh hưởng đến luồng chương trình**
3. **Else trong vòng lặp chỉ chạy khi KHÔNG có break**
4. **Tránh lạm dụng break** - có thể làm code khó đọc
5. **Continue có thể thay thế bằng if-else** nhưng đôi khi làm code gọn hơn

## Bài giảng trên YouTube

Cập nhật sau
