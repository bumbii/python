# Chuỗi ký tự (String)

Chuỗi (string) là một trong những kiểu dữ liệu quan trọng nhất trong Python. Chuỗi được sử dụng để lưu trữ và xử lý văn bản.

## 1. Tạo chuỗi (Creating Strings)

### Sử dụng dấu nháy đơn hoặc nháy kép

```python
# Dấu nháy đơn
single_quote = 'Hello Python'
print(single_quote)  # Hello Python

# Dấu nháy kép
double_quote = "Hello Python"
print(double_quote)  # Hello Python

# Cả hai đều giống nhau
print(type(single_quote))  # <class 'str'>
print(type(double_quote))  # <class 'str'>
```

### Khi nào dùng dấu nháy đơn, khi nào dùng dấu nháy kép?

```python
# Dùng dấu nháy đơn khi chuỗi chứa dấu nháy kép
message1 = 'He said "Hello"'
print(message1)  # He said "Hello"

# Dùng dấu nháy kép khi chuỗi chứa dấu nháy đơn (dấu lược)
message2 = "It's a beautiful day"
print(message2)  # It's a beautiful day

# Hoặc dùng ký tự thoát (escape character) \
message3 = 'It\'s a beautiful day'
print(message3)  # It's a beautiful day
```

### Chuỗi nhiều dòng (Multi-line Strings)

```python
# Sử dụng ba dấu nháy đơn hoặc kép
multi_line1 = '''Đây là chuỗi
có nhiều dòng
trong Python'''
print(multi_line1)

multi_line2 = """Dòng 1
Dòng 2
Dòng 3"""
print(multi_line2)
```

### Chuỗi rỗng (Empty String)

```python
empty_str1 = ''
empty_str2 = ""
empty_str3 = str()

print(len(empty_str1))  # 0
print(len(empty_str2))  # 0
print(len(empty_str3))  # 0
```

## 2. Ký tự thoát (Escape Characters)

Ký tự thoát bắt đầu bằng dấu gạch chéo ngược `\`

```python
# \n - Xuống dòng (newline)
print("Dòng 1\nDòng 2")
# Dòng 1
# Dòng 2

# \t - Tab ngang
print("Tên\tTuổi\tLớp")
print("An\t20\t10A")
# Tên    Tuổi    Lớp
# An     20      10A

# \\ - Dấu gạch chéo ngược
print("Đường dẫn: C:\\Users\\Documents")
# Đường dẫn: C:\Users\Documents

# \' - Dấu nháy đơn
print('It\'s sunny')  # It's sunny

# \" - Dấu nháy kép
print("He said \"Hi\"")  # He said "Hi"

# \r - Carriage return
print("Python\rJava")  # Java (ghi đè lên Python)

# \b - Backspace
print("Hello\b World")  # Hell World
```

### Raw String (Chuỗi thô)

Dùng `r` hoặc `R` trước chuỗi để bỏ qua ký tự thoát:

```python
# Không dùng raw string
path1 = "C:\Users\name\Documents"
print(path1)  # C:\Users
ame\Documents (sai do \n, \D)

# Dùng raw string
path2 = r"C:\Users\name\Documents"
print(path2)  # C:\Users\name\Documents (đúng)

# Hữu ích cho regular expressions
pattern = r"\d+\.\d+"  # Pattern để tìm số thập phân
print(pattern)  # \d+\.\d+
```

## 3. Truy cập ký tự trong chuỗi (Indexing)

Chuỗi trong Python được đánh chỉ số (index) bắt đầu từ 0.

```python
text = "Python"

# Chỉ số dương (từ trái sang phải)
print(text[0])  # P (ký tự đầu tiên)
print(text[1])  # y
print(text[2])  # t
print(text[5])  # n (ký tự cuối cùng)

# Chỉ số âm (từ phải sang trái)
print(text[-1])  # n (ký tự cuối)
print(text[-2])  # o
print(text[-6])  # P (ký tự đầu)
```

### Sơ đồ chỉ số

```
 P   y   t   h   o   n
 0   1   2   3   4   5   (chỉ số dương)
-6  -5  -4  -3  -2  -1   (chỉ số âm)
```

## 4. Slicing (Cắt chuỗi)

Cú pháp: `string[start:stop:step]`

```python
text = "Python Programming"

# Lấy từ vị trí start đến stop-1
print(text[0:6])    # Python
print(text[7:18])   # Programming

# Bỏ qua start (mặc định từ đầu)
print(text[:6])     # Python

# Bỏ qua stop (mặc định đến cuối)
print(text[7:])     # Programming

