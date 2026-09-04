/** @format */

import { useState } from "react";
import Profil from "./Profil";

function Home() {
  const [profil, setProfil] = useState({
    nama: "Fulan",
  });

  return (
    <>
      <h1>Home</h1>

      <input
        type='text'
        value={profil.nama}
        onChange={(e) => setProfil({ ...profil, nama: e.target.value })}
      />

      <Profil profil={profil} />
    </>
  );
}

export default Home;
