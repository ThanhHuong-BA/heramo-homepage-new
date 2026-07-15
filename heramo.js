/* HERAMO homepage — interactivity + VN/EN i18n
 * Single source of markup (Vietnamese) lives in index.html; every element that
 * changes between languages carries data-i18n / data-i18n-attr keys resolved
 * against the I18N table below. Switching language only swaps those units, so
 * event listeners, media, and dynamic state survive the swap. */

const I18N = {
  "text": {
    "t0": {
      "vn": "<a href=\"https://heramo.com/ve-chung-toi\" target=\"_blank\">Về chúng tôi</a>",
      "en": "<a href=\"https://heramo.com/ve-chung-toi\" target=\"_blank\">About us</a>"
    },
    "t1": {
      "vn": "Dịch vụ <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" style=\"margin-left:2px\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>",
      "en": "Services <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" style=\"margin-left:2px\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>"
    },
    "t2": {
      "vn": "<a href=\"https://heramo.com/giat-say-giat-ui\" target=\"_blank\">Giặt sấy</a><a href=\"https://heramo.com/expat-laundry\" target=\"_blank\">Laundry for Expat</a><a href=\"https://heramo.com/giat-hap-giat-kho\" target=\"_blank\">Giặt hấp, giặt khô</a><a href=\"https://heramo.com/bag-spa-cleaning-ve-sinh-tui-xach\" target=\"_blank\">Vệ sinh, spa túi xách</a><a href=\"https://heramo.com/ve-sinh-giat-giay\" target=\"_blank\">Vệ sinh giày</a><a href=\"https://heramo.com/shoe-repair-sua-chua-giay\" target=\"_blank\">Spa, sửa chữa giày</a><a href=\"https://heramo.com/ve-sinh-giat-sofa-nem-rem-tham\" target=\"_blank\">Vệ sinh sofa, nệm, rèm, thảm</a><a href=\"https://heramo.com/ve-sinh-may-lanh\" target=\"_blank\">Vệ sinh máy lạnh</a>",
      "en": "<a href=\"https://heramo.com/giat-say-giat-ui\" target=\"_blank\">Laundry</a><a href=\"https://heramo.com/expat-laundry\" target=\"_blank\">Laundry for Expat</a><a href=\"https://heramo.com/giat-hap-giat-kho\" target=\"_blank\">Dry Cleaning</a><a href=\"https://heramo.com/bag-spa-cleaning-ve-sinh-tui-xach\" target=\"_blank\">Bag Spa &amp; Cleaning</a><a href=\"https://heramo.com/ve-sinh-giat-giay\" target=\"_blank\">Shoe Cleaning</a><a href=\"https://heramo.com/shoe-repair-sua-chua-giay\" target=\"_blank\">Shoe Spa &amp; Repair</a><a href=\"https://heramo.com/ve-sinh-giat-sofa-nem-rem-tham\" target=\"_blank\">Sofa, Mattress, Curtain, Carpet</a><a href=\"https://heramo.com/ve-sinh-may-lanh\" target=\"_blank\">AC Cleaning</a>"
    },
    "t3": {
      "vn": "<a href=\"#stores\">Cửa hàng</a>",
      "en": "<a href=\"#stores\">Stores</a>"
    },
    "t4": {
      "vn": "<a href=\"https://heramo.com/giat-ui-cong-nghiep-ve-sinh-van-phong-spa-khach-san-nha-hang\" target=\"_blank\">Đối tác</a>",
      "en": "<a href=\"https://heramo.com/giat-ui-cong-nghiep-ve-sinh-van-phong-spa-khach-san-nha-hang\" target=\"_blank\">Partners</a>"
    },
    "t5": {
      "vn": "<a href=\"https://heramo.com/tuyen-dung\" target=\"_blank\">Tuyển dụng</a>",
      "en": "<a href=\"https://heramo.com/tuyen-dung\" target=\"_blank\">Careers</a>"
    },
    "t6": {
      "vn": "<a href=\"https://heramo.com/\" target=\"_blank\" class=\"btn-primary nav-cta-desktop\" style=\"font-size:14px;padding:10px 24px;font-weight:800;color:#0C0C0C;\">Đặt dịch vụ →</a>",
      "en": "<a href=\"https://heramo.com/\" target=\"_blank\" class=\"btn-primary nav-cta-desktop\" style=\"font-size:14px;padding:10px 24px;font-weight:800;color:#0C0C0C;\">Book now →</a>"
    },
    "t7": {
      "vn": "<a href=\"https://heramo.com/ve-chung-toi\" target=\"_blank\" onclick=\"closeDrawer()\">Về chúng tôi</a>",
      "en": "<a href=\"#\" onclick=\"closeDrawer()\">About us</a>"
    },
    "t8": {
      "vn": "Dịch vụ <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" style=\"margin-left:4px;transition:transform .2s\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>",
      "en": "Services <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" style=\"margin-left:4px;transition:transform .2s\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>"
    },
    "t9": {
      "vn": "<a href=\"https://heramo.com/giat-say-giat-ui\" target=\"_blank\" onclick=\"closeDrawer()\">Giặt sấy</a>",
      "en": "<a href=\"https://heramo.com/giat-say-giat-ui\" target=\"_blank\" onclick=\"closeDrawer()\">Laundry</a>"
    },
    "t10": {
      "vn": "<a href=\"https://heramo.com/giat-hap-giat-kho\" target=\"_blank\" onclick=\"closeDrawer()\">Giặt hấp, giặt khô</a>",
      "en": "<a href=\"https://heramo.com/giat-hap-giat-kho\" target=\"_blank\" onclick=\"closeDrawer()\">Dry Cleaning</a>"
    },
    "t11": {
      "vn": "<a href=\"https://heramo.com/bag-spa-cleaning-ve-sinh-tui-xach\" target=\"_blank\" onclick=\"closeDrawer()\">Vệ sinh, spa túi xách</a>",
      "en": "<a href=\"https://heramo.com/bag-spa-cleaning-ve-sinh-tui-xach\" target=\"_blank\" onclick=\"closeDrawer()\">Bag Spa &amp; Cleaning</a>"
    },
    "t12": {
      "vn": "<a href=\"https://heramo.com/ve-sinh-giat-giay\" target=\"_blank\" onclick=\"closeDrawer()\">Vệ sinh giày</a>",
      "en": "<a href=\"https://heramo.com/ve-sinh-giat-giay\" target=\"_blank\" onclick=\"closeDrawer()\">Shoe Cleaning</a>"
    },
    "t13": {
      "vn": "<a href=\"https://heramo.com/shoe-repair-sua-chua-giay\" target=\"_blank\" onclick=\"closeDrawer()\">Spa, sửa chữa giày</a>",
      "en": "<a href=\"https://heramo.com/shoe-repair-sua-chua-giay\" target=\"_blank\" onclick=\"closeDrawer()\">Shoe Spa &amp; Repair</a>"
    },
    "t14": {
      "vn": "<a href=\"https://heramo.com/ve-sinh-giat-sofa-nem-rem-tham\" target=\"_blank\" onclick=\"closeDrawer()\">Vệ sinh sofa, nệm, rèm, thảm</a>",
      "en": "<a href=\"https://heramo.com/ve-sinh-giat-sofa-nem-rem-tham\" target=\"_blank\" onclick=\"closeDrawer()\">Sofa, Mattress, Curtain, Carpet</a>"
    },
    "t15": {
      "vn": "<a href=\"https://heramo.com/ve-sinh-may-lanh\" target=\"_blank\" onclick=\"closeDrawer()\">Vệ sinh máy lạnh</a>",
      "en": "<a href=\"https://heramo.com/ve-sinh-may-lanh\" target=\"_blank\" onclick=\"closeDrawer()\">AC Cleaning</a>"
    },
    "t16": {
      "vn": "<a href=\"#stores\" onclick=\"closeDrawer()\">Cửa hàng</a>",
      "en": "<a href=\"#stores\" onclick=\"closeDrawer()\">Stores</a>"
    },
    "t17": {
      "vn": "<a href=\"https://heramo.com/giat-ui-cong-nghiep-ve-sinh-van-phong-spa-khach-san-nha-hang\" target=\"_blank\" onclick=\"closeDrawer()\">Trở thành đối tác</a>",
      "en": "<a href=\"#partners\" onclick=\"closeDrawer()\">Become a partner</a>"
    },
    "t18": {
      "vn": "<a href=\"https://heramo.com/tuyen-dung\" target=\"_blank\" onclick=\"closeDrawer()\">Tuyển dụng</a>",
      "en": "<a href=\"#footer\" onclick=\"closeDrawer()\">Careers</a>"
    },
    "t19": {
      "vn": "\n      <a href=\"https://heramo.com/\" target=\"_blank\" class=\"btn-primary\" style=\"width:100%;justify-content:center;\" onclick=\"closeDrawer()\">Đặt dịch vụ ngay →</a>\n    ",
      "en": "\n      <a href=\"#services\" class=\"btn-primary\" style=\"width:100%;justify-content:center;\" onclick=\"closeDrawer()\">Book now →</a>\n    "
    },
    "t20": {
      "vn": "\n    <span class=\"promo-badge\">ƯU ĐÃI</span>\n    Freeship 2 chiều tối đa 50K cho đơn đầu tiên\n  ",
      "en": "\n    <span class=\"promo-badge\">PROMO</span>\n    Free two-way shipping up to 50K on your first order\n  "
    },
    "t21": {
      "vn": "\n    <a href=\"#\" class=\"promo-cta\" onclick=\"openPromoPopup(event)\">Lấy mã ngay</a>\n    <button class=\"promo-close\" onclick=\"closePromoBar()\">×</button>\n  ",
      "en": "\n    <a href=\"#\" class=\"promo-cta\" onclick=\"openPromoPopup(event)\">Get the code</a>\n    <button class=\"promo-close\" onclick=\"closePromoBar()\">×</button>\n  "
    },
    "t22": {
      "vn": "HERAMO - Dịch vụ<br><span class=\"kw\">Giặt Ủi, Vệ Sinh</span><br>Cao Cấp",
      "en": "HERAMO - Premium<br><span class=\"kw\">Laundry &amp; Cleaning</span><br>Services"
    },
    "t23": {
      "vn": "Giao đồ cho HERAMO - <em>an tâm như giao đồ cho mẹ</em>",
      "en": "Hand your items to HERAMO - <em>as safe as leaving them with mom.</em>"
    },
    "t24": {
      "vn": "<strong>Đa dịch vụ:</strong> Vệ sinh spa giày, giặt hấp đồ hiệu, spa túi xách, giặt ủi, vệ sinh sofa · nệm · rèm · thảm &amp; máy lạnh",
      "en": "<strong>All-in-one:</strong> Shoe spa, luxury dry cleaning, handbag spa, laundry, cleaning for sofas · mattresses · curtains · rugs &amp; A/C"
    },
    "t25": {
      "vn": "<strong>Tiện lợi:</strong> 9 chi nhánh khắp TP.HCM - 1 nút đặt qua app ngay tại nhà",
      "en": "<strong>Convenient:</strong> 9 branches across HCMC - one-tap booking right from home"
    },
    "t26": {
      "vn": "<strong>An tâm tuyệt đối:</strong> Theo dõi đồ mọi lúc mọi nơi + Bảo hiểm đồ đạc",
      "en": "<strong>Total peace of mind:</strong> Track your items anytime + item insurance included"
    },
    "t27": {
      "vn": "\n      <a href=\"#services\" class=\"btn-primary\">Đặt dịch vụ ngay</a>\n      <a href=\"#how\" class=\"btn-ghost\">Xem quy trình →</a>\n    ",
      "en": "\n      <a href=\"#services\" class=\"btn-primary\">Book now</a>\n      <a href=\"#how\" class=\"btn-ghost\">See how it works →</a>\n    "
    },
    "t28": {
      "vn": "Khách hàng tin dùng",
      "en": "Trusted customers"
    },
    "t29": {
      "vn": "Món đồ được chăm sóc",
      "en": "Items lovingly cared for"
    },
    "t30": {
      "vn": "Khách hàng hài lòng",
      "en": "Customer satisfaction"
    },
    "t31": {
      "vn": "Thương hiệu #1 VN",
      "en": "#1 brand in Vietnam"
    },
    "t32": {
      "vn": "Dịch vụ của HERAMO",
      "en": "HERAMO services"
    },
    "t33": {
      "vn": "Chăm sóc mọi thứ bạn yêu quý",
      "en": "Care for everything you love"
    },
    "t34": {
      "vn": "Đặt ngay tại website, mobile app hoặc tại cửa hàng. Giao nhận tận nơi, theo dõi đơn hàng &amp; món đồ mọi lúc.",
      "en": "Book on our website, mobile app or in-store. Pickup &amp; delivery to your door, track your order and items anytime."
    },
    "t35": {
      "vn": "\n    <a href=\"https://heramo.com/giat-hap-giat-kho\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/giat-hap-giat-kho.png\" alt=\"Giặt hấp giặt khô cao cấp HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">Đồ hiệu</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Giặt hấp, giặt khô</div><p class=\"svc-desc\">Giặt hấp, giặt khô đúng chuẩn cho vest, áo dài, đồ hiệu. Dung dịch chuyên dụng, máy móc hiện đại.</p><span class=\"svc-link\">Xem chi tiết →</span></div>\n    </a>\n    <a href=\"https://heramo.com/giat-say-giat-ui\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/giat-say.png\" alt=\"Giặt sấy giặt ủi HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">24H</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Giặt sấy</div><p class=\"svc-desc\">Giặt sấy, giao nhận tận nơi trong 24H. Giặt máy riêng - gói tháng tiết kiệm.</p><span class=\"svc-link\">Xem chi tiết →</span></div>\n    </a>\n    <a href=\"https://heramo.com/ve-sinh-giat-giay\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-giay.png\" alt=\"Vệ sinh giày HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">Spa giày</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Vệ sinh giày</div><p class=\"svc-desc\">Vệ sinh giày, phục hồi chuyên sâu, đánh bóng, khử khuẩn. Chăm sóc giày toàn diện tại TP.HCM.</p><span class=\"svc-link\">Xem chi tiết →</span></div>\n    </a>\n    <a href=\"https://heramo.com/bag-spa-cleaning-ve-sinh-tui-xach\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-tui-xach.png\" alt=\"Spa túi xách HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">Túi hiệu</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Vệ sinh, spa túi xách</div><p class=\"svc-desc\">Spa túi xách Hermès, Gucci, LV - vệ sinh, sơn nhuộm, sửa, phục hồi. Kỹ thuật viên chuyên nghiệp.</p><span class=\"svc-link\">Xem chi tiết →</span></div>\n    </a>\n    <a href=\"https://heramo.com/ve-sinh-giat-sofa-nem-rem-tham\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-sofa.png\" alt=\"Vệ sinh sofa nệm HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">Gia đình</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Vệ sinh sofa, nệm, rèm, thảm</div><p class=\"svc-desc\">Vệ sinh sofa, nệm, rèm, thảm - diệt khuẩn, khử mùi. Bảo vệ sức khỏe cả gia đình.</p><span class=\"svc-link\">Xem chi tiết →</span></div>\n    </a>\n    <a href=\"https://heramo.com/ve-sinh-may-lanh\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-may-lanh.jpg\" alt=\"Vệ sinh máy lạnh HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">Bơm ga</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Vệ sinh máy lạnh</div><p class=\"svc-desc\">Vệ sinh máy lạnh, bơm ga tại nhà. Cải thiện không khí, tiết kiệm điện năng.</p><span class=\"svc-link\">Xem chi tiết →</span></div>\n    </a>\n  ",
      "en": "\n    <a href=\"https://heramo.com/giat-hap-giat-kho\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/giat-hap-giat-kho.png\" alt=\"HERAMO premium dry cleaning\" loading=\"lazy\"><span class=\"svc-tag\">Luxury</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Dry cleaning</div><p class=\"svc-desc\">Proper dry cleaning for suits, áo dài and luxury pieces. Specialty solutions, modern equipment.</p><span class=\"svc-link\">Learn more →</span></div>\n    </a>\n    <a href=\"https://heramo.com/giat-say-giat-ui\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/giat-say.png\" alt=\"HERAMO wash &amp; dry\" loading=\"lazy\"><span class=\"svc-tag\">24H</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Wash &amp; dry</div><p class=\"svc-desc\">Wash &amp; dry with pickup and delivery in 24H. Dedicated machines - save more with monthly plans.</p><span class=\"svc-link\">Learn more →</span></div>\n    </a>\n    <a href=\"https://heramo.com/ve-sinh-giat-giay\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-giay.png\" alt=\"HERAMO shoe cleaning\" loading=\"lazy\"><span class=\"svc-tag\">Shoe spa</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Shoe cleaning</div><p class=\"svc-desc\">Shoe cleaning, deep restoration, polishing and sanitizing. Complete shoe care in HCMC.</p><span class=\"svc-link\">Learn more →</span></div>\n    </a>\n    <a href=\"https://heramo.com/bag-spa-cleaning-ve-sinh-tui-xach\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-tui-xach.png\" alt=\"HERAMO handbag spa\" loading=\"lazy\"><span class=\"svc-tag\">Designer bags</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Handbag cleaning &amp; spa</div><p class=\"svc-desc\">Handbag spa for Hermès, Gucci, LV - cleaning, recolouring, repairs, restoration. Professional technicians.</p><span class=\"svc-link\">Learn more →</span></div>\n    </a>\n    <a href=\"https://heramo.com/ve-sinh-giat-sofa-nem-rem-tham\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-sofa.png\" alt=\"HERAMO sofa &amp; mattress cleaning\" loading=\"lazy\"><span class=\"svc-tag\">Family</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">Sofa, mattress, curtain &amp; rug cleaning</div><p class=\"svc-desc\">Cleaning for sofas, mattresses, curtains and rugs - sanitized and deodorized. Protecting your whole family's health.</p><span class=\"svc-link\">Learn more →</span></div>\n    </a>\n    <a href=\"https://heramo.com/ve-sinh-may-lanh\" class=\"service-card\">\n      <div class=\"svc-img-wrap\"><img class=\"svc-img\" src=\"assets/ve-sinh-may-lanh.jpg\" alt=\"A/C cleaning HERAMO\" loading=\"lazy\"><span class=\"svc-tag\">A/C refill</span></div>\n      <div class=\"svc-body\"><div class=\"svc-name\">A/C cleaning</div><p class=\"svc-desc\">A/C cleaning and gas refill at home. Cleaner air, lower electricity bills.</p><span class=\"svc-link\">Learn more →</span></div>\n    </a>\n  "
    },
    "t36": {
      "vn": "Quy trình 4.0",
      "en": "4.0 process"
    },
    "t37": {
      "vn": "Đơn giản như 1 – 2 – 3 – 4",
      "en": "Simple as 1 – 2 – 3 – 4"
    },
    "t38": {
      "vn": "Đặt lịch online · Shipper đến tận nhà · Theo dõi real-time · Nhận đồ tại cửa.",
      "en": "Online booking · Home pickup &amp; delivery · Real-time tracking · Doorstep return."
    },
    "t39": {
      "vn": "Đặt qua app",
      "en": "Book on the app"
    },
    "t40": {
      "vn": "Chọn dịch vụ, chọn giờ - nhanh hơn gọi điện",
      "en": "Pick a service, pick a time - faster than a phone call"
    },
    "t41": {
      "vn": "Chúng tôi đến lấy",
      "en": "We come to pick up"
    },
    "t42": {
      "vn": "Shipper đồng phục chuẩn, túi bảo vệ riêng",
      "en": "Uniformed drivers, protective bags for each order"
    },
    "t43": {
      "vn": "Theo dõi quy trình",
      "en": "Track the process"
    },
    "t44": {
      "vn": "App cập nhật từng bước - biết chính xác đơn đang ở công đoạn nào",
      "en": "The app updates every step - you know exactly which stage your order is at"
    },
    "t45": {
      "vn": "Nhận về thơm sạch",
      "en": "Get it back fresh &amp; clean"
    },
    "t46": {
      "vn": "Đúng giờ, đóng gói cẩn thận, bảo đảm",
      "en": "On time, carefully packed, guaranteed"
    },
    "t47": {
      "vn": "Tại sao an tâm",
      "en": "Why you can relax"
    },
    "t48": {
      "vn": "Giao đồ cho HERAMO - an tâm như giao đồ cho mẹ\n",
      "en": "Hand your items to HERAMO -<br>as if you gave it to mom"
    },
    "t49": {
      "vn": "Bốn lý do mỗi đơn hàng đều đáng tin.",
      "en": "Four reasons every order is trustworthy."
    },
    "t50": {
      "vn": "Tỉ mỉ từng chất liệu &amp; đồ hiệu",
      "en": "Meticulous with every fabric &amp; luxury item"
    },
    "t51": {
      "vn": "Mỗi loại đồ được xử lý theo đúng quy trình riêng. Máy móc hiện đại, dung dịch chuyên dụng nhập khẩu. Đội ngũ chuyên gia lành nghề, tận tâm từng đơn.",
      "en": "Every item type is handled with its own dedicated process. Modern machinery, imported specialty solutions. A skilled, dedicated team of experts on every order."
    },
    "t52": {
      "vn": "\n          <span class=\"luxury-tag\">Hermès</span><span class=\"luxury-tag\">Gucci</span><span class=\"luxury-tag\">Louis Vuitton</span><span class=\"luxury-tag\">Chanel</span><span class=\"luxury-tag\">Cashmere</span><span class=\"luxury-tag\">Lụa cao cấp</span>\n        ",
      "en": "\n          <span class=\"luxury-tag\">Hermès</span><span class=\"luxury-tag\">Gucci</span><span class=\"luxury-tag\">Louis Vuitton</span><span class=\"luxury-tag\">Chanel</span><span class=\"luxury-tag\">Cashmere</span><span class=\"luxury-tag\">Premium silk</span>\n        "
    },
    "t53": {
      "vn": "Bạn biết đồ đang ở đâu",
      "en": "You always know where your items are"
    },
    "t54": {
      "vn": "Theo dõi quy trình từng bước trên app: tiếp nhận → xử lý → kiểm tra → đóng gói → giao trả. Minh bạch 100%.",
      "en": "Track every step in the app: intake → processing → quality check → packing → delivery. 100% transparent."
    },
    "t55": {
      "vn": "Đặt đa kênh - giao nhận tận nơi",
      "en": "Book on any channel - door-to-door pickup &amp; delivery"
    },
    "t56": {
      "vn": "<strong>Đội HERAMO Shipper riêng</strong> - đến tận nơi nhận đồ, vận chuyển cẩn thận, giao trả đúng địa chỉ. Không qua tay trung gian.",
      "en": "<strong>Dedicated HERAMO Shipper team</strong> - we come to you, transport carefully, and deliver to the exact address. No middlemen."
    },
    "t57": {
      "vn": "<strong>App HERAMO</strong> - đặt nhanh trong 1 phút",
      "en": "<strong>HERAMO App</strong> - book in under a minute"
    },
    "t58": {
      "vn": "Giao nhận <strong>09:00 – 21:00</strong> khắp các quận TP.HCM",
      "en": "Pickup &amp; delivery <strong>09:00 – 21:00</strong> across every district in HCMC"
    },
    "t59": {
      "vn": "Gói An Tâm - Bảo vệ tối đa",
      "en": "Peace of Mind Package - Maximum Protection"
    },
    "t60": {
      "vn": "Đồ có vấn đề trong quá trình xử lý - HERAMO chịu trách nhiệm. Bồi hoàn lên đến 50 triệu, minh bạch. Đặc biệt cho đồ hiệu, túi xách cao cấp.",
      "en": "If anything happens during processing - HERAMO takes responsibility. Reimbursement up to 50 million VND, fully transparent. Especially for luxury items and high-end handbags."
    },
    "t61": {
      "vn": "Chúng tôi lo đồ. Bạn lo yêu thương.",
      "en": "We take care of your things. You take care of what matters."
    },
    "t62": {
      "vn": "<a href=\"#\" class=\"btn-primary\">Đặt dịch vụ ngay - Freeship đơn đầu</a>",
      "en": "<a href=\"#\" class=\"btn-primary\">Book now - free shipping on your first order</a>"
    },
    "t63": {
      "vn": "Khách hàng nói gì",
      "en": "What customers say"
    },
    "t64": {
      "vn": "162,000+ khách hàng đã an tâm",
      "en": "162,000+ customers already trust us"
    },
    "t65": {
      "vn": "Những người bận rộn - đã tìm lại thời gian cho điều quan trọng hơn.",
      "en": "Busy people who found time again for what matters most."
    },
    "t66": {
      "vn": "\"Cứ gửi HERAMO là yên tâm nhé! Giặt hấp khô rất sạch, chuyên nghiệp và nhân viên lịch sự.\"",
      "en": "\"Just send it to HERAMO and relax! Dry cleaning is spotless, professional and the staff is very polite.\""
    },
    "t67": {
      "vn": "Chị Tố Trâm",
      "en": "Ms. To Tram"
    },
    "t68": {
      "vn": "Giảng viên",
      "en": "Lecturer"
    },
    "t69": {
      "vn": "Giặt hấp đồ hiệu",
      "en": "Luxury dry cleaning"
    },
    "t70": {
      "vn": "\"Bất kỳ thứ gì anh ấy tặng mình cũng chỉ giao HERAMO vệ sinh. Giày, đồ đôi, gấu bông - rất an tâm.\"",
      "en": "\"Anything he gives me, I only trust HERAMO to clean. Shoes, matching outfits, plush toys - I feel totally safe.\""
    },
    "t71": {
      "vn": "Chị Hà Xuyên",
      "en": "Ms. Ha Xuyen"
    },
    "t72": {
      "vn": "Chủ shop Online",
      "en": "Online shop owner"
    },
    "t73": {
      "vn": "Nhiều dịch vụ",
      "en": "Multiple services"
    },
    "t74": {
      "vn": "\"Công ty tháng nào cũng đặt HERAMO cho sofa và thảm phòng họp. Hiệu quả miễn bàn, tiện lợi và an tâm.\"",
      "en": "\"Every month our company books HERAMO for the sofas and meeting-room rugs. Unbeatable results, convenient and reliable.\""
    },
    "t75": {
      "vn": "Chị Nguyễn Hồng",
      "en": "Ms. Nguyen Hong"
    },
    "t76": {
      "vn": "Quản lý",
      "en": "Manager"
    },
    "t77": {
      "vn": "Vệ sinh sofa, thảm",
      "en": "Sofa &amp; rug cleaning"
    },
    "t78": {
      "vn": "Truyền thông nói gì",
      "en": "What the media says"
    },
    "t79": {
      "vn": "Được báo chí tin tưởng",
      "en": "Trusted by the press"
    },
    "t80": {
      "vn": "<span class=\"marquee-text\" style=\"color:#003087\">Tuổi Trẻ</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#003087\">Tuoi Tre</span>"
    },
    "t81": {
      "vn": "<span class=\"marquee-text\" style=\"color:#c8000a\">Thanh Niên</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#c8000a\">Thanh Nien</span>"
    },
    "t82": {
      "vn": "<span class=\"marquee-text\" style=\"color:#006633\">Dân Trí</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#006633\">Dan Tri</span>"
    },
    "t83": {
      "vn": "<span class=\"marquee-text\" style=\"color:#333\">Người Đô Thị</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#333\">Nguoi Do Thi</span>"
    },
    "t84": {
      "vn": "<span class=\"marquee-text\" style=\"color:#003087\">Tuổi Trẻ</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#003087\">Tuoi Tre</span>"
    },
    "t85": {
      "vn": "<span class=\"marquee-text\" style=\"color:#c8000a\">Thanh Niên</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#c8000a\">Thanh Nien</span>"
    },
    "t86": {
      "vn": "<span class=\"marquee-text\" style=\"color:#006633\">Dân Trí</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#006633\">Dan Tri</span>"
    },
    "t87": {
      "vn": "<span class=\"marquee-text\" style=\"color:#333\">Người Đô Thị</span>",
      "en": "<span class=\"marquee-text\" style=\"color:#333\">Nguoi Do Thi</span>"
    },
    "t88": {
      "vn": "Nhấn để xem",
      "en": "Tap to watch"
    },
    "t89": {
      "vn": "HERAMO - Ứng dụng giặt ủi vệ sinh 4.0 dẫn đầu tại TP.HCM",
      "en": "HERAMO - The leading 4.0 laundry &amp; cleaning app in HCMC"
    },
    "t90": {
      "vn": "Xem trên YouTube →",
      "en": "Watch on YouTube →"
    },
    "t91": {
      "vn": "Nhấn để xem",
      "en": "Tap to watch"
    },
    "t92": {
      "vn": "HERAMO trên Truyền hình Thanh Niên Thành phố Hồ Chí Minh",
      "en": "HERAMO on Thanh Nien TV Ho Chi Minh City"
    },
    "t93": {
      "vn": "Xem trên YouTube →",
      "en": "Watch on YouTube →"
    },
    "t94": {
      "vn": "HERAMO - Ứng dụng giặt ủi, vệ sinh 4.0 đạt Top 3 Startup Wheel 2021",
      "en": "HERAMO - 4.0 laundry &amp; cleaning app, Top 3 Startup Wheel 2021"
    },
    "t95": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t96": {
      "vn": "\"HERAMO đã thay đổi cách người dùng tại TP.HCM tiếp cận dịch vụ giặt ủi - từ <strong>quy trình thủ công sang trải nghiệm số hoàn toàn.</strong>\"",
      "en": "\"HERAMO has changed how people in HCMC use laundry services - from <strong>manual routines to a fully digital experience.</strong>\""
    },
    "t97": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t98": {
      "vn": "\"Mô hình 4.0 kết hợp chăm sóc tỉ mỉ của HERAMO <strong>đang giải quyết bài toán thời gian</strong> cho các gia đình bận rộn đô thị.\"",
      "en": "\"HERAMO's 4.0 model combined with meticulous care <strong>is solving the time problem</strong> for busy urban families.\""
    },
    "t99": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t100": {
      "vn": "Phúc Heramo - người giặt giày số 1 Việt Nam",
      "en": "Phuc Heramo - Vietnam's #1 Shoe Cleaner"
    },
    "t101": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t102": {
      "vn": "Nhượng quyền thương hiệu ngành \"giặt ủi\" - hướng đi mới cho nhà đầu tư",
      "en": "Laundry Franchise - A New Direction for Investors"
    },
    "t103": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t104": {
      "vn": "Làm sớm 3 việc này để có một cái Tết bình an, điều cuối cùng còn giúp bạn tiết kiệm tiền",
      "en": "3 Things to Do Early for a Peaceful Tết - the Last One Saves You Money"
    },
    "t105": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t106": {
      "vn": "Đón Tết kiểu online của người trẻ",
      "en": "How Young People Celebrate Tết Online"
    },
    "t107": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t108": {
      "vn": "HERAMO - Startup tham vọng cách mạng hóa trải nghiệm giặt ủi, vệ sinh",
      "en": "HERAMO - The Startup Revolutionizing Laundry &amp; Cleaning"
    },
    "t109": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t110": {
      "vn": "Chưa hết hot, ngoài mang tiền về cho mẹ thì con mang gì?",
      "en": "Still Trending: What Else Can You Bring Home for Mom?"
    },
    "t111": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t112": {
      "vn": "Làm ngay 4 đầu việc này nếu bạn mãi bận rộn chưa kịp chuẩn bị Tết",
      "en": "4 Things to Do Now If You're Too Busy to Prepare for Tết"
    },
    "t113": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t114": {
      "vn": "HERAMO - Ứng dụng giải phóng mọi người khỏi gánh nặng giặt ủi và công việc gia đình",
      "en": "HERAMO - The App Freeing Everyone from Laundry &amp; Household Chores"
    },
    "t115": {
      "vn": "Đọc bài viết →",
      "en": "Read the article →"
    },
    "t116": {
      "vn": "\n    <a href=\"javascript:void(0)\" class=\"btn-outline\" onclick=\"showMoreArticles(this)\">Đọc thêm bài viết →</a>\n  ",
      "en": "\n    <a href=\"javascript:void(0)\" class=\"btn-outline\" onclick=\"showMoreArticles(this)\">Read more articles →</a>\n  "
    },
    "t117": {
      "vn": "Đối tác B2B",
      "en": "B2B partners"
    },
    "t118": {
      "vn": "Được các thương hiệu lớn tin chọn",
      "en": "Chosen by leading brands"
    },
    "t119": {
      "vn": "Từ chuỗi fitness, khách sạn đến văn phòng &amp; spa - HERAMO là đối tác tin cậy cho doanh nghiệp tại TP.HCM.",
      "en": "From fitness chains and hotels to offices &amp; spas - HERAMO is a trusted partner for businesses in HCMC."
    },
    "t120": {
      "vn": "Masteri Thảo Điền",
      "en": "Masteri Thao Dien"
    },
    "t121": {
      "vn": "Masteri Thảo Điền",
      "en": "Masteri Thao Dien"
    },
    "t122": {
      "vn": "Liên hệ hợp tác B2B: <strong>0868 050 586</strong> · business@heramo.com",
      "en": "B2B partnerships: <strong>0868 050 586</strong> · business@heramo.com"
    },
    "t123": {
      "vn": "Tải ứng dụng",
      "en": "Download the app"
    },
    "t124": {
      "vn": "Đặt dịch vụ ngay<br>trên app HERAMO",
      "en": "Book now<br>on the HERAMO app"
    },
    "t125": {
      "vn": "Theo dõi đơn hàng, hình ảnh món đồ mọi lúc mọi nơi.",
      "en": "Track your order and see photos of your items anytime, anywhere."
    },
    "t126": {
      "vn": "TIỆN ÍCH 1",
      "en": "FEATURE 1"
    },
    "t127": {
      "vn": "Đặt tất cả dịch vụ nhanh chóng",
      "en": "Book any service in seconds"
    },
    "t128": {
      "vn": "Chọn dịch vụ, đặt lịch giao nhận, xem các ưu đãi hiện có - tất cả trong 1 phút ngay trên điện thoại.",
      "en": "Choose a service, schedule pickup &amp; delivery, browse current promos - all in one minute on your phone."
    },
    "t129": {
      "vn": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            Xem trên ứng dụng\n          ",
      "en": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            See it on the app\n          "
    },
    "t130": {
      "vn": "TIỆN ÍCH 2",
      "en": "UTILITY 2"
    },
    "t131": {
      "vn": "Theo dõi đơn hàng &amp; hình ảnh thực tế",
      "en": "Track your order &amp; see real photos"
    },
    "t132": {
      "vn": "Biết chính xác đồ đang ở bước nào - tiếp nhận, xử lý, đóng gói hay giao trả. Minh bạch 100%.",
      "en": "Know exactly where your items are - intake, processing, packing or delivery. 100% transparent."
    },
    "t133": {
      "vn": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            Xem trên ứng dụng\n          ",
      "en": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            See it on the app\n          "
    },
    "t134": {
      "vn": "TIỆN ÍCH 3",
      "en": "UTILITY 3"
    },
    "t135": {
      "vn": "Freeship 2 chiều tối đa 50K",
      "en": "Free two-way shipping up to 50K"
    },
    "t136": {
      "vn": "Khách mới nhận ngay freeship 2 chiều tối đa 50K cho đơn đầu tiên khi đặt qua app HERAMO.",
      "en": "New customers get free two-way shipping up to 50K on their first order via HERAMO app."
    },
    "t137": {
      "vn": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            Xem trên ứng dụng\n          ",
      "en": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            See it on the app\n          "
    },
    "t138": {
      "vn": "TIỆN ÍCH 4",
      "en": "UTILITY 4"
    },
    "t139": {
      "vn": "Gói combo dài hạn tiết kiệm hơn",
      "en": "Save more with long-term combo packages"
    },
    "t140": {
      "vn": "Đăng ký gói combo dài hạn với số lượng phù hợp, thời hạn lên tới 1 năm - tiết kiệm hơn, ưu tiên xếp lịch.",
      "en": "Save more with long-term combo packages for laundry and cleaning."
    },
    "t141": {
      "vn": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            Xem trên ứng dụng\n          ",
      "en": "\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>\n            See it on the app\n          "
    },
    "t142": {
      "vn": "⏸ Tạm dừng",
      "en": "⏸ Pause"
    },
    "t143": {
      "vn": "\n        <a href=\"#\" class=\"app-badge\"><svg width=\"140\" height=\"46\" viewBox=\"0 0 140 46\" fill=\"none\"><rect width=\"140\" height=\"46\" rx=\"8\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"139\" height=\"45\" rx=\"7.5\" stroke=\"white\" stroke-opacity=\".3\"></rect><g transform=\"translate(12,11)\"><path d=\"M10 3.8c.5-.6.9-1.5.8-2.4-.8.1-1.8.5-2.3 1.2-.5.5-1 1.5-.8 2.3.9.1 1.8-.4 2.3-1.1z\" fill=\"white\"></path><path d=\"M11 5.3c-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.6-2.5-.6-1.3 0-2.5.7-3.1 1.9-1.3 2.3-.4 5.8 1 7.7.6.9 1.4 1.9 2.4 1.9 1 0 1.3-.6 2.4-.6 1.1 0 1.5.6 2.5.6 1.1 0 1.7-1 2.4-1.9.4-.5.6-1.1.8-1.6-2.2-.8-2.6-4-.4-5.3-.4-.7-1.2-1.2-2.1-1.8l-.4-.1z\" fill=\"white\"></path></g><text x=\"38\" y=\"17\" font-family=\"Montserrat,sans-serif\" font-size=\"9\" fill=\"white\" opacity=\".75\">Lấy mã ngay trên</text><text x=\"38\" y=\"34\" font-family=\"Montserrat,sans-serif\" font-size=\"16\" fill=\"white\" font-weight=\"700\">App Store</text></svg></a>\n        <a href=\"#\" class=\"app-badge\"><svg width=\"154\" height=\"46\" viewBox=\"0 0 154 46\" fill=\"none\"><rect width=\"154\" height=\"46\" rx=\"8\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"153\" height=\"45\" rx=\"7.5\" stroke=\"white\" stroke-opacity=\".3\"></rect><g transform=\"translate(12,13)\"><path d=\"M0 1.2L9 8 0 14.8V1.2z\" fill=\"#EA4335\"></path><path d=\"M0 1.2L9 8l4-3.4L3.5 0C2-.4.8.2 0 1.2z\" fill=\"#4285F4\"></path><path d=\"M0 14.8L9 8l4 3.4-5.5 3.1C2 16.4.8 15.8 0 14.8z\" fill=\"#34A853\"></path><path d=\"M9 8l4-3.4 2.5 1.4L13 8l-4 0z\" fill=\"#FBBC04\"></path></g><text x=\"38\" y=\"17\" font-family=\"Montserrat,sans-serif\" font-size=\"9\" fill=\"white\" opacity=\".75\">Lấy mã ngay trên</text><text x=\"38\" y=\"34\" font-family=\"Montserrat,sans-serif\" font-size=\"16\" fill=\"white\" font-weight=\"700\">Google Play</text></svg></a>\n      ",
      "en": "\n        <a href=\"#\" class=\"app-badge\"><svg width=\"140\" height=\"46\" viewBox=\"0 0 140 46\" fill=\"none\"><rect width=\"140\" height=\"46\" rx=\"8\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"139\" height=\"45\" rx=\"7.5\" stroke=\"white\" stroke-opacity=\".3\"></rect><g transform=\"translate(12,11)\"><path d=\"M10 3.8c.5-.6.9-1.5.8-2.4-.8.1-1.8.5-2.3 1.2-.5.5-1 1.5-.8 2.3.9.1 1.8-.4 2.3-1.1z\" fill=\"white\"></path><path d=\"M11 5.3c-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.6-2.5-.6-1.3 0-2.5.7-3.1 1.9-1.3 2.3-.4 5.8 1 7.7.6.9 1.4 1.9 2.4 1.9 1 0 1.3-.6 2.4-.6 1.1 0 1.5.6 2.5.6 1.1 0 1.7-1 2.4-1.9.4-.5.6-1.1.8-1.6-2.2-.8-2.6-4-.4-5.3-.4-.7-1.2-1.2-2.1-1.8l-.4-.1z\" fill=\"white\"></path></g><text x=\"38\" y=\"17\" font-family=\"Montserrat,sans-serif\" font-size=\"9\" fill=\"white\" opacity=\".75\">Get the code on</text><text x=\"38\" y=\"34\" font-family=\"Montserrat,sans-serif\" font-size=\"16\" fill=\"white\" font-weight=\"700\">App Store</text></svg></a>\n        <a href=\"#\" class=\"app-badge\"><svg width=\"154\" height=\"46\" viewBox=\"0 0 154 46\" fill=\"none\"><rect width=\"154\" height=\"46\" rx=\"8\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"153\" height=\"45\" rx=\"7.5\" stroke=\"white\" stroke-opacity=\".3\"></rect><g transform=\"translate(12,13)\"><path d=\"M0 1.2L9 8 0 14.8V1.2z\" fill=\"#EA4335\"></path><path d=\"M0 1.2L9 8l4-3.4L3.5 0C2-.4.8.2 0 1.2z\" fill=\"#4285F4\"></path><path d=\"M0 14.8L9 8l4 3.4-5.5 3.1C2 16.4.8 15.8 0 14.8z\" fill=\"#34A853\"></path><path d=\"M9 8l4-3.4 2.5 1.4L13 8l-4 0z\" fill=\"#FBBC04\"></path></g><text x=\"38\" y=\"17\" font-family=\"Montserrat,sans-serif\" font-size=\"9\" fill=\"white\" opacity=\".75\">Get the code on</text><text x=\"38\" y=\"34\" font-family=\"Montserrat,sans-serif\" font-size=\"16\" fill=\"white\" font-weight=\"700\">Google Play</text></svg></a>\n      "
    },
    "t144": {
      "vn": "Hệ thống cửa hàng",
      "en": "Our store network"
    },
    "t145": {
      "vn": "9 cửa hàng khắp TP.HCM",
      "en": "9 stores across HCMC"
    },
    "t146": {
      "vn": "Đến trực tiếp hoặc đặt app giao nhận tận nhà.",
      "en": "Visit us or book pickup &amp; delivery on the app."
    },
    "t147": {
      "vn": "\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/TRGimoUUTbSMZT2T7\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s1.jpg\" alt=\"HERAMO CN1\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN1</div><div><div class=\"store-name\">01 Trường Sơn, Tân Bình</div><div class=\"store-addr\">Gần sân bay Tân Sơn Nhất</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/iw8ZJb2jvtTqVAQJ9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s2.jpg\" alt=\"HERAMO CN2\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN2</div><div><div class=\"store-name\">18A/71 Nguyễn Thị Minh Khai, Q.1</div><div class=\"store-addr\">Trung tâm thành phố</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/LjyT8Xor5EFZ4J5B8\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s3.jpg\" alt=\"HERAMO CN3\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN3</div><div><div class=\"store-name\">13C Hồ Hảo Hớn, Q.1</div><div class=\"store-addr\">Trung tâm thành phố</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/DPpea1vvFL9ouxN46\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s4.jpg\" alt=\"HERAMO CN4\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN4</div><div><div class=\"store-name\">196 Quang Trung, Gò Vấp</div><div class=\"store-addr\">Khu vực Gò Vấp</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/NY3dybsis26VFW3E9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn5.jpg\" alt=\"HERAMO CN5\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN5</div><div><div class=\"store-name\">179B Đường 3/2, Q.10</div><div class=\"store-addr\">Quận 10</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/1WHH6mKEJfEEpHq27\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn6.jpg\" alt=\"HERAMO CN6\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN6</div><div><div class=\"store-name\">15A Đường Số 2, Thủ Đức</div><div class=\"store-addr\">TP. Thủ Đức</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/haubgAgX76x4jKNB9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn7.jpg\" alt=\"HERAMO CN7\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN7</div><div><div class=\"store-name\">398 Hoàng Diệu, P.2, Q.4</div><div class=\"store-addr\">Quận 4</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/EWcGUy93YAFxGArL9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn8.jpg\" alt=\"HERAMO CN8\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN8</div><div><div class=\"store-name\">163 Đường Số 1, Q.7</div><div class=\"store-addr\">Phú Mỹ Hưng, Quận 7</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/96YpvWqAJgnfPfEY7\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn9.jpg\" alt=\"HERAMO CN9\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN9</div><div><div class=\"store-name\">23 Võ Trường Toản, P. An Khánh, Q.2</div><div class=\"store-addr\">Quận 2</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n  ",
      "en": "\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/TRGimoUUTbSMZT2T7\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s1.jpg\" alt=\"HERAMO CN1\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN1</div><div><div class=\"store-name\">01 Truong Son, Tan Binh</div><div class=\"store-addr\">Near Tan Son Nhat Airport</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/iw8ZJb2jvtTqVAQJ9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s2.jpg\" alt=\"HERAMO CN2\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN2</div><div><div class=\"store-name\">18A/71 Nguyen Thi Minh Khai, District 1</div><div class=\"store-addr\">City center</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/LjyT8Xor5EFZ4J5B8\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s3.jpg\" alt=\"HERAMO CN3\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN3</div><div><div class=\"store-name\">13C Ho Hao Hon, District 1</div><div class=\"store-addr\">City center</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/DPpea1vvFL9ouxN46\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-s4.jpg\" alt=\"HERAMO CN4\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN4</div><div><div class=\"store-name\">196 Quang Trung, Go Vap</div><div class=\"store-addr\">Go Vap area</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/NY3dybsis26VFW3E9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn5.jpg\" alt=\"HERAMO CN5\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN5</div><div><div class=\"store-name\">179B Street 3/2, District 10</div><div class=\"store-addr\">District 10</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/1WHH6mKEJfEEpHq27\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn6.jpg\" alt=\"HERAMO CN6\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN6</div><div><div class=\"store-name\">15A Street No. 2, Thu Duc</div><div class=\"store-addr\">Thu Duc City</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/haubgAgX76x4jKNB9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn7.jpg\" alt=\"HERAMO CN7\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN7</div><div><div class=\"store-name\">398 Hoang Dieu, Ward 2, District 4</div><div class=\"store-addr\">District 4</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/EWcGUy93YAFxGArL9\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn8.jpg\" alt=\"HERAMO CN8\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN8</div><div><div class=\"store-name\">163 Street No. 1, District 7</div><div class=\"store-addr\">Phu My Hung, District 7</div><span class=\"store-link\">View map →</span></div></div></a>\n    <a class=\"store-card\" href=\"https://maps.app.goo.gl/96YpvWqAJgnfPfEY7\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"store-img-wrap\"><img src=\"assets/store-cn9.jpg\" alt=\"HERAMO CN9\" loading=\"lazy\"></div><div class=\"store-info\"><div class=\"store-num\">CN9</div><div><div class=\"store-name\">23 Vo Truong Toan, An Khanh Ward, D.2</div><div class=\"store-addr\">District 2</div><span class=\"store-link\">Xem bản đồ →</span></div></div></a>\n  "
    },
    "t148": {
      "vn": "HERAMO - Dịch vụ giặt ủi vệ sinh cao cấp",
      "en": "HERAMO - Premium laundry &amp; cleaning services"
    },
    "t149": {
      "vn": "HERAMO bắt đầu hành trình từ năm 2017 với khát khao giúp hàng triệu người đặt các dịch vụ <span style=\"color:var(--gold)\">giặt ủi, giặt hấp, vệ sinh giày, vệ sinh nhà cửa, vệ sinh máy lạnh</span> tiện lợi - để có thêm thời gian tận hưởng cuộc sống.",
      "en": "HERAMO started its journey in 2017 with the ambition to help millions of people book <span style=\"color:var(--gold)\">laundry, dry cleaning, shoe care, home cleaning and A/C cleaning</span> with total convenience - so they have more time to enjoy life."
    },
    "t150": {
      "vn": "Sau hơn 9 năm tiên phong ứng dụng công nghệ 4.0, HERAMO tự hào là thương hiệu dẫn đầu tại TP.HCM với <span style=\"color:var(--gold)\">162.000+ khách hàng tin dùng.</span>",
      "en": "After 9+ years pioneering 4.0 technology, HERAMO is proudly the leading brand in HCMC with <span style=\"color:var(--gold)\">162,000+ trusted customers.</span>"
    },
    "t151": {
      "vn": "Công ty",
      "en": "Company"
    },
    "t152": {
      "vn": "<a href=\"#\">Về chúng tôi</a>",
      "en": "<a href=\"#\">About us</a>"
    },
    "t153": {
      "vn": "<a href=\"#\">Tuyển dụng</a>",
      "en": "<a href=\"#\">Careers</a>"
    },
    "t154": {
      "vn": "<a href=\"#\">Trở thành đối tác</a>",
      "en": "<a href=\"#\">Become a partner</a>"
    },
    "t155": {
      "vn": "<a href=\"#\">Điều khoản sử dụng</a>",
      "en": "<a href=\"#\">Terms of use</a>"
    },
    "t156": {
      "vn": "Dịch vụ",
      "en": "Services"
    },
    "t157": {
      "vn": "<a href=\"#\">Giặt sấy</a>",
      "en": "<a href=\"#\">Wash &amp; dry</a>"
    },
    "t158": {
      "vn": "<a href=\"#\">Giặt hấp</a>",
      "en": "<a href=\"#\">Dry cleaning</a>"
    },
    "t159": {
      "vn": "<a href=\"#\">Vệ sinh giày</a>",
      "en": "<a href=\"#\">Shoe cleaning</a>"
    },
    "t160": {
      "vn": "<a href=\"#\">Sofa, nệm, rèm, thảm</a>",
      "en": "<a href=\"#\">Sofas, mattresses, curtains, rugs</a>"
    },
    "t161": {
      "vn": "<a href=\"#\">Vệ sinh máy lạnh</a>",
      "en": "<a href=\"#\">A/C cleaning</a>"
    },
    "t162": {
      "vn": "<a href=\"#\">Spa túi xách</a>",
      "en": "<a href=\"#\">Handbag spa</a>"
    },
    "t163": {
      "vn": "Liên hệ",
      "en": "Contact"
    },
    "t164": {
      "vn": "\n          <span class=\"footer-contact-icon\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg></span>\n          8 chi nhánh TP.HCM\n        ",
      "en": "\n          <span class=\"footer-contact-icon\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg></span>\n          8 stores in HCMC\n        "
    },
    "t165": {
      "vn": "Tải ứng dụng",
      "en": "Download the app"
    },
    "t166": {
      "vn": "\n          <a href=\"#\" style=\"display:inline-block\"><svg width=\"120\" height=\"36\" viewBox=\"0 0 120 36\" fill=\"none\"><rect width=\"120\" height=\"36\" rx=\"6\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"119\" height=\"35\" rx=\"5.5\" stroke=\"white\" stroke-opacity=\".35\"></rect><g transform=\"translate(10,7)\"><path d=\"M9 3.3c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.3-.8 2.1.9.1 1.7-.4 2.2-1z\" fill=\"white\"></path><path d=\"M9.9 4.7c-1.1 0-2.1.6-2.7.6-.5 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.7-1.2 2.1-.3 5.3.9 7.1.6.8 1.3 1.7 2.2 1.7.9 0 1.2-.6 2.2-.6 1 0 1.3.6 2.2.6 1 0 1.6-.9 2.2-1.7.4-.5.6-1 .8-1.5-2-.7-2.4-3.7-.3-4.9-.4-.6-1.1-1.1-1.9-1.6l-.5-.3z\" fill=\"white\"></path></g><text x=\"30\" y=\"13\" font-family=\"Montserrat,sans-serif\" font-size=\"7\" fill=\"white\" opacity=\".7\">Lấy mã ngay trên</text><text x=\"30\" y=\"26\" font-family=\"Montserrat,sans-serif\" font-size=\"13\" fill=\"white\" font-weight=\"700\">App Store</text></svg></a>\n          <a href=\"#\" style=\"display:inline-block\"><svg width=\"120\" height=\"36\" viewBox=\"0 0 120 36\" fill=\"none\"><rect width=\"120\" height=\"36\" rx=\"6\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"119\" height=\"35\" rx=\"5.5\" stroke=\"white\" stroke-opacity=\".35\"></rect><g transform=\"translate(10,9)\"><path d=\"M0 1L8 8.5 0 16V1z\" fill=\"#EA4335\"></path><path d=\"M0 1L8 8.5l3.5-3L3 0C1.5-.4.5.2 0 1z\" fill=\"#4285F4\"></path><path d=\"M0 16L8 8.5l3.5 3L5 14.5C3.5 16 1.5 16.5 0 16z\" fill=\"#34A853\"></path><path d=\"M8 8.5l3.5-3 2.5 1.5-2.5 1.5-3.5 0z\" fill=\"#FBBC04\"></path></g><text x=\"30\" y=\"13\" font-family=\"Montserrat,sans-serif\" font-size=\"7\" fill=\"white\" opacity=\".7\">Lấy mã ngay trên</text><text x=\"30\" y=\"26\" font-family=\"Montserrat,sans-serif\" font-size=\"13\" fill=\"white\" font-weight=\"700\">Google Play</text></svg></a>\n        ",
      "en": "\n          <a href=\"#\" style=\"display:inline-block\"><svg width=\"120\" height=\"36\" viewBox=\"0 0 120 36\" fill=\"none\"><rect width=\"120\" height=\"36\" rx=\"6\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"119\" height=\"35\" rx=\"5.5\" stroke=\"white\" stroke-opacity=\".35\"></rect><g transform=\"translate(10,7)\"><path d=\"M9 3.3c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.3-.8 2.1.9.1 1.7-.4 2.2-1z\" fill=\"white\"></path><path d=\"M9.9 4.7c-1.1 0-2.1.6-2.7.6-.5 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.7-1.2 2.1-.3 5.3.9 7.1.6.8 1.3 1.7 2.2 1.7.9 0 1.2-.6 2.2-.6 1 0 1.3.6 2.2.6 1 0 1.6-.9 2.2-1.7.4-.5.6-1 .8-1.5-2-.7-2.4-3.7-.3-4.9-.4-.6-1.1-1.1-1.9-1.6l-.5-.3z\" fill=\"white\"></path></g><text x=\"30\" y=\"13\" font-family=\"Montserrat,sans-serif\" font-size=\"7\" fill=\"white\" opacity=\".7\">Get the code on</text><text x=\"30\" y=\"26\" font-family=\"Montserrat,sans-serif\" font-size=\"13\" fill=\"white\" font-weight=\"700\">App Store</text></svg></a>\n          <a href=\"#\" style=\"display:inline-block\"><svg width=\"120\" height=\"36\" viewBox=\"0 0 120 36\" fill=\"none\"><rect width=\"120\" height=\"36\" rx=\"6\" fill=\"#000\"></rect><rect x=\".5\" y=\".5\" width=\"119\" height=\"35\" rx=\"5.5\" stroke=\"white\" stroke-opacity=\".35\"></rect><g transform=\"translate(10,9)\"><path d=\"M0 1L8 8.5 0 16V1z\" fill=\"#EA4335\"></path><path d=\"M0 1L8 8.5l3.5-3L3 0C1.5-.4.5.2 0 1z\" fill=\"#4285F4\"></path><path d=\"M0 16L8 8.5l3.5 3L5 14.5C3.5 16 1.5 16.5 0 16z\" fill=\"#34A853\"></path><path d=\"M8 8.5l3.5-3 2.5 1.5-2.5 1.5-3.5 0z\" fill=\"#FBBC04\"></path></g><text x=\"30\" y=\"13\" font-family=\"Montserrat,sans-serif\" font-size=\"7\" fill=\"white\" opacity=\".7\">Get the code on</text><text x=\"30\" y=\"26\" font-family=\"Montserrat,sans-serif\" font-size=\"13\" fill=\"white\" font-weight=\"700\">Google Play</text></svg></a>\n        "
    },
    "t167": {
      "vn": "Ưu đãi dành riêng cho bạn",
      "en": "An exclusive offer just for you"
    },
    "t168": {
      "vn": "FREESHIP<span>2 chiều tối đa 50K</span>",
      "en": "FREE SHIPPING<span>two-way, up to 50K</span>"
    },
    "t169": {
      "vn": "Cho đơn đầu tiên - Đặt ngay hôm nay",
      "en": "For your first order - Book today"
    },
    "t170": {
      "vn": "Nhận mã ngay →",
      "en": "Get the code →"
    },
    "t171": {
      "vn": "Ưu đãi kết thúc sau <span id=\"countdown\">09:59</span>",
      "en": "Offer ends in <span id=\"countdown\">09:59</span>"
    },
    "t172": {
      "vn": "\n          <span class=\"popup-code\" id=\"popupCode\">WELCOME100M50</span>\n          <button class=\"popup-code-copy\" onclick=\"copyPromoCode()\" aria-label=\"Sao chép mã\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path></svg></button>\n        ",
      "en": "\n          <span class=\"popup-code\" id=\"popupCode\">WELCOME100M50</span>\n          <button class=\"popup-code-copy\" onclick=\"copyPromoCode()\" aria-label=\"Copy code\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path></svg></button>\n        "
    },
    "t173": {
      "vn": "Tải app hoặc liên hệ HERAMO để sử dụng ưu đãi liền tay!",
      "en": "Code claimed - save it now! Download the app or contact HERAMO to redeem right away."
    },
    "t174": {
      "vn": "\n          <a href=\"https://heramo.com/tai-app\" class=\"popup-success-cta popup-success-cta-primary\">TẢI ỨNG DỤNG</a>\n          <a href=\"https://m.me/heramo\" class=\"popup-success-cta popup-success-cta-secondary\">CHAT VỚI HERAMO NGAY</a>\n        ",
      "en": "\n          <a href=\"https://heramo.com/tai-app\" class=\"popup-success-cta popup-success-cta-primary\">DOWNLOAD APP</a>\n          <a href=\"https://m.me/heramo\" class=\"popup-success-cta popup-success-cta-secondary\">CHAT WITH HERAMO NOW</a>\n        "
    }
  },
  "attr": {
    "a0": {
      "vn": "HERAMO - Hệ thống giặt ủi vệ sinh cao cấp tại TP.HCM và app đặt dịch vụ",
      "en": "HERAMO - Premium laundry & cleaning system in HCMC with booking app"
    },
    "a1": {
      "vn": "Giặt hấp giặt khô cao cấp HERAMO",
      "en": "HERAMO premium dry cleaning"
    },
    "a2": {
      "vn": "Giặt sấy giặt ủi HERAMO",
      "en": "HERAMO wash & dry"
    },
    "a3": {
      "vn": "Vệ sinh giày HERAMO",
      "en": "HERAMO shoe cleaning"
    },
    "a4": {
      "vn": "Spa túi xách HERAMO",
      "en": "HERAMO handbag spa"
    },
    "a5": {
      "vn": "Vệ sinh sofa nệm HERAMO",
      "en": "HERAMO sofa & mattress cleaning"
    },
    "a6": {
      "vn": "Vệ sinh máy lạnh HERAMO",
      "en": "A/C cleaning HERAMO"
    },
    "a7": {
      "vn": "Giặt ủi tỉ mỉ đồ hiệu HERAMO",
      "en": "HERAMO meticulous care for luxury items"
    },
    "a8": {
      "vn": "Theo dõi đơn hàng HERAMO",
      "en": "HERAMO order tracking"
    },
    "a9": {
      "vn": "Giao nhận tận nhà HERAMO",
      "en": "HERAMO door-to-door pickup & delivery"
    },
    "a10": {
      "vn": "Bảo hiểm đồ đạc HERAMO",
      "en": "HERAMO item insurance"
    },
    "a11": {
      "vn": "HERAMO Truyền hình Thanh Niên 2023",
      "en": "HERAMO on Thanh Nien TV 2023"
    },
    "a12": {
      "vn": "Truyền hình Thanh Niên",
      "en": "Thanh Nien TV"
    },
    "a13": {
      "vn": "Người Lao Động",
      "en": "Nguoi Lao Dong"
    },
    "a14": {
      "vn": "Tên của bạn",
      "en": "Your name"
    },
    "a15": {
      "vn": "SĐT của bạn",
      "en": "Your phone number"
    },
    "a16": {
      "vn": "Sao chép mã",
      "en": "Copy code"
    }
  }
};

