import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  LineChart,
  Layers3,
  Workflow,
  Wrench,
  Instagram,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logoImg from "@/assets/sflogo.png";
import customerImg from "@/assets/customer.jpg";
import receptionImg from "@/assets/reception.jpg";
import teamImg from "@/assets/team.jpg";
import { CtaButton } from "@/components/CtaButton";
import ModulosCarousel from "@/components/ModulosCarousel";
import { DemoForm, ImplementationVisualSection } from "@/components/SuperFastRedesignSections";

const SITE_URL = "https://mechanic-mastery-suite.vercel.app/";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:url", content: SITE_URL },
      { name: "twitter:title", content: "Super Fast | ERP para oficinas mecânicas" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

const LOGIN_URL = "https://erp.sfast.com.br";

const NAV = [
  { label: "Gestão inteligente", href: "#capacidade" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Implantação", href: "#implantacao" },
  { label: "Demonstração", href: "#contato" },
  { label: "Login SF", href: LOGIN_URL, external: true },
];

const WHATSAPP_URL =
  "https://wa.me/5551984277489?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20sobre%20o%20Super%20Fast.";
const INSTAGRAM_URL = "https://www.instagram.com/";

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

function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setLoaded(true);
    }, 900);
    const removeTimer = setTimeout(() => {
      setHidden(true);
    }, 1600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
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
      <img src={logoImg} alt="Super Fast" className="preloader-logo h-20 w-auto" />
    </div>
  );
}

function Logo({
  className = "h-9",
  tone = "header",
}: {
  className?: string;
  tone?: "header" | "footer";
}) {
  if (tone === "footer") {
    return (
      <a href="#top" className="flex items-center gap-2.5 shrink-0">
        <img src={logoImg} alt="Super Fast" className={`${className} w-auto brightness-0`} />
        <span className="font-display text-xl tracking-tight leading-none text-ink">SUPERFAST</span>
      </a>
    );
  }
  return (
    <a href="#top" className="flex items-center gap-2.5 shrink-0">
      <img src={logoImg} alt="Super Fast" className={`${className} w-auto`} />
      <span className="font-display text-xl tracking-tight leading-none text-white">SUPERFAST</span>
    </a>
  );
}


function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com um especialista pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-[#25D366]/40 bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.32)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fb457] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:bottom-7 md:right-7 md:h-15 md:w-15"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 fill-current"
      >
        <path d="M16.02 3.2A12.7 12.7 0 0 0 5.04 22.3L3.2 29l6.86-1.8a12.66 12.66 0 0 0 5.95 1.52h.01A12.76 12.76 0 0 0 28.8 16 12.78 12.78 0 0 0 16.02 3.2Zm0 23.36h-.01a10.52 10.52 0 0 1-5.36-1.47l-.38-.23-4.07 1.07 1.08-3.96-.25-.4a10.54 10.54 0 1 1 8.99 4.99Zm5.78-7.9c-.31-.16-1.86-.92-2.15-1.03-.29-.1-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.84-1.57-1.87-1.75-2.18-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.13-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden whitespace-nowrap rounded-full border border-white/10 bg-black/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85 opacity-0 shadow-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block md:translate-x-2">
        Fale com um especialista
      </span>
    </a>
  );
}

/* ---------- DATA ---------- */

const DORES = [
  { n: "01", t: "Retrabalho", d: "Serviço volta porque nada ficou registrado." },
  { n: "02", t: "Peças esquecidas", d: "A oficina para esperando o que devia estar em estoque." },
  {
    n: "03",
    t: "Falha de comunicação",
    d: "Cliente sem retorno, equipe sem clareza do próximo passo.",
  },
  { n: "04", t: "Perda de tempo", d: "Horas produtivas dissolvidas em planilhas e post-its." },
  { n: "05", t: "Sem controle", d: "Você lidera no escuro, sem saber onde o dinheiro está." },
];

const BENEFICIOS = [
  {
    icon: Workflow,
    tag: "Operação",
    t: "Fluxo único, do check-in à entrega",
    d: "Cada veículo entra em um trilho: checklist, OS, execução e faturamento conversando em tempo real.",
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
    d: "Margem, ticket médio, execução e produtividade por mecânico no painel, atualizados agora.",
  },
  {
    icon: ShieldCheck,
    tag: "Financeiro",
    t: "Caixa previsível, fim do achismo",
    d: "Contas a pagar e a receber conectadas à operação. Você olha o fluxo e sabe exatamente o que vem.",
  },
];

const TIMELINE = [
  { t: "Diagnóstico", d: "Mapeamos a sua rotina, gargalos e particularidades da operação." },
  { t: "Configuração", d: "O sistema é modelado ao seu fluxo, não o contrário." },
  {
    t: "Treinamento",
    d: "Sua equipe aprende no ritmo real da oficina, com quem entende do dia a dia.",
  },
  { t: "Ativação", d: "Você entra em operação com suporte próximo, ajustando o que precisar." },
  {
    t: "Evolução",
    d: "Atualizações contínuas e um time acompanhando o crescimento do seu negócio.",
  },
];

const TESTIMONIALS = [
  {
    image: customerImg,
    name: "Renato Alves",
    company: "Rápida Sul Centro Automotivo",
    quote: "A equipa deixou de procurar informação em mensagens. Hoje cada OS tem contexto e responsável.",
  },
  {
    image: receptionImg,
    name: "Carla Menezes",
    company: "Oficina Prime Car",
    quote: "O atendimento ficou mais profissional. O cliente percebe organização desde o primeiro contacto.",
  },
  {
    image: teamImg,
    name: "Marcelo Rocha",
    company: "Auto Giro Serviços",
    quote: "Financeiro, peças e agenda finalmente conversam. Ficou claro onde a oficina ganhava e perdia tempo.",
  },
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px w-10 bg-primary" />
      <span className="eyebrow text-primary">{children}</span>
    </div>
  );
}


