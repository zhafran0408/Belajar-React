import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

import Kesehatan from "@/pages/kesehatan/Kesehatan";

import Admin from "@/pages/admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

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
        path: "kesehatan",
        element: <Kesehatan />,
      },

      {
        path: "admin",
        element: <Admin />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;