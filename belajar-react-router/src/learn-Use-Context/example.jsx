/** @format */

import { useState } from "react";
import { RefreshCw, UserRound } from "lucide-react";
import { useUser } from "./Context";
import SectionTitle from "../components/SectionTitle";

function Example() {
  const { user, setUser } = useUser();
  const [namaInput, setNamaInput] = useState(user.name);

  function handleChangeName(e) {
    setNamaInput(e.target.value);

    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }

  return (
    <div>
      <SectionTitle
        eyebrow='Context API'
        title='Context API Example'
        description='Contoh penggunaan Context API untuk berbagi data user tanpa harus meneruskan props melalui banyak component.'
      />

      <div className='grid gap-6 lg:grid-cols-2'>
        {/* User Card */}
        <div className='rounded-3xl border border-white/10 bg-white/[0.025] p-7'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400'>
              <UserRound size={25} />
            </div>

            <div>
              <p className='text-xs uppercase tracking-wider text-zinc-600'>
                Current User
              </p>

              <h2 className='mt-1 text-2xl font-bold text-white'>
                {user.name}
              </h2>

              <p className='mt-1 text-sm text-zinc-500'>{user.role}</p>
            </div>
          </div>

          <div className='mt-8 rounded-2xl border border-white/10 bg-black/20 p-5'>
            <p className='text-xs uppercase tracking-wider text-zinc-600'>
              Status
            </p>

            <p className='mt-2 text-sm text-zinc-300'>{user.status}</p>
          </div>
        </div>

        {/* Change Name */}
        <div className='rounded-3xl border border-white/10 bg-white/[0.025] p-7'>
          <div className='mb-6 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400'>
              <RefreshCw size={18} />
            </div>

            <div>
              <h3 className='font-semibold text-white'>Change User Name</h3>

              <p className='text-sm text-zinc-500'>Ketik nama baru di bawah</p>
            </div>
          </div>

          <input
            type='text'
            value={namaInput}
            onChange={handleChangeName}
            placeholder='Masukkan nama...'
            className='w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10'
          />

          <div className='mt-4 rounded-xl border border-violet-500/10 bg-violet-500/5 p-4'>
            <p className='text-xs text-zinc-600'>Nama dari Context</p>

            <p className='mt-1 font-medium text-violet-400'>
              {user.name || "Belum ada nama"}
            </p>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className='mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-7'>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-violet-400'>
          How it works
        </p>

        <div className='mt-5 space-y-4 text-sm leading-7 text-zinc-500'>
          <p>
            <span className='font-medium text-white'>createContext()</span>{" "}
            digunakan untuk membuat Context sebagai tempat berbagi data.
          </p>

          <p>
            <span className='font-medium text-white'>UserProvider</span>{" "}
            menyediakan data user dan fungsi{" "}
            <code className='rounded bg-white/5 px-1.5 py-0.5 text-violet-400'>
              setUser
            </code>
            .
          </p>

          <p>
            Ketika nama diketik,{" "}
            <code className='rounded bg-white/5 px-1.5 py-0.5 text-violet-400'>
              setUser()
            </code>{" "}
            mengubah data user yang tersimpan di Context.
          </p>

          <p>
            Component lain yang menggunakan{" "}
            <code className='rounded bg-white/5 px-1.5 py-0.5 text-violet-400'>
              useUser()
            </code>{" "}
            akan mendapatkan data terbaru secara otomatis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Example;
