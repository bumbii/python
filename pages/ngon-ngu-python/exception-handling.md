---
icon: shield-halved
---

# Exception Handling (Try/Except)

## 1. Giới thiệu

**Exception** (ngoại lệ) là lỗi xảy ra khi chương trình đang chạy. Nếu không xử lý, chương trình sẽ dừng đột ngột.

**Exception Handling** (xử lý ngoại lệ) giúp chương trình:
- Không bị crash khi gặp lỗi
- Xử lý lỗi một cách có kiểm soát
- Hiển thị thông báo lỗi thân thiện với người dùng

## 2. Try/Except cơ bản

### 2.1 - Cú pháp

```python
try:
    # Code có thể gây lỗi
    risky_operation()
except:
    # Code xử lý khi có lỗi
    print("Có lỗi xảy ra!")
```

### 2.2 - Ví dụ: Chia cho 0

```python
# Không xử lý lỗi - Chương trình crash!
# result = 10 / 0  # ZeroDivisionError

# Có xử lý lỗi - Chương trình tiếp tục chạy
try:
    result = 10 / 0
    print(result)
except:
    print("Không thể chia cho 0!")

print("Chương trình vẫn chạy tiếp")
```

### 2.3 - Ví dụ: Chuyển đổi kiểu dữ liệu

```python
user_input = "abc"

try:
    number = int(user_input)
    print(f"Số bạn nhập: {number}")
except:
    print("Vui lòng nhập một số hợp lệ!")
```

## 3. Bắt Exception cụ thể

### 3.1 - Tại sao cần bắt exception cụ thể?

Bắt exception cụ thể giúp:
- Xử lý từng loại lỗi khác nhau
- Code dễ đọc và maintain hơn
- Debug dễ dàng hơn

### 3.2 - Cú pháp

```python
try:
    risky_operation()
except ValueError:
    print("Lỗi giá trị không hợp lệ")
except ZeroDivisionError:
    print("Lỗi chia cho 0")
```

### 3.3 - Ví dụ

```python
try:
    age = int(input("Nhập tuổi: "))
    result = 100 / age
    print(f"Kết quả: {result}")
except ValueError:
    print("Tuổi phải là một số!")
except ZeroDivisionError:
    print("Tuổi không thể là 0!")
```

## 4. Các loại Exception phổ biến

| Exception | Khi nào xảy ra | Ví dụ |
| --- | --- | --- |
| `ValueError` | Giá trị không đúng kiểu | `int("abc")` |
| `ZeroDivisionError` | Chia cho 0 | `10 / 0` |
| `TypeError` | Sai kiểu dữ liệu | `"hello" + 5` |
| `IndexError` | Index vượt quá phạm vi | `[1,2,3][10]` |
| `KeyError` | Key không tồn tại | `dict["key"]` |
| `FileNotFoundError` | File không tồn tại | `open("xyz.txt")` |
| `AttributeError` | Thuộc tính không tồn tại | `"hello".xyz()` |
| `NameError` | Biến chưa được định nghĩa | `print(x)` |

### Ví dụ từng loại

```python
# ValueError
try:
    number = int("abc")
except ValueError as e:
    print(f"ValueError: {e}")

# IndexError
try:
    my_list = [1, 2, 3]
    print(my_list[10])
except IndexError as e:
    print(f"IndexError: {e}")

# KeyError
try:
    my_dict = {"name": "Alice"}
    print(my_dict["age"])
except KeyError as e:
    print(f"KeyError: {e}")
```

## 5. Lấy thông tin lỗi với 'as'

```python
try:
    result = 10 / 0
except ZeroDivisionError as error:
    print(f"Lỗi: {error}")
    print(f"Loại lỗi: {type(error).__name__}")
```

**Kết quả:**
```
Lỗi: division by zero
Loại lỗi: ZeroDivisionError
```

## 6. Bắt nhiều Exception

### 6.1 - Bắt từng loại riêng

```python
try:
    number = int(input("Nhập số: "))
    result = 100 / number
    print(result)
except ValueError:
    print("Vui lòng nhập số!")
except ZeroDivisionError:
    print("Không thể chia cho 0!")
```

### 6.2 - Bắt nhiều loại cùng lúc

```python
try:
    # Code
    pass
except (ValueError, TypeError, ZeroDivisionError) as e:
    print(f"Lỗi: {e}")
```

### 6.3 - Bắt tất cả Exception (không khuyến khích)

```python
try:
    # Code
    pass
except Exception as e:
    print(f"Có lỗi: {e}")
```

## 7. Else và Finally

### 7.1 - Else: Chạy khi KHÔNG có lỗi

```python
try:
    number = int(input("Nhập số: "))
except ValueError:
    print("Số không hợp lệ!")
else:
    print(f"Bạn đã nhập: {number}")
    print("Không có lỗi xảy ra!")
```

### 7.2 - Finally: Luôn luôn chạy

```python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File không tồn tại!")
else:
    print("Đọc file thành công!")
finally:
    print("Khối này luôn chạy")
    # Đóng file nếu đã mở
    try:
        file.close()
    except:
        pass
```

### 7.3 - Cấu trúc đầy đủ

