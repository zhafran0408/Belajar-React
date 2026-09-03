import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { ProfilProvider } from "./Test/ProfilContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfilProvider>
      <App />
    </ProfilProvider>
  </StrictMode>
);
