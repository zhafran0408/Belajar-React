# 🧪 Latihan `useContext` 1

## 🎯 Tujuan

Buat aplikasi dengan struktur Component berikut:

```text
AppUseContext (path berada di src/AppUseContext.jsx)
 │
 ├── Navbar (folder TugasUseContext)
 │
 └── Profile (folder TugasUseContext)
```

---

## 1. State berada di `AppUseContext`

Component `AppUseContext` memiliki state:

```jsx
const [nama, setNama] = useState("Fulan");
```

`nama` digunakan sebagai data utama nama santri.

---

## 2. `Navbar` menampilkan nama

Component `Navbar` harus menampilkan:

```text
Selamat datang, Fulan
```

---

## 3. `Profile` menampilkan nama

Component `Profile` harus menampilkan:

```text
Nama Santri: Fulan
```

---

## 4. Nama harus dapat berubah

Ketika nilai `nama` berubah, maka **Navbar dan Profile harus ikut berubah**.

Contohnya:

```text
Sebelum:

Selamat datang, Fulan

Nama Santri: Fulan
```

Kemudian nama berubah menjadi **Ali** (mengubahnya manual / tanpa tombol):

```text
Sesudah:

Selamat datang, Ali

Nama Santri: Ali
```

---

# 📌 Ketentuan

1. Gunakan `useState`.
2. Gunakan `createContext`.
3. Gunakan `useContext`.
4. `nama` disimpan di Component `AppUseContext`.
5. `Navbar` mengambil `nama` menggunakan `useContext`.
6. `Profile` mengambil `nama` menggunakan `useContext`.
7. **Jangan mengirim `nama` menggunakan Props.**

---

# 🎯 Target

Data `nama` dari `AppUseContext` dapat digunakan oleh beberapa Component melalui **Context**.

```text
             AppUseContext
                   │
             useState(nama)
                   │
                   ↓
               Context
                   │
          ┌────────┴────────┐
          ↓                 ↓
       Navbar             Profile
          ↓                 ↓
       Fulan              Fulan
```

Jika nama berubah:

```text
              AppUseContext
                   │
              nama = "Ali"
                   │
                   ↓
               Context
                   │
          ┌────────┴────────┐
          ↓                 ↓
       Navbar             Profile
          ↓                 ↓
         Ali                Ali
```

---


