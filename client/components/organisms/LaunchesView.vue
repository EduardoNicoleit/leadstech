<script setup lang="ts">
import LaunchList from '../atoms/LaunchList.vue'
import { LAUNCHES_QUERY } from '~/graphql'
import type { Launch } from '~/types'
const { data, pending } = useAsyncQuery<{ launches: Launch[] }>(LAUNCHES_QUERY)
</script>
<template>
	<div class="launches">
		<template v-if="pending">
			<v-skeleton-loader type="table" />
		</template>
		<template v-else>
			<LaunchList :launches="data?.launches" />
		</template>
	</div>
</template>
<style scoped lang="scss">
.launches {
	min-height: 600px;
}
</style>
