import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardList, Layers, Package, Wallet, X, Menu, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
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
  { label: "Funcionalidades", href: "#como-funciona" },
  { label: "Implantação", href: "#implantacao" },
  { label: "Contato", href: "#contato" },
];

const DORES = [
  {
    icon: ClipboardList,
    title: "Serviços sem acompanhamento",
    body: "Dificuldade para saber o que está em execução, quem é o responsável e quando o veículo será entregue.",
  },
  {
    icon: Package,
    title: "Estoque desorganizado",
    body: "Peças paradas, compras emergenciais e falta de itens importantes para concluir os serviços.",
  },
  {
    icon: Wallet,
    title: "Financeiro sem previsibilidade",
    body: "Entradas, despesas e compromissos sem uma visão clara do fluxo de caixa.",
  },
  {
    icon: Layers,
    title: "Informações espalhadas",
    body: "Dados divididos entre papéis, planilhas, mensagens e a memória da equipe.",
  },
];

const DESTAQUES = [
  "Mais controle sobre a operação",
  "Processos mais organizados",
  "Informações centralizadas",
  "Mais agilidade no dia a dia",
  "Decisões baseadas em dados",
];

const FLUXO = [
  { t: "Cliente e veículo", d: "Cadastro do cliente, do veículo e acesso ao histórico." },
  { t: "Atendimento e orçamento", d: "Checklist, identificação das necessidades e elaboração do orçamento." },
  { t: "Aprovação", d: "Registro da aprovação e preparação do serviço." },
  { t: "Ordem de serviço", d: "Definição de etapas, responsáveis, peças e prazos." },
  { t: "Execução", d: "Acompanhamento dos serviços e do tempo de execução." },
  { t: "Faturamento", d: "Emissão dos documentos e atualização do financeiro." },
  { t: "Gestão", d: "Relatórios e indicadores para acompanhar a operação e decidir." },
];

const IMPLANTACAO = [
  { t: "Análise", d: "Entendimento da rotina, das particularidades e das necessidades da oficina." },
  { t: "Implantação", d: "Configuração do sistema de acordo com a estrutura da operação." },
  { t: "Treinamento", d: "Preparação dos usuários para utilizar as funcionalidades no dia a dia." },
  { t: "Suporte", d: "Apoio à equipe durante a utilização do sistema." },
  { t: "Atualização", d: "Evolução contínua da plataforma conforme tecnologias e necessidades do mercado." },
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

      {/* Âncora usada pela seta do hero (o hero permanece intacto) */}
      <span id="proxima-secao" aria-hidden="true" />

      {/* SEÇÃO 1 — DORES DA OFICINA */}
      <section id="problemas" className="bg-white py-14 md:py-24">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">O problema</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              O crescimento da sua oficina não pode depender do improviso.
            </h2>
            <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
              Quando as informações ficam espalhadas, acompanhar a operação se
              torna mais difícil. Os atrasos aumentam, o estoque perde o
              controle e o financeiro deixa de mostrar a realidade do negócio.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {DORES.map((d, i) => (
              <Reveal key={d.title} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col gap-4 border border-hairline p-6">
                  <d.icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
                  <h3 className="font-display text-xl leading-tight">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-lg font-semibold text-ink">
            Quando cada área trabalha separada, a oficina perde tempo, dinheiro
            e capacidade de crescer.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2 — APRESENTAÇÃO CURTA DO SUPER FAST */}
      <section id="superfast" className="bg-[#f5f5f7] py-14 md:py-24">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">A solução</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Toda a sua oficina conectada
              <br />
              em uma <span className="text-primary">única gestão.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
              O Super Fast integra atendimento, operação, estoque, financeiro,
              fiscal e indicadores para que você acompanhe sua oficina com mais
              clareza e tome decisões com segurança.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {DESTAQUES.map((d, i) => (
              <li key={d}>
                <Reveal delay={i * 70}>
                  <span className="flex items-center gap-2.5 border border-hairline bg-white px-4 py-2.5 text-sm font-medium text-ink">
                    <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                    {d}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-display text-2xl md:text-3xl uppercase">
            Tudo integrado. Tudo sob controle.{" "}
            <span className="text-primary">Tudo para o resultado da sua oficina.</span>
          </p>
        </div>
      </section>

      {/* SEÇÃO 3 — ACELERADOR INTERATIVO (componente protegido; wrapper apenas para âncora e separação) */}
      <div id="solucoes" className="border-t border-hairline">
        <SolutionsPanel />
      </div>

      {/* SEÇÃO 4 — FLUXO DO DIA A DIA DA OFICINA */}
      <section id="como-funciona" className="bg-ink text-white py-14 md:py-24">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Como funciona</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Do veículo entrando à gestão
              <br />
              <span className="text-primary">acompanhando o resultado.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
              Cada etapa gera informação para a próxima. Assim, toda a oficina
              trabalha de forma integrada.
            </p>
          </div>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {FLUXO.map((f, i) => (
              <li key={f.t}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="h-full border-t-2 border-white/15 pt-5">
                    <span className="font-display text-lg text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-xl leading-tight text-white">
                      {f.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{f.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEÇÃO 5 — IMPLANTAÇÃO, TREINAMENTO E SUPORTE */}
      <section id="implantacao" className="bg-white py-14 md:py-24">
        <div className="container-x mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Muito além do software</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Um sistema completo precisa funcionar na{" "}
              <span className="text-primary">realidade da sua oficina.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
              Você não recebe apenas um sistema. Recebe acompanhamento para
              transformar a gestão da sua oficina.
            </p>
          </div>
          <div className="relative mt-12">
            {/* linha discreta conectando as etapas no desktop */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-10 hidden h-px bg-hairline lg:block"
            />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {IMPLANTACAO.map((s, i) => (
                <li key={s.t} className="h-full">
                  <Reveal delay={i * 80} className="h-full">
                    <div className="relative h-full border border-hairline bg-white p-6">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 font-display text-primary">
                        {i + 1}
                      </span>
                      <h3 className="mt-4 font-display text-lg leading-tight">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — CTA FINAL */}
      <section id="contato" className="relative overflow-hidden bg-[#f5f5f7] text-ink">
        <img
          src={ctaMechanicImg}
          alt="Mecânico Super Fast trabalhando em motor de veículo"
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover opacity-100 contrast-125 saturate-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 to-transparent" />
        <div className="relative container-x py-28 md:py-40">
          <div className="max-w-3xl rounded-2xl bg-white/70 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="mb-6">
              <span className="eyebrow text-primary">Fale com a Super Fast</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-ink">
              Sua oficina já trabalha em alta velocidade.
              <br />
              Agora a gestão precisa{" "}
              <span className="text-primary">acompanhar.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-ink/80 leading-relaxed">
              O Super Fast conecta as informações, organiza os processos e
              entrega a visão que você precisa para conduzir sua oficina com
              mais controle.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton variant="primary" href="https://wa.me/5551984277489">
                Quero conhecer o Super Fast
              </CtaButton>
            </div>
            <p className="mt-6 text-sm text-ink/70">
              Descubra como o Super Fast pode ser aplicado à realidade da sua
              oficina.
            </p>
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
