<template>
	<div class="addCity ">
		<label for="cityAdd" class="d-block display-4 text-center my-5">Enter a city to name to add to list</label>
		<div class="input-group  input-group-lg w-25 mx-auto my-2">
            <input type="text" class="form-control" placeholder="City's Name" v-model="city" >
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addCity">Add</button>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: "CityInput",
		data() {
			return {
				city: "",
			};
		},
		methods: {
			addCity() {
				if (this.city.trim() !== "") {
					this.$emit("addCityToList", this.city);
					this.city = "";
				}
			},
		},
	};
</script>

<style scoped>
	/* .addCity {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-bottom: 1px solid black;
	}
	.addCity label {
		text-align: center;
		text-transform: capitalize;
		margin-bottom: 10px;
		margin-top: 50px;
	}
	.addCity input {
		padding: 5px;
		border-radius: 5px;
		margin: 10px 0;
	}
	.addCity button {
		margin-top: 10px;
		margin-bottom: 50px;
		padding: 5px 10px;
		cursor: pointer;
	}
	.addCity button:active {
		transform: translateY(3px);
	} */
</style>