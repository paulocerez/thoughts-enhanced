<template>
	<!-- Main Wrapper -->
	<div class="fixed w-full left-0 top-0 z-50 2xl:px-80 md:px-4 bg-black">
		<Disclosure as="nav" class="black" v-slot="{ open }">
			<div class="h-20 flex items-center justify-between mx-4">
				<!-- Mobile menu button-->
				<div class="disclosure-wrapper">

					<DisclosureButton
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
						<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
					</DisclosureButton>
				</div>

				<div>
					<img class="h-8 w-auto lg:hidden" src="../assets/thoughts_logo.png" alt="Thoughts" />
					<img class="hidden h-12 w-auto lg:flex" src="../assets/thoughts_logo.png" alt="Thoughts" />
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center sm:items-stretch sm:justify-evenly">
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex ml:space-x-24 sm:space-x-auto justify-evenly">

							<!-- Navbar Elements with Routes -->
							<div>
								<router-link v-for="item in navigationItems" :key="item.name" :to="item.link"
									:class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:underline hover:text-white', 'rounded-md bg-black-900 px-6 py-3 text-sm font-medium']"
									:aria-current="item.current ? 'page' : undefined">
									{{ item.name }}
								</router-link>
								<!-- <div v-if="!item.existing">
						<Badge/>
					</div> -->
								<!-- link to GitHub Repo -->
								<a href="https://github.com/paulocerez/thoughts-enhanced.git"
									class="rounded-md hover:underline px-6 py-3 text-sm font-medium'">view on GitHub</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<SignInButton />
				</div>
			</div>

			<!-- Mobile Menu panel -->
			<DisclosurePanel>

				<div class="space-y-1 px-2 pb-3 pt-2">
					<DisclosureButton class="md:hidden">
						<router-link v-for="item in navigationItems" :key="item.name" as="router-link" :to="item.link"
							:class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-l font-medium']"
							:aria-current="item.current ? 'page' : undefined">{{ item.name }}
						</router-link>
					</DisclosureButton>
				</div>
			</DisclosurePanel>
		</Disclosure>
	</div>
</template>
  
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import SignInButton from './SignInButton.vue'


const navigationItems = [
	{ name: 'leave a thought', link: '/thought', current: false, existing: true },
	{ name: 'history', link: '/history', current: false, existing: true },
	{ name: 'friends area', link: '/friendsarea', current: false, existing: false },
	{ name: 'about us', link: '/aboutus', current: false, existing: false },
	{ name: 'your profile', link: '/profile', current: false, existing: true }
]
</script>
<style>
.disclosure-wrapper {
	width: 5.222rem;
	/* same width as SignInButton */
}
</style>