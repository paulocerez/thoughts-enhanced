<template lang="">
	<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-green">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../assets/eyes.png" alt="Looking for your thoughts" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">tell me something I don't know...</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          	<label for="thought" class="block text-left text-sm font-medium leading-6 text-white-900">title</label>
          	<div class="mt-2">
            	<input id="title" name="title" type="text" v-model="title" required class="thoughtsInputs" />
          	</div>
        </div>
        <div>
          	<label for="thought" class="block text-left text-sm font-medium leading-6 text-white-900">category</label>
          	<div class="mt-2">
            	<input id="category" name="category" type="text" v-model="category" required class="thoughtsInputs" />
          	</div>
        </div>

        <div>
			<label for="thought" class="block text-left text-sm font-medium leading-6 text-white-900">thought</label>
          	<div class="mt-2">
            	<textarea id="thought" name="thought" type="text" rows="5" v-model="thought" required class="thoughtsInputs" />
          	</div>
        </div>

        <div>
          <button @click="submitForm" type="button" class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">post and smile :)</button>
        </div>
      </form>

    </div>
  </div>
</template>
<script lang="ts">
// import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';
import backendUrl from '../../config';
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

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
				const response = await axios.post('http://localhost:8000/api/posts', {
					// these are the properties that are sent within the response body
					title: this.title,
					category: this.category,
					thought: this.thought,
				}, {
					headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					}
				});
				if (response.status === 201) {
					this.title = '';
					this.category = '';
					this.thought = '';
					this.$router.push('/history');
				} else {
					console.error('Failed to store the thought :(');
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
};

</script>
<style>
.input-fields {
	display: flex;
	width: 100%;
	justify-content: center;
	border-radius: 0.375rem;
	background-color: #4299e1;
	padding: 0.75rem 1rem;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.5;
	color: #fff;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	transition: background-color 0.2s ease-in-out;
	outline: none;
	outline-offset: 2px;
}

.input-fields:hover {
	background-color: #3182ce;
}

.input-fields:focus-visible {
	outline: 2px solid #4299e1;
}
</style>
