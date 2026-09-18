import { useState } from "react";

import {
  GraduationCap,
  UserPlus,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  getUsers,
  login,
  saveUsers,
} from "@/lib/auth";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    role: "siswa",
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

    const emailExists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        form.email.toLowerCase()
    );

    if (emailExists) {
      setError(
        "Email tersebut sudah digunakan."
      );

      return;
    }

    const newUser = {
      id: Date.now(),
      nama: form.nama.trim(),
      email: form.email.trim(),
      password: form.password,
      role: form.role,
    };

    const updatedUsers = [
      ...users,
      newUser,
    ];

    saveUsers(updatedUsers);
    login(newUser);

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
            Buat Akun
          </h1>

          <p className="mt-1 text-xs text-muted-foreground">
            Daftar untuk menggunakan SantriApp
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

          {/* NAMA */}

          <div className="space-y-2">
            <label className="text-xs font-semibold">
              Nama
            </label>

            <Input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama lengkap"
              className="h-11 rounded-xl"
              required
            />
          </div>

          {/* EMAIL */}

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

          {/* PASSWORD */}

          <div className="space-y-2">
            <label className="text-xs font-semibold">
              Password
            </label>

            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Buat password"
              className="h-11 rounded-xl"
              required
            />
          </div>

          {/* ROLE */}

          <div className="space-y-2">
            <label className="text-xs font-semibold">
              Daftar sebagai
            </label>

            <div className="grid grid-cols-3 gap-2">

              {[
                {
                  value: "siswa",
                  label: "Siswa",
                },
                {
                  value: "wali",
                  label: "Wali",
                },
                {
                  value: "admin",
                  label: "Admin",
                },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() =>
                    setForm((previous) => ({
                      ...previous,
                      role: item.value,
                    }))
                  }
                  className={`
                    rounded-xl
                    border
                    px-2
                    py-3
                    text-xs
                    font-medium
                    transition-all
                    ${
                      form.role === item.value
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "bg-background hover:bg-muted"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}

            </div>
          </div>

          {/* SUBMIT */}

          <Button
            type="submit"
            className="h-11 w-full rounded-xl"
          >
            <UserPlus size={16} />

            Buat Akun
          </Button>

        </form>

        {/* LOGIN */}

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;