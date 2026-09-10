import React, { useState } from "react";
import { Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SantriCard } from "./SantriCard";
import AddSantriDialog from "./AddSantriDialog";

export function SantriList({ santries, onAddSantri }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSantries = (santries || []).filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.nis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Daftar Santri
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Kelola seluruh data santri yang terdaftar secara real-time.
          </p>
        </div>
        <AddSantriDialog onAddSantri={onAddSantri} />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <Input
            type="text"
            placeholder="Cari nama atau NIS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 h-9 rounded-xl text-xs border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800"
          />
        </div>
        <span className="text-xs font-medium text-slate-500">
          Menampilkan <strong className="text-slate-900 dark:text-slate-100">{filteredSantries.length}</strong> santri
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSantries.length > 0 ? (
          filteredSantries.map((santri) => (
            <SantriCard key={santri.id} santri={santri} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-400">Tidak ada data santri ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
}