import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="p-4 bg-amber-50 rounded-full text-amber-500 mb-4">
        <AlertTriangle className="w-16 h-16" />
      </div>
      
      <h1 className="text-6xl font-extrabold text-slate-900 mb-2">404</h1>
      <h2 className="text-xl font-bold text-slate-800 mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-slate-600 max-w-sm mb-6">
        Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition shadow-sm"
      >
        <Home className="w-4 h-4" />
        Kembali ke Beranda
      </Link>
    </div>
  );
}