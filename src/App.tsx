import { Suspense } from "react";
import { Posts } from "./components/BlogPosts";
import { Albums } from "./components/Albums";
import Dogs from "./components/Dogs";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>My app</title>
      </head>
      <body>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            scelerisque libero, vulputate dapibus purus. Sed egestas luctus
            ligula sit amet ultrices. Praesent diam eros, laoreet eu sapien sit
            amet, semper volutpat libero. Phasellus mi sapien, tincidunt ornare
            quam vel, scelerisque tempus nisl. Proin et porttitor sem, sit amet
            rhoncus risus. Sed in velit id purus ultrices finibus ut nec urna.
            Aenean augue ipsum, scelerisque mollis tempor at, tempus a justo.
            Vestibulum laoreet eleifend feugiat. Aenean id dapibus ex, vitae
            vestibulum nunc. Cras mauris tortor, efficitur eget dolor quis,
            accumsan vehicula erat. In mattis, ipsum vitae condimentum
            tincidunt, nulla lacus maximus tellus, id vestibulum orci ligula a
            nisl. Quisque bibendum nisi a neque lobortis, eu fringilla mi
            vulputate. Nullam in ultrices diam. Maecenas pharetra tincidunt
            lobortis.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Posts />
        </div>
      </body>
    </html>
  );
}
