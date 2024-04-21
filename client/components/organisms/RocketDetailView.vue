<script setup lang="ts">
import { computed } from 'vue'
import { ROCKET_QUERY } from '~/graphql/rocket'
import type { Rocket } from '~/types'
import RocketDetail from '~/components/atoms/RocketDetail.vue'
const route = useRoute<{ params: { id: string } }>()
const rocketId = computed(() => route.params.id ?? '')
const { result, loading } = useQuery<{ rocket: Rocket }>(ROCKET_QUERY, {
	rocketId,
})
</script>
<template>
	<div v-if="loading">
		<v-skeleton-loader type="table" />
	</div>
	<div v-else>
		<RocketDetail :rocket="result?.rocket" />
	</div>
</template>
