---
icon: calendar
---

# Date and Time (datetime module)

## 1. Giới thiệu

Module `datetime` trong Python cung cấp các class để làm việc với ngày tháng và thời gian.

**Module datetime bao gồm:**
- `date` - Ngày (năm, tháng, ngày)
- `time` - Thời gian (giờ, phút, giây, microsecond)
- `datetime` - Cả ngày và thời gian
- `timedelta` - Khoảng thời gian
- `timezone` - Múi giờ

## 2. Import module

```python
import datetime

# Hoặc import specific classes
from datetime import date, time, datetime, timedelta
```

## 3. Date - Ngày

### 3.1 - Tạo date

```python
from datetime import date

# Tạo date cụ thể
d = date(2024, 12, 25)
print(d)  # 2024-12-25

# Ngày hôm nay
today = date.today()
print(today)  # 2024-12-10 (ví dụ)
```

### 3.2 - Truy cập các thành phần

```python
from datetime import date

today = date.today()
print(f"Năm: {today.year}")       # 2024
print(f"Tháng: {today.month}")    # 12
print(f"Ngày: {today.day}")       # 10
```

### 3.3 - Các method của date

```python
from datetime import date

today = date.today()

# Thứ trong tuần (0=Monday, 6=Sunday)
print(today.weekday())  # 1 (Tuesday)

# Thứ trong tuần (1=Monday, 7=Sunday)
print(today.isoweekday())  # 2 (Tuesday)

# Format ISO
print(today.isoformat())  # 2024-12-10

# Tên thứ
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
print(days[today.weekday()])  # Tuesday
```

### 3.4 - Ví dụ thực tế

```python
from datetime import date

# Tính tuổi
def calculate_age(birth_date):
    today = date.today()
    age = today.year - birth_date.year

    # Điều chỉnh nếu chưa đến sinh nhật
    if (today.month, today.day) < (birth_date.month, birth_date.day):
        age -= 1

    return age

birthday = date(2000, 5, 15)
age = calculate_age(birthday)
print(f"Tuổi: {age}")
```

## 4. Time - Thời gian

### 4.1 - Tạo time

```python
from datetime import time

# Tạo time cụ thể
t = time(14, 30, 45)  # 14:30:45
print(t)

# Với microseconds
t = time(14, 30, 45, 123456)
print(t)  # 14:30:45.123456
```

### 4.2 - Truy cập các thành phần

```python
from datetime import time

t = time(14, 30, 45, 123456)
print(f"Giờ: {t.hour}")              # 14
print(f"Phút: {t.minute}")           # 30
print(f"Giây: {t.second}")           # 45
print(f"Microsecond: {t.microsecond}")  # 123456
```

## 5. DateTime - Ngày và Thời gian

### 5.1 - Tạo datetime

```python
from datetime import datetime

# Ngày và giờ hiện tại
now = datetime.now()
print(now)  # 2024-12-10 14:30:45.123456

# UTC time
utc_now = datetime.utcnow()
print(utc_now)

# Tạo datetime cụ thể
dt = datetime(2024, 12, 25, 14, 30, 45)
print(dt)  # 2024-12-25 14:30:45
```

### 5.2 - Truy cập các thành phần

```python
from datetime import datetime

now = datetime.now()
print(f"Năm: {now.year}")
print(f"Tháng: {now.month}")
print(f"Ngày: {now.day}")
print(f"Giờ: {now.hour}")
print(f"Phút: {now.minute}")
print(f"Giây: {now.second}")
print(f"Microsecond: {now.microsecond}")
```

### 5.3 - Tách date và time

```python
from datetime import datetime

now = datetime.now()

# Lấy date
date_part = now.date()
print(date_part)  # 2024-12-10

# Lấy time
time_part = now.time()
print(time_part)  # 14:30:45.123456
```

### 5.4 - Combine date và time

