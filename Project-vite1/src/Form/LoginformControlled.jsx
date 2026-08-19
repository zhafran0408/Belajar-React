/** @format */

import { useState } from "react";

function LoginFormControlled() {
  // 1. Menggabungkan form data ke dalam 1 object state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
  });

  // State untuk toggle tampilan
  const [showPassword, setShowPassword] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // 2. Function handler serbaguna untuk menangani semua perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Mengubah nilai property berdasarkan atribut 'name' dari input
    }));
  };

  return (
    <div className='p-4 border rounded-lg max-w-md bg-white shadow-sm'>
      <h2 className='text-xl font-bold mb-4'>Login Form Controlled</h2>

      {/* INPUT USERNAME */}
      <div className='mb-3'>
        <label className='block text-sm font-medium'>Username</label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Masukkan username'
          className='w-full p-2 border rounded mt-1'
        />
      </div>

      {/* INPUT PASSWORD */}
      <div className='mb-3'>
        <label className='block text-sm font-medium'>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Masukkan password'
          className='w-full p-2 border rounded mt-1'
        />
      </div>

      {/* INPUT PHONE */}
      <div className='mb-3'>
        <label className='block text-sm font-medium'>Nomor Telepon</label>
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Masukkan nomor telepon'
          className='w-full p-2 border rounded mt-1'
        />
      </div>

      {/* BUTTON SHOW/HIDE PASSWORD (Gunakan type="button") */}
      <button
        type='button'
        onClick={() => setShowPassword(!showPassword)}
        className='px-3 py-1 bg-gray-200 rounded text-sm mb-4 hover:bg-gray-300'>
        {showPassword ? "Sembunyikan Password" : "Tampilkan Password"}
      </button>

      {/* LIVE DATA PREVIEW */}
      <div className='p-3 bg-gray-50 border rounded mb-4'>
        <h3 className='font-semibold text-gray-700'>
          Data yang diketik (Real-time):
        </h3>
        <p className='text-sm mt-1'>
          <strong>Username:</strong> {formData.username || "-"}
        </p>
        <p className='text-sm'>
          <strong>Password:</strong> {formData.password || "-"}
        </p>
        <p className='text-sm'>
          <strong>Phone:</strong> {formData.phone || "-"}
        </p>
      </div>

      {/* BUTTON PENJELASAN (Gunakan type="button") */}
      <button
        type='button'
        onClick={() => setShowExplanation(!showExplanation)}
        className='px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700'>
        {showExplanation ? "Tutup Penjelasan" : "Penjelasan"}
      </button>

      {/* ISI PENJELASAN */}
      {showExplanation && (
        <div className='mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm space-y-2 text-blue-900'>
          <h3 className='font-bold text-base mb-1'>
            Cara Kerja Controlled Component:
          </h3>
          <p>
            1. <strong>Single State Object:</strong> Kita menggunakan satu{" "}
            <code>useState</code> berisi objek{" "}
            <code>{`{ username, password, phone }`}</code>.
          </p>
          <p>
            2. <strong>Function handleChange:</strong> Membaca atribut{" "}
            <code>name</code> dan <code>value</code> dari input (menggunakan{" "}
            <code>e.target</code>), lalu memperbarui state secara dinamis.
          </p>
          <p>
            3. <strong>Spread Operator (...):</strong> Digunakan agar saat satu
            input diketik, data input lainnya tidak hilang.
          </p>
          <p>
            4. <strong>Real-time Render:</strong> Setiap kali state berubah,
            React merender ulang komponen sehingga teks langsung muncul di
            layar.
          </p>
          <p>
            5. <strong>type="button":</strong> Mencegah halaman ter-refresh saat
            tombol penjelasan diklik.
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginFormControlled;
