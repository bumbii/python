---
description: Các quy tắc cần nhớ khi đặt tên hàm trong Python
icon: scale-balanced
---

# Quy tắc đặt tên hàm

Quy tắc đặt tên hàm trong Python khá giống với [Quy tắc đặt tên biến](https://bumbii-academy.gitbook.io/laptrinh/ngon-ngu-python/bien-so#id-3.-quy-tac-dat-ten-bien), nghĩa là:

1. Tên phải bắt đầu bằng một chữ cái hoặc dấu gạch dưới (`_`), <mark style="color:red;">**KHÔNG ĐƯỢC BẮT ĐẦU BẰNG MỘT SỐ**</mark>.
   * Hợp lệ: `say_hello()`, `print_3_numbers()`
   * Không hợp lệ: `3_numbers()` (bắt đầu bằng số)
2. Tên biến chỉ được chứa chữ cái, chữ số và dấu gạch dưới, các ký tự đặc biệt không được dùng (ví dụ: dấu sao `*` , dấu gạch ngang `-`, dấu `#`).
   * Hợp lệ: `print_3_numbers()`, `save_data()`
   * Không hợp lệ: `print-data()`, `say*()`
3. Tên biến có phân biệt chữ hoa, chữ thường. Ví dụ: `print_data()` và `print_Data()` là hai hàm khác nhau.
4. Không được sử dụng từ khóa của Python như `class`, `for`, `if`, v.v..
5. Không được có khoảng trắng trong tên hàm.
   * Không hợp lệ: `say hello()`&#x20;

Tuy quy tắc đặt tên giống nhau, nhưng biến thường dùng để biểu diễn dữ liệu, đối tượng nên thường dùng <mark style="color:red;">**danh từ.**</mark> Trong khi đó, hàm thường dùng để đặt tên cho một công việc, hành động nên thường dùng <mark style="color:red;">**động từ**</mark>.

<table><thead><tr><th width="171">Đặc điểm</th><th width="237">Biến (Variable)</th><th>Hàm (Function)</th></tr></thead><tbody><tr><td><strong>Ý nghĩa tên</strong></td><td>Thường biểu diễn dữ liệu, đối tượng</td><td>Thường biểu diễn hành động, chức năng</td></tr><tr><td><strong>Phong cách đặt tên</strong></td><td>Danh từ hoặc cụm danh từ</td><td>Động từ hoặc động từ + danh từ</td></tr><tr><td><strong>Ví dụ</strong></td><td><code>student_count</code>, <code>average_score</code>, <code>full_name</code></td><td><code>calculate_average()</code>, <code>get_data()</code>, <code>print_report()</code></td></tr></tbody></table>

Ví dụ:

```python
# Biến (variables) - thường là danh từ
student_count = 30
average_score = 8.2

# Hàm (functions) - thường là động từ
def calculate_sum(a, b):
    return a + b

def print_info(name, age):
    print(f"{name}, {age} years old")

# Sử dụng
print("Student count:", student_count)
print("Average score:", average_score)
print("Sum:", calculate_sum(4, 7))
print_info("Alice", 20)
```
