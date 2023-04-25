<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'


</script>

<template>
	<ul class="">
		<li>
			<router-link to="/" class="w-full text-2xl flex justify-center items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>overview</span>
		</li>
		<li>
			<router-link to="/thought" class="w-full text-2xl flex justify-center items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>leave a thought</span>
		</li>
		<li>
			<router-link to="/history" class="w-full text-2xl flex justify-center items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>thought history</span>
		</li>
		<li>	
			<router-link to="/friendsarea" class="w-full text-2xl flex justify-center items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>friends area</span>
		</li>
		<li>
			<router-link to="/about" class="w-full text-2xl flex justify-center items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>about us</span>
		</li>

	</ul>


</template>

<style>

</style>