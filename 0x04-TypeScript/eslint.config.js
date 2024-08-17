export default [
    {
      files: ['src/**/*.{js,ts,tsx}'],
      languageOptions: {
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: './tsconfig.json',
          sourceType: 'module',
        },
      },
      plugins: {
        '@typescript-eslint': '@typescript-eslint/eslint-plugin',
        prettier: 'eslint-plugin-prettier',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ];