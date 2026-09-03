import { Layers3, Network, Share2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

function AboutContext() {
  const concepts = [
    {
      icon: Network,
      title: "Provider",
      description: "Tempat shared state diberikan kepada component tree.",
    },
    {
      icon: Share2,
      title: "Shared State",
      description: "Data dapat digunakan oleh beberapa component.",
    },
    {
      icon: Layers3,
      title: "useContext",
      description: "Hook untuk membaca value dari Context.",
    },
  ];

  return (
    <div>
      <SectionTitle
        eyebrow="Context API"
        title="Bagaimana Context bekerja?"
        description="Tiga bagian penting yang perlu dipahami saat menggunakan Context API."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {concepts.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/2/5 p-6"
            >
              <Icon size={22} className="text-violet-400" />

              <h3 className="mt-5 font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutContext;