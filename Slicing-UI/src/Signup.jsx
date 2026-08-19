/** @format */

import { useState } from "react";
import { FaApple, FaGoogle, FaFacebookF } from "react-icons/fa";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-80 bg-white p-6 rounded-lg shadow'>
        <h2 className='text-xl font-bold text-center mb-1'>Sign Up</h2>
        <p className='text-center text-gray-500 text-sm mb-6'>Hi! Welcome</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Username</label>
            <input
              type='text'
              placeholder='Enter Your Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full border-b border-gray-300 py-1 text-sm outline-none'
            />
            <p className='text-sm text-gray-600 mt-1'>{username}</p>
          </div>

          <div className='mb-6'>
            <label className='block text-sm font-medium mb-1'>Password</label>
            <input
              type='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border-b border-gray-300 py-1 text-sm outline-none'
            />
            <p className='text-sm text-gray-600 mt-1'>{password}</p>
          </div>

          <button
            type='submit'
            className='w-full bg-black text-white py-2 rounded-full text-sm font-medium'>
            Sign Up
          </button>
        </form>

        <div className='flex items-center my-6'>
          <div className='flex-1 border-t border-gray-300'></div>
          <span className='px-3 text-xs text-gray-400'>Or sign in with</span>
          <div className='flex-1 border-t border-gray-300'></div>
        </div>

        <div className='flex justify-center gap-4'>
          <button
            type='button'
            className='w-10 h-10 rounded-full border-gray-300 bg-black flex items-center justify-center  text-white'>
            <FaApple size={18} />
          </button>
          <button
            type='button'
            className='w-10 h-10 rounded-full border border-gray-300  bg-black flex items-center justify-center text-white'>
            <FaGoogle size={16} />
          </button>
          <button
            type='button'
            className='w-10 h-10 rounded-full border border-gray-300 flex bg-black items-center justify-center text-white'>
            <FaFacebookF size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
