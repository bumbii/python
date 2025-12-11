# Kiểu dữ liệu Số (Number)

Trong Python, các kiểu dữ liệu số được sử dụng để lưu trữ các giá trị số học. Python hỗ trợ ba kiểu dữ liệu số chính: **int** (số nguyên), **float** (số thực), và **complex** (số phức).

## 1. Số nguyên (int - Integer)

### Định nghĩa
Số nguyên là các số không có phần thập phân. Chúng có thể là số dương, số âm, hoặc số không.

```python
# Số nguyên dương
positive_num = 100
print(positive_num)  # 100

# Số nguyên âm
negative_num = -50
print(negative_num)  # -50

# Số không
zero = 0
print(zero)  # 0

# Kiểm tra kiểu dữ liệu
print(type(positive_num))  # <class 'int'>
```

### Số nguyên lớn
Python có thể xử lý số nguyên với độ lớn bất kỳ (chỉ giới hạn bởi bộ nhớ máy tính).

```python
# Số nguyên rất lớn
big_number = 123456789012345678901234567890
print(big_number)
print(type(big_number))  # <class 'int'>
```

### Các hệ số khác nhau

Python hỗ trợ biểu diễn số nguyên ở nhiều hệ số khác nhau:

```python
# Hệ thập phân (decimal - cơ số 10)
decimal_num = 100
print(decimal_num)  # 100

# Hệ nhị phân (binary - cơ số 2) - bắt đầu bằng 0b
binary_num = 0b1010
print(binary_num)  # 10

# Hệ bát phân (octal - cơ số 8) - bắt đầu bằng 0o
octal_num = 0o12
print(octal_num)  # 10

# Hệ thập lục phân (hexadecimal - cơ số 16) - bắt đầu bằng 0x
hex_num = 0xA
print(hex_num)  # 10
```

### Chuyển đổi giữa các hệ số

```python
number = 255

# Chuyển sang nhị phân (binary)
print(bin(number))  # 0b11111111

# Chuyển sang bát phân (octal)
print(oct(number))  # 0o377

# Chuyển sang thập lục phân (hexadecimal)
print(hex(number))  # 0xff
```

## 2. Số thực (float - Floating Point)

### Định nghĩa
Số thực là các số có phần thập phân. Python sử dụng dấu chấm `.` để phân cách phần nguyên và phần thập phân.

```python
# Số thực dương
positive_float = 3.14
print(positive_float)  # 3.14

# Số thực âm
negative_float = -2.5
print(negative_float)  # -2.5

# Số thực có phần thập phân bằng 0
float_zero_decimal = 5.0
print(float_zero_decimal)  # 5.0

# Kiểm tra kiểu dữ liệu
print(type(positive_float))  # <class 'float'>
```

### Ký hiệu khoa học (Scientific Notation)

```python
# Sử dụng 'e' hoặc 'E' để biểu diễn lũy thừa của 10
scientific_num = 3.14e2  # 3.14 × 10^2
print(scientific_num)  # 314.0

negative_exp = 2.5e-3  # 2.5 × 10^-3
print(negative_exp)  # 0.0025

big_scientific = 1.5E10  # 1.5 × 10^10
print(big_scientific)  # 15000000000.0
```

### Độ chính xác của số thực

Số thực trong Python có độ chính xác giới hạn (khoảng 15-17 chữ số thập phân).

```python
# Ví dụ về độ chính xác
a = 0.1 + 0.2
print(a)  # 0.30000000000000004 (không chính xác tuyệt đối)

# So sánh số thực nên dùng khoảng sai số
epsilon = 1e-10
if abs(a - 0.3) < epsilon:
    print("Hai số gần bằng nhau")  # Hai số gần bằng nhau
```

### Các giá trị đặc biệt

```python
# Vô cùng dương (infinity)
positive_inf = float('inf')
print(positive_inf)  # inf

# Vô cùng âm
negative_inf = float('-inf')
print(negative_inf)  # -inf

# Không phải số (Not a Number)
not_a_number = float('nan')
print(not_a_number)  # nan

# Kiểm tra vô cùng
import math
print(math.isinf(positive_inf))  # True
print(math.isnan(not_a_number))  # True
```

## 3. Số phức (complex - Complex Number)

### Định nghĩa
Số phức có dạng `a + bj`, trong đó:
- `a` là phần thực (real part)
- `b` là phần ảo (imaginary part)
- `j` đại diện cho căn bậc hai của -1 (trong toán học thường dùng `i`)

```python
# Tạo số phức
complex_num = 3 + 4j
print(complex_num)  # (3+4j)
print(type(complex_num))  # <class 'complex'>

# Số phức với phần thực bằng 0
imaginary_only = 5j
print(imaginary_only)  # 5j

# Số phức với phần ảo bằng 0
real_only = 7 + 0j
print(real_only)  # (7+0j)
```

### Truy cập phần thực và phần ảo

```python
complex_num = 3 + 4j

# Lấy phần thực
real_part = complex_num.real
print(real_part)  # 3.0

# Lấy phần ảo
imag_part = complex_num.imag
print(imag_part)  # 4.0
```

### Số phức liên hợp (Conjugate)

```python
complex_num = 3 + 4j

# Số phức liên hợp (đổi dấu phần ảo)
conjugate = complex_num.conjugate()
print(conjugate)  # (3-4j)
```

### Tính toán với số phức

