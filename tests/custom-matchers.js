import toHaveStyleRule from 'jest-styled-components/src/toHaveStyleRule';

expect.extend({
  toHaveStyleRules(received, rules = {}, modifier) {
    let response;

    Object.entries(rules).every(([styleProperty, styleValue]) => {
      response = toHaveStyleRule.call(this, received, styleProperty, styleValue, modifier);

      return response.pass;
    });

    return response;
  },
});
