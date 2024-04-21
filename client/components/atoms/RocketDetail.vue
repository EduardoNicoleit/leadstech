<script setup lang="ts">
import { computed } from 'vue'
import type { Rocket } from '~/types'
import { useFavoritesStore } from '~/stores/useFavorites'
const props = defineProps<{
	rocket: Rocket
}>()
const store = useFavoritesStore()
const isInFavorites = computed<boolean>(() => store.favorites.includes(props.rocket))

const firstFlightDate = computed(() => {
	const date = new Date(props.rocket.first_flight)
	const day = date.getDate().toString().padStart(2, '0')
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const year = date.getFullYear().toString()
	return `${month}-${day}-${year}`
})
</script>
<template>
	<div class="RocketDetail">
		<v-btn v-if="!isInFavorites" class="text-blue" @click="store.add(rocket)">Add to Favorites</v-btn>
		<div class="text-h5 mt-8">Rocket Name: {{ rocket.name }}</div>
		<div class="text-h5 mt-4">First flight date: {{ firstFlightDate }}</div>
		<div class="text-h5 mt-4">
			Rocket Diameter: {{ rocket.diameter.feet }} feet, {{ rocket.diameter.meters }} meters
		</div>
		<div class="text-h5 mt-4">
			Rocket Height: {{ rocket.height.feet }} feet, {{ rocket.height.meters }} meters
		</div>
		<div class="text-h5 mt-4">Rocket Mass: {{ rocket.mass.kg }} kg, {{ rocket.mass.lb }} lb</div>
		<div class="text-h5 mt-4">Number of stages: {{ rocket.stages }}</div>
		<div class="text-h5 mt-4">Rocket Description: {{ rocket.description }}</div>
	</div>
</template>
