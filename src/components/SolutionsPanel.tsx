import { useEffect, useState } from "react";

import logoImg from "@/assets/sflogo.png";

/**
 * Painel acelerador de soluções (estilo painel de instrumentos automotivo).
 * Sete estágios (0 = ponto de partida, 1–6 = soluções). O usuário navega
 * arrastando o acelerador, clicando no pedal, clicando em um card ou pelo
 * modo automático. Estilos isolados com prefixo sfp- (ver styles.css).
 */

const RED = "#d11212";

type Stage = {
  label: string;
  title: string;
  subtitle: string;
  result: string;
};

const STAGES: Stage[] = [
  {
    label: "Ponto de partida",
    title: "Sua oficina não precisa continuar no improviso.",
    subtitle:
      "Acelere para descobrir como cada solução pode transformar controle, produtividade e capacidade de crescimento.",
    result: "Tudo começa quando a informação passa a trabalhar a favor da sua oficina.",
  },
  {
    label: "1ª Marcha · Atendimento",
    title: "Atenda com rapidez e transmita mais profissionalismo.",
    subtitle:
      "Centralize clientes, veículos, históricos e orçamentos para encontrar tudo sem perder tempo.",
    result: "Menos espera para o cliente. Mais oportunidades para sua oficina.",
  },
  {
    label: "2ª Marcha · Operação",
    title: "Acompanhe cada serviço do início à entrega.",
    subtitle:
      "Organize ordens de serviço, agenda, checklist, responsáveis e etapas em um único fluxo.",
    result: "Menos falhas, menos atrasos e mais produtividade na operação.",
  },
  {
    label: "3ª Marcha · Estoque e Compras",
    title: "Saiba o que tem, o que falta e o que precisa comprar.",
    subtitle: "Acompanhe entradas, saídas, consumo, localização e níveis mínimos de estoque.",
    result: "Menos capital parado e menos vendas perdidas por falta de peças.",
  },
  {
    label: "4ª Marcha · Financeiro",
    title: "Tenha clareza sobre o dinheiro da sua oficina.",
    subtitle: "Organize contas a pagar e receber, fluxo de caixa, bancos e previsões financeiras.",
    result: "Mais previsibilidade para proteger sua margem e planejar o crescimento.",
  },
  {
    label: "5ª Marcha · Fiscal",
    title: "Controle documentos sem travar a operação.",
    subtitle: "Integre a rotina fiscal ao fluxo da oficina e reduza informações dispersas.",
    result: "Mais segurança, padronização e agilidade no fechamento.",
  },
  {
    label: "6ª Marcha · Gestão e BI",
    title: "Transforme informação em decisão e controle em crescimento.",
    subtitle:
      "Use relatórios, indicadores e visão gerencial para identificar gargalos e oportunidades.",
    result: "Uma oficina mais organizada, produtiva e preparada para crescer.",
  },
];

/* Ícones próprios em SVG com traço consistente (stroke 1.6, cantos arredondados) */
const ICONS: React.ReactNode[] = [
  // Atendimento: cliente, veículo e histórico conectados
  <svg
    key="i1"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <circle cx="9" cy="9" r="3.2" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M18 24h9.5M19 24l1.6-3.4c.3-.7 1-1.1 1.8-1.1h2.7c.8 0 1.5.4 1.8 1.1L28.5 24" />
    <circle cx="20.5" cy="26" r="1.4" />
    <circle cx="26" cy="26" r="1.4" />
    <path d="M17 9h6M17 12.5h4" strokeDasharray="0.1 3" />
    <path d="M14 9.5c2-2.5 5.5-3 8-1.5" opacity="0.7" />
  </svg>,
  // Operação: chave, ordem de serviço e checklist
  <svg
    key="i2"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <rect x="11" y="5" width="16" height="21" rx="2" />
    <path d="M15 5.5V4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v1.5" />
    <path d="M15.5 12l1.6 1.6 3-3M22 12.5h2.5M15.5 18l1.6 1.6 3-3M22 18.5h2.5" />
    <path
      d="M4 21.5a3.5 3.5 0 0 0 4.9 4.4l-1.2-2.4 1.7-1.7 2.4 1.2A3.5 3.5 0 0 0 7.4 18"
      opacity="0.9"
    />
  </svg>,
  // Estoque: caixa, peça, código e alerta
  <svg
    key="i3"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M5 12l9-4.5L23 12v9l-9 4.5L5 21z" />
    <path d="M5 12l9 4.5L23 12M14 16.5V25.5" />
    <path d="M9 20v2M11.5 21v2.2M16.5 21v2.2M19 20v2" opacity="0.8" />
    <circle cx="25.5" cy="8" r="4.2" />
    <path d="M25.5 5.8v2.4l1.6 1" />
  </svg>,
  // Financeiro: fluxo de caixa, entradas e saídas
  <svg
    key="i4"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <circle cx="13" cy="13" r="8" />
    <path d="M13 8.8v8.4M15.8 10.5c-.6-.9-1.7-1.3-2.8-1.3-1.4 0-2.6.8-2.6 2.1 0 2.8 5.4 1.5 5.4 4.2 0 1.3-1.3 2.1-2.8 2.1-1.2 0-2.3-.5-2.9-1.4" />
    <path d="M22 20l4 4-4 4M26 24h-8" />
    <path d="M8 26l-4-2.5 4-2.5" opacity="0.8" />
    <path d="M4 23.5h6" opacity="0.8" />
  </svg>,
  // Fiscal: documento fiscal, nota e validação
  <svg
    key="i5"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M8 3.5h11l5 5V26a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2z" />
    <path d="M19 3.5v5h5" />
    <path d="M10.5 13h9M10.5 16.5h6" />
    <path d="M10.5 21.5h2.5" opacity="0.8" />
    <circle cx="21.5" cy="22.5" r="4" />
    <path d="M19.8 22.5l1.3 1.3 2.2-2.2" />
  </svg>,
  // Gestão & BI: indicadores, gráficos e decisão
  <svg
    key="i6"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M4 4v22a2 2 0 0 0 2 2h22" />
    <path d="M9.5 21.5v-5M15 21.5v-9M20.5 21.5v-6.5" />
    <path d="M8.5 10.5l5-3.5 4.5 3 6-5" />
    <path d="M20.5 5h3.5v3.5" />
    <circle cx="26" cy="18" r="1.2" fill="currentColor" stroke="none" />
  </svg>,
];

