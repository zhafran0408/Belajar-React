import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import ProfilDetail from "./pages/ProfilDetail";

import { ProfilContext } from "./pages/ProfilContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/profil/detail",
    element: <ProfilDetail />,
  },
]);

function App() {
  const profil = {
    nama: "Fulan",
  };

  return (
    <ProfilContext.Provider value={{ profil }}>
      <RouterProvider router={router} />
    </ProfilContext.Provider>
  );
}

export default App;
