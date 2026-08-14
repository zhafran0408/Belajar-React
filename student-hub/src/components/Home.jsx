/** @format */

export default function Home() {
  return (
    <section id='home' className='bg-gray-100 px-5 py-20'>
      <div className='mx-auto max-w-5xl'>
        <h1 className='mb-4 text-4xl font-bold text-gray-900'>
          Student Management
        </h1>

        <p className='max-w-2xl text-lg text-gray-600'>
          Aplikasi sederhana untuk mengelola data siswa menggunakan React.
        </p>

        <a
          href='#students'
          className='mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700'>
          Lihat Data Siswa
        </a>
      </div>
    </section>
  );
}
