import { Suspense, use } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  })
  .then((data) => {
    return new Promise<Post[]>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 5000);
    });
  });

function PostsList() {
  const posts = use(postsPromise) as Post[];

  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
}

export function Posts() {
  return (
    <div style={{ width: "50%" }}>
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
