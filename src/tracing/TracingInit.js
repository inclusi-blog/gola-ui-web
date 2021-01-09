import React, { useEffect, useState } from 'react';
import { Tracer, initGlobalTracer } from 'opentracing';
import CONFIGS from 'appConfig';
import CustomTracer from './tracer';

const TracingInit = () => {
  const [GolaTracer, setGolaTracer] = useState(null);

  useEffect(() => {
    if (GolaTracer !== null) {
      return;
    }
    if (CONFIGS === undefined || CONFIGS.TRACING === undefined) {
      setGolaTracer(new Tracer());
      return;
    }

    const tracingConfig = CONFIGS.TRACING;
    const tracer = new CustomTracer({
      url: tracingConfig.URL,
      serviceName: tracingConfig.SERVICE_NAME,
      interval: tracingConfig.HTTP_INTERVAL_MS,
      tracingAPIKey: tracingConfig.API_KEY,
    });

    initGlobalTracer(tracer);
    setGolaTracer(tracer);
  }, []);

  return <></>;
};

export default TracingInit;
