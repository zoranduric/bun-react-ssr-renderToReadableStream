import { Suspense } from "react";
import { Posts } from "./components/BlogPosts";
import { Albumbs } from "./components/Albums";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>My app</title>
      </head>
      <body style={{ display: "flex" }}>
        <Posts />
        <Albumbs />
      </body>
    </html>
  );
}
