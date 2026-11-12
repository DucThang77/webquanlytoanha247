// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://quanlytoanha247.com',
	adapter: cloudflare(),
	// Trang tĩnh, không dùng Astro sessions. Tắt để adapter không tự thêm
	// binding KV "SESSION" thiếu namespace_id (làm hỏng bước deploy, lỗi 10021).
	session: false,
});
