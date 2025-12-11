---
description: Các bài tập về *args và **kwargs - Nâng cao
icon: asterisk
---

# Bài tập *args và **kwargs - Nâng cao

1. Viết decorator **`@log_calls`** log tất cả function calls với args và kwargs.

```python
def log_calls(func):
    pass

@log_calls
def add(a, b, c=0):
    return a + b + c

# Test: should log arguments và return value
```

2. Viết hàm **`curry(func, *args)`** implement currying.

```python
def curry(func, *args):
    # Partial application
    pass

# Test
def add_three(a, b, c):
    return a + b + c

add_5 = curry(add_three, 5)
result = add_5(10, 15)
print(result)  # 30
```

3. Viết class **`FlexibleConfig`** lưu config với args và kwargs.

```python
class FlexibleConfig:
    def __init__(self, *args, **kwargs):
        pass

    def get(self, key, default=None):
        pass

# Test
config = FlexibleConfig("db_host", "db_port", username="admin", password="secret")
```

4. Viết hàm **`pipe(*functions)`** compose functions.

```python
def pipe(*functions):
    # Chạy functions theo thứ tự, output của func này là input của func kế
    pass

# Test
def add_5(x): return x + 5
def multiply_2(x): return x * 2
def subtract_3(x): return x - 3

result = pipe(add_5, multiply_2, subtract_3)(10)
print(result)  # (10 + 5) * 2 - 3 = 27
```

5. Viết hàm **`retry(max_attempts, *exceptions, **options)`** retry decorator.

```python
def retry(max_attempts, *exceptions, **options):
    # options: delay=1, exponential_backoff=False
    pass

@retry(3, ValueError, TypeError, delay=2)
def unstable_function():
    import random
    if random.random() < 0.7:
        raise ValueError("Random error")
    return "Success"
```

6. Viết **`DynamicRouter`** class route requests với dynamic handlers.

```python
class DynamicRouter:
    def __init__(self):
        self.routes = {}

    def route(self, path, *middlewares, **options):
        # Decorator đăng ký route
        pass

    def handle(self, path, *args, **kwargs):
        # Gọi handler với middlewares
        pass

# Test
router = DynamicRouter()

@router.route("/users", auth_required=True)
def get_users(*args, **kwargs):
    return "Users list"
```

7. Viết hàm **`memoize_flexible(*args, **kwargs)`** với custom cache key.

```python
def memoize_flexible(key_func=None, max_size=None):
    # key_func: function tạo cache key từ args/kwargs
    pass

@memoize_flexible(key_func=lambda x, y: f"{x}_{y}")
def expensive_calculation(x, y):
    return x ** y
```

8. Viết **`EventEmitter`** với flexible event handlers.

```python
class EventEmitter:
    def on(self, event, *callbacks, **options):
        # options: once=True, priority=0
        pass

    def emit(self, event, *args, **kwargs):
        pass

# Test
emitter = EventEmitter()
emitter.on("user_login", log_handler, notify_handler, once=False)
emitter.emit("user_login", username="alice", ip="192.168.1.1")
```

9. Viết hàm **`partial_from_right(*args, **kwargs)`** partial từ bên phải.

```python
def partial_from_right(func, *args, **kwargs):
    # Bind arguments từ bên phải
    pass

# Test
def subtract(a, b, c):
    return a - b - c

sub_from_10 = partial_from_right(subtract, 10)  # c = 10
result = sub_from_10(50, 20)  # 50 - 20 - 10
print(result)  # 20
```

10. Viết **`QueryBuilder`** với chainable methods và flexible conditions.

```python
class QueryBuilder:
    def where(self, *conditions, **kwargs):
        # conditions: SQL-like strings
        # kwargs: field=value pairs
        pass

    def order_by(self, *fields, **options):
        # options: desc=True
        pass

    def limit(self, *args):
        pass

    def build(self):
        pass

# Test
query = QueryBuilder()
sql = query.where("age > 18", "active = true", city="Hanoi") \\
           .order_by("name", desc=True) \\
           .limit(10) \\
           .build()
```

11. Viết hàm **`validate(*validators, **options)`** decorator validation.