```python
from datetime import datetime, date, time

d = date(2024, 12, 25)
t = time(14, 30, 45)

# Kết hợp date và time
dt = datetime.combine(d, t)
print(dt)  # 2024-12-25 14:30:45
```

## 6. String Formatting

### 6.1 - strftime() - Datetime to String

Format datetime thành string:

```python
from datetime import datetime

now = datetime.now()

# Các format phổ biến
print(now.strftime("%Y-%m-%d"))           # 2024-12-10
print(now.strftime("%d/%m/%Y"))           # 10/12/2024
print(now.strftime("%H:%M:%S"))           # 14:30:45
print(now.strftime("%Y-%m-%d %H:%M:%S"))  # 2024-12-10 14:30:45
print(now.strftime("%A, %B %d, %Y"))      # Tuesday, December 10, 2024
```

**Các mã format:**

| Mã | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `%Y` | Năm 4 chữ số | 2024 |
| `%y` | Năm 2 chữ số | 24 |
| `%m` | Tháng (01-12) | 12 |
| `%B` | Tên tháng đầy đủ | December |
| `%b` | Tên tháng viết tắt | Dec |
| `%d` | Ngày (01-31) | 10 |
| `%A` | Tên thứ đầy đủ | Tuesday |
| `%a` | Tên thứ viết tắt | Tue |
| `%H` | Giờ 24h (00-23) | 14 |
| `%I` | Giờ 12h (01-12) | 02 |
| `%M` | Phút (00-59) | 30 |
| `%S` | Giây (00-59) | 45 |
| `%p` | AM/PM | PM |

### 6.2 - strptime() - String to Datetime

Parse string thành datetime:

```python
from datetime import datetime

# Parse string
date_string = "2024-12-25 14:30:45"
dt = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")
print(dt)  # 2024-12-25 14:30:45

# Các format khác
dt = datetime.strptime("25/12/2024", "%d/%m/%Y")
print(dt)  # 2024-12-25 00:00:00

dt = datetime.strptime("Dec 25, 2024", "%b %d, %Y")
print(dt)  # 2024-12-25 00:00:00
```

### 6.3 - Ví dụ thực tế

```python
from datetime import datetime

# Parse nhiều format
def parse_date(date_string):
    formats = [
        "%Y-%m-%d",
        "%d/%m/%Y",
        "%m/%d/%Y",
        "%Y/%m/%d",
        "%d-%m-%Y"
    ]

    for fmt in formats:
        try:
            return datetime.strptime(date_string, fmt)
        except ValueError:
            continue

    raise ValueError(f"Cannot parse date: {date_string}")

# Test
dates = ["2024-12-10", "10/12/2024", "12/10/2024"]
for date_str in dates:
    try:
        dt = parse_date(date_str)
        print(f"{date_str} -> {dt}")
    except ValueError as e:
        print(e)
```

## 7. Timedelta - Khoảng thời gian

### 7.1 - Tạo timedelta

```python
from datetime import timedelta

# Tạo khoảng thời gian
delta = timedelta(days=7)
print(delta)  # 7 days, 0:00:00

delta = timedelta(hours=2, minutes=30)
print(delta)  # 2:30:00

delta = timedelta(weeks=2, days=3, hours=4, minutes=30, seconds=15)
print(delta)  # 17 days, 4:30:15
```

### 7.2 - Phép tính với datetime

```python
from datetime import datetime, timedelta

now = datetime.now()

# Cộng thời gian
tomorrow = now + timedelta(days=1)
print(f"Tomorrow: {tomorrow}")

next_week = now + timedelta(weeks=1)
print(f"Next week: {next_week}")

# Trừ thời gian
yesterday = now - timedelta(days=1)
print(f"Yesterday: {yesterday}")

# Cộng nhiều đơn vị
future = now + timedelta(days=7, hours=12, minutes=30)
print(f"Future: {future}")
```

### 7.3 - Tính khoảng cách giữa 2 datetime

