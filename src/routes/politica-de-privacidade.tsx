import { createFileRoute, Link } from "@tanstack/react-router";

import logoImg from "@/assets/sflogo.png";
import { useEffect } from "react";

import { LanguageSwitcher, useI18n } from "@/i18n";

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

function PoliticaDePrivacidade() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = t.privacy.metaTitle;
  }, [t]);
  return (
    <div className="bg-white text-ink">
      <header className="border-b border-black/5 bg-ink">
        <div className="container-x mx-auto flex h-20 max-w-[1240px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logoImg} alt="Super Fast" className="h-9 w-auto" />
            <span className="font-display text-xl tracking-tight leading-none text-white">SUPERFAST</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/" className="hidden text-sm font-medium text-white/85 transition-colors hover:text-white sm:inline">
              {t.privacy.back}
            </Link>
          </div>
        </div>
      </header>

      <main className="container-x mx-auto max-w-3xl py-16 md:py-24">
        <span className="eyebrow text-primary">Super Fast</span>
        <h1 className="mt-4 text-4xl md:text-5xl">{t.privacy.title}</h1>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          {t.privacy.disclaimer}
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {t.privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{section.body}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-black/5 bg-[#2A2A2A] py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Super Fast · {t.footer.developedBy}{" "}
        <a href="https://conexaoz.com.br/" target="_blank" rel="noreferrer" className="hover:text-white">
          Conexão Z
        </a>
      </footer>
    </div>
  );
}
