import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Package, Wallet, Users, BarChart3, Check, X, Menu } from "lucide-react";
import { useState } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import heroVideoAsset from "@/assets/hero.mp4.asset.json";
import mechanicAsset from "@/assets/mechanic-engine.png.asset.json";
import receptionAsset from "@/assets/customer-keys.png.asset.json";
const mechanicImg = mechanicAsset.url;
const receptionImg = receptionAsset.url;
import customerImg from "@/assets/customer.jpg";
import teamImg from "@/assets/team.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Super Fast — ERP para oficinas mecânicas" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const NAV = [
  { label: "Soluções", href: "#solucao" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Clientes", href: "#clientes" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

const BENEFITS = [
  "Ordens de Serviço",
  "Estoque Inteligente",
  "Financeiro Completo",
  "Atendimento Profissional",
  "Relatórios e Indicadores",
];

const PROBLEMS = [
  "Ordens de serviço perdidas",
  "Falta de controle financeiro",
  "Estoque desorganizado",
  "Retrabalho e desperdício de horas",
  "Clientes sem histórico completo",
  "Falta de indicadores de gestão",
];

const FEATURES = [
  { icon: ClipboardList, title: "Ordens de Serviço", body: "Controle cada etapa do atendimento — da entrada do veículo à entrega ao cliente." },
  { icon: Package, title: "Estoque Inteligente", body: "Acompanhe entradas, saídas e reposição de peças em tempo real, sem planilhas." },
  { icon: Wallet, title: "Financeiro Completo", body: "Fluxo de caixa, contas a pagar e a receber, e resultados reais da operação." },
  { icon: Users, title: "Atendimento Profissional", body: "Histórico completo do cliente e do veículo em uma única tela consultável." },
  { icon: BarChart3, title: "Relatórios e Indicadores", body: "Decisões baseadas em dados: produtividade, faturamento e margem por serviço." },
];

const TESTIMONIALS = [
  {
    quote:
      "Em 90 dias organizamos toda a oficina. As ordens de serviço deixaram de sumir e o financeiro finalmente fecha no fim do mês.",
    name: "Rafael Almeida",
    role: "Proprietário — Almeida Auto Center",
    img: t1,
  },
  {
    quote:
      "O histórico completo do cliente mudou o nosso atendimento. Hoje o cliente sente confiança porque sabemos exatamente o que o carro dele precisa.",
    name: "Carolina Meireles",
    role: "Gerente — Meireles Mecânica",
    img: t2,
  },
  {
    quote:
      "Passamos a enxergar a margem de cada serviço. Isso mudou a forma como precificamos e como negociamos com fornecedores.",
    name: "José Henrique",
    role: "Sócio-diretor — JH Motors",
    img: t3,
  },
];

function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 shrink-0">
      <img src={logoAsset.url} alt="Super Fast" className={`${className} w-auto invert`} />
      <span className="font-display text-xl tracking-tight text-ink leading-none">
        SUPER<span className="text-primary">FAST</span>
      </span>
    </a>
  );
}

