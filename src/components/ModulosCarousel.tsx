import { motion } from "framer-motion";
import {
  Boxes,
  Calendar,
  Car,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Factory,
  FileSearch,
  FileText,
  Handshake,
  LayoutDashboard,
  ListChecks,
  Package,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Users,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { CtaButton } from "@/components/CtaButton";
import { useI18n } from "@/i18n";

type CategoryId = "atendimento" | "estoque" | "operacao" | "financeiro" | "gestao";

type ModuleItem = {
  icon: LucideIcon;
  category: CategoryId;
};

const CATEGORIES: Record<CategoryId, { label: string; color: string; soft: string; border: string }> = {
  atendimento: { label: "Atendimento", color: "#E63946", soft: "#E63946", border: "#E63946" },
  estoque: { label: "Estoque & Compras", color: "#8A8A8A", soft: "#8A8A8A", border: "#8A8A8A" },
  operacao: { label: "Operação & Vendas", color: "#8B1E28", soft: "#8B1E28", border: "#8B1E28" },
  financeiro: { label: "Financeiro", color: "#4A4A4A", soft: "#4A4A4A", border: "#4A4A4A" },
  gestao: { label: "Gestão & Análise", color: "#1A1A1A", soft: "#1A1A1A", border: "#1A1A1A" },
};

const modules: ModuleItem[] = [
  { icon: Users, category: "atendimento" },
  { icon: Car, category: "atendimento" },
  { icon: Package, category: "estoque" },
  { icon: Wrench, category: "operacao" },
  { icon: FileSearch, category: "estoque" },
  { icon: ShoppingCart, category: "estoque" },
  { icon: Boxes, category: "estoque" },
  { icon: FileText, category: "operacao" },
  { icon: ClipboardList, category: "operacao" },
  { icon: ShoppingBag, category: "operacao" },
  { icon: Factory, category: "operacao" },
  { icon: Wallet, category: "financeiro" },
  { icon: Receipt, category: "financeiro" },
  { icon: Smartphone, category: "atendimento" },
  { icon: ShieldCheck, category: "operacao" },
  { icon: ListChecks, category: "operacao" },
  { icon: Calendar, category: "atendimento" },
  { icon: Handshake, category: "operacao" },
  { icon: LayoutDashboard, category: "gestao" },
];

const AUTOPLAY_DELAY = 3200;

function wrapIndex(index: number) {
  return (index + modules.length) % modules.length;
}

function getCircularOffset(index: number, active: number) {
  const rawOffset = index - active;
  const half = modules.length / 2;

  if (rawOffset > half) return rawOffset - modules.length;
  if (rawOffset < -half) return rawOffset + modules.length;

  return rawOffset;
}

function getCardAnimation(offset: number) {
  const direction = Math.sign(offset);
  const absOffset = Math.abs(offset);

  if (absOffset === 0) {
    return {
      x: 0,
      z: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 30,
      pointerEvents: "auto" as const,
    };
  }

  if (absOffset === 1) {
    return {
      x: direction * 280,
      z: -120,
      rotateY: direction * -48,
      scale: 0.86,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 20,
      pointerEvents: "auto" as const,
    };
  }

  return {
    x: direction * 460,
    z: -260,
    rotateY: direction * -52,
    scale: 0.72,
    opacity: absOffset === 2 ? 0.85 : 0,
    filter: "blur(0px)",
    zIndex: 10,
    pointerEvents: "none" as const,
  };
}

export default function ModulosCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useI18n();
  const c = t.carousel;

  const activeModule = useMemo(() => c.modules[active], [active, c.modules]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => wrapIndex(current + 1));
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToPrevious = () => setActive((current) => wrapIndex(current - 1));
  const goToNext = () => setActive((current) => wrapIndex(current + 1));

  return (
    <section
      id="capacidade"
      className="flex min-h-screen items-center overflow-hidden bg-white py-18 text-ink md:py-22"
    >
      <div className="container-x mx-auto w-full max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#E63946]">
            {c.kicker}
          </span>
          <h2 className="mt-8 text-4xl font-bold uppercase leading-[1.1] text-black md:text-6xl lg:text-7xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            {c.text}
          </p>
        </motion.div>

        <div
          className="relative mx-auto mt-14 h-[540px] max-w-[1020px] md:mt-16 md:h-[610px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 z-0 h-[82%] -translate-y-1/2 rounded-[2.5rem] opacity-100 [background-image:linear-gradient(rgba(230,57,70,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(230,57,70,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[56%] z-[1] h-52 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.18),transparent_70%)] blur-[40px] transition-opacity duration-500 md:w-[560px]"
          />
          <button
            type="button"
            aria-label={c.prev}
            onClick={goToPrevious}
            className="absolute left-[18%] top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border-[1.5px] border-[#E63946] bg-white text-[#E63946] shadow-lg transition-all hover:-translate-x-1 hover:bg-[#E63946] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E63946] md:flex lg:left-[21%]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <motion.div
            className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
            style={{ perspective: 1500, transformStyle: "preserve-3d" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={(_, info) => {
              if (info.offset.x > 50) goToPrevious();
              if (info.offset.x < -50) goToNext();
              setIsPaused(false);
            }}
            role="region"
            aria-label={c.region}
          >
            {modules.map((module, index) => {
              const offset = getCircularOffset(index, active);
              const animation = getCardAnimation(offset);
              const Icon = module.icon;
              const copy = c.modules[index];
              const isCurrent = active === index;
              const category = CATEGORIES[module.category];

              return (
                <motion.article
                  key={copy.name}
                  animate={animation}
                  transition={{ duration: 0.55, ease: [0.22, 0.9, 0.32, 1] }}
                  onClick={() => setActive(index)}
                  className="absolute left-1/2 top-1/2 flex h-[400px] w-[82vw] max-w-[360px] -translate-x-1/2 -translate-y-1/2 flex-col items-center overflow-hidden rounded-[2rem] border-[1.5px] bg-white p-8 text-center outline-none md:h-[460px] md:max-w-[430px] md:p-10"
                  style={{
                    transformStyle: "preserve-3d",
                    borderColor: category.border,
                    boxShadow: isCurrent
                      ? `0 35px 70px -20px ${category.color}59`
                      : "0 25px 50px -20px rgba(17,17,17,0.55)",
                  }}
                  aria-hidden={Math.abs(offset) > 1}
                  aria-label={`${copy.name}: ${copy.desc}`}
                  tabIndex={Math.abs(offset) <= 1 ? 0 : -1}
                  role="button"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(index);
                    }
                  }}
                >
                  {isCurrent && (
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ backgroundColor: category.color }}
                    />
                  )}
                  <div
                    className="grid h-16 w-16 place-items-center rounded-full text-white shadow-[0_18px_35px_-22px_rgba(0,0,0,0.55)] md:h-18 md:w-18"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2.5} />
                  </div>
                  <div className="mt-5 flex-1 overflow-hidden">
                    <h3 className="text-2xl font-bold uppercase leading-tight text-black md:text-3xl">
                      {copy.name}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-500 md:text-base">
                      {copy.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                    {copy.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
                        style={{
                          borderColor: `${category.color}40`,
                          backgroundColor: `${category.color}14`,
                          color: category.color,
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 h-1 w-6 rounded-full" style={{ backgroundColor: category.color }} />
                  {isCurrent && <span className="sr-only">{c.active}: {activeModule.name}</span>}
                </motion.article>
              );
            })}
          </motion.div>

          <button
            type="button"
            aria-label={c.next}
            onClick={goToNext}
            className="absolute right-[18%] top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border-[1.5px] border-[#E63946] bg-white text-[#E63946] shadow-lg transition-all hover:translate-x-1 hover:bg-[#E63946] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E63946] md:flex lg:right-[21%]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2" aria-label={c.select}>
          {c.modules.map((copy, index) => (
            <button
              key={copy.name}
              type="button"
              aria-label={`${c.view} ${copy.name}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E63946] ${
                active === index ? "w-6 bg-[#E63946]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton>{c.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}