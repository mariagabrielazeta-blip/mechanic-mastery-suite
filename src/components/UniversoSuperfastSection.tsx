import { Instagram } from "lucide-react";
import { useRef } from "react";

type InstagramProfile = {
  handle: string;
  name: string;
  url: string;
};

const PROFILES: InstagramProfile[] = [
  { handle: "@superfast", name: "Superfast", url: "https://www.instagram.com/" },
  { handle: "@reparashow", name: "Reparashow", url: "https://www.instagram.com/" },
];

const PLACEHOLDER_POSTS = Array.from({ length: 6 }, (_, index) => index);

function InstagramCarousel({ profile }: { profile: InstagramProfile }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    dragState.current = { dragging: true, startX: event.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    const state = dragState.current;
    if (!el || !state.dragging) return;
    const delta = event.clientX - state.startX;
    if (Math.abs(delta) > 3) state.moved = true;
    el.scrollLeft = state.startScroll - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (el?.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
    dragState.current.dragging = false;
  };

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

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
      >
        {PLACEHOLDER_POSTS.map((index) => (
          <div
            key={index}
            className="relative flex aspect-square min-w-[42%] shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary/15 via-[#F3F3EF] to-white p-3 text-center sm:min-w-[30%] md:min-w-[150px]"
          >
            <Instagram className="h-6 w-6 text-primary/60" strokeWidth={1.5} />
            <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.08em] text-ink-soft/80">
              Placeholder — substitua pela imagem real do post
            </span>
          </div>
        ))}
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
