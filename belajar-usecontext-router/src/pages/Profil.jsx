import ProfilDetail from "./ProfilDetail";

function Profil({ profil }) {
  return (
    <>
      <h1>Profile</h1>

      <p>Nama: {profil.nama}</p>

      <ProfilDetail profil={profil} />
    </>
  );
}

export default Profil;
