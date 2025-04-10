import { Suspense, use } from "react";

type Album = {
  userId: number;
  id: number;
  title: string;
};
//http://localhost:8080/albums

// async await 5 seconds delay

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const albumsPromise = fetch("http://localhost:8080/albums", {
  cache: "no-store",
  method: "GET",
})
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  })
  .then((data) => {
    return data;
  });

function AlbumsList() {
  const albumbs = use(albumsPromise) as Album[];
  return (
    <>
      {albumbs.map(({ id, title }) => (
        <article key={id} className="post-card">
          <h2>{title}</h2>
        </article>
      ))}
    </>
  );
}

export function Albums() {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading albums...</div>}>
          <AlbumsList />
        </Suspense>
      </div>
    </div>
  );
}