function CtaButton({
  children,
  variant = "primary",
  className = "",
  href = "#contato",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  href?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-ink",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    ghost: "border border-white/30 text-white hover:bg-white hover:text-ink",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div id="top" className="bg-white text-ink">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container-x flex h-20 items-center justify-between">
          <div className="[&_span]:!text-white [&_img]:invert-0">
            <Logo />
          </div>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-white/85 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <CtaButton variant="primary">Solicitar Demonstração</CtaButton>
          </div>
          <button
            aria-label="Menu"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-ink/95 backdrop-blur border-t border-white/10">
            <div className="container-x py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-white/90 text-base"
                >
                  {n.label}
                </a>
              ))}
              <CtaButton variant="primary" className="mt-2 w-fit">
                Solicitar Demonstração
              </CtaButton>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoAsset.url}
          autoPlay
          muted
          loop
          playsInline
          poster={mechanicImg}
        />
        {/* Bright, cinematic gradient — keeps video crystal clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-24 pt-32 md:justify-center md:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-white/70">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow">ERP para oficinas mecânicas</span>
            </div>
            <h1 className="text-white text-[13vw] leading-[0.92] md:text-[6.5rem] lg:text-[7.5rem] font-normal">
              A OFICINA
              <br />
              NÃO PARA.
              <br />
              <span className="text-primary">SUA GESTÃO</span>
              <br />
              <span className="text-primary">TAMBÉM NÃO.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              Controle ordens de serviço, estoque, financeiro, atendimento e
              indicadores em um único sistema desenvolvido para a rotina real
              das oficinas.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton variant="primary">Solicitar Demonstração</CtaButton>
              <a
                href="#solucao"
                className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80 hover:text-white border-b border-white/30 pb-1"
              >
                Ver funcionalidades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BAR */}
      <section className="bg-primary text-white">
        <div className="container-x">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-white/15 border-y border-white/15">
            {BENEFITS.map((b, i) => (
              <li
                key={b}
                className="flex items-center gap-3 py-5 px-4 md:px-6 first:pl-0 last:pr-0"
              >
                <span className="font-display text-xl text-white/40 w-8 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-sm md:text-[15px] font-semibold uppercase tracking-wide leading-tight">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3 text-ink-soft">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">O problema</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl">
              Problemas que
              <br />
              custam tempo
              <br />
              e dinheiro
              <br />
              <span className="text-primary">todos os dias.</span>
            </h2>
            <p className="mt-8 max-w-md text-ink-soft leading-relaxed">
              Toda oficina cresce até o ponto em que o improviso começa a
              atrapalhar. É aí que os números param de fechar e os clientes
              começam a perceber.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={mechanicImg}
                alt="Mecânico trabalhando no motor"
                loading="lazy"
                width={1280}
                height={960}
                className="col-span-2 h-72 md:h-96 w-full object-cover"
              />
              <img
                src={receptionImg}
                alt="Atendimento profissional na recepção"
                loading="lazy"
                width={1280}
                height={960}
                className="h-48 md:h-64 w-full object-cover"
              />
              <img
                src={teamImg}
                alt="Equipe analisando serviço"
                loading="lazy"
                width={1280}
                height={960}
                className="h-48 md:h-64 w-full object-cover"
              />
            </div>
            <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
              {PROBLEMS.map((p, i) => (
                <li key={p} className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5">
                  <span className="font-display text-primary text-lg">0{i + 1}</span>
                  <span className="text-lg md:text-xl font-semibold text-ink">{p}</span>
                  <X className="h-5 w-5 text-primary shrink-0" strokeWidth={2.5} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solucao" className="bg-ink text-white py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3 text-white/60">
                <div className="h-px w-10 bg-primary" />
                <span className="eyebrow text-primary">A solução</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-white">
                Um sistema completo.
                <br />
                <span className="text-primary">Simples</span> e{" "}
                <span className="text-primary">poderoso</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-white/70 leading-relaxed text-lg">
                A Super Fast conecta todos os setores da oficina para que você
                tenha mais controle, produtividade e previsibilidade na
                operação — do orçamento à entrega, do estoque ao caixa.
              </p>
            </div>
          </div>

          <div id="funcionalidades" className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group bg-ink p-8 md:p-10 flex flex-col gap-6 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center bg-primary/10 text-primary">
                    <f.icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-[1.75rem] text-white leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
            <div className="bg-primary p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <span className="eyebrow text-white/80">Tudo em um só lugar</span>
                <h3 className="mt-3 text-2xl md:text-[1.75rem] text-white leading-tight">
                  Uma plataforma. Toda a oficina sob controle.
                </h3>
              </div>
              <a
                href="#contato"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                Ver demonstração <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid gap-10 md:grid-cols-3 border-t border-white/10 pt-12">
            {[
              { k: "+2.400", v: "Oficinas ativas em todo o país" },
              { k: "38%", v: "Aumento médio de produtividade no 1º ano" },
              { k: "24/7", v: "Suporte especializado em oficinas mecânicas" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-6xl md:text-7xl text-white leading-none">
                  {s.k}
                </div>
                <div className="mt-4 text-white/60 max-w-xs">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="clientes" className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <div className="mb-5 flex items-center gap-3 text-ink-soft">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Clientes</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl">
              Oficinas que transformaram
              <br />
              sua gestão com a{" "}
              <span className="text-primary">Super Fast.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="group border border-hairline hover:border-ink transition-colors bg-white flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white h-10 w-10 grid place-items-center">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-6 flex-1">
                  <p className="text-lg leading-snug text-ink">"{t.quote}"</p>
                  <div className="mt-auto pt-6 border-t border-hairline">
                    <div className="font-semibold text-ink">{t.name}</div>
                    <div className="text-sm text-ink-soft mt-0.5">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contato" className="relative overflow-hidden bg-ink text-white">
        <img
          src={customerImg}
          alt=""
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative container-x py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Fale com a Super Fast</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white">
              Sua oficina merece
              <br />
              mais <span className="text-primary">controle</span>
              <br />
              e mais <span className="text-primary">resultado.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-white/75 leading-relaxed">
              Solicite uma demonstração e descubra como a Super Fast pode
              simplificar a gestão da sua operação — sem burocracia, sem
              complicação.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton variant="primary">Solicitar Demonstração</CtaButton>
              <CtaButton variant="ghost" href="#solucao">
                Ver funcionalidades
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/60 border-t border-white/10">
        <div className="container-x py-14 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="Super Fast" className="h-8 w-auto" />
              <span className="font-display text-lg text-white">
                SUPER<span className="text-primary">FAST</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              O ERP feito para a rotina real das oficinas mecânicas brasileiras.
            </p>
          </div>
          {[
            { t: "Produto", i: ["Ordens de Serviço", "Estoque", "Financeiro", "Relatórios"] },
            { t: "Empresa", i: ["Sobre", "Clientes", "Planos", "Contato"] },
            { t: "Suporte", i: ["Central de Ajuda", "Treinamentos", "Status", "WhatsApp"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="eyebrow text-white mb-4">{c.t}</div>
              <ul className="space-y-2.5 text-sm">
                {c.i.map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-white transition-colors">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40">
            <div>© {new Date().getFullYear()} Super Fast. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Termos</a>
              <a href="#" className="hover:text-white">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
