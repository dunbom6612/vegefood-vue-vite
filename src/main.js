import { createApp } from 'vue';

import App from './App.vue';

import $ from 'jquery/dist/jquery';

window.jQuery = window.$ = $;

import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper';
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App).use(router).use(VueAxios, axios);

// app.use(createPinia())
// app.use(router)
app.mount('#app');
