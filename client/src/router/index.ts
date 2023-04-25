import { createRouter, createWebHistory } from 'vue-router';
// import store from '../store'

const router = createRouter({
	// method to create a router instance
	// creates a history object that uses the HTML5 history API to manipulate the browser's URL without triggering a page refresh
	history: createWebHistory(),
	// specifying the routes
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
			path: "/thought",
			component: () => import("../views/ThoughtPage.vue"),
			meta: {
				title: 'Thought'
			}
		},

	]
})

export default router;