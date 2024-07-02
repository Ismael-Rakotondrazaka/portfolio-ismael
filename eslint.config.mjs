// @ts-check
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    ignores: [
      // # ignore generate imports
      "auto-imports.d.ts",
      "components.d.ts",
      "nuxt.d.ts",
      // # nuxt and other artefacts
      ".nuxt",
      ".output",
      "node_modules",
      "dist",
      "public",
      "presets",
      // prisma generated
      "prisma/generated",
    ],
    rules: {
      "no-console": [
        "error",
        {
          allow: [
            "info",
            "warn",
            "trace",
            "error",
            "group",
            "groupEnd",
            "time",
            "timeEnd",
          ],
        },
      ],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "semi-style": ["error", "last"],
      "semi-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "comma-dangle": [
        "error",
        {
          arrays: "only-multiline",
          objects: "only-multiline",
          imports: "only-multiline",
          exports: "only-multiline",
          functions: "only-multiline",
        },
      ],
      indent: ["error", 2],
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
        },
      ],
      curly: ["error", "multi-line"],
      "vue/v-on-event-hyphenation": [
        "error",
        "always",
        {
          autofix: true,
        },
      ],
      "import/no-named-as-default-member": "off",
      "@typescript-eslint/no-extraneous-class": "off",
    },
  },
  eslintPluginPrettierRecommended,
]);
