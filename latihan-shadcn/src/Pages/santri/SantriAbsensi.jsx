import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function SantriAbsensi({ santri }) {
  if (!santri || !santri.attendance) return null;

  const { present, sick, permission, absent } = santri.attendance;
  const totalDays = present + sick + permission + absent;
  const percentage = totalDays > 0 ? Math.round((present / totalDays) * 100) : 0;

  const stats = [
    { label: "Hadir", value: present, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50" },
    { label: "Sakit", value: sick, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50" },
    { label: "Izin", value: permission, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/50" },
    { label: "Alpa", value: absent, color: "text-rose-600 bg-rose-50 dark:bg-rose-950/50" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((item) => (
          <Card key={item.label} className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
            <CardContent className="p-4">
              <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">
                {item.label}
              </span>
              <p className={`text-xl font-bold mt-1 ${item.color.split(" ")[0]}`}>
                {item.value} <span className="text-xs font-normal text-slate-400">hari</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
        <CardContent className="p-5 space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">Persentase Kehadiran</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold">{percentage}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-slate-900 dark:bg-slate-100 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}