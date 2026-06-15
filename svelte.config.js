import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

// Project pages are served from https://<user>.github.io/<repo>/, so the app
// needs a base path in production. Overridable via BASE_PATH for forks/domains.
const base = dev ? '' : (process.env.BASE_PATH ?? '/dark-johak');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Fully static, client-side-only output for GitHub Pages.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base
		}
	}
};

export default config;
