---
description: Các bài tập về Exception Handling - Nâng cao
icon: shield-halved
---

# Bài tập Exception Handling - Nâng cao

1. Viết class **`InvalidAgeError`** (custom exception) để validate tuổi (phải từ 0-150).

```python
class InvalidAgeError(Exception):
    pass

def validate_age(age):
    # Code của bạn ở đây
    pass

# Test
try:
    validate_age(-5)
except InvalidAgeError as e:
    print(f"Lỗi: {e}")
```

2. Viết decorator **`exception_handler`** tự động bắt và log exception.

```python
def exception_handler(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            print(f"Error in {func.__name__}: {e}")
            return None
    return wrapper

@exception_handler
def divide(a, b):
    return a / b

# Test
print(divide(10, 2))  # 5.0
print(divide(10, 0))  # Error message, returns None
```

3. Viết context manager class **`FileHandler`** tự động đóng file kể cả khi có lỗi.

```python
class FileHandler:
    def __init__(self, filename, mode):
        # Code của bạn ở đây
        pass

    def __enter__(self):
        # Code của bạn ở đây
        pass

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Code của bạn ở đây
        pass

# Test
with FileHandler("test.txt", "w") as f:
    f.write("Hello World")
```

4. Viết hàm **`retry_on_exception`** thử lại operation n lần khi gặp exception.

```python
def retry_on_exception(func, max_retries=3, delay=1):
    import time
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise
            print(f"Attempt {attempt + 1} failed: {e}")
            time.sleep(delay)

# Test
def unreliable_function():
    import random
    if random.random() < 0.7:
        raise ConnectionError("Connection failed")
    return "Success"

result = retry_on_exception(unreliable_function)
```

5. Viết hàm **`safe_chain_operations`** thực hiện nhiều operations, dừng và rollback khi có lỗi.

```python
def safe_chain_operations(operations, rollback_operations):
    executed = []
    try:
        for i, op in enumerate(operations):
            op()
            executed.append(i)
    except Exception as e:
        print(f"Error at operation {len(executed)}: {e}")
        # Rollback
        for i in reversed(executed):
            try:
                rollback_operations[i]()
            except:
                pass
        raise

# Test (xây dựng test case riêng)
```

6. Viết class **`ValidationError`** với nhiều loại validation khác nhau.

```python
class ValidationError(Exception):
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

def validate_user_data(data):
    if "email" not in data:
        raise ValidationError("email", "Email is required")
    if "@" not in data["email"]:
        raise ValidationError("email", "Invalid email format")
    if "age" in data and data["age"] < 0:
        raise ValidationError("age", "Age must be positive")

# Test
try:
    validate_user_data({"email": "invalid"})
except ValidationError as e:
    print(f"Validation failed - {e.field}: {e.message}")
```

7. Viết hàm **`exception_context_manager`** sử dụng contextlib để tạo context manager.

```python
from contextlib import contextmanager

@contextmanager
def exception_context_manager(operation_name):
    print(f"Starting {operation_name}")
    try:
        yield
    except Exception as e:
        print(f"Error in {operation_name}: {e}")
        raise
    finally:
        print(f"Finished {operation_name}")

# Test
with exception_context_manager("database operation"):
    # Perform database operations
    pass
```

8. Viết hàm **`aggregate_exceptions`** thu thập tất cả exceptions từ nhiều operations.

```python
def aggregate_exceptions(operations):
    errors = []
    for i, op in enumerate(operations):
        try:
            op()
        except Exception as e:
            errors.append((i, e))

    if errors:
        raise Exception(f"Multiple errors occurred: {errors}")

# Test
def op1():
    raise ValueError("Error 1")

def op2():
    return "Success"

def op3():
    raise TypeError("Error 2")

try:
    aggregate_exceptions([op1, op2, op3])
except Exception as e:
    print(e)
```

9. Viết **`ExceptionLogger`** class ghi log chi tiết exceptions (timestamp, traceback, context).

