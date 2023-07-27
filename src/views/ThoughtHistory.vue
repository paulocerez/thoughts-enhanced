<template>
	<div class="mt-0">
		<h2 class="text-2xl -mt-64 font-bold mb-4">My Entries</h2>
		<!-- <div v-if="loading" class="text-center">Loading...</div>
		<div v-else> -->
		<!-- create a post element for every post in the post database table -->
		<li v-for="post in posts" :key="post.id">
			<div>
				<h3 class="font-bold text-lg mb-2">{{ post.title }}</h3>
				<h5 class="font-bold text-lg mb-2">{{ post.category }}</h5>
				<p class="text-gray-700 text-base">{{ post.thought }}</p>
			</div>
		</li>
	</div>
	<!-- </div> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';
import backendUrl from '../../config';

const router = useRouter();

export default defineComponent({
	data() {
		// reset to default values
		return {
			posts: [] as { id: number; title: string; category: string; thought: string }[],
			loading: true,
		};
	},
	mounted() {
		this.fetchPosts();
	},
	methods: {
		async fetchPosts() {
			try {
				const response = await axios.get<{ id: number; title: string; category: string; thought: string }[]>('http://localhost:3000/api/posts/all');
				this.posts = response.data;
				this.loading = false;
			} catch (error) {
				console.error(error);
			}
		},
		// async deletePost(postId: number) {
		//   try {
		//     await axios.delete(`${backendUrl}/api/posts/${postId}`);
		//     this.posts = this.posts.filter(post => post.id !== postId);
		//   } catch (error) {
		//     console.error(error);
		//   }
		// },
		// editPost(postId: number) {
		//   router.push({ name: 'edit', params: { postId: postId.toString() } });
		// }
	},
});
</script>
  