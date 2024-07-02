module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:markdown/recommended'
  ],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: 0,
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-use-before-define': 0,
    'no-useless-escape': 0,
    'no-unneeded-ternary': 'error',
    'spaced-comment': ['error', 'always', { exceptions: ['-'] }],
    'import/no-cycle': 0,
    curly: ['off'],
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0
  },
  globals: {
    window: true,
    document: true,
    indexedDB: true,
    localStorage: true,
    sessionStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  }
};
