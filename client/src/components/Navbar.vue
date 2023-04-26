<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from './Button.vue'
import { setMapStoreSuffix } from 'pinia'

export default {
	components: { Button }
}

</script>

<template>
	<ul class="">
		<li>
			<router-link to="/" class="ext-2xl cursor-pointer inline-flex items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>overview</span>
		</li>
		<li>
			<router-link to="/thought" class="text-2xl inline-flex items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>leave a thought</span>
		</li>
		<li>
			<router-link to="/history" class="text-2xl inline-flex items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>thought history</span>
		</li>
		<li>	
			<router-link to="/friendsarea" class="text-2xl inline-flex items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>friends area</span>
		</li>
		<li>
			<router-link to="/about" class="text-2xl inline-flex items-center px-4 py-2 rounded-lg hover:bg-secondary transition-all"></router-link><span>about us</span>
		</li>
		<Button />

	</ul>


</template>

<style>

</style>