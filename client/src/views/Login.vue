<template lang="">
	<div>
	  <h1>Login</h1>
	  <p>
		<input
		  type="text"
		  name="email"
		  id="email"
		  v-model="email"
		  placeholder="Email address"
		/>
	  </p>
	  <p>
		<input
		  type="password"
		  name="password"
		  v-model="password"
		  id=""
		  placeholder="Password"
		/>
	  </p>
	  <p v-if="errorMessage">{{ errorMessage }}</p>
	  <button @click="loginUser">Login</button>
	  <p>
		Don't have an account? :( <a @click='toSignup'>Sign up fast</a>
	  </p>
	</div>
  </template>
  <script lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const toSignup = () => {
  router.push('/signup')
}

  </script>
  <style lang=""></style>
  