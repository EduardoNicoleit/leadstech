import { URL, fileURLToPath } from 'url'
import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	srcDir: 'client/',
	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },
	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: 'https://spacex-production.up.railway.app/' },
		},
	},
	vite: {
		plugins: [vuetify()],
		resolve: {
			alias: {
				'~': fileURLToPath(new URL('./client/', import.meta.url)),
				'@': fileURLToPath(new URL('./client/', import.meta.url)),
				'~~': fileURLToPath(new URL('./', import.meta.url)),
				'@@': fileURLToPath(new URL('./', import.meta.url)),
			},
		},
	},
	modules: ['@nuxtjs/apollo', ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
})
