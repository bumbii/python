---
icon: function
---

# Các hàm số học trong Python (Arithmetic functions)

## 1. Các hàm số sẵn có (built-in functions)

Python cung cấp một số hàm số học cớ sẵn (không cần import)

<table><thead><tr><th>Hàm</th><th width="256">Ý nghĩa</th><th width="169">Ví dụ</th><th width="92">Kết quả</th></tr></thead><tbody><tr><td><code>abs(x)</code></td><td>Giá trị tuyệt đối</td><td><code>abs(-7)</code></td><td><code>7</code></td></tr><tr><td><code>pow(x, y)</code></td><td>Lũy thừa (<code>x ** y</code>)</td><td><code>pow(2, 3)</code></td><td><code>8</code></td></tr><tr><td><code>round(x, n)</code></td><td>Làm tròn số <code>x</code> đến <code>n</code> chữ số thập phân (mặc định 0)</td><td><code>round(3.14159, 2)</code></td><td><code>3.14</code></td></tr><tr><td><code>max(a, b, …)</code></td><td>Trả về số lớn nhất</td><td><code>max(1, 5, 3)</code></td><td><code>5</code></td></tr><tr><td><code>min(a, b, …)</code></td><td>Trả về số nhỏ nhất</td><td><code>min(1, 5, 3)</code></td><td><code>1</code></td></tr><tr><td><code>sum(iterable)</code></td><td>Tính tổng dãy số</td><td><code>sum([1, 2, 3])</code></td><td><code>6</code></td></tr><tr><td><code>divmod(a, b)</code></td><td>Trả về <code>(thương, dư)</code> khi chia</td><td><code>divmod(7, 3)</code></td><td><code>(2, 1)</code></td></tr></tbody></table>



## 2. Hàm số học trong module `math`

Để dùng được các hàm này ta phải import:

```
import math
```

🔹 **Hàm lượng giác & góc**

<table><thead><tr><th width="172">Hàm</th><th width="202">Ý nghĩa</th><th width="294">Ví dụ</th></tr></thead><tbody><tr><td><code>math.sin(x)</code></td><td>Sin (x tính bằng radian)</td><td><code>math.sin(math.pi/2) # 1.0</code></td></tr><tr><td><code>math.cos(x)</code></td><td>Cos</td><td><code>math.cos(0) # 1.0</code></td></tr><tr><td><code>math.tan(x)</code></td><td>Tang</td><td><code>math.tan(math.pi/4) # 1.0</code></td></tr><tr><td><code>math.asin(x)</code></td><td>Arcsin</td><td><code>math.asin(1) # 1.5707...</code></td></tr><tr><td><code>math.degrees(x)</code></td><td>Đổi radian → độ</td><td><code>math.degrees(math.pi) # 180.0</code></td></tr><tr><td><code>math.radians(x)</code></td><td>Đổi độ → radian</td><td><code>math.radians(180) # 3.14159</code></td></tr></tbody></table>

🔹 **Hàm mũ & logarit**

<table><thead><tr><th width="168">Hàm</th><th width="211">Ý nghĩa</th><th width="292">Ví dụ</th></tr></thead><tbody><tr><td><code>math.exp(x)</code></td><td><code>e ** x</code></td><td><code>math.exp(1) # 2.718...</code></td></tr><tr><td><code>math.log(x)</code></td><td>Logarit tự nhiên (cơ số e)</td><td><code>math.log(math.e) # 1.0</code></td></tr><tr><td><code>math.log10(x)</code></td><td>Log cơ số 10</td><td><code>math.log10(100) # 2.0</code></td></tr><tr><td><code>math.log2(x)</code></td><td>Log cơ số 2</td><td><code>math.log2(8) # 3.0</code></td></tr></tbody></table>

🔹 **Hàm làm tròn**&#x20;

<table><thead><tr><th width="168">Hàm</th><th width="211">Ý nghĩa</th><th width="295">Ví dụ</th></tr></thead><tbody><tr><td><code>math.ceil(x)</code></td><td>Làm tròn lên</td><td><code>math.ceil(2.3) # 3</code></td></tr><tr><td><code>math.floor(x)</code></td><td>Làm tròn xuống</td><td><code>math.floor(2.9) # 2</code></td></tr><tr><td><code>math.trunc(x)</code></td><td>Bỏ phần thập phân</td><td><code>math.trunc(2.9) # 2</code></td></tr><tr><td><code>math.fabs(x)</code></td><td>Giá trị tuyệt đối (float)</td><td><code>math.fabs(-3.5) # 3.5</code></td></tr></tbody></table>

