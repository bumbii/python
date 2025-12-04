---
description: Các bài tập về Break, Continue, Pass - Nâng cao
icon: arrows-split-up-and-left
---


# Bài tập Break, Continue, Pass - Nâng cao

1. Viết hàm **`is_prime`** kiểm tra số nguyên tố sử dụng vòng lặp với `else`. Nếu tìm thấy ước số, dùng `break`.

```python
def is_prime(n):
    # Code của bạn ở đây
    pass

# Test
print(is_prime(17))  # True
print(is_prime(15))  # False
```

> **💡 Gợi ý: Dùng `for...else`. Khối `else` chỉ chạy khi vòng lặp kết thúc bình thường (không có break)**

2. Viết hàm **`find_all_positions`** tìm tất cả vị trí của một giá trị trong list. Nếu không tìm thấy, trả về list rỗng.

```python
def find_all_positions(my_list, value):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 2, 4, 2, 5]
print(find_all_positions(numbers, 2))  # [1, 3, 5]
```

3. Viết hàm **`nested_loop_break`** với vòng lặp lồng nhau. Khi tìm thấy cặp số có tổng bằng target, dừng cả hai vòng lặp.

```python
def nested_loop_break(numbers, target):
    # Code của bạn ở đây
    # Trả về tuple (i, j, num1, num2) hoặc None
    pass

# Test
numbers = [1, 2, 3, 4, 5]
result = nested_loop_break(numbers, 7)
print(result)  # (1, 3, 2, 5) - vì 2 + 5 = 7
```

4. Viết hàm **`skip_consecutive_duplicates`** in các phần tử trong list nhưng bỏ qua các phần tử trùng lặp liên tiếp.

```python
def skip_consecutive_duplicates(items):
    # Code của bạn ở đây (dùng continue)
    pass

# Test
items = [1, 1, 2, 2, 2, 3, 1, 1, 4]
skip_consecutive_duplicates(items)
# In ra: 1 2 3 1 4
```

5. Viết hàm **`validate_list`** kiểm tra xem tất cả phần tử trong list có thỏa điều kiện không. Nếu gặp phần tử không thỏa, dừng ngay và trả về `False`.

```python
def validate_list(numbers, min_value, max_value):
    # Kiểm tra tất cả số có nằm trong khoảng [min_value, max_value]
    # Code của bạn ở đây
    pass

# Test
numbers = [5, 10, 15, 20]
print(validate_list(numbers, 1, 25))  # True
print(validate_list(numbers, 1, 18))  # False (20 > 18)
```

6. Viết hàm **`process_batch`** xử lý list theo batch (nhóm). Bỏ qua batch rỗng, dừng khi gặp batch có giá trị `None`.

```python
def process_batch(batches):
    # Code của bạn ở đây
    pass

# Test
batches = [
    [1, 2, 3],
    [],           # Bỏ qua
    [4, 5],
    None,         # Dừng tại đây
    [6, 7]        # Không xử lý
]
process_batch(batches)
# In ra: [1, 2, 3] [4, 5]
```

7. Viết hàm **`find_longest_sequence`** tìm chuỗi con dài nhất chỉ chứa số dương. Dừng chuỗi khi gặp số không dương.

```python
def find_longest_sequence(numbers):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, -1, 5, 6, 7, 8, -2, 1, 2]
result = find_longest_sequence(numbers)
print(result)  # [5, 6, 7, 8]
```

8. Viết hàm **`safe_division`** thực hiện phép chia cho list các số. Bỏ qua trường hợp chia cho 0, dừng khi gặp chuỗi (không phải số).

```python
def safe_division(numerator, denominators):
    # Code của bạn ở đây
    pass

# Test
denominators = [2, 4, 0, 8, "invalid", 10]
results = safe_division(100, denominators)
print(results)  # [50.0, 25.0, 12.5] - bỏ qua 0, dừng tại "invalid"
```

