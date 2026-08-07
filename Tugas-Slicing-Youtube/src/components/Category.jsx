/** @format */

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Category() {
  return (
    <section className='sticky top-2 z-40 bg-black px-4 py-3'>
      <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
        <button className='rounded-full bg-gray-800 p-2 text-white'>
          <RiArrowLeftSLine />
        </button>

        <button className='whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-black'>
          All
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          Music
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          Gaming
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          React
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          JavaScript
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          Tailwind CSS
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          Programming
        </button>

        <button className='whitespace-nowrap rounded-lg bg-[#272727] px-4 py-2 text-sm text-white'>
          Live
        </button>

        <button className='rounded-full bg-[#272727] p-2 text-white'>
          <RiArrowRightSLine />
        </button>
      </div>
    </section>
  );
}

export default Category;
