/** @format */

import { useState } from "react";

function LoginForm() {
  const [showExplanation, setShowExplanation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const password = formData.get("password");

    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className='mt-5'>
      <h2 className='mb-3 text-xl font-bold'>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Username</label>
          <br />

          <input type='text' name='username' className='border p-1' />
        </div>

        <div className='mb-3'>
          <label>Password</label>
          <br />

          <input type='password' name='password' className='border p-1' />
        </div>

        <button
          type='submit'
          className='rounded bg-blue-500 px-3 py-1 text-white'>
          Login
        </button>
      </form>

      <button
        onClick={() => setShowExplanation(!showExplanation)}
        className='mt-4 rounded bg-gray-300 px-3 py-1'>
        {showExplanation ? "Tutup Penjelasan" : "Penjelasan"}
      </button>

      {showExplanation && (
        <div className='mt-3 rounded border bg-white p-3'>
          <p>Form ini menggunakan FormData untuk mengambil data dari form.</p>

          <p className='mt-2'>
            Ketika tombol Login ditekan, handleSubmit dijalankan.
          </p>

          <p className='mt-2'>
            preventDefault digunakan supaya halaman tidak refresh.
          </p>

          <p className='mt-2'>
            FormData mengambil semua data dari form, kemudian get("username")
            dan get("password") digunakan untuk mengambil nilainya.
          </p>

          <p className='mt-2'>
            Hasil akhirnya ditampilkan menggunakan console.log().
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
