import isPromise from 'is-promise';
import GolaTraceInjector from './golaTraceInjector';

const doTrace = (name, callback, ...callbackArgs) => {
  const trace = new GolaTraceInjector(name);
  trace.start();
  const context = trace.current();
  let result;
  try {
    result = callback(...callbackArgs);
  } catch (err) {
    trace.end();
    throw err;
  }
  if (!isPromise(result)) {
    trace.end();
    return { response: result, spanContext: context };
  }

  return result
    .then((response) => {
      trace.end();
      return { response, spanContext: context };
    })
    .catch((err) => {
      trace.end();
      throw err;
    });
};

export default { doTrace };