9. Viết hàm **`parse_commands`** xử lý list các lệnh. Dừng khi gặp "STOP", bỏ qua lệnh rỗng hoặc comment (bắt đầu bằng #).

```python
def parse_commands(commands):
    # Code của bạn ở đây
    pass

# Test
commands = ["START", "# This is a comment", "", "RUN", "STOP", "END"]
result = parse_commands(commands)
print(result)  # ["START", "RUN"]
```

10. Viết hàm **`search_2d_all`** tìm tất cả vị trí của một giá trị trong ma trận 2D.

```python
def search_2d_all(matrix, value):
    # Code của bạn ở đây
    pass

# Test
matrix = [
    [1, 2, 3],
    [4, 2, 6],
    [2, 8, 9]
]
positions = search_2d_all(matrix, 2)
print(positions)  # [(0, 1), (1, 1), (2, 0)]
```

11. Viết hàm **`interactive_calculator`** tạo máy tính đơn giản. Cho phép nhập phép tính liên tục, nhập "quit" để thoát, bỏ qua input không hợp lệ.

```python
def interactive_calculator():
    # Code của bạn ở đây
    pass

# Ví dụ sử dụng:
# > 5 + 3
# = 8
# > 10 * 2
# = 20
# > invalid
# Invalid input!
# > quit
# Goodbye!
```

12. Viết hàm **`process_until_condition`** xử lý list cho đến khi thỏa một điều kiện nào đó (hàm callback).

```python
def process_until_condition(items, process_func, stop_condition):
    # Code của bạn ở đây
    pass

# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = process_until_condition(
    numbers,
    lambda x: x * 2,  # Nhân đôi
    lambda x: x > 10  # Dừng khi kết quả > 10
)
print(result)  # [2, 4, 6, 8, 10]
```

13. Viết hàm **`filter_with_lookahead`** lọc list, bỏ qua phần tử nếu phần tử tiếp theo cũng giống nó.

```python
def filter_with_lookahead(items):
    # Code của bạn ở đây
    pass

# Test
items = [1, 2, 2, 3, 4, 4, 5]
result = filter_with_lookahead(items)
print(result)  # [1, 2, 3, 4, 5] - bỏ qua 2 đầu và 4 đầu
```

14. Viết hàm **`break_on_pattern`** tìm kiếm một pattern (chuỗi con) trong list. Dừng khi tìm thấy pattern.

```python
def break_on_pattern(items, pattern):
    # Code của bạn ở đây
    pass

# Test
items = [1, 2, 3, 4, 5, 6, 7, 8]
pattern = [4, 5, 6]
index = break_on_pattern(items, pattern)
print(index)  # 3 (pattern bắt đầu tại index 3)
```

15. Viết hàm **`rate_limiter`** mô phỏng rate limiting. Xử lý tối đa n request, bỏ qua request không hợp lệ, dừng khi gặp "STOP".

```python
def rate_limiter(requests, max_requests):
    # Code của bạn ở đây
    pass

# Test
requests = ["req1", "req2", None, "req3", "req4", "STOP", "req5"]
processed = rate_limiter(requests, 3)
print(processed)  # ["req1", "req2", "req3"]
```

16. Viết hàm **`nested_search_optimized`** tìm kiếm trong danh sách lồng nhau, tối ưu bằng cách dừng sớm khi có thể.

```python
def nested_search_optimized(nested_list, target):
    # Code của bạn ở đây
    # Trả về (outer_index, inner_index) hoặc None
    pass

# Test
nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
result = nested_search_optimized(nested, 5)
print(result)  # (1, 1)
```

17. Viết hàm **`conditional_continue`** xử lý list với nhiều điều kiện continue khác nhau.

```python
def conditional_continue(numbers):
    # Bỏ qua số âm, số 0, và số > 100
    # Chỉ xử lý số dương từ 1-100
    # Code của bạn ở đây
    pass

# Test
numbers = [-5, 0, 10, 150, 50, -3, 75, 200, 25]
result = conditional_continue(numbers)
print(result)  # [10, 50, 75, 25]
```

18. Viết hàm **`state_machine`** mô phỏng state machine đơn giản. Chuyển state dựa trên input, dừng khi đạt state cuối.

```python
def state_machine(inputs):
    # States: START -> READY -> RUNNING -> DONE
    # Code của bạn ở đây
    pass

# Test
inputs = ["init", "start", "process", "finish", "extra"]
result = state_machine(inputs)
print(result)  # ["START", "READY", "RUNNING", "DONE"]
```

19. Viết hàm **`early_exit_optimization`** tính toán cho đến khi đạt độ chính xác mong muốn hoặc hết số lần lặp.

```python
def early_exit_optimization(target, max_iterations, tolerance):
    # Mô phỏng thuật toán tối ưu hóa
    # Dừng sớm nếu đạt tolerance
    # Code của bạn ở đây
    pass

# Test
result = early_exit_optimization(target=10, max_iterations=100, tolerance=0.01)
print(result)
```

20. Viết hàm **`transaction_processor`** xử lý list các giao dịch. Dừng khi tổng vượt quá limit, bỏ qua giao dịch không hợp lệ.

```python
def transaction_processor(transactions, limit):
    # Code của bạn ở đây
    pass

# Test
transactions = [100, 200, -50, 300, 400, None, 150]
result = transaction_processor(transactions, 800)
print(result)
# {
#     "processed": [100, 200, 300],
#     "total": 600,
#     "skipped": 2,
#     "stopped_at": 3
# }
```

21. Viết hàm **`parse_nested_json`** (mô phỏng) parse dữ liệu lồng nhau, dừng khi gặp lỗi, bỏ qua các trường optional.

```python
def parse_nested_json(data):
    # Code của bạn ở đây
    pass

# Test
data = {
    "users": [
        {"name": "Alice", "age": 25},
        {"name": "Bob"},  # missing age - skip
        {"name": "Charlie", "age": "invalid"},  # invalid age - stop
        {"name": "David", "age": 35}
    ]
}
result = parse_nested_json(data)
print(result)  # [{"name": "Alice", "age": 25}]
```

22. Viết hàm **`multi_level_break`** với 3 vòng lặp lồng nhau. Sử dụng flag để thoát tất cả các vòng lặp khi tìm thấy mục tiêu.

```python
def multi_level_break(matrix_3d, target):
    # Code của bạn ở đây
    pass

# Test
matrix_3d = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]],
    [[9, 10], [11, 12]]
]
result = multi_level_break(matrix_3d, 7)
print(result)  # (1, 1, 0)
```

23. Viết hàm **`lazy_evaluation`** xử lý list lớn, dừng ngay khi tìm đủ n phần tử thỏa điều kiện (tối ưu performance).

```python
def lazy_evaluation(items, condition, n):
    # Code của bạn ở đây
    pass

# Test
numbers = range(1, 1000000)  # List rất lớn
result = lazy_evaluation(numbers, lambda x: x % 7 == 0, 5)
print(result)  # [7, 14, 21, 28, 35]
```

24. Viết hàm **`circuit_breaker`** mô phỏng circuit breaker pattern. Sau n lần thất bại liên tiếp, "mở circuit" và dừng xử lý.

```python
def circuit_breaker(operations, max_failures):
    # Code của bạn ở đây
    # operations: list các function trả về True/False
    pass

# Test
operations = [
    lambda: True,
    lambda: False,
    lambda: False,
    lambda: False,  # Circuit opens here
    lambda: True    # Not executed
]
result = circuit_breaker(operations, 3)
print(result)  # {"success": 1, "failures": 3, "circuit_open": True}
```

25. Viết hàm **`pagination_processor`** xử lý dữ liệu theo trang. Bỏ qua trang rỗng, dừng khi không còn dữ liệu hoặc gặp lỗi.

```python
def pagination_processor(get_page_func, max_pages):
    # get_page_func: function nhận page_number, trả về data hoặc None
    # Code của bạn ở đây
    pass

# Test
def get_page(page_num):
    data = {
        1: [1, 2, 3],
        2: [],
        3: [4, 5],
        4: None
    }
    return data.get(page_num)

result = pagination_processor(get_page, 10)
print(result)  # [[1, 2, 3], [4, 5]]
```
