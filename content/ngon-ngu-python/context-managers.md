---
icon: brackets-curly
---

# Context Managers (with statement)

## 1. Giới thiệu

**Context Manager** là một cơ chế trong Python giúp quản lý tài nguyên (resources) một cách tự động và an toàn. Nó đảm bảo rằng các tài nguyên được thiết lập (setup) và dọn dẹp (cleanup) đúng cách, ngay cả khi có lỗi xảy ra.

**Tại sao cần Context Manager?**
- Tự động đóng file sau khi sử dụng
- Tự động giải phóng kết nối database
- Tự động unlock các thread lock
- Đảm bảo cleanup ngay cả khi có exception

## 2. with statement

### 2.1 - Cú pháp cơ bản

```python
with expression as variable:
    # Code sử dụng variable
    pass
# Tự động cleanup khi ra khỏi khối with
```

### 2.2 - Ví dụ với file

**Không dùng with - Cách cũ:**
```python
file = open("data.txt", "r")
try:
    content = file.read()
    print(content)
finally:
    file.close()  # Phải nhớ đóng file
```

**Dùng with - Cách tốt:**
```python
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File tự động đóng, không cần gọi close()
```

### 2.3 - Tại sao with tốt hơn?

```python
# Trường hợp có lỗi
file = open("data.txt", "r")
content = file.read()
result = process(content)  # Nếu lỗi ở đây, file không được đóng!
file.close()  # Dòng này không chạy nếu có lỗi

# Với with - luôn đóng file
with open("data.txt", "r") as file:
    content = file.read()
    result = process(content)  # Dù có lỗi, file vẫn được đóng
```

## 3. Context Manager với File

### 3.1 - Đọc file

```python
# Đọc file text
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# Đọc từng dòng
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### 3.2 - Ghi file

```python
# Ghi file
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Hello World\n")
    file.write("Python is awesome!\n")

# Append vào cuối file
with open("log.txt", "a") as file:
    file.write("New log entry\n")
```

### 3.3 - Làm việc với nhiều file

```python
# Mở nhiều file cùng lúc
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    content = infile.read()
    outfile.write(content.upper())

# Hoặc viết trên nhiều dòng
with open("file1.txt", "r") as f1, \
     open("file2.txt", "r") as f2, \
     open("merged.txt", "w") as fout:
    fout.write(f1.read())
    fout.write(f2.read())
```

### 3.4 - Copy file

```python
def copy_file(source, destination):
    with open(source, "rb") as src, open(destination, "wb") as dst:
        dst.write(src.read())

copy_file("image.png", "image_copy.png")
```

## 4. Built-in Context Managers

### 4.1 - File operations

```python
# Đã xem ở trên
with open("file.txt", "r") as file:
    content = file.read()
```

### 4.2 - Changing directory (chdir)

```python
import os
from contextlib import chdir

# Python 3.11+
with chdir("/tmp"):
    # Làm việc trong /tmp
    print(os.getcwd())
# Tự động quay về thư mục ban đầu
```

### 4.3 - Suppress exceptions

```python
from contextlib import suppress

# Bỏ qua exception cụ thể
with suppress(FileNotFoundError):
    os.remove("file_that_may_not_exist.txt")

# Tương đương với:
try:
    os.remove("file_that_may_not_exist.txt")
except FileNotFoundError:
    pass
```

### 4.4 - Redirect stdout

```python
from contextlib import redirect_stdout
import io

# Redirect output vào string
output = io.StringIO()
with redirect_stdout(output):
    print("Hello World")
    print("Python")

result = output.getvalue()
print(result)  # "Hello World\nPython\n"
```

## 5. Tạo Context Manager với Class

### 5.1 - Protocol __enter__ và __exit__

```python
class MyContextManager:
    def __enter__(self):
        print("Entering context")
        return self  # Giá trị trả về cho 'as'

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting context")
        # exc_type: Loại exception (nếu có)
        # exc_value: Giá trị exception
        # traceback: Traceback
        return False  # False = không suppress exception

# Sử dụng
with MyContextManager() as cm:
    print("Inside context")
