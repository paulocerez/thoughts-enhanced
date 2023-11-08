// new application instance -> build step, createApp API
import { createApp } from 'vue'
import './style.css'
import axios from 'axios';
import config from '../config'
// set the axios baseURL


// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = config.backendUrl;
console.log(axios.defaults.baseURL)


// import the root component App from a single-file component -> contains other components as its children
import App from './App.vue'
const app = createApp(App)

// import store from './store'
import router from './router'
app.use(router)
// app.use(store)
// .mount()-method makes the application instance render -> expects a container element (either DOM element or selector string)
app.mount('#app') // see DOM element in index.html
// -> content of the root component will be rendered inside the container element