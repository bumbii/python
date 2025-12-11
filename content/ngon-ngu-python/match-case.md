# Match-Case Statement (Pattern Matching)

Match-Case là tính năng **Pattern Matching** được giới thiệu trong **Python 3.10** (tháng 10/2021). Nó giống như `switch-case` trong các ngôn ngữ khác nhưng mạnh mẽ hơn nhiều.

## 1. Giới thiệu

### Tại sao cần Match-Case?

Trước Python 3.10, để kiểm tra nhiều giá trị ta phải dùng `if-elif-else`:

```python
# Cách cũ với if-elif-else
status_code = 404

if status_code == 200:
    message = "OK"
elif status_code == 404:
    message = "Not Found"
elif status_code == 500:
    message = "Internal Server Error"
else:
    message = "Unknown"

print(message)  # Not Found
```

Với Match-Case, code ngắn gọn và dễ đọc hơn:

```python
# Python 3.10+ với match-case
status_code = 404

match status_code:
    case 200:
        message = "OK"
    case 404:
        message = "Not Found"
    case 500:
        message = "Internal Server Error"
    case _:
        message = "Unknown"

print(message)  # Not Found
```

### Cú pháp cơ bản

```python
match giá_trị:
    case pattern_1:
        # Code khi match với pattern_1
    case pattern_2:
        # Code khi match với pattern_2
    case _:
        # Default case (wildcard)
```

**Lưu ý:** `_` là wildcard pattern (giống `else` hoặc `default`)

## 2. Match với giá trị đơn giản

### So khớp số

```python
number = 2

match number:
    case 0:
        print("Zero")
    case 1:
        print("One")
    case 2:
        print("Two")  # In ra dòng này
    case 3:
        print("Three")
    case _:
        print("Other number")
```

### So khớp chuỗi

```python
command = "start"

match command:
    case "start":
        print("Starting...")  # In ra dòng này
    case "stop":
        print("Stopping...")
    case "pause":
        print("Pausing...")
    case "resume":
        print("Resuming...")
    case _:
        print("Unknown command")
```

### So khớp nhiều giá trị (OR pattern)

```python
day = "Saturday"

match day:
    case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
        print("Weekday")
    case "Saturday" | "Sunday":
        print("Weekend")  # In ra dòng này
    case _:
        print("Invalid day")

# Ví dụ khác
grade = "B"

match grade:
    case "A" | "A+":
        print("Excellent")
    case "B" | "B+":
        print("Good")  # In ra dòng này
    case "C" | "C+":
        print("Average")
    case "D" | "F":
        print("Poor")
    case _:
        print("Invalid grade")
```

## 3. Match với Guards (Điều kiện bổ sung)

Guards cho phép thêm điều kiện `if` vào pattern:

```python
age = 25

match age:
    case x if x < 0:
        print("Invalid age")
    case x if x < 18:
        print("Minor")
    case x if x < 60:
        print("Adult")  # In ra dòng này
    case x if x >= 60:
        print("Senior")
    case _:
        print("Unknown")

# Ví dụ phức tạp hơn
score = 85

match score:
    case x if x >= 90:
        print("Grade: A")
    case x if 80 <= x < 90:
        print("Grade: B")  # In ra dòng này
    case x if 70 <= x < 80:
        print("Grade: C")
    case x if 60 <= x < 70:
        print("Grade: D")
    case x if x < 60:
        print("Grade: F")
    case _:
        print("Invalid score")
```

## 4. Match với Tuples và Lists

### So khớp tuple

```python
point = (0, 0)

match point:
    case (0, 0):
        print("Origin")  # In ra dòng này
    case (0, y):
        print(f"On Y-axis at y={y}")
    case (x, 0):
        print(f"On X-axis at x={x}")
    case (x, y):
        print(f"Point at ({x}, {y})")

# Ví dụ khác
coordinate = (3, 4)

match coordinate:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"On X-axis at x={x}")
    case (0, y):
        print(f"On Y-axis at y={y}")
    case (x, y):
        print(f"Point at x={x}, y={y}")  # In ra: Point at x=3, y=4
```

### So khớp list với độ dài cố định

```python
rgb = [255, 0, 0]

match rgb:
    case [255, 0, 0]:
        print("Red")  # In ra dòng này
    case [0, 255, 0]:
        print("Green")
    case [0, 0, 255]:
        print("Blue")
    case [r, g, b]:
        print(f"Custom color: R={r}, G={g}, B={b}")

# Ví dụ khác
color = [128, 128, 128]

match color:
    case [255, 255, 255]:
        print("White")
    case [0, 0, 0]:
        print("Black")
    case [r, g, b]:
        print(f"Gray-ish: R={r}, G={g}, B={b}")  # In ra dòng này
```

### So khớp list với độ dài thay đổi

