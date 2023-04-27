import { createRouter, createWebHistory } from 'vue-router';
// import store from '../store'

const router = createRouter({
	// method to create a router instance
	// creates a history object that uses the HTML5 history API to manipulate the browser's URL without triggering a page refresh -> switching between routes
	history: createWebHistory(process.env.BASE_URL),
	// specifying the "lazyload" routes
	routes: [
		{
			path: "/",
			component: () => import("../views/ThoughtsOverview.vue"),
			meta: {
				title: 'Overview'
			}
		},
		{
			path: "/thought",
			component: () => import("../views/ThoughtPage.vue"),
			meta: {
				title: 'Thought'
			}
		},
		{
			path: "/signup",
			component: () => import("../views/Signup.vue"),
			meta: {
				title: 'Signup'
			}
		},
		{
			path: "/login",
			component: () => import("../views/Login.vue"),
			meta: {
				title: 'Login'
			}
		},
		{
			path: "/profile",
			component: () => import("../views/Profile.vue"),
			meta: {
				title: 'Profile'
			}
		},

	]
})

export default router;