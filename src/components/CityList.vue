<template>
	<div class="cityNames">
		<p class="d-block display-4 text-center my-5">Cities added to view report</p>
        <div class="mx-3">
			<h4>
                <span class="badge badge-dark mx-2 " v-for="city in cityNamesTitleCase" :key="city">{{city}}</span>
            </h4>
        </div>
	</div>
</template>

<script>
	export default {
		name: "CityList",
		props: {
			cityNames: {
				type: Array,
				default: () => [],
			},
		},
		computed: {
			cityNamesTitleCase() {
				return this.cityNames.map((value) => {
					return value.charAt(0).toUpperCase() + value.slice(1);
				});
			},
		},
	};
</script>

<style scoped>
	/* h2 {
		margin: 50px 0 10px 0;
		text-align: center;
		text-transform: capitalize;
	}
	.cityNames {
		
		text-align: center;
	}
	span{
		margin-bottom: 50px;
	}
	span::after {
		content: ", ";
		
	}
	span:last-child::after {
		content: "";
	} */
</style>