```python
def validate(*validators, **options):
    # validators: functions kiểm tra args
    # options: on_error="raise" | "return_none"
    pass

def is_positive(x):
    return x > 0

def is_string(x):
    return isinstance(x, str)

@validate(is_positive, is_string)
def process_data(num, text):
    return f"{text}: {num}"
```

12. Viết **`MultiDispatch`** function overloading với type hints.

```python
class MultiDispatch:
    def register(self, *types):
        # Decorator đăng ký implementation cho types
        pass

    def __call__(self, *args, **kwargs):
        # Gọi implementation phù hợp
        pass

# Test
process = MultiDispatch()

@process.register(int, int)
def _(a, b):
    return a + b

@process.register(str, str)
def _(a, b):
    return a + " " + b

print(process(1, 2))        # 3
print(process("hello", "world"))  # "hello world"
```

13. Viết hàm **`batch_process(*items, **config)`** xử lý batch với retry.

```python
def batch_process(*items, **config):
    # config: batch_size=10, retry=3, on_error="skip"|"stop"
    pass

# Test
def process_item(item):
    # Process logic
    pass

results = batch_process(1, 2, 3, 4, 5, batch_size=2, retry=3)
```

14. Viết **`FlexibleCache`** với LRU và TTL support.

```python
class FlexibleCache:
    def __init__(self, *args, **kwargs):
        # args: cache strategies
        # kwargs: max_size, ttl
        pass

    def cache(self, func):
        # Decorator với flexible caching
        pass

# Test
cache = FlexibleCache(max_size=100, ttl=60)

@cache.cache
def get_user(user_id, include_posts=False):
    pass
```

15. Viết hàm **`aggregate(*operations, **config)`** data aggregation.

```python
def aggregate(*operations, **config):
    # operations: ("sum", "field"), ("avg", "field"), etc.
    # config: group_by="category"
    pass

# Test
data = [
    {"category": "A", "value": 10},
    {"category": "A", "value": 20},
    {"category": "B", "value": 30}
]

result = aggregate(
    ("sum", "value"),
    ("count", "*"),
    group_by="category",
    data=data
)
```

16. Viết **`MiddlewareStack`** với flexible middleware chain.

```python
class MiddlewareStack:
    def use(self, *middlewares, **options):
        # options: position="end"|"start", priority=0
        pass

    def execute(self, *args, **kwargs):
        # Chạy through middleware stack
        pass

# Test
stack = MiddlewareStack()
stack.use(logger_middleware, auth_middleware)
stack.execute(request_data)
```

17. Viết hàm **`transform(*transformers, **config)`** data transformation pipeline.

```python
def transform(*transformers, **config):
    # transformers: functions transform data
    # config: skip_errors=True, log=True
    pass

# Test
def uppercase(x): return x.upper()
def reverse(x): return x[::-1]
def add_prefix(x, prefix=">>>"): return prefix + x

result = transform(uppercase, reverse, add_prefix)(
    "hello",
    prefix=">>>"
)
```

18. Viết **`AsyncBatch`** process items async với flexible callbacks.

```python
class AsyncBatch:
    def __init__(self, *processors, **config):
        # processors: async functions
        # config: max_concurrent=5, timeout=30
        pass

    async def process(self, *items, **options):
        # options: on_success, on_error callbacks
        pass

# Test (simplified sync version)
batch = AsyncBatch(processor1, processor2, max_concurrent=3)
results = batch.process(item1, item2, item3)
```

19. Viết hàm **`serialize(*fields, **config)`** flexible serialization.

```python
def serialize(*fields, **config):
    # fields: field names to include
    # config: format="json"|"xml", exclude=[]
    pass

# Test
class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

@serialize("name", "email", format="json", exclude=["password"])
def get_user_data(user):
    return user.__dict__
```

20. Viết **`StateMachine`** với flexible transitions và callbacks.

```python
class StateMachine:
    def __init__(self, initial, *states, **config):
        # config: on_transition callback
        pass

    def add_transition(self, from_state, to_state, *guards, **options):
        # guards: validation functions
        # options: on_enter, on_exit callbacks
        pass

    def transition(self, event, *args, **kwargs):
        pass

# Test
sm = StateMachine("idle", "running", "stopped")
sm.add_transition("idle", "running", lambda: True, on_enter=start_callback)
sm.transition("start")
```
