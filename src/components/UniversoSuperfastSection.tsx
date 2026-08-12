import { Instagram } from "lucide-react";

type InstagramProfile = {
  handle: string;
  name: string;
  url: string;
  embedUrl: string;
};

const PROFILES: InstagramProfile[] = [
  {
    handle: "@superfast",
    name: "Superfast",
    url: "https://www.instagram.com/superfast/",
    embedUrl: "https://snapwidget.com/embed/1128777",
  },
  {
    handle: "@reparashow",
    name: "Reparashow",
    url: "https://www.instagram.com/reparashow/",
    embedUrl: "https://snapwidget.com/embed/1128778",
  },
];

function InstagramCarousel({ profile }: { profile: InstagramProfile }) {
  return (
    <div className="min-w-0 rounded-[34px] border border-black/5 bg-white p-6 shadow-[0_30px_90px_-62px_rgba(17,17,17,0.85)] md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
            <Instagram className="h-5 w-5" />
          </span>
          <div>
            <div className="font-display text-2xl leading-none text-ink">{profile.name}</div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">{profile.handle}</div>
          </div>
        </div>
        <a
          href={profile.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:underline"
        >
          Seguir
        </a>
      </div>

      <div className="mt-6 w-full overflow-hidden rounded-2xl">
        <iframe
          src={profile.embedUrl}
          scrolling="no"
          title={`Posts from Instagram - ${profile.name}`}
          className="block w-full border-0"
          style={{ height: 600 }}
        />
      </div>
    </div>
  );
}

export function UniversoSuperfastSection() {
  return (
    <section className="bg-[#F8F8F6] py-24 text-ink md:py-32">
      <div className="container-x mx-auto max-w-[1240px]">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="eyebrow text-primary">Universo Superfast</span>
            </div>
            <h2 className="max-w-3xl text-4xl md:text-6xl">Acompanhe o dia a dia da Super Fast no Instagram.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Bastidores, dicas de gestão e histórias de oficinas direto dos nossos perfis oficiais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROFILES.map((profile) => (
            <InstagramCarousel key={profile.handle} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
