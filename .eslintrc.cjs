module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'spellcheck'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 'spellcheck/spell-checker': [
    //   'warn',
    //   {
    //     minLength: 4,
    //     "strings": false,
    //     skipWords: ['calc', 'radix', 'tailwindcss', 'keyframes', 'vite', 'pathname', 'clsx', 'DropdownMenu'],
    //   },
    // ],
  },
};
