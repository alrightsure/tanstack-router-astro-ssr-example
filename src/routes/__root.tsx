import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { DehydrateRouter } from "@tanstack/react-router-server/client";

export const Route = rootRouteWithContext()({
    component: RootComponent
});

function RootComponent() {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite App</title>
                <script
                    type="module"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: `
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            `
                    }}
                />
                <script type="module" src="/@vite/client" />
                <script type="module" src="/src/entry-client.tsx" />
            </head>
            <body>
                <div className="p-2 flex gap-2 text-lg">
                    <Link
                        to="/"
                        activeProps={{
                            className: "font-bold"
                        }}
                        activeOptions={{ exact: true }}
                    >
                        Home
                    </Link>{" "}
                    <Link
                        to="/post"
                        activeProps={{
                            className: "font-bold"
                        }}
                        activeOptions={{ exact: true }}
                    >
                        Post
                    </Link>{" "}
                </div>
                <hr />
                <Outlet /> {/* Start rendering router matches */}
                <TanStackRouterDevtools position="bottom-right" />
                <DehydrateRouter />
            </body>
        </html>
    );
}
