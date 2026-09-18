import {
  GraduationCap,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

import { getCurrentUser } from "@/lib/auth";

function Navbar() {
  const user = getCurrentUser();

  function getRoleName(role) {
    if (role === "admin") return "Admin";
    if (role === "siswa") return "Siswa";
    if (role === "wali") return "Wali Santri";

    return "Mode Tamu";
  }

  function RoleIcon({ role }) {
    if (role === "admin") {
      return <ShieldCheck size={13} />;
    }

    if (role === "wali") {
      return <Users size={13} />;
    }

    if (role === "siswa") {
      return <GraduationCap size={13} />;
    }

    return <UserRound size={13} />;
  }

  return (
    <header className="sticky top-0 z-40 h-16 border-b bg-background">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">

        {/* BRAND */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              size-9
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-primary-foreground
              shadow-sm
            "
          >
            <GraduationCap size={19} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none">
              SantriApp
            </p>

            <p className="mt-1 text-[10px] text-muted-foreground">
              School Management
            </p>
          </div>
        </div>

        {/* USER STATUS */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            bg-muted/40
            px-2
            py-1.5
          "
        >
          <div
            className="
              flex
              size-8
              items-center
              justify-center
              rounded-full
              bg-primary/10
              text-primary
            "
          >
            <RoleIcon role={user?.role} />
          </div>

          <div className="hidden sm:block">
            <p className="max-w-32 truncate text-[11px] font-semibold">
              {user?.nama || "Tamu"}
            </p>

            <div className="mt-0.5 flex items-center gap-1 text-[9px] text-muted-foreground">
              <RoleIcon role={user?.role} />

              <span>
                {getRoleName(user?.role)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;