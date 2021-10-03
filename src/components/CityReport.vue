<template>
	<div class="weather-container">
		<div class=" spinner-border m-5 text-secondary" v-if="status === 'Loading'">
			<p>Checking the latest weather report</p>
		</div>
		<div class="alert alert-danger" v-if="status == 'Error'" >{{ error }}</div>
		<div v-else>
			<div class="card-body" :style="[getColor(city.weather[0].id)]" >
				<h2 class="display-4 text-center my-2">{{ city.name }}</h2>
				<p class="lead text-center my-2">
					Date : {{ getDate(city.dt) }}
					<br />
					Wind direction is {{ city.wind.deg }} deg.
					<br />
					Wind speed is {{ city.wind.speed }} km/hr
					<br />
					Cloudiness is {{ city.clouds.all }}
					<br />
					Pressure is {{ city.main.pressure }}hPa
					<br />
					Humidity is {{ city.main.humidity }}%
					<br />
					Cooridinates : {{ city.coord.lat }}°N,
					{{ city.coord.lon }}°E
					<br />
					Sunrise time :
					{{ new Date(city.sys.sunrise * 1000).toUTCString() }}
					<br />
					Sunset time :
					{{ new Date(city.sys.sunset * 1000).toUTCString() }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "CityReport",
		data() {
			return {
				cityName: this.$route.params.city,
				city: {},
				status: "LOADING",
				error: "",
			};
		},
		computed: {
			...mapGetters({ getCity: "cityReports/getCity" }),
		},
		created() {
			this.setCity();
			this.status = "LOADED";
		},
		methods: {
			setCity() {
				this.status = "LOADING";
				try {
					this.city = this.getCity(this.cityName.toLowerCase());
				} catch (err) {
					this.status = "ERROR";
					this.error = err.message;
				}
				this.status = "LOADED";
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
	};
</script>

<style scoped>
	/* .loading {
		text-align: center;
	}
	.weather-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 120px 2em;
	}
	.weather {
		position: relative;
		border: 1px solid rgb(167, 167, 167);
		border-radius: 5px;
		padding: 20px;
		margin-bottom: 30px;
		flex-basis: 30%;
	} */
</style>