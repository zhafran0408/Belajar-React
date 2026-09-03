import { ArrowLeft, UserRound } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const users = {
  1: {
    name: "Zhafran",
    role: "React Learner",
    description: "Sedang mempelajari React dari fundamental sampai Context API.",
  },
  2: {
    name: "Frontend Student",
    role: "Developer",
    description: "Belajar membuat interface menggunakan React dan Tailwind.",
  },
};

function UserDetail() {
  const { id } = useParams();

  const user = users[id];

  if (!user) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-10 text-center">
        <h1 className="text-xl font-bold">User tidak ditemukan</h1>

        <Link
          to="/profil"
          className="mt-5 inline-flex items-center gap-2 text-sm text-violet-400"
        >
          <ArrowLeft size={16} />
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        to="/profil"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
      >
        <ArrowLeft size={16} />
        Kembali ke Profil
      </Link>

      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
          <UserRound size={28} />
        </div>

        <p className="mt-6 text-sm text-violet-400">{user.role}</p>

        <h1 className="mt-1 text-3xl font-bold">{user.name}</h1>

        <p className="mt-4 leading-7 text-zinc-500">{user.description}</p>

        <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-zinc-600">Dynamic Route ID</p>
          <p className="mt-1 font-mono text-sm text-violet-300">{id}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;