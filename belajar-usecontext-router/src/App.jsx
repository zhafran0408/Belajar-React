import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import ProfilDetail from "./pages/ProfilDetail";

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
  return <RouterProvider router={router} />;
}

export default App;
