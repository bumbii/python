---
description: Các bài tập về Modules - Nâng cao
icon: puzzle-piece
---

# Bài tập Modules - Nâng cao

1. Tạo module `decorators.py` với timer decorator đo thời gian chạy function.

```python
# File: decorators.py
import time

def timer(func):
    # Decorator đo thời gian thực thi
    pass

# Test
@timer
def slow_function():
    time.sleep(2)
```

2. Tạo package `database` mô phỏng CRUD operations.

```
database/
    __init__.py
    connection.py
    operations.py
    models.py
```

```python
# File: database/connection.py
class Database:
    def __init__(self):
        self.data = {}

    def connect(self):
        pass

# File: database/operations.py
# Implement CRUD: create, read, update, delete
```

3. Tạo module `logger.py` với file và console logging.

```python
# File: logger.py

def log_to_file(message, filename="app.log"):
    # Ghi log vào file với timestamp
    pass

def log_to_console(message, level="INFO"):
    # In log ra console với format: [LEVEL] timestamp: message
    pass
```

4. Tạo module `cache.py` implement simple caching decorator.

```python
# File: cache.py

def cache(func):
    # Cache kết quả function với arguments làm key
    cached_results = {}
    pass

# Test
@cache
def expensive_computation(n):
    return n ** 2
```

5. Tạo package `validators` với nhiều loại validation.

```
validators/
    __init__.py
    email.py
    phone.py
    password.py
```

```python
# File: validators/email.py
def validate_email(email):
    # Kiểm tra format email
    pass

# File: validators/phone.py
def validate_phone(phone):
    # Kiểm tra format số điện thoại
    pass

# File: validators/password.py
def validate_password(password):
    # Kiểm tra độ mạnh password (length, uppercase, digits, special chars)
    pass
```

6. Tạo module `singleton.py` implement Singleton pattern.

```python
# File: singleton.py

class Singleton:
    _instance = None

    def __new__(cls):
        # Ensure only one instance
        pass

# Test
s1 = Singleton()
s2 = Singleton()
assert s1 is s2  # Phải là cùng một object
```

7. Tạo module `config_loader.py` đọc config từ nhiều nguồn.

```python
# File: config_loader.py

class Config:
    def __init__(self):
        self.settings = {}

    def load_from_file(self, filename):
        # Đọc config từ file (key=value format)
        pass

    def load_from_dict(self, d):
        # Load từ dictionary
        pass

    def get(self, key, default=None):
        # Lấy giá trị config
        pass
```

8. Tạo package `api` mô phỏng REST API client.

```
api/
    __init__.py
    client.py
    endpoints.py
    exceptions.py
```

```python
# File: api/client.py
class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def get(self, endpoint):
        pass

    def post(self, endpoint, data):
        pass

# File: api/exceptions.py
class APIError(Exception):
    pass
```

9. Tạo module `rate_limiter.py` giới hạn số lần gọi function.

```python
# File: rate_limiter.py
import time

def rate_limit(max_calls, time_window):
    """
    Decorator giới hạn max_calls trong time_window giây
    """
    pass

# Test
@rate_limit(max_calls=5, time_window=10)
def api_call():
    print("API called")
```

10. Tạo module `plugin_system.py` cho phép load plugins động.

```python
# File: plugin_system.py
import importlib

class PluginManager:
    def __init__(self):
        self.plugins = {}

    def load_plugin(self, plugin_name):
        # Động load module theo tên
        pass

    def execute_plugin(self, plugin_name, *args, **kwargs):
        # Chạy plugin
        pass
```

11. Tạo package `serializers` chuyển đổi data formats.

```
serializers/
    __init__.py
    json_serializer.py
    xml_serializer.py
    csv_serializer.py
```

```python
# File: serializers/json_serializer.py
import json

def serialize(data):
    # Chuyển Python object sang JSON string
    pass

def deserialize(json_string):
    # Chuyển JSON string sang Python object
    pass
```

12. Tạo module `retry.py` với retry decorator.

```python
# File: retry.py
import time

def retry(max_attempts=3, delay=1, exceptions=(Exception,)):
    """
    Retry function khi gặp exception
    """
    pass

# Test
@retry(max_attempts=3, delay=2)
def unstable_function():
    import random
    if random.random() < 0.7:
        raise ValueError("Random error")
    return "Success"
```

13. Tạo module `middleware.py` cho request/response processing.

```python
# File: middleware.py

class Middleware:
    def __init__(self):
        self.middlewares = []

    def use(self, func):
        # Thêm middleware
        pass

    def process(self, request):
        # Chạy request qua tất cả middlewares
        pass
```

14. Tạo package `orm` mô phỏng ORM đơn giản.

```
orm/
    __init__.py
    model.py
    query.py
    fields.py
```

```python
# File: orm/model.py
class Model:
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    def save(self):
        # Lưu vào "database"
        pass

    @classmethod
    def find(cls, id):
        # Tìm theo ID
        pass

# File: orm/fields.py
class Field:
    def __init__(self, field_type, required=False):
        self.field_type = field_type
        self.required = required
```

