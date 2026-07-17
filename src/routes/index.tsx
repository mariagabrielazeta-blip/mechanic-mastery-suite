import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Plus,
  Minus,
  Gauge,
  Timer,
  ShieldCheck,
  LineChart,
  Layers3,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import heroVideoAsset from "@/assets/hero.mp4.asset.json";
import mechanicAsset from "@/assets/mechanic-engine.png.asset.json";
const mechanicImg = mechanicAsset.url;
import ctaMechanicAsset from "@/assets/cta-mechanic.png.asset.json";
const ctaMechanicImg = ctaMechanicAsset.url;
import SolutionsPanel from "@/components/SolutionsPanel";

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
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Implantação", href: "#implantacao" },
  { label: "Contato", href: "#contato" },
];

/* ---------- HELPERS ---------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const done = () => {
      setLoaded(true);
      timer = setTimeout(() => setHidden(true), 700);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done);
    return () => {
      window.removeEventListener("load", done);
      clearTimeout(timer);
    };
  }, []);
  if (hidden) return null;
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] grid place-items-center bg-black transition-opacity duration-700 ease-out ${
        loaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img src={logoAsset.url} alt="Super Fast" className="preloader-logo h-20 w-auto" />
    </div>
  );
}

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

/* ---------- DATA ---------- */

const DORES = [
  { n: "01", t: "Retrabalho", d: "Serviço volta porque nada ficou registrado." },
  { n: "02", t: "Peças esquecidas", d: "A oficina para esperando o que devia estar em estoque." },
  { n: "03", t: "Falha de comunicação", d: "Cliente sem retorno, equipe sem clareza do próximo passo." },
  { n: "04", t: "Perda de tempo", d: "Horas produtivas dissolvidas em planilhas e post-its." },
  { n: "05", t: "Sem controle", d: "Você lidera no escuro, sem saber onde o dinheiro está." },
];

const BENEFICIOS = [
  {
    icon: Workflow,
    tag: "Operação",
    t: "Fluxo único, do check-in à entrega",
    d: "Cada veículo entra em um trilho — checklist, OS, execução e faturamento conversando em tempo real.",
  },
  {
    icon: Layers3,
    tag: "Estoque",
    t: "Peças sob controle absoluto",
    d: "Entradas, saídas, reservas por OS e alertas de mínimo. Zero compra emergencial, zero peça esquecida.",
  },
  {
    icon: LineChart,
    tag: "Gestão",
    t: "Indicadores que decidem por você",
    d: "Margem, ticket médio, tempo de execução e produtividade por mecânico — no painel, atualizados agora.",
  },
  {
    icon: ShieldCheck,
    tag: "Financeiro",
    t: "Caixa previsível, fim do achismo",
    d: "Contas a pagar e a receber conectadas à operação. Você olha o fluxo e sabe exatamente o que vem.",
  },
];

const METRICAS = [
  { v: 42, s: "%", l: "Mais ordens de serviço concluídas por semana" },
  { v: 3, s: "x", l: "Mais velocidade no fechamento de orçamento" },
  { v: 68, s: "%", l: "Redução de peças paradas em estoque" },
  { v: 12, s: "h", l: "Economizadas por gestor por semana" },
];

const DEPOIMENTOS = [
  {
    q: "A oficina parou de trabalhar apagando incêndio. Hoje eu sei exatamente o que está acontecendo em cada elevador.",
    n: "Ricardo M.",
    r: "Proprietário · Auto Center Premium",
  },
  {
    q: "Reduzimos o tempo de orçamento de horas para minutos. O cliente aprova ali, e a peça já é reservada.",
    n: "Juliana S.",
    r: "Gerente · Mecânica Diesel Sul",
  },
  {
    q: "Enxerguei margem que eu não sabia que existia. Em três meses, mudou a forma como eu decido.",
    n: "Anderson P.",
    r: "Diretor · Rede 3 unidades",
  },
];

