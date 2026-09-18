import useStore from "./store";

function DashboardAdmin() {
  const count = useStore((state) => state.count);
  const tambah = useStore((state) => state.tambah);
  const kurang = useStore((state) => state.kurang);
  const reset = useStore((state) => state.reset);

  return (
    <div>
      <h1>Dashboard Admin</h1>

      <h2>Angka: {count}</h2>

      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default DashboardAdmin;