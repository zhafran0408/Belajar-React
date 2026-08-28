/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className='max-w-md mx-auto px-6 py-16 text-center'>
      <p className='text-xs font-mono font-semibold text-neutral-400 uppercase tracking-widest'>
        404
      </p>
      <h1 className='text-lg font-bold text-neutral-900 mt-1 mb-2'>
        Halaman Tidak Ditemukan
      </h1>
      <p className='text-xs text-neutral-500 mb-6'>
        Alamat yang dibuka tidak terdaftar di sistem.
      </p>
      <Link
        to='/'
        className='inline-block px-4 py-2 bg-neutral-900 text-white text-xs font-medium rounded hover:bg-neutral-800 transition-colors'>
        Kembali ke Dashboard
      </Link>
    </div>
  );
}
