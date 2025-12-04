---
description: Các bài tập về String Methods và Formatting - Nâng cao
icon: text
---


# Bài tập String - Nâng cao

1. Viết hàm **`validate_email`** kiểm tra email hợp lệ (phải có @, kết thúc bằng .com, .vn, hoặc .net).

```python
def validate_email(email):
    # Code của bạn ở đây
    pass

# Test
print(validate_email("user@example.com"))  # True
print(validate_email("invalid-email"))     # False
print(validate_email("user@site.vn"))      # True
```

2. Viết hàm **`clean_phone_number`** chuẩn hóa số điện thoại về dạng: 0xxx-xxx-xxx.

```python
def clean_phone_number(phone):
    # Loại bỏ tất cả ký tự không phải số, format lại
    pass

# Test
print(clean_phone_number("090 123 4567"))     # "0901-234-567"
print(clean_phone_number("(090) 123-4567"))   # "0901-234-567"
```

3. Viết hàm **`title_case`** chuyển chuỗi thành Title Case nhưng giữ nguyên các từ đặc biệt (and, or, the, of) ở chữ thường.

```python
def title_case(text):
    # Code của bạn ở đây
    pass

# Test
print(title_case("the lord of the rings"))
# "The Lord of the Rings"
```

4. Viết hàm **`word_frequency`** đếm tần suất xuất hiện của mỗi từ trong văn bản.

```python
def word_frequency(text):
    # Code của bạn ở đây
    pass

# Test
text = "python is fun and python is easy"
print(word_frequency(text))
# {'python': 2, 'is': 2, 'fun': 1, 'and': 1, 'easy': 1}
```

5. Viết hàm **`longest_word`** tìm từ dài nhất trong chuỗi.

```python
def longest_word(text):
    # Code của bạn ở đây
    pass

# Test
print(longest_word("The quick brown fox jumps"))  # "quick" hoặc "brown"
```

6. Viết hàm **`reverse_words`** đảo ngược thứ tự các từ (không phải đảo ngược từng từ).

```python
def reverse_words(text):
    # Code của bạn ở đây
    pass

# Test
print(reverse_words("Hello World Python"))
# "Python World Hello"
```

7. Viết hàm **`caesar_cipher`** mã hóa chuỗi bằng Caesar cipher (dịch mỗi chữ cái đi n vị trí).

```python
def caesar_cipher(text, shift):
    # Code của bạn ở đây
    pass

# Test
print(caesar_cipher("abc", 3))  # "def"
print(caesar_cipher("xyz", 3))  # "abc"
```

> **💡 Gợi ý: Dùng `ord()` và `chr()` để chuyển đổi ký tự sang mã ASCII và ngược lại**

8. Viết hàm **`create_acronym`** tạo từ viết tắt từ các chữ cái đầu.

```python
def create_acronym(text):
    # Code của bạn ở đây
    pass

# Test
print(create_acronym("Application Programming Interface"))  # "API"
print(create_acronym("as soon as possible"))                 # "ASAP"
```

9. Viết hàm **`snake_to_camel`** chuyển snake_case thành camelCase.

```python
def snake_to_camel(text):
    # Code của bạn ở đây
    pass

# Test
print(snake_to_camel("hello_world_python"))  # "helloWorldPython"
```

10. Viết hàm **`camel_to_snake`** chuyển camelCase thành snake_case.

```python
def camel_to_snake(text):
    # Code của bạn ở đây
    pass

# Test
print(camel_to_snake("helloWorldPython"))  # "hello_world_python"
```

11. Viết hàm **`wrap_text`** ngắt dòng văn bản theo độ dài tối đa.

```python
def wrap_text(text, max_length):
    # Code của bạn ở đây
    pass

# Test
text = "This is a very long sentence that needs to be wrapped"
print(wrap_text(text, 20))
# "This is a very long
sentence that needs
to be wrapped"
```

12. Viết hàm **`remove_html_tags`** loại bỏ các thẻ HTML từ chuỗi.

```python
def remove_html_tags(html):
    # Code của bạn ở đây
    pass

# Test
html = "<p>Hello <b>World</b>!</p>"
print(remove_html_tags(html))  # "Hello World!"
```

13. Viết hàm **`format_currency`** format số tiền với dấu phẩy và ký hiệu tiền tệ.

```python
def format_currency(amount, currency="VND"):
    # Code của bạn ở đây
    pass

# Test
print(format_currency(1234567))        # "1,234,567 VND"
print(format_currency(1234.56, "USD")) # "$1,234.56"
```

