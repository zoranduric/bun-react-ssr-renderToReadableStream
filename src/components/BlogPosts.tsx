import { Suspense, use } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postsPromise = fetch("http://localhost:8080/posts", {
  cache: "no-store",
})
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  })
  .then((data) => {
    return data as Post[];
  });

function PostsList() {
  const posts = use(postsPromise);

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
