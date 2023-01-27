import { createApp } from 'vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.mount('#app')
app.use(Toast);