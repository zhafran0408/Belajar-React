import SectionTitle from "../components/SectionTitle";

function Tentang() {
  return (
    <div>
      <SectionTitle
        eyebrow="Context Learning"
        title="Tentang Context API"
        description="Context API membantu mengirim data ke component yang berada jauh di dalam tree tanpa harus meneruskan props satu per satu."
      />

      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
        <div className="space-y-5 text-sm leading-7 text-zinc-500">
          <p>
            Context dibuat menggunakan <strong className="text-white">createContext</strong>.
          </p>

          <p>
            Provider menyediakan data untuk seluruh component yang berada di
            dalamnya.
          </p>

          <p>
            Consumer dapat mengambil data menggunakan{" "}
            <strong className="text-violet-400">useContext</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tentang;