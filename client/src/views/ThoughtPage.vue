<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
	data() {
		return {
			navigationItems: [
				{ name: 'leave a thought', link: '/thought', current: true },
				{ name: 'history', link: '/history', current: false },
				{ name: 'friends area', link: '/friendsarea', current: false },
				{ name: 'about us', link: '/about', current: false },
				{ name: 'your profile', link: '/profile', current: false }
			]

		}
	}	
}
</script>
<template>

</template>
<style>
</style>