import ajax from 'helpers/ajaxHelper';
import GolaTrace from './golaTrace';

export default class GolaTraceInjector {
  #golaTrace;

  #context;

  #ajaxInterceptor;

  constructor(flowName) {
    this.#golaTrace = new GolaTrace(flowName);
    this.#context = this.#golaTrace.current();
  }

  onRequest = (request) => {
    if (!request.headers?.['x-b3-traceid']) {
      request.headers = { ...request.headers, ...this.#golaTrace.headers() };
    }
    return request;
  };

  start = () => {
    this.#golaTrace.start();
    this.#ajaxInterceptor = ajax.interceptors.request.use(this.onRequest, () => {});
  };

  end = () => {
    ajax.interceptors.request.eject(this.#ajaxInterceptor);
    this.#golaTrace.end();
  };

  current = () => {
    return this.#context;
  };
}
