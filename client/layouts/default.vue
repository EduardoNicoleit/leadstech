<template>
	<v-app>
		<v-main>
			<v-container>
				<Header />
				<slot />
				<Footer />
			</v-container>
		</v-main>
	</v-app>
</template>
<script setup lang="ts">
import Header from '~/components/organisms/layouts/Header.vue'
import Footer from '~/components/organisms/layouts/Footer.vue'
</script>
