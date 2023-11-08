<script lang="ts">
import UnderConstruction from '../components/UnderConstruction.vue'

const profileData = [

]


export default {
	components: {
	},
}

</script>

<template>
	<div class="flex flex-col">
		<h1>
			Profile
		</h1>
		<div class="bg-green-300 w-full h-auto">Hello

			<p>Your username: {user.username} </p>
			<p>Your email: {user.email}</p>
		</div>
		<button class="border w-content ">Submit feedback</button>

	</div>
</template>

<style></style>
