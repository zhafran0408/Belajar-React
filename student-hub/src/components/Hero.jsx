/** @format */

function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-100 px-5 py-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Selamat Datang di StudentHub
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Website sederhana untuk belajar React dan
            mengelola data siswa.
          </p>
        </div>
        <div
          id="about"
          className="mt-10 rounded-lg bg-white p-6 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900">
            Tentang StudentHub
          </h2>

          <p className="mt-3 text-gray-600">
            StudentHub adalah project latihan React untuk
            menampilkan dan mengelola data siswa.
          </p>

          <p className="mt-3 text-gray-600">
            Project ini menggunakan React, Vite, Tailwind
            CSS, dan Shadcn UI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
