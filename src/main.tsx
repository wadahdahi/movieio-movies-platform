import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";

import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage.tsx";
import { SeriesPage } from "./pages/SeriesPage/SeriesPage.tsx";
import { AnimePage } from "./pages/AnimePage/AnimePage.tsx";
import { LatestMoviesPage } from "./pages/LatestMoviesPage/LatestMoviesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/series", element: <SeriesPage /> },
      { path: "/anime", element: <AnimePage /> },
      { path: "/added-recently", element: <LatestMoviesPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
