/** @format */

import { useState, createContext } from "react";
import Navbar from "./TugasUseContext/Navbar";
import Profile from "./TugasUseContext/Profile";

export const NamaContext = createContext();

function AppUseContext() {
  const [nama, setNama] = useState("Ali");

  return (
    <NamaContext.Provider value={nama}>
      <Navbar />
      <Profile />
    </NamaContext.Provider>
  );
}

export default AppUseContext;
