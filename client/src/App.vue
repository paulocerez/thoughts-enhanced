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
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

h1 {
	color: black;
}
</style>

