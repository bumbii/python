---
icon: calculator
---

# Math và Random Modules

## 1. Giới thiệu

Python cung cấp hai module quan trọng để làm việc với toán học và số ngẫu nhiên:

- **math**: Các hàm toán học (lượng giác, logarit, căn bậc,...)
- **random**: Tạo số ngẫu nhiên và các thao tác ngẫu nhiên

## 2. Module math

### 2.1 - Import module

```python
import math

# Hoặc import specific functions
from math import sqrt, pi, sin, cos
```

### 2.2 - Hằng số toán học

```python
import math

print(math.pi)      # 3.141592653589793 (Pi)
print(math.e)       # 2.718281828459045 (số e)
print(math.tau)     # 6.283185307179586 (2*pi)
print(math.inf)     # inf (vô cực)
print(math.nan)     # nan (Not a Number)
```

### 2.3 - Hàm làm tròn

```python
import math

# ceil() - Làm tròn lên
print(math.ceil(4.2))   # 5
print(math.ceil(4.8))   # 5
print(math.ceil(-4.2))  # -4

# floor() - Làm tròn xuống
print(math.floor(4.2))   # 4
print(math.floor(4.8))   # 4
print(math.floor(-4.2))  # -5

# trunc() - Cắt phần thập phân
print(math.trunc(4.8))   # 4
print(math.trunc(-4.8))  # -4
```

### 2.4 - Căn bậc và lũy thừa

```python
import math

# sqrt() - Căn bậc 2
print(math.sqrt(16))    # 4.0
print(math.sqrt(2))     # 1.4142135623730951

# pow() - Lũy thừa
print(math.pow(2, 3))   # 8.0
print(math.pow(5, 2))   # 25.0

# exp() - e^x
print(math.exp(1))      # 2.718281828459045 (e^1)
print(math.exp(2))      # 7.38905609893065 (e^2)

# cbrt() - Căn bậc 3 (Python 3.11+)
# print(math.cbrt(27))  # 3.0
```

### 2.5 - Logarithm

```python
import math

# log() - Logarithm tự nhiên (cơ số e)
print(math.log(math.e))  # 1.0
print(math.log(10))      # 2.302585092994046

# log10() - Logarithm cơ số 10
print(math.log10(100))   # 2.0
print(math.log10(1000))  # 3.0

# log2() - Logarithm cơ số 2
print(math.log2(8))      # 3.0
print(math.log2(1024))   # 10.0

# log(x, base) - Logarithm với cơ số tùy chỉnh
print(math.log(81, 3))   # 4.0
```

### 2.6 - Hàm lượng giác

```python
import math

# Đổi độ sang radian
angle_degrees = 45
angle_radians = math.radians(angle_degrees)

# sin, cos, tan
print(math.sin(angle_radians))  # 0.7071067811865475
print(math.cos(angle_radians))  # 0.7071067811865476
print(math.tan(angle_radians))  # 0.9999999999999999

# Hàm nghịch đảo (trả về radian)
print(math.asin(0.5))  # 0.5235987755982989
print(math.acos(0.5))  # 1.0471975511965979
print(math.atan(1))    # 0.7853981633974483

# Đổi radian sang độ
print(math.degrees(math.pi))  # 180.0
print(math.degrees(math.pi/2))  # 90.0
```

### 2.7 - Giá trị tuyệt đối và dấu

```python
import math

# fabs() - Giá trị tuyệt đối (float)
print(math.fabs(-5.5))   # 5.5
print(math.fabs(3.2))    # 3.2

# copysign() - Copy dấu
print(math.copysign(5, -1))   # -5.0
print(math.copysign(-5, 1))   # 5.0
```

### 2.8 - Tổng hợp và tích

```python
import math

# fsum() - Tổng chính xác của float
numbers = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
print(sum(numbers))       # 0.9999999999999999 (không chính xác)
print(math.fsum(numbers)) # 1.0 (chính xác)

# prod() - Tích các số (Python 3.8+)
print(math.prod([2, 3, 4]))  # 24
print(math.prod([1, 2, 3, 4, 5]))  # 120
```

