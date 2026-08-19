/** @format */

const students = [
  {
    id: 1,
    name: "Altaf",
    job: "Santri",
  },
  {
    id: 2,
    name: "Zhafran",
    job: "Frontend Developer",
  },
  {
    id: 3,
    name: "Fawwaz",
    job: "UI Designer",
  },
  {
    id: 4,
    name: "Ahmad",
    job: "Backend Developer",
  },
  {
    id: 5,
    name: "Rizky",
    job: "UI Designer",
  },
  {
    id: 6,
    name: "Faris",
    job: "Frontend Developer",
  },
];

function Profil() {
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
      <div key={student.id} className='mb-2 rounded border bg-white p-3'>
        <h2 className='font-bold'>{student.name}</h2>

        <p>{student.job}</p>
      </div>
    ));
  }

  return (
    <div className='mt-5'>
      <h1 className='mb-4 text-2xl font-bold'>Profil Siswa</h1>

      {content}
    </div>
  );
}

export default Profil;
