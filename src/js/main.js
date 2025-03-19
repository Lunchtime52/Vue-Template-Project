import { createApp } from "vue";
import App from "../App.vue";
import router from "./router";
import { createBootstrap } from "bootstrap-vue-next";

import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "/src/scss/styles.scss";

const app = createApp(App);

app.use(router);
app.use(createBootstrap());
app.mount("#app");
