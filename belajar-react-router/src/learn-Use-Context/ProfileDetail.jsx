import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Braces } from "lucide-react";
import { useUser } from "./Context";

function ProfileDetail() {
  const { id } = useParams();
  const { user } = useUser();

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        to="/context/profile"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Profile
      </Link>

      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
          <Braces size={25} />
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-violet-400">
          Dynamic Route
        </p>

        <h1 className="mt-2 text-3xl font-bold">{user.name}</h1>

        <p className="mt-4 text-zinc-500">
          Data berasal dari Context API, sedangkan ID halaman berasal dari
          useParams().
        </p>

        <div className="mt-7 rounded-xl border border-white/10 bg-black/20 p-5">
          <div className="space-y-3 font-mono text-sm">
            <p>
              id: <span className="text-violet-400">"{id}"</span>
            </p>

            <p>
              user: <span className="text-violet-400">"{user.name}"</span>
            </p>

            <p>
              role: <span className="text-violet-400">"{user.role}"</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
