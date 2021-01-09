import { globalTracer } from 'opentracing';
import isEmpty from 'lodash.isempty';
import CONFIGS from 'appConfig';

import AdditionalTagProvider from './additionalTagProvider';

const SAMPLED = Boolean(CONFIGS?.TRACING?.SAMPLED);

export default class GolaTrace {
  #instance;

  #flowName = '';

  #headers;

  #tags = {};

  #additionalTags = {};

  constructor(flowName) {
    this.#flowName = flowName;
    this.#instance = null;
    this.#headers = null;
    this.#additionalTags = new AdditionalTagProvider().all();
  }

  addTag(key, value) {
    this.#tags[key] = value;
  }

  start = (parentSpan = null) => {
    this.#instance = globalTracer().startSpan(this.#flowName, { childOf: parentSpan });
    this.#instance.setTag('EVENT', this.#flowName);
    Object.keys(this.#tags).forEach((key) => this.#instance.setTag(key, this.#tags[key]));
    Object.keys(this.#additionalTags).forEach((key) => this.#instance.setTag(key, this.#additionalTags[key]));
  };

  current = () => {
    return this.#instance;
  };

  headers = () => {
    if (this.#headers !== null && !isEmpty(this.#headers)) {
      return this.#headers;
    }
    const newHeaders = {};
    if (this.#instance != null) {
      const spanContext = this.#instance.id;
      if (spanContext !== undefined && spanContext !== null) {
        newHeaders['x-b3-traceid'] = spanContext.traceId;
        newHeaders['x-b3-spanid'] = spanContext.spanId;
        newHeaders['x-b3-sampled'] = SAMPLED ? 1 : 0;
      }
    }

    this.#headers = newHeaders;
    return newHeaders;
  };

  end = () => {
    if (this.#instance !== null) {
      this.#instance.finish();
      this.#headers = {};
      this.#instance = null;
      this.#tags = {};
    }
  };

  isEnded = () => {
    return this.#instance === null;
  };
}
