<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from '~/stores/useFavorites'
const store = useFavoritesStore()
const items = computed(() =>
	store.favorites.map((rocket: Rocket) => {
		return {
			id: rocket.id,
			name: rocket.name,
			description: rocket.description,
		}
	}),
)
const handleClick = (_, row) => {
	navigateTo(`/rocket/${row.item.id}`)
}
</script>
<template>
	<div class="favorites">
		<div v-if="store.favorites.length === 0">
			<div class="text-h3">Empty Data</div>
		</div>
		<div v-else>
			<v-btn @click="store.clear()">Clear Favorites</v-btn>
			<v-data-table :items="items" @click:row="handleClick" />
		</div>
	</div>
</template>
<style scoped lang="scss">
.favorites {
	min-height: 800px;
}
</style>
