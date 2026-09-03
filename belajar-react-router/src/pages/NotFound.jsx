import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
          <SearchX size={30} />
        </div>

        <p className="mt-6 text-sm font-semibold text-violet-400">404</p>

        <h1 className="mt-2 text-3xl font-bold">Page Not Found</h1>

        <p className="mt-3 text-zinc-500">
          Halaman yang kamu cari tidak tersedia.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;