const SOLUTIONS = [
  { name: "Atendimento", benefit: "Clientes, veículos e históricos organizados." },
  { name: "Operação", benefit: "Serviços e etapas sob controle." },
  { name: "Estoque", benefit: "Menos perdas e compras emergenciais." },
  { name: "Financeiro", benefit: "Mais clareza e previsibilidade." },
  { name: "Fiscal", benefit: "Documentos integrados à operação." },
  { name: "Gestão & BI", benefit: "Informação para decidir e crescer." },
];

const BENEFITS_STRIP = [
  { t: "Mais agilidade", d: "Processos mais claros para atender, executar e entregar." },
  { t: "Mais controle", d: "Informações integradas para acompanhar toda a oficina." },
  { t: "Menos perdas", d: "Estoque, financeiro e operação conectados." },
  { t: "Mais capacidade de crescer", d: "Indicadores e visão gerencial para tomar decisões." },
];

const MAX_STAGE = STAGES.length - 1; // 6

function polar(cx: number, cy: number, r: number, frac: number) {
  const a = Math.PI * (1 - frac); // 0 → esquerda, 1 → direita
  // arredonda para evitar divergência de precisão entre SSR e cliente
  return {
    x: Math.round((cx + Math.cos(a) * r) * 100) / 100,
    y: Math.round((cy - Math.sin(a) * r) * 100) / 100,
  };
}

function Gauge({
  title,
  frac,
  tickCount,
  tickLabel,
  center,
  sub,
}: {
  title: string;
  frac: number;
  tickCount: number;
  tickLabel: (i: number) => string;
  center: string;
  sub?: string;
}) {
  const angle = -90 + frac * 180;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => i / tickCount);
  return (
    <div className="w-[150px] md:w-[175px] shrink-0 text-center">
      <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">
        {title}
      </div>
      <svg viewBox="0 0 200 122" className="w-full" aria-hidden="true">
        {/* trilha */}
        <path
          d="M 24 104 A 76 76 0 0 1 176 104"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="7"
          strokeLinecap="round"
          pathLength={100}
        />
        {/* progresso vermelho */}
        <path
          d="M 24 104 A 76 76 0 0 1 176 104"
          fill="none"
          stroke={RED}
          strokeWidth="7"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={100 - frac * 100}
          className="sfp-arc"
        />
        {/* riscos e numeração */}
        {ticks.map((f, i) => {
          const p1 = polar(100, 104, 62, f);
          const p2 = polar(100, 104, 70, f);
          const pl = polar(100, 104, 50, f);
          return (
            <g key={i}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={f <= frac + 0.001 ? RED : "rgba(255,255,255,0.35)"}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x={pl.x}
                y={pl.y + 3}
                textAnchor="middle"
                fontSize="9"
                fill="rgba(255,255,255,0.5)"
                fontFamily="Inter, sans-serif"
              >
                {tickLabel(i)}
              </text>
            </g>
          );
        })}
        {/* ponteiro */}
        <g
          className="sfp-needle"
          style={{ transform: `rotate(${angle}deg)`, transformOrigin: "100px 104px" }}
        >
          <line
            x1="100"
            y1="104"
            x2="100"
            y2="42"
            stroke={RED}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <circle cx="100" cy="104" r="7" fill="#111318" stroke={RED} strokeWidth="2" />
        {/* valor central */}
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fontSize="17"
          fontWeight="700"
          fill="#ffffff"
          fontFamily="Inter, sans-serif"
        >
          {center}
        </text>
      </svg>
      {sub && (
        <div className="-mt-1 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/45">
          {sub}
        </div>
      )}
    </div>
  );
}

