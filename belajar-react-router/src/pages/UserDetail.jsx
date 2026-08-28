import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Briefcase, Loader2, AlertCircle } from 'lucide-react';

const USERS_DATA = {
  Zhafran: {
    nama: 'Zhafran Atha Razin Hadiny',
    role: 'Frontend Engineer',
    email: 'zhafran@example.com',
    bio: 'Fokus mendalami React Router v6 dan animasi UI.',
  },
  Calya: {
    nama: 'Calya Salsabilla Putri',
    role: 'UI/UX Designer',
    email: 'csputri@example.com',
    bio: 'Suka membuat mockup antarmuka yang bersih dan responsif.',
  },
  ali: {
    nama: 'Ali Bin Abi',
    role: 'Backend Developer',
    email: 'ali@example.com',
    bio: 'Menyukai arsitektur database dan RESTful API.',
  },
};

export default function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const foundUser = USERS_DATA[id?.toLowerCase()];
      setUser(foundUser || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-indigo-600 gap-2">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p className="text-sm font-medium text-slate-600">Memuat data user...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto p-4 py-12 text-center">
        <div className="p-3 bg-red-100 text-red-600 rounded-full w-fit mx-auto mb-3">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">User Tidak Ditemukan</h2>
        <p className="text-slate-500 text-sm mt-1 mb-6">
          Tidak ada data untuk ID: <span className="font-mono font-bold text-slate-700">{id}</span>
        </p>
        <Link to="/profil" className="text-indigo-600 font-medium hover:underline text-sm">
          ← Kembali ke Profil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 py-12">
      <Link 
        to="/profil" 
        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Profil
      </Link>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
            {user.nama.charAt(0)}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{user.nama}</h1>
            <p className="text-sm text-indigo-600 flex items-center gap-1 font-medium">
              <Briefcase className="w-3.5 h-3.5" />
              {user.role}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {user.bio}
        </p>

        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
          <Mail className="w-4 h-4 text-slate-400" />
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}