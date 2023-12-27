import { Router } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
    return new Router({
        routeTree
    });
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
