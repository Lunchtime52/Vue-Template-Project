const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const projectInfo = packageJson.projectInfo || {};

const projectName = projectInfo.projectName || 'Default Project Name';
const businessName = projectInfo.businessName || 'Default Business Name';
const baseUrl = projectInfo.baseUrl || '/';

const configContent = `
// This file is generated during the build process
export const PROJECT_NAME = '${projectName}';
export const BUSINESS_NAME = '${businessName}';
export const BASE_URL = '${baseUrl}';
// Add other variables from packageJson.projectInfo as needed
`;

const configFilePath = path.resolve(__dirname, '../src/config/index.js');

fs.writeFileSync(configFilePath, configContent.trim());

console.log('Generated src/config/index.js');