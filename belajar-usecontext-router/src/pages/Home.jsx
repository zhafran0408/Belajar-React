/** @format */

import Navbar from "../components/Navbar";
import { ProfilProvider } from "../Test/ProfilContext";
import Profil from "./Profil";

function Home() {
  return (
    <>
      <Navbar />

      <hr />
      <h1>HOME</h1>
      <p>Welcome to page home</p>

      <Profil/>
    </>
  );
}
export default Home;
