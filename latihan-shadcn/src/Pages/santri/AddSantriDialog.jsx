import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AddSantriDialog({ onAddSantri }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nis: "",
    classroom: "",
    room: "",
    birthPlace: "",
    birthDate: "",
    gender: "Laki-laki",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.nis) return;

    const newSantri = {
      id: Date.now(),
      ...formData,
      status: "Aktif",
      attendance: { present: 0, sick: 0, permission: 0, absent: 0 },
      grades: { tahfidz: 0, arabic: 0, diniyah: 0, adab: 0 },
      memorization: { currentJuz: 0, targetJuz: 30 },
    };

    onAddSantri(newSantri);
    setIsOpen(false);
    setFormData({
      name: "",
      nis: "",
      classroom: "",
      room: "",
      birthPlace: "",
      birthDate: "",
      gender: "Laki-laki",
    });
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 shadow-sm text-xs h-9"
      >
        + Tambah Santri
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Tambah Santri Baru
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Nama Lengkap
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ahmad Fauzi"
                  className="rounded-xl text-xs h-9"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    NIS
                  </label>
                  <Input
                    name="nis"
                    value={formData.nis}
                    onChange={handleChange}
                    required
                    placeholder="SN-004"
                    className="rounded-xl text-xs h-9"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Kelas
                  </label>
                  <Input
                    name="classroom"
                    value={formData.classroom}
                    onChange={handleChange}
                    placeholder="3A"
                    className="rounded-xl text-xs h-9"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Kamar
                  </label>
                  <Input
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    placeholder="A-01"
                    className="rounded-xl text-xs h-9"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Tempat Lahir
                  </label>
                  <Input
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    placeholder="Malang"
                    className="rounded-xl text-xs h-9"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Tanggal Lahir
                </label>
                <Input
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="rounded-xl text-xs h-9"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl text-xs h-9"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="rounded-xl bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900 text-xs h-9"
                >
                  Simpan Data
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// Mendukung import default agar tidak error lagi di SantriList.jsx
export default AddSantriDialog;