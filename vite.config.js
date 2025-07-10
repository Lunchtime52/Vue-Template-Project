import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import packageJson from "./package.json" assert { type: "json" };

export default defineConfig(({ mode }) => {
  // Access the baseUrl from packageJson.projectInfo
  const base = packageJson.projectInfo?.baseUrl || "/";
  const projectName =
    packageJson.projectInfo?.projectName || "Default Project Name";
  return {
    // transformIndexHtml: (html) => {
    //   console.log("transformIndexHtml hook is running!");
    //   console.log("Input HTML:", html);
    //   console.log("Project Name:", projectName);

    //   // Replace the title tag content with the projectName
    //   return html.replace(
    //     /<title>(.*?)<\/title>/,
    //     `<title>${projectName}</title>`
    //   );
    // },
    base: base,
    plugins: [
      vue()
    ],
  };
});
