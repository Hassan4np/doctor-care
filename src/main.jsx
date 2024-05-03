import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProdiver from "./components/AuthProvider/AuthProdiver";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div >
    <QueryClientProvider client={queryClient}>
      <AuthProdiver>
        <RouterProvider router={router} />
      </AuthProdiver>
    </QueryClientProvider>
    </div>
  </React.StrictMode>
);
