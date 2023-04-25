<script setup lang="ts">
import './style.css'
import MainHeader from './components/MainHeader.vue';
import Navbar from './components/Navbar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const signOut = async () => {
  router.push('/');
}


</script>

<template>
  <MainHeader />
  <router-view/>
</template>

<style scoped>

</style>
