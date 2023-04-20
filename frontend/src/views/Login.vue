<script lang="ts">
export default {
	data() {
		return {
			color: "red",
		}
	},
	methods: {
		sendLogin() {
			this.color = "blue"
		}
	}
}

</script>

<template>
	<h1 v-if="color === 'red'">"The page's color is {{ color }}</h1>
	<h1 v-else>The page's color is {{ color }}</h1>
	<p>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email address"
      />
    </p>
    <p>
      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
      />
    </p>
</template>

<style>

</style>
