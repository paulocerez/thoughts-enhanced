import { createRouter, createWebHistory } from "vue-router";
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
        title: "Thoughts",
      },
    },
    {
      path: "/thought",
      component: () => import("../views/CreateThought.vue"),
      meta: {
        title: "Create Thought",
        requiresAuth: true,
      },
    },
    {
      path: "/history",
      component: () => import("../views/ThoughtHistory.vue"),
      meta: {
        title: "History",
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "/signup",
      component: () => import("../views/Signup.vue"),
      meta: {
        title: "Signup",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem("token");

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
