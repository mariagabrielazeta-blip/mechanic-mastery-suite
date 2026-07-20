import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { moduleExperiences } from "@/data/modules";

export default function ModulesExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = moduleExperiences[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-28 text-ink md:py-36">
      <div className="container-x mx-auto max-w-[1280px]">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow text-primary">Capacidade do sistema</span>
          <h2 className="mt-5 text-4xl md:text-6xl">As áreas da oficina a trabalhar juntas.</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#ECECE8] shadow-[0_28px_80px_-60px_rgba(17,17,17,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(209,18,18,0.10),transparent_32%)]" />
            <img
              key={active.id}
              src={active.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover animate-[sf-soft-fade_500ms_ease-out]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/12 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                {active.accent}
              </div>
              <h3 className="max-w-xl text-4xl text-white md:text-5xl">{active.title}</h3>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                {active.description}
              </p>
            </div>
          </div>

          <div className="space-y-3" role="listbox" aria-label="Módulos do Super Fast">
            {moduleExperiences.map((module, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={module.id}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center justify-between rounded-[20px] border px-6 py-5 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    selected
                      ? "-translate-y-1 border-primary/45 bg-[#FAFAF8] shadow-[0_18px_45px_-38px_rgba(17,17,17,0.65)]"
                      : "border-black/[0.06] bg-transparent hover:-translate-y-1 hover:border-primary/35 hover:bg-[#FAFAF8]"
                  }`}
                >
                  <span>
                    <span className="block text-xl font-semibold text-ink">{module.name}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{module.title}</span>
                  </span>
                  <span
                    className={`ml-5 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
                      selected
                        ? "border-primary bg-primary text-white"
                        : "border-black/10 text-ink-soft group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}