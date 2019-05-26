const path = require('path')

'use strict'

module.exports = {
  parser: 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'module-resolver', 'react-hooks', 'standard', 'import', 'promise', 'unicorn', 'no-loops'],
  env: {
    browser: true,
    'es6': true
  },
  globals: {
    React: false,
    COOKIE_KEYS: false,
    PORT: false,
    getEnvConfig: false
  },
  settings: {
    'import/resolver': {
      "alias": {
        "map": [
          ['@icons', path.resolve(__dirname, './src/app/components/Icons')],
          ['@services', path.resolve(__dirname, './src/app/services')],
          ['@utils', path.resolve(__dirname, './src/app/utils')],
          ['@context', path.resolve(__dirname, './src/app/context')],
          ['@hoc', path.resolve(__dirname, './src/app/hoc')],
          ['@components', path.resolve(__dirname, './src/app/components')],
          ['@constants', path.resolve(__dirname, './src/app/constants')],
          ['@reducers', path.resolve(__dirname, './src/app/reducers')],
          ['@static', path.resolve(__dirname, './src/app/static')],
          ['@mutations', path.resolve(__dirname, './src/app/mutations')],
          ['@theme', path.resolve(__dirname, './src/app/theme')],
          ['@server', path.resolve(__dirname, './src/server')]
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/require-default-props': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-unused-prop-types': 0,
    'react/no-did-mount-set-state': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-one-expression-per-line': [0],
    'no-shadow': ['error', { allow: ['webpackConfig'] }],
    'no-unused-vars': ['error', { vars: 'local' }],
    'no-param-reassign': ['error', { props: true }],
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/first': 'warn',
    'quotes': ['error', 'single'],
    'max-len': [2, 120, 2],
    'semi': [2, 'never'],
    'key-spacing': 0,
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': 0,
    'prefer-rest-params': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': [
      1,
      {
        'allowTaggedTemplates': true,
        'allowShortCircuit': true
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'no-loops/no-loops': 2,
    'unicorn/no-abusive-eslint-disable': ['warn', 'always'],
    'unicorn/filename-case': 0,
    'unicorn/catch-error-name': 0,
    'import/no-extraneous-dependencies': 0,
    'import/first': ['warn'],
    "no-console": "off"
  }
}
