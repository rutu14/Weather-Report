<template>
	<nav class="navbar navbar-expand navbar-light bg-light">
		<div class="container px-2 ">
            <ul class="nav navbar-nav mr-auto ">
                <li class="nav-item">
					<router-link class="nav-link" to="/" active-class="active" exact>Cities</router-link>
                </li>
                <li class="nav-item">
					<router-link class="nav-link" to="/all" active-class="active" >Reports</router-link>
                </li>
            </ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar"
};
</script>

<style>
	
</style>