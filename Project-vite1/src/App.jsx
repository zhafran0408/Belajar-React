/** @format */

import Navbar from "./components/Navbar";
import Profil from "./components/Profil";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { Detail, Footer } from "./components/Footer";

const profiles = [
  {
    name: "Altaf",
    job: "Santri",
  },
  {
    name: "Zhafran",
    job: "Frontend Developer",
  },
  {
    name: "Fawwaz",
    job: "UI Designer",
  },
];

// App adalah komponen utama
export default function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      {profiles.map((profile, index) => (
        <Profil key={index} name={profile.name} job={profile.job} />
      ))}

      <Hero />

      <main className='py-8'>
        <Card />
      </main>

      <Detail />
      <Footer />
    </div>
  );
}
