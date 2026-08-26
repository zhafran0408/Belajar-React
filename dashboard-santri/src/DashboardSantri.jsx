/** @format */

import React, { useState, useEffect } from "react";

export default function DashboardSantri() {
  const [nama, setNama] = useState("Ahmad");
  const [angka, setAngka] = useState(0);
  const [status, setStatus] = useState("Belum ada perubahan angka.");

  useEffect(() => {
    console.log("Dashboard Santri berhasil dijalankan");
  }, []);

  useEffect(() => {
    console.log(`Angka sekarang: ${angka}`);

    document.title = `Angka: ${angka}`;

    if (angka !== 0) {
      setStatus("Angka sudah berubah.");
    }
  }, [angka]);

  const handleTambah = () => {
    setAngka((prev) => prev + 1);
  };

  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      <div className='mx-auto max-w-md rounded-lg bg-white p-6 shadow'>
        <h1 className='mb-6 text-center text-xl font-bold'>DASHBOARD SANTRI</h1>

        <div className='mb-5'>
          <label className='mb-2 block font-medium'>Nama Santri :</label>

          <input
            type='text'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className='w-full rounded border p-2 outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-6'>
          <p>
            Halo, <span className='font-semibold'>{nama || "Santri"}</span>
          </p>
        </div>

        <div className='mb-6 text-center'>
          <p className='text-lg'>Angka :</p>

          <h2 className='my-3 text-4xl font-bold'>{angka}</h2>

          <button
            onClick={handleTambah}
            className='rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>
            Tambah
          </button>
        </div>

        <div className='border-t pt-4'>
          <p className='font-semibold'>Status:</p>

          <p className='mt-1'>{status}</p>
        </div>
      </div>
    </div>
  );
}