const TIMELINE = [
  { t: "Diagnóstico", d: "Mapeamos a sua rotina, gargalos e particularidades da operação." },
  { t: "Configuração", d: "O sistema é modelado ao seu fluxo — não o contrário." },
  { t: "Treinamento", d: "Sua equipe aprende no ritmo real da oficina, com quem entende do dia a dia." },
  { t: "Go-live", d: "Você entra em operação com suporte próximo, ajustando o que precisar." },
  { t: "Evolução", d: "Atualizações contínuas e um time acompanhando o crescimento do seu negócio." },
];

const FAQ = [
  { q: "Funciona para oficinas pequenas e grandes?", a: "Sim. O Super Fast se adapta desde oficinas com 1 elevador até redes multi-unidade, mantendo o mesmo padrão de controle." },
  { q: "Quanto tempo leva a implantação?", a: "A maior parte das oficinas está operando em 2 a 4 semanas, com treinamento, migração e go-live acompanhados pelo nosso time." },
  { q: "Preciso ter conhecimento técnico?", a: "Não. A interface foi desenhada para o dia a dia da oficina. Recepção, mecânico e gestor operam sem fricção." },
  { q: "Meus dados ficam seguros?", a: "Sim. Infraestrutura em nuvem com backups automáticos, criptografia e controle granular de permissões por usuário." },
  { q: "Emite nota fiscal?", a: "Emissão de NF-e e NFS-e integrada, com regras fiscais aplicadas conforme o seu regime tributário." },
];

/* ---------- PAGE ---------- */

