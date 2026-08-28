import React from "react";
import { Link } from "react-router-dom";
import { santriData } from "../Data/santriData";

export default function Dashboard() {
  const totalSantri = santriData ? santriData.length : 0;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-neutral-900 tracking-tight">
          Ringkasan Sistem
        </h1>
        <p className="text-sm text-neutral-500 mt-0.5">
          Panel kontrol data santri terdaftar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Total Terdata
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-3xl font-bold text-neutral-900">{totalSantri}</span>
            <span className="text-xs text-neutral-500">Santri</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm md:col-span-2 flex flex-col justify-between">
          <div>
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Akses Cepat
            </span>
            <p className="text-sm text-neutral-700 font-medium mt-1">
              Direktori Santri
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Buka daftar utama untuk melihat atau memfilter data santri secara detail.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-100">
            <Link
              to="/santri"
              className="inline-block text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Buka Direktori Santri &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}