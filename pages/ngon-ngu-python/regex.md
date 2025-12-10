---
icon: magnifying-glass
---

# Regular Expressions (Regex)

## 1. Giới thiệu

**Regular Expression** (biểu thức chính quy), thường gọi tắt là **Regex**, là một công cụ mạnh mẽ để tìm kiếm, so khớp và xử lý chuỗi theo các mẫu (pattern).

**Regex giúp bạn:**
- Tìm kiếm văn bản theo mẫu phức tạp
- Validate format (email, số điện thoại, URL,...)
- Thay thế văn bản có điều kiện
- Tách chuỗi theo pattern
- Trích xuất thông tin từ văn bản

## 2. Module re

Python cung cấp module `re` để làm việc với regex:

```python
import re
```

## 3. Các hàm cơ bản

### 3.1 - re.search() - Tìm kiếm

Tìm lần xuất hiện **đầu tiên** của pattern:

```python
import re

text = "My phone is 0123-456-789"
result = re.search(r"\d+", text)

if result:
    print(result.group())  # 0123
    print(result.start())  # 13 (vị trí bắt đầu)
    print(result.end())    # 17 (vị trí kết thúc)
```

### 3.2 - re.match() - So khớp từ đầu

Chỉ so khớp ở **đầu chuỗi**:

```python
import re

text = "Python is great"

# Match thành công
result = re.match(r"Python", text)
print(result.group() if result else "No match")  # Python

# Match thất bại (không ở đầu)
result = re.match(r"is", text)
print(result.group() if result else "No match")  # No match
```

### 3.3 - re.findall() - Tìm tất cả

Trả về **list** tất cả kết quả khớp:

```python
import re

text = "My numbers: 123, 456, 789"
numbers = re.findall(r"\d+", text)
print(numbers)  # ['123', '456', '789']

# Tìm tất cả từ
text = "Hello World Python"
words = re.findall(r"\w+", text)
print(words)  # ['Hello', 'World', 'Python']
```

### 3.4 - re.finditer() - Iterator

Trả về **iterator** của Match objects:

```python
import re

text = "Emails: alice@example.com, bob@test.com"
pattern = r"\w+@\w+\.\w+"

for match in re.finditer(pattern, text):
    print(f"Found: {match.group()} at {match.start()}-{match.end()}")
```

### 3.5 - re.sub() - Thay thế

Thay thế chuỗi khớp với pattern:

```python
import re

text = "My phone is 0123-456-789"
# Thay thế số bằng 'X'
result = re.sub(r"\d", "X", text)
print(result)  # My phone is XXXX-XXX-XXX

# Thay thế với limit
result = re.sub(r"\d", "X", text, count=4)
print(result)  # My phone is XXXX-456-789
```

### 3.6 - re.split() - Tách chuỗi

Tách chuỗi theo pattern:

```python
import re

text = "apple,banana;orange:grape"
fruits = re.split(r"[,;:]", text)
print(fruits)  # ['apple', 'banana', 'orange', 'grape']

# Tách theo khoảng trắng
text = "Hello    World   Python"
words = re.split(r"\s+", text)
print(words)  # ['Hello', 'World', 'Python']
```

## 4. Pattern Syntax (Cú pháp)

### 4.1 - Ký tự đặc biệt

| Pattern | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `.` | Bất kỳ ký tự nào | `a.c` → "abc", "a1c" |
| `^` | Đầu chuỗi | `^Hello` → "Hello world" |
| `$` | Cuối chuỗi | `world$` → "Hello world" |
| `*` | 0 hoặc nhiều lần | `ab*c` → "ac", "abc", "abbc" |
| `+` | 1 hoặc nhiều lần | `ab+c` → "abc", "abbc" |
| `?` | 0 hoặc 1 lần | `ab?c` → "ac", "abc" |
| `\|` | Hoặc (OR) | `cat\|dog` → "cat" hoặc "dog" |

### 4.2 - Character Classes

| Pattern | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `[abc]` | a, b, hoặc c | `[aeiou]` → nguyên âm |
| `[^abc]` | Không phải a, b, c | `[^0-9]` → không phải số |
| `[a-z]` | Từ a đến z | `[a-zA-Z]` → chữ cái |
| `[0-9]` | Từ 0 đến 9 | `[0-9]+` → số |

### 4.3 - Predefined Character Classes

| Pattern | Ý nghĩa | Tương đương |
| --- | --- | --- |
| `\d` | Chữ số | `[0-9]` |
| `\D` | Không phải chữ số | `[^0-9]` |
| `\w` | Chữ/số/underscore | `[a-zA-Z0-9_]` |
| `\W` | Không phải \w | `[^a-zA-Z0-9_]` |
| `\s` | Khoảng trắng | `[ \t\n\r\f\v]` |
| `\S` | Không phải khoảng trắng | `[^ \t\n\r\f\v]` |

