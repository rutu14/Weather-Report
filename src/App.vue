<template>
	<div id="app">
		<AppNavbar />
		<div class="container my-3">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components:{
    AppNavbar: Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
template {
  font-family: "Source Sans Pro", sans-serif;
}
</style>