import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettierPlugin from "eslint-plugin-prettier";

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
            prettier: prettierPlugin
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
