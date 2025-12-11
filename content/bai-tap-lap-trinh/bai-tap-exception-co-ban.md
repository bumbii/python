---
description: Các bài tập về Exception Handling - Cơ bản
icon: shield-halved
---

# Bài tập Exception Handling - Cơ bản

1. Viết chương trình nhập một số từ người dùng. Nếu người dùng nhập sai, hiển thị thông báo lỗi và yêu cầu nhập lại.

```python
try:
    number = int(input("Nhập một số: "))
    print(f"Bạn đã nhập: {number}")
except ValueError:
    print("Vui lòng nhập một số hợp lệ!")
```

2. Viết hàm **`safe_divide`** thực hiện phép chia an toàn (xử lý chia cho 0).

```python
def safe_divide(a, b):
    # Code của bạn ở đây
    pass

# Test
print(safe_divide(10, 2))  # 5.0
print(safe_divide(10, 0))  # "Không thể chia cho 0!"
```

3. Viết hàm **`get_list_item`** lấy phần tử từ list theo index, xử lý lỗi nếu index không hợp lệ.

```python
def get_list_item(my_list, index):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 4, 5]
print(get_list_item(numbers, 2))   # 3
print(get_list_item(numbers, 10))  # "Index không hợp lệ!"
```

4. Viết hàm **`get_dict_value`** lấy giá trị từ dictionary theo key, xử lý lỗi nếu key không tồn tại.

```python
def get_dict_value(my_dict, key):
    # Code của bạn ở đây
    pass

# Test
student = {"name": "Alice", "age": 20}
print(get_dict_value(student, "name"))   # "Alice"
print(get_dict_value(student, "grade"))  # "Key không tồn tại!"
```

5. Viết hàm **`safe_convert_to_int`** chuyển đổi chuỗi thành số nguyên, trả về 0 nếu không thể chuyển đổi.

```python
def safe_convert_to_int(text):
    # Code của bạn ở đây
    pass

# Test
print(safe_convert_to_int("123"))    # 123
print(safe_convert_to_int("abc"))    # 0
```

6. Viết chương trình mở và đọc file. Xử lý lỗi nếu file không tồn tại.

```python
try:
    # Code của bạn ở đây
    pass
except FileNotFoundError:
    print("File không tồn tại!")
```

7. Viết hàm **`calculate`** thực hiện phép tính từ chuỗi (dùng eval), xử lý các lỗi có thể xảy ra.

```python
def calculate(expression):
    # Code của bạn ở đây
    pass

# Test
print(calculate("2 + 3"))      # 5
print(calculate("10 / 0"))     # "Lỗi: không thể chia cho 0"
print(calculate("2 + abc"))    # "Lỗi: cú pháp không đúng"
```

8. Viết hàm **`get_age`** nhập tuổi từ người dùng, yêu cầu nhập lại nếu không hợp lệ (dùng vòng lặp).

```python
def get_age():
    while True:
        try:
            # Code của bạn ở đây
            pass
        except ValueError:
            print("Vui lòng nhập số!")

# Test
age = get_age()
print(f"Tuổi: {age}")
```

9. Viết hàm **`try_except_else`** minh họa cách dùng try/except/else.

```python
def try_except_else(number):
    try:
        result = 100 / number
    except ZeroDivisionError:
        print("Không thể chia cho 0")
    else:
        print(f"Kết quả: {result}")

# Test
try_except_else(10)  # "Kết quả: 10.0"
try_except_else(0)   # "Không thể chia cho 0"
```

10. Viết hàm **`try_finally`** minh họa cách dùng try/finally (finally luôn chạy).

```python
def try_finally():
    try:
        print("Đang xử lý...")
        result = 10 / 0
    except ZeroDivisionError:
        print("Có lỗi!")
    finally:
        print("Cleanup - Luôn chạy")

# Test
try_finally()
```

11. Viết hàm **`safe_list_access`** truy cập list an toàn, trả về giá trị mặc định nếu lỗi.

```python
def safe_list_access(my_list, index, default=None):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3]
print(safe_list_access(numbers, 1))      # 2
print(safe_list_access(numbers, 10))     # None
print(safe_list_access(numbers, 10, 0))  # 0
```

12. Viết hàm **`parse_int_list`** chuyển list chuỗi thành list số, bỏ qua các giá trị không hợp lệ.

```python
def parse_int_list(string_list):
    # Code của bạn ở đây
    pass

# Test
strings = ["1", "2", "abc", "3", "xyz", "4"]
print(parse_int_list(strings))  # [1, 2, 3, 4]
```

13. Viết hàm **`safe_average`** tính trung bình list, xử lý list rỗng.

```python
def safe_average(numbers):
    # Code của bạn ở đây
    pass

# Test
print(safe_average([1, 2, 3, 4, 5]))  # 3.0
print(safe_average([]))                # "List rỗng!"
```

14. Viết chương trình nhập 2 số và thực hiện phép chia, xử lý cả lỗi nhập liệu và chia cho 0.

```python
try:
    # Code của bạn ở đây
    pass
except ValueError:
    print("Vui lòng nhập số!")
except ZeroDivisionError:
    print("Không thể chia cho 0!")
```

15. Viết hàm **`get_file_content`** đọc nội dung file, trả về None nếu file không tồn tại.

```python
def get_file_content(filename):
    # Code của bạn ở đây
    pass

# Test
content = get_file_content("data.txt")
if content:
    print(content)
```

16. Viết hàm **`multiple_exceptions`** xử lý nhiều loại exception cùng lúc.

```python
def multiple_exceptions(data, index):
    try:
        result = int(data[index])
        return result / 2
    except (IndexError, ValueError, TypeError) as e:
        return f"Lỗi: {e}"

# Test
print(multiple_exceptions([1, 2, 3], 1))    # 1.0
print(multiple_exceptions([1, 2, 3], 10))   # "Lỗi: ..."
print(multiple_exceptions(["a", "b"], 0))   # "Lỗi: ..."
```

17. Viết hàm **`raise_custom_error`** tạo và ném exception với thông báo tùy chỉnh.

```python
def check_positive(number):
    if number < 0:
        raise ValueError("Số phải là số dương!")
    return number

# Test
try:
    check_positive(-5)
except ValueError as e:
    print(f"Lỗi: {e}")
```

18. Viết hàm **`safe_dict_update`** cập nhật dictionary, bắt TypeError nếu key không phải string.

```python
def safe_dict_update(my_dict, key, value):
    try:
        if not isinstance(key, str):
            raise TypeError("Key phải là string!")
        my_dict[key] = value
        return True
    except TypeError as e:
        print(f"Lỗi: {e}")
        return False

# Test
data = {}
safe_dict_update(data, "name", "Alice")  # True
safe_dict_update(data, 123, "value")      # False
```

19. Viết chương trình menu đơn giản với exception handling cho lựa chọn không hợp lệ.

```python
while True:
    print("\n1. Option 1")
    print("2. Option 2")
    print("3. Thoát")

    try:
        choice = int(input("Chọn: "))
        if choice == 3:
            break
        elif choice in [1, 2]:
            print(f"Bạn chọn option {choice}")
        else:
            print("Lựa chọn không hợp lệ!")
    except ValueError:
        print("Vui lòng nhập số!")
```

20. Viết hàm **`exception_logger`** ghi lại thông tin lỗi vào file log.

```python
def exception_logger(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            with open("error.log", "a") as log:
                log.write(f"Error: {e}\n")
            raise

    return wrapper

# Test
@exception_logger
def risky_function():
    return 10 / 0

try:
    risky_function()
except:
    print("Lỗi đã được ghi log")
```