let __currentLang = 'vn';

/* ---------- i18n ---------- */
function applyLang(lang) {
  const text = I18N.text, attr = I18N.attr;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const rec = text[el.getAttribute('data-i18n')];
    if (rec && rec[lang] != null) el.innerHTML = rec[lang];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
      const i = pair.indexOf('=');
      const name = pair.slice(0, i), key = pair.slice(i + 1);
      const rec = attr[key];
      if (rec && rec[lang] != null) el.setAttribute(name, rec[lang]);
    });
  });
}

function switchLang(lang) {
  if (lang === __currentLang) return;
  __currentLang = lang;
  applyLang(lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'vi';
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  matchBulletsToH1();
}

function injectLangSwitcher() {
  document.querySelectorAll('[data-lang-switcher]').forEach(function (el) { el.remove(); });

  function buildSwitcher(isDrawer) {
    const wrap = document.createElement(isDrawer ? 'div' : 'li');
    wrap.className = 'lang-switcher' + (isDrawer ? ' lang-switcher-drawer' : '');
    wrap.setAttribute('data-lang-switcher', '1');
    wrap.innerHTML =
      '<button type="button" data-lang="vn" class="lang-btn' + (__currentLang === 'vn' ? ' active' : '') + '" aria-label="Tiếng Việt">VN</button>' +
      '<span class="lang-sep">/</span>' +
      '<button type="button" data-lang="en" class="lang-btn' + (__currentLang === 'en' ? ' active' : '') + '" aria-label="English">EN</button>';
    wrap.querySelectorAll('button[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { switchLang(b.getAttribute('data-lang')); });
    });
    return wrap;
  }

  const navLinks = document.querySelector('nav .nav-links');
  if (navLinks) {
    const cta = navLinks.querySelector('li:last-child');
    navLinks.insertBefore(buildSwitcher(false), cta);
  }
  const drawerLinks = document.querySelector('.nav-drawer-links');
  if (drawerLinks) {
    const panel = drawerLinks.parentElement;
    const cta = panel.querySelector('.nav-drawer-cta');
    // Place the switcher above the CTA (right after the links list)
    if (cta) panel.insertBefore(buildSwitcher(true), cta);
    else panel.appendChild(buildSwitcher(true));
  }
}

