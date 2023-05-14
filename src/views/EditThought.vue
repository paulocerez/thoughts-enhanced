<template>
	<div class="mt-8">
		<h2 class="text-2xl font-bold mb-4">edit thought</h2>
		<form @submit.prevent="editThought">
			<div class="mb-4">
				<label class="block text-gray-700 font-bold mb-2" for="title">
					Title
				</label>
				<input v-model="title"
					class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="title" type="text" required>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 font-bold mb-2" for="thought">
					Thought
				</label>
				<textarea v-model="thought"
					class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="thought" required></textarea>
			</div>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
				Submit
			</button>
		</form>
	</div>
</template>
  
<script lang="ts">
import axios from 'axios'
import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();

export default {
	data() {
		return {
			title: '',
			thought: '',
			postId: '',
		}
	},
	mounted() {
		this.fetchPost()
	},
	methods: {
		async fetchPost() {
			const postId = this.$route.params.postId
			const response = await axios.get(`/api/posts/${postId}`)
			this.postId = postId as string
			this.title = response.data.title
			this.thought = response.data.thought
		},
		async editThought() {
			const postData = {
				title: this.title,
				thought: this.thought,
			}
			try {
				await axios.put(`/api/posts/${this.postId}`, postData)
				router.push('/')
			} catch (error) {
				console.error(error)
			}
		},
	},
}
</script>
