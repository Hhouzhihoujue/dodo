module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
  },
};