### 4.4 - Quantifiers (Bộ lượng từ)

| Pattern | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `{n}` | Chính xác n lần | `\d{3}` → 3 chữ số |
| `{n,}` | Ít nhất n lần | `\d{2,}` → 2+ chữ số |
| `{n,m}` | Từ n đến m lần | `\d{2,4}` → 2-4 chữ số |
| `*` | 0 hoặc nhiều | `\d*` |
| `+` | 1 hoặc nhiều | `\d+` |
| `?` | 0 hoặc 1 | `\d?` |

## 5. Ví dụ Pattern cơ bản

### 5.1 - Tìm số

```python
import re

text = "I have 3 apples and 5 oranges"
numbers = re.findall(r"\d+", text)
print(numbers)  # ['3', '5']
```

### 5.2 - Tìm từ

```python
import re

text = "Hello World! Python123 is_great"
words = re.findall(r"\w+", text)
print(words)  # ['Hello', 'World', 'Python123', 'is_great']

# Chỉ chữ cái
letters_only = re.findall(r"[a-zA-Z]+", text)
print(letters_only)  # ['Hello', 'World', 'Python', 'is', 'great']
```

### 5.3 - Tìm email

```python
import re

text = "Contact: alice@example.com or bob@test.co.uk"
emails = re.findall(r"\w+@\w+\.\w+", text)
print(emails)  # ['alice@example.com', 'bob@test.co']

# Pattern tốt hơn
emails = re.findall(r"[\w.-]+@[\w.-]+\.\w+", text)
print(emails)  # ['alice@example.com', 'bob@test.co.uk']
```

### 5.4 - Tìm URL

```python
import re

text = "Visit https://example.com or http://test.org"
urls = re.findall(r"https?://[\w.-]+", text)
print(urls)  # ['https://example.com', 'http://test.org']
```

### 5.5 - Tìm số điện thoại

```python
import re

text = "Call me at 0123-456-789 or (012) 345-6789"
phones = re.findall(r"\d{3,4}[-\s]?\d{3}[-\s]?\d{3,4}", text)
print(phones)  # ['0123-456-789']

# Pattern phức tạp hơn
phones = re.findall(r"[\d\(\)\s-]+", text)
print(phones)  # ['0123-456-789', '(012) 345-6789']
```

## 6. Groups và Capturing

### 6.1 - Basic Groups

```python
import re

text = "My email is alice@example.com"
match = re.search(r"(\w+)@(\w+\.\w+)", text)

if match:
    print(match.group(0))  # alice@example.com (toàn bộ)
    print(match.group(1))  # alice (group 1)
    print(match.group(2))  # example.com (group 2)
```

### 6.2 - Named Groups

```python
import re

text = "Date: 2024-12-25"
pattern = r"(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})"
match = re.search(pattern, text)

if match:
    print(match.group('year'))   # 2024
    print(match.group('month'))  # 12
    print(match.group('day'))    # 25
    print(match.groupdict())     # {'year': '2024', 'month': '12', 'day': '25'}
```

### 6.3 - Non-capturing Groups

```python
import re

# (?:...) không capture
text = "Price: $100"
match = re.search(r"(?:\$)(\d+)", text)

if match:
    print(match.group(1))  # 100
    # Không có group cho $
```

### 6.4 - Ví dụ: Parse log

```python
import re

log = "[2024-12-10 14:30:45] ERROR: Connection timeout"
pattern = r"\[(?P<date>\d{4}-\d{2}-\d{2}) (?P<time>\d{2}:\d{2}:\d{2})\] (?P<level>\w+): (?P<message>.*)"

match = re.search(pattern, log)
if match:
    print(f"Date: {match.group('date')}")
    print(f"Time: {match.group('time')}")
    print(f"Level: {match.group('level')}")
    print(f"Message: {match.group('message')}")
```

## 7. Flags (Cờ)

### 7.1 - re.IGNORECASE (re.I)

```python
import re

text = "Hello World"
# Không phân biệt hoa thường
result = re.findall(r"hello", text, re.IGNORECASE)
print(result)  # ['Hello']
```

### 7.2 - re.MULTILINE (re.M)

```python
import re

text = """Line 1: Start
Line 2: Middle
Line 3: End"""

# ^ khớp đầu mỗi dòng
results = re.findall(r"^Line \d+", text, re.MULTILINE)
print(results)  # ['Line 1', 'Line 2', 'Line 3']
```

### 7.3 - re.DOTALL (re.S)

```python
import re

text = "Hello\nWorld"

# . không khớp \n
result = re.search(r"Hello.World", text)
print(result)  # None

# . khớp tất cả kể cả \n
result = re.search(r"Hello.World", text, re.DOTALL)
print(result.group())  # Hello\nWorld
```

