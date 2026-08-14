/** @format */

import { useState } from "react";
import StudentCard from "./StudentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Filter } from "lucide-react";

// Opsi Kelas: X, XI, XII dengan abjad A - E
const CLASS_OPTIONS = [
  "X A", "X B", "X C", "X D", "X E",
  "XI A", "XI B", "XI C", "XI D", "XI E",
  "XII A", "XII B", "XII C", "XII D", "XII E",
];

export default function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Budi Santoso", studentClass: "X A", status: "Hadir" },
    { id: 2, name: "Siti Rahma", studentClass: "XI B", status: "Tidak Hadir" },
    { id: 3, name: "Andi Wijaya", studentClass: "XII A", status: "Hadir" },
  ]);

  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("X A");
  const [status, setStatus] = useState("Hadir");
  const [filterClass, setFilterClass] = useState("ALL");

  // Tambah Data Siswa Baru
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newStudent = {
      id: Date.now(),
      name,
      studentClass: selectedClass,
      status,
    };

    setStudents([newStudent, ...students]);
    setName(""); // Reset input nama
  };

  // Toggle Status Hadir / Tidak Hadir
  const handleToggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "Hadir" ? "Tidak Hadir" : "Hadir",
            }
          : student
      )
    );
  };

  // Hapus Siswa
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Filter List Siswa Berdasarkan Kelas
  const filteredStudents =
    filterClass === "ALL"
      ? students
      : students.filter((s) => s.studentClass === filterClass);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8">
      {/* FORM INPUT SISWA BARU */}
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-indigo-600" />
            Tambah Data Siswa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddStudent} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {/* Input Nama */}
            <div className="sm:col-span-2">
              <Input
                placeholder="Nama Lengkap Siswa..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                required
              />
            </div>

            {/* Pilihan Kelas (X, XI, XII A-E) */}
            <div>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kelas" />
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

            {/* Tombol Submit */}
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Tambah Siswa
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* FILTER & HEADER DAFTAR SISWA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Daftar Siswa
          </h2>
          <p className="text-xs text-slate-500">
            Total: {filteredStudents.length} Siswa
          </p>
        </div>

        {/* Dropdown Filter Kelas */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-4 w-4 text-slate-400 shrink-0" />
          <Select value={filterClass} onValueChange={setFilterClass}>
            <SelectTrigger className="w-full sm:w-180px">
              <SelectValue placeholder="Filter Kelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Semua Kelas</SelectItem>
              {CLASS_OPTIONS.map((cls) => (
                <SelectItem key={cls} value={cls}>
                  Kelas {cls}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* GRID DAFTAR KARTU SISWA */}
      {filteredStudents.length === 0 ? (
        <div className="text-center py-12 text-slate-400 border border-dashed rounded-lg">
          Belum ada data siswa untuk kelas ini.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              studentClass={student.studentClass}
              status={student.status}
              onToggleStatus={() => handleToggleStatus(student.id)}
              onDelete={() => handleDelete(student.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
