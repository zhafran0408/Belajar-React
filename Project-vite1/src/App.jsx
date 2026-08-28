/** @format */

import { useState } from "react";

import { Button } from "./components/ui/button";

import Profil from "./components/Profil";
import AppUseState from "./AppUseState";
import AppUseRef from "./AppUseRef";

import LoginForm from "./Form/Loginform";
import LoginFormWithUseReff from "./Form/LoginFormWithUseReff";
import LoginFormControlled from "./Form/LoginFormControlled";

import RadixTest from "./headless_ui_component.md/Radixtest";

import SimpleCounter from "./UseEffect/SimpleCounter";

// =========================
// DAFTAR HALAMAN
// =========================

const PAGES = {
  profil: {
    label: "Profil",
    component: () => <Profil />,
  },

  useState: {
    label: "useState",
    component: () => <AppUseState />,
  },

  useRef: {
    label: "useRef",
    component: () => <AppUseRef />,
  },

  login: {
    label: "Login Form",
    component: () => <LoginForm />,
  },

  loginUseReff: {
    label: "Login + useRef",
    component: () => <LoginFormWithUseReff />,
  },

  loginControlled: {
    label: "Login Controlled",
    component: () => <LoginFormControlled />,
  },

  useEffect: {
    label: "useEffect",
    component: () => <SimpleCounter />,
  },

  radix: {
    label: "Radix UI",
    component: () => <RadixTest />,
  },
};

// =========================
// APP
// =========================

export default function App() {
  const [page, setPage] = useState("home");

  // =========================
  // HALAMAN HOME
  // =========================

  if (page === "home") {
    return (
      <div className='min-h-screen bg-gray-100 p-5'>
        <h1 className='mb-5 text-2xl font-bold'>
          Latihan React
        </h1>

        <div className='flex flex-wrap gap-2'>
          {Object.entries(PAGES).map(([key, value]) => (
            <Button
              key={key}
              onClick={() => setPage(key)}>
              {value.label}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  // =========================
  // AMBIL HALAMAN
  // =========================

  const currentPage = PAGES[page];

  if (!currentPage) {
    return null;
  }

  // =========================
  // HALAMAN YANG DIPILIH
  // =========================

  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      {/* Tombol kembali */}
      <Button
        className='mb-4'
        onClick={() => setPage("home")}>
        Kembali ke Home
      </Button>

      {/* Konten halaman */}
      <div>{currentPage.component()}</div>
    </div>
  );
}
