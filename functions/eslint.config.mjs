import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const eslintConfig = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.dev.json"],
        tsconfigRootDir: import.meta.dirname, // or import.meta.dirname for ESM
      },
    },
    ignores: ["/lib/**/*", "/generated/**/*"],
    plugins: {
      import: eslintPluginImport,
      '@typescript-eslint': eslintPluginTS,
    },
    rules: {
      ...eslintPluginImport.configs.errors.rules,
      ...eslintPluginImport.configs.warnings.rules,
      ...eslintPluginImport.configs.typescript.rules,
      ...eslintPluginTS.configs.recommended.rules,
      quotes: ["error", "double"],
      "import/no-unresolved": "off",
      indent: ["error", 2],
    },
  },
];

export default eslintConfig;