function Home() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div id="top" className="bg-white text-ink">
      <Preloader />

      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container-x flex h-20 items-center justify-between">
          <div className="[&_span]:!text-white [&_img]:invert-0">
            <Logo />
          </div>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-sm font-medium text-white/85 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <CtaButton variant="primary">Solicitar Demonstração</CtaButton>
          </div>
          <button aria-label="Menu" className="lg:hidden text-white p-2" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-ink/95 backdrop-blur border-t border-white/10">
            <div className="container-x py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-white/90 text-base">
                  {n.label}
                </a>
              ))}
              <CtaButton variant="primary" className="mt-2 w-fit">Solicitar Demonstração</CtaButton>
            </div>
          </div>
        )}
      </header>

      {/* HERO — INTOCÁVEL */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoAsset.url}
          autoPlay muted loop playsInline
          poster={mechanicImg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
        <div className="relative flex h-full flex-col items-center justify-end pb-32 text-center">
          <span className="eyebrow text-white/80 mb-4">ERP para oficinas mecânicas</span>
          <h1 className="text-white text-4xl md:text-6xl font-normal tracking-[0.12em] [text-shadow:0_4px_16px_rgba(0,0,0,0.45)]">
            SUPER FAST
          </h1>
        </div>
        <a href="#proxima-secao" aria-label="Rolar para baixo" className="scroll-arrow z-10 text-white transition-opacity hover:opacity-70">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9L12 17L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>
      <span id="proxima-secao" aria-hidden="true" />

      {/* MAPA INTERATIVO — INTOCÁVEL */}
      <div id="solucoes" className="border-t border-hairline">
        <SolutionsPanel />
      </div>

      {/* DORES — storytelling premium, coluna dupla */}
      <section id="dores" className="relative bg-white py-24 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.24 27), transparent 65%)" }}
        />
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="lg:sticky lg:top-28 self-start">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="eyebrow text-primary">O que trava o crescimento</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
                O caos custa caro.
                <br />
                <span className="text-primary">Todo dia.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Não é falta de esforço. É excesso de improviso. Cada informação
                perdida vira retrabalho, peça esquecida ou cliente sem retorno.
              </p>
            </div>
            <ol className="relative border-l border-hairline">
              {DORES.map((d, i) => (
                <li key={d.n} className="group relative pl-8 pb-10 last:pb-0">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-white ring-4 ring-primary/15 border border-primary transition-transform duration-300 group-hover:scale-125" />
                  <Reveal delay={i * 80}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl text-primary/60">{d.n}</span>
                      <h3 className="font-display text-2xl md:text-3xl">{d.t}</h3>
                    </div>
                    <p className="mt-2 max-w-xl text-ink-soft leading-relaxed">{d.d}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS — painéis executivos amplos */}
      <section id="beneficios" className="bg-[#0a0a0a] text-white py-24 md:py-36">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Vantagem competitiva</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Quatro alavancas.
              <br />
              <span className="text-primary">Uma oficina em outro nível.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 border border-white/10">
            {BENEFICIOS.map((b, i) => (
              <Reveal key={b.t} delay={i * 90}>
                <div className="group relative h-full bg-[#0a0a0a] p-10 md:p-12 transition-colors duration-300 hover:bg-[#111]">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-white/50">{b.tag}</span>
                    <b.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 font-display text-3xl md:text-4xl leading-[0.95] text-white max-w-md">
                    {b.t}
                  </h3>
                  <p className="mt-4 max-w-md text-white/60 leading-relaxed">{b.d}</p>
                  <div className="mt-10 flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-[0.14em] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Ver como funciona <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS — painel executivo com contadores */}
      <section id="resultados" className="relative bg-white py-24 md:py-36">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="eyebrow text-primary">Resultados</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl">
                Performance medida
                <br />
                <span className="text-primary">em dias, não em anos.</span>
              </h2>
            </div>
            <p className="max-w-sm text-ink-soft leading-relaxed">
              Indicadores reais de oficinas operando com Super Fast em regime
              contínuo, comparados ao trimestre anterior à implantação.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-hairline border border-hairline md:grid-cols-2 lg:grid-cols-4">
            {METRICAS.map((m, i) => (
              <Reveal key={m.l} delay={i * 80}>
                <div className="group h-full bg-white p-8 md:p-10 transition-colors duration-300 hover:bg-[#fafafa]">
                  <div className="flex items-center gap-2 text-primary">
                    <Gauge className="h-4 w-4" />
                    <span className="eyebrow">Indicador {i + 1}</span>
                  </div>
                  <div className="mt-6 font-display text-6xl md:text-7xl leading-none tracking-tight">
                    <Counter to={m.v} suffix={m.s} />
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-ink-soft">{m.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-soft">
            <Timer className="h-4 w-4 text-primary" />
            Média das últimas 120 oficinas em operação
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL — mural moderno com foto */}
      <section id="prova" className="relative bg-[#f5f5f7] py-24 md:py-36 overflow-hidden">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={mechanicImg}
                  alt="Mecânico Super Fast em operação"
                  className="h-[520px] w-full object-cover grayscale contrast-110 transition-all duration-700 hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="eyebrow text-white/70">Operação real</div>
                    <div className="font-display text-2xl mt-1">Oficina em ritmo Super Fast</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-4xl leading-none">4.9</div>
                    <div className="eyebrow text-white/70 mt-1">NPS clientes</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="eyebrow text-primary">Prova social</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl">
                Quem lidera oficinas de alta performance
                <br />
                <span className="text-primary">confia no Super Fast.</span>
              </h2>
              <div className="mt-12 space-y-6">
                {DEPOIMENTOS.map((t, i) => (
                  <Reveal key={t.n} delay={i * 90}>
                    <figure className="group border-l-2 border-primary/30 pl-6 py-2 transition-colors hover:border-primary">
                      <blockquote className="font-display text-xl md:text-2xl leading-tight text-ink">
                        “{t.q}”
                      </blockquote>
                      <figcaption className="mt-4 flex items-center gap-3 text-sm text-ink-soft">
                        <span className="h-8 w-8 rounded-full bg-ink text-white grid place-items-center font-display text-sm">
                          {t.n.charAt(0)}
                        </span>
                        <span><strong className="text-ink">{t.n}</strong> · {t.r}</span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLANTAÇÃO — timeline vertical elegante */}
      <section id="implantacao" className="relative bg-white py-24 md:py-36">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Como você entra em operação</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Uma implantação conduzida
              <br />
              <span className="text-primary">passo a passo, com você.</span>
            </h2>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-1/2 top-0 h-full w-px bg-hairline hidden md:block" />
            <ul className="space-y-16 md:space-y-24">
              {TIMELINE.map((s, i) => (
                <li key={s.t} className={`grid md:grid-cols-2 md:gap-16 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <Reveal>
                    <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}>
                      <span className="font-display text-6xl md:text-7xl text-primary/15 leading-none">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl mt-2">{s.t}</h3>
                      <p className="mt-4 text-ink-soft leading-relaxed max-w-md md:ml-auto">
                        {s.d}
                      </p>
                    </div>
                  </Reveal>
                  <div className="hidden md:flex justify-center relative">
                    <span className="h-4 w-4 rounded-full bg-white border-2 border-primary shadow-[0_0_0_6px_rgba(220,38,38,0.08)]" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#fafafa] py-24 md:py-36 border-y border-hairline">
        <div className="container-x mx-auto max-w-[1000px]">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="eyebrow text-primary">Dúvidas frequentes</span>
              </div>
              <h2 className="text-4xl md:text-5xl">
                O que você
                <br />
                <span className="text-primary">precisa saber.</span>
              </h2>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-sm">
                Não achou o que procurava? Fale com o nosso time e tire suas
                dúvidas em uma conversa direta.
              </p>
            </div>
            <div>
              <ul className="border-t border-hairline">
                {FAQ.map((f, i) => {
                  const isOpen = faqOpen === i;
                  return (
                    <li key={f.q} className="border-b border-hairline">
                      <button
                        onClick={() => setFaqOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                      >
                        <span className="font-display text-xl md:text-2xl leading-tight">{f.q}</span>
                        <span className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-hairline bg-white text-ink transition-colors group-hover:border-primary">
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <p className="text-ink-soft leading-relaxed max-w-2xl">{f.a}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL — tela inteira, escuro, cinematográfico */}
      <section id="contato" className="relative min-h-[100svh] overflow-hidden bg-black text-white flex items-center">
        <img
          src={ctaMechanicImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.4))]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/40" />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.24 27), transparent 65%)" }}
        />

        <div className="relative container-x mx-auto max-w-[1200px] py-32 md:py-40 w-full">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Super Fast</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
              <span className="block">CONTROLE.</span>
              <span className="block">PROCESSOS.</span>
              <span className="block text-primary">RESULTADOS.</span>
            </h2>

            <p className="mt-10 max-w-xl text-xl md:text-2xl text-white/70 leading-snug font-light">
              Gestão inteligente para oficinas de alta performance.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-4">
              <CtaButton variant="primary" href="https://wa.me/5551984277489">
                Quero conhecer o Super Fast
              </CtaButton>
              <CtaButton variant="ghost" href="#solucoes">
                Ver a plataforma
              </CtaButton>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-2xl">
              {[
                { k: "Suporte", v: "Time dedicado" },
                { k: "Implantação", v: "2 a 4 semanas" },
                { k: "Uptime", v: "99,9%" },
              ].map((s) => (
                <div key={s.k} className="border-t border-white/15 pt-4">
                  <div className="eyebrow text-white/50">{s.k}</div>
                  <div className="mt-1 font-display text-xl text-white">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/60 border-t border-white/10">
        <div className="container-x py-20 grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="[&_span]:!text-white [&_img]:invert-0">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Gestão inteligente para oficinas mecânicas de alta performance.
              Controle, processos e resultado — em uma única plataforma.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, title: "E-mail", text: "contato@sfast.com.br", href: "mailto:contato@sfast.com.br" },
              { icon: MessageCircle, title: "WhatsApp", text: "(+55) (51) 9.8427.7489", href: "https://wa.me/5551984277489" },
              { icon: Phone, title: "Telefone", text: "(+55) (51) 3330.7755", href: "tel:+555133307755" },
              { icon: MapPin, title: "Endereço", text: "Rua 24 de Outubro, 1299/501 · Porto Alegre/RS", href: undefined },
            ].map((c) => {
              const inner = (
                <>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-primary/50 text-primary">
                    <c.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 eyebrow text-white">{c.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{c.text}</p>
                </>
              );
              const cardClass = "flex flex-col items-start rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-colors";
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`${cardClass} hover:border-primary/50 hover:bg-white/[0.06]`}
                >
                  {inner}
                </a>
              ) : (
                <div key={c.title} className={cardClass}>{inner}</div>
              );
            })}
          </div>
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
