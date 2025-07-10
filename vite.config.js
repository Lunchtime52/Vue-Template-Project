import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

// Import package.json directly for use in vite.config.js
import packageJson from './package.json' assert { type: 'json' };

export default defineConfig(({ mode }) => {
  // Access the baseUrl from packageJson.projectInfo
  const base = packageJson.projectInfo?.baseUrl || "/";
  return {
    base: base,
    plugins: [
      vue(),
      Components({
        resolvers: [BootstrapVueNextResolver({ prefix: "B" })],
      }),
    ],
  };
});
