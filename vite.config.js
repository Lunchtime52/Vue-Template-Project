import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

export default defineConfig(({ mode }) => {
  return {
    base: "/Vue-Template-Project/",
    plugins: [
      vue(),
      Components({
        resolvers: [BootstrapVueNextResolver({ prefix: "B" })],
      }),
    ],
  };
});
