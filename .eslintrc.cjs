module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        bracketSameLine: false,
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: true,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        useTabs: false,
        embeddedLanguageFormatting: 'auto',
      },
    ],
    // 未使用的变量、函数、导入等只警告不报错
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    // 允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
