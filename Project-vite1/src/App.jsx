/** @format */

import { useState } from "react";

import Profil from "./components/Profil";
import { Button } from "./components/ui/button";

import AppUseState from "./AppUseState";
import AppUseRef from "./AppUseRef";

const students = [
  // {
  //   id: 1,
  //   name: "Altaf",
  //   job: "Santri",
  // },
  // {
  //   id: 2,
  //   name: "Zhafran",
  //   job: "Frontend Developer",
  // },
  // {
  //   id: 3,
  //   name: "Fawwaz",
  //   job: "UI Designer",
  // },
  // {
  //   id: 4,
  //   name: "Ahmad",
  //   job: "Backend Developer",
  // },
  // {
  //   id: 5,
  //   name: "Rizky",
  //   job: "UI Designer",
  // },
  // {
  //   id: 6,
  //   name: "Faris",
  //   job: "Frontend Developer",
  // },
];

export default function App() {
  const [page, setPage] = useState("home");

  // =========================
  // HALAMAN USESTATE
  // =========================
  if (page === "useState") {
    return (
      <div>
        <Button onClick={() => setPage("home")}>Kembali ke App</Button>

        <AppUseState />
      </div>
    );
  }

  // =========================
  // HALAMAN USEREF
  // =========================
  if (page === "useRef") {
    return (
      <div>
        <Button onClick={() => setPage("home")}>Kembali ke App</Button>

        <AppUseRef />
      </div>
    );
  }

  // =========================
  // KODE APP LAMA
  // =========================

  let content;

  if (students.length === 0) {
    content = (
      <div className='px-4 py-6 text-center text-gray-600'>
        Data ini belum tersedia
      </div>
    );
  } else if (students.length > 5) {
    content = (
      <div className='px-4 py-6 text-center text-red-600'>
        Data tidak bisa ditampilkan karena terlalu banyak
      </div>
    );
  } else {
    content = students.map((student) => (
      <Profil key={student.id} name={student.name} job={student.job} />
    ));
  }

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='mb-6 flex gap-3'>
        <Button onClick={() => setPage("home")}>App</Button>

        <Button onClick={() => setPage("useState")}>useState</Button>

        <Button onClick={() => setPage("useRef")}>useRef</Button>
      </div>

      {content}

      <Button className='mt-4'>Klik Saya</Button>
    </div>
  );
}
