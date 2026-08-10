import { useCallback, useEffect, useState } from "react";

export type CookieConsentValue = "accepted" | "rejected";

const STORAGE_KEY = "sfast-cookie-consent";

function readStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);

  useEffect(() => {
    setConsent(readStoredConsent());
  }, []);

  const setAndStore = useCallback((value: CookieConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }, []);

  const accept = useCallback(() => setAndStore("accepted"), [setAndStore]);
  const reject = useCallback(() => setAndStore("rejected"), [setAndStore]);
  const hasConsent = useCallback(() => readStoredConsent() === "accepted", []);

  return { consent, accept, reject, hasConsent };
}