```python
# Sử dụng * để capture phần còn lại
numbers = [1, 2, 3, 4, 5]

match numbers:
    case []:
        print("Empty list")
    case [x]:
        print(f"Single element: {x}")
    case [x, y]:
        print(f"Two elements: {x}, {y}")
    case [first, *rest]:
        print(f"First: {first}, Rest: {rest}")  # In ra: First: 1, Rest: [2, 3, 4, 5]

# Ví dụ khác
data = [1, 2, 3]

match data:
    case [x, *middle, y]:
        print(f"First: {x}, Middle: {middle}, Last: {y}")  # In ra: First: 1, Middle: [2], Last: 3

# Bắt phần đầu và cuối
items = ["apple", "banana", "cherry", "date"]

match items:
    case [first, second, *rest]:
        print(f"First two: {first}, {second}")
        print(f"Rest: {rest}")
        # In ra:
        # First two: apple, banana
        # Rest: ['cherry', 'date']
```

## 5. Match với Dictionary

```python
user = {"name": "John", "role": "admin"}

match user:
    case {"role": "admin"}:
        print("Admin user")  # In ra dòng này
    case {"role": "user"}:
        print("Regular user")
    case {"role": "guest"}:
        print("Guest user")
    case _:
        print("Unknown role")

# Capture giá trị
person = {"name": "Alice", "age": 25, "city": "NYC"}

match person:
    case {"name": name, "age": age} if age >= 18:
        print(f"{name} is an adult")  # In ra: Alice is an adult
    case {"name": name, "age": age}:
        print(f"{name} is a minor")

# Dictionary với pattern phức tạp
data = {"type": "user", "id": 123, "name": "Bob"}

match data:
    case {"type": "user", "id": user_id, "name": user_name}:
        print(f"User: {user_name} (ID: {user_id})")
        # In ra: User: Bob (ID: 123)
    case {"type": "admin", "id": admin_id}:
        print(f"Admin ID: {admin_id}")
    case _:
        print("Unknown data type")
```

## 6. Match với Class Instances

### Định nghĩa class

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Circle:
    def __init__(self, center, radius):
        self.center = center
        self.radius = radius

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
```

### Pattern matching với objects

```python
# Tạo objects
p1 = Point(0, 0)
p2 = Point(3, 4)
c1 = Circle(Point(0, 0), 5)
r1 = Rectangle(10, 20)

# Match với Point
match p1:
    case Point(x=0, y=0):
        print("Origin point")  # In ra dòng này
    case Point(x=0, y=y):
        print(f"On Y-axis at y={y}")
    case Point(x=x, y=0):
        print(f"On X-axis at x={x}")
    case Point(x=x, y=y):
        print(f"Point at ({x}, {y})")

# Match với Circle
match c1:
    case Circle(center=Point(x=0, y=0), radius=r):
        print(f"Circle at origin with radius {r}")  # In ra: Circle at origin with radius 5
    case Circle(center=Point(x=x, y=y), radius=r):
        print(f"Circle at ({x}, {y}) with radius {r}")

# Match với Rectangle
match r1:
    case Rectangle(width=w, height=h) if w == h:
        print(f"Square with side {w}")
    case Rectangle(width=w, height=h):
        print(f"Rectangle {w}x{h}")  # In ra: Rectangle 10x20
```

## 7. Ví dụ thực tế

### HTTP Status Code Handler

```python
def handle_response(status_code):
    match status_code:
        case 200:
            return "OK - Success"
        case 201:
            return "Created"
        case 204:
            return "No Content"
        case 400:
            return "Bad Request"
        case 401:
            return "Unauthorized"
        case 403:
            return "Forbidden"
        case 404:
            return "Not Found"
        case 500:
            return "Internal Server Error"
        case code if 200 <= code < 300:
            return f"Success ({code})"
        case code if 400 <= code < 500:
            return f"Client Error ({code})"
        case code if 500 <= code < 600:
            return f"Server Error ({code})"
        case _:
            return "Unknown Status"

print(handle_response(200))  # OK - Success
print(handle_response(404))  # Not Found
print(handle_response(503))  # Server Error (503)
```

### Command Parser

```python
def parse_command(command):
    match command.split():
        case ["quit"] | ["exit"]:
            print("Exiting program...")
            return True

        case ["help"]:
            print("Available commands: quit, help, echo, add, greet")

        case ["echo", *words]:
            print(" ".join(words))

        case ["add", x, y]:
            try:
                result = int(x) + int(y)
                print(f"{x} + {y} = {result}")
            except ValueError:
                print("Invalid numbers")

        case ["greet", name]:
            print(f"Hello, {name}!")

        case _:
            print("Unknown command. Type 'help' for available commands.")

    return False

