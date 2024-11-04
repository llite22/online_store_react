import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import App from "./app/App.tsx";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/index.ts";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<div>...loading</div>}>
    <App />
  </ErrorBoundary>
);
