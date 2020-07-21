module.exports = {
  defaultSeverity: "error",
  plugins: [
    "stylelint-prettier",
  ],
  processors: "stylelint-processor-styled-components",
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-rational-order"
  ],
  rules: {
    "declaration-no-important" : true,
    "prettier/prettier": true,
  }
};
