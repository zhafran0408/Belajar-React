/** @format */

function Card() {
  return (
    <section className='flex flex-wrap justify-center gap-6 p-8'>
      
      <div className='w-64 rounded-xl bg-white p-5 shadow-lg'>
        <h2 className='text-xl font-bold'>ASUS ROG Strix G16</h2>
        <p className='mt-2 text-gray-600'>Rp 24.999.000</p>
      </div>

      
      <div className='w-64 rounded-xl bg-white p-5 shadow-lg'>
        <h2 className='text-xl font-bold'>MacBook Air M4</h2>
        <p className='mt-2 text-gray-600'>Rp 18.999.000</p>
      </div>

      
      <div className='w-64 rounded-xl bg-white p-5 shadow-lg'>
        <h2 className='text-xl font-bold'>Lenovo LOQ 15</h2>
        <p className='mt-2 text-gray-600'>Rp 16.499.000</p>
      </div>


      <div className='w-64 rounded-xl bg-white p-5 shadow-lg'>
        <h2 className='text-xl font-bold'>Acer Nitro V15</h2>
        <p className='mt-2 text-gray-600'>Rp 14.999.000</p>
      </div>
    </section>
  );
}

export default Card;
