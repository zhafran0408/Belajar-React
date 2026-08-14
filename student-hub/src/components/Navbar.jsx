/** @format */

import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <>
      <nav className='sticky top-0 z-50 border-b border-gray-200 bg-white'>
        <div className='mx-auto flex max-w-5xl items-center justify-between px-5 py-4'>
          {/* Logo */}
          <a href='#home' className='text-xl font-bold text-gray-900'>
            Student<span className='text-blue-600'>App</span>
          </a>

          {/* Desktop Menu */}
          <div className='hidden items-center gap-8 md:flex'>
            <a
              href='#home'
              className='font-medium text-gray-600 transition hover:text-blue-600'>
              Home
            </a>

            <a
              href='#students'
              className='font-medium text-gray-600 transition hover:text-blue-600'>
              Students
            </a>

            <a
              href='#about'
              className='font-medium text-gray-600 transition hover:text-blue-600'>
              About
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleSidebar}
            className='relative z-60 flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-800 transition hover:bg-gray-100 md:hidden'>
            <span
              className={`absolute transition-all duration-300 ${
                isOpen ?
                  "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
              }`}>
              <RiMenu3Line />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                isOpen ?
                  "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
              }`}>
              <RiCloseLine />
            </span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ?
            "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-72 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className='mt-16 flex flex-col gap-2'>
          <a
            href='#home'
            onClick={closeSidebar}
            className='rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600'>
            Home
          </a>

          <a
            href='#students'
            onClick={closeSidebar}
            className='rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600'>
            Students
          </a>

          <a
            href='#about'
            onClick={closeSidebar}
            className='rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600'>
            About
          </a>
        </div>
      </aside>
    </>
  );
}
