import config from 'mikey-pro';

export default [
  ...config,
  {
    ignores: ['**/*.css'],
  },
  {
    files: ['**/*.{js,ts}'],
    linterOptions: {
      noInlineConfig: false,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      complexity: 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-relative-parent-imports': 'off',
      'import-x/order': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'require-unicode-regexp': 'off',
      'security/detect-object-injection': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'unicorn/consistent-function-scoping': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'prettier/prettier': ['warn', { parser: 'typescript' }],
    },
  },
];
