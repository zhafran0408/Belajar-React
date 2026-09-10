import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Tentang SantriHub
      </h1>
      <Card className="rounded-2xl border-slate-200/80 dark:border-slate-800 shadow-sm">
        <CardContent className="p-6 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            <strong>SantriHub</strong> adalah Web Management System modern yang dirancang untuk membantu pengelolaan akademik, absensi, serta capaian hafalan santri di pesantren.
          </p>
          <p>
            Dibangun dengan stack teknologi terkini seperti React, Vite, Tailwind CSS, dan shadcn/ui untuk memberikan pengalaman pengelolaan data yang cepat, fleksibel, dan estetis.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}