module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort',
    'react-refresh',
    'unicorn',
    'folders',
  ],
  settings: {
    react: {
      version: 'detect',
    },
 
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', '.prettierrc.cjs', '/src/Mocks'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'folders/match-regex': [2, '^[A-Z][a-z]+(?:[A-Z][a-z]+)*$', '/src/'],
   
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
        },
        ignore: ['index.tsx', '\\.ts$', '\\.test.tsx$', 'main.tsx'],
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'no-restricted-exports': 'off',
    'no-unused-vars': 'off',
    'react/button-has-type': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // increase the severity of rules so they are auto-fixable
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` and `react-dom` come first.
          ['react', 'react-dom'],
          // Packages `react` related packages.
          ['^react-', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Internal packages.
          ['@lingotune'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
}
