import { Code2, Heart, Lightbulb, Target } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

function About() {
  const values = [
    {
      title: "Learn by Building",
      description:
        "Materi React tidak hanya dibaca, tetapi langsung diterapkan ke dalam component.",
      icon: Code2,
    },
    {
      title: "Understand the Concept",
      description:
        "Setiap fitur dibuat supaya hubungan antar konsep React tetap mudah dilihat.",
      icon: Lightbulb,
    },
    {
      title: "Build Consistently",
      description:
        "Project berkembang sedikit demi sedikit mengikuti materi yang dipelajari.",
      icon: Target,
    },
  ];

  return (
    <div>
      <SectionTitle
        eyebrow="About ReactLearn"
        title="Belajar React dengan cara membangun."
        description="ReactLearn adalah project pembelajaran yang menggabungkan materi React dengan interface modern."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {values.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-violet-500/30"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Icon size={21} />
              </div>

              <h3 className="font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-7">
        <div className="flex items-center gap-3">
          <Heart size={20} className="text-violet-400" />
          <h2 className="font-semibold">Tujuan Project</h2>
        </div>

        <p className="mt-4 max-w-3xl leading-7 text-zinc-500">
          Project ini dibuat sebagai dokumentasi perjalanan belajar React.
          Setiap component, state, props, routing, dan context bukan sekadar
          dibuat untuk terlihat bagus, tetapi juga untuk menunjukkan bagaimana
          konsep React bekerja di aplikasi nyata.
        </p>
      </div>
    </div>
  );
}

export default About;