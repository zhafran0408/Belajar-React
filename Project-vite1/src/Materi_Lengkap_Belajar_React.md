# 📚 Catatan Belajar React — Materi Dasar Sampai React Router

Dokumen ini adalah kumpulan materi yang sudah dipelajari. Tujuannya bukan hanya menghafal kode, tetapi memahami **logika di balik React** menggunakan bahasa sederhana dan analogi.

---

# 🧠 1. Gambaran Besar React

React adalah library JavaScript untuk membuat tampilan website menggunakan **Component**.

Bayangkan website adalah sebuah rumah:

```text
Website
├── Navbar
├── Hero
├── Content
└── Footer
```

Daripada membuat semuanya menjadi satu file besar, React membaginya menjadi beberapa bagian kecil yang disebut **Component**.

Contoh:

```jsx
function Hero() {
  return <h1>Selamat Datang</h1>;
}

export default Hero;
```

Lalu dipakai di file lain:

```jsx
import Hero from "./Hero";

function App() {
  return <Hero />;
}
```

## Analogi Component

Component seperti **bagian-bagian LEGO**.

Satu component = satu bagian.

```text
Navbar = LEGO 1
Hero   = LEGO 2
Footer = LEGO 3
```

Kemudian semuanya digabung menjadi website.

---

# 🔄 2. Apa Itu Render?

Render adalah proses React menampilkan component ke layar.

Contoh:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

React membaca component lalu menampilkan:

```text
Hello
```

Kalau data berubah, React dapat melakukan **render ulang** agar tampilan sesuai dengan data terbaru.

Contoh:

```text
angka awal = 0
↓
user klik +
↓
angka menjadi 1
↓
React render ulang
↓
layar menampilkan 1
```

---

# 📦 3. Apa Itu useState?

`useState` digunakan untuk menyimpan data yang dapat berubah.

Contoh:

```jsx
import { useState } from "react";

const [angka, setAngka] = useState(0);
```

Ada tiga bagian penting:

```text
angka
↓
data yang disimpan

setAngka
↓
fungsi untuk mengubah data

0
↓
nilai awal
```

## Analogi useState

Bayangkan ada sebuah kotak penyimpanan:

```text
┌──────────┐
│ angka: 0 │
└──────────┘
```

React memberi kita:

```text
angka
↓
untuk melihat isi kotak

setAngka
↓
untuk mengganti isi kotak
```

Contoh:

```jsx
setAngka(10);
```

Hasil:

```text
sebelumnya = 0
setAngka(10)
↓
sekarang = 10
```

## Kenapa tidak langsung?

Jangan:

```jsx
angka = 10;
```

Gunakan:

```jsx
setAngka(10);
```

Karena React perlu tahu bahwa data berubah.

Analogi:

```text
angka = 10
↓
React tidak diberi laporan resmi

setAngka(10)
↓
React tahu data berubah
↓
React bisa render ulang
```

---

# ➕ 4. Simple Counter dengan useState

Contoh:

```jsx
import { useState } from "react";

function SimpleCounter() {
  const [angka, setAngka] = useState(0);

  function tambah() {
    setAngka(angka + 1);
  }

  return (
    <div>
      <h1>{angka}</h1>

      <button onClick={tambah}>
        Tambah
      </button>
    </div>
  );
}

export default SimpleCounter;
```

Alurnya:

```text
angka = 0
↓
user klik tombol
↓
tambah() berjalan
↓
setAngka(1)
↓
React render ulang
↓
layar berubah menjadi 1
```

## Cara dengan prev

Lebih aman:

```jsx
setAngka((prev) => prev + 1);
```

`prev` berarti nilai sebelumnya.

```text
prev = 5
↓
prev + 1
↓
6
```

---

# ➖ 5. Menambah dan Mengurangi Angka

Kita tidak perlu membuat banyak fungsi.

```jsx
function ubahAngka(jumlah) {
  setAngka((prev) => prev + jumlah);
}
```

Kemudian:

```jsx
<button onClick={() => ubahAngka(1)}>
  +1
</button>

<button onClick={() => ubahAngka(2)}>
  +2
</button>

<button onClick={() => ubahAngka(-1)}>
  -1
</button>
```

## Analogi

Fungsi `ubahAngka` seperti mesin kalkulator:

