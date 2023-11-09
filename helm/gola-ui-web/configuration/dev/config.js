var environmentConfiguration = {
  API_BASE_URL: 'https://api.narratenet.com',
  ENVIRONMENT: 'DEV',
  OAUTH: {
    URL: 'https://api.narratenet.com/',
    CLIENT_ID: '45691d1a-4fc8-49dd-90a3-121860e3efc3',
    REDIRECT_URI: 'https://api.narratenet.com/api/idp/v1/login/accept',
  },
  DEV_MODE: true,
  PASSWORD_ENC_PUBLIC_KEY:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8i/3CDBa0ka2n/iA76wN1VmcK\n' +
    'zJTRad+BwGr6WFUpQKxhExN6tvXC2We2Ks9THP1LG+L9SXFCCO2uMKfyBt1We5EE\n' +
    'AHIujjV4TsHKPvvhPFVgc0dhZkLGCwGUMVuNhA3euvWDOFdHWnYJ4+WPHtmBXXHr\n' +
    'zX4qYNsIPD8dw6/PrwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  TRACING: {
    URL: 'https://app.narratenet.com/api/tracing/span',
    SERVICE_NAME: 'GOLA-UI-WEB',
    HTTP_INTERVAL_MS: 50,
    API_KEY: 'secret'
  },
};
