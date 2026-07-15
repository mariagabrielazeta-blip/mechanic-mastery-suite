import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Package, Wallet, Users, BarChart3, X, Menu, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import heroVideoAsset from "@/assets/hero.mp4.asset.json";
import mechanicAsset from "@/assets/mechanic-engine.png.asset.json";
const mechanicImg = mechanicAsset.url;
import ctaMechanicAsset from "@/assets/cta-mechanic.png.asset.json";
const ctaMechanicImg = ctaMechanicAsset.url;
import dashboardImg from "@/assets/dashboard.jpg";

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
      { threshold: 0.25 },
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

function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const done = () => {
      setLoaded(true);
      timer = setTimeout(() => setHidden(true), 700);
    };
    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done);
    }
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
      <img
        src={logoAsset.url}
        alt="Super Fast"
        className="preloader-logo h-20 w-auto"
      />
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

function Home() {
  const [open, setOpen] = useState(false);
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

      {/* HERO — vídeo cristalino, texto minimalista (estilo Ferrari) */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoAsset.url}
          autoPlay
          muted
          loop
          playsInline
          poster={mechanicImg}
        />
        {/* Overlay sutil só para dar contraste ao texto branco */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />

        <div className="relative flex h-full flex-col items-center justify-end pb-32 text-center">
          <span className="eyebrow text-white/80 mb-4">
            ERP para oficinas mecânicas
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-normal tracking-[0.12em] [text-shadow:0_4px_16px_rgba(0,0,0,0.45)]">
            SUPER FAST
          </h1>
        </div>

        <a
          href="#proxima-secao"
          aria-label="Rolar para baixo"
          className="scroll-arrow z-10 text-white transition-opacity hover:opacity-70"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9L12 17L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* INTRO — bloco de texto principal, logo abaixo do vídeo */}
      <section id="proxima-secao" className="bg-ink text-white py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-white/70">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow">ERP para oficinas mecânicas</span>
            </div>
            <h2 className="text-white text-6xl md:text-8xl lg:text-[7rem] leading-[0.92]">
              A OFICINA
              <br />
              NÃO PARA.
              <br />
              <span className="text-primary">SUA GESTÃO</span>
              <br />
              <span className="text-primary">TAMBÉM NÃO.</span>
            </h2>
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

      {/* BENEFITS BAR — carrossel infinito */}
      <section className="bg-primary text-white overflow-hidden border-y border-white/15">
        <div className="marquee-track py-5">
          {[...BENEFITS, ...BENEFITS].map((b, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 px-8 md:px-12">
              <span className="font-display text-xl text-white/40">
                0{(i % BENEFITS.length) + 1}
              </span>
              <span className="whitespace-nowrap text-sm md:text-[15px] font-semibold uppercase tracking-wide">
                {b}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section id="problemas" className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <div className="mb-5 flex items-center gap-3 text-ink-soft">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">O problema</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl">
              Problemas que
              <br />
              custam tempo e dinheiro
              <br />
              <span className="text-primary">todos os dias.</span>
            </h2>
            <p className="mt-8 max-w-md text-ink-soft leading-relaxed">
              Toda oficina cresce até o ponto em que o improviso começa a
              atrapalhar. É aí que os números param de fechar e os clientes
              começam a perceber.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <img
                src={dashboardImg}
                alt="Sistema Super Fast em um tablet e um monitor com o dashboard"
                loading="lazy"
                width={1600}
                height={790}
                className="w-full rounded-lg object-cover"
              />
            </Reveal>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {PROBLEMS.map((p, i) => (
                <li key={p}>
                  <Reveal
                    delay={i * 100}
                    className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5"
                  >
                    <span className="font-display text-primary text-lg">0{i + 1}</span>
                    <span className="text-lg md:text-xl font-semibold text-ink">{p}</span>
                    <X className="h-5 w-5 text-primary shrink-0" strokeWidth={2.5} />
                  </Reveal>
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

      {/* FINAL CTA */}
      <section id="contato" className="relative overflow-hidden bg-[#f5f5f7] text-ink">
        <img
          src={ctaMechanicImg}
          alt="Mecânico Super Fast trabalhando em motor de veículo"
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/15 to-transparent" />
        <div className="relative container-x py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="eyebrow text-primary">Fale com a Super Fast</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-ink">
              Sua oficina merece
              <br />
              mais <span className="text-primary">controle</span>
              <br />
              e mais <span className="text-primary">resultado.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed">
              Solicite uma demonstração e descubra como a Super Fast pode
              simplificar a gestão da sua operação, sem burocracia e sem
              complicação.
            </p>
            <div className="mt-10">
              <CtaButton variant="primary">Solicitar Demonstração</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/60">
        <div className="container-x py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Mail,
              title: "E-mail",
              text: "contato@sfast.com.br",
              href: "mailto:contato@sfast.com.br",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              text: "(+55) (51) 9.8427.7489",
              href: "https://wa.me/5551984277489",
            },
            {
              icon: Phone,
              title: "Telefone",
              text: "(+55) (51) 3330.7755",
              href: "tel:+555133307755",
            },
            {
              icon: MapPin,
              title: "Endereço",
              text: "Rua 24 de Outubro, 1299/501 | Porto Alegre/RS · 90510-003",
              href: undefined,
            },
          ].map((c) => {
            const inner = (
              <>
                <div className="grid h-14 w-14 place-items-center rounded-full border border-primary/60 text-primary">
                  <c.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="eyebrow text-white">{c.title}</div>
                <p className="text-sm leading-relaxed text-white/70">{c.text}</p>
              </>
            );
            const cardClass =
              "flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-8 text-center transition-colors";
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
              <div key={c.title} className={cardClass}>
                {inner}
              </div>
            );
          })}
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