```text
ubahAngka(1)
→ tambah 1

ubahAngka(2)
→ tambah 2

ubahAngka(-1)
→ kurang 1
```

Satu mesin bisa menerima banyak perintah.

---

# 👤 6. Mengubah Data dengan useState

Contoh:

```jsx
const [nama, setNama] = useState("Ali");
```

Nilai awal:

```text
nama = Ali
```

Kemudian:

```jsx
function ubahNama() {
  setNama("Fulan");
}
```

Saat fungsi dijalankan:

```text
Ali
↓
setNama("Fulan")
↓
Fulan
↓
React render ulang
↓
layar menampilkan Fulan
```

---

# 🎯 7. Apa Itu useRef?

`useRef` digunakan untuk menyimpan referensi atau mengambil akses langsung ke elemen HTML.

Contoh:

```jsx
import { useRef } from "react";

const inputRef = useRef();
```

Kemudian:

```jsx
<input ref={inputRef} />
```

Sekarang `inputRef` terhubung dengan input.

Untuk mengambil input:

```jsx
inputRef.current
```

Untuk mengambil nilai:

```jsx
inputRef.current.value
```

## Analogi useRef

Bayangkan:

```text
input HTML = sebuah rumah
useRef = alamat rumah
```

Kode:

```jsx
const inputRef = useRef();
```

Artinya kita membuat tempat untuk menyimpan alamat.

Lalu:

```jsx
<input ref={inputRef} />
```

Artinya:

```text
"React, simpan alamat input ini ke inputRef"
```

Sekarang:

```text
inputRef
↓
.current
↓
elemen input
↓
.value
↓
isi input
```

---

# 🟦 8. Basic useRef untuk Focus

Contoh:

```jsx
import { useRef } from "react";

function Basic() {
  const inputRef = useRef();

  function fokusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={fokusInput}>
        Focus
      </button>
    </div>
  );
}

export default Basic;
```

Alur:

```text
inputRef
↓
terhubung ke input
↓
tombol diklik
↓
fokusInput() berjalan
↓
inputRef.current.focus()
↓
cursor masuk ke input
```

## Analogi

```text
input = orang

useRef = nomor telepon

inputRef.current.focus()
↓
React langsung menghubungi input tersebut
↓
"Hei, kamu fokus!"
```

---

# 🆚 9. Perbedaan useState dan useRef

## useState

Digunakan untuk data yang jika berubah ingin memengaruhi tampilan.

```jsx
const [nama, setNama] = useState("");
```

Perubahan:

```text
data berubah
↓
React render ulang
↓
tampilan bisa berubah
```

## useRef

Digunakan untuk referensi atau data yang tidak harus menyebabkan render ulang.

```jsx
const inputRef = useRef();
```

Perubahan:

```text
ref berubah
↓
tidak otomatis render ulang
```

## Analogi

```text
useState = papan pengumuman

Jika isi berubah:
semua orang melihat informasi baru


useRef = catatan pribadi

Isinya bisa berubah,
tetapi tidak perlu memperbarui seluruh tampilan
```

---

# 📝 10. Login Form Biasa

Contoh kerangka:

```jsx
function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form dikirim");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
      />

      <input
        type="password"
        name="password"
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
```

## Apa itu form?

`form` adalah wadah untuk mengumpulkan input user.

```text
Form
├── Username
├── Password
└── Submit
```

## Apa fungsi type submit?

```jsx
<button type="submit">
```

Artinya tombol ini mengirim form.

## Kenapa pakai preventDefault?

```jsx
event.preventDefault();
```

Secara default browser akan melakukan refresh ketika form dikirim.

Dengan:

```jsx
event.preventDefault();
```

kita berkata:

```text
"Browser, jangan refresh dulu."
```

---

# 📌 11. LoginFormWithUseRef

Pada form ini kita menggunakan `useRef`.

Contoh:

```jsx
import { useRef } from "react";

function LoginFormWithUseRef() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={usernameRef}
        type="text"
        name="username"
      />

      <input
        ref={passwordRef}
        type="password"
        name="password"
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginFormWithUseRef;
```

## Logika

```text
usernameRef
↓
terhubung ke input username

passwordRef
↓
terhubung ke input password
```

Saat submit:

```text
usernameRef.current.value
↓
mengambil isi username

passwordRef.current.value
↓
mengambil isi password
```

## Analogi

Bayangkan setiap input memiliki alamat:

