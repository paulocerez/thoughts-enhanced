<template lang="">
	<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-green">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../assets/eyes.png" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">tell me something I don't know...</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          	<label for="thought" class="block text-left text-sm font-medium leading-6 text-white-900">thought-title</label>
          	<div class="mt-2">
            	<input id="title" name="title" type="text" v-model="title" required class="block w-full rounded-md border-0 bg-transparent py-2 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          	</div>
        </div>
        <div>
          	<label for="thought" class="block text-left text-sm font-medium leading-6 text-white-900">thought-category</label>
          	<div class="mt-2">
            	<input id="category" name="category" type="text" v-model="category" required class="block w-full rounded-md border-0 bg-transparent py-2 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          	</div>
        </div>

        <div>
			<label for="thought" class="block text-left text-sm font-medium leading-6 text-white-900">thought</label>
          	<div class="mt-2">
            	<textarea id="thought" name="thought" type="text" rows="5" v-model="thought" required class="block w-full rounded-md bg-transparent border-0 py-2 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          	</div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">post and smile :)</button>
        </div>
      </form>

    </div>
  </div>
  </template>
<script lang="ts">
// import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'

const router = useRouter();

export default {
	data() {
		return {
			// initial component state -> empty properties
			title: '',
			category: '',
			thought: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const response = await axios.post('/api/posts', {
					title: this.title,
					category: this.category,
					thought: this.thought,
				});
				// status indicates that new ressources have been created on the server based on a POST request
				if (response.status === 201) {
					// Reset form inputs
					this.title = '';
					this.category = '';
					this.thought = '';
					// Navigate to the page where the new post is displayed
					router.push('/history');
				} else {
					console.error('Failed to store the thought');
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
};

</script>
<style></style>
