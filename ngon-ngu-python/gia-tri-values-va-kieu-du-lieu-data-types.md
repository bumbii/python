---
icon: file-binary
---


# Giá trị (Values) và Kiểu dữ liệu (Data Types)

## 1. Giá trị (values)

Trong các bài học trước, chúng ta đã làm quen với một số **giá trị (values)**, ví dụ:

* <mark style="color:red;">`10`</mark> là một số nguyên (integer)
* <mark style="color:red;">`2.0`</mark> là một số thập phân (floating-point number)
* <mark style="color:red;">`'Hello Python'`</mark>  là một chuỗi ký tự (string)

## 2. Kiểu dữ liệu (data types)

Các bạn quan sát kỹ sẽ thấy mỗi giá trị trên thuộc về một **loại**, ví dụ <mark style="color:red;">`10`</mark> thuộc về loại số nguyên (integer), <mark style="color:red;">`'Hello Python'`</mark>  thuộc về loại chuỗi ký tự (string). Trong lập trình, các loại này được gọi là **kiểu dữ liệu (data types)**.

Để biết được loại hay kiểu dữ liệu của một giá trị, trong Python ta dùng hàm <mark style="color:red;">`type`</mark>&#x20;

```python
type(10) # <class 'int'>

type(42.0) # <class 'float'>

type('Hello Python') # <class 'string'>
```

## 3. Các kiểu dữ liệu cơ bản trong Python

### 3.1 - Số nguyên (int)

* Là những số không có phần thập phân.
* Có thể là số dương (lớn hơn 0), số âm (nhỏ hơn 0) hoặc bằng 0.

Ví dụ:

```python
a = 10
b = -20
c = 0

print(type(a)) # <class 'int'>
```

### 3.2 - Số thực (float)

* Là số có phần thập phân (phần sau dấu chấm).
* Python dùng dấu chấm ( <mark style="color:red;">`.`</mark> ) để phân cách phần nguyên và phần thập phân.

Ví dụ:

```python
a = 10.5
b = -9.0

print(type(a)) # <class 'float'>
```

### 3.3 - Chuỗi ký tự (str - string)

* Chuỗi ký tự là một dãy các ký tự, được đặt trong dấu nháy đơn <mark style="color:red;">`''`</mark>  hoặc dấu nháy kép <mark style="color:red;">`""`</mark> .

> **💡 Ký tự có thể là các chữ cái in hoa, in thường (a, A, x, y, M...), các con số, các ký tự đặc biệt (gạch dưới `_` , gạch ngang `-` , dấu chấm `.` , dấu phẩy `,` ...)**

Ví dụ:&#x20;

```python
hello = 'Hello'
python = "Python"

print(type(hello)) # <class 'str'>
```

### 3.4 - Giá trị logic (bool - boolean)

* Chỉ có 2 giá trị: <mark style="color:red;">`True`</mark> (yes, đúng), <mark style="color:red;">`False`</mark> (no, sai).
* Giá trị logic này thường được dùng để kiểm tra các điều kiện, hoặc dùng trong vòng lặp.

Ví dụ:

```python
is_python_fun = True
print(type(is_python_fun)) # <class 'bool'>
```

```python
print(10 > 8) # True
print(10 < 8) # False
```

### 3.5 - Kiểu NonType

* NoneType dùng để biểu diễn giá trị rỗng hoặc không có giá trị.
* Dùng từ khoá <mark style="color:red;">`None`</mark> .

Ví dụ:

```python
x = None
print(type(x)) # <class 'NoneType'>
```

> **💡 Vì sao cần kiểu None?

Trong Python, khi tạo ra một biến thì bắt buộc phải gán hoặc khởi tạo một giá trị nào đó. Tuy nhiên, trong nhiều trường hợp, chúng ta chưa cần gán giá trị ngay, lúc này ta sẽ dùng None để gán cho biến.&#x20;

&#x20;<mark style="color:red;">`None`</mark>  trong Python khá giống với <mark style="color:red;">`null`</mark> trong các ngôn ngữ khác, điểm khác là None là một đối tượng duy nhất thược kiểu NoneType, còn null thì không có kiểu riêng.**

## 4. Các kiểu dữ liệu về tập hợp (collection)

Với các kiểu dữ liệu cơ bản ở trên thì tại mỗi thời điểm, một biến chỉ chứa một giá trị. Tuy nhiên trong thực tế thì chương trình có nhu cầu lưu trữ nhiều giá trị trong một biến tại một thời điểm. Ví dụ: danh sách học sinh chứa nhiều học sinh. Do đó, Python còn cung cấp các kiểu dữ liệu khác để giải quyết vấn đề này, các kiểu dữ liệu này thuộc về nhóm kiểu dữ liệu tập hợp (collection).

Chúng ta sẽ học các kiểu dữ liệu này kỹ hơn ở các bài sau, trong phạm vi bài này, chúng ta chỉ đi qua sơ lược:

### 4.1 - Danh sách (list)

* Các phần tử trong danh sách có thể trùng lặp nhau (giống nhau).
* Danh sách có thể thay đổi được.

```python
numbers = [1, 2, 3, 4, 5]
```

### 4.2 - tuple

* Giống danh sách (list) nhưng không thể thay đổi được.

```python
point = (10, 20)
```

### 4.3 - Tập hợp (set)

* Các phần tử trong set không được trùng lặp nhau.

```python
alphabet = {a, b, c, d}
```

### 4.4 - Từ điển (dict)

* Chứa các cặp key: value (từ khoá: giá trị)

```python
student = { "name": "Alice", "age": 25}
```

## 5. Chuyển đổi kiểu dữ liệu/Ép kiểu (Type casting)

Python cung cấp các hàm để chuyển đổi một giá trị hoặc một biến sang kiểu dữ liệu khác:

* `int()` → chuyển sang số nguyên
* `float()` → chuyển sang số thực
* `str()` → chuyển sang chuỗi
* `bool()` → chuyển sang logic

Ví dụ:

```python
x = "123" # x là một chuỗi ký tự (str)
print(type(x)) # <class 'str'>

y = int(x)
print(type(y)) # <class 'int'>
print(y)       # 123

z = float(x)
print(type(z)) # <class 'float'>
print(z)       # 123.0
```

Tuy nhiên không phải lúc nào cũng có thể thực hiện ép kiểu được. Ví dụ nếu ép một chuỗi ký tự không phải dạng số sang int hoặc float sẽ bị lỗi.

```python
hello = 'hello'

number = int(hello)
```

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

***

<mark style="color:red;">**Nội dung bài giảng trên YouTube**</mark>

{% embed url="https://www.youtube.com/watch?v=CZsqkm7wWXo" %}
