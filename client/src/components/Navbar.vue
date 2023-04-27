<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()


</script>

<template>
	<nav>
		<router-link to="/">
			<span>Home</span>
		</router-link>
		<router-link to="/thought">
			<span>Add a thought</span>
		</router-link>
		<router-link to="/">
			<span>Add a thought</span>
		</router-link>
		<router-link to="/profile">
			<span>View Profile</span>
		</router-link>
	</nav>
</template>

<style>

</style>