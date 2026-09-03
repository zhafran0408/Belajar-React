import { Mail, Send } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      nama,
      pesan,
    });

    setSubmitted(true);
  };

  return (
    <div>
      <SectionTitle
        eyebrow="Controlled Input"
        title="Contact Playground"
        description="Contoh sederhana penggunaan useState, onChange, controlled input dan onSubmit."
      />

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl rounded-3xl border border-white/10 bg-white/2.5 p-7"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">Nama</label>

          <input
            value={nama}
            onChange={(event) => {
              setNama(event.target.value);
              setSubmitted(false);
            }}
            placeholder="Masukkan nama..."
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-violet-500/50"
          />

          <p className="mt-2 text-xs text-zinc-600">
            Preview:{" "}
            <span className="text-violet-400">{nama || "Belum ada nama"}</span>
          </p>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium">Pesan</label>

          <textarea
            value={pesan}
            onChange={(event) => {
              setPesan(event.target.value);
              setSubmitted(false);
            }}
            rows="5"
            placeholder="Tulis pesan..."
            className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-violet-500/50"
          />

          <p className="mt-2 text-xs text-zinc-600">
            Characters: {pesan.length}
          </p>
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold transition hover:bg-violet-500"
        >
          <Send size={16} />
          Kirim
        </button>

        {submitted && (
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm text-violet-300">
            <Mail size={17} />
            Data berhasil dikirim ke console.
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;