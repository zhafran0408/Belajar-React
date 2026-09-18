import { useState } from "react";

import {
  GraduationCap,
  LogIn,
  UserRound,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  getUsers,
  login,
} from "@/lib/auth";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    const users = getUsers();

    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
          form.email.toLowerCase() &&
        item.password === form.password
    );

    if (!user) {
      setError(
        "Email atau password tidak sesuai."
      );

      return;
    }

    login(user);

    navigate("/");
    window.location.reload();
  }

  function handleGuest() {
    localStorage.removeItem(
      "santriapp-current-user"
    );

    navigate("/");
    window.location.reload();
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center justify-center">

      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">

        {/* HEADER */}

        <div className="mb-6 text-center">

          <div
            className="
              mx-auto
              mb-4
              flex
              size-12
              items-center
              justify-center
              rounded-2xl
              bg-primary
              text-primary-foreground
            "
          >
            <GraduationCap size={24} />
          </div>

          <h1 className="text-xl font-bold">
            Selamat Datang
          </h1>

          <p className="mt-1 text-xs text-muted-foreground">
            Masuk ke SantriApp
          </p>

        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-4 rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-xs text-destructive">
            {error}
          </div>
        )}

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div className="space-y-2">
            <label className="text-xs font-semibold">
              Email
            </label>

            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              className="h-11 rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold">
              Password
            </label>

            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="h-11 rounded-xl"
              required
            />
          </div>

          <Button
            type="submit"
            className="h-11 w-full rounded-xl"
          >
            <LogIn size={16} />

            Masuk
          </Button>

        </form>

        {/* DIVIDER */}

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />

          <span className="text-[10px] text-muted-foreground">
            atau
          </span>

          <div className="h-px flex-1 bg-border" />
        </div>

        {/* GUEST */}

        <Button
          type="button"
          variant="outline"
          onClick={handleGuest}
          className="h-11 w-full rounded-xl"
        >
          <UserRound size={16} />

          Masuk sebagai Tamu
        </Button>

        {/* SIGNUP */}

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Belum punya akun?{" "}
          <Link
            to="/signup"
            className="font-semibold text-primary hover:underline"
          >
            Daftar sekarang
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;