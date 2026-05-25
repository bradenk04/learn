import js from "@eslint/js";
import ts from "typescript-eslint";
import solid from "eslint-plugin-solid";
import eslintConfigPrettier from "eslint-config-prettier";

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: {
            solid,
        },
        rules: {
            ...solid.configs.recommended.rules,
        },
    },
    {
        ignores: [".output/", ".vinxi/", "dist/", "node_modules/"],
    },
    eslintConfigPrettier
);