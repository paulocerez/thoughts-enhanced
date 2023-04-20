<script lang="ts">
import './style.css'
import Navbar from './components/Navbar.vue'

export default {
	data () {
		return {

		}
	},
	components: { Navbar },
	// computed: {
	// 	authed () {
			
	// 	}
	// }
}

</script>

<template>
  	<Navbar/>
  	<router-view/>
</template>

<style scoped>
	h1 {
		color: black
	}
</style>

