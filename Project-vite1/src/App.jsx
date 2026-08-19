/** @format */

import { useState } from "react";

import { Button } from "./components/ui/button";

import Profil from "./components/Profil";
import AppUseState from "./AppUseState";
import AppUseRef from "./AppUseRef";

// Pastikan nama folder ('Form' vs 'form') & nama file persis sama dengan yang ada di VS Code
import LoginForm from "./Form/Loginform";
import LoginFormWithUseReff from "./Form/LoginFormWithUseReff";
import LoginFormControlled from "./Form/LoginFormControlled";

export default function App() {
  const [page, setPage] = useState("home");

  // =========================
  // HALAMAN PROFIL
  // =========================
  if (page === "profil") {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <Button onClick={() => setPage("home")}>Kembali</Button>
        <div className="mt-4">
          <Profil />
        </div>
      </div>
    );
  }

  // =========================
  // HALAMAN USESTATE
  // =========================
  if (page === "useState") {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <Button onClick={() => setPage("home")}>Kembali</Button>
        <div className="mt-4">
          <AppUseState />
        </div>
      </div>
    );
  }

  // =========================
  // HALAMAN USEREF
  // =========================
  if (page === "useRef") {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <Button onClick={() => setPage("home")}>Kembali</Button>
        <div className="mt-4">
          <AppUseRef />
        </div>
      </div>
    );
  }

  // =========================
  // HALAMAN LOGIN FORM
  // =========================
  if (page === "login") {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <Button onClick={() => setPage("home")}>Kembali</Button>
        <div className="mt-4">
          <LoginForm />
        </div>
      </div>
    );
  }

  // =========================
  // HALAMAN LOGIN + USEREF
  // =========================
  if (page === "loginUseReff") {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <Button onClick={() => setPage("home")}>Kembali</Button>
        <div className="mt-4">
          <LoginFormWithUseReff />
        </div>
      </div>
    );
  }

  // =========================
  // HALAMAN LOGIN CONTROLLED
  // =========================
  if (page === "loginControlled") {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <Button onClick={() => setPage("home")}>Kembali</Button>
        <div className="mt-4">
          <LoginFormControlled />
        </div>
      </div>
    );
  }

  // =========================
  // HALAMAN UTAMA (HOME)
  // =========================
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="mb-5 text-2xl font-bold">Latihan React</h1>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setPage("profil")}>Profil</Button>
        <Button onClick={() => setPage("useState")}>useState</Button>
        <Button onClick={() => setPage("useRef")}>useRef</Button>
        <Button onClick={() => setPage("login")}>Login Form</Button>
        <Button onClick={() => setPage("loginUseReff")}>Login + useRef</Button>
        <Button onClick={() => setPage("loginControlled")}>
          Login Controlled
        </Button>
      </div>
    </div>
  );
}
