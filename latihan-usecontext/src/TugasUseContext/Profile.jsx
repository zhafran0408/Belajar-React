import { useContext } from "react";
import { NamaContext } from "../AppUseContext";

function Profile() {
  const nama = useContext(NamaContext);

  return (
    <div className="mx-auto mt-5 max-w-md px-4">
      <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
        <div className="mb-5 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold text-white shadow-md">
            {nama.charAt(0).toUpperCase()}
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold text-slate-800">
          Nama Santri :{" "}
          <span className="text-indigo-600">
            {nama}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Profile;