<script lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import UnderConstruction from '../components/UnderConstruction.vue'

export default {
	components: {
		UnderConstruction
	},

	setup() {
		// reactive reference to a value through ref
		const quote = ref('')
		const loaded = async () => {
			const response = await axios.get('https://api.kanye.rest/')
			quote.value = response.data.quote
		}

		loaded()

		return {
			quote
		}
	}
}

</script>

<template>
	<UnderConstruction />
	<div>
		<i>"{{ quote }}"</i>
		<p>- Kanye West</p>
	</div>
</template>

<style></style>