### 7.4 - re.VERBOSE (re.X)

```python
import re

# Pattern dễ đọc hơn
pattern = r"""
    (\d{3})     # Mã vùng
    [-\s]?      # Dấu gạch ngang hoặc khoảng trắng (tùy chọn)
    (\d{3})     # 3 số tiếp theo
    [-\s]?      # Dấu gạch ngang hoặc khoảng trắng (tùy chọn)
    (\d{4})     # 4 số cuối
"""

text = "Phone: 012-345-6789"
match = re.search(pattern, text, re.VERBOSE)
if match:
    print(match.group(0))  # 012-345-6789
```

### 7.5 - Kết hợp nhiều flags

```python
import re

text = "Hello\nWorld"
result = re.search(r"^hello.world$", text, re.IGNORECASE | re.DOTALL | re.MULTILINE)
print(result.group() if result else "No match")
```

## 8. Ví dụ thực tế

### Ví dụ 1: Validate email

```python
import re

def is_valid_email(email):
    pattern = r"^[\w.-]+@[\w.-]+\.\w+$"
    return re.match(pattern, email) is not None

print(is_valid_email("alice@example.com"))    # True
print(is_valid_email("bob@test.co.uk"))       # True
print(is_valid_email("invalid.email"))        # False
print(is_valid_email("@example.com"))         # False
```

### Ví dụ 2: Validate số điện thoại

```python
import re

def is_valid_phone(phone):
    # Format: 0XXX-XXX-XXX hoặc 0XXX XXX XXX
    pattern = r"^0\d{3}[-\s]?\d{3}[-\s]?\d{3}$"
    return re.match(pattern, phone) is not None

print(is_valid_phone("0123-456-789"))  # True
print(is_valid_phone("0123 456 789"))  # True
print(is_valid_phone("0123456789"))    # True
print(is_valid_phone("123-456-789"))   # False
```

### Ví dụ 3: Trích xuất hashtags

```python
import re

text = "Love #Python and #Programming! #AI is amazing #MachineLearning"
hashtags = re.findall(r"#\w+", text)
print(hashtags)  # ['#Python', '#Programming', '#AI', '#MachineLearning']

# Chỉ lấy text (không có #)
hashtags = re.findall(r"#(\w+)", text)
print(hashtags)  # ['Python', 'Programming', 'AI', 'MachineLearning']
```

### Ví dụ 4: Remove HTML tags

```python
import re

html = "<p>Hello <b>World</b>!</p>"
clean = re.sub(r"<[^>]+>", "", html)
print(clean)  # Hello World!
```

### Ví dụ 5: Extract prices

```python
import re

text = "Items: $10.99, $25, $100.50, and $5"
prices = re.findall(r"\$(\d+\.?\d*)", text)
print(prices)  # ['10.99', '25', '100.50', '5']

# Convert to float
prices = [float(p) for p in prices]
print(f"Total: ${sum(prices):.2f}")  # Total: $141.49
```

### Ví dụ 6: Parse CSV line

```python
import re

csv_line = 'Alice,25,"New York, NY",Engineer'

# Split nhưng bỏ qua dấu phẩy trong quotes
pattern = r',(?=(?:[^"]*"[^"]*")*[^"]*$)'
fields = re.split(pattern, csv_line)
print(fields)  # ['Alice', '25', '"New York, NY"', 'Engineer']

# Clean quotes
fields = [f.strip('"') for f in fields]
print(fields)  # ['Alice', '25', 'New York, NY', 'Engineer']
```

### Ví dụ 7: Password strength

```python
import re

def check_password_strength(password):
    if len(password) < 8:
        return "Quá ngắn (cần ít nhất 8 ký tự)"

    checks = {
        "chữ thường": r"[a-z]",
        "chữ hoa": r"[A-Z]",
        "số": r"\d",
        "ký tự đặc biệt": r"[!@#$%^&*(),.?\":{}|<>]"
    }

    for name, pattern in checks.items():
        if not re.search(pattern, password):
            return f"Thiếu {name}"

    return "Mật khẩu mạnh"

print(check_password_strength("abc"))            # Quá ngắn
print(check_password_strength("abcdefgh"))       # Thiếu chữ hoa
print(check_password_strength("Abcdefgh"))       # Thiếu số
print(check_password_strength("Abcdefgh1"))      # Thiếu ký tự đặc biệt
print(check_password_strength("Abcdefgh1!"))     # Mật khẩu mạnh
```

### Ví dụ 8: Extract URLs from text

