<script setup lang="ts">
import { computed } from 'vue'
import type { Rocket } from '~/types'
const props = defineProps<{
	rockets: Rocket[]
}>()
const items = computed(() =>
	props.rockets.map((rocket: Rocket) => {
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
	<div class="Rockets">
		<v-data-table :items="items" @click:row="handleClick" />
	</div>
</template>
