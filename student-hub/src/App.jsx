/** @format */

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const studentsData = [
  {
    id: 1,
    name: "Altaf",
    job: "Santri",
  },
  {
    id: 2,
    name: "Zhafran",
    job: "Santri",
  },
  {
    id: 3,
    name: "Fawwaz",
    job: "Santri",
  },
];

export default function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  function addStudent() {
    if (name === "" || job === "") {
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      job: job,
    };

    setStudents([...students, newStudent]);
    setName("");
    setJob("");
  }
  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <Hero />
      <main id='students' className='mx-auto max-w-5xl px-5 py-10'>
        <h2 className='mb-5 text-2xl font-bold text-gray-900'>Data Siswa</h2>
        <div className='mb-8 flex flex-col gap-3 rounded-lg bg-white p-5 shadow-sm sm:flex-row'>
          <Input
            placeholder='Nama siswa'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder='Peran siswa'
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />

          <Button onClick={addStudent}>Tambah</Button>
        </div>

       
        {students.length === 0 ?
          <p className='text-gray-500'>Data siswa belum tersedia.</p>
        : students.length > 10 ?
          <p className='text-red-500'>Data terlalu banyak untuk ditampilkan.</p>
        : <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                job={student.job}
                onDelete={() => deleteStudent(student.id)}
              />
            ))}
          </div>
        }
      </main>
      <Footer />
    </div>
  );
}
