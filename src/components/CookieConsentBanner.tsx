import { Link } from "@tanstack/react-router";

import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useI18n } from "@/i18n";

export function CookieConsentBanner() {
  const { consent, accept, reject } = useCookieConsent();
  const { t } = useI18n();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookie.aria}
      className="fixed inset-x-0 bottom-0 z-[9998] border-t border-white/10 bg-[#111318] text-white shadow-[0_-20px_50px_-30px_rgba(0,0,0,0.6)]"
    >
      <div className="container-x mx-auto flex max-w-[1240px] flex-col items-center gap-4 py-5 text-sm md:flex-row md:justify-between md:gap-8">
        <p className="min-w-0 text-center text-white/75 md:text-left">
          {t.cookie.before}{" "}
          <Link to="/politica-de-privacidade" className="underline hover:text-white">
            {t.cookie.link}
          </Link>
          {t.cookie.after}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-sm border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:border-white hover:text-white"
          >
            {t.cookie.reject}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-ink"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
