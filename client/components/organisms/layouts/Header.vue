<template>
	<header id="site-header">
		<ClientOnly>
			<v-app-bar>
				<v-container>
					<NuxtLink to="/" active-class="text-blue" class="mr-3">Home</NuxtLink>
					<NuxtLink to="/launches" active-class="text-blue" class="mr-3">Launches</NuxtLink>
					<NuxtLink to="/rockets" active-class="text-blue" class="mr-3">Rockets</NuxtLink>
					<NuxtLink to="/favorites" active-class="text-blue" class="mr-3">Favorites</NuxtLink>
				</v-container>
			</v-app-bar>
		</ClientOnly>
	</header>
</template>
