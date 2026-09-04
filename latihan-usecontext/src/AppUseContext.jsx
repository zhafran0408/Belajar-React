import { useState, createContext } from "react";

import Navbar from "./TugasUseContext/Navbar";
import Profile from "./TugasUseContext/Profile";

export const NamaContext = createContext();

function AppUseContext() {
  const [nama, setNama] = useState("Fulan");

  return (
    <NamaContext.Provider value={nama}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100">
        <div className="mx-auto max-w-md px-4 pt-5">
          <Navbar />
          <Profile />
        </div>
      </div>
    </NamaContext.Provider>
  );
}

export default AppUseContext;
