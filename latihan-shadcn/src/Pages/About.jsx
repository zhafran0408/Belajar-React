import {
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

function About() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">

      <div>
        <p className="text-xs font-semibold text-primary">
          TENTANG APLIKASI
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          SantriApp
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Sistem sederhana untuk membantu
          pengelolaan informasi santri di lingkungan
          sekolah atau pesantren.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border bg-background p-5">
          <GraduationCap className="mb-4 text-primary" />

          <h2 className="text-sm font-bold">
            Santri
          </h2>

          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Informasi santri dapat dipantau dengan
            lebih terstruktur.
          </p>
        </div>

        <div className="rounded-2xl border bg-background p-5">
          <HeartPulse className="mb-4 text-primary" />

          <h2 className="text-sm font-bold">
            Kesehatan
          </h2>

          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Data kesehatan dapat dicatat dan
            dipantau oleh pihak yang berwenang.
          </p>
        </div>

        <div className="rounded-2xl border bg-background p-5">
          <ShieldCheck className="mb-4 text-primary" />

          <h2 className="text-sm font-bold">
            Hak Akses
          </h2>

          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Admin memiliki akses pengelolaan,
            sementara pengguna lain hanya melihat.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;