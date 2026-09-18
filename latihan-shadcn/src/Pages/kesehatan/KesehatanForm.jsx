import { useState } from "react";

import {
  HeartPulse,
  Save,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { getCurrentRole } from "@/lib/auth";

function KesehatanForm() {
  const role = getCurrentRole();

  const [form, setForm] = useState({
    nama: "",
    kelas: "",
    kondisi: "Sehat",
    catatan: "",
  });

  if (role !== "admin") {
    return null;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Data kesehatan:", form);

    alert("Data kesehatan berhasil disimpan.");

    setForm({
      nama: "",
      kelas: "",
      kondisi: "Sehat",
      catatan: "",
    });
  }

  return (
    <div className="rounded-2xl border bg-background p-5 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <HeartPulse size={19} />
        </div>

        <div>
          <h2 className="text-sm font-bold">
            Tambah Data Kesehatan
          </h2>

          <p className="text-[10px] text-muted-foreground">
            Hanya Admin yang dapat mengubah data.
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <div className="space-y-2">
          <label className="text-xs font-semibold">
            Nama Santri
          </label>

          <Input
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama santri"
            className="h-10 rounded-xl"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold">
            Kelas
          </label>

          <Input
            name="kelas"
            value={form.kelas}
            onChange={handleChange}
            placeholder="Contoh: 3A"
            className="h-10 rounded-xl"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold">
            Kondisi
          </label>

          <select
            name="kondisi"
            value={form.kondisi}
            onChange={handleChange}
            className="
              h-10
              w-full
              rounded-xl
              border
              bg-background
              px-3
              text-xs
              outline-none
              focus:ring-2
              focus:ring-primary/20
            "
          >
            <option value="Sehat">
              Sehat
            </option>

            <option value="Sakit">
              Sakit
            </option>

            <option value="Izin">
              Izin
            </option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold">
            Catatan
          </label>

          <textarea
            name="catatan"
            value={form.catatan}
            onChange={handleChange}
            placeholder="Catatan kesehatan..."
            className="
              min-h-24
              w-full
              resize-none
              rounded-xl
              border
              bg-background
              px-3
              py-2.5
              text-xs
              outline-none
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        <Button
          type="submit"
          className="h-10 w-full rounded-xl"
        >
          <Save size={15} />

          Simpan Data
        </Button>

      </form>

    </div>
  );
}

export default KesehatanForm;