### 2.9 - Factorial và Combinatorics

```python
import math

# factorial() - Giai thừa
print(math.factorial(5))   # 120 (5! = 5*4*3*2*1)
print(math.factorial(0))   # 1

# comb() - Tổ hợp C(n,k) (Python 3.8+)
print(math.comb(5, 2))     # 10 (C(5,2) = 5!/(2!*3!))

# perm() - Hoán vị P(n,k) (Python 3.8+)
print(math.perm(5, 2))     # 20 (P(5,2) = 5!/(5-2)!)
```

### 2.10 - GCD và LCM

```python
import math

# gcd() - Ước chung lớn nhất
print(math.gcd(48, 18))    # 6
print(math.gcd(100, 50))   # 50

# lcm() - Bội chung nhỏ nhất (Python 3.9+)
print(math.lcm(12, 18))    # 36
print(math.lcm(4, 6, 8))   # 24
```

### 2.11 - Kiểm tra số

```python
import math

# isnan() - Kiểm tra NaN
print(math.isnan(float('nan')))  # True
print(math.isnan(123))           # False

# isinf() - Kiểm tra vô cực
print(math.isinf(float('inf')))  # True
print(math.isinf(123))           # False

# isfinite() - Kiểm tra số hữu hạn
print(math.isfinite(123))        # True
print(math.isfinite(float('inf')))  # False
```

## 3. Ví dụ thực tế với math

### Ví dụ 1: Tính khoảng cách Euclidean

```python
import math

def distance(x1, y1, x2, y2):
    """Tính khoảng cách giữa 2 điểm"""
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Test
d = distance(0, 0, 3, 4)
print(f"Khoảng cách: {d}")  # 5.0
```

### Ví dụ 2: Tính diện tích hình tròn

```python
import math

def circle_area(radius):
    """Tính diện tích hình tròn"""
    return math.pi * radius ** 2

def circle_circumference(radius):
    """Tính chu vi hình tròn"""
    return 2 * math.pi * radius

r = 5
print(f"Diện tích: {circle_area(r):.2f}")
print(f"Chu vi: {circle_circumference(r):.2f}")
```

### Ví dụ 3: Góc giữa 2 vector

```python
import math

def angle_between_vectors(v1, v2):
    """Tính góc giữa 2 vector (độ)"""
    # Tích vô hướng
    dot_product = v1[0]*v2[0] + v1[1]*v2[1]

    # Độ dài vector
    mag1 = math.sqrt(v1[0]**2 + v1[1]**2)
    mag2 = math.sqrt(v2[0]**2 + v2[1]**2)

    # cos(angle) = dot / (mag1 * mag2)
    cos_angle = dot_product / (mag1 * mag2)
    angle_radians = math.acos(cos_angle)
    angle_degrees = math.degrees(angle_radians)

    return angle_degrees

v1 = (1, 0)
v2 = (0, 1)
angle = angle_between_vectors(v1, v2)
print(f"Góc: {angle}°")  # 90.0°
```

### Ví dụ 4: Compound interest

```python
import math

def compound_interest(principal, rate, time, n=1):
    """
    Tính lãi kép
    principal: Vốn gốc
    rate: Lãi suất năm (%)
    time: Số năm
    n: Số lần tính lãi/năm
    """
    amount = principal * math.pow((1 + rate/100/n), n*time)
    interest = amount - principal
    return amount, interest

# Ví dụ: 10 triệu, lãi 8%/năm, 5 năm, tính lãi hàng tháng
amount, interest = compound_interest(10_000_000, 8, 5, 12)
print(f"Tổng tiền: {amount:,.0f} VND")
print(f"Lãi: {interest:,.0f} VND")
```

## 4. Module random

### 4.1 - Import module

```python
import random

# Hoặc import specific functions
from random import randint, choice, shuffle
```

### 4.2 - Số ngẫu nhiên cơ bản

```python
import random

# random() - Số thực ngẫu nhiên [0.0, 1.0)
print(random.random())  # 0.573124...

# uniform(a, b) - Số thực ngẫu nhiên [a, b]
print(random.uniform(1, 10))  # 5.732...

# randint(a, b) - Số nguyên ngẫu nhiên [a, b]
print(random.randint(1, 10))  # 7

# randrange(start, stop, step)
print(random.randrange(0, 100, 5))  # 0, 5, 10, ... 95
```

### 4.3 - Chọn từ sequence

```python
import random

items = ['apple', 'banana', 'orange', 'grape']

# choice() - Chọn 1 phần tử
print(random.choice(items))  # 'banana'

# choices() - Chọn k phần tử (có thể trùng)
print(random.choices(items, k=3))  # ['apple', 'apple', 'orange']

# sample() - Chọn k phần tử (không trùng)
print(random.sample(items, k=2))  # ['orange', 'apple']
```

### 4.4 - Choices với trọng số

```python
import random

items = ['A', 'B', 'C', 'D']
weights = [10, 20, 30, 40]  # B có khả năng cao hơn A

# Chọn với trọng số
result = random.choices(items, weights=weights, k=1000)
print(f"A: {result.count('A')}")  # ~100
print(f"B: {result.count('B')}")  # ~200
print(f"C: {result.count('C')}")  # ~300
print(f"D: {result.count('D')}")  # ~400
```

### 4.5 - Shuffle (xáo trộn)

```python
import random

items = [1, 2, 3, 4, 5]
random.shuffle(items)
print(items)  # [3, 1, 5, 2, 4] (ngẫu nhiên)
```

### 4.6 - Seed (khởi tạo)

```python
import random

# Set seed để có kết quả lặp lại được
random.seed(42)
print(random.random())  # 0.6394267984578837

random.seed(42)
print(random.random())  # 0.6394267984578837 (giống trên)
```

### 4.7 - Phân phối Gauss/Normal

```python
import random

# gauss(mu, sigma) - Phân phối chuẩn
# mu: trung bình, sigma: độ lệch chuẩn
values = [random.gauss(100, 15) for _ in range(1000)]
print(f"Mean: {sum(values)/len(values):.2f}")  # ~100
```

## 5. Ví dụ thực tế với random

### Ví dụ 1: Tung xúc xắc

```python
import random

def roll_dice(num_dice=1):
    """Tung xúc xắc"""
    return [random.randint(1, 6) for _ in range(num_dice)]

# Tung 2 xúc xắc
result = roll_dice(2)
print(f"Kết quả: {result}")
print(f"Tổng: {sum(result)}")
```

### Ví dụ 2: Tạo mật khẩu ngẫu nhiên

```python
import random
import string

def generate_password(length=12):
    """Tạo mật khẩu ngẫu nhiên"""
    # Tất cả ký tự có thể dùng
    characters = string.ascii_letters + string.digits + string.punctuation

    # Đảm bảo có ít nhất 1 chữ hoa, chữ thường, số, ký tự đặc biệt
    password = [
        random.choice(string.ascii_lowercase),
        random.choice(string.ascii_uppercase),
        random.choice(string.digits),
        random.choice(string.punctuation)
    ]

    # Thêm các ký tự ngẫu nhiên còn lại
    for _ in range(length - 4):
        password.append(random.choice(characters))

    # Xáo trộn
    random.shuffle(password)
    return ''.join(password)

# Test
password = generate_password(16)
print(f"Password: {password}")
```

### Ví dụ 3: Rút thăm may mắn

```python
import random

def lucky_draw(participants, num_winners=1):
    """Rút thăm may mắn"""
    if num_winners > len(participants):
        return "Số người thắng không thể lớn hơn số người tham gia"

    winners = random.sample(participants, num_winners)
    return winners

# Test
people = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]
winners = lucky_draw(people, 3)
print(f"Người thắng: {winners}")
```

### Ví dụ 4: Mô phỏng tung đồng xu

