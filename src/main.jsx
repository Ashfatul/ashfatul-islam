import React from "react";
import "../src/index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./utility/Router";
import AuthProvider from "./utility/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
);
