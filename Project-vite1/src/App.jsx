/** @format */

import Profil from "./components/Profil";
import { Button } from "./components/ui/button";

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
      {content}

      <Button className='mt-4'>Klik Saya</Button>
    </div>
  );
}
