import CONFIGS from 'appConfig';
import ajax from 'helpers/ajaxHelper';
// eslint-disable-next-line import/no-cycle
import { generateRandomString, getCodeChallenge } from './helper';

export default {
  loginUser: (email, encryptedPassword, loginChallenge) => {
    const requestBody = {
      email,
      password: encryptedPassword,
      login_challenge: loginChallenge,
    };
    return ajax.post(`idp/v1/login/password`, requestBody);
  },

  loginConsentInitiate: (url) => {
    return ajax.get(url);
  },

  loginConsentAccept: (consentChallenge) => {
    const url = `/idp/v1/consent?consent_challenge=${consentChallenge}`;
    return ajax.get(url);
  },

  loginConsentCallback: (url) => {
    return ajax.get(url);
  },

  loginExchangeToken: (loginCode, loginVerifier) => {
    return ajax.post('idp/v1/token/exchange', {
      code: loginCode,
      redirect_uri: CONFIGS.OAUTH.REDIRECT_URI,
      client_id: CONFIGS.OAUTH.CLIENT_ID,
      code_verifier: loginVerifier,
    });
  },

  async fetchLoginChallenge(code) {
    const codeChallenge = await getCodeChallenge(code);
    // eslint-disable-next-line compat/compat
    const url = new URL(CONFIGS.OAUTH.URL);

    url.pathname = `${url.pathname}oauth2/auth`;
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('client_id', CONFIGS.OAUTH.CLIENT_ID);
    url.searchParams.set('state', generateRandomString());
    url.searchParams.set('scope', 'openid');
    url.searchParams.set('redirect_uri', CONFIGS.OAUTH.REDIRECT_URI);
    url.searchParams.set('code_challenge', codeChallenge);
    url.searchParams.set('code_challenge_method', 'S256');

    return ajax.get(url.href);
  },
};
