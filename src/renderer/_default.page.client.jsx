import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
let root;
async function render(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext;
  const page = <Page {...pageProps} urlPathname={urlPathname} />;
  const container = document.getElementById("app");

  root = ReactDOM.hydrateRoot(container, page);
}
export { render };
