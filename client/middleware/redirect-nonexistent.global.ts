export default defineNuxtRouteMiddleware((to) => {
	const router = useRouter()
	const isPageExist = (path: string): boolean => {
		const resolvedRoute = router.resolve(path)
		// Check if the resolved route has matched components
		return resolvedRoute.matched.length > 0
	}
	if (!isPageExist(router.currentRoute.value.path) && to.path !== '/launches') {
		return navigateTo('/launches', { redirectCode: 301 })
	}
})
