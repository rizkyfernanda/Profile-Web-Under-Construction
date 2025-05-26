import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import '/src/assets/profile.css'

import $ from 'jquery'
window.$ = window.jQuery = $

createApp(App).mount('#app')
