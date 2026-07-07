// Infrastructural/static paths that don't carry debugging signal (asset
// requests, generated image variants, well-known probes) — mirrors the
// standard practice of excluding health checks/static assets from access logs.
const NOISY_PATH_PREFIXES = [
  '/_ipx/',
  '/_nuxt/',
  '/.well-known/',
  '/_payload.json',
];
const NOISY_PATHS = new Set(['/favicon.ico', '/robots.txt']);

function isNoisyPath(path: string): boolean {
  return (
    NOISY_PATHS.has(path) ||
    NOISY_PATH_PREFIXES.some(prefix => path.startsWith(prefix))
  );
}

export default defineNitroPlugin(nitroApp => {
  // Generate requestId before middleware runs so it's available immediately.
  // The request-context middleware reuses it via ??= instead of generating a new one.
  nitroApp.hooks.hook('request', event => {
    event.context.requestId ??= crypto.randomUUID();
    if (isNoisyPath(event.path)) return;
    logger.debug(
      {
        event: 'http.request.received',
        method: event.method,
        path: event.path,
        requestId: event.context.requestId,
      },
      'http.request.received'
    );
  });

  // Skip logging a 500 here if the 'error' hook already logged it with the
  // actual Error object — a 500 can also be set without ever throwing
  // (e.g. setResponseStatus/sendError), so this only avoids that overlap case.
  nitroApp.hooks.hook('afterResponse', (event, _context) => {
    const status = event.node.res.statusCode;
    if (status >= 500) {
      if (!event.context.errorLogged) {
        logger.error(
          {
            event: 'http.response.error',
            method: event.method,
            path: event.path,
            requestId: event.context.requestId,
            status,
          },
          'http.response.error'
        );
      }
    } else if (!isNoisyPath(event.path)) {
      logger.debug(
        {
          event: 'http.response.sent',
          method: event.method,
          path: event.path,
          requestId: event.context.requestId,
          status,
        },
        'http.response.sent'
      );
    }
  });

  nitroApp.hooks.hook('error', (error, context) => {
    const event = context.event;
    const normalizedError =
      error instanceof Error ? error : new Error(String(error));
    if (event) {
      event.context.errorLogged = true;
    }
    logger.error(
      {
        err: normalizedError,
        event: 'http.request.error',
        method: event?.method,
        path: event?.path,
        requestId: event?.context.requestId,
      },
      `http.request.error: ${normalizedError.message}`
    );
  });
});
