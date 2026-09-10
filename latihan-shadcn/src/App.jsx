import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Santri } from "./pages/santri/Santri";
import { SantriList } from "./pages/santri/SantriList";
import { SantriDetail } from "./pages/santri/SantriDetail";

// Data awal langsung ditaruh di sini tanpa perlu file external
const initialData = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    nis: "SN-001",
    classroom: "3A",
    room: "A-01",
    birthPlace: "Malang",
    birthDate: "2009-04-12",
    gender: "Laki-laki",
    status: "Aktif",
    attendance: { present: 82, sick: 3, permission: 2, absent: 1 },
    grades: { tahfidz: 88, arabic: 84, diniyah: 90, adab: 92 },
    memorization: { currentJuz: 8, targetJuz: 10 }
  },
  {
    id: 2,
    name: "Muhammad Rizky",
    nis: "SN-002",
    classroom: "2B",
    room: "B-03",
    birthPlace: "Surabaya",
    birthDate: "2010-08-20",
    gender: "Laki-laki",
    status: "Aktif",
    attendance: { present: 85, sick: 1, permission: 1, absent: 0 },
    grades: { tahfidz: 92, arabic: 88, diniyah: 85, adab: 95 },
    memorization: { currentJuz: 12, targetJuz: 15 }
  }
];

export default function App() {
  const [santries, setSantries] = useState(initialData);

  const handleAddSantri = (newSantri) => {
    setSantries((prev) => [newSantri, ...prev]);
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/santri" element={<Santri />}>
          <Route
            index
            element={<SantriList santries={santries} onAddSantri={handleAddSantri} />}
          />
          <Route
            path=":id/*"
            element={<SantriDetail santries={santries} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
