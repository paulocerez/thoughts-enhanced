<template>
	<div class="mt-0">
		<h2 class="text-2xl -mt-64 font-bold mb-4">My Entries</h2>
		<div v-if="loading" class="text-center">Loading...</div>
		<div v-else>
			<post-item v-for="post in posts" :key="post.id" :post="post" @delete-post="deletePost"
				@edit="editPost"></post-item>
		</div>
	</div>
</template>
  
<script lang="ts">
import PostItem from '../components/PostItem.vue'
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'

const router = useRouter();

export default {
	components: {
		PostItem,
	},
	data() {
		return {
			posts: [],
			loading: true,
		}
	},
	mounted() {
		this.fetchPosts()
	},
	methods: {
		async fetchPosts() {
			try {
				const response = await axios.get('/api/posts')
				this.posts = response.data
				this.loading = false
			} catch (error) {
				console.error(error)
			}
		},
		async deletePost(postId: number) {
			try {
				await axios.delete(`/api/posts/${postId}`)
				this.posts = this.posts.filter(post => post.id !== postId)
			} catch (error) {
				console.error(error)
			}
		},
		editPost(postId: number) {
			router.push({ name: 'edit', params: { postId: postId.toString() } })
		}
	},
}
</script>
  