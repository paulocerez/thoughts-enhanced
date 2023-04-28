<template>
	<div class="flex flex-col items-start justify-start border-b border-gray-200 py-4 px-6">
		<h3 class="font-bold text-lg mb-2">{{ post.title }}</h3>
		<p class="text-gray-700 text-base">{{ post.thought }}</p>
		<div class="mt-4">
			<button @click="deletePost" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">
				delete
			</button>
			<button @click="$emit('edit	', post.id)">edit</button>
			<router-link :to="{ name: 'edit', params: { postId: post.id } }"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Edit
			</router-link>
		</div>
	</div>
</template>
  
<script lang="ts">
export default {
	props: {
		post: {
			type: Object,
			required: true,
		}
	},
	methods: {
		deletePost() {
			this.$emit('delete-post', this.post.id)
		},
	},
}
</script>
