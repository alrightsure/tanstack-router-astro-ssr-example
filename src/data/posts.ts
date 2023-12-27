export type PostType = {
    id: string;
    title: string;
    body: string;
};

export const fetchPosts = async () => {
    await new Promise(r => setTimeout(r, 500));
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(d => d.json() as Promise<PostType[]>)
        .then(d => d.slice(0, 10));
};
