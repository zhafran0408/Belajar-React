/** @format */

import profile from "../assets/profile.jpg";

import {
  RiMenuLine,
  RiSearchLine,
  RiMicLine,
  RiNotification3Line,
  RiVideoAddLine,
} from "react-icons/ri";

import { FaYoutube } from "react-icons/fa";
import { MdApps } from "react-icons/md";

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between bg-[#0f0f0f] px-4 py-3'>
      {/* Left */}
      <div className='flex items-center gap-4'>
        <RiMenuLine className='cursor-pointer text-2xl text-white' />

        <div className='flex cursor-pointer items-center gap-2'>
          <FaYoutube className='text-3xl text-red-600' />

          <h1 className='hidden text-xl font-bold text-white sm:block'>
            YouTube
          </h1>
        </div>
      </div>

      {/* Center */}
      <div className='hidden flex-1 items-center justify-center px-6 md:flex'>
        <input
          type='text'
          placeholder='Search'
          className='w-full max-w-xl rounded-l-full border border-gray-700 bg-[#121212] px-5 py-2 text-white outline-none'
        />

        <button className='rounded-r-full border border-l-0 border-gray-700 bg-[#222222] px-6 py-2 hover:bg-[#303030]'>
          <RiSearchLine className='text-xl text-white' />
        </button>

        <button className='ml-3 rounded-full bg-[#222222] p-3 hover:bg-[#303030]'>
          <RiMicLine className='text-xl text-white' />
        </button>
      </div>

      
      <div className='md:hidden'>
        <RiSearchLine className='cursor-pointer text-2xl text-white' />
      </div>

      
      <div className='flex items-center gap-5'>
        <RiVideoAddLine className='hidden cursor-pointer text-2xl text-white sm:block' />

        <MdApps className='hidden cursor-pointer text-2xl text-white sm:block' />

        <RiNotification3Line className='cursor-pointer text-2xl text-white' />

        <img
          src={profile}
          alt='Profile'
          className='h-9 w-9 cursor-pointer rounded-full object-cover'
        />
      </div>
    </nav>
  );
}

export default Navbar;
