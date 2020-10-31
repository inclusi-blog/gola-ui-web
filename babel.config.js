module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'import-glob',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    "@babel/plugin-proposal-optional-chaining",
    'jsx-control-statements',
    'react-hot-loader/babel',
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    ['babel-plugin-styled-components', { ssr: false, displayName: true }],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src/'],
        alias: {
          // alias folders should come here
          // l10n: './src/l10n',
          "common-components": "./src/common-components",
          "context-providers": "./src/context-providers",
          "global-styles": "./src/GlobalStyles",
          "assets" : "./src/assets"
        },
      },
    ],
    'dev-expression',
  ],
  env: {
    test: {
      plugins: [
        ["babel-plugin-styled-components", { ssr: false, displayName: false }]
      ],
    },
    production: {
      plugins: ["transform-remove-console", "transform-react-remove-prop-types"],
    },
  },
};
