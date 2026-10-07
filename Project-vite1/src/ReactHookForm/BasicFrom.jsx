/** @format */

import { useForm } from "react-hook-form";

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const nama = watch("nama");
  const email = watch("email");
  const umur = watch("umur");
  const jenisKelamin = watch("jenisKelamin");
  const ekstrakurikuler = watch("ekstrakurikuler");

  const onSubmit = (data) => {
    clearErrors("ekstrakurikuler");

    console.log("Data Form:", data);
  };

  const onInvalid = () => {
    const ekskul = watch("ekstrakurikuler");

    if (!ekskul || ekskul.length === 0) {
      setError("ekstrakurikuler", {
        type: "manual",
        message: "Pilih minimal satu ekstrakurikuler",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Form Data Siswa</h1>

        <p className="mb-6 text-sm text-gray-500">
          Isi semua data dengan lengkap.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="space-y-5"
        >
          {/* Nama */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nama
            </label>

            <input
              type="text"
              {...register("nama", {
                required: "Nama wajib diisi",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
              placeholder="Masukkan nama"
            />

            {errors.nama && (
              <p className="mt-1 text-sm text-red-500">
                {errors.nama.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email wajib diisi",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
              placeholder="example@gmail.com"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Umur */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Umur
            </label>

            <input
              type="number"
              {...register("umur", {
                required: "Umur wajib diisi",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
              placeholder="Masukkan umur"
            />

            {errors.umur && (
              <p className="mt-1 text-sm text-red-500">
                {errors.umur.message}
              </p>
            )}
          </div>

          {/* Jenis Kelamin */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Jenis Kelamin
            </label>

            <select
              {...register("jenisKelamin", {
                required: "Jenis kelamin wajib dipilih",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>

            {errors.jenisKelamin && (
              <p className="mt-1 text-sm text-red-500">
                {errors.jenisKelamin.message}
              </p>
            )}
          </div>

          {/* Ekstrakurikuler */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Ekstrakurikuler
            </label>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Basket"
                  {...register("ekstrakurikuler")}
                />
                Basket
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Futsal"
                  {...register("ekstrakurikuler")}
                />
                Futsal
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Coding"
                  {...register("ekstrakurikuler")}
                />
                Coding
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Photography"
                  {...register("ekstrakurikuler")}
                />
                Photography
              </label>
            </div>

            {errors.ekstrakurikuler && (
              <p className="mt-1 text-sm text-red-500">
                {errors.ekstrakurikuler.message}
              </p>
            )}
          </div>

          {/* Persetujuan */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("persetujuan", {
                  required: "Kamu harus menyetujui data",
                })}
              />

              <span className="text-sm">
                Saya menyetujui data yang saya masukkan
              </span>
            </label>

            {errors.persetujuan && (
              <p className="mt-1 text-sm text-red-500">
                {errors.persetujuan.message}
              </p>
            )}
          </div>

          {/* Hasil watch */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-sm font-semibold">
              Data yang sedang dipantau:
            </p>

            <p className="text-sm text-gray-600">
              Nama: {nama || "-"}
            </p>

            <p className="text-sm text-gray-600">
              Email: {email || "-"}
            </p>

            <p className="text-sm text-gray-600">
              Umur: {umur || "-"}
            </p>

            <p className="text-sm text-gray-600">
              Jenis Kelamin: {jenisKelamin || "-"}
            </p>

            <p className="text-sm text-gray-600">
              Ekstrakurikuler:{" "}
              {ekstrakurikuler?.length
                ? ekstrakurikuler.join(", ")
                : "-"}
            </p>
          </div>

          {/* Status Form */}
          <div
            className={`rounded-lg border p-4 text-sm ${
              isValid
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-gray-200 bg-gray-50 text-gray-500"
            }`}
          >
            {isValid
              ? "✓ Semua data sudah lengkap. Form siap dikirim."
              : "Lengkapi semua data terlebih dahulu."}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full rounded-lg px-4 py-3 font-medium text-white transition ${
              isValid
                ? "cursor-pointer bg-gray-900 hover:bg-black"
                : "cursor-not-allowed bg-gray-900 opacity-40"
            }`}
          >
            {isValid ? "Simpan Data" : "Lengkapi Form"}
          </button>
        </form>
      </div>
    </div>
  );
}