import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['simple-import-sort'],
    ignorePatterns: ['components/ui'],
    overrides: [
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        rules: {
          'simple-import-sort/exports': 'error',
          'simple-import-sort/imports': [
            'error',
            {
              groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']],
            },
          ],
        },
      },
    ],
  }),
];

export default eslintConfig;
