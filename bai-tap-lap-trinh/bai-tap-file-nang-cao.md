---
description: Các bài tập về File Operations - Nâng cao
icon: file
---

# Bài tập File Operations - Nâng cao

1. Viết hàm **`file_backup`** tạo backup file với timestamp.

```python
from datetime import datetime

def file_backup(filename):
    # Tạo file backup với tên: filename.backup_YYYYMMDD_HHMMSS
    # Code của bạn ở đây
    pass

# Test
file_backup("important.txt")
# Tạo: important.txt.backup_20251204_143045
```

2. Viết hàm **`chunk_file_reader`** đọc file lớn từng chunk (để tiết kiệm memory).

```python
def chunk_file_reader(filename, chunk_size=1024):
    # Yield từng chunk
    pass

# Test
for chunk in chunk_file_reader("large_file.txt"):
    process(chunk)
```

3. Viết hàm **`diff_files`** so sánh 2 file và trả về các dòng khác nhau.

```python
def diff_files(file1, file2):
    # Code của bạn ở đây
    pass

# Test
differences = diff_files("version1.txt", "version2.txt")
for line_num, line1, line2 in differences:
    print(f"Line {line_num}: '{line1}' vs '{line2}'")
```

4. Viết hàm **`file_statistics`** thống kê chi tiết file (lines, words, chars, most common word).

```python
def file_statistics(filename):
    stats = {
        "lines": 0,
        "words": 0,
        "characters": 0,
        "unique_words": 0,
        "most_common_word": None
    }
    # Code của bạn ở đây
    return stats

# Test
stats = file_statistics("data.txt")
print(stats)
```

5. Viết **`LogRotator`** class quản lý log files với rotation (giới hạn kích thước, tự động tạo file mới).

```python
class LogRotator:
    def __init__(self, base_filename, max_size_mb=10):
        self.base_filename = base_filename
        self.max_size_bytes = max_size_mb * 1024 * 1024
        self.current_file_index = 0

    def write_log(self, message):
        # Ghi log, tự động rotate nếu file quá lớn
        pass

# Test
logger = LogRotator("app.log", max_size_mb=1)
for i in range(10000):
    logger.write_log(f"Log entry {i}")
```

6. Viết hàm **`find_and_replace_multiple`** thay thế nhiều pattern cùng lúc trong file.

```python
def find_and_replace_multiple(filename, replacements):
    # replacements: dict {"old1": "new1", "old2": "new2"}
    pass

# Test
replacements = {
    "Python 2": "Python 3",
    "old_api": "new_api",
    "deprecated": "current"
}
find_and_replace_multiple("code.txt", replacements)
```

7. Viết hàm **`csv_to_dict`** đọc CSV file thành list of dictionaries (không dùng csv module).

```python
def csv_to_dict(filename):
    # Dòng đầu là header
    # Trả về list of dicts
    pass

# Test
data = csv_to_dict("data.csv")
# [{"name": "Alice", "age": "25"}, {"name": "Bob", "age": "30"}]
```

8. Viết hàm **`dict_to_csv`** ghi list of dictionaries ra CSV file.

```python
def dict_to_csv(filename, data):
    # data: list of dicts
    # Dòng đầu là header (keys của dict đầu tiên)
    pass

# Test
data = [
    {"name": "Alice", "age": 25, "city": "Hanoi"},
    {"name": "Bob", "age": 30, "city": "HCMC"}
]
dict_to_csv("output.csv", data)
```

9. Viết **`FileWatcher`** theo dõi thay đổi của file và callback khi có thay đổi.

```python
import time
import os

class FileWatcher:
    def __init__(self, filename, callback):
        self.filename = filename
        self.callback = callback
        self.last_modified = os.path.getmtime(filename)

    def watch(self, interval=1):
        while True:
            current_modified = os.path.getmtime(self.filename)
            if current_modified != self.last_modified:
                self.callback(self.filename)
                self.last_modified = current_modified
            time.sleep(interval)

# Test
def on_file_changed(filename):
    print(f"{filename} has been modified!")

watcher = FileWatcher("monitored.txt", on_file_changed)
# watcher.watch()  # Chạy trong thread riêng
```

10. Viết hàm **`extract_code_blocks`** trích xuất code blocks từ Markdown file.

```python
def extract_code_blocks(filename, language=None):
    # Trích xuất tất cả code blocks ```language ... ```
    # Trả về list of tuples: (language, code)
    pass

# Test
blocks = extract_code_blocks("README.md", "python")
for lang, code in blocks:
    print(f"Language: {lang}")
    print(code)
```

11. Viết hàm **`file_encryption`** và **`file_decryption`** mã hóa/giải mã file đơn giản.

```python
def file_encryption(input_file, output_file, key):
    # Mã hóa đơn giản (XOR với key)
    pass

def file_decryption(input_file, output_file, key):
    # Giải mã
    pass

# Test
file_encryption("secret.txt", "encrypted.bin", 42)
file_decryption("encrypted.bin", "decrypted.txt", 42)
```

12. Viết hàm **`split_file`** chia file lớn thành nhiều file nhỏ.

```python
def split_file(filename, chunk_size_mb=10):
    # Chia file thành các phần: filename.part1, filename.part2, ...
    pass

# Test
split_file("large_video.mp4", chunk_size_mb=100)
```

13. Viết hàm **`merge_split_files`** ghép các file đã split lại.

```python
def merge_split_files(base_filename, output_filename):
    # Ghép filename.part1, filename.part2, ... thành output_filename
    pass

# Test
merge_split_files("large_video.mp4", "merged_video.mp4")
```

14. Viết **`ConfigManager`** class quản lý config file với validation.

