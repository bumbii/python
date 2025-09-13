# Các toán tử số học (Arithmetic Operators)

Một toán tử số học là một ký hiệu biểu diễn cho một phép tính toán, ví dụ: ký hiệu dấu + biểu diễn phép cộng.

Tương tự như trong toán học, trong Python cũng có 4 phép tính cơ bản: cộng, trừ, nhân, chia. Ngoài ra, Python còn hỗ trợ một số toán tử khác. Chúng ta sẽ cùng tìm hiểu trong bài học này.

1. Phép cộng được biểu diễn bằng ký hiệu `+`
```
20 + 30
```

2. Phép trừ được biểu diễn bằng ký hiệu `-`
```
24 - 10
```

3. Phép nhân được biểu diễn bằng ký hiệu `*`
```
8 * 3
```

4. Phép chia được biểu diễn bằng ký hiệu `/`
```
20 / 10
```
>Chú ý: đối với phép chia trong Python 3 thì kết quả sẽ là số thập phân, ví dụ: 20 / 10 = 2.0 (không phải bằng 2). Lý do là trong Python có 2 loại số:
> - Số nguyên (integer) là số không có chứa dấu chấm và phần thập phân, ví dụ: 2, 10, 100
> - Số thập phân (floating-point numbers) là số có dấu chấm và phần thập phân (phía sau dấu chấm), ví dụ: 2.0, 5.4, 10.8
>
> Nếu chia 2 số nguyên cho ra kết quả số nguyên, ví dụ: 5 / 2 = 2 thì sẽ sai. Trong khi 5.0 / 2 = 2.5  thì lại đúng. Điều này dễ gây nhầm lẫn và lỗi, nên trong Python 3, người ta đã quyết định phép chia luôn cho ra kết quả là số thập phân. 

5. Nếu bạn chỉ muốn lấy phần nguyên trong phép chia (không có dấu chấm và phần thập phân) thì bạn cần dùng phép toán chia lấy phần nguyên (integer division hoặc floor division). Phép chia lấy phần nguyên này được biểu diễn bằng ký tự `//` . Kết quả sẽ luôn là số nguyên và **làm tròn xuống** (vì vậy nên mới có tên gọi là floor division)
```
15 // 2 = 7
-15 // 2 = -8 # Chú ý: Không phải baằng -7
```

6. Trong trường hợp chỉ cần lấy phần dư trong phép chia (ví dụ `7 / 3 = 2 dư 1`) thì cần sử dụng toán tử % . Trong lập trình thì toán tử này được gọi là **Modulo**.
```
7 % 3 = 1

10 % 5 = 0

15 % 4 = 3
```

7. Ngoài các phép toán trên thì Python cũng toán tử luỹ thừa (hay mũ). Phép luỹ thừa là phép nhân một số với chính nó nhiều lần. Ví dụ:

4<sup>2</sup> = 4 * 4 = 16

2<sup>3</sup> = 2 * 2 * 2 = 8

Để biểu diễn phép luỹ thừa trong Python thì ta dùng `**`

Để thực hiện phép tính **4<sup>2</sup>** trong Python ta viết như sau:
```
4 ** 2
```

Để thực hiện phép tính **2<sup>3</sup>** trong Python ta viết như sau:
```
2 ** 3
```