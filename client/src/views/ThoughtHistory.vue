<template>
	<div class="mt-16 space-y-12">
		<div class="header flex flex-col space-y-8">
			<div>
				<h1 class="font-bold p-2 text-4xl">Your Entries</h1>
				<h2 class="text-gray-300 text-xl">Read through your personal collection.</h2>
			</div>
			<router-link to="/thought" class="">
				<button class=" bg-slate-700 py-2 px-4 rounded-md">Create new thought</button>
			</router-link>
		</div>
		<div class="flex flex-col justify-center items-center">
			<div v-for="post in posts" :key="post.id"
				class="bg-white card text-black rounded-md p-6 text-left w-80 my-8 overflow-auto">


				<!-- Editing view -> when clicked on the edit button in the default view -->
				<div v-if="post.isEditing">
					<div class="buttons text-right rounded items-center space-x-4">
						<button @click="cancelEdit(post)" class="button bg-slate-700">cancel</button>
						<button @click="savePost(post)" class="button bg-green-500">save</button>
					</div>
					<div class="card-text space-y-4">
						<input v-model="post.title" type="text" class="inputs font-bold text-lg mt-6">
						<input v-model="post.category" type="text" class="inputs text-base">
						<br>
						<textarea v-model="post.thought" class="inputs text-xs">
						</textarea>
					</div>
				</div>

				<!-- This is the default view of a card, showing properties as text -->
				<div v-else>
					<div class="buttons text-right rounded items-center space-x-4">
						<button @click="editPost(post)" class="button bg-blue-500">
							edit
						</button>
						<button @click="deletePost(post.id)" class="button bg-red-500">
							delete
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
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';
import config from '../../config';
const router = useRouter();


interface Post {
	id: number;
	userId: number;
	title: string;
	category: string;
	thought: string;
	isEditing: boolean;
}

export default defineComponent({

	components: {
	},

	data() {
		// reset to default values
		return {
			posts: [] as Post[],
		};
	},
	mounted() {
		this.fetchPosts();
	},
	methods: {
		async fetchPosts() {
			try {
				const response = await axios.get<Post[]>(`${config.apiUrl}/api/posts/user`, {
					headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					}
				});
				this.posts = response.data;
			} catch (error) {
				console.error(error);
				alert('Failed to fetch thoughts...')
			}
		},
		async deletePost(postId: number) {
			try {
				await axios.delete(`${config.apiUrl}/api/posts/${postId}`);
				this.posts = this.posts.filter(post => post.id !== postId);

			} catch (error) {
				console.error(error);
			}
		},
		async editPost(post: Post) {
			try {
				post.isEditing = true;
			} catch (error) {
				console.error(error);
			}
		},
		async savePost(post: Post) {
			try {
				post.isEditing = false;
				await axios.put(`http://localhost:8000/api/posts/${post.id}`, post);
			} catch (error) {
				console.error(error);
			}
		},
		async cancelEdit(post: Post) {
			try {
				post.isEditing = false;
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

.inputs {
	background-color: transparent;
	border: 1px solid black;
	border-radius: 4px;
	padding: 0 0.5rem;
}
</style>