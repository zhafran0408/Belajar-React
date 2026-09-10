import { SidebarTrigger } from "@/components/ui/sidebar";

function Navbar() {
  return (
    <header className="flex h-14 items-center border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

        <h1 className="text-sm font-semibold text-slate-900 dark:text-white">
          SantriHub
        </h1>
      </div>
    </header>
  );
}

export default Navbar;