<script lang="ts">
import './style.css';
import Nav from './components/Nav.vue';

export default {
	components: { Nav },
}
</script>

<template>
	<Nav />
	<div class="bg-transparent w-full h-full lg:py-16 lg:px-32">
		<router-view />
	</div>
</template>