```python
from datetime import datetime, timedelta

# Tính số ngày giữa 2 ngày
start = datetime(2024, 1, 1)
end = datetime(2024, 12, 31)

diff = end - start
print(f"Số ngày: {diff.days}")  # 365
print(f"Tổng giây: {diff.total_seconds()}")

# Tính tuổi chính xác
birth_date = datetime(2000, 5, 15)
now = datetime.now()
age_delta = now - birth_date
age_years = age_delta.days / 365.25
print(f"Tuổi: {age_years:.1f} năm")
```

### 7.4 - Ví dụ thực tế

```python
from datetime import datetime, timedelta

# Tính deadline
def add_business_days(start_date, days):
    """Thêm số ngày làm việc (bỏ qua thứ 7, CN)"""
    current = start_date
    added = 0

    while added < days:
        current += timedelta(days=1)
        # Nếu không phải thứ 7 (5) hoặc CN (6)
        if current.weekday() < 5:
            added += 1

    return current

today = datetime.now()
deadline = add_business_days(today, 10)
print(f"Deadline (10 ngày làm việc): {deadline.strftime('%Y-%m-%d')}")
```

## 8. Ví dụ thực tế

### Ví dụ 1: Countdown timer

```python
from datetime import datetime, timedelta
import time

def countdown(target_date):
    while True:
        now = datetime.now()
        remaining = target_date - now

        if remaining.total_seconds() <= 0:
            print("Time's up!")
            break

        days = remaining.days
        hours, remainder = divmod(remaining.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)

        print(f"\r{days}d {hours}h {minutes}m {seconds}s", end="")
        time.sleep(1)

# Countdown đến năm mới
new_year = datetime(2025, 1, 1, 0, 0, 0)
# countdown(new_year)  # Uncomment để chạy
```

### Ví dụ 2: Age calculator

```python
from datetime import datetime, date

def calculate_detailed_age(birth_date):
    today = date.today()

    years = today.year - birth_date.year
    months = today.month - birth_date.month
    days = today.day - birth_date.day

    # Điều chỉnh nếu ngày âm
    if days < 0:
        months -= 1
        # Số ngày trong tháng trước
        prev_month = today.month - 1 if today.month > 1 else 12
        prev_year = today.year if today.month > 1 else today.year - 1
        days_in_prev_month = (date(prev_year, prev_month + 1, 1) - timedelta(days=1)).day
        days += days_in_prev_month

    # Điều chỉnh nếu tháng âm
    if months < 0:
        years -= 1
        months += 12

    return years, months, days

birthday = date(2000, 5, 15)
years, months, days = calculate_detailed_age(birthday)
print(f"Tuổi: {years} năm, {months} tháng, {days} ngày")
```

### Ví dụ 3: Time tracking

```python
from datetime import datetime, timedelta

class TimeTracker:
    def __init__(self):
        self.start_time = None
        self.sessions = []

    def start(self):
        self.start_time = datetime.now()
        print(f"Started at {self.start_time.strftime('%H:%M:%S')}")

    def stop(self):
        if self.start_time:
            end_time = datetime.now()
            duration = end_time - self.start_time
            self.sessions.append(duration)
            print(f"Stopped at {end_time.strftime('%H:%M:%S')}")
            print(f"Duration: {duration}")
            self.start_time = None

    def total_time(self):
        total = sum(self.sessions, timedelta())
        hours, remainder = divmod(total.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        return f"{hours}h {minutes}m {seconds}s"

# Sử dụng
tracker = TimeTracker()
tracker.start()
# ... làm việc ...
import time
time.sleep(2)
tracker.stop()
print(f"Total: {tracker.total_time()}")
```

### Ví dụ 4: Meeting scheduler

