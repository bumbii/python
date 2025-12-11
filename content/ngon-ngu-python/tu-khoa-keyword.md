---
icon: key
---

# Từ khoá (keyword)

## 1. Từ khoá là gì?

Cũng giống như các ngôn ngữ lập trình khác, khi thiết kế ngôn ngữ Python, tác giả chọn lựa một số từ (word) đặc biệt để xây dựng cú pháp và cấu trúc chương trình. Các từ đặc biệt này được gọi là từ khoá (keyword).

**Đặc điểm:**

* Không thể dùng từ khoá làm **tên biến**, **tên hàm** hay **tên lớp**.
* Phân biệt chữ hoa – chữ thường (Python phân biệt chữ hoa - thường). Ví dụ: `True` hợp lệ, nhưng `true` thì không.
* Số lượng từ khoá cố định và có thể thay đổi giữa các phiên bản Python.

## 2. Danh sách các từ khoá trong Python

<table><thead><tr><th width="313">Từ khoá</th><th width="385">Tác dụng chính</th></tr></thead><tbody><tr><td><code>False</code>, <code>True</code>, <code>None</code></td><td>Giá trị đặc biệt (Boolean, Null)</td></tr><tr><td><code>and</code>, <code>or</code>, <code>not</code>, <code>is</code>, <code>in</code></td><td>Toán tử logic &#x26; so sánh</td></tr><tr><td><code>if</code>, <code>elif</code>, <code>else</code></td><td>Cấu trúc điều kiện</td></tr><tr><td><code>for</code>, <code>while</code>, <code>break</code>, <code>continue</code></td><td>Vòng lặp</td></tr><tr><td><code>def</code>, <code>return</code>, <code>yield</code>, <code>lambda</code></td><td>Hàm</td></tr><tr><td><code>class</code>, <code>pass</code></td><td>Lập trình hướng đối tượng &#x26; câu lệnh rỗng</td></tr><tr><td><code>try</code>, <code>except</code>, <code>finally</code>, <code>raise</code>, <code>assert</code></td><td>Xử lý ngoại lệ</td></tr><tr><td><code>import</code>, <code>from</code>, <code>as</code>, <code>with</code></td><td>Thư viện &#x26; quản lý tài nguyên</td></tr><tr><td><code>global</code>, <code>nonlocal</code>, <code>del</code></td><td>Quản lý biến</td></tr><tr><td><code>async</code>, <code>await</code></td><td>Lập trình bất đồng bộ</td></tr></tbody></table>

Để biết được tất cả các từ khoá trong Python, có thể viết 1 đoạn code ngắn như sau:

```python
import keyword
print(keyword.kwlist)
```
