/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const CLIENT = 'CLIENT';
export const uniqueId = () => {
  // copied from https://github.com/DanielMSchmidt/zipkin-javascript-opentracing/blob/master/src/index.js
  // === Generate a random 64-bit number in fixed-length hex format. COPIED from zipkik library
  const digits = '0123456789abcdef';
  let n = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 16; i++) {
    const rand = Math.floor(Math.random() * 16);
    n += digits[rand];
  }
  return n;
};

export const getTimeStamp = () => {
  return Number(`${Date.now()}000`);
};

const createTracingRequestBody = (config, queue) => {
  return queue.map((span) => {
    return {
      kind: CLIENT,
      localEndpoint: { serviceName: config.serviceName },
      ...span,
    };
  });
};

export const sendTrace = (config, queue) => {
  const requestBody = createTracingRequestBody(config, queue);
  return axios.post(config.url, requestBody, {
    headers: {
      'tracing-api-key': config.tracingAPIKey,
      Referer: config.url,
    },
  });
};