```text
Input Username
↓
alamat disimpan di usernameRef

Input Password
↓
alamat disimpan di passwordRef
```

Saat submit, kita langsung mendatangi alamat input dan mengambil isinya.

---

# 🎮 12. LoginFormControlled

Controlled Form adalah form yang nilainya dikontrol oleh React menggunakan `useState`.

Contoh:

```jsx
import { useState } from "react";

function LoginFormControlled() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        value={username}
        onChange={(event) =>
          setUsername(event.target.value)
        }
      />

      <input
        type="password"
        value={password}
        onChange={(event) =>
          setPassword(event.target.value)
        }
      />

      <p>Username: {username}</p>

      <p>Password: {password}</p>
    </div>
  );
}
```

## Logika onChange

Ketika user mengetik:

```text
User menekan keyboard
↓
onChange berjalan
↓
event.target.value mengambil tulisan terbaru
↓
setUsername menyimpan ke state
↓
React render ulang
↓
nilai baru tampil
```

Contoh:

```text
User mengetik: Z

state username = "Z"
↓
React render ulang
↓
layar menampilkan Z
```

Kemudian:

```text
User mengetik: Zha

state username = "Zha"
↓
React render ulang
↓
layar menampilkan Zha
```

Disebut **Controlled** karena React mengontrol nilai input melalui state.

---

# 🆚 13. Login Biasa vs useRef vs Controlled

## Login Form biasa

```text
Fokus:
struktur form
submit
preventDefault
```

## Login dengan useRef

```text
Fokus:
mengambil nilai input langsung
menggunakan .current.value
```

## Login Controlled

```text
Fokus:
input dikontrol oleh state
nilai berubah langsung
React render ulang
```

Tabel:

| Jenis | Cara mengambil data | Render ulang saat mengetik |
|---|---|---|
| Login biasa | Form/input biasa | Tidak memakai state |
| useRef | `ref.current.value` | Tidak karena perubahan ref |
| Controlled | `useState` | Ya |

---

# ⚡ 14. Apa Itu useEffect?

`useEffect` digunakan untuk menjalankan pekerjaan tambahan setelah component dirender.

Contoh:

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component berjalan");
}, []);
```

Pekerjaan yang sering dilakukan useEffect:

- Menjalankan timer.
- Mengambil data API.
- Mengubah judul halaman.
- Menambahkan event listener.
- Membersihkan timer.
- Merespons perubahan state.

---

# 👀 15. Dependency Array

Contoh:

```jsx
useEffect(() => {
  console.log("Angka berubah");
}, [angka]);
```

Bagian:

```jsx
[angka]
```

disebut dependency array.

Artinya:

```text
useEffect memperhatikan angka
```

Ketika:

```text
angka berubah
↓
useEffect berjalan
```

## Perbedaan []

```jsx
useEffect(() => {
  console.log("Jalan saat awal");
}, []);
```

```text
[]
↓
berjalan saat component pertama kali tampil
```

Sedangkan:

```jsx
useEffect(() => {
  console.log("Jalan ketika angka berubah");
}, [angka]);
```

```text
[angka]
↓
berjalan saat awal dan ketika angka berubah
```

---

# ⏰ 16. setTimeout di useEffect

Contoh:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("3 detik");
  }, 3000);
}, [angka]);
```

Artinya:

```text
angka berubah
↓
timer dimulai
↓
menunggu 3 detik
↓
kode dijalankan
```

`3000` adalah milidetik.

```text
1000 ms = 1 detik
3000 ms = 3 detik
```

---

# 🧹 17. Cleanup useEffect

Contoh:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Jalan");
  }, 3000);

  return () => {
    clearTimeout(timer);
  };
}, [angka]);
```

Cleanup:

```jsx
return () => {
  clearTimeout(timer);
};
```

Fungsinya membersihkan pekerjaan sebelumnya.

## Analogi

Bayangkan ada alarm.

```text
Angka berubah
↓
alarm 3 detik dibuat

Angka berubah lagi sebelum selesai
↓
alarm lama dibatalkan
↓
alarm baru dibuat
```

Itulah fungsi cleanup.

---

# 🌐 18. Apa Itu React Router?

React Router digunakan untuk mengatur perpindahan halaman berdasarkan URL.

Contoh website:

```text
/
↓
Home

