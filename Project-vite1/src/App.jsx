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

// 1. Mapping halaman ke dalam objek
const PAGES = {
  profil: { label: "Profil", component: () => <Profil /> },
  useState: { label: "useState", component: () => <AppUseState /> },
  useRef: { label: "useRef", component: () => <AppUseRef /> },
  login: { label: "Login Form", component: () => <LoginForm /> },
  loginUseReff: {
    label: "Login + useRef",
    component: () => <LoginFormWithUseReff />,
  },
  loginControlled: {
    label: "Login Controlled",
    component: () => <LoginFormControlled />,
  },
  // Kirimkan fungsi setPage ke prop onBack milik RadixTest
  radix: {
    label: "Radix UI",
    component: (setPage) => <RadixTest onBack={() => setPage("home")} />,
    standalone: true,
  },
};

export default function App() {
  const [page, setPage] = useState("home");

  // 2. Jika di Halaman Utama (Home)
  if (page === "home") {
    return (
      <div className='min-h-screen bg-gray-100 p-5'>
        <h1 className='mb-5 text-2xl font-bold'>Latihan React</h1>

        <div className='flex flex-wrap gap-2'>
          {Object.entries(PAGES).map(([key, { label }]) => (
            <Button key={key} onClick={() => setPage(key)}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  const currentPage = PAGES[page];

  // Fallback jika key page tidak valid
  if (!currentPage) return null;

  // 3. Render khusus jika komponen standalone
  if (currentPage.standalone) {
    return currentPage.component(setPage);
  }

  // 4. Wrapper Reusable untuk seluruh sub-halaman
  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      <Button onClick={() => setPage("home")}>Kembali</Button>
      <div className='mt-4'>{currentPage.component(setPage)}</div>
    </div>
  );
}
