import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { santriData } from "../Data/santriData";

export default function DetailSantri() {
  const { id } = useParams();
  const navigate = useNavigate();

  const santri = santriData.find((item) => item.id == id);

  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <button
        onClick={() => navigate("/santri")}
        className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-6 inline-flex items-center gap-1"
      >
        &larr; Kembali ke daftar
      </button>

      <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-100">
          Informasi Santri
        </h2>

        {santri ? (
          <dl className="divide-y divide-neutral-100 text-sm">
            <div className="py-2.5 flex justify-between">
              <dt className="text-neutral-500">ID Santri</dt>
              <dd className="font-mono text-neutral-900">#{santri.id}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-neutral-500">Nama Lengkap</dt>
              <dd className="font-medium text-neutral-900">{santri.nama}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-neutral-500">Kelas</dt>
              <dd className="text-neutral-900">{santri.kelas}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm text-rose-600 py-4">
            Data santri tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
