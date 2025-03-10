import { renderToReadableStream } from "react-dom/server";
import App from "./src/App";

const port = process.env.PORT || 3000;

console.log(
  `Launching Bun HTTP server on port: ${port}, url: http://localhost:${port} 🚀`
);

Bun.serve({
  port,
  routes: {
    "/": async () => {
      const stream = await renderToReadableStream(<App />, {
        bootstrapScripts: ["/main.js"],
        onError(error) {
          console.error("Error during rendering:", error);
        },
      });
      const [stream1, stream2] = stream.tee();

      return new Response(stream1, {
        headers: {
          "Content-Type": "text/html",
          "Transfer-Encoding": "chunked",
        },
      });
    },

    "/main.js": async () => {
      const buildOutput = await Bun.build({
        entrypoints: ["./main.js"],
        minify: process.env.NODE_ENV === "production",
      });
      return new Response(await buildOutput.outputs[0].text(), {
        headers: {
          "Content-Type": "text/javascript",
        },
      });
    },
  },

  error(error) {
    console.error("Server error:", error);
    return new Response(`Server error: ${error.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  },
});