/* ---------- Mobile drawer ---------- */
function openDrawer() { document.getElementById('navDrawer').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeDrawer() { document.getElementById('navDrawer').classList.remove('open'); document.body.style.overflow = ''; }

/* ---------- YouTube lazy embed ---------- */
function loadYT(wId, vId, start) {
  const w = document.getElementById(wId);
  if (!w) return;
  w.onclick = null; w.style.cursor = 'default';
  w.innerHTML = '<iframe src="https://www.youtube.com/embed/' + vId + '?start=' + start + '&autoplay=1" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%"></iframe>';
}

/* ---------- Smooth scroll (delegated so it survives language swaps) ---------- */
document.addEventListener('click', function (e) {
  const a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href.length < 2) return;
  const t = document.querySelector(href);
  if (t) {
    e.preventDefault();
    const top = t.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
});

/* ---------- Counter animation ---------- */
function countUp(el, target, suffix) {
  let v = 0; const step = target / 60;
  const t = setInterval(function () {
    v = Math.min(v + step, target);
    el.textContent = Math.floor(v).toLocaleString('vi') + (suffix || '');
    if (v >= target) clearInterval(t);
  }, 24);
}
(function () {
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      if (id === 'ctr-kh') countUp(e.target, 162000, '+');
      if (id === 'ctr-md') countUp(e.target, 467000, '+');
      obs.unobserve(e.target);
    });
  }, { threshold: .6 });
  ['ctr-kh', 'ctr-md'].forEach(function (id) { const el = document.getElementById(id); if (el) obs.observe(el); });
})();

