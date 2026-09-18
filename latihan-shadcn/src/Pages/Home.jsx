import {
  Activity,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import { getCurrentRole } from "@/lib/auth";

function Home() {
  const role = getCurrentRole();

  const roleText = {
    guest: "Mode Tamu",
    admin: "Administrator",
    siswa: "Siswa",
    wali: "Wali Santri",
  };

  return (
    <div className="space-y-6">

      {/* HERO */}

      <section
        className="
          overflow-hidden
          rounded-3xl
          border
          bg-background
          p-6
          shadow-sm
          sm:p-8
        "
      >
        <div className="max-w-2xl">

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              bg-muted/50
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-muted-foreground
            "
          >
            <Activity size={13} />

            {roleText[role]}
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selamat datang di SantriApp
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Platform sederhana untuk membantu
            mengelola dan memantau data santri,
            kesehatan, serta administrasi sekolah.
          </p>

          <Link
            to="/kesehatan"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-4
              py-2.5
              text-xs
              font-semibold
              text-primary-foreground
              shadow-sm
              transition-transform
              hover:scale-[1.02]
            "
          >
            Lihat Kesehatan

            <ArrowRight size={15} />
          </Link>

        </div>
      </section>

      {/* CARDS */}

      <section className="grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users size={19} />
          </div>

          <h2 className="text-sm font-bold">
            Data Santri
          </h2>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Kelola dan pantau informasi santri.
          </p>
        </div>

        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HeartPulse size={19} />
          </div>

          <h2 className="text-sm font-bold">
            Kesehatan
          </h2>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Pantau kondisi kesehatan santri.
          </p>
        </div>

        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ShieldCheck size={19} />
          </div>

          <h2 className="text-sm font-bold">
            Akses Teratur
          </h2>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Setiap pengguna memiliki hak akses
            sesuai rolenya.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;