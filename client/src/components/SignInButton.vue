<template>
	<button class="signup-button text-sm font-medium" @click="handleButtonClick">
		<router-link to="/login">{{ buttonText }}</router-link>
	</button>
</template>

<script lang="ts">
export default {
	data() {
		return {
			loggedIn: !!localStorage.getItem("token"), // Initialize first state by checking for token
		}
	},
	computed: {
		buttonText() {
			return this.loggedIn ? 'Logout' : 'Login';
		}
	},
	methods: {
		handleButtonClick() {
			if (this.loggedIn) {
				this.logout();
			} else {
				this.$router.push("/login");
			}
		},
		logout() {
			// handling logging out entirely on the client side as we remove the token from the local storage
			localStorage.removeItem('token');
			this.loggedIn = false;
			this.$router.push("/login");
		}
	},
	watch: {
		// Watch for changes in the token and update loggedIn accordingly
		'$route': function () {
			this.loggedIn = !!localStorage.getItem('token');
		}
	}
}

</script>

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

	background: rgb(0, 140, 255);
	-webkit-box-shadow: 0 0 25px rgb(0, 140, 255);
	box-shadow: 0 0 25px rgb(0, 140, 255);
}

.signup-button:hover {
	-webkit-box-shadow: 0 0 5px rgb(0, 140, 255),
		0 0 25px rgb(0, 140, 255),
		0 0 50px rgb(0, 140, 255),
		0 0 100px rgb(0, 140, 255);

	box-shadow: 0 0 5px rgb(0, 140, 255),
		0 0 25px rgb(0, 140, 255),
		0 0 50px rgb(0, 140, 255),
		0 0 100px rgb(0, 140, 255);
}
</style>