```python
try:
    # Code có thể gây lỗi
    result = 10 / 2
except ZeroDivisionError:
    # Xử lý lỗi chia 0
    print("Lỗi chia 0")
except ValueError:
    # Xử lý lỗi giá trị
    print("Lỗi giá trị")
else:
    # Chạy nếu KHÔNG có lỗi
    print(f"Kết quả: {result}")
finally:
    # Luôn luôn chạy
    print("Hoàn thành!")
```

## 8. Raise Exception

### 8.1 - Tự tạo Exception

```python
def divide(a, b):
    if b == 0:
        raise ValueError("Không thể chia cho 0!")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(f"Lỗi: {e}")
```

### 8.2 - Re-raise Exception

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Ghi log lỗi...")
    raise  # Ném lại exception để xử lý ở nơi khác
```

## 9. Custom Exception

Tạo Exception riêng cho ứng dụng:

```python
class AgeError(Exception):
    """Exception cho tuổi không hợp lệ"""
    pass

def check_age(age):
    if age < 0:
        raise AgeError("Tuổi không thể âm!")
    if age > 150:
        raise AgeError("Tuổi quá lớn!")
    return True

try:
    check_age(-5)
except AgeError as e:
    print(f"Lỗi tuổi: {e}")
```

## 10. Ví dụ thực tế

### Ví dụ 1: Validate input số

```python
def get_number(prompt):
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("Vui lòng nhập một số hợp lệ!")

age = get_number("Nhập tuổi: ")
print(f"Tuổi của bạn: {age}")
```

### Ví dụ 2: Đọc file an toàn

```python
def read_file_safe(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print(f"File '{filename}' không tồn tại!")
        return None
    except PermissionError:
        print(f"Không có quyền đọc file '{filename}'!")
        return None
    except Exception as e:
        print(f"Lỗi không xác định: {e}")
        return None

content = read_file_safe("data.txt")
if content:
    print(content)
```

### Ví dụ 3: Truy cập dictionary an toàn

```python
def get_student_score(students, name):
    try:
        return students[name]
    except KeyError:
        return f"Học sinh '{name}' không tồn tại"

students = {"Alice": 95, "Bob": 87}
print(get_student_score(students, "Alice"))   # 95
print(get_student_score(students, "Charlie")) # "Học sinh 'Charlie' không tồn tại"
```

### Ví dụ 4: Calculator với error handling

```python
def calculator():
    while True:
        try:
            operation = input("Nhập phép tính (hoặc 'quit'): ")
            if operation.lower() == 'quit':
                break

            result = eval(operation)
            print(f"= {result}")
        except ZeroDivisionError:
            print("Lỗi: Không thể chia cho 0!")
        except SyntaxError:
            print("Lỗi: Cú pháp không đúng!")
        except NameError:
            print("Lỗi: Biến không tồn tại!")
        except Exception as e:
            print(f"Lỗi: {e}")

calculator()
```

### Ví dụ 5: Retry mechanism

```python
def connect_to_server(max_retries=3):
    for attempt in range(max_retries):
        try:
            print(f"Thử kết nối lần {attempt + 1}...")
            # Giả lập kết nối
            import random
            if random.random() > 0.5:
                raise ConnectionError("Kết nối thất bại")

            print("Kết nối thành công!")
            return True
        except ConnectionError as e:
            print(f"Lỗi: {e}")
            if attempt == max_retries - 1:
                print("Hết số lần thử!")
                return False

    return False

connect_to_server()
```

## 11. Best Practices

### 1. Bắt exception cụ thể

```python
# TỐT
try:
    number = int(input("Nhập số: "))
except ValueError:
    print("Số không hợp lệ")

# TRÁNH
try:
    number = int(input("Nhập số: "))
except:
    print("Có lỗi")
```

### 2. Không bắt exception quá rộng

```python
# TỐT
try:
    result = risky_operation()
except (ValueError, TypeError) as e:
    handle_error(e)

# TRÁNH
try:
    result = risky_operation()
except Exception:
    pass  # Nuốt tất cả lỗi - rất nguy hiểm!
```

### 3. Log lỗi

```python
try:
    process_data()
except Exception as e:
    print(f"Lỗi: {e}")
    # Ghi log để debug sau
    with open("error.log", "a") as log:
        log.write(f"{datetime.now()}: {e}\n")
```

### 4. Cleanup với finally

```python
file = None
try:
    file = open("data.txt", "r")
    process(file)
except FileNotFoundError:
    print("File không tồn tại")
finally:
    if file:
        file.close()
```

### 5. Fail fast

```python
def process_user(user_id):
    if not user_id:
        raise ValueError("user_id không thể rỗng")

    # Tiếp tục xử lý...
```

## 12. Context Manager (with statement)

Cách tốt nhất để xử lý tài nguyên (file, connection):

```python
# Tự động close file
try:
    with open("data.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File không tồn tại")
# File tự động được đóng, ngay cả khi có lỗi
```

## Bài giảng trên YouTube

Cập nhật sau

---

## 📝 Bài tập thực hành

Sau khi học xong bài này, hãy thực hành với các bài tập sau:

- **[Bài tập Exception Handling cơ bản](/bai-tap-lap-trinh/bai-tap-exception-co-ban)**
- **[Bài tập Exception Handling nâng cao](/bai-tap-lap-trinh/bai-tap-exception-nang-cao)**
