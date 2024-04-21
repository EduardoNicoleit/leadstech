<script setup lang="ts">
import RocketTable from '../atoms/RocketTable.vue'
import { ROCKETS_QUERY } from '~/graphql'
import type { Rocket } from '~/types'
const { result, loading } = useQuery<{ rockets: Rocket[] }>(ROCKETS_QUERY)
</script>
<template>
	<div class="rockets">
		<template v-if="loading">
			<v-skeleton-loader type="table" />
		</template>
		<template v-else>
			<RocketTable :rockets="result?.rockets" />
		</template>
	</div>
</template>
<style scoped lang="scss">
.rockets {
	min-height: 800px;
}
</style>