# Lấy toàn bộ chuỗi
print(text[:])      # Python Programming

# Sử dụng chỉ số âm
print(text[-11:])   # Programming
print(text[:-12])   # Python

# Sử dụng step (bước nhảy)
print(text[0:6:1])  # Python (mỗi ký tự)
print(text[0:6:2])  # Pto (ký tự cách 1)
print(text[::2])    # Pto rgamn (toàn bộ, cách 1)

# Đảo ngược chuỗi
print(text[::-1])   # gnimmargorP nohtyP
```

## 5. Độ dài chuỗi (String Length)

```python
text = "Hello Python"

# Hàm len() trả về số ký tự
length = len(text)
print(length)  # 12

# Ký tự cuối cùng
last_char = text[len(text) - 1]
print(last_char)  # n

# Hoặc dùng chỉ số âm
last_char = text[-1]
print(last_char)  # n
```

## 6. Nối chuỗi (Concatenation)

### Sử dụng toán tử +

```python
first_name = "Nguyen"
last_name = "Van A"

# Nối chuỗi
full_name = first_name + " " + last_name
print(full_name)  # Nguyen Van A

# Nối nhiều chuỗi
greeting = "Hello" + ", " + "World" + "!"
print(greeting)  # Hello, World!
```

### Sử dụng toán tử *

```python
# Lặp lại chuỗi
repeat = "Ha" * 3
print(repeat)  # HaHaHa

line = "-" * 20
print(line)  # --------------------

# Tạo dòng phân cách
separator = "=" * 50
print(separator)
```

## 7. Kiểm tra chuỗi con (Substring)

### Toán tử in

```python
text = "Python Programming"

# Kiểm tra chuỗi con có tồn tại không
print("Python" in text)      # True
print("Java" in text)        # False
print("python" in text)      # False (phân biệt hoa thường)

# Toán tử not in
print("Java" not in text)    # True
print("Python" not in text)  # False
```

### Các phương thức tìm kiếm

```python
text = "Python Programming"

# find() - Tìm vị trí đầu tiên, trả về -1 nếu không tìm thấy
pos1 = text.find("Pro")
print(pos1)  # 7

pos2 = text.find("Java")
print(pos2)  # -1

# index() - Giống find() nhưng báo lỗi nếu không tìm thấy
pos3 = text.index("Pro")
print(pos3)  # 7

# pos4 = text.index("Java")  # ValueError!

# count() - Đếm số lần xuất hiện
count = text.count("o")
print(count)  # 2
```

## 8. So sánh chuỗi

```python
str1 = "apple"
str2 = "banana"
str3 = "apple"

# So sánh bằng
print(str1 == str3)  # True
print(str1 == str2)  # False

# So sánh không bằng
print(str1 != str2)  # True

# So sánh thứ tự từ điển (alphabetical)
print(str1 < str2)   # True (a < b)
print(str1 > str2)   # False

# Phân biệt hoa thường
print("Apple" == "apple")  # False
print("Apple".lower() == "apple".lower())  # True
```

## 9. Các phương thức cơ bản của chuỗi

### Chuyển đổi chữ hoa/thường

```python
text = "Python Programming"

# Chữ hoa
print(text.upper())      # PYTHON PROGRAMMING

# Chữ thường
print(text.lower())      # python programming

# Viết hoa chữ cái đầu
print(text.capitalize()) # Python programming

# Viết hoa chữ cái đầu mỗi từ
print(text.title())      # Python Programming

# Đảo ngược hoa/thường
print(text.swapcase())   # pYTHON pROGRAMMING
```

### Loại bỏ khoảng trắng

```python
text = "   Hello Python   "

# Loại bỏ khoảng trắng 2 đầu
print(text.strip())      # "Hello Python"

# Loại bỏ khoảng trắng bên trái
print(text.lstrip())     # "Hello Python   "

# Loại bỏ khoảng trắng bên phải
print(text.rstrip())     # "   Hello Python"

# Loại bỏ ký tự cụ thể
url = "https://example.com/"
print(url.rstrip('/'))   # https://example.com
```

### Thay thế (Replace)

```python
text = "Hello World"

# Thay thế chuỗi con
new_text = text.replace("World", "Python")
print(new_text)  # Hello Python

# Thay thế nhiều lần
text2 = "one one one"
new_text2 = text2.replace("one", "two")
print(new_text2)  # two two two

