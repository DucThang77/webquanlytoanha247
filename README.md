# quanlytoanha247.com

Trang giới thiệu dịch vụ quản lý vận hành tòa nhà của HADREAMCO (Công ty Cổ phần Đầu tư Phát triển và Quản lý Bất động sản Hà Nội).

Dựng bằng [Astro](https://astro.build) và chạy trên Cloudflare Workers.

## Lệnh

| Lệnh | Tác dụng |
| --- | --- |
| `npm install` | Cài thư viện |
| `npm run dev` | Chạy thử trên máy |
| `npm run build` | Build ra `dist/` |
| `npm run deploy` | Build rồi đẩy lên Cloudflare |

## Sửa nội dung

- Thông tin công ty (tên, hotline, email, địa chỉ): `src/data/site.ts`
- Nội dung trang chủ: `src/pages/index.astro`
- Khung trang, đầu trang, chân trang: `src/layouts/Layout.astro`
- Tên miền và cấu hình Cloudflare: `wrangler.jsonc`
