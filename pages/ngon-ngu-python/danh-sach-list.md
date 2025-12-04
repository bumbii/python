import YouTube from '../../components/YouTube'

# Danh sách (List)

## 1. List là gì?

**List** là một cấu trúc dữ liệu cho phép chứa nhiều giá trị **theo thứ tự**, có thể **thay đổi (mutable)**, và **có thể chứa nhiều kiểu dữ liệu khác nhau**.

Ví dụ list hợp lệ:

```python
numbers = [1, 2, 3, 4] # Danh sách các số
mixed = [1, "hello", True, 3.14] # Danh sách chứa nhiều loại dữ liệu
nested = [1, [2, 3], 4] # Danh sách có thể chứa danh sách
```

## 2. Cách tạo list

### Tạo list bằng cặp ngoặc vuông

```python
fruits = ["apple", "banana", "orange"]
```

```python
numbers = [1, 2, 3, 4, 5]
```

```python
friends = ["Tuệ Nghi", "Minh Sang", "Phước Sâm",
           "Bảo Nguyên", "Đức Sơn", "Bảo Đăng",
           "Hồng Phúc", "Gia Hưng", "Hoàng Thịnh",
           "Trọng Phát"]
```

### Tạo một list rỗng

```python
empty_list = []
another_empty_list = list()
```

### Tạo list từ hàm `range()`

```python
numbers = list(range(5)) # [0, 1, 2, 3, 4]
```

## 3. Các thao tác cơ bản trên list

### Lấy độ dài của list

```python
numbers = list(range(5)) # [0, 1, 2, 3, 4]
len(numbers) # 5
```

### Kiểm tra một phần tử có trong list không

```python
fruits = ["apple", "banana", "orange"]
if "apple" in fruits:
    print("Yes")
else:
    print("No")
```

### Nối 2 list

```python
a = [1, 2]
b = [3, 4]
c = a + b # [1, 2, 3, 4]
```

### Lặp các phần tử trong list

```python
x = [0] * 5 # [0, 0, 0, 0, 0]
```

### Lấy một phần tử theo chỉ số (index)

```python
fruits = ["apple", "banana", "orange"]
fruits[0] # "apple"
fruits[1] # "banana"
```

### Lấy phần tử cuối cùng của list

```python
fruits = ["apple", "banana", "orange"]

last_fruit = fruits[-1] # Cách 1: dùng index = -1
last_fruit = fruits[len(fruits) - 1] # Cách 2: dùng len
```

### Lấy 1 phần của list (slicing)

```python
fruits = ["apple", "banana", "orange", "lemon"]

fruits[1:3] # ["banana", "orange"], lấy các phần tử từ index = 1 đến index < 3
fruits[:2] # ["apple", "banana"], lấy các phần tử từ index = 0, đến index < 2
fruits[::2] # ["apple", "orange"], lấy các phần tử từ index = 0, 2, 4, 6 ... (bước nhảy bằng 2)
```

### Thay đổi giá trị list

```python
fruits = ["apple", "banana", "orange"]

fruits[1] = "mango" # fruits = ["apple", "mango", "orange"]
fruits[1:3] = ["kiwi", "lemon"] # fruits = ["kiwi", "lemon", "organge"]
```

## 4. Các hàm quan trọng của list

| Method         | Chức năng                         | Ví dụ                   |
| -------------- | --------------------------------- | ----------------------- |
| `append(x)`    | Thêm phần tử vào cuối             | `numbers.append(10)`    |
| `insert(i, x)` | Thêm vào vị trí i                 | `numbers.insert(1, 99)` |
| `extend(list)` | Nối list                          | `numbers.extend(b)`     |
| `remove(x)`    | Xoá phần tử đầu tiên có giá trị x | `numbers.remove(5)`     |
| `pop(i)`       | Lấy và xoá phần tử tại i          | `numbers.pop(2)`        |
| `clear()`      | Xoá toàn bộ list                  | `numbers.clear()`       |
| `sort()`       | Sắp xếp tăng dần                  | `numbers.sort()`        |
| `reverse()`    | Đảo ngược list                    | `numbers.reverse()`     |

### Ví dụ: `numbers = [1, 2, 3, 4, 5]`&#x20;

#### 1. `append(x)` - Thêm phần tử x vào cuối list

```python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers) # [1, 2, 3, 4, 5, 6]
```

#### 2. `insert(i, x)` - Thêm phần tử vào vị trí i

```python
numbers = [1, 2, 3, 4, 5]
numbers.insert(2, 99)   # chèn 99 vào vị trí index 2
print(numbers) # [1, 2, 99, 3, 4, 5]
```

#### 3. `extend(list2)` - Nối list vào list hiện tại

```python
numbers = [1, 2, 3, 4, 5]
numbers.extend([6, 7])
print(numbers) # [1, 2, 3, 4, 5, 6, 7]
```

#### 4. `remove(x)` - Xóa phần tử đầu tiên có giá trị x

```python
numbers = [1, 2, 3, 4, 5]
numbers.remove(3)
print(numbers) # [1, 2, 4, 5], số 3 đã bị xóa
```

#### 5. pop(i) - Lấy và xóa phần tử tại vị trí i

```python
numbers = [1, 2, 3, 4, 5]
x = numbers.pop(1)   # xoá phần tử tại index 1
print(x)             # 2
print(numbers)       # [1, 3, 4, 5]
```

Nếu không truyền vị trí thì phần tử cuối sẽ được lấy ra

```python
numbers = [1, 2, 3, 4, 5]
x = numbers.pop()
print(x)             # 5
print(numbers)       # [1, 2, 3, 4]
```

#### 6. `clear()` - Xóa toàn bộ list

```python
numbers = [1, 2, 3, 4, 5]
numbers.clear()
print(numbers)       # []
```

#### 7. `sort()` - Sắp xếp list tăng dần

```python
numbers = [5, 1, 4, 2, 3]
numbers.sort()
print(numbers) # [1, 2, 3, 4, 5]
```

Để sắp xếp giảm dần thì dùng **`reverse=True`**&#x20;

```python
numbers = [5, 1, 4, 2, 3]
numbers.sort(reverse=True)
print(numbers) # [5, 4, 3, 2, 1]
```

#### 8. reverse() - Đảo ngược thứ tự list

```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)    # [5, 4, 3, 2, 1]
```

#### 9. index(x) - Tìm vị trí/index của phần tử x trong list

## 5. Duyệt list bằng vòng `for`&#x20;

### 5.1 - Duyệt qua từng phần tử

Cú pháp:

```python
for variable_name in list_name:
    # code dùng variable_name
```

Ví dụ:

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)
```

### 5.2 - Duyệt theo index&#x20;

Cú pháp:

```python
for i in range(len(list_name)):
    # code dùng index i
```

Ví dụ:

```python
for i in range(len(fruits)):
    print(i, fruits[i])
```

## 6. Copy list

Có 2 loại copy: **shallow** copy và **deep** copy (Dịch ra Tiếng Việt hơi không tự nhiên nên trong bài viết chúng ta giữ nguyên từ gốc).

### 6.1 - Shallow copy (Sẽ cập nhật sau)

### 6.2 - Deep copy (Sẽ cập nhật sau)

## 7. [List Comprehension ](https://bumbii-academy.gitbook.io/laptrinh/ngon-ngu-python/list-comprehension)

## Bài giảng trên YouTube

<YouTube id="VICNVo4p8GM" title="Danh sách (List) trong Python" />
