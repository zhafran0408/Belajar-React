import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function SantriNilai({ santri }) {
  if (!santri || !santri.grades) return null;

  const { tahfidz, arabic, diniyah, adab } = santri.grades;
  const average = Math.round((tahfidz + arabic + diniyah + adab) / 4);

  const gradeItems = [
    { label: "Tahfidz", score: tahfidz },
    { label: "Bahasa Arab", score: arabic },
    { label: "Diniyah", score: diniyah },
    { label: "Adab", score: adab },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
          <CardContent className="p-5 space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nilai Akademik</h3>
            <div className="space-y-3">
              {gradeItems.map((item) => (
                <div key={item.label} className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{item.score}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-900 dark:text-slate-100">Rata-Rata</span>
                <span className="text-sm font-extrabold text-emerald-600">{average}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
          <CardContent className="p-5 space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Hafalan Al-Qur'an</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Capaian Hafalan</span>
                <span className="text-slate-900 dark:text-slate-100">
                  Juz {santri.memorization?.currentJuz} / {santri.memorization?.targetJuz}
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${Math.min(
                      100,
                      ((santri.memorization?.currentJuz || 0) / (santri.memorization?.targetJuz || 1)) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}