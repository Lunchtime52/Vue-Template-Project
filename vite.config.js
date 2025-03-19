import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

export default defineConfig(({ mode }) => {
  return {
    base: "/vue-template/",
    plugins: [
      vue(),
      Components({
        resolvers: [BootstrapVueNextResolver({ prefix: "B" })],
      }),
    ],
  };
});
