import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, MapPin, Briefcase, Award, FolderGit2 } from 'lucide-react';

export default function Profil() {
  return (
    <div className="max-w-xl mx-auto p-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

        {/* Info Profil Utama */}
        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-end -mt-12 mb-4">
            <div className="w-24 h-24 rounded-2xl border-4 border-white bg-indigo-50 flex items-center justify-center shadow-md">
              <User className="w-12 h-12 text-indigo-600" />
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-medium text-xs rounded-full flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Aktif Belajar
            </span>
          </div>

          <h1 className="text-2xl font-bold text-slate-800">Nama Kamu</h1>
          <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm mt-1">
            <Briefcase className="w-4 h-4" />
            <span>Frontend Developer Learner</span>
          </div>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Pengembang web pemula yang fokus mempelajari ekosistem React, React Router v6, dan Tailwind CSS v4.
          </p>

          {/* Detail Kontak & Lokasi */}
          <div className="mt-6 space-y-2 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>emailkamu@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Indonesia</span>
            </div>
          </div>

          {/* Stat Badges */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-slate-800 text-base">1</span>
                <span className="text-xs text-slate-500">Project SPA</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-slate-800 text-base">v4</span>
                <span className="text-xs text-slate-500">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Tombol Navigasi Dynamic Route */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-3 text-center">
              Pilih User (Dynamic Route Test):
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <Link 
                to="/user/ahmad" 
                className="py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 rounded-lg text-xs font-semibold transition text-center"
              >
                Ahmad
              </Link>
              <Link 
                to="/user/armand" 
                className="py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 rounded-lg text-xs font-semibold transition text-center"
              >
                Armand
              </Link>
              <Link 
                to="/user/ali" 
                className="py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 rounded-lg text-xs font-semibold transition text-center"
              >
                Ali
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
