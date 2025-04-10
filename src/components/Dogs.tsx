import { use, Suspense } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchUsers = async () => {
  return new Promise((resolve) => setTimeout(resolve, 5000)).then(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  });
};

const userPromise = fetchUsers();

const Users = () => {
  const users = use(userPromise);

  return (
    <ul>
      {users.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </ul>
  );
};

function Dogs() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <p>dogs / posts</p>
      <Users />
    </Suspense>
  );
}

export default Dogs;
