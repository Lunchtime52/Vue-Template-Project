import { createWebHistory, createRouter } from "vue-router";

const base = "/";
const routes = [
  { path: "/", component: () => import("./pages/Home.vue") ,name:"Home" },
  { path: "/contact", component: () => import("./pages/Contact.vue"),name:"Contact" },
//   { path: "/services", component: () => import("./pages/Services.vue") },
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;