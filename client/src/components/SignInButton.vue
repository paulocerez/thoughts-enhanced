<script lang="ts">
export default {
	data() {

	}
}

</script>

<template>
	<button class="signup-button text-sm font-medium">
		<router-link to="/login">sign in</router-link>
	</button>
</template>

<style>
	.signup-button {
		padding: 10px 20px;
		border: none;
		color: #fff;
		border-radius: 7px;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		-webkit-transition-property: -webkit-box-shadow;
		transition-property: -webkit-box-shadow;
		transition-property: box-shadow;
		transition-property: box-shadow, -webkit-box-shadow;

		background: rgb(0,140,255);
		-webkit-box-shadow: 0 0 25px rgb(0,140,255);
		box-shadow: 0 0 25px rgb(0,140,255);
	}

	.signup-button:hover {
		-webkit-box-shadow: 0 0 5px rgb(0,140,255),
				0 0 25px rgb(0,140,255),
				0 0 50px rgb(0,140,255),
				0 0 100px rgb(0,140,255);
			
		box-shadow: 0 0 5px rgb(0,140,255),
				0 0 25px rgb(0,140,255),
				0 0 50px rgb(0,140,255),
				0 0 100px rgb(0,140,255);
	}

</style>