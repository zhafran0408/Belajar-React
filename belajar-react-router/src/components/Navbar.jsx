import { Link } from "react-router-dom";
import {
  BookOpen,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/30 transition group-hover:scale-105">
            <BookOpen size={21} />
          </div>

          <div>
            <h1 className="font-bold tracking-tight">ReactLearn</h1>
            <p className="hidden text-[10px] text-zinc-500 sm:block">
              Learn • Build • Understand
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            About
          </Link>

          <Link
            to="/profil"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            Profil
          </Link>

          <Link
            to="/context"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            Context API
          </Link>

          <button
            onClick={toggleTheme}
            className="ml-2 rounded-xl border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition hover:bg-violet-500/10 hover:text-violet-300"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/"
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              Home
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/about"
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              About
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/profil"
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              Profil
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/context"
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              Context API
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
