---
description: Các bài tập về File Operations - Cơ bản
icon: file
---

# Bài tập File Operations - Cơ bản

1. Viết chương trình tạo file "hello.txt" và ghi dòng chữ "Hello World".

```python
# Code của bạn ở đây
```

2. Viết hàm **`read_file`** đọc và in toàn bộ nội dung file.

```python
def read_file(filename):
    # Code của bạn ở đây
    pass

# Test
read_file("data.txt")
```

3. Viết hàm **`count_lines`** đếm số dòng trong file.

```python
def count_lines(filename):
    # Code của bạn ở đây
    pass

# Test
print(count_lines("data.txt"))
```

4. Viết hàm **`append_text`** thêm một dòng text vào cuối file.

```python
def append_text(filename, text):
    # Code của bạn ở đây
    pass

# Test
append_text("log.txt", "New log entry")
```

5. Viết hàm **`read_first_line`** đọc dòng đầu tiên của file.

```python
def read_first_line(filename):
    # Code của bạn ở đây
    pass

# Test
print(read_first_line("data.txt"))
```

6. Viết hàm **`write_list_to_file`** ghi list các chuỗi vào file, mỗi chuỗi một dòng.

```python
def write_list_to_file(filename, items):
    # Code của bạn ở đây
    pass

# Test
fruits = ["apple", "banana", "orange"]
write_list_to_file("fruits.txt", fruits)
```

7. Viết hàm **`file_exists`** kiểm tra file có tồn tại không.

```python
def file_exists(filename):
    # Code của bạn ở đây
    pass

# Test
print(file_exists("data.txt"))  # True hoặc False
```

8. Viết hàm **`copy_file`** copy nội dung từ file này sang file khác.

```python
def copy_file(source, destination):
    # Code của bạn ở đây
    pass

# Test
copy_file("input.txt", "output.txt")
```

9. Viết hàm **`count_words`** đếm tổng số từ trong file.

```python
def count_words(filename):
    # Code của bạn ở đây
    pass

# Test
print(count_words("data.txt"))
```

10. Viết hàm **`read_lines_to_list`** đọc file và trả về list các dòng.

```python
def read_lines_to_list(filename):
    # Code của bạn ở đây
    pass

# Test
lines = read_lines_to_list("data.txt")
print(lines)
```

11. Viết hàm **`write_numbers`** ghi các số từ 1 đến n vào file, mỗi số một dòng.

```python
def write_numbers(filename, n):
    # Code của bạn ở đây
    pass

# Test
write_numbers("numbers.txt", 10)
```

12. Viết hàm **`search_in_file`** tìm kiếm một từ trong file và trả về số dòng chứa từ đó.

```python
def search_in_file(filename, search_word):
    # Code của bạn ở đây
    pass

# Test
search_in_file("data.txt", "Python")
```

13. Viết hàm **`get_file_size`** trả về kích thước file (bytes).

```python
def get_file_size(filename):
    # Code của bạn ở đây
    pass

# Test
print(f"File size: {get_file_size('data.txt')} bytes")
```

14. Viết hàm **`replace_in_file`** thay thế tất cả từ old_word bằng new_word trong file.

```python
def replace_in_file(filename, old_word, new_word):
    # Code của bạn ở đây
    pass

# Test
replace_in_file("data.txt", "old", "new")
```

15. Viết hàm **`read_file_safe`** đọc file với exception handling.

```python
def read_file_safe(filename):
    try:
        # Code của bạn ở đây
        pass
    except FileNotFoundError:
        return "File không tồn tại"
    except Exception as e:
        return f"Lỗi: {e}"

# Test
content = read_file_safe("data.txt")
```

16. Viết hàm **`write_dict_to_file`** ghi dictionary vào file dạng key=value.

```python
def write_dict_to_file(filename, data):
    # Code của bạn ở đây
    pass

# Test
config = {"name": "Alice", "age": "25", "city": "Hanoi"}
write_dict_to_file("config.txt", config)
```

17. Viết hàm **`read_dict_from_file`** đọc file dạng key=value thành dictionary.

```python
def read_dict_from_file(filename):
    # Code của bạn ở đây
    pass

# Test
config = read_dict_from_file("config.txt")
print(config)
```

18. Viết hàm **`remove_empty_lines`** xoá các dòng trống trong file.

```python
def remove_empty_lines(filename):
    # Code của bạn ở đây
    pass

# Test
remove_empty_lines("data.txt")
```

19. Viết hàm **`merge_files`** gộp nội dung nhiều file vào một file.

```python
def merge_files(output_file, *input_files):
    # Code của bạn ở đây
    pass

# Test
merge_files("combined.txt", "file1.txt", "file2.txt", "file3.txt")
```

20. Viết chương trình To-Do List đơn giản lưu vào file "todo.txt".

```python
def add_task(task):
    # Code của bạn ở đây
    pass

def show_tasks():
    # Code của bạn ở đây
    pass

def clear_tasks():
    # Code của bạn ở đây
    pass

# Test
add_task("Học Python")
add_task("Làm bài tập")
show_tasks()
```
