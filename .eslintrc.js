module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 0,
    'func-names': 0,
    'max-classes-per-file': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'prefer-const': 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 'error',
    'no-useless-constructor': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