```python
import random

def coin_flip(n=1):
    """Tung đồng xu n lần"""
    results = [random.choice(['Heads', 'Tails']) for _ in range(n)]
    return results

def coin_flip_simulation(n=10000):
    """Mô phỏng tung đồng xu"""
    results = coin_flip(n)
    heads = results.count('Heads')
    tails = results.count('Tails')

    print(f"Tổng số lần tung: {n}")
    print(f"Heads: {heads} ({heads/n*100:.2f}%)")
    print(f"Tails: {tails} ({tails/n*100:.2f}%)")

coin_flip_simulation(10000)
```

### Ví dụ 5: Trò chơi đoán số

```python
import random

def guessing_game():
    """Trò chơi đoán số"""
    number = random.randint(1, 100)
    attempts = 0
    max_attempts = 10

    print("Tôi đã nghĩ ra một số từ 1 đến 100")
    print(f"Bạn có {max_attempts} lần đoán")

    while attempts < max_attempts:
        try:
            guess = int(input(f"\nLần đoán {attempts + 1}: "))
            attempts += 1

            if guess < number:
                print("Quá thấp!")
            elif guess > number:
                print("Quá cao!")
            else:
                print(f"Chính xác! Bạn đã đoán đúng sau {attempts} lần")
                return

        except ValueError:
            print("Vui lòng nhập một số!")

    print(f"\nHết lượt! Số đúng là {number}")

# guessing_game()  # Uncomment để chơi
```

### Ví dụ 6: Chia nhóm ngẫu nhiên

```python
import random

def split_into_groups(people, group_size):
    """Chia nhóm ngẫu nhiên"""
    # Xáo trộn danh sách
    shuffled = people.copy()
    random.shuffle(shuffled)

    # Chia thành các nhóm
    groups = []
    for i in range(0, len(shuffled), group_size):
        groups.append(shuffled[i:i+group_size])

    return groups

# Test
students = ["An", "Bình", "Chi", "Dũng", "Em", "Giang", "Hùng", "Lan"]
groups = split_into_groups(students, 3)

for i, group in enumerate(groups, 1):
    print(f"Nhóm {i}: {group}")
```

### Ví dụ 7: Mô phỏng xác suất

```python
import random

def monty_hall_simulation(n=10000):
    """
    Mô phỏng Monty Hall Problem
    Thay đổi cửa có lợi hơn không?
    """
    stay_wins = 0
    switch_wins = 0

    for _ in range(n):
        # 3 cửa, 1 cửa có xe
        doors = [0, 0, 1]  # 1 = xe
        random.shuffle(doors)

        # Người chơi chọn cửa đầu tiên
        first_choice = 0
        first_choice_value = doors[first_choice]

        # Host mở 1 cửa không có xe (không phải cửa người chơi chọn)
        # Người chơi chuyển sang cửa còn lại

        # Nếu GIỮ NGUYÊN cửa đầu
        if first_choice_value == 1:
            stay_wins += 1

        # Nếu CHUYỂN cửa
        if first_choice_value == 0:
            switch_wins += 1

    print(f"Mô phỏng {n} lần:")
    print(f"Giữ nguyên cửa: {stay_wins/n*100:.2f}% thắng")
    print(f"Đổi cửa: {switch_wins/n*100:.2f}% thắng")

monty_hall_simulation(10000)
```

### Ví dụ 8: Random walk

```python
import random

def random_walk(steps):
    """Mô phỏng random walk 1D"""
    position = 0
    positions = [position]

    for _ in range(steps):
        # Di chuyển ngẫu nhiên: -1 hoặc +1
        step = random.choice([-1, 1])
        position += step
        positions.append(position)

    return positions

# Test
positions = random_walk(100)
print(f"Vị trí cuối: {positions[-1]}")
print(f"Xa nhất: {max(positions)}")
print(f"Gần nhất: {min(positions)}")
```

### Ví dụ 9: Tạo dữ liệu test