function SolutionCard({
  index,
  stage,
  onSelect,
}: {
  index: number; // 0..5 (estágio correspondente = index + 1)
  stage: number;
  onSelect: (s: number) => void;
}) {
  const s = SOLUTIONS[index];
  const active = stage === index + 1;
  const revealed = stage >= index + 1;
  return (
    <button
      type="button"
      onClick={() => onSelect(index + 1)}
      aria-label={`Ver solução: ${s.name}`}
      aria-pressed={active}
      className={`sfp-card flex w-full min-h-[72px] items-center gap-3 rounded-xl border p-3 text-left focus-visible:outline-2 focus-visible:outline-primary lg:w-[180px] ${
        revealed ? "opacity-100 translate-y-0" : "opacity-40 translate-y-1"
      } ${
        active
          ? "border-primary bg-white/[0.07] shadow-[0_0_16px_rgba(209,18,18,0.28)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/30"
      }`}
    >
      <span className={active ? "text-primary" : "text-white/65"}>{ICONS[index]}</span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold leading-tight text-white">{s.name}</span>
        <span className="mt-0.5 block text-[10.5px] leading-snug text-white/55">{s.benefit}</span>
      </span>
    </button>
  );
}

export default function SolutionsPanel() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);

  // modo automático: avança a cada 2,5s e volta ao início após a última marcha
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setStage((s) => (s + 1) % STAGES.length);
    }, 2500);
    return () => clearInterval(id);
  }, [playing]);

  // qualquer interação manual interrompe o modo automático
  const go = (s: number) => {
    setPlaying(false);
    setStage(Math.max(0, Math.min(MAX_STAGE, s)));
  };

  const st = STAGES[stage];
  const perf = stage * 20; // metáfora 0–120

  return (
    <section id="mapa-solucoes" className="bg-white py-24 md:py-28">
      <div className="container-x mx-auto max-w-[1200px]">
        {/* Cabeçalho da seção */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="eyebrow text-primary">Mapa interativo de soluções</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Acelere sua gestão.
            <br />
            <span className="text-primary">Faça sua oficina avançar.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-soft leading-relaxed">
            Explore as soluções do Super Fast e descubra como transformar controle, produtividade e
            informação em resultado para sua oficina.
          </p>
        </div>

        {/* Painel de instrumentos */}
        <div className="relative overflow-hidden rounded-3xl bg-[#15171c] p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] md:p-8">
          {/* brilho vermelho discreto */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative grid items-center gap-5 lg:grid-cols-[185px_minmax(0,1fr)_185px]">
            {/* Cards à esquerda (desktop) */}
            <div className="hidden flex-col gap-4 lg:flex">
              {[0, 1, 2].map((i) => (
                <SolutionCard key={i} index={i} stage={stage} onSelect={go} />
              ))}
            </div>

            {/* Conjunto central */}
            <div className="mx-auto w-full max-w-[720px]">
              <div className="flex items-center justify-center gap-3 md:gap-5">
                {/* Mostrador esquerdo (oculto no celular) */}
                <div className="hidden md:block">
                  <Gauge
                    title="Ritmo da operação"
                    frac={stage / MAX_STAGE}
                    tickCount={6}
                    tickLabel={(i) => String(i)}
                    center={String(stage)}
                  />
                </div>

                {/* Tela digital central */}
                <div className="w-full max-w-[350px] rounded-2xl border border-white/10 bg-black p-4 shadow-[inset_0_0_24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)]">
                  <div className="mb-2.5 flex items-center justify-between gap-3 border-b border-white/10 pb-2.5">
                    <img src={logoImg} alt="Super Fast" className="h-5 w-auto object-contain" />
                    <span className="rounded border border-primary/50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {stage === 0 ? "N" : `${stage}ª marcha`}
                    </span>
                  </div>
                  <div key={stage} className="sfp-fade">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {st.label}
                    </div>
                    <h3 className="mt-1 text-[14px] leading-snug text-white">{st.title}</h3>
                    <p className="mt-1.5 text-[10.5px] leading-snug text-white/60">{st.subtitle}</p>
                    <p className="mt-2 border-t border-white/10 pt-2 text-[10.5px] leading-snug text-white/85">
                      <span className="mr-1.5 text-primary">▸</span>
                      {st.result}
                    </p>
                  </div>
                </div>

                {/* Mostrador direito (oculto no celular) */}
                <div className="hidden md:block">
                  <Gauge
                    title="Performance da gestão"
                    frac={perf / 120}
                    tickCount={6}
                    tickLabel={(i) => String(i * 20)}
                    center={String(perf)}
                    sub="Gestão em movimento"
                  />
                </div>
              </div>

              {/* Versão simples dos mostradores no celular */}
              <div className="mt-4 space-y-3 md:hidden">
                {[
                  { label: "Ritmo da operação", val: stage, max: MAX_STAGE, show: `${stage}/6` },
                  { label: "Performance da gestão", val: perf, max: 120, show: String(perf) },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="mb-1 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                      <span>{b.label}</span>
                      <span className="text-white">{b.show}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="sfp-bar h-full rounded-full bg-primary"
                        style={{ width: `${(b.val / b.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Marchas 1–6 */}
              <div
                className="mt-6 flex items-center justify-center gap-2"
                role="group"
                aria-label="Marchas"
              >
                {[1, 2, 3, 4, 5, 6].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => go(g)}
                    aria-label={`Ir para a ${g}ª marcha`}
                    className={`grid h-9 w-9 place-items-center rounded-lg border font-display text-sm transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                      stage === g
                        ? "border-primary bg-primary text-white"
                        : stage > g
                          ? "border-primary/40 text-primary"
                          : "border-white/15 text-white/45 hover:border-white/35"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              {/* Acelerador */}
              <div className="mx-auto mt-6 max-w-[560px]">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Acelerador de soluções
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Botão de reprodução automática */}
                    <button
                      type="button"
                      onClick={() => setPlaying((v) => !v)}
                      aria-label={playing ? "Pausar modo automático" : "Ativar modo automático"}
                      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                        playing
                          ? "border-primary bg-primary text-white"
                          : "border-white/20 text-white/80 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {playing ? (
                        <svg
                          viewBox="0 0 16 16"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <rect x="3" y="2.5" width="3.4" height="11" rx="1" />
                          <rect x="9.6" y="2.5" width="3.4" height="11" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 16 16"
                          className="h-4 w-4 translate-x-[1px]"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M4 2.8v10.4c0 .8.9 1.3 1.6.9l8-5.2c.6-.4.6-1.4 0-1.8l-8-5.2c-.7-.4-1.6.1-1.6.9z" />
                        </svg>
                      )}
                    </button>
                    {/* Pedal de aceleração */}
                    <button
                      type="button"
                      onClick={() => {
                        setPlaying(false);
                        setStage((s) => (s + 1) % STAGES.length);
                      }}
                      aria-label="Pedal: acelerar para a próxima solução"
                      className="group grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-all hover:border-primary hover:text-primary active:translate-y-[2px] focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <svg
                        viewBox="0 0 16 20"
                        className="h-5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="1.5" width="12" height="17" rx="3" transform="skewY(-4)" />
                        <path d="M5 5.5h6M5 9h6M5 12.5h6" />
                      </svg>
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={MAX_STAGE}
                  step={1}
                  value={stage}
                  onChange={(e) => go(Number(e.target.value))}
                  aria-label="Acelerador de soluções: arraste para navegar pelas marchas"
                  aria-valuetext={st.label}
                  className="sfp-throttle w-full"
                  style={{
                    background: `linear-gradient(to right, ${RED} ${(stage / MAX_STAGE) * 100}%, rgba(255,255,255,0.12) ${(stage / MAX_STAGE) * 100}%)`,
                  }}
                />
                <p className="mt-2 text-center text-[11px] leading-snug text-white/45">
                  Arraste para descobrir como cada área do Super Fast transforma a gestão da sua
                  oficina.
                </p>
              </div>
            </div>

            {/* Cards à direita (desktop) */}
            <div className="hidden flex-col gap-4 lg:flex">
              {[3, 4, 5].map((i) => (
                <SolutionCard key={i} index={i} stage={stage} onSelect={go} />
              ))}
            </div>

            {/* Cards no tablet/celular: grade abaixo do painel */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <SolutionCard key={i} index={i} stage={stage} onSelect={go} />
              ))}
            </div>
          </div>
        </div>

        {/* Faixa inferior de benefícios */}
        <div className="mt-12 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS_STRIP.map((b) => (
            <div key={b.t}>
              <div className="font-display text-lg text-ink">{b.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
