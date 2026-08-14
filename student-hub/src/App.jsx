/** @format */

import { useState } from "react";

import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Card, CardContent } from "./components/ui/card";
import {
  UserPlus,
  Search,
  Filter,
  Users,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// Opsi Kelas SMA (X, XI, XII tanpa jurusan)
const CLASS_OPTIONS = [
  "X A",
  "X B",
  "X C",
  "X D",
  "X E",
  "XI A",
  "XI B",
  "XI C",
  "XI D",
  "XI E",
  "XII A",
  "XII B",
  "XII C",
  "XII D",
  "XII E",
];

const studentsData = [
  { id: 1, name: "Altaf", studentClass: "X A", status: "Hadir" },
  { id: 2, name: "Zhafran", studentClass: "XI B", status: "Hadir" },
  { id: 3, name: "Fawwaz", studentClass: "XII A", status: "Tidak Hadir" },
];

export default function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("X A");
  const [status, setStatus] = useState("Hadir");

  // State untuk Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterClass, setFilterClass] = useState("ALL");

  function addStudent(e) {
    e?.preventDefault();
    if (name.trim() === "") return;

    const newStudent = {
      id: Date.now(),
      name: name,
      studentClass: selectedClass,
      status: status,
    };

    setStudents([newStudent, ...students]);
    setName("");
    setStatus("Hadir");
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  function toggleStatus(id) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            status: student.status === "Hadir" ? "Tidak Hadir" : "Hadir",
          };
        }
        return student;
      }),
    );
  }

  // Filter siswa berdasarkan kelas & pencarian nama
  const filteredStudents = students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesClass =
      filterClass === "ALL" || student.studentClass === filterClass;
    return matchesName && matchesClass;
  });

  // Hitung Statistik
  const totalStudents = students.length;
  const totalHadir = students.filter((s) => s.status === "Hadir").length;
  const totalAbsen = totalStudents - totalHadir;

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased'>
      <Navbar />

      <Home />

      <main id='students' className='mx-auto max-w-5xl px-4 py-10 space-y-8'>
        {/* KARTU STATISTIK */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <Card className='border-slate-200 dark:border-slate-800'>
            <CardContent className='p-4 flex items-center gap-4'>
              <div className='p-3 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-600 dark:text-indigo-400'>
                <Users className='h-6 w-6' />
              </div>
              <div>
                <p className='text-xs text-slate-500 font-medium'>
                  Total Siswa
                </p>
                <h3 className='text-2xl font-bold'>{totalStudents}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className='border-slate-200 dark:border-slate-800'>
            <CardContent className='p-4 flex items-center gap-4'>
              <div className='p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg text-emerald-600 dark:text-emerald-400'>
                <CheckCircle2 className='h-6 w-6' />
              </div>
              <div>
                <p className='text-xs text-slate-500 font-medium'>
                  Total Hadir
                </p>
                <h3 className='text-2xl font-bold'>{totalHadir}</h3>
              </div>
            </CardContent>
          </Card>

          <Card className='border-slate-200 dark:border-slate-800'>
            <CardContent className='p-4 flex items-center gap-4'>
              <div className='p-3 bg-rose-50 dark:bg-rose-950/50 rounded-lg text-rose-600 dark:text-rose-400'>
                <XCircle className='h-6 w-6' />
              </div>
              <div>
                <p className='text-xs text-slate-500 font-medium'>
                  Tidak Hadir
                </p>
                <h3 className='text-2xl font-bold'>{totalAbsen}</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FORM TAMBAH SISWA */}
        <Card className='border-slate-200 dark:border-slate-800'>
          <CardContent className='p-6'>
            <h2 className='text-lg font-bold mb-4 flex items-center gap-2'>
              <UserPlus className='h-5 w-5 text-indigo-600' />
              Tambah Data Siswa
            </h2>

            <form
              onSubmit={addStudent}
              className='grid grid-cols-1 sm:grid-cols-12 gap-3'>
              {/* Input Nama */}
              <div className='sm:col-span-5'>
                <Input
                  placeholder='Nama lengkap siswa...'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Select Kelas */}
              <div className='sm:col-span-3'>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder='Pilih Kelas' />
                  </SelectTrigger>
                  <SelectContent>
                    {CLASS_OPTIONS.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        Kelas {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Select Status Initial */}
              <div className='sm:col-span-2'>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder='Status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Hadir'>Hadir</SelectItem>
                    <SelectItem value='Tidak Hadir'>Tidak Hadir</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tombol Tambah */}
              <div className='sm:col-span-2'>
                <Button
                  type='submit'
                  className='w-full bg-indigo-600 hover:bg-indigo-700'>
                  Tambah
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* CONTROL BAR: SEARCH & FILTER */}
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800'>
          {/* Input Search Nama */}
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400' />
            <Input
              placeholder='Cari nama siswa...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-9'
            />
          </div>

          {/* Filter Dropdown Kelas */}
          <div className='flex items-center gap-2 w-full sm:w-auto'>
            <Filter className='h-4 w-4 text-slate-400 shrink-0' />
            <Select value={filterClass} onValueChange={setFilterClass}>
              <SelectTrigger className='w-full sm:w-[180px]'>
                <SelectValue placeholder='Filter Kelas' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ALL'>Semua Kelas</SelectItem>
                {CLASS_OPTIONS.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    Kelas {cls}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* DAFTAR KARTU SISWA */}
        {filteredStudents.length === 0 ?
          <div className='text-center py-12 text-slate-400 border border-dashed rounded-xl'>
            Tidak ada data siswa yang cocok.
          </div>
        : <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                studentClass={student.studentClass}
                status={student.status}
                onToggleStatus={() => toggleStatus(student.id)}
                onDelete={() => deleteStudent(student.id)}
              />
            ))}
          </div>
        }
      </main>

      <About />

      <Footer />
    </div>
  );
}
