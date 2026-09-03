import { MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const testimonials = [
  {
    name: "React Student",
    text: "Context API membuat data sharing antar component jauh lebih mudah dipahami.",
  },
  {
    name: "Frontend Learner",
    text: "ReactLearn membantu melihat hubungan antara konsep dan implementasinya.",
  },
];

function Testimoni() {
  return (
    <div>
      <SectionTitle
        eyebrow="Showcase"
        title="Testimoni"
        description="Contoh reusable card component menggunakan data dari array."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
      <MessageCircle size={21} className="text-violet-400" />

      <p className="mt-5 text-sm leading-7 text-zinc-400">"{text}"</p>

      <p className="mt-5 text-sm font-semibold">{name}</p>
    </div>
  );
}

export default Testimoni;