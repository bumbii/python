---
description: Bài tập về Đệ quy (Recursion) - Nâng cao
icon: repeat
---


# Bài tập Recursion - Nâng cao

1. Viết hàm đệ quy **`flatten(lst)`** làm phẳng nested list bất kỳ độ sâu.

```python
def flatten(lst):
    # [1, [2, [3, 4], 5], 6] -> [1, 2, 3, 4, 5, 6]
    pass

# Test
nested = [1, [2, [3, 4], 5], 6, [7, [8, 9]]]
print(flatten(nested))
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

> **💡 Gợi ý: Dùng isinstance(item, list) để kiểm tra**

2. Viết hàm đệ quy **`sum_nested(lst)`** tính tổng tất cả số trong nested list.

```python
def sum_nested(lst):
    pass

# Test
nested = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
print(sum_nested(nested))  # 45
```

3. Viết hàm đệ quy **`binary_search(lst, target)`** tìm kiếm nhị phân trong list đã sắp xếp.

```python
def binary_search(lst, target, left=0, right=None):
    # Trả về index của target, hoặc -1 nếu không tìm thấy
    pass

# Test
numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(binary_search(numbers, 7))   # 3
print(binary_search(numbers, 11))  # 5
print(binary_search(numbers, 20))  # -1
```

4. Viết hàm đệ quy **`merge_sort(lst)`** sắp xếp list bằng thuật toán Merge Sort.

```python
def merge_sort(lst):
    pass

def merge(left, right):
    # Hàm phụ để merge hai list đã sắp xếp
    pass

# Test
numbers = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(numbers))
# [3, 9, 10, 27, 38, 43, 82]
```

> **💡 Chia đôi list, sắp xếp đệ quy từng nửa, rồi merge lại**

5. Viết hàm đệ quy **`quick_sort(lst)`** sắp xếp list bằng thuật toán Quick Sort.

```python
def quick_sort(lst):
    pass

# Test
numbers = [38, 27, 43, 3, 9, 82, 10]
print(quick_sort(numbers))
# [3, 9, 10, 27, 38, 43, 82]
```

6. Viết hàm đệ quy **`permutations(lst)`** tạo tất cả hoán vị của list.

```python
def permutations(lst):
    # Trả về list of lists
    pass

# Test
items = [1, 2, 3]
perms = permutations(items)
print(len(perms))  # 6
print(perms)
# [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```

7. Viết hàm đệ quy **`combinations(lst, k)`** tạo tất cả tổ hợp k phần tử.

```python
def combinations(lst, k):
    pass

# Test
items = [1, 2, 3, 4]
combs = combinations(items, 2)
print(combs)
# [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
```

8. Viết hàm đệ quy **`tower_of_hanoi(n, source, target, auxiliary)`** giải bài toán Tháp Hà Nội.

```python
def tower_of_hanoi(n, source, target, auxiliary):
    # In ra các bước di chuyển
    pass

# Test
tower_of_hanoi(3, 'A', 'C', 'B')
# Output:
# Move disk 1 from A to C
# Move disk 2 from A to B
# Move disk 1 from C to B
# Move disk 3 from A to C
# Move disk 1 from B to A
# Move disk 2 from B to C
# Move disk 1 from A to C
```

9. Viết hàm đệ quy **`subsets(lst)`** tạo tất cả tập con (power set) của list.

```python
def subsets(lst):
    pass

# Test
items = [1, 2, 3]
result = subsets(items)
print(result)
# [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

10. Viết hàm đệ quy **`partition(lst, pivot)`** chia list thành hai phần: nhỏ hơn và lớn hơn pivot.

```python
def partition(lst, pivot):
    # Trả về (smaller, equal, larger)
    pass

# Test
numbers = [3, 7, 2, 9, 1, 5, 8]
smaller, equal, larger = partition(numbers, 5)
print(smaller)  # [3, 2, 1]
print(equal)    # [5]
print(larger)   # [7, 9, 8]
```

11. Viết hàm đệ quy **`generate_parentheses(n)`** tạo tất cả các chuỗi ngoặc hợp lệ với n cặp.

```python
def generate_parentheses(n):
    pass

