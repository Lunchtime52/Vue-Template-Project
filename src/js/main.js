/** @format */

import { createApp } from "vue";
import App from "../App.vue";
import router from "./router";

import "../assets/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css"; // Still need BootstrapVueNext CSS
import { createBootstrap } from "bootstrap-vue-next";
// import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

const app = createApp(App);

app.use(router);
app.use(createBootstrap());
app.mount("#app");
