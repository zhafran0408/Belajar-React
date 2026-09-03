import { useContext } from "react";
import { ProfilContext } from "../Test/ProfilContext";

function ProfilDetail() {
  const { profil } = useContext(ProfilContext);

  return (
    <>
      <h1>Name user : {profil.nama}</h1>

      <div>
        Ini adalah Profile
      </div>
    </>
  );
}

export default ProfilDetail;
