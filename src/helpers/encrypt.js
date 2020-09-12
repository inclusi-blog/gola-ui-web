import JSEncrypt from 'jsencrypt';
import CONFIGS from 'appConfig';

const encrypt = (valueToEncrypt) => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(CONFIGS.PASSWORD_ENC_PUBLIC_KEY);
  return jsEncrypt.encrypt(valueToEncrypt);
};

export default encrypt;
