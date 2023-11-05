// eslint-disable-next-line no-var, no-unused-vars
var environmentConfiguration = {
  API_BASE_URL: 'http://localhost:3000',
  ENVIRONMENT: 'LOCAL',
  OAUTH: {
    URL: 'http://localhost:3000/',
    CLIENT_ID: 'ui-web-client',
    REDIRECT_URI: 'https://api.narratenet.com/api/idp/v1/login/accept',
  },
  DEV_MODE: true,
  TRACING: {
    URL: 'http://localhost:3000/api/tracing/span',
    SERVICE_NAME: 'local-ui-web',
    HTTP_INTERVAL_MS: 3000,
    API_KEY: 'secret',
    SAMPLED: true,
  },
  PASSWORD_ENC_PUBLIC_KEY:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8i/3CDBa0ka2n/iA76wN1VmcK\n' +
    'zJTRad+BwGr6WFUpQKxhExN6tvXC2We2Ks9THP1LG+L9SXFCCO2uMKfyBt1We5EE\n' +
    'AHIujjV4TsHKPvvhPFVgc0dhZkLGCwGUMVuNhA3euvWDOFdHWnYJ4+WPHtmBXXHr\n' +
    'zX4qYNsIPD8dw6/PrwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
};
