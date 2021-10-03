<template>
	<div> 
        <div class="d-flex justify-content-center align-items-center" v-if="status === 'Loading'">
            <div class=" spinner-border m-2 text-secondary" role="status" >
            <span class="sr-only">Loading...</span>
            </div>
            <p class="lead my-auto">Checking the latest weather report</p>
        </div>
		<div class="alert alert-danger" v-if="status == 'Error'" >{{ error }}</div>
		<div v-else>
			<CityInput v-on:addCityToList="addCityToCityList" />
			<CityList :cityNames="cityNames" />
		</div>
	</div>
</template>

<script>
	import CityList from "@/components/CityList.vue";
	import CityInput from "@/components/CityInput.vue";
	import { mapState } from "vuex";
	export default {
		name: "City",		
		components: {
			CityList,
			CityInput,
		},
		data() {
			return {
				status: "Loading",
				error: "",
			};
		},
		computed: {
			...mapState({
				cities: (state) => state.cityReports.cities,
				cityNames: (state) => state.cityReports.cityNames,
			}),
		},
		methods: {
			async getWeather() {
				try {
					await Promise.all(
						this.cityNames.map(async (cityName) => {
							console.log(cityName);
							await this.$store.dispatch(
								"cityReports/getCityReport",
								cityName
							);
						})
					);
				} catch (error) {
					this.status == "Error";
					this.error = error.message;
					console.log(error.message);
				}
			},
			async addCityToCityList(cityName) {
				this.status = "Loading";
				const isAdded = this.cityNames.indexOf(cityName.toLowerCase());
				if (isAdded === -1) {
					this.cityNames.push(cityName.toLowerCase());
					await this.getWeather();
					this.status = "Loaded";
				}
			},
		},
		created() {
			this.status = "Loaded";
		},
	};
</script>

<style scoped>


</style>