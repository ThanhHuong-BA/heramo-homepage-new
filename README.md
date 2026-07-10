# HERAMO — Homepage

Trang chủ marketing cho **HERAMO** (dịch vụ giặt ủi / vệ sinh cao cấp tại TP.HCM).
Static site thuần HTML/CSS/JS, không cần build step — mở `index.html` hoặc trỏ một
static host bất kỳ vào thư mục này là chạy.

## Cấu trúc

| File / thư mục   | Vai trò |
|------------------|---------|
| `index.html`     | Toàn bộ markup của trang (nguồn duy nhất, ngôn ngữ mặc định: tiếng Việt). |
| `heramo.css`     | Toàn bộ style (design tokens, layout, responsive, popup, animations). |
| `heramo.js`      | Tương tác + bảng dịch VN/EN (`I18N`) và logic áp dụng. |
| `assets/`        | Hình ảnh, logo, icon dùng trên trang. |
| `chats/`         | Transcript quá trình thiết kế (giữ lại làm tư liệu, không phải code). |

## Song ngữ (VN / EN)

Thay vì nhân bản toàn bộ HTML cho mỗi ngôn ngữ, mỗi phần tử có nội dung khác nhau
giữa 2 ngôn ngữ được gắn khoá:

- `data-i18n="tN"` — đổi phần chữ (innerHTML) của phần tử.
- `data-i18n-attr="placeholder=aN,alt=aM"` — đổi thuộc tính (placeholder, alt, aria-label, title).

Bảng dịch nằm trong `heramo.js` (`const I18N = { text: {...}, attr: {...} }`).
Khi bấm nút **VN / EN**, `switchLang()` chỉ cập nhật đúng những phần tử đó — nên
mọi listener, hình ảnh và trạng thái động (popup, carousel, "đọc thêm bài viết"…)
đều được giữ nguyên, không reload cả trang như bản prototype gốc.

## Tính năng tương tác

- Thanh điều hướng dính + dropdown "Dịch vụ" (desktop hover, mobile drawer).
- Thanh khuyến mãi + popup lấy mã (tự bật lần đầu khi cuộn tới phần Dịch vụ),
  nhập tên/SĐT → hiện mã, nút copy kèm toast thông báo.
- Carousel 4 tiện ích app (tự chạy, tạm dừng, điều hướng).
- Lazy-load video YouTube, marquee logo báo chí / đối tác chạy vô tận.
- "Đọc thêm bài viết" hiện thêm 3 bài mỗi lần bấm.
- Đếm số liệu khi cuộn tới, nút liên hệ nổi (Zalo / Hotline / Messenger).

## Chạy thử

```bash
# mở trực tiếp
xdg-open index.html            # hoặc: open index.html (macOS)

# hoặc serve tĩnh (khuyến nghị, để đường dẫn tương đối hoạt động chuẩn)
python3 -m http.server 8000    # rồi mở http://localhost:8000
```
