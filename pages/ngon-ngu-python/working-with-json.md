---
icon: curly-brackets
---

# Làm việc với JSON

## 1. Giới thiệu

**JSON (JavaScript Object Notation)** là định dạng văn bản dùng để lưu trữ và truyền tải dữ liệu có cấu trúc. JSON rất phổ biến trong web development và API.

### Tại sao học JSON?
- ✅ Định dạng chuẩn cho Web APIs
- ✅ Dễ đọc cho cả người và máy
- ✅ Hỗ trợ cấu trúc dữ liệu phức tạp (nested)
- ✅ Python hỗ trợ JSON rất tốt

### Ví dụ JSON

```json
{
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "skills": ["Python", "JavaScript", "SQL"],
    "is_student": false
}
```

## 2. Module json

Python có module `json` built-in.

```python
import json
```

## 3. Kiểu dữ liệu JSON vs Python

| JSON | Python |
| --- | --- |
| object `{}` | dict |
| array `[]` | list |
| string | str |
| number (int) | int |
| number (float) | float |
| true | True |
| false | False |
| null | None |

## 4. Chuyển đổi Python → JSON (Serialization)

### 4.1 - json.dumps() - Chuyển object thành string

```python
import json

# Python dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "skills": ["Python", "JavaScript"]
}

# Chuyển thành JSON string
json_string = json.dumps(person)
print(json_string)
# {"name": "Alice", "age": 25, "city": "New York", "skills": ["Python", "JavaScript"]}

print(type(json_string))  # <class 'str'>
```

### 4.2 - json.dumps() với formatting đẹp

```python
import json

person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# indent=4 để format đẹp
json_string = json.dumps(person, indent=4)
print(json_string)
```

**Output:**
```json
{
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
```

### 4.3 - json.dumps() với sort_keys

```python
import json

person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Sắp xếp keys theo alphabet
json_string = json.dumps(person, indent=4, sort_keys=True)
print(json_string)
```

### 4.4 - json.dump() - Ghi trực tiếp vào file

```python
import json

person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Ghi vào file
with open('person.json', 'w', encoding='utf-8') as file:
    json.dump(person, file, indent=4, ensure_ascii=False)
```

**Lưu ý:** `ensure_ascii=False` để hiển thị ký tự tiếng Việt đúng

## 5. Chuyển đổi JSON → Python (Deserialization)

### 5.1 - json.loads() - Chuyển string thành object

```python
import json

# JSON string
json_string = '{"name": "Alice", "age": 25, "city": "New York"}'

# Chuyển thành Python dict
person = json.loads(json_string)
print(person)
print(type(person))  # <class 'dict'>

# Truy cập dữ liệu
print(person['name'])  # Alice
print(person['age'])   # 25
```

### 5.2 - json.load() - Đọc từ file

```python
import json

# Đọc file JSON
with open('person.json', 'r', encoding='utf-8') as file:
    person = json.load(file)

print(person)
print(person['name'])
```

## 6. Làm việc với JSON phức tạp

### 6.1 - Nested JSON

```python
import json

data = {
    "company": "Tech Corp",
    "employees": [
        {
            "name": "Alice",
            "age": 25,
            "skills": ["Python", "JavaScript"]
        },
        {
            "name": "Bob",
            "age": 30,
            "skills": ["Java", "C++"]
        }
    ],
    "location": {
        "city": "New York",
        "country": "USA"
    }
}

# Ghi vào file
with open('company.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=4)

# Đọc và truy cập nested data
with open('company.json', 'r', encoding='utf-8') as file:
    company = json.load(file)

print(company['employees'][0]['name'])  # Alice
print(company['location']['city'])      # New York
```

### 6.2 - List of objects

```python
import json

students = [
    {"name": "Alice", "age": 20, "grade": "A"},
    {"name": "Bob", "age": 22, "grade": "B"},
    {"name": "Charlie", "age": 21, "grade": "A"}
]

# Ghi list vào JSON
with open('students.json', 'w', encoding='utf-8') as file:
    json.dump(students, file, indent=4)

# Đọc và xử lý
with open('students.json', 'r', encoding='utf-8') as file:
    students = json.load(file)

for student in students:
    print(f"{student['name']}: {student['grade']}")
```

## 7. Xử lý ký tự đặc biệt

### 7.1 - Tiếng Việt và Unicode

```python
import json

data = {
    "name": "Nguyễn Văn A",
    "city": "Hà Nội",
    "message": "Xin chào"
}

# ensure_ascii=False để giữ ký tự Unicode
json_string = json.dumps(data, indent=4, ensure_ascii=False)
print(json_string)

# Ghi file với encoding utf-8
with open('vietnamese.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=4, ensure_ascii=False)
```

## 8. Xử lý lỗi

### 8.1 - JSON không hợp lệ

