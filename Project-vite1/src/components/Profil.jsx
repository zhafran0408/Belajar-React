/** @format */
// mempelajari props dan key
function Profil({ name, job }) {
  return (
    <section className='px-4 py-6'>
      <div className='mx-auto max-w-md rounded-xl bg-gray-800 p-6 shadow-lg'>
        <h1 className='text-2xl font-bold text-white'>
          Nama saya: <span className='text-blue-400'>{name}</span>
        </h1>

        <h2 className='mt-2 text-lg text-gray-300'>
          Peran saya: <span className='font-medium text-gray-400'>{job}</span>
        </h2>
      </div>
    </section>
  );
}

export default Profil;
