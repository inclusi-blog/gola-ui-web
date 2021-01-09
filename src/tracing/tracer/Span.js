/* eslint-disable class-methods-use-this */
import { uniqueId, getTimeStamp } from './helpers';

export default class Span {
  #name = '';

  #id = '';

  #traceId = '';

  #duration = '';

  #startTime = '';

  #callBackOnFinish;

  #tags = {};

  #logs = [];

  constructor(name, callBackOnFinish) {
    this.#name = name;
    const uID = uniqueId();
    this.#id = uID;
    this.#traceId = uID; // check what zipkin doing with this when there is parent provided
    this.#startTime = Date.now();
    this.#callBackOnFinish = callBackOnFinish;
  }

  setTag(key, value) {
    this.#tags[key] = value;
  }

  log(logString) {
    this.#logs.push({
      timestamp: getTimeStamp(),
      value: logString,
    });
  }

  get id() {
    return {
      traceId: this.#traceId,
      spanId: this.#id,
    };
  }

  finish() {
    this.#duration = Date.now() - this.#startTime;
    this.#callBackOnFinish({
      name: this.#name,
      duration: this.#duration,
      timestamp: Number(`${this.#startTime}000`),
      traceId: this.#traceId,
      id: this.#id,
      tags: this.#tags,
      annotations: this.#logs,
    });
  }
}