/* ---------- Popup + promo bar ---------- */
function getPopup() { return document.getElementById('popup'); }
function getPromoBar() { return document.getElementById('promo-bar'); }
function closePopup() {
  const p = getPopup(); if (p) p.classList.remove('active');
  if (!window.heramoClaimed) { setTimeout(function () { const pb = getPromoBar(); if (pb) pb.classList.add('visible'); }, 250); }
}
function openPromoPopup(e) {
  if (e) e.preventDefault();
  const pb = getPromoBar(); if (pb) pb.classList.remove('visible');
  const p = getPopup(); if (p) { p.classList.add('active'); startCountdown(); }
}
function closePromoBar() { const pb = getPromoBar(); if (pb) pb.classList.remove('visible'); }
(function () { const p = getPopup(); if (p) p.addEventListener('click', function (e) { if (e.target === getPopup()) closePopup(); }); })();

/* Auto-open the promo popup the first time the services section is seen */
(function () {
  const svcEl = document.getElementById('services');
  if (!svcEl) return;
  const svcObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && !sessionStorage.getItem('heramo_seen')) {
        sessionStorage.setItem('heramo_seen', '1');
        const pp = getPopup(); if (pp) pp.classList.add('active');
        startCountdown();
        svcObs.unobserve(svcEl);
      }
    });
  }, { threshold: .2 });
  svcObs.observe(svcEl);
})();

