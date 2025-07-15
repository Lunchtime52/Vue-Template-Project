import fs from "fs";
import path from "path";
import packageJson from "../package.json" assert { type: "json" };

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectInfo = packageJson.projectInfo || {};

const projectName = projectInfo.projectName || "Default Project Name";
const businessName = projectInfo.businessName || "Default Business Name";
const baseUrl = projectInfo.baseUrl || "/";

const configContent = `
// This file is generated during the build process
export const PROJECT_NAME = '${projectName}';
export const BUSINESS_NAME = '${businessName}';
export const baseUrl = '${baseUrl}';
export default{
  PROJECT_NAME:PROJECT_NAME,
  BUSINESS_NAME:BUSINESS_NAME,
  baseUrl:baseUrl,
};
// Add other variables from packageJson.projectInfo as needed
`;

const configDir = path.resolve(__dirname, "../src/config");
const configFilePath = path.join(configDir, "index.js");

// Create the config directory if it doesn't exist
if (!fs.existsSync(configDir)) {
	fs.mkdirSync(configDir, { recursive: true });
}

fs.writeFileSync(configFilePath, configContent.trim());

console.log("Generated src/config/index.js");