```

**Kết quả:**
```
Entering context
Inside context
Exiting context
```

### 5.2 - Ví dụ: File Manager

```python
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        print(f"Opening {self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        print(f"Closing {self.filename}")
        if self.file:
            self.file.close()
        return False

# Sử dụng
with FileManager("data.txt", "w") as file:
    file.write("Hello World\n")
```

### 5.3 - Ví dụ: Timer

```python
import time

class Timer:
    def __enter__(self):
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.end = time.time()
        self.elapsed = self.end - self.start
        print(f"Elapsed time: {self.elapsed:.4f} seconds")
        return False

# Sử dụng
with Timer():
    # Code cần đo thời gian
    total = sum(range(1000000))
```

### 5.4 - Ví dụ: Database Connection

```python
class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None

    def __enter__(self):
        print(f"Connecting to {self.db_name}")
        # Giả lập connect
        self.connection = f"Connection to {self.db_name}"
        return self.connection

    def __exit__(self, exc_type, exc_value, traceback):
        print(f"Closing connection to {self.db_name}")
        self.connection = None
        return False

# Sử dụng
with DatabaseConnection("mydb") as conn:
    print(f"Using {conn}")
    # Thực hiện query...
```

## 6. Tạo Context Manager với @contextmanager

### 6.1 - Decorator contextmanager

```python
from contextlib import contextmanager

@contextmanager
def my_context():
    print("Setup")
    yield "value"  # Giá trị cho 'as'
    print("Cleanup")

# Sử dụng
with my_context() as value:
    print(f"Using {value}")
```

**Kết quả:**
```
Setup
Using value
Cleanup
```

### 6.2 - Ví dụ: File handler

```python
from contextlib import contextmanager

@contextmanager
def open_file(filename, mode):
    print(f"Opening {filename}")
    file = open(filename, mode)
    try:
        yield file
    finally:
        print(f"Closing {filename}")
        file.close()

# Sử dụng
with open_file("data.txt", "w") as f:
    f.write("Hello World\n")
```

### 6.3 - Ví dụ: Temporary directory

```python
from contextlib import contextmanager
import os
import tempfile
import shutil

@contextmanager
def temp_directory():
    temp_dir = tempfile.mkdtemp()
    print(f"Created temp directory: {temp_dir}")
    try:
        yield temp_dir
    finally:
        print(f"Removing temp directory: {temp_dir}")
        shutil.rmtree(temp_dir)

# Sử dụng
with temp_directory() as temp_dir:
    # Làm việc với thư mục tạm
    file_path = os.path.join(temp_dir, "temp.txt")
    with open(file_path, "w") as f:
        f.write("Temporary data")
# Thư mục tự động bị xóa
```

### 6.4 - Ví dụ: Change directory

```python
from contextlib import contextmanager
import os

@contextmanager
def change_dir(path):
    old_dir = os.getcwd()
    os.chdir(path)
    print(f"Changed to: {path}")
    try:
        yield
    finally:
        os.chdir(old_dir)
        print(f"Back to: {old_dir}")

# Sử dụng
with change_dir("/tmp"):
    print(os.getcwd())  # /tmp
print(os.getcwd())  # Thư mục ban đầu
```

### 6.5 - Ví dụ: Timer decorator

```python
from contextlib import contextmanager
import time

@contextmanager
def timer(name):
    start = time.time()
    print(f"[{name}] Starting...")
    yield
    elapsed = time.time() - start
    print(f"[{name}] Finished in {elapsed:.4f}s")

# Sử dụng
with timer("Data processing"):
    # Code cần đo
    data = [i ** 2 for i in range(1000000)]
```

## 7. Xử lý Exception trong Context Manager

### 7.1 - Suppress exception

```python
class SuppressException:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is ValueError:
            print(f"Suppressed ValueError: {exc_value}")
            return True  # True = suppress exception
        return False  # Không suppress exception khác

# Sử dụng
with SuppressException():
    raise ValueError("This will be suppressed")

print("Program continues")
```

### 7.2 - Log exception

```python
from contextlib import contextmanager

@contextmanager
def log_exceptions():
    try:
        yield
    except Exception as e:
        print(f"Error occurred: {e}")
        raise  # Re-raise exception

# Sử dụng
try:
    with log_exceptions():
        result = 10 / 0
except ZeroDivisionError:
    print("Handled division by zero")
```

### 7.3 - Retry mechanism

```python
from contextlib import contextmanager
import time

@contextmanager
def retry(max_retries=3):
    for attempt in range(max_retries):
        try:
            yield attempt
            break  # Thành công, thoát
        except Exception as e:
            if attempt == max_retries - 1:
                raise  # Hết lần thử, raise exception
            print(f"Attempt {attempt + 1} failed: {e}")
            time.sleep(1)

# Sử dụng
import random

with retry(3) as attempt:
    print(f"Trying... (attempt {attempt + 1})")
    if random.random() > 0.7:
        print("Success!")
    else:
        raise ConnectionError("Failed to connect")
```

## 8. Ví dụ thực tế

### Ví dụ 1: Database transaction

```python
from contextlib import contextmanager

@contextmanager
def database_transaction(connection):
    try:
        yield connection
        connection.commit()
        print("Transaction committed")
    except Exception as e:
        connection.rollback()
        print(f"Transaction rolled back: {e}")
        raise

# Sử dụng (giả lập)
class FakeConnection:
    def commit(self):
        print("Committing...")
    def rollback(self):
        print("Rolling back...")

conn = FakeConnection()
with database_transaction(conn):
    # Thực hiện các query
    print("Executing queries...")
```

### Ví dụ 2: Lock/Unlock

```python
from contextlib import contextmanager
import threading

@contextmanager
def acquire_lock(lock):
    lock.acquire()
    print("Lock acquired")
    try:
        yield
    finally:
        lock.release()
        print("Lock released")

# Sử dụng
lock = threading.Lock()
with acquire_lock(lock):
    # Code thread-safe
    print("Critical section")
```

### Ví dụ 3: Measure memory

```python
from contextlib import contextmanager
import tracemalloc

@contextmanager
def measure_memory():
    tracemalloc.start()
    yield
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    print(f"Current memory: {current / 1024 / 1024:.2f} MB")
    print(f"Peak memory: {peak / 1024 / 1024:.2f} MB")

# Sử dụng
with measure_memory():
    # Code cần đo memory
    data = [i for i in range(1000000)]
```

### Ví dụ 4: Capture output

```python
from contextlib import contextmanager
from io import StringIO
import sys

@contextmanager
def capture_output():
    old_stdout = sys.stdout
    sys.stdout = StringIO()
    try:
        yield sys.stdout
    finally:
        sys.stdout = old_stdout

# Sử dụng
with capture_output() as output:
    print("Hello World")
    print("Python")

captured = output.getvalue()
print(f"Captured: {captured}")
```

### Ví dụ 5: Environment variables

```python
from contextlib import contextmanager
import os

@contextmanager
def set_env(**kwargs):
    old_env = {}
    for key, value in kwargs.items():
        old_env[key] = os.environ.get(key)
        os.environ[key] = value

    try:
        yield
    finally:
        for key, value in old_env.items():
            if value is None:
                os.environ.pop(key, None)
            else:
                os.environ[key] = value

# Sử dụng
with set_env(DEBUG="true", ENV="test"):
    print(os.environ.get("DEBUG"))  # true
    print(os.environ.get("ENV"))    # test
# Các biến môi trường được restore
```

### Ví dụ 6: Atomic file write

```python
from contextlib import contextmanager
import os
import tempfile

@contextmanager
def atomic_write(filepath):
    temp_path = filepath + '.tmp'
    with open(temp_path, 'w') as file:
        yield file
    os.replace(temp_path, filepath)

# Sử dụng
with atomic_write("important.txt") as f:
    f.write("Critical data\n")
    f.write("More data\n")
# File chỉ được ghi nếu không có lỗi
```

## 9. Nested Context Managers

### 9.1 - Cách 1: Nhiều with

```python
with open("file1.txt", "r") as f1:
    with open("file2.txt", "r") as f2:
        with open("output.txt", "w") as fout:
            fout.write(f1.read())
            fout.write(f2.read())
```

### 9.2 - Cách 2: Single with

```python
with open("file1.txt", "r") as f1, \
     open("file2.txt", "r") as f2, \
     open("output.txt", "w") as fout:
    fout.write(f1.read())
    fout.write(f2.read())
```

### 9.3 - Cách 3: ExitStack

```python
from contextlib import ExitStack

# Mở nhiều file động
files_to_open = ["file1.txt", "file2.txt", "file3.txt"]

with ExitStack() as stack:
    files = [stack.enter_context(open(f, 'r')) for f in files_to_open]
    # Làm việc với tất cả file
    for file in files:
        print(file.read())
# Tất cả file tự động đóng
```

## 10. Best Practices

### 1. Luôn dùng with cho file

```python
# TỐT
with open("file.txt", "r") as file:
    content = file.read()

# TRÁNH
file = open("file.txt", "r")
content = file.read()
file.close()
```

### 2. Dùng contextmanager cho code đơn giản

```python
# TỐT - Đơn giản, dễ đọc
from contextlib import contextmanager

@contextmanager
def simple_context():
    print("Setup")
    yield
    print("Cleanup")

# Không cần dùng class cho trường hợp đơn giản
```

### 3. Return False trong __exit__ nếu không suppress

```python
def __exit__(self, exc_type, exc_value, traceback):
    # Cleanup code
    self.cleanup()
    return False  # Không suppress exception
```

### 4. Dùng try-finally trong contextmanager

```python
@contextmanager
def my_context():
    setup()
    try:
        yield value
    finally:
        cleanup()  # Luôn chạy, ngay cả khi có exception
```

### 5. Đặt tên rõ ràng

```python
# TỐT
with open_database_connection("mydb") as conn:
    pass

# TRÁNH
with db("mydb") as c:
    pass
```

## 11. So sánh Context Manager vs Try-Finally

### Không dùng Context Manager

```python
resource = acquire_resource()
try:
    use_resource(resource)
finally:
    release_resource(resource)
```

### Dùng Context Manager

```python
with acquire_resource() as resource:
    use_resource(resource)
# Tự động release, code sạch hơn
```

## 12. Khi nào nên tạo Context Manager?

Tạo Context Manager khi bạn có:
1. **Setup/Cleanup logic**: Cần khởi tạo và dọn dẹp tài nguyên
2. **State management**: Cần lưu và restore trạng thái
3. **Resource management**: File, connection, lock, etc.
4. **Error handling**: Cần xử lý lỗi một cách nhất quán
5. **Code reuse**: Logic setup/cleanup được dùng nhiều lần

## Bài giảng trên YouTube

Cập nhật sau
