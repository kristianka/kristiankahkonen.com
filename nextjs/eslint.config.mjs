import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettierPlugin from "eslint-plugin-prettier";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

const eslintConfig = defineConfig([
    ...nextVitals,
    globalIgnores([
        "node_modules/**",
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        // Ignore shadcn files
        "src/components/ui/"
    ]),
    {
        plugins: {
            prettier: prettierPlugin,
            "@typescript-eslint": tseslintPlugin
        },
        languageOptions: {
            parser: tseslintParser
        },
        rules: {
            "prettier/prettier": [
                "error",
                {
                    singleQuote: false,
                    semi: true,
                    tabWidth: 4,
                    useTabs: false,
                    endOfLine: "auto",
                    trailingComma: "none",
                    printWidth: 100
                }
            ]
        }
    }
]);

export default eslintConfig;
