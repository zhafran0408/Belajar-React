/** @format */

import { createBrowserRouter, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import DaftarSantri from "./pages/DaftarSantri";
import DetailSantri from "./pages/DetailSantri";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "santri",
        element: <DaftarSantri />,
      },

      {
        path: "santri/:id",
        element: <DetailSantri />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
