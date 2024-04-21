import { computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { Launch } from '~/types'
export const useLaunches = (
	launches: Ref<Launch[]>,
	sort: Ref<string | null>,
	year: Ref<number | null>,
): ComputedRef<Launch[]> => {
	return computed(() => {
		let lists = [...launches.value]
		if (sort.value) {
			lists.sort((a: Launch, b: Launch) => {
				const dateA = new Date(a.launch_date_local)
				const dateB = new Date(b.launch_date_local)
				return sort.value === 'asc'
					? dateA.getTime() - dateB.getTime()
					: dateB.getTime() - dateA.getTime()
			})
		}
		if (year.value !== null) {
			lists = lists.filter((launch: Launch) => {
				const launchYear = new Date(launch.launch_date_local).getFullYear()
				return launchYear === year.value
			})
		}
		return lists
	})
}
