<template>
	<div class="fixed top-0 left-0 w-full z-50">
	<Disclosure as="nav" class="black" v-slot="{ open }">
	  <div class="w-full px-2 sm:px-16 lg:px-48">
		<div class="relative flex h-20 items-center justify-evenly">
		  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
			<!-- Mobile menu button-->
			<DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
			  <span class="sr-only">Open main menu</span>
			  <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
			  <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
			</DisclosureButton>
		  </div>

		  <!-- Navbar elements excl. Profile-->

		  <div class="flex flex-shrink-0 items-center">
			<img class="block h-8 w-auto lg:hidden" src="../assets/thoughts_logo.png" alt="Thoughts" />
			<img class="hidden h-12 w-auto lg:block" src="../assets/thoughts_logo.png" alt="Thoughts" />
		  </div>
		  <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-evenly">
			<div class="hidden sm:ml-6 sm:block">
			  <div class="flex space-x-24 justify-evenly">
				<router-link v-for="item in navigationItems" :key="item.name" :to="item.link" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-sky-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
				<a href="https://github.com/paulocerez/thoughts-enhanced.git" class="rounded-md hover:underline px-3 py-2 text-sm font-medium'">view on GitHub</a>
			  </div>
			</div>
		  </div>
		  <Button/>


		</div>
	  </div>
  
	  <DisclosurePanel class="sm:hidden">
		<div class="space-y-1 px-2 pb-3 pt-2">
		  <DisclosureButton v-for="item in navigationItems" :key="item.name" as="router-link" :to="item.link" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-xl font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
		</div>
	  </DisclosurePanel>
	</Disclosure>
</div>
</template>
  
<script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import Button from './Button.vue'
  
  const navigationItems = [
	{ name: 'leave a thought', link: '/thought', current: false },
	{ name: 'history', link: '/history', current: false },
	{ name: 'friends area', link: '/friendsarea', current: false },
	{ name: 'about us', link: '/about', current: false },
	{ name: 'your profile', link: '/profile', current: false }
  ]
</script>
