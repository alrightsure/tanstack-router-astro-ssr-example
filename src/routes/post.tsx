import { FileRoute } from "@tanstack/react-router";
import { trpcAstro } from "../lib/trpc-client";

export const Route = new FileRoute('/post').createRoute({
    loader: async () => {
        return await trpcAstro.test.query();
    },
    component: Posts
});

function Posts() {
    const posts = Route.useLoaderData();

    return (
        <div className="p-2">
            <h3>Posts</h3>
            <p>{posts.toString()}</p>
        </div>
    );
}