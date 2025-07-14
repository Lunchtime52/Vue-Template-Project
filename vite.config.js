import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";
import { bootstrapPlugin } from "bootstrap-vue-next";

// Import package.json directly for use in vite.config.js
import packageJson from "./package.json" assert { type: "json" };

export default defineConfig(({ mode }) => {
	// Access the baseUrl from packageJson.projectInfo
	const base = packageJson.projectInfo?.baseUrl || "/";
	const projectName =
		packageJson.projectInfo?.projectName || "Default Project Name";
	return {
		base: base,
		plugins: [
			vue(),
			bootstrapPlugin,
			Components({
				resolvers: [BootstrapVueNextResolver({ prefix: "B" })],
			}),
			// Define your custom plugin here
			{
				// Give your plugin a name
				name: "html-title-updater",
				transformIndexHtml: (html) => {
					console.log("Project Name:", projectName);
					return html.replace(
						/<title>(.*?)<\/title>/,
						`<title>${projectName}</title>`
					);
				},
			},
		],
	};
});
