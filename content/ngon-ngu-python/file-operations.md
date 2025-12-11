---
icon: file
---

# Đọc và Ghi File

## 1. Giới thiệu

Làm việc với file là một kỹ năng quan trọng trong lập trình. Python cung cấp các hàm đơn giản để:
- Đọc dữ liệu từ file
- Ghi dữ liệu vào file
- Thêm dữ liệu vào cuối file
- Làm việc với nhiều loại file khác nhau

## 2. Mở File

### 2.1 - Hàm open()

```python
file = open("filename.txt", "mode")
```

### 2.2 - Các chế độ (mode) phổ biến

| Mode | Ý nghĩa | Mô tả |
| --- | --- | --- |
| `"r"` | Read (đọc) | Mở để đọc (mặc định) |
| `"w"` | Write (ghi) | Mở để ghi, **xoá nội dung cũ** |
| `"a"` | Append (thêm) | Mở để thêm vào cuối |
| `"r+"` | Read + Write | Đọc và ghi |
| `"rb"` | Read Binary | Đọc file nhị phân |
| `"wb"` | Write Binary | Ghi file nhị phân |

### 2.3 - Ví dụ mở file

```python
# Mở file để đọc
file = open("data.txt", "r")

# Mở file để ghi
file = open("output.txt", "w")

# Mở file để thêm
file = open("log.txt", "a")
```

## 3. Đọc File

### 3.1 - read() - Đọc toàn bộ file

```python
file = open("data.txt", "r")
content = file.read()
print(content)
file.close()
```

### 3.2 - readline() - Đọc từng dòng

```python
file = open("data.txt", "r")
line1 = file.readline()
line2 = file.readline()
print(line1)
print(line2)
file.close()
```

### 3.3 - readlines() - Đọc tất cả dòng thành list

```python
file = open("data.txt", "r")
lines = file.readlines()
for line in lines:
    print(line.strip())  # strip() để xoá \n
file.close()
```

### 3.4 - Đọc file với vòng lặp

```python
file = open("data.txt", "r")
for line in file:
    print(line.strip())
file.close()
```

## 4. Ghi File

### 4.1 - write() - Ghi chuỗi

```python
file = open("output.txt", "w")
file.write("Hello World\n")
file.write("Python Programming\n")
file.close()
```

**Lưu ý:** Mode `"w"` sẽ **xoá toàn bộ nội dung cũ**!

### 4.2 - writelines() - Ghi list

```python
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]

file = open("output.txt", "w")
file.writelines(lines)
file.close()
```

### 4.3 - Thêm vào cuối file (append)

```python
file = open("log.txt", "a")
file.write("New log entry\n")
file.close()
```

## 5. Đóng File

**Quan trọng:** Luôn đóng file sau khi sử dụng!

```python
file = open("data.txt", "r")
content = file.read()
file.close()  # Phải đóng file!
```

## 6. Context Manager (with statement)

Cách **TỐT NHẤT** để làm việc với file - tự động đóng file:

### 6.1 - Cú pháp

```python
with open("filename.txt", "mode") as file:
    # Làm việc với file
    pass
# File tự động đóng khi ra khỏi khối with
```

### 6.2 - Ví dụ đọc file

```python
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File đã tự động đóng
```

### 6.3 - Ví dụ ghi file

```python
with open("output.txt", "w") as file:
    file.write("Hello World\n")
    file.write("Python is awesome!\n")
```

### 6.4 - Ví dụ xử lý lỗi

```python
try:
    with open("data.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File không tồn tại!")
except PermissionError:
    print("Không có quyền đọc file!")
```

## 7. Kiểm tra File tồn tại

### 7.1 - Sử dụng os.path

```python
import os

if os.path.exists("data.txt"):
    print("File tồn tại")
else:
    print("File không tồn tại")

# Kiểm tra là file hay folder
if os.path.isfile("data.txt"):
    print("Đây là file")

if os.path.isdir("folder"):
    print("Đây là folder")
```

### 7.2 - Sử dụng Path (pathlib)

```python
from pathlib import Path

file_path = Path("data.txt")

if file_path.exists():
    print("File tồn tại")

if file_path.is_file():
    print("Đây là file")
```

## 8. Làm việc với đường dẫn

### 8.1 - Lấy thông tin file

```python
import os

# Lấy kích thước file (bytes)
size = os.path.getsize("data.txt")
print(f"Kích thước: {size} bytes")

# Lấy thời gian sửa đổi
import time
mtime = os.path.getmtime("data.txt")
print(f"Sửa đổi lần cuối: {time.ctime(mtime)}")
```

### 8.2 - Đường dẫn tương đối và tuyệt đối

```python
import os

# Đường dẫn hiện tại
current_dir = os.getcwd()
print(f"Thư mục hiện tại: {current_dir}")

# Đường dẫn tuyệt đối
abs_path = os.path.abspath("data.txt")
print(f"Đường dẫn tuyệt đối: {abs_path}")

# Nối đường dẫn
path = os.path.join("folder", "subfolder", "file.txt")
```

### 8.3 - Tạo và xoá file/folder

```python
import os

# Tạo folder
os.mkdir("new_folder")

# Tạo folder lồng nhau
os.makedirs("parent/child/grandchild")

# Xoá file
os.remove("file.txt")

# Xoá folder rỗng
os.rmdir("folder")

# Đổi tên file
os.rename("old_name.txt", "new_name.txt")
```

## 9. Đọc ghi file Text

### Ví dụ 1: Đọc và in file

```python
def read_and_print(filename):
    try:
        with open(filename, "r", encoding="utf-8") as file:
            content = file.read()
            print(content)
    except FileNotFoundError:
        print(f"File '{filename}' không tồn tại")

read_and_print("data.txt")
```

