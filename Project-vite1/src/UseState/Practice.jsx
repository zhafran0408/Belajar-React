/** @format */

import React, { useState } from "react";

function Practice() {
  const [number, setNumber] = useState(0);

  function tambah(angka) {
    setNumber(number + angka);
    console.log(number + angka);
  }

  return (
    <div className='text-center font-bold p-12'>
      <h2 className="">Practice</h2>

      <h3>{number}</h3>

      <button
        onClick={() => tambah(1)}
        className=' mr-2 h-12 w-12 rounded-full bg-blue-600 text-white'>
        +1
      </button>

      <button
        onClick={() => tambah(2)}
        className='mr-2 h-12 w-12 rounded-full bg-blue-600 text-white'>
        +2
      </button>
      <button
        onClick={() => tambah(3)}
        className='mr-2 h-12 w-12 rounded-full bg-blue-600 text-white'>
        +3
      </button>
      <button
        onClick={() => tambah(-1)}
        className=' h-12 w-12 rounded-full bg-red-600 text-white'>
        -1
      </button>
    </div>
  );
}

export default Practice;
