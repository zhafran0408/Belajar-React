/** @format */

import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Card from "./components/Card";

export default function App() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Navbar />
      <Category />
      <Card />
    </div>
  );
}
