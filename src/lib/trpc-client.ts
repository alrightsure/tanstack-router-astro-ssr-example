import fetchPonyfill from "fetch-ponyfill";
import { createTRPCReact } from "@trpc/react-query";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpcReact = createTRPCReact<AppRouter>();

const trpcAstro = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:4321/api/trpc",
        })
    ]
});

export { trpcReact, trpcAstro };