```python
import traceback
from datetime import datetime

class ExceptionLogger:
    def __init__(self, log_file="exceptions.log"):
        self.log_file = log_file

    def log(self, exception, context=None):
        with open(self.log_file, "a") as f:
            f.write(f"\n{'='*50}\n")
            f.write(f"Timestamp: {datetime.now()}\n")
            f.write(f"Exception: {type(exception).__name__}\n")
            f.write(f"Message: {str(exception)}\n")
            if context:
                f.write(f"Context: {context}\n")
            f.write(f"Traceback:\n{traceback.format_exc()}\n")

# Test
logger = ExceptionLogger()
try:
    result = 10 / 0
except Exception as e:
    logger.log(e, context="Division operation")
```

10. Viết hàm **`timeout_operation`** thực thi operation với timeout, raise exception nếu quá thời gian.

```python
import signal

class TimeoutError(Exception):
    pass

def timeout_handler(signum, frame):
    raise TimeoutError("Operation timed out")

def timeout_operation(func, timeout_seconds):
    signal.signal(signal.SIGALRM, timeout_handler)
    signal.alarm(timeout_seconds)
    try:
        result = func()
        signal.alarm(0)
        return result
    except TimeoutError:
        print("Operation timed out!")
        raise

# Test (cẩn thận với signal trên Windows)
```

11. Viết **`ExceptionChain`** xử lý chuỗi exceptions với context.

```python
class DatabaseError(Exception):
    pass

class NetworkError(Exception):
    pass

def process_data():
    try:
        fetch_from_database()
    except DatabaseError as e:
        raise NetworkError("Failed to fetch data") from e

# Test và hiển thị exception chain
try:
    process_data()
except NetworkError as e:
    print(f"Current exception: {e}")
    print(f"Caused by: {e.__cause__}")
```

12. Viết hàm **`safe_parallel_execution`** chạy nhiều tasks song song, thu thập tất cả exceptions.

```python
from concurrent.futures import ThreadPoolExecutor, as_completed

def safe_parallel_execution(tasks):
    results = []
    errors = []

    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(task) for task in tasks]

        for future in as_completed(futures):
            try:
                result = future.result()
                results.append(result)
            except Exception as e:
                errors.append(e)

    return results, errors

# Test
def task1():
    return "Success"

def task2():
    raise ValueError("Error in task2")

results, errors = safe_parallel_execution([task1, task2])
print(f"Results: {results}, Errors: {errors}")
```

13. Viết **`ResourceManager`** quản lý tài nguyên với proper cleanup kể cả khi có exception.

```python
class ResourceManager:
    def __init__(self):
        self.resources = []

    def acquire(self, resource):
        self.resources.append(resource)
        resource.open()

    def release_all(self):
        for resource in reversed(self.resources):
            try:
                resource.close()
            except Exception as e:
                print(f"Error closing resource: {e}")

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.release_all()
        return False

# Test với mock resources
```

14. Viết hàm **`exception_statistics`** thu thập thống kê về exceptions trong một khối code.

```python
from collections import Counter

class ExceptionStats:
    def __init__(self):
        self.exceptions = []

    def record(self, exception):
        self.exceptions.append(type(exception).__name__)

    def get_statistics(self):
        return Counter(self.exceptions)

    def most_common(self, n=5):
        return Counter(self.exceptions).most_common(n)

# Test
stats = ExceptionStats()
operations = [...]  # List of operations
for op in operations:
    try:
        op()
    except Exception as e:
        stats.record(e)

print(stats.get_statistics())
```

15. Viết **`CircuitBreaker`** pattern để prevent cascading failures.

```python
from datetime import datetime, timedelta

class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failures = 0
        self.last_failure_time = None
        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN

    def call(self, func, *args, **kwargs):
        if self.state == "OPEN":
            if datetime.now() - self.last_failure_time > timedelta(seconds=self.timeout):
                self.state = "HALF_OPEN"
            else:
                raise Exception("Circuit breaker is OPEN")

        try:
            result = func(*args, **kwargs)
            self.on_success()
            return result
        except Exception as e:
            self.on_failure()
            raise

    def on_success(self):
        self.failures = 0
        self.state = "CLOSED"

    def on_failure(self):
        self.failures += 1
        self.last_failure_time = datetime.now()
        if self.failures >= self.failure_threshold:
            self.state = "OPEN"

# Test
breaker = CircuitBreaker()
for i in range(10):
    try:
        breaker.call(unreliable_service)
    except Exception as e:
        print(f"Attempt {i}: {e}")
```