# Giới hạn số lần thay thế
text3 = "one one one"
new_text3 = text3.replace("one", "two", 2)
print(new_text3)  # two two one
```

### Tách và nối chuỗi

```python
# split() - Tách chuỗi thành list
sentence = "Python is awesome"
words = sentence.split()  # Tách theo khoảng trắng
print(words)  # ['Python', 'is', 'awesome']

csv_data = "An,20,Ha Noi"
data = csv_data.split(",")  # Tách theo dấu phẩy
print(data)  # ['An', '20', 'Ha Noi']

# join() - Nối list thành chuỗi
words = ['Python', 'is', 'awesome']
sentence = " ".join(words)
print(sentence)  # Python is awesome

items = ['apple', 'banana', 'orange']
result = ", ".join(items)
print(result)  # apple, banana, orange
```

## 10. Kiểm tra kiểu ký tự

```python
# isalpha() - Chỉ chứa chữ cái
print("Python".isalpha())    # True
print("Python3".isalpha())   # False

# isdigit() - Chỉ chứa số
print("123".isdigit())       # True
print("12.3".isdigit())      # False

# isalnum() - Chỉ chứa chữ cái và số
print("Python3".isalnum())   # True
print("Python 3".isalnum())  # False (có khoảng trắng)

# isspace() - Chỉ chứa khoảng trắng
print("   ".isspace())       # True
print("  a ".isspace())      # False

# islower() - Tất cả chữ thường
print("python".islower())    # True
print("Python".islower())    # False

# isupper() - Tất cả chữ hoa
print("PYTHON".isupper())    # True
print("Python".isupper())    # False
```

## 11. F-string (Formatted String Literals)

Python 3.6+ hỗ trợ f-string để format chuỗi dễ dàng:

```python
name = "An"
age = 20
city = "Ha Noi"

# F-string cơ bản
message = f"Tên: {name}, Tuổi: {age}, Thành phố: {city}"
print(message)  # Tên: An, Tuổi: 20, Thành phố: Ha Noi

# Biểu thức trong f-string
x = 10
y = 5
print(f"{x} + {y} = {x + y}")  # 10 + 5 = 15

# Format số
price = 1234567.89
print(f"Giá: {price:,.2f} VND")  # Giá: 1,234,567.89 VND

# Căn chỉnh
print(f"{'Left':<10}|")    # Left      |
print(f"{'Center':^10}|")  #   Center  |
print(f"{'Right':>10}|")   #      Right|
```

## 12. Chuỗi là bất biến (Immutable)

Chuỗi trong Python không thể thay đổi sau khi tạo:

```python
text = "Python"

# Không thể thay đổi ký tự
# text[0] = 'J'  # TypeError!

# Phải tạo chuỗi mới
new_text = 'J' + text[1:]
print(new_text)  # Jython

# Hoặc dùng replace()
text = text.replace('P', 'J')
print(text)  # Jython
```

## 13. Bài tập thực hành

### Bài 1: Đảo ngược tên

```python
name = input("Nhập tên của bạn: ")
reversed_name = name[::-1]
print(f"Tên đảo ngược: {reversed_name}")
```

### Bài 2: Đếm nguyên âm

```python
text = input("Nhập chuỗi: ")
vowels = "aeiouAEIOU"
count = sum(1 for char in text if char in vowels)
print(f"Số nguyên âm: {count}")
```

### Bài 3: Kiểm tra palindrome

```python
text = input("Nhập chuỗi: ")
cleaned = text.replace(" ", "").lower()
if cleaned == cleaned[::-1]:
    print(f"'{text}' là palindrome")
else:
    print(f"'{text}' không phải palindrome")
```

### Bài 4: Ẩn số điện thoại

```python
phone = "0123456789"
hidden = phone[:3] + "*" * (len(phone) - 6) + phone[-3:]
print(hidden)  # 012****789
```

## Tổng kết

- Chuỗi được tạo bằng dấu nháy đơn `''` hoặc nháy kép `""`
- Chuỗi nhiều dòng dùng ba dấu nháy `'''` hoặc `"""`
- Indexing: `string[index]`, bắt đầu từ 0
- Slicing: `string[start:stop:step]`
- Chuỗi là **immutable** (không thể thay đổi)
- Dùng `+` để nối chuỗi, `*` để lặp lại
- Nhiều phương thức hữu ích: `upper()`, `lower()`, `strip()`, `split()`, `replace()`, v.v.
- F-string (`f"..."`) là cách format chuỗi hiện đại và dễ đọc

Để tìm hiểu chi tiết hơn về các phương thức và cách format chuỗi, hãy xem các bài:
- **Các phương thức của String**
- **Định dạng chuỗi (String Formatting)**
