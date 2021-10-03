<template>
	<div class="weather-list-container">
		<div class=" spinner-border m-5 text-secondary" v-if="status === 'Loading'">
			<p>Checking the latest weather report</p>
		</div>
		<div class="alert alert-danger" v-if="status == 'Error'" >{{ error }}</div>
		<div v-else>
			<div class="d-inline-flex flex-wrap">
				<div class="card m-2" v-for="city in cities" :key="city.id" :style="[getColor(city.weather[0].id)]" @click="cityWeatherReportDetails(city.name)">
					<div class="card-body " >
						<h2 class="card-title display-4 d-inline-block m-r-3" role="button">{{ city.name }}</h2>
						<p class="float-right d-inline-block" @click.stop="removeCity(city.name)">×</p>
						<p class="lead"> Date : {{ getDate(city.dt) }} <br /> Weather : {{ city.weather[0].main }} <br /> </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	export default {
		name: "Reports",
		data() {
			return {
				status: "Loading",
				error: "",
			};
		},
		computed: {
			...mapState({
				cities: (state) => state.cityReports.cities,
			}),
		},
		methods: {
			...mapMutations({ removeCityFromStore: "cityReports/removeCity" }),
			cityWeatherReportDetails(cityName) {
				this.$router.push({
					name: "CityReport",
					params: { city: cityName },
				});
			},
			removeCity(cityName) {
				this.status = "Loading";
				try {
					this.removeCityFromStore(cityName);
				} catch (err) {
					this.status = "Error";
					this.error = err.message;
				}
				this.status = "Loaded";
			},
			getColor(code) {
				if (200 <= code && code <= 299) {
					return {
						backgroundColor: "#546A76",
						color: "#fff",
					};
				} else if (300 <= code && code <= 399) {
					return {
						backgroundColor: "#6969B3",
					};
				} else if (500 <= code && code <= 599) {
					return {
						backgroundColor: "#88CAE7",
					};
				} else if (700 <= code && code <= 799) {
					return {
						backgroundColor: "#ACC3C3",
					};
				} else if (800 <= code && code <= 899) {
					return {
						backgroundColor: "#EBEBEB",
					};
				}
			},
			getDate(date) {
				return new Date(date * 1000).toUTCString();
			},
		},
		created() {
			this.status = "Loaded";
		},
	};
</script>

<style scoped>
</style>