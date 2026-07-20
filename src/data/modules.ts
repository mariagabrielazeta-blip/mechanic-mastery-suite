import customerImg from "@/assets/customer.jpg";
import mechanicWorkingImg from "@/assets/mechanic-working.jpg";
import receptionImg from "@/assets/reception.jpg";
import teamImg from "@/assets/team.jpg";

export type ModuleExperience = {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

export const moduleExperiences: ModuleExperience[] = [
  {
    id: "ordem-servico",
    name: "Ordem de Serviço",
    title: "Tudo registado do atendimento à entrega.",
    description: "Cada serviço ganha contexto, responsáveis e histórico para a equipa trabalhar com clareza.",
    image: receptionImg,
    accent: "Atendimento organizado",
  },
  {
    id: "financeiro",
    name: "Financeiro",
    title: "A saúde da oficina mais fácil de acompanhar.",
    description: "Contas, previsões e resultados aparecem ligados ao que acontece no dia a dia.",
    image: teamImg,
    accent: "Decisão segura",
  },
  {
    id: "estoque",
    name: "Estoque",
    title: "Peças certas, no momento certo.",
    description: "Entradas, saídas e necessidades ficam visíveis antes de virarem urgência.",
    image: mechanicWorkingImg,
    accent: "Menos improviso",
  },
  {
    id: "agenda",
    name: "Agenda",
    title: "A rotina da oficina com mais previsibilidade.",
    description: "Serviços, horários e prioridades ficam organizados para a operação fluir melhor.",
    image: customerImg,
    accent: "Rotina clara",
  },
  {
    id: "clientes",
    name: "Clientes",
    title: "Histórico e relacionamento no mesmo lugar.",
    description: "Veículos, contactos e atendimentos ficam centralizados para criar uma experiência mais profissional.",
    image: receptionImg,
    accent: "Mais confiança",
  },
  {
    id: "compras",
    name: "Compras",
    title: "Reposição sem correria.",
    description: "A oficina entende o que precisa comprar antes que a falta de peças trave o serviço.",
    image: mechanicWorkingImg,
    accent: "Operação preparada",
  },
];