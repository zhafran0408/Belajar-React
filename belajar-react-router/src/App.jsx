/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profil from "./pages/Profil";
import NotFound from "./pages/NotFound";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-slate-50 font-sans text-slate-900'>
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profil' element={<Profil />} />
            <Route path='/user/:id' element={<UserDetail />} />
            {/* 2. Jalur wildcard '*' menangkap semua URL yang tidak terdaftar */}
            <Route path='*' element={<NotFound />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
