<template lang="">
	<div>
	  <h1>Sign up to Thoughts</h1>
	  <p>
		<input
		  type="text"
		  name="email"
		  id="email"
		  v-model="email"
		  placeholder="Email"
		/>
	  </p>
	  <p>
		<input
		  type="password"
		  name="password"
		  id="password"
		  v-model="password"
		  placeholder="Password"
		/>
	  </p>
	  <p v-if="errorMessage">{{ errorMessage }}</p>
	  <button @click="signupUser">Sign up</button>
	  <p>Already have an account? <a @click="toLogin">Login as usual</a></p>
	</div>
  </template>
  <script lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const toLogin = () => {
  router.push('/login')
}
  </script>
  <style lang=""></style>
  