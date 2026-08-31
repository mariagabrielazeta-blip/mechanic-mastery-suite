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

type ModuleItem = {
  name: string;
  desc: string;
  icon: LucideIcon;
  chips: [string, string, string];
};

const modules: ModuleItem[] = [
  {
    name: "Clientes",
    desc: "Cadastro completo, diversos endereços e contatos, armazenamento e gestão de documentos, classificação de clientes, histórico unificado, controle de crédito, integração com outros setores e módulos.",
    icon: Users,
    chips: ["Agilidade no Atendimento", "Visão 360 Graus", "Segurança de Dados"],
  },
  {
    name: "Veículos",
    desc: "Registro de placa com identificação automática, RENAVAM, chassi, marca, modelo, ano, quilometragem e combustível, controle de documentos, vinculação ao proprietário, histórico de manutenção, dados de frota e técnicos e imagens.",
    icon: Car,
    chips: ["Facilidade de Cadastro", "Dados Corretos para Compras de Peças", "Organização Total"],
  },
  {
    name: "Produto/Peças",
    desc: "Dados cadastrais completos e especializados, dados fiscais, diversos códigos de identificação, modelos de veículos de aplicação, código de barras, grupos e categoria, imagens e anexos, e controle de preços, margens e reajustes.",
    icon: Package,
    chips: ["Agilidade de Pesquisa", "Precisão Tributária e Estoque", "Visão Completa"],
  },
  {
    name: "Serviços",
    desc: "Catálogo de serviços prestados, dados fiscais, tempário, valores por hora e/ou serviço, limites de descontos, e serviços de terceiros.",
    icon: Wrench,
    chips: ["Agilidade no Faturamento", "Organização das Vendas", "Padronização de Tempos e Custos"],
  },
  {
    name: "Cotação de Compras",
    desc: "Geração automática de requisições de compra, envio para fornecedores, comparativo inteligente, histórico de preços, controle de aprovação.",
    icon: FileSearch,
    chips: ["Redução de Custos", "Agilidade de Compra", "Transparência e Controle"],
  },
  {
    name: "Compras",
    desc: "Cadastro de fornecedores, solicitação de compra, cotação, comparação e ordem de compra, aprovação por níveis, identificação e importação automática de notas.",
    icon: ShoppingCart,
    chips: ["Controle Total", "Redução de Erros", "Conformidade Fiscal"],
  },
  {
    name: "Estoque",
    desc: "Entrada e saída, localização, histórico de movimentações, inventário, curva ABC.",
    icon: Boxes,
    chips: ["Redução de Rupturas", "Diminui Mercadorias Paradas", "Relatórios Precisos"],
  },
  {
    name: "Orçamentação",
    desc: "Criação rápida de orçamentos, importação de orçamentos, versões de orçamentos, funil de vendas, aprovação de orçamentos, envios e mensageria automática.",
    icon: FileText,
    chips: ["Controle de status", "Menor Tempo de Aprovação", "Repescagem"],
  },
  {
    name: "Ordens de Serviço",
    desc: "Acompanhamento dos serviços, painel oficina inteligente, controle de peças e serviços, apontamento de horas, histórico completo, venda agregada.",
    icon: ClipboardList,
    chips: ["Redução de Custos", "Gestão a Vista", "Menos Tempo Parado"],
  },
  {
    name: "Pedidos de Venda",
    desc: "Registro rápido de produtos, quantidades, preços e condições de pagamento, consulta de estoque, aprovação de crédito, integração fiscal e faturamento e rastreabilidade do status do pedido.",
    icon: ShoppingBag,
    chips: ["Agilidade de digitação", "Controle Gerencial", "Maior Faturamento"],
  },
  {
    name: "Controle de Produção",
    desc: "Visão em tempo real de cada OS, alocação de recursos e distribuição de serviços com IA, apontamento, gestão de insumos, indicadores de desempenho, eficiência, custo de mão de obra.",
    icon: Factory,
    chips: ["Redução de Prazos", "Controle de Custos", "Organização"],
  },
  {
    name: "Gestão Financeira",
    desc: "Pagar e receber, fluxo de caixa, controle de vencimentos, previsões e projeções, conciliação bancária integrada, DRE, relatórios e gráficos gerenciais.",
    icon: Wallet,
    chips: ["Menos Trabalho", "Segurança", "Visão Completa"],
  },
  {
    name: "Faturamento e NFs",
    desc: "NF-e, NFS-e e NFC-e, regras de negócio, envio automatizado, cancelamento e carta de correção, e painel de monitoramento.",
    icon: Receipt,
    chips: ["Automação e Agilidade Total", "Zero Erros", "Maior Segurança Fiscal"],
  },
  {
    name: "Mobile",
    desc: "Atendimento e vendas externas, controle de produção, gestão de estoque, ordens de serviço e aprovações rápidas.",
    icon: Smartphone,
    chips: ["Agilidade", "Mobilidade", "Conforto"],
  },
  {
    name: "Manutenção Preventiva",
    desc: "Cronograma de manutenções automático, controle de insumos, planos personalizados, alertas e notificações, predição e prevenção, e fidelização do cliente.",
    icon: ShieldCheck,
    chips: ["Segurança e Conforto do Cliente", "Faturamento Constante", "Fidelização"],
  },
  {
    name: "Check List",
    desc: "Digitaliza e agiliza a inspeção veicular, elimina o uso de papel, padroniza as vistorias e identifica falhas, formulários personalizados, acesso mobile, fotos e vídeos e assinatura digital.",
    icon: ListChecks,
    chips: ["Agilidade", "Segurança da Operação", "Zero Papel"],
  },
  {
    name: "Agendamento",
    desc: "Centraliza e organiza o atendimento, elimina conflitos de reservas, otimiza a produção, visão em tempo real das disponibilidades, e lembretes automáticos.",
    icon: Calendar,
    chips: ["Reserva Simplificada", "Alertas e Lembretes", "Planejamento"],
  },
  {
    name: "Painéis e Gestão Visual",
    desc: "Centraliza as informações importantes, indicadores em tempo real, telas personalizáveis, gráficos interativos, acompanhamento de metas, alertas visuais, identificação de gargalos e falhas, e detecção de custos elevados.",
    icon: LayoutDashboard,
    chips: ["Decisões Estratégicas", "Economia de Tempo", "Visão 360 Graus"],
  },
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
            Gestão Inteligente
          </span>
          <h2 className="mt-8 text-4xl font-bold uppercase leading-[1.1] text-black md:text-6xl lg:text-7xl">
            Tudo o que sua oficina precisa. Em um único sistema.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            Do primeiro atendimento à entrega do veículo, do atendimento ao pós venda, conectamos pessoas, processos e informações para sua operação funcionar de forma organizada e previsível.
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
                  className={`absolute left-1/2 top-1/2 flex h-[400px] w-[82vw] max-w-[360px] -translate-x-1/2 -translate-y-1/2 flex-col items-center overflow-hidden rounded-[2rem] border-[1.5px] border-[#E63946] bg-white p-8 text-center outline-none md:h-[460px] md:max-w-[430px] md:p-10 ${
                    isCurrent
                      ? "shadow-[0_35px_70px_-20px_rgba(230,57,70,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[#E63946]"
                      : "shadow-[0_25px_50px_-20px_rgba(17,17,17,0.55)]"
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
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E63946] text-white shadow-[0_18px_35px_-22px_rgba(230,57,70,0.9)] md:h-18 md:w-18">
                    <Icon className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2.5} />
                  </div>
                  <div className="mt-5 flex-1 overflow-hidden">
                    <h3 className="text-2xl font-bold uppercase leading-tight text-black md:text-3xl">
                      {module.name}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-500 md:text-base">
                      {module.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                    {module.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[#E63946]/25 bg-[#E63946]/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#E63946]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 h-1 w-6 rounded-full bg-[#E63946]" />
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