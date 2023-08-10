<template>
	<div class="mt-0">
		<h2 class="text-2xl -mt-64 font-bold mb-4">My Entries</h2>
		<!-- create a post element for every post in the post database table -->

		<ul v-for="post in posts" :key="post.id" class="grid grid-cols-3 text-center">

			<li>
				<h3 class="font-bold text-lg mb-2">{{ post.title }}</h3>
			</li>
			<li>
				<h5 class="font-bold text-lg mb-2">{{ post.category }}</h5>
			</li>
			<li>
				<p class="text-gray-700 text-base">{{ post.thought }}</p>
			</li>
		</ul>
	</div>
	<!-- </div> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';
// import backendUrl from '../../config';

const router = useRouter();

export default defineComponent({
	data() {
		// reset to default values
		return {
			posts: [] as { id: number; title: string; category: string; thought: string }[],
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
			} catch (error) {
				console.error(error);
			}
		},
	},
});
</script>

<style>
li {
	display: flex;
	border: 1px solid green;
	text-align: center;
	flex-direction: column;
}
</style>