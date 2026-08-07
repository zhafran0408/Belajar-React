/** @format */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { Detail, Footer } from "./components/Footer";

// App adalah komponen utama
export default function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <Hero />
      <main className='py-8'>
        <Card />
      </main>
      <Detail />
      <Footer />
    </div>
  );
}
