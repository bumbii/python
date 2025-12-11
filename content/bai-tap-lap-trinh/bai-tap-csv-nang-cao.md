---
description: Bài tập về CSV - Nâng cao
icon: table
---


# Bài tập CSV - Nâng cao

1. Viết function **`merge_csv_files(file1, file2, output_file)`** gộp hai file CSV có cùng cấu trúc.

```python
import csv

def merge_csv_files(file1, file2, output_file):
    # Gộp hai file CSV, giữ header chỉ một lần
    pass

# Test
merge_csv_files('students1.csv', 'students2.csv', 'all_students.csv')
```

2. Viết function **`csv_to_dict_by_key(filename, key_column)`** chuyển CSV thành dictionary với key là một cột cụ thể.

```python
import csv

def csv_to_dict_by_key(filename, key_column):
    # Trả về dict: {key_value: {column: value, ...}}
    pass

# Test
# employees.csv có cột 'id'
data = csv_to_dict_by_key('employees.csv', 'id')
print(data['101'])  # {'name': 'Alice', 'department': 'IT', ...}
```

3. Viết function **`pivot_csv(input_file, output_file, row_col, col_col, value_col)`** tạo pivot table từ CSV.

```python
import csv
from collections import defaultdict

def pivot_csv(input_file, output_file, row_col, col_col, value_col):
    # Tạo pivot table
    pass

# Test: Pivot sales data by product and month
pivot_csv('sales.csv', 'pivot.csv', 'product', 'month', 'sales')
```

4. Viết function **`csv_groupby(filename, group_column, agg_column, agg_func)`** thực hiện group by và aggregation.

```python
import csv
from collections import defaultdict

def csv_groupby(filename, group_column, agg_column, agg_func='sum'):
    # Group by và tính tổng/trung bình/max/min
    # agg_func: 'sum', 'avg', 'max', 'min', 'count'
    pass

# Test
# Tính tổng sales theo từng product
result = csv_groupby('sales.csv', 'product', 'amount', 'sum')
print(result)  # {'Laptop': 5000, 'Mouse': 500, ...}
```

5. Viết function **`filter_csv(input_file, output_file, filter_func)`** lọc CSV theo điều kiện phức tạp.

```python
import csv

def filter_csv(input_file, output_file, filter_func):
    # filter_func nhận dictionary, trả về True/False
    pass

# Test
# Lọc nhân viên IT có salary > 80000
filter_csv(
    'employees.csv',
    'filtered.csv',
    lambda row: row['department'] == 'IT' and int(row['salary']) > 80000
)
```

6. Viết function **`sort_csv(input_file, output_file, sort_columns, reverse=False)`** sắp xếp CSV theo nhiều cột.

```python
import csv

def sort_csv(input_file, output_file, sort_columns, reverse=False):
    # sort_columns: list of column names
    # Sắp xếp theo thứ tự ưu tiên
    pass

# Test
# Sắp xếp theo department, sau đó theo salary (giảm dần)
sort_csv('employees.csv', 'sorted.csv', ['department', 'salary'], reverse=True)
```

7. Viết function **`csv_join(file1, file2, output_file, key1, key2, join_type='inner')`** thực hiện join hai CSV.

```python
import csv

def csv_join(file1, file2, output_file, key1, key2, join_type='inner'):
    # join_type: 'inner', 'left', 'right', 'outer'
    pass

# Test
# Join employees với departments
csv_join('employees.csv', 'departments.csv', 'result.csv', 'dept_id', 'id', 'inner')
```

8. Viết function **`csv_transpose(input_file, output_file)`** chuyển vị (transpose) CSV.

```python
import csv

def csv_transpose(input_file, output_file):
    # Chuyển hàng thành cột và ngược lại
    pass

# Test
csv_transpose('data.csv', 'transposed.csv')
```

9. Viết function **`csv_dedup(input_file, output_file, key_columns=None)`** loại bỏ dòng trùng lặp.

```python
import csv

def csv_dedup(input_file, output_file, key_columns=None):
    # Nếu key_columns=None, xét trùng toàn bộ dòng
    # Nếu có key_columns, chỉ xét trùng các cột đó
    pass

# Test
csv_dedup('data.csv', 'unique.csv', key_columns=['email'])
```

10. Viết function **`csv_split(input_file, output_prefix, chunk_size)`** chia CSV thành nhiều file nhỏ.

```python
import csv

def csv_split(input_file, output_prefix, chunk_size):
    # Chia thành các file: prefix_1.csv, prefix_2.csv, ...
    # Mỗi file có chunk_size dòng
    pass

# Test
csv_split('large_file.csv', 'chunk', 1000)
# Tạo ra: chunk_1.csv, chunk_2.csv, ...
```

11. Viết function **`csv_column_stats(filename, column_name)`** tính thống kê cho một cột số.

