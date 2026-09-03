import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Profil from "./pages/Profil";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

import Example from "./learn-Use-Context/Example";
import Profile from "./learn-Use-Context/Profile";
import ProfileDetail from "./learn-Use-Context/ProfileDetail";
import Tentang from "./learn-Use-Context/Tentang";
import AboutContext from "./learn-Use-Context/AboutContext";
import Contact from "./learn-Use-Context/Contact";
import Testimoni from "./learn-Use-Context/Testimoni";

import { UserProvider } from "./learn-Use-Context/Context";

function Layout() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />

        <div className="flex pt-18">
          <Sidebar />

          <main className="min-w-0 flex-1">
            <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-5 py-8 sm:px-7 lg:px-10">
              <Outlet />
            </div>

            <Footer />
          </main>
        </div>
      </div>
    </UserProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
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
        path: "profil",
        element: <Profil />,
      },
      {
        path: "profil/:id",
        element: <UserDetail />,
      },
      {
        path: "context",
        element: <Tentang />,
      },
      {
        path: "context/example",
        element: <Example />,
      },
      {
        path: "context/profile",
        element: <Profile />,
      },
      {
        path: "context/profile/:id",
        element: <ProfileDetail />,
      },
      {
        path: "context/about",
        element: <AboutContext />,
      },
      {
        path: "context/contact",
        element: <Contact />,
      },
      {
        path: "context/testimoni",
        element: <Testimoni />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
