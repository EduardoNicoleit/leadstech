import { ref } from 'vue'
import type { Rocket } from '~/types'
// Vue3 typescript composition api
export const useFavoritesStore = defineStore('favorites', () => {
	const favorites = ref<Rocket[]>([])
	function add(rocket: Rocket) {
		favorites.value.push(rocket)
	}
	function clear() {
		favorites.value = [] as Rocket[]
	}
	return {
		favorites,
		add,
		clear,
	}
})
