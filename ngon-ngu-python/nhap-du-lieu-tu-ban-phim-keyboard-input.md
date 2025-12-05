---
description: Cách nhập dữ liệu vào chương trình Python bằng cách dùng bàn phím.
icon: keyboard
---


# Nhập dữ liệu từ Bàn phím (Keyboard Input)

## 1. Nhập dữ liệu với hàm <mark style="color:red;">`input()`</mark>

Python cung cấp một hàm gọi là <mark style="color:red;">**`input`**</mark> để tạm dừng chương trình và chờ người dùng nhập dữ liệu/thông tin từ bàn phím. Sau khi nhập thông tin và gõ phím Return hoặc Enter, chương trình sẽ tiếp tục chạy. Hàm input này sẽ trả về chuỗi ký tự (string) mà người dùng đã gõ.&#x20;

> **💡 Chú ý: thông tin/dữ liệu nhập vào từ người dùng thông qua hàm input luôn luôn có kiểu dữ liệu là chuỗi ký tự (string), ngay cả khi người dùng nhập số. Do vậy, để dùng giá trị input như một số, phải chuyển đổi kiểu dữ liệu sang loại dữ liệu số.

Thao tác chuyển đổi một giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác được gọi là [ép kiểu (type casting)](gia-tri-va-kieu-du-lieu.mdx#id-5.-chuyen-doi-kieu-du-lieu-ep-kieu-type-casting).**

Cú pháp (syntax) của hàm <mark style="color:red;">**`input()`**</mark> như sau:

```python
input(prompt)
```

Trong đó, prompt là lời nhắc hay lời gợi ý để người dùng biết được họ cần nhập thông tin gì. Trong ví dụ dưới đây, thì <mark style="color:red;">**`What is your name?`**</mark> chính là lời nhắc này:

```python
name = input('What is your name?')
print(name)
```

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

Sau khi người dùng nhập tên thì biến `name` sẽ giữ giá trị (chuỗi ký tự) mà người dùng nhập vào. Biến `name` này sau đó có thể được sử dụng ở các dòng code khác. Trong ví dụ trên, name được sử dụng trong hàm `print` để in ra tên người dùng.

Trong ví dụ trên, phần dữ liệu (câu trả lời) nhập vào từ người dùng nằm trên cùng một dòng với câu hỏi (prompt). Nếu muốn câu trả lời nằm trên một dòng mới cho dễ nhìn, có thể thêm ký tự <mark style="color:red;">`
`</mark> vào cuối lời nhắc như sau:

```python
name = input('What is your name?
')
print(name)
```

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

## 2. Chuyển đổi kiểu dữ liệu

Như ở phần đầu có nói, khi người dùng nhập vào thông tin/dữ liệu thì thông tin này luôn luôn là một chuỗi ký tự (string). Nếu muốn chuyển đổi kiểu dữ liệu sang một kiểu dữ liệu khác như số nguyên (int), số thập phân (float)... thì chúng ta phải ép kiểu (type casting).

Để dễ hình dung, ta có ví dụ chương trình Python tính tổng 2 số nhập vào từ bàn phím như sau:

```python
a = input('Enter the first number: ')
b = input('Enter the second number: ')
sum = a + b

print('Sum: ', sum)
```

Chương trình nhìn có vẻ đúng nhưng khi chạy lại cho ra kết quả sai, ví dụ như sau:

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

Lý do là hàm input luôn trả về một chuỗi ký tự, nên khi nhập `10`  thì a = '10' (chuỗi `10` chứ không phải số `10`), tương tự b = '5' (chuỗi `5` chứ không phải số `5`). Và kết quả là khi đem 2 chuỗi này cộng lại với nhau thì sẽ ghép thành chuỗi mới `105` .

Để chương trình chạy đúng, chúng ta phải tiến hành ép kiểu hoặc chuyển đổi kiểu dữ liệu trước khi thực hiện phép cộng. Sửa lại chương trình như sau:

```python
a = int(input('Enter the first number: '))
b = int(input('Enter the second number: '))
sum = a + b

print('Sum: ', sum)
```

Kết quả khi chạy sẽ đúng, vì a và b lúc này đã được chuyển đổi sang số nguyên (int) trước khi thực hiện phép cộng:

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

## 3. Lỗi khi ép kiểu (type casting)

Trong ví dụ trên, chúng ta đang giả sử người dùng nhập vào một con số, vậy nếu người dùng không nhập vào số mà nhập vào một chuỗi ký tự thì chuyện gì xảy ra?&#x20;

Chúng ta cùng xem ví dụ sau, khi người dùng nhập **`bumbii`** (thay vì nhập số), thì chương trình sẽ bị lỗi:

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

Lỗi xảy ra là do chương trình đang cố gắng chuyển **`bumbii`** thành một số nguyên (trong lập trình gọi là ép kiểu), và dĩ nhiên là không thể chuyển như vậy được. Lỗi này dẫn tới chương trình bị hỏng và kết thúc, nên trong thực tế chúng ta phải "**bắt**" lỗi này để tránh dẫn tới hỏng chương trình. Chúng ta sẽ học cách bắt lỗi này ở một bài khác.

***

<mark style="color:red;">**Nội dung bài giảng trên YouTube**</mark>

{% embed url="https://www.youtube.com/watch?v=iCT0spzFT2Y" %}
