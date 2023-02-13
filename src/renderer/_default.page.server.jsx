import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import "./index.css";

// Example of `pageContext` often passed to the browser
const passToClient = ["pageProps"];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);

  const title = "Capital Coast";

  return escapeInject`<!DOCTYPE html>
    <html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
export { render };
export { passToClient };
