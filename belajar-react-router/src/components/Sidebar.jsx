import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Boxes,
  CircleUserRound,
  Code2,
  Home,
  Layers3,
  Route,
  Sparkles,
} from "lucide-react";

const menu = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", path: "/", icon: Home },
      { name: "About ReactLearn", path: "/about", icon: Sparkles },
      { name: "Profil", path: "/profil", icon: CircleUserRound },
    ],
  },
  {
    title: "React Concepts",
    items: [
      { name: "Components", path: "/context", icon: Boxes },
      { name: "Context API", path: "/context/example", icon: Layers3 },
      { name: "Routing", path: "/context/profile", icon: Route },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/10 bg-zinc-950/70 lg:block">
      <div className="sticky top-18 p-5">
        {menu.map((section) => (
          <div key={section.title} className="mb-7">
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-600">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                        isActive
                          ? "bg-violet-500/10 text-violet-300"
                          : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
                      }`
                    }
                  >
                    <Icon size={17} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Code2 size={17} className="text-violet-400" />
            <span className="text-sm font-semibold">Learning Mode</span>
          </div>

          <p className="text-xs leading-5 text-zinc-500">
            Setiap halaman dibuat untuk memperlihatkan konsep React yang sedang
            dipelajari.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;