```python
# Cộng, trừ, nhân, chia
z1 = 2 + 3j
z2 = 1 + 2j

print(z1 + z2)  # (3+5j)
print(z1 - z2)  # (1+1j)
print(z1 * z2)  # (-4+7j)
print(z1 / z2)  # (1.6-0.2j)

# Trị tuyệt đối (modulus)
print(abs(z1))  # 3.605551275463989
```

## 4. Chuyển đổi giữa các kiểu số

### int() - Chuyển sang số nguyên

```python
# Từ float sang int (bỏ phần thập phân)
float_num = 3.14
int_num = int(float_num)
print(int_num)  # 3

# Từ string sang int
str_num = "100"
int_from_str = int(str_num)
print(int_from_str)  # 100

# Chuyển đổi từ hệ số khác
binary_str = "1010"
decimal_from_binary = int(binary_str, 2)  # Hệ nhị phân
print(decimal_from_binary)  # 10

hex_str = "FF"
decimal_from_hex = int(hex_str, 16)  # Hệ thập lục phân
print(decimal_from_hex)  # 255
```

### float() - Chuyển sang số thực

```python
# Từ int sang float
int_num = 10
float_num = float(int_num)
print(float_num)  # 10.0

# Từ string sang float
str_num = "3.14"
float_from_str = float(str_num)
print(float_from_str)  # 3.14

# Từ string với ký hiệu khoa học
scientific_str = "1.5e3"
float_from_scientific = float(scientific_str)
print(float_from_scientific)  # 1500.0
```

### complex() - Chuyển sang số phức

```python
# Từ số thực
real_num = 5
complex_from_real = complex(real_num)
print(complex_from_real)  # (5+0j)

# Từ hai số (phần thực, phần ảo)
complex_num = complex(3, 4)
print(complex_num)  # (3+4j)

# Từ string
str_complex = "2+3j"
complex_from_str = complex(str_complex)
print(complex_from_str)  # (2+3j)
```

## 5. Các phép toán số học

```python
a = 10
b = 3

# Cộng
print(a + b)  # 13

# Trừ
print(a - b)  # 7

# Nhân
print(a * b)  # 30

# Chia thực (luôn trả về float)
print(a / b)  # 3.3333333333333335

# Chia lấy phần nguyên (floor division)
print(a // b)  # 3

# Chia lấy phần dư (modulo)
print(a % b)  # 1

# Lũy thừa
print(a ** b)  # 1000
```

## 6. Các hàm toán học hữu ích

```python
# Giá trị tuyệt đối
print(abs(-10))  # 10
print(abs(-3.14))  # 3.14

# Làm tròn
print(round(3.14159))  # 3
print(round(3.14159, 2))  # 3.14 (làm tròn đến 2 chữ số thập phân)

# Giá trị lớn nhất, nhỏ nhất
print(max(1, 5, 3, 9, 2))  # 9
print(min(1, 5, 3, 9, 2))  # 1

# Lũy thừa (cách khác)
print(pow(2, 3))  # 8
print(pow(2, 3, 5))  # 3 (2^3 % 5 = 8 % 5 = 3)

# Tổng
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))  # 15
```

## 7. Module math - Các hàm toán học nâng cao

```python
import math

# Hằng số
print(math.pi)  # 3.141592653589793
print(math.e)   # 2.718281828459045

# Làm tròn lên, xuống
print(math.ceil(3.2))   # 4 (làm tròn lên)
print(math.floor(3.8))  # 3 (làm tròn xuống)

# Căn bậc hai
print(math.sqrt(16))  # 4.0

# Lũy thừa và logarit
print(math.exp(2))     # 7.38905609893065 (e^2)
print(math.log(10))    # 2.302585092994046 (ln(10))
print(math.log10(100)) # 2.0 (log cơ số 10)

# Lượng giác
print(math.sin(math.pi / 2))  # 1.0
print(math.cos(0))            # 1.0
print(math.tan(math.pi / 4))  # 0.9999999999999999

# Chuyển đổi độ và radian
degrees = 180
radians = math.radians(degrees)
print(radians)  # 3.141592653589793

radians = math.pi
degrees = math.degrees(radians)
print(degrees)  # 180.0
```

## 8. Bài tập thực hành

### Bài 1: Tính diện tích hình tròn

```python
import math

radius = float(input("Nhập bán kính: "))
area = math.pi * radius ** 2
print(f"Diện tích hình tròn: {area:.2f}")
```

### Bài 2: Chuyển đổi nhiệt độ

```python
# Chuyển từ Celsius sang Fahrenheit
celsius = float(input("Nhập nhiệt độ Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")

# Chuyển từ Fahrenheit sang Celsius
fahrenheit = float(input("Nhập nhiệt độ Fahrenheit: "))
celsius = (fahrenheit - 32) * 5/9
print(f"{fahrenheit}°F = {celsius:.2f}°C")
```

### Bài 3: Tính khoảng cách giữa hai điểm

```python
import math

# Điểm A(x1, y1) và B(x2, y2)
x1, y1 = 0, 0
x2, y2 = 3, 4

distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
print(f"Khoảng cách: {distance}")  # 5.0
```

## Tổng kết

- Python hỗ trợ 3 kiểu số: **int**, **float**, và **complex**
- Số nguyên có thể biểu diễn ở nhiều hệ số: nhị phân (0b), bát phân (0o), thập lục phân (0x)
- Số thực có thể dùng ký hiệu khoa học với `e` hoặc `E`
- Số phức có dạng `a + bj`
- Dùng `int()`, `float()`, `complex()` để chuyển đổi giữa các kiểu
- Module `math` cung cấp nhiều hàm toán học hữu ích
