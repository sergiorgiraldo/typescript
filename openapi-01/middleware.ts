import {
    FetchParams,
    Middleware,
    ResponseContext,
  } from './HttpClient';
  
  export class ApiMiddleware implements Middleware {
    public async pre(context: ResponseContext): Promise<FetchParams | void> {
      return {
        url: context.url,
        init: {
          ...context.init,
          headers: new Headers({
            ...context.init.headers
          }),
        },
      };
    }
  
    public post(context: ResponseContext): Promise<Response | void> {
      return Promise.resolve(context.response);
    }
  }