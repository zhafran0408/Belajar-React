import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User } from "lucide-react";

export function SantriCard({ santri }) {
  if (!santri) return null;

  return (
    <Link to={`/santri/${santri.id}`}>
      <Card className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
        <CardContent className="p-0 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-semibold text-xs">
                {santri.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm tracking-tight group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  {santri.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">{santri.nis}</p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900 text-[10px] px-2 py-0.5 rounded-full"
            >
              {santri.status}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100 dark:border-slate-800/60">
            <div>
              <span className="text-slate-400 block text-[10px]">Kelas</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{santri.classroom}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Kamar</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{santri.room}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Hadir <strong className="text-slate-900 dark:text-slate-100">{santri.attendance?.present || 0}</strong> hari
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-900 dark:text-slate-100 group-hover:translate-x-0.5 transition-transform">
              Lihat Detail
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}