16. Viết hàm **`exception_to_result`** chuyển exceptions thành Result type (Either monad).

```python
class Result:
    def __init__(self, value=None, error=None):
        self.value = value
        self.error = error

    @property
    def is_success(self):
        return self.error is None

    @property
    def is_failure(self):
        return self.error is not None

def exception_to_result(func):
    def wrapper(*args, **kwargs):
        try:
            value = func(*args, **kwargs)
            return Result(value=value)
        except Exception as e:
            return Result(error=e)
    return wrapper

@exception_to_result
def divide(a, b):
    return a / b

# Test
result = divide(10, 2)
if result.is_success:
    print(f"Result: {result.value}")
else:
    print(f"Error: {result.error}")
```

17. Viết **`ExceptionGroup`** (Python 3.11+) xử lý nhiều exceptions cùng lúc.

```python
# Python 3.11+
def process_multiple_items(items):
    errors = []
    for item in items:
        try:
            process_item(item)
        except Exception as e:
            errors.append(e)

    if errors:
        raise ExceptionGroup("Multiple processing errors", errors)

# Test
try:
    process_multiple_items([1, 2, 3, 4, 5])
except ExceptionGroup as eg:
    for error in eg.exceptions:
        print(f"Error: {error}")
```

18. Viết **`SmartRetry`** với exponential backoff và jitter.

```python
import time
import random

def smart_retry(func, max_retries=5, base_delay=1, max_delay=60):
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise

            # Exponential backoff với jitter
            delay = min(base_delay * (2 ** attempt), max_delay)
            jitter = random.uniform(0, delay * 0.1)
            sleep_time = delay + jitter

            print(f"Attempt {attempt + 1} failed: {e}")
            print(f"Retrying in {sleep_time:.2f} seconds...")
            time.sleep(sleep_time)

# Test
def flaky_api_call():
    import random
    if random.random() < 0.8:
        raise ConnectionError("API unavailable")
    return "Success"

result = smart_retry(flaky_api_call)
```

19. Viết **`TransactionManager`** với rollback support.

```python
class TransactionManager:
    def __init__(self):
        self.operations = []
        self.rollback_operations = []

    def execute(self, operation, rollback):
        try:
            result = operation()
            self.operations.append(operation)
            self.rollback_operations.append(rollback)
            return result
        except Exception:
            self.rollback()
            raise

    def rollback(self):
        for rollback_op in reversed(self.rollback_operations):
            try:
                rollback_op()
            except Exception as e:
                print(f"Rollback error: {e}")

    def commit(self):
        self.operations.clear()
        self.rollback_operations.clear()

# Test
manager = TransactionManager()
try:
    manager.execute(lambda: create_user(), lambda: delete_user())
    manager.execute(lambda: send_email(), lambda: cancel_email())
    manager.commit()
except Exception:
    print("Transaction failed and rolled back")
```

20. Viết comprehensive **`ExceptionHandler`** middleware cho web applications.

```python
class ExceptionHandler:
    def __init__(self):
        self.handlers = {}

    def register(self, exception_type, handler):
        self.handlers[exception_type] = handler

    def handle(self, exception):
        handler = self.handlers.get(type(exception))
        if handler:
            return handler(exception)

        # Default handler
        return self.default_handler(exception)

    def default_handler(self, exception):
        return {
            "error": str(exception),
            "type": type(exception).__name__,
            "status": 500
        }

# Test
handler = ExceptionHandler()
handler.register(ValueError, lambda e: {"error": str(e), "status": 400})
handler.register(KeyError, lambda e: {"error": "Not found", "status": 404})

try:
    raise ValueError("Invalid input")
except Exception as e:
    response = handler.handle(e)
    print(response)
```
