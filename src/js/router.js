import { createWebHistory, createRouter } from "vue-router";

const base = "/";
const routes = [
  { path: "/", component: () => import("/src/pages/Home.vue"), name: "Home" },
  {
    path: "/contact",
    component: () => import("/src/pages/Contact.vue"),
    name: "Contact",
  },
  //   { path: "/services", component: () => import("./pages/Services.vue") },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("/src/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
