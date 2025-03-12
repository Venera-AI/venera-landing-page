const lintStagedConfig = {
  "*.{js,ts,jsx,tsx}": "eslint --cache --fix",
  "*.{js,ts,jsx,tsx,css,md}": "prettier --write",
};

export default lintStagedConfig;
