---
description: Tìm hiểu về giá trị trả về (return) trong một hàm
icon: turn-left
---

# Giá trị trả về (return)

Trong Python (và hầu hết các ngôn ngữ lập trình), **giá trị trả về** của một hàm là kết quả mà hàm gửi lại cho nơi nó được gọi.\
Bạn dùng từ khóa **`return`** để chỉ định giá trị đó.

***

### Một số điểm quan trọng về `return`

1. **Nếu có `return`** → hàm sẽ trả về giá trị (có thể là số, chuỗi, list, object...).
2. **Nếu không có `return`** → hàm tự động trả về `None`.
3. **Một hàm có thể có nhiều `return`** → tùy theo điều kiện, hàm sẽ dừng tại `return` đầu tiên gặp phải.
4. **Có thể trả về nhiều giá trị** → thực chất Python trả về một tuple.

***

### Ví dụ minh họa

#### 1. Hàm có `return`

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8
```

#### 2. Hàm không có `return` (mặc định trả về `None`)

```python
def greet(name):
    print(f"Hello, {name}!")

res = greet("Alice")
print(res)  # None
```

#### 3. Nhiều `return`

```python
def check_number(x):
    if x > 0:
        return "Positive"
    elif x < 0:
        return "Negative"
    return "Zero"

print(check_number(10))   # Positive
print(check_number(-3))   # Negative
print(check_number(0))    # Zero
```

#### 4. Trả về nhiều giá trị

```python
def calculate(a, b):
    return a + b, a - b, a * b

s, d, m = calculate(5, 2)
print(s, d, m)  # 7 3 10
```

***

Tóm lại:

* `return` giúp **lấy kết quả** của hàm ra để dùng ở nơi khác.
* Nếu chỉ muốn hàm thực hiện hành động (in ra, ghi file, vẽ màn hình...) thì có thể không cần `return`.
