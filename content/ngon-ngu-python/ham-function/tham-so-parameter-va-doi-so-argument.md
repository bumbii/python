---
icon: box-ballot
---

# Tham số (Parameter) và Đối số (Argument)

Cần phân biệt 2 khái niệm mà rất nhiều người hay nhầm lẫn: tham số (parameter) và đối số (argument).

### Tham số (Parameter)

* Là **tên biến được định nghĩa trong hàm** (ở phần khai báo hàm).
* Nó đóng vai trò như **ô chứa dữ liệu tạm thời (placeholder)**, chờ khi hàm được gọi thì nhận giá trị truyền vào.

👉 Tham số tồn tại **trong định nghĩa hàm**.

Ví dụ:

```python
def greet(name):   # 'name' là tham số
    print(f"Hello {name}!")
```

Ở đây, `name` là **tham số**.

***

### Đối số (Argument)

* Là **giá trị thực tế được truyền vào khi gọi hàm**.
* Nó sẽ gán cho tham số tương ứng.

👉 Đối số tồn tại **khi gọi hàm**.

Ví dụ:

```python
greet("Alice")   # "Alice" là đối số
greet("Bob")     # "Bob" là đối số
```

Ở đây, `"Alice"` và `"Bob"` là **đối số**.

***

Ví dụ về tham số và đối số

```python
def add(x, y):          # x, y = tham số
    return x + y

result = add(3, 5)      # 3, 5 = đối số
print(result)           # 8
```

* `x, y` là **tham số** (parameter).
* `3, 5` là **đối số** (argument).

***

Mẹo ghi nhớ:&#x20;

<mark style="color:red;">**P**</mark>arameter (tham số) - <mark style="color:red;">**P**</mark>laceholder (biến giữ chỗ, sẽ bị thay thế bởi giá trị thực tế được truyền vào)

<mark style="color:red;">**A**</mark>rgument (đối số) - <mark style="color:red;">**A**</mark>ctual (giá trị thực tế được truyền vào hàm để thực hiện các tính toán)
