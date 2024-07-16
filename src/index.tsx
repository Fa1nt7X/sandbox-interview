import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// await (async () => {
//   await worker.start();
// })();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