/about
↓
About
```

Di React, kita bisa berpindah halaman tanpa melakukan refresh penuh.

---

# 🛣️ 19. BrowserRouter

Biasanya diletakkan di `main.jsx`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

`BrowserRouter` adalah pembungkus yang mengaktifkan sistem routing.

Analogi:

```text
BrowserRouter = jalan raya

Route = alamat tujuan

Link = kendaraan
```

---

# 📍 20. Routes dan Route

Contoh:

```jsx
import {
  Routes,
  Route,
} from "react-router-dom";

<Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/about"
    element={<About />}
  />
</Routes>
```

Artinya:

```text
URL /
↓
Home

URL /about
↓
About
```

## Analogi

```text
Route adalah penjaga alamat

Jika URL:
/
↓
tampilkan Home

Jika URL:
/about
↓
tampilkan About
```

---

# 🔗 21. Link

Jangan memakai:

```html
<a href="/about">
```

Untuk navigasi internal React Router, gunakan:

```jsx
import { Link } from "react-router-dom";

<Link to="/about">
  About
</Link>
```

Analogi:

```text
<a>
↓
seperti keluar rumah lalu masuk lagi

Link
↓
berpindah ruangan di dalam rumah
```

---

# ✨ 22. NavLink

`NavLink` hampir sama dengan `Link`, tetapi dapat mengetahui halaman mana yang sedang aktif.

Contoh:

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  About
</NavLink>
```

Jika user sedang berada di:

```text
/about
```

maka:

```text
isActive = true
```

Kita bisa memberi styling berbeda.

---

# 🧭 23. Struktur Folder React Router

Contoh:

```text
src
│
├── main.jsx
├── App.jsx
│
└── Reactrouter
    ├── Home.jsx
    ├── About.jsx
    ├── Hero.jsx
    └── Navbar.jsx
```

Fungsi:

```text
main.jsx
↓
menyalakan BrowserRouter

App.jsx
↓
menentukan Route

Navbar.jsx
↓
tempat Link atau NavLink

Home.jsx
↓
halaman Home

About.jsx
↓
halaman About

Hero.jsx
↓
bagian tampilan Hero
```

---

# 🧩 24. Hubungan Semua Materi

```text
React
│
├── Component
│   └── Membagi UI menjadi bagian kecil
│
├── useState
│   └── Menyimpan data yang memengaruhi tampilan
│
├── useRef
│   └── Mengambil referensi elemen atau menyimpan data tanpa render ulang
│
├── Form
│   ├── Login biasa
│   ├── Login + useRef
│   └── Controlled Form
│
├── useEffect
│   └── Menjalankan pekerjaan tambahan
│
└── React Router
    └── Mengatur perpindahan halaman berdasarkan URL
```

---

# 🎯 25. Kesimpulan Paling Gampang

## useState

> "Saya punya data yang berubah dan perubahan itu harus memengaruhi layar."

```text
Data berubah
↓
React render ulang
```

## useRef

> "Saya ingin menyimpan referensi atau mengakses sesuatu tanpa harus render ulang."

```text
ref.current
↓
akses elemen atau nilai
```

## useEffect

> "Ketika sesuatu terjadi, saya ingin menjalankan pekerjaan tambahan."

```text
state berubah
↓
effect berjalan
```

## Form biasa

> "Saya ingin mengumpulkan dan mengirim data."

```text
input
↓
submit
↓
handleSubmit
```

## Login + useRef

> "Saya ingin mengambil isi input langsung."

```text
inputRef.current.value
```

## Controlled Form

> "Saya ingin React mengontrol nilai input."

```text
user mengetik
↓
onChange
↓
setState
↓
React render ulang
```

## React Router

> "Saya ingin berpindah halaman berdasarkan URL tanpa refresh penuh."

```text
Link
↓
URL berubah
↓
Route mencocokkan alamat
↓
Component ditampilkan
```

---

# 🚀 Peta Alur Belajar

```text
Component
↓
Props
↓
useState
↓
useRef
↓
Form
├── Form biasa
├── Form + useRef
└── Controlled Form
↓
useEffect
↓
React Router
```

Saran: jangan hanya membaca. Coba ubah satu bagian kode, jalankan, lalu lihat apa yang berubah. Dengan begitu kamu belajar bukan hanya menghafal kode, tetapi memahami hubungan antara **data, function, event, render, dan component**.