```python
from datetime import datetime, timedelta

class MeetingScheduler:
    def __init__(self):
        self.meetings = []

    def add_meeting(self, title, start_time, duration_minutes):
        end_time = start_time + timedelta(minutes=duration_minutes)

        # Check conflict
        for meeting in self.meetings:
            if self.has_conflict(start_time, end_time, meeting):
                return False, f"Conflict with {meeting['title']}"

        self.meetings.append({
            'title': title,
            'start': start_time,
            'end': end_time
        })
        return True, "Meeting added"

    def has_conflict(self, start, end, meeting):
        return (start < meeting['end'] and end > meeting['start'])

    def show_schedule(self):
        self.meetings.sort(key=lambda x: x['start'])
        for meeting in self.meetings:
            print(f"{meeting['start'].strftime('%H:%M')} - {meeting['end'].strftime('%H:%M')}: {meeting['title']}")

# Sử dụng
scheduler = MeetingScheduler()
today = datetime.now().replace(hour=9, minute=0, second=0, microsecond=0)

scheduler.add_meeting("Team Meeting", today, 60)
scheduler.add_meeting("Lunch", today + timedelta(hours=3), 60)
scheduler.show_schedule()
```

### Ví dụ 5: Date range generator

```python
from datetime import datetime, timedelta

def date_range(start_date, end_date, step=1):
    """Generator cho range của dates"""
    current = start_date
    while current <= end_date:
        yield current
        current += timedelta(days=step)

# Sử dụng
start = datetime(2024, 12, 1)
end = datetime(2024, 12, 31)

print("Tất cả ngày trong tháng 12:")
for date in date_range(start, end):
    print(date.strftime("%Y-%m-%d %A"))

print("\nMỗi 7 ngày:")
for date in date_range(start, end, step=7):
    print(date.strftime("%Y-%m-%d"))
```

### Ví dụ 6: Birthday reminder

```python
from datetime import datetime, timedelta

def get_upcoming_birthdays(birthdays, days_ahead=30):
    """Lấy sinh nhật sắp tới trong N ngày"""
    today = datetime.now().date()
    upcoming = []

    for name, birthday in birthdays.items():
        # Birthday năm nay
        this_year_birthday = birthday.replace(year=today.year)

        # Nếu đã qua, lấy năm sau
        if this_year_birthday < today:
            this_year_birthday = birthday.replace(year=today.year + 1)

        # Tính số ngày còn lại
        days_until = (this_year_birthday - today).days

        if 0 <= days_until <= days_ahead:
            upcoming.append((name, this_year_birthday, days_until))

    return sorted(upcoming, key=lambda x: x[2])

# Test
birthdays = {
    "Alice": datetime(1990, 12, 15).date(),
    "Bob": datetime(1985, 12, 20).date(),
    "Charlie": datetime(1995, 1, 5).date()
}

upcoming = get_upcoming_birthdays(birthdays, 60)
for name, date, days in upcoming:
    print(f"{name}: {date.strftime('%B %d')} (trong {days} ngày)")
```

### Ví dụ 7: Working hours calculator

```python
from datetime import datetime, timedelta

def calculate_working_hours(check_in, check_out, break_minutes=60):
    """Tính giờ làm việc"""
    if isinstance(check_in, str):
        check_in = datetime.strptime(check_in, "%H:%M")
    if isinstance(check_out, str):
        check_out = datetime.strptime(check_out, "%H:%M")

    total_time = check_out - check_in
    break_time = timedelta(minutes=break_minutes)
    working_time = total_time - break_time

    hours = working_time.seconds / 3600
    return hours

# Test
hours = calculate_working_hours("09:00", "18:00", 60)
print(f"Giờ làm việc: {hours} giờ")  # 8.0 giờ

# Tính lương
hourly_rate = 50000
salary = hours * hourly_rate
print(f"Lương: {salary:,.0f} VND")
```

### Ví dụ 8: Shift scheduler

