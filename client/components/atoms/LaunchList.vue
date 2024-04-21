<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import { useLaunches } from '~/hooks'
import type { Launch } from '~/types'
const props = defineProps<{
	launches: Launch[]
}>()
type SortType = 'asc' | 'dsc'
const sortType = ref<SortType | null>(null)
const year = ref<number | null>(null)
const launchList = useLaunches(toRef(props, 'launches'), sortType, year)
const items = computed(() =>
	launchList.value.map((launch: Launch) => {
		const date = new Date(launch.launch_date_local)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear().toString()
		return {
			id: launch.id,
			mission: launch.mission_name,
			date: `${month}-${day}-${year}`,
			rocket: launch.rocket.rocket_name,
			rocketId: launch.rocket.rocket.id,
			details: launch.details,
		}
	}),
)
const headers = [
	{ title: 'Date', value: 'date' },
	{ title: 'Mission', value: 'mission' },
	{ title: 'Rocket Name', value: 'rocket' },
	{ title: 'Details', value: 'details' },
]
const handleSort = () => {
	sortType.value === null
		? (sortType.value = 'asc')
		: sortType.value === 'asc'
			? (sortType.value = 'dsc')
			: (sortType.value = 'asc')
}
</script>
<template>
	<div class="Launches">
		<div class="w-full flex items-center justify-center">
			<v-btn @click="handleSort">Sort {{ sortType === null ? 'asc' : 'asc' ? 'dsc' : 'asc' }}</v-btn>
			<v-select
				v-model="year"
				label="Year"
				:items="[
					null,
					2024,
					2023,
					2022,
					2021,
					2020,
					2019,
					2018,
					2017,
					2016,
					2015,
					204,
					2013,
					2012,
					2011,
					2010,
					2009,
					2008,
					2006,
				]"
			/>
		</div>

		<v-data-table :items="items" :headers="headers" />
	</div>
</template>