```python
import random
import string

def generate_test_data(n=10):
    """Tạo dữ liệu test cho user"""
    users = []

    for i in range(n):
        user = {
            'id': i + 1,
            'name': ''.join(random.choices(string.ascii_uppercase, k=1)) +
                   ''.join(random.choices(string.ascii_lowercase, k=random.randint(4, 8))),
            'age': random.randint(18, 65),
            'email': f"user{i+1}@example.com",
            'score': random.randint(0, 100)
        }
        users.append(user)

    return users

# Test
users = generate_test_data(5)
for user in users:
    print(user)
```

### Ví dụ 10: Weighted random selection

```python
import random

class WeightedRandomSelector:
    def __init__(self, items_weights):
        """
        items_weights: dict {item: weight}
        """
        self.items = list(items_weights.keys())
        self.weights = list(items_weights.values())

    def select(self):
        """Chọn 1 item theo trọng số"""
        return random.choices(self.items, weights=self.weights, k=1)[0]

    def select_multiple(self, k):
        """Chọn k items theo trọng số"""
        return random.choices(self.items, weights=self.weights, k=k)

# Test - Drop rate game items
loot_table = {
    'Common': 60,
    'Uncommon': 25,
    'Rare': 10,
    'Epic': 4,
    'Legendary': 1
}

selector = WeightedRandomSelector(loot_table)

# Mô phỏng 1000 lần
results = selector.select_multiple(1000)
for rarity in loot_table.keys():
    count = results.count(rarity)
    print(f"{rarity}: {count} ({count/10:.1f}%)")
```

## 6. Kết hợp math và random

### Ví dụ: Tạo số ngẫu nhiên theo phân phối chuẩn

```python
import random
import math

def normal_distribution_values(mean, std_dev, count):
    """Tạo count số theo phân phối chuẩn"""
    values = [random.gauss(mean, std_dev) for _ in range(count)]
    return values

def statistics(values):
    """Tính thống kê"""
    n = len(values)
    mean = sum(values) / n
    variance = sum((x - mean)**2 for x in values) / n
    std_dev = math.sqrt(variance)

    return {
        'count': n,
        'mean': mean,
        'std_dev': std_dev,
        'min': min(values),
        'max': max(values)
    }

# Test
values = normal_distribution_values(mean=100, std_dev=15, count=1000)
stats = statistics(values)

print(f"Count: {stats['count']}")
print(f"Mean: {stats['mean']:.2f}")
print(f"Std Dev: {stats['std_dev']:.2f}")
print(f"Min: {stats['min']:.2f}")
print(f"Max: {stats['max']:.2f}")
```

## 7. Best Practices

### 1. Dùng math.fsum() cho tổng chính xác

```python
import math

numbers = [0.1] * 10

# TRÁNH
print(sum(numbers))  # 0.9999999999999999

# TỐT
print(math.fsum(numbers))  # 1.0
```

### 2. Set seed cho reproducibility

```python
import random

# TỐT - Có thể lặp lại kết quả
random.seed(42)
result = random.randint(1, 100)

# Lần sau cũng vậy
random.seed(42)
result2 = random.randint(1, 100)
assert result == result2
```

### 3. Dùng secrets cho security-sensitive

```python
import secrets

# TỐT - Cho mật khẩu, token
token = secrets.token_hex(16)

# TRÁNH - random không đủ an toàn cho security
import random
# weak_token = ''.join(random.choices('0123456789abcdef', k=32))
```

### 4. Kiểm tra edge cases với math

```python
import math

value = some_calculation()

# TỐT - Kiểm tra trước khi dùng
if math.isnan(value) or math.isinf(value):
    print("Invalid value")
else:
    print(f"Result: {value}")
```

## 8. So sánh random vs secrets vs numpy.random

```python
# random - Mục đích chung, KHÔNG an toàn cho crypto
import random
print(random.randint(1, 100))

# secrets - An toàn cho crypto, token, password
import secrets
print(secrets.randbelow(100))

# numpy.random - Khoa học dữ liệu, hiệu suất cao
# import numpy as np
# print(np.random.randint(1, 100))
```

## Bài giảng trên YouTube

Cập nhật sau
