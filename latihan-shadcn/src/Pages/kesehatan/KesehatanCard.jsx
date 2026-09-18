import {
  HeartPulse,
  UserRound,
} from "lucide-react";

function KesehatanCard({
  nama = "Nama Santri",
  kelas = "Kelas",
  kondisi = "Sehat",
  catatan = "Tidak ada catatan",
}) {
  return (
    <div className="rounded-2xl border bg-background p-4 shadow-sm">

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              size-10
              items-center
              justify-center
              rounded-full
              bg-primary/10
              text-primary
            "
          >
            <UserRound size={18} />
          </div>

          <div>
            <h3 className="text-sm font-bold">
              {nama}
            </h3>

            <p className="text-[10px] text-muted-foreground">
              {kelas}
            </p>
          </div>

        </div>

        <div
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            bg-primary/10
            px-2.5
            py-1
            text-[10px]
            font-semibold
            text-primary
          "
        >
          <HeartPulse size={12} />

          {kondisi}
        </div>

      </div>

      <div className="mt-4 rounded-xl bg-muted/40 p-3">
        <p className="text-[10px] font-semibold">
          Catatan
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          {catatan}
        </p>
      </div>

    </div>
  );
}

export default KesehatanCard;