function startCountdown() {
  let s = 599; const el = document.getElementById('countdown');
  const t = setInterval(function () {
    if (!el || s <= 0) { clearInterval(t); return; }
    s--;
    el.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }, 1000);
}

function claimPromoCode(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('popupForm');
  const nameInput = document.getElementById('popupName');
  const phoneInput = document.getElementById('popupPhone');
  const error = document.getElementById('popupError');
  const timer = document.getElementById('popupTimer');
  const success = document.getElementById('popupSuccess');
  if (!form || !nameInput || !phoneInput || !success) return false;
  const name = (nameInput.value || '').trim();
  const phoneDigits = (phoneInput.value || '').trim().replace(/\D/g, '');
  const errText = __currentLang === 'en'
    ? 'Please enter a valid name and phone number to claim the code.'
    : 'Vui lòng nhập tên và SĐT hợp lệ để nhận mã.';
  if (!name || phoneDigits.length < 9 || phoneDigits.length > 11) {
    if (error) error.textContent = errText;
    return false;
  }
  if (error) error.textContent = '';
  form.style.display = 'none';
  if (timer) timer.style.display = 'none';
  success.classList.add('visible');
  const stamp = document.querySelector('.popup-stamp');
  const headline = document.querySelector('.popup-headline');
  const sublabel = document.querySelector('.popup-sublabel');
  if (stamp) stamp.textContent = __currentLang === 'en' ? '🎉 Congratulations!' : '🎉 Chúc mừng bạn!';
  if (headline) { headline.innerHTML = __currentLang === 'en' ? 'Code claimed!' : 'Nhận mã thành công!'; headline.style.fontSize = '22px'; }
  if (sublabel) sublabel.textContent = __currentLang === 'en' ? 'Save your code to use when booking' : 'Lưu mã để sử dụng khi đặt dịch vụ';
  window.heramoClaimed = true;
  const pb = document.getElementById('promo-bar');
  if (pb) pb.classList.remove('visible');
  return false;
}

