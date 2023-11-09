<template>
	<div>
		<div class="header flex flex-col">
			<h1 class="font-bold p-2 text-4xl">Your Entries</h1>
			<h2 class="text-gray-300 text-xl">Read through your personal collection.</h2>
		</div>
		<div class="flex flex-col justify-center">
			<div v-for="post in posts" :key="post.id"
				class="bg-white card text-black rounded-md p-6 text-left w-80 h-60 overflow-auto">
				<div class="buttons text-right rounded items-center">
					<button class="button">
						edit
					</button>
					<button class="button">
						delete
					</button>
				</div>
				<div>
					<hr>
				</div>
				<div class="card-text">
					<div class="font-bold text-lg mt-6">
						{{ post.title }}
					</div>
					<div class="text-base">
						category: {{ post.category }}
					</div>
					<br>
					<div class="text-xs">
						{{ post.thought }}
					</div>
				</div>
				<div class="text-white" v-if="posts.length === 0">You have no thoughts currently. Go to the Thoughts page to
					add them.
				</div>
			</div>
		</div>
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
		};
	},
	mounted() {
		this.fetchPosts();
	},
	methods: {
		async fetchPosts() {
			try {
				const response = await axios.get<{ id: number; title: string; category: string; thought: string }[]>('http://localhost:8000/api/posts/all');
				this.posts = response.data
			} catch (error) {
				console.error(error);
			}
		},
	},
});
</script>

<style>
.card {
	border-radius: 15px;
}

hr {
	border-top: 1px solid rgb(216, 214, 214);
}


.button {
	background-color: aliceblue;
	margin-left: 1rem;
}

.card-text {
	display: block;
	overflow: auto;
	/* text-overflow: ellipsis; */
	white-space: normal;
	max-width: 100%;
	word-wrap: break-word;
}
</style>