15. Tạo module `event_emitter.py` implement event system.

```python
# File: event_emitter.py

class EventEmitter:
    def __init__(self):
        self.events = {}

    def on(self, event_name, callback):
        # Đăng ký listener
        pass

    def emit(self, event_name, *args, **kwargs):
        # Trigger event
        pass

    def off(self, event_name, callback):
        # Remove listener
        pass

# Test
emitter = EventEmitter()

def on_user_login(username):
    print(f"{username} logged in")

emitter.on("user_login", on_user_login)
emitter.emit("user_login", "Alice")
```

16. Tạo module `dependency_injection.py` implement DI container.

```python
# File: dependency_injection.py

class Container:
    def __init__(self):
        self.services = {}

    def register(self, name, service):
        # Đăng ký service
        pass

    def resolve(self, name):
        # Lấy service
        pass

# Test
container = Container()
container.register("db", Database())
db = container.resolve("db")
```

17. Tạo package `testing` với test utilities.

```
testing/
    __init__.py
    assertions.py
    mocks.py
    fixtures.py
```

```python
# File: testing/assertions.py
class Assert:
    @staticmethod
    def equal(actual, expected):
        pass

    @staticmethod
    def not_equal(actual, expected):
        pass

# File: testing/mocks.py
class Mock:
    def __init__(self):
        self.calls = []

    def __call__(self, *args, **kwargs):
        self.calls.append((args, kwargs))
```

18. Tạo module `lazy_loader.py` lazy load modules.

```python
# File: lazy_loader.py

class LazyModule:
    def __init__(self, module_name):
        self.module_name = module_name
        self._module = None

    def __getattr__(self, name):
        # Load module khi được truy cập lần đầu
        pass

# Test
math_lazy = LazyModule("math")
print(math_lazy.sqrt(16))  # Module loaded tại đây
```

19. Tạo module `context_managers.py` với custom context managers.

```python
# File: context_managers.py

class Timer:
    def __enter__(self):
        # Start timer
        pass

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Stop timer và print elapsed time
        pass

class FileHandler:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode

    def __enter__(self):
        # Open file
        pass

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Close file
        pass

# Test
with Timer():
    # Code to measure
    pass
```

20. Tạo package `data_structures` với custom data structures.

```
data_structures/
    __init__.py
    stack.py
    queue.py
    linked_list.py
```

```python
# File: data_structures/stack.py
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        pass

    def pop(self):
        pass

    def peek(self):
        pass

    def is_empty(self):
        pass

# File: data_structures/queue.py
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        pass

    def dequeue(self):
        pass
```

21. Tạo module `state_machine.py` implement state machine pattern.

```python
# File: state_machine.py

class StateMachine:
    def __init__(self, initial_state):
        self.state = initial_state
        self.transitions = {}

    def add_transition(self, from_state, to_state, condition=None):
        # Thêm transition rule
        pass

    def transition(self, event):
        # Chuyển state
        pass

# Test
sm = StateMachine("idle")
sm.add_transition("idle", "running", lambda: True)
```

22. Tạo module `observer.py` implement Observer pattern.

```python
# File: observer.py

class Observable:
    def __init__(self):
        self.observers = []

    def attach(self, observer):
        pass

    def detach(self, observer):
        pass

    def notify(self, *args, **kwargs):
        pass

class Observer:
    def update(self, *args, **kwargs):
        pass
```

23. Tạo package `crypto` với encryption/decryption utilities.

```python
# File: crypto/cipher.py

class Caesar:
    @staticmethod
    def encrypt(text, shift):
        # Caesar cipher encryption
        pass

    @staticmethod
    def decrypt(text, shift):
        # Caesar cipher decryption
        pass

class XOR:
    @staticmethod
    def encrypt(text, key):
        # XOR encryption
        pass
```

24. Tạo module `pool.py` implement object pool pattern.

```python
# File: pool.py

class ObjectPool:
    def __init__(self, factory, size):
        self.factory = factory
        self.size = size
        self.available = []
        self.in_use = []

    def acquire(self):
        # Lấy object từ pool
        pass

    def release(self, obj):
        # Trả object về pool
        pass
```

25. Tạo package `framework` mô phỏng web framework đơn giản.

```
framework/
    __init__.py
    app.py
    router.py
    request.py
    response.py
```

```python
# File: framework/app.py
class App:
    def __init__(self):
        self.router = Router()

    def route(self, path):
        # Decorator để đăng ký route
        pass

    def run(self):
        pass

# File: framework/router.py
class Router:
    def __init__(self):
        self.routes = {}

    def add_route(self, path, handler):
        pass

    def match(self, path):
        pass

# Usage example:
app = App()

@app.route("/")
def home():
    return "Home Page"

@app.route("/about")
def about():
    return "About Page"
```