function copyPromoCode() {
  const codeEl = document.getElementById('popupCode');
  const code = codeEl ? codeEl.textContent.trim() : 'WELCOME100M50';
  const copyButton = document.querySelector('.popup-code-copy');
  const markCopied = function () {
    if (copyButton) {
      copyButton.classList.add('copied');
      const previous = copyButton.innerHTML;
      copyButton.textContent = '✓';
      setTimeout(function () { copyButton.innerHTML = previous; copyButton.classList.remove('copied'); }, 1200);
    }
    let existing = document.querySelector('.copy-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = __currentLang === 'en' ? 'Code copied successfully' : 'Đã sao chép mã thành công';
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add('visible'); });
    setTimeout(function () { toast.classList.remove('visible'); setTimeout(function () { toast.remove(); }, 300); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(markCopied).catch(markCopied);
  } else {
    markCopied();
  }
}

/* ---------- App section feature rotation ---------- */
let appCurrent = 0;
let appPaused = false;
let appTimer = null;
const APP_DURATION = 4000;

function goToFeat(idx, fromClick) {
  if (fromClick) {
    appPaused = true;
    clearInterval(appTimer);
    const btn = document.getElementById('appPauseBtn');
    if (btn) btn.textContent = __currentLang === 'en' ? '▶ Resume' : '▶ Tiếp tục';
  }
  const items = document.querySelectorAll('.app-feat-item');
  const screens = document.querySelectorAll('.phone-screen-item');
  const dots = document.querySelectorAll('.app-dot');
  items.forEach(function (el, i) {
    el.classList.toggle('active', i === idx);
    const pb = el.querySelector('.app-feat-progress-bar');
    if (pb) { pb.style.animation = 'none'; pb.style.width = '0%'; }
  });
  screens.forEach(function (el, i) { el.classList.toggle('active', i % 4 === idx); });
  dots.forEach(function (el, i) { el.classList.toggle('active', i === idx); });
  if (!appPaused) {
    const pb = document.getElementById('pb' + idx);
    if (pb) { pb.style.animation = 'none'; pb.offsetHeight; pb.style.animation = 'featProgress ' + APP_DURATION + 'ms linear forwards'; }
  }
  appCurrent = idx;
  if (!appPaused) resetAppTimer();
}
function prevFeat() { goToFeat((appCurrent + 3) % 4, true); }
function nextFeat() { goToFeat((appCurrent + 1) % 4, true); }
function resetAppTimer() {
  clearInterval(appTimer);
  if (!appPaused) appTimer = setInterval(function () { goToFeat((appCurrent + 1) % 4); }, APP_DURATION);
}
function toggleMobilePhone(btn, idx) {
  const card = btn.closest('.app-feat-item');
  const preview = card.querySelector('.app-feat-phone-preview');
  const isOpen = preview.classList.contains('open');
  const showLabel = __currentLang === 'en' ? ' View in the app' : ' Xem trên ứng dụng';
  const hideLabel = __currentLang === 'en' ? ' Hide' : ' Ẩn bớt';
  document.querySelectorAll('.app-feat-phone-preview.open').forEach(function (p) { p.classList.remove('open'); });
  document.querySelectorAll('.app-feat-cta').forEach(function (b) {
    b.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>' + showLabel;
  });
  if (!isOpen) {
    preview.classList.add('open');
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>' + hideLabel;
  }
}
function toggleAppPause() {
  appPaused = !appPaused;
  const btn = document.getElementById('appPauseBtn');
  if (appPaused) {
    clearInterval(appTimer);
    if (btn) btn.textContent = __currentLang === 'en' ? '▶ Resume' : '▶ Tiếp tục';
    const pb = document.getElementById('pb' + appCurrent);
    if (pb) pb.style.animationPlayState = 'paused';
  } else {
    if (btn) btn.textContent = __currentLang === 'en' ? '⏸ Pause' : '⏸ Tạm dừng';
    goToFeat(appCurrent);
  }
}
(function () {
  const target = document.getElementById('app');
  if (!target) return;
  let started = false;
  function startAutoplay() {
    if (appPaused) {
      appPaused = false;
      const btn = document.getElementById('appPauseBtn');
      if (btn) btn.textContent = __currentLang === 'en' ? '⏸ Pause' : '⏸ Tạm dừng';
    }
    goToFeat(started ? appCurrent : 0);
    started = true;
  }
  function pauseAutoplay() {
    clearInterval(appTimer);
    const pb = document.getElementById('pb' + appCurrent);
    if (pb) pb.style.animationPlayState = 'paused';
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { startAutoplay(); } else { pauseAutoplay(); } });
    }, { threshold: 0.3 });
    io.observe(target);
  } else {
    startAutoplay();
  }
})();

/* ---------- Hero bullets: match width to the description above ---------- */
function matchBulletsToH1() {
  const sub = document.querySelector('.hero-sub');
  const bullets = document.querySelector('.hero-bullets');
  if (!sub || !bullets) return;
  bullets.style.maxWidth = sub.offsetWidth + 'px';
}
window.addEventListener('resize', matchBulletsToH1);

/* ---------- Press: reveal 3 more articles per click ---------- */
function showMoreArticles(btn) {
  const container = btn.closest('section').querySelector('.press-quotes');
  const hidden = container.querySelectorAll('.press-quote-extra[style*="display:none"], .press-quote-extra[style*="display: none"]');
  const count = Math.min(3, hidden.length);
  for (let i = 0; i < count; i++) hidden[i].style.display = '';
  if (hidden.length <= 3) btn.style.display = 'none';
}

/* ---------- Init ---------- */
injectLangSwitcher();
matchBulletsToH1();
