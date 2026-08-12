/** @format */

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold">
              StudentHub
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Simple student management website.
            </p>
          </div>

          <div className="flex gap-5 text-sm text-gray-400">
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#students"
              className="transition hover:text-white"
            >
              Students
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 StudentHub. Dibuat dengan React.
        </div>
      </div>
    </footer>
  );
}

export default Footer;