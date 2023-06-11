import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Custom.css"
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes/routes";
import AuthProvider from "./context/AuthProvider";
import {
  useQueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
  // Access the client
  const queryClient = new useQueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
