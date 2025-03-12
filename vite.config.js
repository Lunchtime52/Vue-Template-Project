import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:720028804.

export default defineConfig({
  plugins: [vue(), Components({})],
});




