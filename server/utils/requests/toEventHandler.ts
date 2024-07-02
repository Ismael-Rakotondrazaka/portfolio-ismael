import { type EventHandler } from "h3";
import { type Request } from "~/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ToEventHandler<R extends Request<any, any, any, any>> =
  EventHandler<
    {
      body: R["input"]["body"];
      query: R["input"]["query"];
      routerParams: R["input"]["params"];
    },
    R["output"]
  >;
