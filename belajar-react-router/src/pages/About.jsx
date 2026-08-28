import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Tentang Project</h1>
        <p className="text-slate-600 leading-relaxed mb-6">
          Project ini dibuat untuk mempelajari dasar-dasar **React Router v6** dan pengolahan *styling* modern menggunakan **Tailwind CSS v4**. 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 bg-indigo-50 rounded-xl">
            <h3 className="font-semibold text-indigo-900 mb-1">⚡ Vite & React</h3>
            <p className="text-sm text-indigo-700">Performa build yang cepat dan lingkungan pengembang modern.</p>
          </div>
          <div className="p-4 bg-sky-50 rounded-xl">
            <h3 className="font-semibold text-sky-900 mb-1">🎨 Tailwind CSS v4</h3>
            <p className="text-sm text-sky-700">Styling berbasis utility class tanpa kerumitan CSS manual.</p>
          </div>
        </div>
      </div>
    </div>
  );
}