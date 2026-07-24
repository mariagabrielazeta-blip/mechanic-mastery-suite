import { motion } from "framer-motion";
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Package,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { CtaButton } from "@/components/CtaButton";

type ModuleItem = {
  name: string;
  desc: string;
  icon: LucideIcon;
};

const modules: ModuleItem[] = [
  { name: "Ordens de serviço", desc: "Check-in, fotos, execução e entrega no mesmo fluxo.", icon: ClipboardList },
  { name: "Agenda", desc: "Serviços e prioridades visíveis para a equipe.", icon: Calendar },
  { name: "Estoque", desc: "Peças, compras e mínimos sob controle.", icon: Package },
  { name: "Financeiro", desc: "Caixa, contas e previsões ligados à operação.", icon: Wallet },
  { name: "Clientes", desc: "Histórico, veículos e relacionamento centralizados.", icon: Users },
  { name: "Indicadores", desc: "Dados claros para decidir sem achismo.", icon: BarChart3 },
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
      x: direction * 250,
      z: -200,
      rotateY: direction * -30,
      scale: 0.75,
      opacity: 0.45,
      filter: "blur(1.5px)",
      zIndex: 20,
      pointerEvents: "auto" as const,
    };
  }

  return {
    x: direction * 360,
    z: -380,
    rotateY: direction * -40,
    scale: 0.6,
    opacity: 0,
    filter: "blur(2px)",
    zIndex: 10,
    pointerEvents: "none" as const,
  };
}

export default function ModulosCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeModule = useMemo(() => modules[active], [active]);

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
            Gestão inteligente
          </span>
          <h2 className="mt-5 text-4xl font-bold uppercase leading-[0.95] text-black md:text-6xl lg:text-7xl">
            Tudo o que sua oficina precisa. Em um único sistema.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            Do primeiro atendimento à entrega do veículo, do atendimento ao pós venda, conectamos pessoas, processos e informações para sua operação funcionar de forma organizada e previsível.
          </p>
        </motion.div>

        <div
          className="relative mx-auto mt-8 h-[500px] max-w-[1020px] md:mt-10 md:h-[570px]"
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
            aria-label="Módulo anterior"
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
            aria-label="Carrossel de módulos do sistema"
          >
            {modules.map((module, index) => {
              const offset = getCircularOffset(index, active);
              const animation = getCardAnimation(offset);
              const Icon = module.icon;
              const isCurrent = active === index;

              return (
                <motion.article
                  key={module.name}
                  animate={animation}
                  transition={{ duration: 0.55, ease: [0.22, 0.9, 0.32, 1] }}
                  onClick={() => setActive(index)}
                  className={`absolute left-1/2 top-1/2 flex h-[360px] w-[82vw] max-w-[360px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[2rem] border-[1.5px] border-[#E63946] bg-white p-8 text-left outline-none md:h-[420px] md:max-w-[430px] md:p-10 ${
                    isCurrent
                      ? "shadow-[0_30px_60px_-15px_rgba(230,57,70,0.15)] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[#E63946]"
                      : "shadow-[0_20px_55px_-42px_rgba(17,17,17,0.42)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  aria-hidden={Math.abs(offset) > 1}
                  aria-label={`${module.name}: ${module.desc}`}
                  tabIndex={Math.abs(offset) <= 1 ? 0 : -1}
                  role="button"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(index);
                    }
                  }}
                >
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-[#E63946] text-white shadow-[0_18px_35px_-22px_rgba(230,57,70,0.9)] md:h-22 md:w-22">
                    <Icon className="h-10 w-10 md:h-11 md:w-11" strokeWidth={2.5} />
                  </div>
                  <div className="mt-8 flex-1">
                    <h3 className="text-3xl font-bold uppercase leading-tight text-black md:text-4xl">
                      {module.name}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-gray-500 md:text-lg">{module.desc}</p>
                  </div>
                  <div className="mt-6 h-1 w-6 rounded-full bg-[#E63946]" />
                  {isCurrent && <span className="sr-only">Módulo ativo: {activeModule.name}</span>}
                </motion.article>
              );
            })}
          </motion.div>

          <button
            type="button"
            aria-label="Próximo módulo"
            onClick={goToNext}
            className="absolute right-[18%] top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border-[1.5px] border-[#E63946] bg-white text-[#E63946] shadow-lg transition-all hover:translate-x-1 hover:bg-[#E63946] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E63946] md:flex lg:right-[21%]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2" aria-label="Selecionar módulo">
          {modules.map((module, index) => (
            <button
              key={module.name}
              type="button"
              aria-label={`Ver módulo ${module.name}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E63946] ${
                active === index ? "w-6 bg-[#E63946]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton>Agendar demonstração</CtaButton>
        </div>
      </div>
    </section>
  );
}