// new application instance -> passing in the root component as an object
import { createApp } from 'vue'
// import the root component App from a single-file component -> contains other components as its children
import App from './App.vue'
// .mount()-method makes the application instance render -> expects a container element (either DOM element or selector string)
createApp(App).mount('#app') // see DOM element in index.html

// -> content of the root component will be rendered inside the container element

import './style.css'

