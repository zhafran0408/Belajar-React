import {
  FilePenLine,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

import { getCurrentRole } from "@/lib/auth";

function Admin() {
  const role = getCurrentRole();

  if (role !== "admin") {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">

        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <ShieldCheck size={26} />
        </div>

        <h1 className="mt-4 text-xl font-bold">
          Akses Ditolak
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Halaman ini hanya dapat diakses oleh
          Admin.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>
        <div className="flex items-center gap-2">
          <ShieldCheck
            size={20}
            className="text-primary"
          />

          <h1 className="text-2xl font-bold">
            Administrasi
          </h1>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          Kelola data dan aktivitas SantriApp.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <Users className="mb-4 text-primary" />

          <h2 className="text-sm font-bold">
            Kelola Santri
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Tambah dan kelola data santri.
          </p>
        </div>

        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <FilePenLine className="mb-4 text-primary" />

          <h2 className="text-sm font-bold">
            Edit Data
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Ubah informasi yang diperlukan.
          </p>
        </div>

        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <HeartPulse className="mb-4 text-primary" />

          <h2 className="text-sm font-bold">
            Data Kesehatan
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Kelola catatan kesehatan santri.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Admin;