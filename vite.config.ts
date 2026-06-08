import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			// The JO.HAK design system lives outside src/, so its self-hosted
			// fonts/assets must be reachable by the dev server.
			allow: [fileURLToPath(new URL('./design-system', import.meta.url))]
		}
	}
});
