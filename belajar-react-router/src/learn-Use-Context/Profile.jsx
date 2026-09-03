import { Link } from "react-router-dom";
import { ArrowRight, UserRound } from "lucide-react";
import { useUser } from "./Context";
import SectionTitle from "../components/SectionTitle";

function Profile() {
  const { user } = useUser();

  return (
    <div>
      <SectionTitle
        eyebrow="Context Consumer"
        title="Profile"
        description="Component ini mengambil data langsung dari UserContext."
      />

      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/[0.025] p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
            <UserRound size={25} />
          </div>

          <div>
            <p className="text-xs text-zinc-600">Current User</p>
            <h2 className="text-xl font-bold">{user.name}</h2>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm text-zinc-400">
            Role: <span className="text-white">{user.role}</span>
          </p>

          <p className="mt-2 text-sm text-zinc-400">
            Status: <span className="text-violet-400">{user.status}</span>
          </p>
        </div>

        <Link
          to="/context/profile/1"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
        >
          Open Dynamic Profile
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Profile;