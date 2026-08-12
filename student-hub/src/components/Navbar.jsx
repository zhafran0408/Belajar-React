/** @format */

import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-white'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-5 py-4'>
        <div>
          <h1 className='text-xl font-bold text-gray-900'>StudentHub</h1>

          <p className='hidden text-xs text-gray-500 sm:block'>
            Student Management
          </p>
        </div>

        <div className='hidden items-center gap-6 md:flex'>
          <a href='#home' className='text-sm text-gray-600 hover:text-gray-900'>
            Home
          </a>

          <a
            href='#about'
            className='text-sm text-gray-600 hover:text-gray-900'>
            About
          </a>

          <a
            href='#students'
            className='text-sm text-gray-600 hover:text-gray-900'>
            Students
          </a>
        </div>
        <Button asChild>
          <a href='#students'>Students</a>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
