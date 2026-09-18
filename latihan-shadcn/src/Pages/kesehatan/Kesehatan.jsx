import {
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { getCurrentRole } from "@/lib/auth";

function Kesehatan() {
  const role = getCurrentRole();

  const isAdmin = role === "admin";

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <div className="flex items-center gap-2">
            <HeartPulse
              size={21}
              className="text-primary"
            />

            <h1 className="text-2xl font-bold">
              Kesehatan Santri
            </h1>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Pantau kondisi kesehatan santri.
          </p>
        </div>

        {isAdmin && (
          <div className="inline-flex items-center gap-2 rounded-xl border bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
            <ShieldCheck size={14} />

            Mode Admin
          </div>
        )}

      </div>

      <div className="rounded-2xl border bg-background p-6 shadow-sm">

        <div className="text-center">

          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HeartPulse size={23} />
          </div>

          <h2 className="mt-4 text-sm font-bold">
            Data kesehatan
          </h2>

          <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-muted-foreground">
            Halaman kesehatan siap digunakan.
            Data kartu dan form kesehatan bisa
            kita masukkan kembali di tahap berikutnya.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Kesehatan;