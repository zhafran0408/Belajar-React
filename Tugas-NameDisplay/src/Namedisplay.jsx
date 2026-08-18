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
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="mx-auto mt-20 max-w-md bg-white p-7 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Name Display
        </h1>

        <p className="mt-2 text-gray-500">
          Masukkan nama kamu di bawah ini.
        </p>

        <div className="mt-6">
          <label
            htmlFor="nama"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Nama
          </label>

          <input
            id="nama"
            ref={inputRef}
            type="text"
            placeholder="Masukkan nama..."
            className="w-full border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />

          <button
            onClick={tampilkanNama}
            className="mt-3 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Tampilkan Nama
          </button>
        </div>

        <div className="mt-7 border-t border-gray-200 pt-5">
          <p className="text-sm text-gray-500">Nama yang dimasukkan:</p>

          <h2 className="mt-1 text-xl font-bold text-gray-800">
            {nama || "-"}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default NameDisplay;
