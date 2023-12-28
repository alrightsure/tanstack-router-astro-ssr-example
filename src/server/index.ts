import { initTRPC } from "@trpc/server";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
    test: t.procedure.query(() => {
        return "Hello World";
    })
});

// export type definition of API
export type AppRouter = typeof appRouter;
