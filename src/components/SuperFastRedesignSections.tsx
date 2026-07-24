import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Cog,
  FileText,
  Gauge,
  Handshake,
  LineChart,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CtaButton } from "@/components/CtaButton";
import { implementationSteps } from "@/data/implementation";

type ScheduleHandler = () => void;

const WHATSAPP_URL =
  "https://wa.me/5551984277489?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20sobre%20o%20Super%20Fast.";

const DEMO_FORM_RECIPIENTS = ["atendimento@superfast.com.br", "igor@superfast.com.br"];

const sectionBase = "relative overflow-hidden bg-[#F8F8F6] text-ink";
const container = "container-x mx-auto max-w-[1200px]";

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px w-10 bg-primary" />
        <span className="eyebrow text-primary">{eyebrow}</span>
      </div>
      <h2 className="text-4xl text-ink md:text-5xl lg:text-6xl">{title}</h2>
      {text && (
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">{text}</p>
      )}
    </div>
  );
}

export function GrowthContextSection() {
  const steps = ["Mais veículos", "Mais ordens", "Mais técnicos", "Mais peças", "Mais pressão"];

  return (
    <section className="relative overflow-hidden bg-[#F8F8F6] py-32 text-ink md:py-44">
      <div className="container-x mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow text-primary">Quando a oficina cresce</span>
          <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl">
            Toda oficina quer crescer.
            <br />
            <span className="text-ink-soft">Mas crescer também aumenta a pressão.</span>
          </h2>
        </div>

        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-5 md:flex-1 md:flex-col md:gap-6">
              <div className="h-px flex-1 bg-black/10 md:h-16 md:w-px md:flex-none" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary/80">0{index + 1}</span>
                <p className="mt-2 text-sm font-semibold text-ink-soft">{step}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="h-px flex-1 bg-black/10 md:h-16 md:w-px md:flex-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuickBenefitsSection() {
  const benefits = [
    { icon: Gauge, title: "Mais controle", text: "Informações centralizadas em tempo real." },
    { icon: CalendarClock, title: "Mais agilidade", text: "Processos claros do início ao fim." },
    { icon: BarChart3, title: "Mais lucro", text: "Decisões com previsibilidade financeira." },
  ];

  return (
    <section className={`${sectionBase} border-y border-white/10 py-10`}>
      <div className={`${container} relative`}>
        <div className="mb-8 text-center">
          <span className="eyebrow text-primary">Operação integrada</span>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">
            Toda a operação da sua oficina em um só lugar.
          </h2>
        </div>
        <div className="relative grid gap-4 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px overflow-hidden bg-white/10 md:block">
            <div className="h-full w-full origin-left animate-[sf-line_2.6s_ease-out_infinite] bg-primary/80" />
          </div>
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center shadow-[0_18px_50px_-30px_rgba(209,18,18,0.55)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-2xl text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-white/60">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PanelIntroSection() {
  return (
    <section className="bg-white pb-0 pt-20">
      <div className={`${container} text-center`}>
        <span className="eyebrow text-primary">Veja a operação em movimento</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-5xl">
          Explore como cada etapa da oficina se conecta.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
          Clique nos pontos do painel e conheça o fluxo completo.
        </p>
      </div>
    </section>
  );
}

const problemItems = [
  {
    icon: PackageCheck,
    name: "Estoque",
    problem: "Peças paradas, compras duplicadas e falta de controle.",
    impact: "Dinheiro imobilizado e atrasos na operação.",
    solution: "Entradas, saídas, mínimos e compras conectados.",
  },
  {
    icon: Users,
    name: "Equipe",
    problem: "Responsáveis e prioridades sem visibilidade.",
    impact: "Retrabalho e perda de produtividade.",
    solution: "Etapas claras, responsáveis definidos e acompanhamento.",
  },
  {
    icon: ClipboardCheck,
    name: "Ordem de serviço",
    problem: "Informações espalhadas em papéis e mensagens.",
    impact: "Falhas na execução e histórico incompleto.",
    solution: "OS centralizada do atendimento à entrega.",
  },
  {
    icon: LineChart,
    name: "Financeiro",
    problem: "Contas e previsões desconectadas da operação.",
    impact: "Decisões no achismo e margem ameaçada.",
    solution: "Fluxo financeiro integrado aos serviços.",
  },
  {
    icon: MessageCircle,
    name: "Atendimento",
    problem: "Cliente sem retorno e equipa sem contexto.",
    impact: "Menos confiança e oportunidades perdidas.",
    solution: "Histórico, veículos e orçamentos organizados.",
  },
];

export function InteractiveProblemsSection() {
  const [active, setActive] = useState(0);
  const item = problemItems[active];
  return (
    <section className={`${sectionBase} py-24 md:py-32`}>
      <div className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className={container}>
        <SectionIntro
          eyebrow="Gargalos da oficina"
          title="Onde sua oficina perde tempo e dinheiro?"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {problemItems.map((problem, index) => (
              <button
                key={problem.name}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-pressed={active === index}
                className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                  active === index
                    ? "border-primary bg-primary text-white shadow-[0_18px_45px_-25px_rgba(209,18,18,0.9)]"
                    : "border-white/10 bg-white/[0.035] text-white/70 hover:border-white/25"
                }`}
              >
                <problem.icon className="h-5 w-5 shrink-0" />
                <span className="font-semibold">{problem.name}</span>
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#111318] p-6 md:p-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <div>
                <span className="eyebrow text-primary">Área crítica</span>
                <h3 className="mt-2 text-3xl text-white">{item.name}</h3>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Problema", item.problem],
                ["Impacto", item.impact],
                ["Solução", item.solution],
              ].map(([label, value], index) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${index === 2 ? "bg-primary" : "bg-white/35"}`}
                    />
                  </div>
                  <span className="eyebrow text-white/45">{label}</span>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const flowSteps = [
  [Users, "Cliente chega", "Dados e veículo entram no fluxo."],
  [ClipboardCheck, "Ordem de serviço", "Tudo registado em uma OS."],
  [FileText, "Fotos e avarias", "Histórico visual documentado."],
  [PackageCheck, "Peças e serviços", "Itens ligados à execução."],
  [Wrench, "Execução", "Equipa acompanha etapas."],
  [CheckCircle2, "Entrega", "Fecho com clareza."],
  [LineChart, "Financeiro e gestão", "Indicadores para decidir."],
] as const;

export function OperationFlowSection() {
  return (
    <section className={`${sectionBase} border-y border-white/10 py-24 md:py-32`}>
      <div className={container}>
        <SectionIntro
          eyebrow="Fluxo visual"
          title="Do atendimento ao resultado."
          text="Tudo conectado em um único fluxo."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-7">
          {flowSteps.map(([Icon, title, text], index) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              {index < flowSteps.length - 1 && (
                <div
                  className="absolute left-1/2 top-8 hidden h-px w-full bg-primary/35 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-black text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <span className="mt-5 block text-xs font-bold text-primary">0{index + 1}</span>
              <h3 className="mt-2 text-xl text-white">{title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const modules = [
  [ClipboardCheck, "Ordens de serviço", "Tudo registado do atendimento à entrega."],
  [PackageCheck, "Estoque", "Entradas, saídas e mínimos sob controle."],
  [FileText, "Fotos da avaria", "Registo visual para mais confiança."],
  [Wrench, "Serviços e mão de obra", "Execução organizada por etapa."],
  [LineChart, "Financeiro", "Fluxo de caixa ligado à operação."],
  [BarChart3, "Relatórios e indicadores", "Visão rápida para decisões melhores."],
  [Users, "Clientes", "Históricos e veículos centralizados."],
  [CalendarClock, "Agenda", "Rotina planejada com clareza."],
  [PackageCheck, "Compras", "Reposição com menos improviso."],
] as const;

export function ModulesCarousel({ onSchedule }: { onSchedule: ScheduleHandler }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (direction: number) =>
    ref.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  return (
    <section className="relative overflow-hidden bg-[#F8F8F6] py-24 text-ink md:py-32">
      <div className={container}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Módulos"
            title={
              <>
                Tudo que sua oficina precisa.{" "}
                <span className="text-primary">Em um único sistema.</span>
              </>
            }
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-ink hover:border-primary hover:text-primary"
              aria-label="Módulos anteriores"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-ink hover:border-primary hover:text-primary"
              aria-label="Próximos módulos"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {modules.map(([Icon, title, text]) => (
            <article
              key={title}
              className="min-w-[280px] snap-start rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:min-w-[340px]"
            >
              <div className="mb-10 grid h-20 w-full place-items-center rounded-2xl bg-gradient-to-br from-primary/10 via-[#F3F3EF] to-white">
                <Icon className="h-9 w-9 text-primary" strokeWidth={1.6} />
              </div>
              <h3 className="text-2xl text-ink">{title}</h3>
              <p className="mt-3 min-h-10 text-sm leading-relaxed text-ink-soft">{text}</p>
              <button
                type="button"
                onClick={onSchedule}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary"
              >
                Ver recurso <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterComparison() {
  const [after, setAfter] = useState(55);
  return (
    <section className={`${sectionBase} border-y border-white/10 py-24 md:py-32`}>
      <div className={container}>
        <SectionIntro eyebrow="Comparativo" title="Antes e depois do Super Fast" />
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#111318] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/45 p-6 opacity-80">
              <h3 className="text-3xl text-white/70">Sem Super Fast</h3>
              <ul className="mt-6 space-y-3 text-sm text-white/55">
                {[
                  "Informações espalhadas",
                  "Retrabalho",
                  "Estoque desatualizado",
                  "Decisões no achismo",
                  "Falta de visão financeira",
                ].map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl border border-primary/40 bg-primary/10 p-6 shadow-[0_0_50px_-30px_rgba(209,18,18,0.9)]"
              style={{ opacity: after / 100 }}
            >
              <h3 className="text-3xl text-white">Com Super Fast</h3>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  "Operação centralizada",
                  "Processos organizados",
                  "Estoque integrado",
                  "Indicadores em tempo real",
                  "Mais controle e previsibilidade",
                ].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <label
            className="mt-8 block text-xs font-semibold uppercase tracking-[0.18em] text-white/50"
            htmlFor="comparison-range"
          >
            Arraste para comparar
          </label>
          <input
            id="comparison-range"
            type="range"
            min="15"
            max="100"
            value={after}
            onChange={(event) => setAfter(Number(event.target.value))}
            className="mt-3 w-full accent-primary"
          />
        </div>
      </div>
    </section>
  );
}

export function ZetaCredibilitySection() {
  return (
    <section className={`${sectionBase} py-20 md:py-24`}>
      <div
        className={`${container} rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:p-12`}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <span className="eyebrow text-primary">Credibilidade Zeta</span>
            <h2 className="mt-4 text-4xl text-white md:text-5xl">
              O Super Fast nasce da experiência da Zeta.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              Uma solução especializada para oficinas de reparação rápida, construída sobre
              tecnologia e evolução em gestão automotiva.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Tecnologia consolidada",
              "Especialização em oficinas",
              "Suporte e implantação",
              "Evolução contínua",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <ShieldCheck className="mb-4 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImplementationVisualSection() {
  return (
    <section id="implantacao" className="relative overflow-hidden border-y border-black/5 bg-[#ECECE8] py-28 text-ink md:py-36">
      <div className={container}>
        <SectionIntro
          eyebrow="Implantação"
          title="Implante o novo sistema da sua oficina, sem parar a operação."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {implementationSteps.map((step, index) => (
            <article key={step.title} className="relative">
              {index < implementationSteps.length - 1 && (
                <div className="absolute left-6 top-6 hidden h-px w-full bg-black/10 md:block" />
              )}
              <div className="relative grid h-12 w-12 place-items-center rounded-full border border-primary/20 bg-[#FAFAF8] text-primary shadow-[0_14px_35px_-30px_rgba(17,17,17,0.55)]">
                <CheckCircle2 className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <span className="mt-8 block font-display text-4xl text-primary/70">0{index + 1}</span>
              <h3 className="mt-3 text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 max-w-[13rem] text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <CtaButton variant="primary" href="#contato">
            Quero começar minha implantação
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

type DemoFormProps = { compact?: boolean; onSuccess?: () => void };

export function DemoForm({ compact = false, onSuccess }: DemoFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
  });
  const [error, setError] = useState("");
  const update = (field: keyof typeof values, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));
  const required = [values.name, values.company, values.phone, values.city];
  const next = () => {
    if (required.some((value) => !value.trim()))
      return setError("Preencha os campos para solicitar a demonstração.");
    setError("");
    setLoading(true);

    const subject = `Solicitação de demonstração - ${values.company}`;
    const body = [
      `Nome: ${values.name}`,
      `Empresa: ${values.company}`,
      `WhatsApp: ${values.phone}`,
      `Cidade: ${values.city}`,
    ].join("\n");
    const mailtoUrl = `mailto:${DEMO_FORM_RECIPIENTS.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
      onSuccess?.();
    }, 700);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 text-3xl text-white">Solicitação enviada.</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Abrimos seu e-mail com a solicitação preenchida. Basta confirmar o envio para nossa equipe entrar em contato.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-white/10 bg-[#111318] p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        next();
      }}
    >
      <div className="mb-8">
        <span className="eyebrow text-primary">Solicite sua demonstração gratuita</span>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Poucos dados. Uma conversa rápida sobre a rotina da sua oficina mecânica.
        </p>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <Field label="Nome" value={values.name} onChange={(value) => update("name", value)} />
        <Field
          label="Empresa"
          value={values.company}
          onChange={(value) => update("company", value)}
        />
        <Field
          label="WhatsApp"
          value={values.phone}
          onChange={(value) => update("phone", value.replace(/[^0-9()+ .-]/g, ""))}
          inputMode="tel"
        />
        <Field
          label="Cidade"
          value={values.city}
          onChange={(value) => update("city", value)}
        />
      </div>
      {error && (
        <p className="mt-4 text-sm text-primary" role="alert">
          {error}
        </p>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-3 rounded-[14px] bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-ink disabled:opacity-60 md:w-auto"
        >
          {loading ? "A enviar..." : "Agendar demonstração"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  inputMode,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  className?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/gi, "-");
  return (
    <label className={`block ${className}`} htmlFor={id}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
        {label}
      </span>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-sm border border-white/15 bg-black/35 px-4 text-white outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}

export function DemoSection() {
  return (
    <section className={`${sectionBase} py-28 md:py-36`}>
      <div className={`${container} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
        <SectionIntro
          eyebrow="Demonstração"
          title="Vamos mostrar o Super Fast funcionando na prática."
          text="Agende uma demonstração e veja como ele pode se adaptar à rotina da sua oficina."
        />
        <DemoForm />
      </div>
    </section>
  );
}

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[10000] grid place-items-center bg-black/75 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Agendar demonstração"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#070707] p-5 shadow-2xl outline-none md:p-7"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow text-primary">Super Fast</span>
            <h2 className="mt-2 text-3xl text-white">Agendar demonstração</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 hover:border-primary hover:text-primary"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <DemoForm compact />
      </div>
    </div>
  );
}

export function FinalCTA({ onSchedule }: { onSchedule: ScheduleHandler }) {
  return (
    <section id="contato" className={`${sectionBase} min-h-[90svh] py-24 md:py-32`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(209,18,18,0.22),transparent_35%)]" />
      <div
        className={`${container} relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center`}
      >
        <div>
          <span className="eyebrow text-primary">Próximo nível</span>
          <h2 className="mt-5 text-5xl text-white md:text-7xl">
            Pronto para levar sua oficina ao próximo nível?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
            Centralize a operação, reduza retrabalho e tome decisões com mais segurança.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onSchedule}
              className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              Agendar demonstração <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white/85 hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Falar com especialista
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/40">
            Super Fast é uma solução desenvolvida pela Zeta Informática.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
          <Sparkles className="mb-8 h-8 w-8 text-primary" />
          <div className="grid gap-4">
            {[
              "Operação centralizada",
              "Estoque integrado",
              "Financeiro previsível",
              "Indicadores em tempo real",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
