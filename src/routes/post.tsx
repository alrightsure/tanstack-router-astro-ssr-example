import { FileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../data/posts";

export const Route = new FileRoute('/post').createRoute({
    loader: async () => {
        return await fetchPosts();
    },
    component: Posts
});

function Posts() {
    const posts = Route.useLoaderData();

    return (
        <div className="p-2">
            <h3>Posts</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}