---
icon: plus-minus
---


# Các toán tử số học (Arithmetic Operators)

Một toán tử số học là một ký hiệu biểu diễn cho một phép tính toán, ví dụ: ký hiệu dấu <mark style="color:red;">**`+`**</mark> biểu diễn phép cộng<mark style="color:$primary;">.</mark>

Tương tự như trong toán học, trong Python cũng có 4 phép tính cơ bản: cộng, trừ, nhân, chia. Ngoài ra, Python còn hỗ trợ một số toán tử khác. Chúng ta sẽ cùng tìm hiểu trong bài học này.



1. Phép cộng được biểu diễn bằng ký hiệu <mark style="color:red;background-color:red;">**`+`**</mark>

```python
20 + 30
```

2. Phép trừ được biểu diễn bằng ký hiệu <mark style="color:red;">**`-`**</mark>&#x20;

```python
24 - 10
```

3. Phép nhân được biểu diễn bằng ký hiệu <mark style="color:red;">**`*`**</mark>

```python
8 * 3
```

4. Phép chia được biểu diễn bằng ký hiệu <mark style="color:red;">**`/`**</mark>

```python
20 / 10
```

> **💡 Chú ý: đối với phép chia trong **Python 3** thì kết quả sẽ là số thập phân, ví dụ: 20 / 10 = 2.0 (không phải bằng 2). Lý do là trong Python có 2 loại số:

* Số nguyên (integer) là số không có chứa dấu chấm và phần thập phân, ví dụ: 2, 10, 100
* Số thập phân (floating-point numbers) là số có dấu chấm và phần thập phân (phía sau dấu chấm), ví dụ: 2.0, 5.4, 10.8

Nếu chia 2 số nguyên cho ra kết quả số nguyên, ví dụ: `5 / 2 = 2` thì sẽ sai. Trong khi `5.0 / 2 = 2.5`  thì lại đúng. Điều này dễ gây nhầm lẫn và lỗi, nên trong Python 3, người ta đã quyết định phép chia luôn cho ra kết quả là số thập phân.&#x20;**

5. Nếu chỉ muốn lấy phần nguyên trong phép chia (không có dấu chấm và phần thập phân) thì cần dùng phép toán chia lấy phần nguyên (**integer division** hoặc **floor division**). Phép chia lấy phần nguyên này được biểu diễn bằng ký tự <mark style="color:red;">**`//`**</mark><mark style="color:red;">**&#x20;**</mark><mark style="color:red;">**.**</mark> Kết quả sẽ luôn là số nguyên và <mark style="color:red;">**làm tròn xuống**</mark> (vì vậy nên mới có tên gọi là floor division)

```python
15 // 2 = 7

-15 // 2 = -8 # Chú ý: không phải bằng -7, vì luôn làm tròn xuống
```

6. Trong trường hợp chỉ cần lấy phần dư trong phép chia (ví dụ `7 / 3 = 2 dư 1`) thì cần sử dụng toán tử <mark style="color:red;">**`%`**</mark> . Trong lập trình thì toán tử này được gọi là <mark style="color:red;">**Modulo.**</mark>

```python
7 % 3 = 1

10 % 5 = 0

15 % 4 = 3
```

7. Ngoài các phép toán trên thì Python cũng toán tử luỹ thừa (hay mũ). Phép luỹ thừa là phép nhân một số với chính nó nhiều lần. Ví dụ:

4<sup>2</sup> = 4 \* 4 (2 lần) = 16

2<sup>3</sup> = 2 \* 2 \* 2 (3 lần) = 8

Để biểu diễn phép luỹ thừa trong Python thì ta dùng <mark style="color:red;">**`**`**</mark>&#x20;

```python
4 ** 2
2 ** 3
```

#### Bảng tóm tắt các toán tử trong Python

<table data-full-width="false"><thead><tr><th width="150">Tên Toán tử</th><th width="159" align="center">Ký hiệu trong Python</th><th width="153" align="center">Ví dụ</th></tr></thead><tbody><tr><td>Cộng</td><td align="center"><mark style="color:red;"><strong>+</strong></mark></td><td align="center">5 + 7 = 12</td></tr><tr><td>Trừ</td><td align="center"><mark style="color:red;"><strong>-</strong></mark></td><td align="center">10 - 5 = 5</td></tr><tr><td>Nhân</td><td align="center"><mark style="color:red;"><strong>*</strong></mark></td><td align="center">3 * 5 = 15</td></tr><tr><td>Chia</td><td align="center"><mark style="color:red;"><strong>/</strong></mark></td><td align="center">10 / 5 = 2.0</td></tr><tr><td>Chia lấy phần nguyên</td><td align="center"><mark style="color:red;"><strong>//</strong></mark></td><td align="center">13 // 5 = 2</td></tr><tr><td>Chia lấy phần dư</td><td align="center"><mark style="color:red;"><strong>%</strong></mark></td><td align="center">13 % 5 = 3</td></tr><tr><td>Luỹ thừa (mũ)</td><td align="center"><mark style="color:red;"><strong>**</strong></mark></td><td align="center">2<sup>3 =</sup> 2 * 2 * 2 = 8</td></tr></tbody></table>

***

Ngoài việc sử dụng các toán tử số học (arithmetic operators) cho các con số, Python còn cho phép sử dụng phép cộng  <mark style="color:red;">**`+`**</mark> và phép nhân <mark style="color:red;">**`*`**</mark>  cho các loại dữ liệu khác như chuỗi ký tự (string), danh sách (list), tuple.

1. Toán tử cộng  <mark style="color:red;">**`+`**</mark>&#x20;

*   Với **chuỗi (string)**: `+` thực hiện **nối chuỗi**.

    ```python
    "Hello" + " " + "Python"   # "Hello Python"
    ```
*   Với **list, tuple**: `+` nối 2 danh sách/tuple.

    ```python
    [1, 2] + [3, 4]     # [1, 2, 3, 4]
    (1, 2) + (3, 4)     # (1, 2, 3, 4)
    ```

2. Toán tử nhân <mark style="color:red;">**`*`**</mark>&#x20;

*   Với **chuỗi (string)**: lặp lại chuỗi nhiều lần.

    ```python
    "ha" * 3     # "hahaha"
    ```
*   Với **list, tuple**: lặp lại phần tử trong list/tuple.

    ```python
    [1, 2] * 3   # [1, 2, 1, 2, 1, 2]
    (1, 2) * 2   # (1, 2, 1, 2)
    ```

***

<mark style="color:red;">**Nội dung bài giảng trên YouTube**</mark>

{% embed url="https://youtu.be/ouY3VQNeupI" %}
