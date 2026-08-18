/** @format */

import { useRef, useState } from "react";

function NameDisplay() {
  const inputRef = useRef();

  const [nama, setNama] = useState("");

  const tampilkanNama = () => {
    const namaInput = inputRef.current.value;

    setNama(namaInput);
  };

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold'>Name Display</h1>

      <p>Masukkan nama kamu:</p>

      <input
        ref={inputRef}
        type='text'
        placeholder='Nama'
        className='border p-2'
      />

      <br />

      <button onClick={tampilkanNama} className='mt-2 border px-3 py-1'>
        Tampilkan Nama
      </button>

      <h2 className='mt-5 text-xl'>Nama: {nama}</h2>
    </div>
  );
}

export default NameDisplay;
