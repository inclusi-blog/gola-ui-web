/* eslint-disable class-methods-use-this */

import Span from './Span';
import { sendTrace } from './helpers';

export default class Tracer {
  #queue = [];

  #sendSpanCallback = this.sendSpan.bind(this);

  #finishCallback = this.finishSpan.bind(this);

  #config = {};

  constructor(config) {
    this.#config = config;
    setInterval(this.#sendSpanCallback, config.interval);
  }

  startSpan(name) {
    return new Span(name, this.#finishCallback);
  }

  finishSpan(spanContext) {
    this.#queue.push(spanContext);
  }

  async sendSpan() {
    if (this.#queue.length) {
      const tempQueue = this.#queue;
      this.#queue = [];
      try {
        await sendTrace(this.#config, tempQueue);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error while sending trace to collector', error);
        // this.#queue.push(...tempQueue);
      }
    }
  }
}
