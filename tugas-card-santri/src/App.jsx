import Santri from "./components/Santri";

function App() {
  const dataSantri = [
    { nama: "Ahmad", kelas: "XI", hobi: "Coding", aktif: true },
    { nama: "Ali", kelas: "XII", hobi: "Membaca", aktif: false },
    { nama: "Umar", kelas: "X", hobi: "Futsal", aktif: true },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Kartu Profil Santri</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {dataSantri.map((santri, index) => (
          <Santri
            key={index}
            nama={santri.nama}
            kelas={santri.kelas}
            hobi={santri.hobi}
            aktif={santri.aktif}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
