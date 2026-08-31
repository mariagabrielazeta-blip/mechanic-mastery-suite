import { createFileRoute, Link } from "@tanstack/react-router";

import logoImg from "@/assets/sflogo.png";

const SITE_URL = "https://mechanic-mastery-suite.vercel.app/politica-de-privacidade";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaDePrivacidade,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Super Fast" },
      {
        name: "description",
        content: "Política de Privacidade da Super Fast: como coletamos, usamos e protegemos seus dados.",
      },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

const SECTIONS = [
  {
    title: "1. Quem somos",
    body: "A Super Fast é um sistema de gestão (ERP) desenvolvido para oficinas de reparação automotiva. Esta política explica como tratamos os dados pessoais coletados através do nosso site institucional, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
  },
  {
    title: "2. Dados que coletamos",
    body: "Podemos coletar dados fornecidos voluntariamente por você em formulários de contato e solicitação de demonstração (nome, empresa, telefone/WhatsApp e cidade), além de dados de navegação coletados por cookies, como páginas visitadas e preferências de uso do site.",
  },
  {
    title: "3. Cookies",
    body: "Utilizamos cookies para lembrar suas preferências e melhorar sua experiência de navegação. Você pode aceitar ou recusar o uso de cookies não essenciais através do banner exibido no site. Cookies essenciais ao funcionamento do site podem ser mantidos independentemente da sua escolha.",
  },
  {
    title: "4. Finalidade do tratamento",
    body: "Os dados coletados são usados para responder a solicitações de contato e demonstração, agendar atendimentos comerciais, melhorar nosso site e conteúdo, e cumprir obrigações legais quando aplicável.",
  },
  {
    title: "5. Compartilhamento de dados",
    body: "Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing sem o seu consentimento. Dados podem ser compartilhados com prestadores de serviço que apoiam nossa operação (como ferramentas de e-mail e agendamento), sempre sob obrigações de confidencialidade.",
  },
  {
    title: "6. Seus direitos",
    body: "Conforme a LGPD, você tem direito a confirmar a existência de tratamento, acessar, corrigir, solicitar a exclusão ou portabilidade dos seus dados, além de revogar consentimentos previamente concedidos. Para exercer esses direitos, entre em contato pelos canais abaixo.",
  },
  {
    title: "7. Contato",
    body: "Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato pelo e-mail contato@sfast.com.br.",
  },
];

function PoliticaDePrivacidade() {
  return (
    <div className="bg-white text-ink">
      <header className="border-b border-black/5 bg-ink">
        <div className="container-x mx-auto flex h-20 max-w-[1240px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logoImg} alt="Super Fast" className="h-9 w-auto" />
            <span className="font-display text-xl tracking-tight leading-none text-white">SUPERFAST</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-white/85 transition-colors hover:text-white">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container-x mx-auto max-w-3xl py-16 md:py-24">
        <span className="eyebrow text-primary">Super Fast</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Política de Privacidade</h1>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          Este documento é um modelo geral e deve ser revisado por um profissional jurídico antes de sua adoção
          definitiva, garantindo que reflita com precisão as práticas reais de tratamento de dados da Super Fast.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{section.body}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-black/5 bg-[#2A2A2A] py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Super Fast · Desenvolvido pela{" "}
        <a href="https://conexaoz.com.br/" target="_blank" rel="noreferrer" className="hover:text-white">
          Conexão Z
        </a>
      </footer>
    </div>
  );
}
