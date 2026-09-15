import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "../assets/xali-hero.jpg";
import testimonialImg from "../assets/xali-testimonial.jpg";
import logoAsset from "../assets/xali-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XALI · ProSeries 3-in-1 Equine Therapy" },
      {
        name: "description",
        content:
          "XALI ProSeries 3-in-1: PEMF, deep-tissue massage and radiant heat in a hand-finished equine therapy blanket. Reserved for a small circle of stables.",
      },
      {
        property: "og:title",
        content: "XALI · ProSeries 3-in-1 Equine Therapy",
      },
      {
        property: "og:description",
        content:
          "A hand-finished blanket that unites PEMF, deep-tissue massage and radiant heat — engineered for the modern performance horse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink text-cream font-body antialiased dot-grain">
      {/* Nav */}
      <header className="relative z-10 px-5 pt-5 md:px-10 md:pt-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" aria-label="XALI home" className="block">
            <img src={logoAsset.url} alt="XALI" className="h-14 w-auto md:h-16" />
          </Link>
          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-mist md:flex">
            <a href="#collection" className="transition-colors hover:text-cream">
              Collection
            </a>
            <a href="#technology" className="transition-colors hover:text-cream">
              Technology
            </a>
            <a href="#enquire" className="text-cream transition-colors hover:text-magenta">
              Enquire
            </a>
          </nav>
          <a
            href="#enquire"
            className="md:hidden text-[11px] font-medium uppercase tracking-[0.18em] text-cream"
          >
            Enquire
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl">
        {/* Hero */}
        <section className="dot-field dot-field-hero relative overflow-hidden px-5 pt-10 pb-8 md:px-10 md:pt-16 md:pb-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-magenta">
              Equine Therapy · ProSeries 3-in-1
            </p>
            <h1 className="mt-5 font-display text-5xl font-light leading-[0.95] text-cream md:text-6xl lg:text-7xl">
              It's a treat and a treatment.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-mist md:text-lg md:leading-relaxed max-w-[44ch]">
              A hand-finished blanket that unites PEMF, deep-tissue massage and
              radiant heat — engineered for the modern performance horse.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3.5 text-sm font-medium text-cream ring-1 ring-magenta transition-colors hover:bg-magenta/90"
              >
                Request an invitation
              </a>
              <a
                href="#technology"
                className="inline-flex items-center gap-2 border-b border-cream/30 pb-1 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
              >
                Discover the craft
              </a>
            </div>
          </div>
        </section>

        {/* Cinematic product showcase */}
        <section id="collection" className="px-5 md:px-10">
          <div className="relative overflow-hidden rounded-3xl md:rounded-[32px]">
            <img
              src={heroImg}
              alt="XALI ProSeries 3-in-1 therapy blanket on a thoroughbred"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover md:aspect-[16/9]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-orchid md:text-xs">
                    The ProSeries
                  </p>
                  <p className="mt-1 font-display text-2xl text-cream md:text-3xl">
                    Therapy Blanket
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl text-magenta md:text-3xl">3-in-1</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-mist md:text-xs">
                    PEMF · Massage · Heat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefit zones */}
        <section className="px-5 pt-14 md:px-10 md:pt-20">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-magenta">
              Three Zones
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">
              Performance, recovery, wellness — one blanket.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
            <div className="rounded-[20px] bg-ink-soft p-5 ring-1 ring-white/[0.05]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">
                  01 — Performance
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
              </div>
              <p className="mt-3 text-base leading-relaxed text-cream/90">
                Radiant heat and targeted massage warm the musculature before
                work, priming stride and suppleness.
              </p>
            </div>

            <div className="rounded-[20px] bg-ink-soft p-5 ring-1 ring-white/[0.05]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">
                  02 — Recovery
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-orchid" />
              </div>
              <p className="mt-3 text-base leading-relaxed text-cream/90">
                Low-frequency PEMF supports cellular repair and eases
                post-competition stiffness, session after session.
              </p>
            </div>

            <div className="rounded-[20px] bg-magenta/10 p-5 ring-1 ring-magenta/25">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-magenta">
                  03 — Wellness
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
              </div>
              <p className="mt-3 text-base leading-relaxed text-cream/90">
                A calm, consistent daily ritual that keeps the horse supple,
                settled and comfortable through the season.
              </p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section id="technology" className="dot-field dot-field-technology relative px-5 pt-14 md:px-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-magenta">
                The Technology
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">
                PEMF, quietly at work beneath the weave.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mist md:text-lg md:leading-relaxed max-w-[46ch]">
                Pulsed electromagnetic field therapy is woven through the interior,
                delivering gentle, calibrated pulses that reach deep tissue
                without a single strap or electrode.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-[16px] bg-ink-soft p-4 text-center ring-1 ring-white/[0.05]">
                <p className="font-display text-2xl text-magenta md:text-3xl">15</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-mist leading-tight">
                  Therapy modes
                </p>
              </div>
              <div className="rounded-[16px] bg-ink-soft p-4 text-center ring-1 ring-white/[0.05]">
                <p className="font-display text-2xl text-cream md:text-3xl">12h</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-mist leading-tight">
                  Cordless runtime
                </p>
              </div>
              <div className="rounded-[16px] bg-ink-soft p-4 text-center ring-1 ring-white/[0.05]">
                <p className="font-display text-2xl text-orchid md:text-3xl">42°</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-mist leading-tight">
                  Even radiant heat
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="px-5 pt-14 md:px-10 md:pt-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-magenta">
            In the Stable
          </p>
          <figure className="mt-6 max-w-3xl">
            <blockquote className="font-display text-2xl leading-snug text-cream md:text-3xl lg:text-4xl">
              "The ProSeries has changed how I manage recovery after a hard
              weekend. It's the quiet difference in the stable."
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img
                src={testimonialImg}
                alt="Mette Kjær, Head of Racing at Nordstald Equestrian"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-medium text-cream">Mette Kjær</p>
                <p className="text-xs text-mist">
                  Head of Racing, Nordstald Equestrian
                </p>
              </div>
            </figcaption>
          </figure>
        </section>

        {/* Exclusive CTA */}
        <section id="enquire" className="px-5 pt-14 pb-8 md:px-10 md:pt-20 md:pb-16">
          <div className="dot-panel relative overflow-hidden rounded-3xl bg-magenta-deep/30 p-7 ring-1 ring-magenta/25 md:rounded-[32px] md:p-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-orchid">
                By Invitation
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">
                Reserved for a small circle of stables.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream/70 md:text-lg md:leading-relaxed max-w-[42ch]">
                Each ProSeries is hand-finished in Denmark and paired with a
                dedicated treatment concierge. Tell us about your stable.
              </p>
              <a
                href="#enquire"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-magenta px-6 py-4 text-sm font-medium text-cream ring-1 ring-magenta transition-colors hover:bg-magenta/90 md:w-auto"
              >
                Request your invitation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-5 pb-10 md:px-10">
        <div className="mx-auto max-w-6xl border-t border-cream/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link to="/" aria-label="XALI home" className="block">
              <img src={logoAsset.url} alt="XALI" className="h-20 w-auto" loading="lazy" />
            </Link>
            <p className="text-[11px] uppercase tracking-[0.18em] text-mist">
              Danmark · Est. 2021
            </p>
          </div>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-mist/70">
            XALI is a premium equine therapy house. This page is a brand and
            lead-generation experience, not a shop.
          </p>
        </div>
      </footer>
    </div>
  );
}
