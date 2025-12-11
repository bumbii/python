---
icon: calculator-simple
---

# Biểu thức số học (Arithmetic expression)

Biểu thức số học (hay ngắn gọn là biểu thức) là một tập hợp các [toán tử số học](cac-toan-tu-so-hoc.mdx) và các chữ số. Một biểu thức có thể chứa một hoặc nhiều toán tử và chữ số. Trong ví dụ dưới, ta có một biểu thức chứa 2 toán tử (<mark style="color:red;">**`*`**</mark> và <mark style="color:red;">**`+`**</mark>) và 3 chữ số:

```python
7 * 5 + 12
```

Các chữ số trong một biểu thức còn được gọi là toán hạng (operand).

Khi biểu thức có nhiều toán tử thì thứ tự thực hiện phép tính giống như trong toán học:

1. `()`  - dấu ngoặc đơn có độ ưu tiên cao nhất, tính trước trong dấu ngoặc đơn.
2. `**` - luỹ thừa được tính tiếp theo
3. `*`, `/`, `//`, `%` - nhân, chia, chia lấy phần nguyên, chia lấy phần dư
4. `+`, `-` - cộng trừ được tính sau cùng

Ví dụ:

```python
(3 + 4) * 6 / 2
= 7 * 6 / 2
= 42 / 2
= 21.0
```
