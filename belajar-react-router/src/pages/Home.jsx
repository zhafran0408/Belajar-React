import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
        Selamat Datang di Portal Belajar!
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        Ini adalah halaman utama dari aplikasi React Router dan Tailwind CSS v4 milikmu.
      </p>
      
      <div className="flex justify-center gap-4">
        <Link
          to="/profile"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-md"
        >
          Lihat Profil Saya
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 bg-slate-200 text-slate-800 font-semibold rounded-xl hover:bg-slate-300 transition"
        >
          Tentang Aplikasi
        </Link>
      </div>
    </div>
  );
}