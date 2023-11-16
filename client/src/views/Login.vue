<template lang="">
	<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-green">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-20 w-auto" src="../assets/thoughts_logo.png" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">login as usual ;)</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="username" class="block text-left text-sm font-medium leading-6 text-white-900">username</label>
          <div class="mt-2">
            <input id="username" name="username" type="text" v-model="username" required class="loginSignupInputs" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
			  <label for="password" class="block text-left text-sm font-medium leading-6 text-white-900">password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required class="loginSignupInputs" />
          </div>
        </div>

        <div>
          <button type="submit" class="loginSignupButton">login</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member yet?
        {{ ' ' }}
        <router-link to="/signup" class="font-semibold leading-6 text-sky-600 hover:text-sky-400">Let's get you started ;)</router-link>
      </p>
    </div>
  </div>
  </template>
<script lang="ts">
import { useRouter } from "vue-router";
import axios, { AxiosError } from 'axios'
import config from "../../config"

const router = useRouter();

export default {

	data() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		async login() {
			try {
				const response = await axios.post(`${config.apiUrl}/api/login`, {
					username: this.username,
					password: this.password
				}, {
					headers: {
						'Content-Type': 'application/json'
					}
				}
				);
				localStorage.setItem('token', response.data.token)
				this.$router.push('/history');
			} catch (error: any) { // Using `any` here since Axios errors have a specific structure not fully covered by the `Error` type
				if (axios.isAxiosError(error)) {
					// Handling Axios errors specifically
					const axiosError = error as AxiosError;
					if (axiosError.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.error("Login error response:", axiosError.response.data);
						console.error("Status code:", axiosError.response.status);
						console.error("Headers:", axiosError.response.headers);
					} else if (axiosError.request) {
						// The request was made but no response was received
						console.error("Login error request:", axiosError.request);
					} else {
						// Something happened in setting up the request that triggered an error
						console.error("Login error message:", axiosError.message);
					}
				} else {
					// Non-Axios errors
					console.error("Error during login:", error.message);
				}
				alert("Login failed... 😅");
			}
		}
	}
}

</script>
  