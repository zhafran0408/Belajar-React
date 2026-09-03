import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers3,
  Route,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const concepts = [
  {
    title: "React Fundamentals",
    description: "JSX, Component, Import, Export dan struktur dasar React.",
    icon: Code2,
    progress: 85,
  },
  {
    title: "State & Effect",
    description: "useState, Controlled Input, useEffect dan Cleanup.",
    icon: Zap,
    progress: 75,
  },
  {
    title: "Props & Data Flow",
    description: "Props, passing function dan Props Drilling.",
    icon: Layers3,
    progress: 70,
  },
  {
    title: "React Router",
    description: "Routing, Dynamic Route, Layout, Outlet dan useParams.",
    icon: Route,
    progress: 65,
  },
];

function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-14">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300">
            <Sparkles size={14} />
            React Learning Portal
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Learn React.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Build Something.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            ReactLearn adalah playground pembelajaran React yang mengubah
            materi yang sudah dipelajari menjadi interface interaktif.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/context"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
            >
              Mulai Explore
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10"
            >
              <BookOpen size={17} />
              Tentang Project
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
              Learning Path
            </p>

            <h2 className="text-2xl font-bold">Konsep yang sudah dipelajari</h2>
          </div>

          <span className="hidden text-sm text-zinc-600 sm:block">
            React journey
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {concepts.map((concept) => {
            const Icon = concept.icon;

            return (
              <div
                key={concept.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={21} />
                  </div>

                  <CheckCircle2 size={19} className="text-violet-500/60" />
                </div>

                <h3 className="font-semibold">{concept.title}</h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">
                  {concept.description}
                </p>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-zinc-600">Progress</span>
                    <span className="text-violet-400">
                      {concept.progress}%
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-violet-500 transition-all"
                      style={{ width: `${concept.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-7 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Keep Learning
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Jangan cuma hafal syntax.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
              Pahami bagaimana data bergerak dari Parent ke Child dan bagaimana
              state dibagikan antar component.
            </p>
          </div>

          <Link
            to="/context/example"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/20"
          >
            Explore Context
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;