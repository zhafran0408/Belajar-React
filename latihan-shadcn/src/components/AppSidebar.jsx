import {
  Activity,
  FilePenLine,
  GraduationCap,
  HeartPulse,
  Home,
  Info,
  LogIn,
  LogOut,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  getCurrentRole,
  getCurrentUser,
  logout,
} from "@/lib/auth";

const mainMenu = [
  {
    to: "/",
    label: "Home",
    icon: Home,
    end: true,
  },
  {
    to: "/kesehatan",
    label: "Kesehatan",
    icon: HeartPulse,
  },
  {
    to: "/about",
    label: "About",
    icon: Info,
  },
];

function AppSidebar() {
  const navigate = useNavigate();

  const user = getCurrentUser();
  const role = getCurrentRole();

  const isAdmin = role === "admin";
  const isGuest = role === "guest";

  function handleLogout() {
    logout();

    navigate("/");

    window.location.reload();
  }

  const navLinkClass = ({ isActive }) =>
    `
      group
      flex
      w-full
      items-center
      rounded-lg
      transition-all
      duration-200
      ${
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground"
      }
    `;

  return (
    <Sidebar>

      {/* ==========================================
          HEADER
      ========================================== */}

      <SidebarHeader className="p-3">

        <div className="flex items-center gap-3 rounded-xl border bg-sidebar-accent/40 p-3">

          <div
            className="
              flex
              size-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-primary-foreground
            "
          >
            <GraduationCap size={18} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold">
              SantriApp
            </p>

            <p className="truncate text-[10px] text-sidebar-foreground/50">
              School Management
            </p>
          </div>

        </div>

      </SidebarHeader>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <SidebarContent className="px-2">

        {/* MAIN */}

        <div className="mb-2 px-2 pt-2">
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-sidebar-foreground/40
            "
          >
            Menu utama
          </p>
        </div>

        <SidebarMenu>

          {mainMenu.map((item) => {
            const Icon = item.icon;

            return (
              <SidebarMenuItem key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <SidebarMenuButton
                      isActive={isActive}
                      className="h-10"
                      tooltip={item.label}
                    >
                      <Icon size={17} />

                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            );
          })}

        </SidebarMenu>

        {/* ========================================
            ADMIN
        ======================================== */}

        {isAdmin && (
          <>
            <SidebarSeparator className="my-4" />

            <div className="mb-2 px-2">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-sidebar-foreground/40
                "
              >
                Administrasi
              </p>
            </div>

            <SidebarMenu>

              <SidebarMenuItem>
                <NavLink
                  to="/admin"
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <SidebarMenuButton
                      isActive={isActive}
                      className="h-10"
                      tooltip="Admin"
                    >
                      <ShieldCheck size={17} />

                      <span>Kelola Data</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <NavLink
                  to="/admin/edit"
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <SidebarMenuButton
                      isActive={isActive}
                      className="h-10"
                      tooltip="Edit Data"
                    >
                      <FilePenLine size={17} />

                      <span>Edit Data</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <NavLink
                  to="/admin/absensi"
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <SidebarMenuButton
                      isActive={isActive}
                      className="h-10"
                      tooltip="Absensi"
                    >
                      <Activity size={17} />

                      <span>Kelola Absensi</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>

            </SidebarMenu>
          </>
        )}

      </SidebarContent>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <SidebarFooter className="p-2">

        {isGuest ? (
          <>
            <SidebarSeparator className="mb-3" />

            <SidebarMenu>

              {/* LOGIN */}

              <SidebarMenuItem>
                <NavLink
                  to="/login"
                  className={navLinkClass}
                >
                  <SidebarMenuButton
                    tooltip="Login"
                    className="h-10"
                  >
                    <LogIn size={17} />

                    <span>Masuk</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>

              {/* SIGNUP */}

              <SidebarMenuItem>
                <NavLink
                  to="/signup"
                  className={navLinkClass}
                >
                  <SidebarMenuButton
                    tooltip="Daftar"
                    className="h-10"
                  >
                    <UserPlus size={17} />

                    <span>Daftar Akun</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>

            </SidebarMenu>
          </>
        ) : (
          <>
            <SidebarSeparator className="mb-3" />

            <div className="mb-2 flex items-center gap-2 px-2">

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
                {role === "admin" ? (
                  <ShieldCheck size={15} />
                ) : (
                  <Users size={15} />
                )}
              </div>

              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold">
                  {user?.nama}
                </p>

                <p className="truncate text-[9px] text-sidebar-foreground/50">
                  {role === "admin"
                    ? "Administrator"
                    : role === "wali"
                      ? "Wali Santri"
                      : "Siswa"}
                </p>
              </div>

            </div>

            {/* LOGOUT */}

            <SidebarMenu>
              <SidebarMenuItem>

                <SidebarMenuButton
                  onClick={handleLogout}
                  tooltip="Logout"
                  className="
                    h-10
                    text-destructive
                    hover:bg-destructive/10
                    hover:text-destructive
                  "
                >
                  <LogOut size={17} />

                  <span>Logout</span>
                </SidebarMenuButton>

              </SidebarMenuItem>
            </SidebarMenu>
          </>
        )}

        <p className="mt-3 text-center text-[9px] text-sidebar-foreground/30">
          © {new Date().getFullYear()} SantriApp
        </p>

      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
