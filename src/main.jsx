import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/Hackathon2", element: <App />, errorElement: <ErrorPage /> },
  { path: "/Hackathon2/:name", element: <App /> },
  { path: "/Hackathon2/home/:name", element: <App /> },
  { path: "/Hackathon2/community/:name", element: <App /> },
  { path: "/Hackathon2/bodyOfWaterInfo/:name", element: <App /> },
  { path: "/Hackathon2/speciesInfo/:name", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
