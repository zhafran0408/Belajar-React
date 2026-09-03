import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfilContext } from "../Test/ProfilContext";

function Navbar() {
  const { profil } = useContext(ProfilContext);

  return (
    <nav>
      <h2>Belajar React</h2>

      <p>Halo, {profil.name}</p>

      <Link to="/">Home</Link> |{" "}
      <Link to="/profil">Profile</Link>
    </nav>
  );
}

export default Navbar;