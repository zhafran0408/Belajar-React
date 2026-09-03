import { createContext, useState } from "react";

export const ProfilContext = createContext();

export function ProfilProvider({ children }) {
  const [profil, setProfil] = useState({
    nama: "Fulan",
  });

  return (
    <ProfilContext.Provider value={{ profil, setProfil }}>
      {children}
    </ProfilContext.Provider>
  );
}