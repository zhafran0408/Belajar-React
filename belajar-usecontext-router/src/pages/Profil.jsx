/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfilContext } from "../Test/ProfilContext";

function Profil() {
  const { profil } = useContext(ProfilContext);

  return (
    <section>
      <h2>Profile</h2>

      <p>Nama: {profil.nama}</p>
      <p>Kelas: {profil.kelas}</p>

      <Link to='/profil/detail'>Lihat Profile Detail</Link>
    </section>
  );
}

export default Profil;
