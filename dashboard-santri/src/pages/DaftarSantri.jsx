import React from "react";
import { Link } from "react-router-dom";
import { santriData } from "../Data/santriData";

export default function DaftarSantri() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-neutral-900 tracking-tight">
            Daftar Santri
          </h1>
          <p className="text-sm text-neutral-500 mt-0.5">
            Menampilkan seluruh data santri aktif.
          </p>
        </div>
        <span className="text-xs font-medium text-neutral-500 bg-neutral-200/60 px-2.5 py-1 rounded-full">
          {santriData.length} Orang
        </span>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <tr>
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Nama</th>
              <th className="px-5 py-3">Kelas</th>
              <th className="px-5 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {santriData.map((santri) => (
              <tr key={santri.id} className="hover:bg-neutral-50/80 transition-colors">
                <td className="px-5 py-3.5 font-mono text-xs text-neutral-400">
                  #{santri.id}
                </td>
                <td className="px-5 py-3.5 font-medium text-neutral-900">
                  {santri.nama}
                </td>
                <td className="px-5 py-3.5 text-neutral-600">
                  {santri.kelas}
                </td>
                <td className="px-5 py-3.5 text-right">
                  <Link
                    to={`/santri/${santri.id}`}
                    className="inline-block px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium rounded transition-colors"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
