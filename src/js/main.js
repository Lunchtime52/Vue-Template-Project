import { createApp } from "vue";
import App from "../App.vue";
import router from "./router";

import myLibrary from "vue-components";
import config from "../config";

import "../assets/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.css";
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";


const app = createApp(App);
app.provide("config", config);
app.use(myLibrary);
app.use(router);

app.use(createBootstrap());
app.mount("#app");
