import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
let root;
async function render(pageContext) {
  const { Page, pageProps } = pageContext;

  const page = <Page {...pageProps} />;

  const container = document.getElementById("app");

  root = ReactDOM.hydrateRoot(container, page);
}
export { render };
