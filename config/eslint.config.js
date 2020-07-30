module.exports = {
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/all', 'plugin:jsx-control-statements/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['import', 'compat', 'react-hooks', 'jest', 'module-resolver', 'jsx-control-statements'],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': 0,

    'compat/compat': 'warn',
    'module-resolver/use-alias': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-props-no-spreading': 0,
    'react/no-multi-comp': 1,

    'jest/prefer-expect-assertions': 0,
    'jest/lowercase-name': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/no-hooks': 0,
    'jest/no-truthy-falsy': 0,
    'jest/no-disabled-tests': 0,

    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@testing-library/react',
            message: "Please import from 'tests/utils' instead",
          },
          {
            name: '@testing-library/dom',
            message: "Please import from 'tests/utils' instead",
          },
          {
            name: 'react-dom/test-utils',
            importNames: ['act'],
            message: "Please import 'act' from 'tests/utils' instead"
          }
        ],
      },
    ],
    'import/no-unresolved': [2, { ignore: ['appConfig'] }],

    'no-console': 'error'
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    'import/ignore': ['tests/utils'],
    polyfills: ['Promise', 'Object.assign', 'Object.values', 'Number.isNaN'],
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'react/no-multi-comp': 0,
      },
    },
  ],
  globals: {
    "__DEV__": true,
  },
};
