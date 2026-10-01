import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { dictionaries, LANGS, type Dict, type Lang } from "./translations";

export { LANGS, type Lang, type Dict };

const STORAGE_KEY = "sfast-lang";

type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dict };

const I18nContext = createContext<I18nValue>({
  lang: "pt",
  setLang: () => {},
  t: dictionaries.pt,
});

function isLang(value: unknown): value is Lang {
  return value === "pt" || value === "es" || value === "en";
}

function detectLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // storage unavailable (private mode) — fall through to browser language
  }
  const browser = (navigator.language || "pt").slice(0, 2).toLowerCase();
  return isLang(browser) ? browser : "pt";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Always start in Portuguese so server and client markup match, then switch after hydration.
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    const entry = LANGS.find((item) => item.code === lang);
    document.documentElement.lang = entry?.htmlLang ?? "pt-BR";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function whatsappUrl(t: Dict) {
  return `https://wa.me/5551984277489?text=${encodeURIComponent(t.whatsappText)}`;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={`inline-flex items-center rounded-full border border-white/25 bg-white/10 p-0.5 backdrop-blur ${className}`}
    >
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          aria-pressed={lang === item.code}
          title={item.name}
          className={`h-8 min-w-9 rounded-full px-2.5 text-xs font-bold tracking-wider transition-colors ${
            lang === item.code ? "bg-primary text-white" : "text-white/75 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