```python
import re

text = """
Visit our website at https://example.com
Download from http://files.example.org/file.zip
Check https://blog.example.com/post/123
"""

urls = re.findall(r"https?://[\w.-]+(?:/[\w./?=&-]*)?", text)
for url in urls:
    print(url)
```

### Ví dụ 9: Censor bad words

```python
import re

def censor_text(text, bad_words):
    for word in bad_words:
        pattern = r"\b" + re.escape(word) + r"\b"
        text = re.sub(pattern, "*" * len(word), text, flags=re.IGNORECASE)
    return text

text = "This is a badword and another BADWORD here"
bad_words = ["badword"]
censored = censor_text(text, bad_words)
print(censored)  # This is a ******* and another ******* here
```

### Ví dụ 10: Format phone number

```python
import re

def format_phone(phone):
    # Loại bỏ tất cả ký tự không phải số
    digits = re.sub(r"\D", "", phone)

    # Format: XXXX-XXX-XXX
    if len(digits) == 10:
        return f"{digits[:4]}-{digits[4:7]}-{digits[7:]}"
    return phone  # Giữ nguyên nếu không hợp lệ

print(format_phone("0123456789"))      # 0123-456-789
print(format_phone("012-345-6789"))    # 0123-456-789
print(format_phone("(012) 345-6789"))  # 0123-456-789
```

## 9. Compile Pattern

### 9.1 - Tại sao compile?

```python
import re

# Không compile - phải parse pattern mỗi lần
for text in texts:
    result = re.search(r"\d+", text)

# Compile - parse 1 lần, dùng nhiều lần (nhanh hơn)
pattern = re.compile(r"\d+")
for text in texts:
    result = pattern.search(text)
```

### 9.2 - Ví dụ compile

```python
import re

# Compile pattern
email_pattern = re.compile(r"[\w.-]+@[\w.-]+\.\w+")

texts = [
    "Contact: alice@example.com",
    "Email: bob@test.org",
    "No email here"
]

for text in texts:
    match = email_pattern.search(text)
    if match:
        print(f"Found: {match.group()}")
```

### 9.3 - Compile với flags

```python
import re

pattern = re.compile(r"hello", re.IGNORECASE)
result = pattern.search("HELLO World")
print(result.group())  # HELLO
```

## 10. Lookahead và Lookbehind

### 10.1 - Positive Lookahead (?=...)

```python
import re

# Tìm số theo sau bởi "USD"
text = "Price: 100 USD, 200 EUR, 300 USD"
prices = re.findall(r"\d+(?= USD)", text)
print(prices)  # ['100', '300']
```

### 10.2 - Negative Lookahead (?!...)

```python
import re

# Tìm số KHÔNG theo sau bởi "USD"
text = "Price: 100 USD, 200 EUR, 300 USD"
prices = re.findall(r"\d+(?! USD)", text)
print(prices)  # ['200']
```

### 10.3 - Positive Lookbehind (?<=...)

```python
import re

# Tìm số đứng sau "$"
text = "Prices: $100, €200, $300"
prices = re.findall(r"(?<=\$)\d+", text)
print(prices)  # ['100', '300']
```

### 10.4 - Negative Lookbehind (?<!...)

```python
import re

# Tìm số KHÔNG đứng sau "$"
text = "Prices: $100, 200, $300"
prices = re.findall(r"(?<!\$)\d+", text)
print(prices)  # ['200']
```

## 11. Best Practices

### 1. Dùng raw string

```python
# TỐT - Raw string
pattern = r"\d+\.\d+"

# TRÁNH - Phải escape nhiều lần
pattern = "\\d+\\.\\d+"
```

### 2. Compile pattern khi dùng nhiều lần

```python
# TỐT
pattern = re.compile(r"\d+")
for text in texts:
    result = pattern.search(text)

# TRÁNH (chậm hơn)
for text in texts:
    result = re.search(r"\d+", text)
```

### 3. Dùng named groups

```python
# TỐT - Dễ đọc
pattern = r"(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})"

# TRÁNH
pattern = r"(\d{4})-(\d{2})-(\d{2})"
```

### 4. Không lạm dụng regex

```python
# TỐT - Đơn giản
if "@" in email and "." in email:
    pass

# TRÁNH - Phức tạp không cần thiết
if re.search(r"@.*\.", email):
    pass
```

### 5. Test regex kỹ

```python
# Test với nhiều trường hợp
test_cases = [
    "valid@example.com",
    "invalid.email",
    "another@test.co.uk",
    "@invalid.com"
]

pattern = r"[\w.-]+@[\w.-]+\.\w+"
for email in test_cases:
    result = re.match(pattern, email)
    print(f"{email}: {bool(result)}")
```

## 12. Tools hữu ích

Các website để test regex:
- regex101.com
- regexr.com
- pythex.org

## Bài giảng trên YouTube

Cập nhật sau
