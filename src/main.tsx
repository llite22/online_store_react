import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import App from "./app/App.tsx";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/index.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallback={
          <div className="flex w-full justify-center items-center h-[100vh]">
            <MoonLoader color={"#36d7b7"} loading={true} size={70} />
          </div>
        }
      >
        <App />
      </ErrorBoundary>
    </QueryClientProvider>
  </BrowserRouter>
);
