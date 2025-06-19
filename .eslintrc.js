module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'max-len': [1, { code: 180 }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/display-name': 'off',
    quotes: [1, 'single', { allowTemplateLiterals: true }],
    semi: [1, 'always'],
    'comma-dangle': ['error', 'never'],
    indent: [1, 2],
    'no-throw-literal': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
