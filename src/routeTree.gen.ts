import { Route as rootRoute } from "./routes/__root"
import { Route as PostRoute } from "./routes/post"
import { Route as IndexRoute } from "./routes/index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/post": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(PostRoute.options, {
  path: "/post",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([IndexRoute, PostRoute])
