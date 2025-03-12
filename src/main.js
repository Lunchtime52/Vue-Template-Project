import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import our custom CSS
import './scss/styles.scss' 
// Import Bootstrap's bundle (JS + Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createApp(App)
.use(router)
.mount('#app');
