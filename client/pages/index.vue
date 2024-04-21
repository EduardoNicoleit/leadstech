<template>
	<div style="min-height: 800px">
		<h1>LEADS Frontend test</h1>
		<div>
			<h2>What I did</h2>
			<ul class="pl-6">
				<li>
					I defined all data types based on the graphql schema. In types folder, there all data
					types. In graphql folder, all queries are defined.
				</li>
				<li>
					I wrote launches, rockets, rocket, favorites pages. In launches page, the data is showed
					in table. I didn't focus on UI. All logic was implemented.
				</li>
				<li>In hooks folder, there is a function for sorting and filtering launches data.</li>
				<li>
					The favorites logic was implemented with pinia. Users can click "Add to Favorites" in
					rocket page. If current rocket is in favorites, the button is not showed.
				</li>
				<li>
					If users try to access a page that does not exist, it is redirected to launches page. I
					create a Nuxt route middleware.
				</li>
			</ul>
		</div>
		<div>
			<h2>What should be improved</h2>
			<ul class="pl-6">
				<li>
					Some codes were hard coded. In launches page, the options in the select box and sort type
					were hard coded.([null, 2024, 2023, .....], sort type: 'asc', 'dsc')
				</li>
				<li>I didn't focus on UI.</li>
				<li>
					In the rocket page, if I input wrong id in the url on the browser and the data is not in
					server, it should show notification or redirect to somewhere. (for example, notFound page)
					I checked the server response and it returns 'undefined'. The server should send error so
					that it can be catched in onError in useQuery composable.
				</li>
			</ul>
		</div>
	</div>
</template>
