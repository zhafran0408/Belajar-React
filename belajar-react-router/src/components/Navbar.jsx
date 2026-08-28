/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-indigo-600 text-white shadow-sm"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <nav className='bg-white border-b border-slate-200 sticky top-0 z-50'>
      <div className='max-w-5xl mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Brand / Logo */}
        <span className='font-bold text-xl text-slate-800'>ReactApp</span>

        {/* Navigation Links */}
        <div className='flex items-center gap-2'>
          <NavLink to='/' className={linkStyle}>
            Home
          </NavLink>
          <NavLink to='/about' className={linkStyle}>
            About
          </NavLink>
          {/* PEMBENAHAN DI SINI: to='/profil' */}
          <NavLink to='/profil' className={linkStyle}>
            Profil
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
