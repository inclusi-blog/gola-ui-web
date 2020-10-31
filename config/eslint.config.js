const OFF = 0;
const ERROR = 2;
const WARN = 1;

module.exports = {
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/all', 'plugin:jsx-control-statements/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['import', 'compat', 'react-hooks', 'jest', 'module-resolver', 'jsx-control-statements'],
  rules: {
    semi: [ERROR, 'always'],
    'comma-dangle': OFF,

    'compat/compat': WARN,
    'module-resolver/use-alias': [ERROR, { ignoreDepth: WARN }],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/jsx-no-undef': [ERROR, { allowGlobals: true }],
    'react/jsx-props-no-spreading': OFF,
    'react/no-multi-comp': WARN,
    'react/forbid-prop-types': WARN,

    'jest/prefer-expect-assertions': OFF,
    'jest/lowercase-name': OFF,
    'jest/prefer-inline-snapshots': OFF,
    'jest/no-hooks': OFF,
    'jest/no-truthy-falsy': OFF,
    'jest/no-disabled-tests': OFF,

    'no-restricted-imports': [
      ERROR,
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
    'import/no-unresolved': [ERROR, { ignore: ['appConfig'] }],

    'no-console': 'error'
  },
  parser: '@babel/eslint-parser',
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
        'react/no-multi-comp': OFF,
        'react/prop-types': OFF
      },
    },
  ],
  globals: {
    "__DEV__": true,
  },
};