```python
from datetime import datetime, timedelta

def generate_shifts(start_date, days, shift_hours=8):
    """Tạo lịch ca làm việc"""
    shifts = []
    current = start_date

    for day in range(days):
        # Ca sáng: 6:00 - 14:00
        morning = current.replace(hour=6, minute=0)
        shifts.append(("Morning", morning, morning + timedelta(hours=shift_hours)))

        # Ca chiều: 14:00 - 22:00
        afternoon = current.replace(hour=14, minute=0)
        shifts.append(("Afternoon", afternoon, afternoon + timedelta(hours=shift_hours)))

        # Ca đêm: 22:00 - 6:00
        night = current.replace(hour=22, minute=0)
        shifts.append(("Night", night, night + timedelta(hours=shift_hours)))

        current += timedelta(days=1)

    return shifts

# Sử dụng
start = datetime(2024, 12, 1)
shifts = generate_shifts(start, 7)

for shift_name, start, end in shifts[:5]:  # In 5 ca đầu
    print(f"{shift_name}: {start.strftime('%Y-%m-%d %H:%M')} - {end.strftime('%Y-%m-%d %H:%M')}")
```

### Ví dụ 9: Timezone conversion

```python
from datetime import datetime, timezone, timedelta

# Tạo datetime với timezone
utc = timezone.utc
vietnam_tz = timezone(timedelta(hours=7))  # UTC+7

# UTC time
utc_time = datetime.now(utc)
print(f"UTC: {utc_time}")

# Vietnam time
vietnam_time = utc_time.astimezone(vietnam_tz)
print(f"Vietnam: {vietnam_time}")

# Convert
def utc_to_vietnam(utc_datetime):
    vietnam_tz = timezone(timedelta(hours=7))
    return utc_datetime.astimezone(vietnam_tz)

utc_now = datetime.now(timezone.utc)
vn_now = utc_to_vietnam(utc_now)
print(f"VN time: {vn_now.strftime('%Y-%m-%d %H:%M:%S')}")
```

### Ví dụ 10: Reminder system

```python
from datetime import datetime, timedelta

class Reminder:
    def __init__(self, message, remind_at):
        self.message = message
        self.remind_at = remind_at
        self.notified = False

    def check(self):
        if not self.notified and datetime.now() >= self.remind_at:
            print(f"REMINDER: {self.message}")
            self.notified = True
            return True
        return False

# Tạo reminders
reminders = [
    Reminder("Meeting in 5 minutes", datetime.now() + timedelta(minutes=5)),
    Reminder("Lunch time", datetime.now().replace(hour=12, minute=0)),
    Reminder("End of day", datetime.now().replace(hour=17, minute=30))
]

# Check reminders (trong vòng lặp thực tế)
import time
for reminder in reminders:
    if reminder.check():
        print(f"Time: {datetime.now().strftime('%H:%M')}")
```

## 9. Best Practices

### 1. Luôn dùng timezone-aware datetime

```python
from datetime import datetime, timezone

# TỐT - Có timezone
dt = datetime.now(timezone.utc)

# TRÁNH - Không có timezone
dt = datetime.now()
```

### 2. Dùng ISO format

```python
from datetime import datetime

dt = datetime.now()

# TỐT - ISO format (dễ parse, standard)
iso_string = dt.isoformat()
print(iso_string)  # 2024-12-10T14:30:45.123456

# Parse lại
dt2 = datetime.fromisoformat(iso_string)
```

### 3. So sánh datetime cùng timezone

```python
from datetime import datetime, timezone

dt1 = datetime.now(timezone.utc)
dt2 = datetime.now(timezone.utc)

# TỐT - Cùng timezone
if dt1 < dt2:
    print("dt1 earlier")
```

### 4. Dùng timedelta cho phép tính

```python
from datetime import datetime, timedelta

# TỐT
tomorrow = datetime.now() + timedelta(days=1)

# TRÁNH - Không chính xác
# tomorrow = datetime.now() + 86400  # seconds
```

## Bài giảng trên YouTube

Cập nhật sau