```python
import json

invalid_json = '{"name": "Alice", "age": 25,}'  # Dấu phẩy thừa

try:
    data = json.loads(invalid_json)
except json.JSONDecodeError as e:
    print(f"Lỗi JSON: {e}")
    # Lỗi JSON: Expecting property name enclosed in double quotes: line 1 column 28 (char 27)
```

### 8.2 - File không tồn tại

```python
import json

try:
    with open('nonexistent.json', 'r') as file:
        data = json.load(file)
except FileNotFoundError:
    print("File không tồn tại!")
except json.JSONDecodeError:
    print("File JSON không hợp lệ!")
```

## 9. Làm việc với API

### 9.1 - Đọc JSON từ API (giả lập)

```python
import json

# Giả sử nhận được JSON từ API
api_response = '''
{
    "status": "success",
    "data": {
        "users": [
            {"id": 1, "name": "Alice"},
            {"id": 2, "name": "Bob"}
        ]
    }
}
'''

# Parse JSON
response = json.loads(api_response)

if response['status'] == 'success':
    users = response['data']['users']
    for user in users:
        print(f"ID: {user['id']}, Name: {user['name']}")
```

## 10. JSON với Custom Objects

### 10.1 - Serialize custom class

```python
import json

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

def person_to_dict(person):
    return {
        'name': person.name,
        'age': person.age
    }

# Tạo object
person = Person("Alice", 25)

# Chuyển thành JSON
json_string = json.dumps(person, default=person_to_dict, indent=4)
print(json_string)
```

### 10.2 - Deserialize to custom class

```python
import json

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

def dict_to_person(data):
    return Person(data['name'], data['age'])

# JSON string
json_string = '{"name": "Alice", "age": 25}'

# Parse và tạo object
data = json.loads(json_string)
person = dict_to_person(data)

print(f"{person.name}, {person.age} years old")
```

## 11. Thao tác với JSON

### 11.1 - Thêm dữ liệu vào JSON file

```python
import json

# Đọc file hiện tại
with open('students.json', 'r', encoding='utf-8') as file:
    students = json.load(file)

# Thêm student mới
new_student = {"name": "David", "age": 23, "grade": "B"}
students.append(new_student)

# Ghi lại file
with open('students.json', 'w', encoding='utf-8') as file:
    json.dump(students, file, indent=4, ensure_ascii=False)
```

### 11.2 - Cập nhật dữ liệu

```python
import json

# Đọc file
with open('person.json', 'r', encoding='utf-8') as file:
    person = json.load(file)

# Cập nhật
person['age'] = 26
person['email'] = 'alice@example.com'

# Ghi lại
with open('person.json', 'w', encoding='utf-8') as file:
    json.dump(person, file, indent=4)
```

### 11.3 - Xoá dữ liệu

```python
import json

# Đọc file
with open('person.json', 'r', encoding='utf-8') as file:
    person = json.load(file)

# Xoá key
if 'email' in person:
    del person['email']

# Ghi lại
with open('person.json', 'w', encoding='utf-8') as file:
    json.dump(person, file, indent=4)
```

## 12. So sánh JSON vs CSV

| Feature | JSON | CSV |
| --- | --- | --- |
| Cấu trúc | Phân cấp (nested) | Phẳng (flat) |
| Kiểu dữ liệu | Đa dạng | Chủ yếu text |
| Kích thước | Lớn hơn | Nhỏ hơn |
| Dễ đọc | Trung bình | Cao |
| Sử dụng | API, Config | Data export, Excel |

## 13. Tips và Best Practices

### 1. Luôn dùng encoding utf-8

```python
# ✅ TỐT
with open('data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
```

### 2. Xử lý exception

```python
try:
    with open('data.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
except (FileNotFoundError, json.JSONDecodeError) as e:
    print(f"Error: {e}")
```

### 3. Dùng indent cho dễ đọc

```python
# ✅ TỐT - Dễ đọc
json.dump(data, file, indent=4)
```

### 4. ensure_ascii=False cho tiếng Việt

```python
json.dump(data, file, indent=4, ensure_ascii=False)
```

## 14. Lỗi thường gặp

### Lỗi 1: Quên encoding

```python
# ❌ SAI - Lỗi với tiếng Việt
with open('data.json', 'r') as file:
    data = json.load(file)

# ✅ ĐÚNG
with open('data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
```

### Lỗi 2: Nhầm dumps và dump

```python
# ❌ SAI
json.dumps(data, file)  # dumps không nhận file

# ✅ ĐÚNG
json.dump(data, file)   # dump ghi vào file
```

### Lỗi 3: JSON không hợp lệ

```python
# ❌ SAI - Single quotes không hợp lệ trong JSON
invalid = "{'name': 'Alice'}"

# ✅ ĐÚNG - Phải dùng double quotes
valid = '{"name": "Alice"}'
```
