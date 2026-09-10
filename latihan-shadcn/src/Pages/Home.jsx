import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, CheckCircle } from "lucide-react";

export function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Selamat Datang di SantriHub
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Ringkasan status sistem manajemen santri modern.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-slate-100">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Total Santri</span>
              <p className="text-xl font-bold text-slate-900 dark:text-slate-100">3 Santri</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl text-emerald-600">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Status Kehadiran</span>
              <p className="text-xl font-bold text-slate-900 dark:text-slate-100">92% Rata-rata</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Program Tahfidz</span>
              <p className="text-xl font-bold text-slate-900 dark:text-slate-100">11.6 Juz Avg</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}