# Sử dụng
parse_command("help")           # Available commands: ...
parse_command("echo Hello World")  # Hello World
parse_command("add 5 3")        # 5 + 3 = 8
parse_command("greet Alice")    # Hello, Alice!
```

### JSON API Response Handler

```python
def process_api_response(response):
    match response:
        case {"status": "success", "data": data}:
            print(f"Success! Data: {data}")

        case {"status": "error", "message": msg, "code": code}:
            print(f"Error {code}: {msg}")

        case {"status": "error", "message": msg}:
            print(f"Error: {msg}")

        case {"status": "pending", "task_id": task_id}:
            print(f"Task {task_id} is pending...")

        case {"status": status}:
            print(f"Unknown status: {status}")

        case _:
            print("Invalid response format")

# Test
process_api_response({"status": "success", "data": {"id": 1, "name": "John"}})
# Success! Data: {'id': 1, 'name': 'John'}

process_api_response({"status": "error", "message": "Not found", "code": 404})
# Error 404: Not found

process_api_response({"status": "pending", "task_id": "abc123"})
# Task abc123 is pending...
```

### Shape Calculator

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

class Triangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

def calculate_area(shape):
    import math

    match shape:
        case Circle(radius=r):
            area = math.pi * r ** 2
            return f"Circle area: {area:.2f}"

        case Rectangle(width=w, height=h):
            area = w * h
            return f"Rectangle area: {area:.2f}"

        case Triangle(base=b, height=h):
            area = 0.5 * b * h
            return f"Triangle area: {area:.2f}"

        case _:
            return "Unknown shape"

# Test
print(calculate_area(Circle(5)))           # Circle area: 78.54
print(calculate_area(Rectangle(4, 6)))     # Rectangle area: 24.00
print(calculate_area(Triangle(8, 5)))      # Triangle area: 20.00
```

### Game Move Handler

```python
def handle_move(move):
    match move:
        case ("go", direction) if direction in ["north", "south", "east", "west"]:
            print(f"Moving {direction}")

        case ("take", item):
            print(f"Taking {item}")

        case ("drop", item):
            print(f"Dropping {item}")

        case ("use", item, "on", target):
            print(f"Using {item} on {target}")

        case ("attack", enemy):
            print(f"Attacking {enemy}")

        case ("inventory",):
            print("Showing inventory")

        case _:
            print("Invalid move")

# Test
handle_move(("go", "north"))              # Moving north
handle_move(("take", "sword"))            # Taking sword
handle_move(("use", "key", "on", "door")) # Using key on door
handle_move(("inventory",))               # Showing inventory
```

## 8. So sánh với if-elif-else

### Khi nào dùng Match-Case?

✅ **NÊN dùng Match-Case khi:**
- Kiểm tra nhiều giá trị cụ thể
- Pattern matching phức tạp (tuples, lists, dicts)
- Destructuring dữ liệu
- Code dễ đọc và maintain hơn

```python
# ✅ TỐT với Match-Case
match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"Y-axis at {y}")
    case (x, 0):
        print(f"X-axis at {x}")
    case (x, y):
        print(f"Point ({x}, {y})")
```

❌ **KHÔNG nên dùng Match-Case khi:**
- Chỉ có 1-2 điều kiện đơn giản
- Điều kiện phức tạp với nhiều logic operators
- Python version < 3.10

```python
# ❌ KHÔNG TỐT - Quá đơn giản, dùng if tốt hơn
match age >= 18:
    case True:
        print("Adult")
    case False:
        print("Minor")

# ✅ TỐT - Dùng if
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

## 9. Lưu ý quan trọng

### Python version

```python
# Match-case CHỈ hoạt động từ Python 3.10+
import sys

if sys.version_info >= (3, 10):
    print("Match-case is supported!")
else:
    print("Please upgrade to Python 3.10+")
```

### Không có fall-through

Không giống C/Java, Python match-case **KHÔNG có fall-through**. Chỉ một case được thực thi.

```python
# Python match-case không cần 'break'
number = 2

match number:
    case 1:
        print("One")
    case 2:
        print("Two")  # Chỉ in dòng này, dừng ngay
    case 3:
        print("Three")
```

### Wildcard pattern (_)

```python
# _ match mọi giá trị (nên đặt cuối cùng)
value = 100

match value:
    case 1 | 2 | 3:
        print("Small")
    case _:
        print("Other")  # In ra dòng này
```

## Tổng kết

- **Match-Case** là Pattern Matching trong Python 3.10+
- Mạnh mẽ hơn switch-case truyền thống
- Hỗ trợ:
  - So khớp giá trị đơn giản
  - OR patterns với `|`
  - Guards với `if`
  - Destructuring: tuples, lists, dicts
  - Class instances
  - Wildcard `_`
- **Không có fall-through** - chỉ một case được thực thi
- Làm code ngắn gọn, dễ đọc hơn if-elif-else trong nhiều trường hợp
- Đặc biệt hữu ích khi làm việc với structured data (API responses, commands, shapes, etc.)
