import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimoni from "./pages/Testimoni";
import FAQ from "./pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimoni",
        element: <Testimoni />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
