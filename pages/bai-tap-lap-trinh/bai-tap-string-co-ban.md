---
description: Các bài tập về String Methods và Formatting - Cơ bản
icon: text
---


# Bài tập String - Cơ bản

1. Viết hàm **`to_uppercase`** chuyển một chuỗi thành chữ HOA.

```python
def to_uppercase(text):
    # Code của bạn ở đây
    pass

# Test
print(to_uppercase("hello world"))  # "HELLO WORLD"
```

2. Viết hàm **`to_lowercase`** chuyển một chuỗi thành chữ thường.

3. Viết hàm **`capitalize_first`** viết hoa chữ cái đầu tiên của chuỗi.

4. Viết hàm **`count_spaces`** đếm số khoảng trắng trong một chuỗi.

```python
def count_spaces(text):
    # Code của bạn ở đây
    pass

# Test
print(count_spaces("Hello World Python"))  # 2
```

5. Viết hàm **`starts_with_vowel`** kiểm tra xem chuỗi có bắt đầu bằng nguyên âm (a, e, i, o, u) không.

```python
def starts_with_vowel(text):
    # Code của bạn ở đây
    pass

# Test
print(starts_with_vowel("apple"))  # True
print(starts_with_vowel("banana"))  # False
```

6. Viết hàm **`ends_with_extension`** kiểm tra xem tên file có đúng extension không.

```python
def ends_with_extension(filename, extension):
    # Code của bạn ở đây
    pass

# Test
print(ends_with_extension("document.pdf", ".pdf"))  # True
print(ends_with_extension("image.jpg", ".png"))     # False
```

7. Viết hàm **`is_all_digits`** kiểm tra xem chuỗi chỉ chứa chữ số hay không.

```python
def is_all_digits(text):
    # Code của bạn ở đây
    pass

# Test
print(is_all_digits("12345"))   # True
print(is_all_digits("123a5"))   # False
```

8. Viết hàm **`replace_spaces`** thay thế tất cả khoảng trắng bằng dấu gạch ngang.

```python
def replace_spaces(text):
    # Code của bạn ở đây
    pass

# Test
print(replace_spaces("Hello World Python"))
# "Hello-World-Python"
```

9. Viết hàm **`split_words`** tách chuỗi thành list các từ.

```python
def split_words(text):
    # Code của bạn ở đây
    pass

# Test
print(split_words("Hello World Python"))
# ["Hello", "World", "Python"]
```

10. Viết hàm **`join_words`** nối list các từ thành chuỗi, cách nhau bởi khoảng trắng.

```python
def join_words(words):
    # Code của bạn ở đây
    pass

# Test
words = ["Hello", "World", "Python"]
print(join_words(words))  # "Hello World Python"
```

11. Viết hàm **`remove_spaces`** xoá tất cả khoảng trắng ở đầu và cuối chuỗi.

```python
def remove_spaces(text):
    # Code của bạn ở đây
    pass

# Test
print(f"'{remove_spaces('  Hello  ')}'")  # "'Hello'"
```

12. Viết hàm **`find_position`** tìm vị trí đầu tiên của một từ trong chuỗi.

```python
def find_position(text, word):
    # Code của bạn ở đây
    pass

# Test
print(find_position("Hello World", "World"))  # 6
print(find_position("Hello World", "Python")) # -1
```

13. Viết hàm **`count_word`** đếm số lần xuất hiện của một từ trong chuỗi.

```python
def count_word(text, word):
    # Code của bạn ở đây
    pass

# Test
text = "hello world hello python hello"
print(count_word(text, "hello"))  # 3
```

14. Viết hàm **`format_name`** sử dụng f-string để tạo câu giới thiệu.

```python
def format_name(name, age):
    # Code của bạn ở đây (dùng f-string)
    pass

# Test
print(format_name("Alice", 25))
# "My name is Alice and I am 25 years old"
```

15. Viết hàm **`format_price`** format giá tiền với 2 chữ số thập phân.

```python
def format_price(price):
    # Code của bạn ở đây
    pass

# Test
print(format_price(1234.5))     # "1234.50"
print(format_price(99.999))     # "100.00"
```

16. Viết hàm **`format_table_row`** format một hàng trong bảng với độ rộng cố định.

```python
def format_table_row(name, score):
    # Name: căn trái 20 ký tự
    # Score: căn phải 10 ký tự
    pass

# Test
print(format_table_row("Alice", 95.5))
# "Alice                     95.5"
```

17. Viết hàm **`repeat_char`** lặp lại một ký tự n lần.

```python
def repeat_char(char, n):
    # Code của bạn ở đây
    pass

# Test
print(repeat_char("*", 10))  # "**********"
```

18. Viết hàm **`center_text`** căn giữa văn bản với độ rộng cho trước.

```python
def center_text(text, width):
    # Code của bạn ở đây
    pass

# Test
print(f"'{center_text('Hello', 20)}'")
# "'       Hello        '"
```

19. Viết hàm **`add_line_numbers`** thêm số thứ tự vào mỗi dòng.

```python
def add_line_numbers(text):
    # Code của bạn ở đây
    pass

# Test
text = "Line one
Line two
Line three"
print(add_line_numbers(text))
# "1. Line one"
# "2. Line two"
# "3. Line three"
```

20. Viết hàm **`is_palindrome`** kiểm tra xem chuỗi có phải là palindrome không (đọc xuôi ngược giống nhau).

```python
def is_palindrome(text):
    # Code của bạn ở đây
    # Loại bỏ khoảng trắng và không phân biệt hoa thường
    pass

# Test
print(is_palindrome("racecar"))  # True
print(is_palindrome("hello"))    # False
print(is_palindrome("A man a plan a canal Panama"))  # True
```

> **💡 Gợi ý: Dùng slicing `[::-1]` để đảo ngược chuỗi**
