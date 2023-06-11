import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Custom.css"
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes/routes";
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
