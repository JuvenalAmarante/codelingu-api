module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-console': 'off',
    'function-paren-newline': 'off',
  },
};
