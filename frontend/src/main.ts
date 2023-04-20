// new application instance -> build step, createApp API
import { createApp } from 'vue'
// import the root component App from a single-file component -> contains other components as its children
import App from './App.vue'
const app = createApp(App)

import './style.css'
// imports index.ts automatically without specification like router/index
import router from './router'
app.use(router)
// import store from './store'
// app.use(store)
// .mount()-method makes the application instance render -> expects a container element (either DOM element or selector string)
app.mount('#app') // see DOM element in index.html
// -> content of the root component will be rendered inside the container element

