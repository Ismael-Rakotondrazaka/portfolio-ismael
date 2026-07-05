export default defineNitroPlugin(nitroApp => {
  // Generate requestId before middleware runs so it's available immediately.
  // The request-context middleware reuses it via ??= instead of generating a new one.
  nitroApp.hooks.hook('request', event => {
    event.context.requestId ??= crypto.randomUUID();
    logger.debug(
      {
        event: 'http.request.received',
        method: event.method,
        path: event.path,
        requestId: event.context.requestId,
      },
      'Request received'
    );
  });

  nitroApp.hooks.hook('afterResponse', (event, _context) => {
    const status = event.node.res.statusCode;
    if (status >= 500) {
      logger.error(
        {
          event: 'http.response.error',
          method: event.method,
          path: event.path,
          requestId: event.context.requestId,
          status,
        },
        'Response error'
      );
    } else {
      logger.debug(
        {
          event: 'http.response.sent',
          method: event.method,
          path: event.path,
          requestId: event.context.requestId,
          status,
        },
        'Response sent'
      );
    }
  });

  nitroApp.hooks.hook('error', (error, context) => {
    const event = context.event;
    logger.error(
      {
        err: error instanceof Error ? error : new Error(String(error)),
        event: 'http.request.error',
        method: event?.method,
        path: event?.path,
        requestId: event?.context.requestId,
      },
      'Request error'
    );
  });
});
