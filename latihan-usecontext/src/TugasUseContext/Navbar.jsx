import { useContext } from "react";
import { NamaContext } from "../AppUseContext";

function Navbar() {
  const { nama } = useContext(NamaContext);

  return (
    <nav className="mx-auto mt-5 max-w-md px-4">
      <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-4 shadow-lg">
        <h1 className="text-lg font-bold text-white">
          Santri App
        </h1>

        <p className="text-sm font-medium text-white/90">
          Selamat Datang,{" "}
          <span className="font-bold text-white">
            {nama}
          </span>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;