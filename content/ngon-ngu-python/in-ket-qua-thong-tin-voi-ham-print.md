---
description: >-
  Học cách sử dụng hàm print() để in kết quả/thông tin ra màn hình console hoặc
  file.
icon: square-terminal
---

# In kết quả/thông tin với hàm print()

## 1. Giới thiệu

Trong Python, hàm **`print()`**  được dùng để in dữ liệu ra màn hình hoặc ghi dữ liệu ra file, bộ nhớ RAM ... Đây là một trong những hàm cơ bản nhất mà hầu như người học Python mới nào đều gặp và sử dụng để in ra các kết quả khi chạy các chương trình đơn giản đầu tiên.&#x20;

Trong nội dung bài học hôm nay, chúng ta sẽ tìm hiểu cách sử dụng hàm **`print()`** để in dữ liệu ra màn hình (console) và ghi dữ liệu ra file. Các chức năng nâng cao khác sẽ được trình bày trong một bài học khác.

## 2. Cú pháp (Syntax)

Hàm **`print()`** có cú pháp như sau:

```python
print(*objects, sep = ' ', end='\n', file=None, flush=False)
```

Trong đó:

* **`*objects`  -** Các dữ liệu/giá trị muốn in ra. Chú ý dấu \* ở đây có nghĩa là bạn có thể không cung cấp giá trị, hoặc cung cấp một hoặc nhiều giá trị (nếu nhiều giá trị thì phân cách nhau bằng dấu phẩy). Trong trường hợp có nhiều giá trị, hàm print sẽ nối các giá trị này lại và mặc định phân cách nhau bằng một khoảng trắng. Nếu muốn thay đổi ký tự phân cách (khoảng trắng) thì sẽ cần dùng parameter **`sep`**  (Xem cú pháp ở trên, **`sep = ' '`**).

```python
print() # In ra một dòng trống
print('Hello') # Hello
print('Hello', 'Python') # Hello Python
print('Hello', 'I', 'love', 'Python') # Hello I love Python
print('Hello', 'Python', sep = '-') # Hello-Python
```

* **`sep`**  - Ký tự hoặc chuỗi ký tự được dùng để chèn giữa các giá trị, mặc định là khoảng trắng.

```python
print('Hello', 'Python', sep = '*') # Hello*Python
print('Hello', 'Python', sep = '+') # Hello+Python
```

* **`end`**  - Chuỗi được in ở cuối (sau các giá trị), mặc định là xuống dòng **`'\n'`** . Đây là lý do tại sao các dòng được in ra sẽ tự động xuống dòng. Trong ví dụ dưới, các bạn thử chỉ định giá trị cho **`end`**  là dấu 3 chấm **`...`**  thì dòng thứ hai sẽ không nằm trên dòng mới nữa mà 2 dòng sẽ nối với nhau bằng dấu `...`

```python
print('Hello Python', end = '...')
print('Hello PyCharm')

# Hello Python...Hello PyCharm
```

* **`file`**  - Nơi in hoặc ghi dữ liệu, mặc định là màn hình console.
* **`flush`**  - Có đẩy dữ liệu ra file/màn hình ngay lập tức không, mặc định là không **`False`** . Đối số này hơi khó hiểu nên bạn thử chạy code sau (Chú ý: dùng Command promt (Windows) hoặc Terminal (Mac) thì mới thấy khác biệt, do các IDE có thể đã thay đổi terminal gốc):

Giả sử bạn lưu code vào file `python_print.py` , mở Command promt hoặc terminal, di chuyển đến folder chứa file code (dùng lệnh `cd` ) và chạy lệnh:

```sh
python python_print.py
```

```python
for i in range(3):
    print(i, end=" ") # flush = False
    time.sleep(1)
    
# Ví dụ này khi chạy sẽ chờ 3 giây rồi mới in ra: 0 1 2
# Lý do: flush = False nên không đẩy dữ liệu ra ngay màn hình
```

```python
for i in range(3):
    print(i, end=" ", flush = True)
    time.sleep(1)
    
# Ví dụ này khi chạy sẽ in 0, chờ 1 giây, in 1, chờ 1 giây, in 2
# Do flush = True nên chương trình đẩy ngay giá trị ra màn hình
```

