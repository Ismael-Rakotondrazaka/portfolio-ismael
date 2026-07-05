import { AsyncLocalStorage } from 'node:async_hooks';

export interface RequestContext {
  method?: string;
  path?: string;
  requestId: string;
}

export const requestContextStorage = new AsyncLocalStorage<RequestContext>();

export function getRequestContext(): RequestContext | undefined {
  return requestContextStorage.getStore();
}
