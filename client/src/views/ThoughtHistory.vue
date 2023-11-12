<template>
	<div class="mt-16">
		<div class="header flex flex-col">
			<h1 class="font-bold p-2 text-4xl">Your Entries</h1>
			<h2 class="text-gray-300 text-xl">Read through your personal collection.</h2>
		</div>
		<div class="flex flex-col justify-center items-center">
			<div v-for="post in posts" :key="post.id"
				class="bg-white card text-black rounded-md p-6 text-left w-80 my-8 overflow-auto">


				<!-- This is the default view of a card -->

				<div class="buttons text-right rounded items-center space-x-4">
					<button @click="" class="button bg-blue-500">
						edit
					</button>
					<button class="button bg-red-500">
						delete
					</button>
					<button class="button bg-green-400">
						save
					</button>
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
				<!-- <div class="text-white" v-if="posts.length === 0">You have no thoughts currently. Go to the Thoughts page to
					add them.
				</div> -->
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
import DeleteIcon from "../components/ui/DeleteIcon.vue"

export default defineComponent({

	components: {
		DeleteIcon
	},

	data() {
		// reset to default values
		return {
			posts: [] as { id: number; title: string; category: string; thought: string, isEditing: boolean }[],
		};
	},
	mounted() {
		this.fetchPosts();
	},
	methods: {
		async fetchPosts() {
			try {
				const response = await axios.get<{ id: number; title: string; category: string; thought: string; isEditing: boolean }[]>('http://localhost:8000/api/posts/all');
				this.posts = response.data
			} catch (error) {
				console.error(error);
			}
		},
		async deletePost() {
			try {

			} catch (error) {
				console.error(error);
			}
		},
		async editPost() {
			try {

			} catch (error) {
				console.error(error);
			}
		}
	},
});
</script>

<style>
.card {
	border-radius: 15px;
}

hr {
	border-top: 1px solid rgb(216, 214, 21x4);
}

.card-text {
	display: block;
	overflow: auto;
	/* text-overflow: ellipsis; */
	white-space: normal;
	max-width: 100%;
	word-wrap: break-word;
}

.button {
	border-radius: 6px;
	padding: 2px 8px;
	color: white;
}
</style>