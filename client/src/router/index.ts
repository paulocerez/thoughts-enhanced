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
			component: () => import("../views/Sample.vue"),
			meta: {
				title: 'Thoughts'
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
			path: "/history",
			component: () => import("../views/ThoughtHistory.vue"),
			meta: {
				title: 'History'
			}
		},
		{
			path: "/friendsarea",
			component: () => import("../views/FriendsArea.vue"),
			meta: {
				title: 'Friends area'
			}
		},
		{
			path: "/overview",
			component: () => import("../views/ThoughtOverview.vue"),
			meta: {
				title: 'Overview'
			}
		},
		{
			path: "/aboutus",
			component: () => import("../views/AboutUs.vue"),
			meta: {
				title: 'About us'
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
			path: "/signup",
			component: () => import("../views/Signup.vue"),
			meta: {
				title: 'Signup'
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