import React from "react";

export default function About() {
  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6">
        <h1 className="text-lg font-bold text-neutral-900 mb-3">Tentang System</h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Aplikasi pengelolaan data santri berbasis React Router untuk navigasi antarmuka tanpa reload.
        </p>
      </div>
    </div>
  );
}
