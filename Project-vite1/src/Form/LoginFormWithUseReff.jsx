/** @format */

import { useRef, useState } from "react";

function LoginFormWithUseReff() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [showExplanation, setShowExplanation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className='mt-5'>
      <h2 className='mb-3 text-xl font-bold'>Login Form With useRef</h2>

      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Username</label>
          <br />

          <input
            type='text'
            name='username'
            ref={usernameRef}
            className='border p-1'
          />
        </div>

        <div className='mb-3'>
          <label>Password</label>
          <br />

          <input
            type='password'
            name='password'
            ref={passwordRef}
            className='border p-1'
          />
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
          <p>
            Form ini menggunakan useRef untuk mendapatkan nilai langsung dari
            input.
          </p>

          <p className='mt-2'>
            usernameRef terhubung dengan input username menggunakan
            ref=usernameRef.
          </p>

          <p className='mt-2'>
            passwordRef juga terhubung dengan input password.
          </p>

          <p className='mt-2'>
            Saat Login ditekan, kita mengambil nilai menggunakan:
          </p>

          <code>usernameRef.current.value</code>

          <p className='mt-2'>
            useRef tidak menyebabkan component melakukan render ulang ketika
            nilainya berubah.
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginFormWithUseReff;