function ProofSection() {
  return (
    <section id="depoimentos" className="bg-[#F3F3F1] py-24 text-ink md:py-32">
      <div className="container-x mx-auto max-w-[1240px] overflow-hidden">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionKicker>Depoimentos</SectionKicker>
            <h2 className="max-w-3xl text-4xl md:text-6xl">Oficinas mecânicas que já sentem a diferença.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">Depoimentos reais de oficinas mecânicas que trocaram planilhas e retrabalho por um ERP feito para o dia a dia da oficina.</p>
        </div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:-mx-8 md:gap-6 md:px-8 [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative h-[430px] min-w-[78vw] snap-center overflow-hidden rounded-[34px] border border-black/5 bg-ink shadow-[0_30px_90px_-62px_rgba(17,17,17,0.85)] sm:min-w-[360px] lg:min-w-[390px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/72 transition-colors duration-500 group-hover:bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-7">
                <div className="rounded-[26px] border border-white/14 bg-white/10 p-5 shadow-[0_20px_55px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/14">
                  <div className="eyebrow text-primary">Super Fast</div>
                  <div className="mt-3 font-display text-4xl leading-none">{item.name}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/62">{item.company}</div>
                  <p className="mt-5 max-h-0 overflow-hidden text-sm leading-relaxed text-white/82 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-ink-soft">
          <span>Arraste para ver mais</span>
          <span>Passe o mouse para ler</span>
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButton variant="primary" href="#contato">
            Quero os mesmos resultados
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

function ConversionDemoSection() {
  const benefits = ["Demonstração personalizada para a rotina da sua oficina", "Diagnóstico dos gargalos que travam sua operação", "Plano de implantação claro, sem enrolação"];
  return (
    <section id="contato" className="bg-[#111318] py-24 text-white md:py-32">
      <div className="container-x mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionKicker>Demonstração gratuita</SectionKicker>
          <h2 className="text-5xl md:text-7xl">Veja seu novo sistema na prática.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">Agende uma demonstração gratuita e veja como o Super Fast conecta atendimento, ordens de serviço, estoque e financeiro em um único sistema de gestão para oficinas mecânicas.</p>
          <div className="mt-10 grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white/80">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <CtaButton variant="ghost" href={WHATSAPP_URL} target="_blank">
              Prefiro falar agora no WhatsApp
            </CtaButton>
          </div>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div id="top" className="bg-white text-ink">
      <FloatingWhatsAppButton />

      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container-x flex h-20 items-center justify-between">
          <Logo tone="header" />
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                target={n.external ? "_blank" : undefined}
                rel={n.external ? "noreferrer" : undefined}
                className="text-sm font-medium text-white/85 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <CtaButton variant="primary" href={WHATSAPP_URL} target="_blank">
              Fale com um especialista
            </CtaButton>
          </div>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-ink/95 backdrop-blur border-t border-white/10"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  target={n.external ? "_blank" : undefined}
                  rel={n.external ? "noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="text-white/90 text-base"
                >
                  {n.label}
                </a>
              ))}
              <CtaButton
                variant="primary"
                className="mt-2 w-fit"
                href={WHATSAPP_URL}
                target="_blank"
              >
                Fale com um especialista
              </CtaButton>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
        <div className="container-x relative flex h-full items-end justify-start pb-32 md:pb-36">
          <div className="max-w-xl rounded-[2rem] border border-white/18 bg-black/22 p-6 text-left text-white shadow-[0_28px_90px_-45px_rgba(0,0,0,0.95)] backdrop-blur-xl md:p-8 lg:p-10">
            <span className="eyebrow mb-5 block text-white/80">Sistema para empresas automotivas</span>
            <h1 className="text-4xl text-white md:text-6xl lg:text-7xl [text-shadow:0_4px_16px_rgba(0,0,0,0.45)]">
              Inteligência que coloca sua operação em alta performance.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/78 md:text-base">
              Um sistema desenvolvido para empresas automotivas que buscam controle absoluto, decisões rápidas e crescimento sustentável.
            </p>
          </div>
        </div>
        <a
          href="#capacidade"
          aria-label="Conhecer plataforma"
          className="group absolute bottom-8 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/22 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 md:bottom-10 md:px-6 md:py-3.5 md:text-sm"
        >
          Conhecer plataforma
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </section>
      <span id="proxima-secao" aria-hidden="true" />

      <ModulosCarousel />

      <ProofSection />
      <ImplementationVisualSection />
      <ConversionDemoSection />

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#2A2A2A] text-white/80">
        <div className="container-x mx-auto flex max-w-[1240px] flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <div className="[&_img]:brightness-0 [&_img]:invert [&_span]:!text-white">
            <Logo tone="header" />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="mailto:contato@sfast.com.br" className="hover:text-white">contato@sfast.com.br</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            <span>Porto Alegre/RS</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center rounded-full border border-white/40 p-2 text-white transition hover:bg-white hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <div className="flex w-full justify-center md:w-auto">
            <CtaButton variant="outline" href={WHATSAPP_URL} target="_blank" className="!px-5 !py-2.5 !border-white !text-white hover:!bg-white hover:!text-primary">
              Comece hoje mesmo
            </CtaButton>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Super Fast</div>
        </div>
      </footer>
    </div>
  );
}
