<template>
	<div class="mt-8">
		<h2 class="text-2xl font-bold mb-4">Edit Thought</h2>
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

export default {
	data() {
		return {
			title: '',
			thought: '',
			postId: null,
		}
	},
	mounted() {
		this.fetchPost()
	},
	methods: {
		async fetchPost() {
			const postId = this.$route.params.postId
			const response = await axios.get(`/api/posts/${postId}`)
			this.postId = postId
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
				this.$router.push('/')
			} catch (error) {
				console.error(error)
			}
		},
	},
}
</script>
<template>
	<div class="mt-8">
		<h2 class="text-2xl font-bold mb-4">Edit Thought</h2>
		<form @submit.prevent="editThought">
			<div class="mb-4">
				<label class="block text-gray-700 font-bold mb-2" for="title">Title</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="title" type="text" v-model="title" />
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 font-bold mb-2" for="thought">Thought</label>
				<textarea
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="thought" v-model="thought"></textarea>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit">
					Save
				</button>
				<button
					class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button" @click="$emit('close')">
					Cancel
				</button>
			</div>
		</form>
	</div>
</template>
  
  <script>
  export default {
	props: {
	  thought: {
		type: Object,
		required: true,
	  },
	},
	data() {
	  return {
		title: this.thought.title,
		thought: this.thought.thought,
	  };
	},
	methods: {
	  async editThought() {
		try {
		  const response = await axios.put(`/api/thoughts/${this.thought.id}`, {
			title: this.title,
			thought: this.thought,
		  });
		  this.$emit("update-thought", response.data);
		} catch (error) {
		  console.error(error);
		}
	  },
	},
  };
  </script>
  