```python
class ConfigManager:
    def __init__(self, config_file):
        self.config_file = config_file
        self.config = {}

    def load(self):
        # Load config từ file
        pass

    def save(self):
        # Save config vào file
        pass

    def get(self, key, default=None):
        # Lấy giá trị config
        pass

    def set(self, key, value):
        # Set giá trị config
        pass

    def validate(self):
        # Validate config
        pass

# Test
config = ConfigManager("app.config")
config.load()
config.set("database_url", "localhost:5432")
config.save()
```

15. Viết hàm **`tail_file`** hiển thị n dòng cuối của file (như lệnh tail trong Linux).

```python
def tail_file(filename, n=10):
    # Trả về n dòng cuối
    pass

# Test
last_lines = tail_file("log.txt", 5)
for line in last_lines:
    print(line)
```

16. Viết hàm **`word_frequency_analysis`** phân tích tần suất từ và xuất báo cáo.

```python
def word_frequency_analysis(filename, output_file="report.txt"):
    # Phân tích và tạo báo cáo:
    # - Top 20 từ xuất hiện nhiều nhất
    # - Độ dài trung bình của từ
    # - Tổng số từ unique
    pass

# Test
word_frequency_analysis("book.txt", "analysis_report.txt")
```

17. Viết **`TemplateEngine`** đơn giản thay thế {{variable}} trong template file.

```python
class TemplateEngine:
    def render(self, template_file, output_file, context):
        # Đọc template, thay {{var}} bằng context["var"]
        # Ghi ra output_file
        pass

# Test
engine = TemplateEngine()
context = {"name": "Alice", "age": 25, "city": "Hanoi"}
engine.render("template.html", "output.html", context)
```

18. Viết hàm **`binary_file_compare`** so sánh 2 file binary byte-by-byte.

```python
def binary_file_compare(file1, file2):
    # Trả về True nếu giống hệt, False nếu khác
    # In ra vị trí byte đầu tiên khác nhau
    pass

# Test
result = binary_file_compare("image1.png", "image2.png")
```

19. Viết **`FileCache`** class cache nội dung file với TTL (time-to-live).

```python
import time

class FileCache:
    def __init__(self, ttl_seconds=60):
        self.cache = {}
        self.ttl = ttl_seconds

    def get(self, filename):
        # Lấy từ cache nếu còn hạn, không thì đọc file
        pass

    def invalidate(self, filename):
        # Xoá cache của file
        pass

    def clear(self):
        # Xoá toàn bộ cache
        pass

# Test
cache = FileCache(ttl_seconds=30)
content = cache.get("data.txt")  # Đọc từ file, cache lại
content = cache.get("data.txt")  # Lấy từ cache
```

20. Viết hàm **`sync_directories`** đồng bộ nội dung giữa 2 thư mục.

```python
def sync_directories(source_dir, dest_dir):
    # Copy files mới/thay đổi từ source -> dest
    # Xoá files trong dest không có trong source
    # Báo cáo: files copied, files deleted, files unchanged
    pass

# Test
report = sync_directories("source_folder", "backup_folder")
print(f"Copied: {report['copied']}")
print(f"Deleted: {report['deleted']}")
```

21. Viết **`FileVersionControl`** lưu trữ nhiều phiên bản của file.

```python
class FileVersionControl:
    def __init__(self, tracked_file):
        self.tracked_file = tracked_file
        self.versions_dir = f"{tracked_file}.versions"

    def commit(self, message):
        # Lưu phiên bản hiện tại với message
        pass

    def list_versions(self):
        # List tất cả versions với timestamp và message
        pass

    def restore(self, version_id):
        # Khôi phục về version cũ
        pass

# Test
vcs = FileVersionControl("document.txt")
vcs.commit("Initial version")
# ... modify file ...
vcs.commit("Added new section")
vcs.list_versions()
vcs.restore(1)
```

22. Viết hàm **`file_compression`** nén/giải nén file text đơn giản (không dùng thư viện).

```python
def compress_file(input_file, output_file):
    # Run-length encoding hoặc simple compression
    pass

def decompress_file(input_file, output_file):
    # Giải nén
    pass

# Test
compress_file("large.txt", "compressed.dat")
decompress_file("compressed.dat", "decompressed.txt")
```

23. Viết hàm **`extract_links`** trích xuất tất cả links từ HTML file.

```python
def extract_links(html_file):
    # Tìm tất cả <a href="..."> và trả về list URLs
    # Không dùng thư viện parsing
    pass

# Test
links = extract_links("webpage.html")
for link in links:
    print(link)
```

24. Viết **`FileIndexer`** tạo index để tìm kiếm nhanh trong nhiều files.

```python
class FileIndexer:
    def __init__(self):
        self.index = {}  # {word: [(file, line_num), ...]}

    def index_file(self, filename):
        # Index tất cả từ trong file
        pass

    def index_directory(self, directory):
        # Index tất cả files trong thư mục
        pass

    def search(self, word):
        # Tìm kiếm và trả về [(file, line_num), ...]
        pass

    def save_index(self, index_file):
        # Lưu index vào file
        pass

    def load_index(self, index_file):
        # Load index từ file
        pass

# Test
indexer = FileIndexer()
indexer.index_directory("documents/")
results = indexer.search("Python")
for filename, line_num in results:
    print(f"{filename}:{line_num}")
```

25. Viết **`SmartFileReader`** tự động detect encoding và đọc file.

```python
class SmartFileReader:
    @staticmethod
    def detect_encoding(filename):
        # Thử các encoding phổ biến: utf-8, utf-16, latin-1
        pass

    @staticmethod
    def read(filename):
        # Tự động detect encoding và đọc
        pass

# Test
content = SmartFileReader.read("unknown_encoding.txt")
print(content)
```