```python
import csv

def csv_column_stats(filename, column_name):
    # Trả về dict: {min, max, avg, median, std_dev}
    pass

# Test
stats = csv_column_stats('sales.csv', 'amount')
print(stats)
# {'min': 10, 'max': 1000, 'avg': 250.5, 'median': 200, 'std_dev': 150.2}
```

12. Viết function **`csv_add_calculated_column(input_file, output_file, new_col_name, calc_func)`** thêm cột tính toán.

```python
import csv

def csv_add_calculated_column(input_file, output_file, new_col_name, calc_func):
    # calc_func nhận dictionary, trả về giá trị mới
    pass

# Test
# Thêm cột 'total' = price * quantity
csv_add_calculated_column(
    'products.csv',
    'products_with_total.csv',
    'total',
    lambda row: float(row['price']) * int(row['quantity'])
)
```

13. Viết function **`csv_to_html_table(filename, output_html)`** chuyển CSV thành bảng HTML.

```python
import csv

def csv_to_html_table(filename, output_html):
    # Tạo file HTML với table
    pass

# Test
csv_to_html_table('data.csv', 'table.html')
```

14. Viết function **`csv_validate(filename, schema)`** kiểm tra tính hợp lệ của CSV theo schema.

```python
import csv

def csv_validate(filename, schema):
    """
    schema = {
        'name': {'type': str, 'required': True},
        'age': {'type': int, 'min': 0, 'max': 150},
        'email': {'type': str, 'pattern': r'.*@.*\..*'}
    }
    Trả về list of errors
    """
    pass

# Test
schema = {
    'name': {'type': str, 'required': True},
    'age': {'type': int, 'min': 0, 'max': 150}
}
errors = csv_validate('students.csv', schema)
if errors:
    print("Errors found:", errors)
```

15. Viết function **`csv_diff(file1, file2, key_column)`** tìm sự khác biệt giữa hai CSV.

```python
import csv

def csv_diff(file1, file2, key_column):
    # Trả về: (added, removed, modified)
    pass

# Test
added, removed, modified = csv_diff('old.csv', 'new.csv', 'id')
print(f"Added: {len(added)}, Removed: {len(removed)}, Modified: {len(modified)}")
```

16. Viết function **`csv_anonymize(input_file, output_file, columns_to_mask)`** ẩn danh hoá dữ liệu.

```python
import csv
import hashlib

def csv_anonymize(input_file, output_file, columns_to_mask):
    # Mask các cột nhạy cảm (email, phone, ...)
    pass

# Test
csv_anonymize('customers.csv', 'anonymous.csv', ['email', 'phone'])
```

17. Viết function **`csv_to_sql_insert(filename, table_name, output_file)`** tạo SQL INSERT statements.

```python
import csv

def csv_to_sql_insert(filename, table_name, output_file):
    # Tạo file .sql với INSERT statements
    pass

# Test
csv_to_sql_insert('employees.csv', 'employees', 'insert.sql')
# Output: INSERT INTO employees (name, age) VALUES ('Alice', 25);
```

18. Viết function **`csv_time_series_resample(filename, date_column, value_column, freq)`** resample time series data.

```python
import csv
from datetime import datetime
from collections import defaultdict

def csv_time_series_resample(filename, date_column, value_column, freq='day'):
    # freq: 'day', 'week', 'month'
    # Aggregate data by time period
    pass

# Test
# Resample daily sales to monthly
result = csv_time_series_resample('daily_sales.csv', 'date', 'sales', 'month')
```

19. Viết function **`csv_handle_encoding(input_file, output_file, input_encoding, output_encoding)`** chuyển đổi encoding.

```python
import csv

def csv_handle_encoding(input_file, output_file, input_encoding='latin1', output_encoding='utf-8'):
    # Đọc với encoding này, ghi với encoding kia
    pass

# Test
csv_handle_encoding('old_format.csv', 'utf8_format.csv', 'latin1', 'utf-8')
```

20. Viết class **`CSVProcessor`** với các method xử lý CSV nâng cao.

```python
import csv

class CSVProcessor:
    def __init__(self, filename):
        self.filename = filename
        self.data = []
        self.load()

    def load(self):
        # Load CSV vào memory
        pass

    def filter(self, condition):
        # Lọc dữ liệu
        pass

    def sort(self, columns):
        # Sắp xếp
        pass

    def group_by(self, column, agg_func):
        # Group by và aggregate
        pass

    def save(self, output_file):
        # Lưu kết quả
        pass

# Test
processor = CSVProcessor('sales.csv')
processor.filter(lambda row: float(row['amount']) > 1000)
processor.sort(['date', 'amount'])
processor.save('filtered_sorted.csv')
```

> **💡 **Tips nâng cao:**
- Xử lý file lớn: đọc từng chunk thay vì load toàn bộ vào memory
- Dùng `csv.Sniffer()` để tự động phát hiện delimiter và format
- Xử lý encoding errors với `errors='ignore'` hoặc `errors='replace'`
- Dùng pandas cho xử lý CSV phức tạp (nếu được phép)**