14. Viết hàm **`create_slug`** tạo URL slug từ tiêu đề (chuyển thành chữ thường, thay khoảng trắng bằng `-`, loại bỏ ký tự đặc biệt).

```python
def create_slug(title):
    # Code của bạn ở đây
    pass

# Test
print(create_slug("Hello World! Python 2024"))
# "hello-world-python-2024"
```

15. Viết hàm **`highlight_keywords`** bọc các từ khóa trong chuỗi bằng ** (markdown bold).

```python
def highlight_keywords(text, keywords):
    # Code của bạn ở đây
    pass

# Test
text = "Python is a programming language"
keywords = ["Python", "language"]
print(highlight_keywords(text, keywords))
# "**Python** is a programming **language**"
```

16. Viết hàm **`extract_numbers`** trích xuất tất cả các số từ chuỗi.

```python
def extract_numbers(text):
    # Code của bạn ở đây
    pass

# Test
print(extract_numbers("I have 3 apples and 5 oranges"))
# [3, 5]
```

17. Viết hàm **`format_table`** format dữ liệu thành bảng ASCII.

```python
def format_table(data, headers):
    # Code của bạn ở đây
    pass

# Test
data = [
    ["Alice", 25, "Hanoi"],
    ["Bob", 30, "HCMC"],
    ["Charlie", 35, "Danang"]
]
headers = ["Name", "Age", "City"]
print(format_table(data, headers))
# +----------+-----+--------+
# | Name     | Age | City   |
# +----------+-----+--------+
# | Alice    |  25 | Hanoi  |
# | Bob      |  30 | HCMC   |
# | Charlie  |  35 | Danang |
# +----------+-----+--------+
```

18. Viết hàm **`compress_whitespace`** thay thế nhiều khoảng trắng liên tiếp bằng một khoảng trắng.

```python
def compress_whitespace(text):
    # Code của bạn ở đây
    pass

# Test
print(compress_whitespace("Hello    World   Python"))
# "Hello World Python"
```

19. Viết hàm **`mask_sensitive_data`** che giấu dữ liệu nhạy cảm (email, số điện thoại, số thẻ).

```python
def mask_email(email):
    # Hiển thị 2 ký tự đầu và domain
    # user@example.com -> us***@example.com
    pass

def mask_phone(phone):
    # 0901234567 -> 090***4567
    pass

# Test
print(mask_email("user@example.com"))  # "us***@example.com"
print(mask_phone("0901234567"))         # "090***4567"
```

20. Viết hàm **`parse_csv_line`** parse một dòng CSV (xử lý trường hợp có dấu phẩy trong quotes).

```python
def parse_csv_line(line):
    # Code của bạn ở đây
    pass

# Test
line = 'Alice,25,"Hanoi, Vietnam"'
print(parse_csv_line(line))
# ["Alice", "25", "Hanoi, Vietnam"]
```

21. Viết hàm **`levenshtein_distance`** tính khoảng cách Levenshtein giữa hai chuỗi (số thay đổi tối thiểu để biến chuỗi này thành chuỗi kia).

```python
def levenshtein_distance(s1, s2):
    # Code của bạn ở đây
    pass

# Test
print(levenshtein_distance("kitten", "sitting"))  # 3
```

22. Viết hàm **`generate_password`** tạo mật khẩu ngẫu nhiên với độ dài và yêu cầu cho trước.

```python
def generate_password(length, include_numbers=True, include_symbols=True):
    # Code của bạn ở đây
    pass

# Test
print(generate_password(12))  # "aB3#xY9$mN2@"
```

23. Viết hàm **`extract_urls`** trích xuất tất cả URL từ văn bản.

```python
def extract_urls(text):
    # Code của bạn ở đây
    pass

# Test
text = "Visit https://example.com and http://test.org for more info"
print(extract_urls(text))
# ["https://example.com", "http://test.org"]
```

24. Viết hàm **`pluralize`** chuyển từ số ít sang số nhiều (đơn giản hóa tiếng Anh).

```python
def pluralize(word, count):
    # Code của bạn ở đây
    pass

# Test
print(pluralize("apple", 1))   # "1 apple"
print(pluralize("apple", 5))   # "5 apples"
print(pluralize("box", 3))     # "3 boxes"
```

25. Viết hàm **`format_duration`** format thời gian (giây) thành chuỗi dễ đọc.

```python
def format_duration(seconds):
    # Code của bạn ở đây
    pass

# Test
print(format_duration(125))     # "2 minutes, 5 seconds"
print(format_duration(3665))    # "1 hour, 1 minute, 5 seconds"
print(format_duration(90000))   # "1 day, 1 hour, 0 minutes, 0 seconds"
```