# Test
print(generate_parentheses(3))
# ['((()))', '(()())', '(())()', '()(())', '()()()']
```

> **💡 Theo dõi số ngoặc mở và đóng, đảm bảo hợp lệ**

12. Viết hàm đệ quy **`path_sum(tree, target)`** tìm đường đi trong cây có tổng bằng target.

```python
# Tree represented as nested dict
# {'value': 5, 'left': {...}, 'right': {...}}

def path_sum(tree, target, path=[]):
    pass

# Test
tree = {
    'value': 5,
    'left': {'value': 4, 'left': {'value': 11, 'left': None, 'right': None}, 'right': None},
    'right': {'value': 8, 'left': None, 'right': {'value': 4, 'left': None, 'right': None}}
}
print(path_sum(tree, 20))  # [5, 4, 11]
```

13. Viết hàm đệ quy **`count_ways(n)`** đếm số cách leo n bậc thang (mỗi lần 1 hoặc 2 bậc).

```python
def count_ways(n):
    # Có bao nhiêu cách leo n bậc thang?
    pass

# Test
print(count_ways(3))  # 3: (1+1+1), (1+2), (2+1)
print(count_ways(4))  # 5
print(count_ways(5))  # 8
```

14. Viết hàm đệ quy **`word_break(s, word_dict)`** kiểm tra có thể chia chuỗi thành các từ trong từ điển không.

```python
def word_break(s, word_dict, memo=None):
    pass

# Test
word_dict = {"leet", "code", "leetcode"}
print(word_break("leetcode", word_dict))  # True
print(word_break("catsandog", {"cats", "dog", "sand", "and", "cat"}))  # False
```

15. Viết hàm đệ quy **`longest_common_subsequence(s1, s2)`** tìm độ dài LCS.

```python
def longest_common_subsequence(s1, s2):
    pass

# Test
print(longest_common_subsequence("abcde", "ace"))  # 3 (ace)
print(longest_common_subsequence("abc", "abc"))    # 3
print(longest_common_subsequence("abc", "def"))    # 0
```

16. Viết hàm đệ quy **`edit_distance(s1, s2)`** tính khoảng cách chỉnh sửa (Levenshtein distance).

```python
def edit_distance(s1, s2):
    # Số phép insert, delete, replace tối thiểu
    pass

# Test
print(edit_distance("horse", "ros"))   # 3
print(edit_distance("kitten", "sitting"))  # 3
```

17. Viết hàm đệ quy **`n_queens(n)`** giải bài toán N-Queens.

```python
def n_queens(n):
    # Trả về tất cả các cách đặt n quân hậu
    pass

def is_safe(board, row, col):
    # Kiểm tra vị trí có an toàn không
    pass

# Test
solutions = n_queens(4)
print(len(solutions))  # 2
for solution in solutions:
    for row in solution:
        print(row)
    print()
```

18. Viết hàm đệ quy **`sudoku_solver(board)`** giải Sudoku.

```python
def sudoku_solver(board):
    # board: list 9x9, 0 là ô trống
    # Trả về True nếu giải được
    pass

def is_valid(board, row, col, num):
    pass

# Test
board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
]
sudoku_solver(board)
```

19. Viết hàm đệ quy **`expression_parser(expr)`** tính giá trị biểu thức toán học.

```python
def expression_parser(expr):
    # Parse và tính "2 + 3 * 4"
    pass

# Test
print(expression_parser("2 + 3"))        # 5
print(expression_parser("2 + 3 * 4"))    # 14
print(expression_parser("(2 + 3) * 4"))  # 20
```

20. Viết hàm đệ quy **`maze_solver(maze, start, end)`** tìm đường đi trong mê cung.

```python
def maze_solver(maze, start, end, visited=None):
    # maze: 2D list, 0 = đường đi, 1 = tường
    # Trả về đường đi hoặc None
    pass

# Test
maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
]
path = maze_solver(maze, (0, 0), (4, 4))
print(path)
# [(0, 0), (1, 0), (2, 0), (2, 1), (2, 2), (3, 2), (4, 2), (4, 3), (4, 4)]
```

> **💡 Gợi ý: Dùng backtracking để thử 4 hướng (lên, xuống, trái, phải)**
