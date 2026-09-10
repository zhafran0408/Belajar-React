import React from "react";
import { useParams, NavLink, Routes, Route, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SantriAbsensi } from "./SantriAbsensi";
import { SantriNilai } from "./SantriNilai";

export function SantriDetail({ santries }) {
  const { id } = useParams();
  const santri = (santries || []).find((item) => item.id === Number(id));

  if (!santri) {
    return (
      <div className="p-8 text-center text-slate-500 text-xs">
        Santri tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold text-lg">
                {santri.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {santri.name}
                  </h1>
                  <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">
                    {santri.status}
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{santri.nis}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-semibold">Kelas / Kamar</span>
              <p className="font-medium text-slate-700 dark:text-slate-300">{santri.classroom} / {santri.room}</p>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-semibold">Tempat, Tgl Lahir</span>
              <p className="font-medium text-slate-700 dark:text-slate-300">{santri.birthPlace}, {santri.birthDate}</p>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-semibold">Jenis Kelamin</span>
              <p className="font-medium text-slate-700 dark:text-slate-300">{santri.gender}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 text-xs font-medium">
        <NavLink
          to={`/santri/${santri.id}`}
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl transition-all ${
              isActive
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`
          }
        >
          Absensi
        </NavLink>
        <NavLink
          to={`/santri/${santri.id}/nilai`}
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl transition-all ${
              isActive
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`
          }
        >
          Nilai & Hafalan
        </NavLink>
      </div>

      <Routes>
        <Route index element={<SantriAbsensi santri={santri} />} />
        <Route path="nilai" element={<SantriNilai santri={santri} />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </div>
  );
}