<script setup lang="ts">
import './style.css';
// import Navbar from './components/Navbar.vue'
import Nav from './components/Nav.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const signOut = async () => {
  router.push('/');
}


</script>

<template>
	<Nav/>
	<div class="bg-transparent w-full h-full py-16 px-32">
      <RouterView />
    </div>
</template>

<style scoped>

</style>
