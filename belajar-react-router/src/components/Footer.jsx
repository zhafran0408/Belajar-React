
import { Code2, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
        <p>© 2026 ReactLearn. Built while learning React.</p>

        <div className="flex items-center gap-2">
          <span>Made with</span>

          <Heart
            size={14}
            className="text-violet-500"
          />

          <span>and React</span>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="ml-2 transition hover:text-white"
          >
            <Code2 size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
