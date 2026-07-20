import { benefits } from "@/data/benefits";

export default function BenefitsSection() {
  return (
    <section className="bg-[#F1F1EE] py-28 text-ink md:py-36">
      <div className="container-x mx-auto max-w-[1280px]">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow text-primary">Resultado</span>
          <h2 className="mt-5 text-4xl md:text-6xl">O que muda na oficina.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[20px] border border-black/[0.06] bg-[#FAFAF8] p-8 shadow-[0_20px_55px_-48px_rgba(17,17,17,0.6)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/35"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full border border-primary/20 bg-primary/[0.06] text-primary">
                <benefit.icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h3 className="mt-8 text-2xl text-ink">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}