### Ví dụ 2: Copy file

```python
def copy_file(source, destination):
    with open(source, "r") as src:
        with open(destination, "w") as dst:
            dst.write(src.read())
    print(f"Đã copy {source} -> {destination}")

copy_file("input.txt", "output.txt")
```

### Ví dụ 3: Đếm số dòng

```python
def count_lines(filename):
    with open(filename, "r") as file:
        lines = file.readlines()
        return len(lines)

count = count_lines("data.txt")
print(f"Số dòng: {count}")
```

### Ví dụ 4: Đếm từ

```python
def count_words(filename):
    with open(filename, "r") as file:
        content = file.read()
        words = content.split()
        return len(words)

count = count_words("data.txt")
print(f"Số từ: {count}")
```

### Ví dụ 5: Tìm kiếm trong file

```python
def search_in_file(filename, search_text):
    with open(filename, "r") as file:
        for line_num, line in enumerate(file, 1):
            if search_text in line:
                print(f"Dòng {line_num}: {line.strip()}")

search_in_file("data.txt", "Python")
```

## 10. Làm việc với File Binary

### 10.1 - Đọc file binary

```python
with open("image.png", "rb") as file:
    data = file.read()
    print(f"Kích thước: {len(data)} bytes")
```

### 10.2 - Copy file binary

```python
def copy_binary_file(source, destination):
    with open(source, "rb") as src:
        with open(destination, "wb") as dst:
            dst.write(src.read())

copy_binary_file("image.png", "image_copy.png")
```

## 11. File với encoding

Quan trọng khi làm việc với Tiếng Việt:

```python
# Đọc file với UTF-8
with open("vietnamese.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# Ghi file với UTF-8
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Xin chào Việt Nam\n")
    file.write("Python là ngôn ngữ tuyệt vời\n")
```

## 12. Ví dụ thực tế

### Ví dụ 1: Ghi log

```python
from datetime import datetime

def write_log(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("app.log", "a", encoding="utf-8") as file:
        file.write(f"[{timestamp}] {message}\n")

write_log("Application started")
write_log("User logged in")
write_log("Error occurred")
```

### Ví dụ 2: Lưu cấu hình

```python
def save_config(config):
    with open("config.txt", "w") as file:
        for key, value in config.items():
            file.write(f"{key}={value}\n")

def load_config():
    config = {}
    with open("config.txt", "r") as file:
        for line in file:
            key, value = line.strip().split("=")
            config[key] = value
    return config

# Sử dụng
config = {"username": "admin", "theme": "dark", "language": "vi"}
save_config(config)

loaded = load_config()
print(loaded)
```

### Ví dụ 3: To-Do List

```python
def add_task(task):
    with open("todo.txt", "a", encoding="utf-8") as file:
        file.write(f"[ ] {task}\n")

def show_tasks():
    try:
        with open("todo.txt", "r", encoding="utf-8") as file:
            print("=== TO-DO LIST ===")
            for i, task in enumerate(file, 1):
                print(f"{i}. {task.strip()}")
    except FileNotFoundError:
        print("Chưa có task nào")

# Sử dụng
add_task("Học Python")
add_task("Làm bài tập")
show_tasks()
```

### Ví dụ 4: Thống kê file

```python
def file_statistics(filename):
    with open(filename, "r", encoding="utf-8") as file:
        content = file.read()
        lines = content.split("\n")
        words = content.split()

        stats = {
            "lines": len(lines),
            "words": len(words),
            "characters": len(content),
            "characters_no_spaces": len(content.replace(" ", ""))
        }
        return stats

stats = file_statistics("data.txt")
print(f"Số dòng: {stats['lines']}")
print(f"Số từ: {stats['words']}")
print(f"Số ký tự: {stats['characters']}")
```

### Ví dụ 5: Backup file

```python
import shutil
from datetime import datetime

def backup_file(filename):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_name = f"{filename}.backup_{timestamp}"
    shutil.copy2(filename, backup_name)
    print(f"Backup created: {backup_name}")

backup_file("important_data.txt")
```

## 13. Best Practices

### 1. Luôn dùng with statement

```python
# TỐT
with open("file.txt", "r") as file:
    content = file.read()

# TRÁNH
file = open("file.txt", "r")
content = file.read()
file.close()  # Dễ quên!
```

### 2. Xử lý exceptions

```python
# TỐT
try:
    with open("file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File không tồn tại")
except PermissionError:
    print("Không có quyền truy cập")
```

### 3. Chỉ định encoding

```python
# TỐT - Rõ ràng
with open("file.txt", "r", encoding="utf-8") as file:
    content = file.read()

# TRÁNH - Dùng encoding mặc định (có thể khác nhau trên các hệ điều hành)
with open("file.txt", "r") as file:
    content = file.read()
```

### 4. Đọc file lớn từng dòng

```python
# TỐT - Tiết kiệm bộ nhớ
with open("large_file.txt", "r") as file:
    for line in file:
        process(line)

# TRÁNH - Load toàn bộ vào RAM
with open("large_file.txt", "r") as file:
    content = file.read()  # Nguy hiểm với file lớn!
```

### 5. Sử dụng pathlib

```python
from pathlib import Path

# TỐT - Modern, cross-platform
path = Path("folder") / "subfolder" / "file.txt"
content = path.read_text(encoding="utf-8")

# Tương đương nhưng cũ hơn
import os
path = os.path.join("folder", "subfolder", "file.txt")
with open(path, "r", encoding="utf-8") as file:
    content = file.read()
```

## Bài giảng trên YouTube

Cập nhật sau
