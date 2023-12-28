import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIRoute } from "astro";
import { createContext } from "../../../server/context";
import { appRouter } from "../../../server/index";

export const ALL: APIRoute = opts => {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req: opts.request,
        router: appRouter,
        createContext
    });
};
