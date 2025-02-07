import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.tsx', '**/*.ts', '**/*.js'],
    plugins: { prettier },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      semi: "error",
      "@typescript-eslint/no-require-imports": "off",
    }
  }
];
