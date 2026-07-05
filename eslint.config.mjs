// @ts-check
import prettierConfig from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import withNuxt from './.nuxt/eslint.config.mjs';

const ignores = [
  'node_modules/**',
  '.next/**',
  'out/**',
  'build/**',
  'scripts/**',
  'tests/**',
  '.output/**',
  '.nuxt/**',
  '.data/**',
  'old/**',
  'docs/**',
  '**/*.md',
];

export default withNuxt([
  {
    ignores,
  },
  {
    rules: {
      'no-console': 'error',
      'vue/html-self-closing': 'off',
    },
  },
  perfectionist.configs['recommended-alphabetical'],
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  prettierConfig,
]);
