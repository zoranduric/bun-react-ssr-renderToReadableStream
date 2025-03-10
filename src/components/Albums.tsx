import { Suspense, use } from "react";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const albumsPromise = fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  })
  .then((data) => {
    return new Promise<Album[]>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
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

export function Albumbs() {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading posts...</div>}>
          <AlbumsList />
        </Suspense>
      </div>
    </div>
  );
}
