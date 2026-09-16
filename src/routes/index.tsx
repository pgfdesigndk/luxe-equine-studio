import { createFileRoute, Link } from "@tanstack/react-router";

import cinematicHero from "../assets/xali-cinematic-hero.jpg";
import productImg from "../assets/xali-hero.jpg";
import testimonialImg from "../assets/xali-testimonial.jpg";
import logoAsset from "../assets/xali-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XALI · ProSeries Equine Therapy" },
      {
        name: "description",
        content:
          "XALI ProSeries unites PEMF, deep-tissue massage and radiant heat in a hand-finished equine therapy blanket.",
      },
      { property: "og:title", content: "XALI · ProSeries Equine Therapy" },
      {
        property: "og:description",
        content:
          "A singular equine therapy experience, hand-finished for the modern performance horse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    number: "I",
    title: "Performance",
    text: "Radiant heat and targeted massage warm the musculature before work, priming stride and suppleness.",
  },
  {
    number: "II",
    title: "Recovery",
    text: "Low-frequency PEMF supports cellular repair and eases post-competition stiffness, session after session.",
  },
  {
    number: "III",
    title: "Wellness",
    text: "A calm, consistent daily ritual that keeps the horse supple, settled and comfortable through the season.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-cream font-body antialiased selection:bg-magenta selection:text-cream">
      <header className="absolute inset-x-0 top-0 z-30 px-5 py-6 md:px-12 md:py-9">
        <div className="mx-auto grid max-w-[1480px] grid-cols-3 items-center">
          <a href="#collection" className="hidden text-[9px] uppercase tracking-[0.36em] text-cream/60 transition-colors hover:text-cream md:block">
            Collection
          </a>
          <Link to="/" aria-label="XALI home" className="col-start-1 justify-self-start md:col-start-2 md:justify-self-center">
            <img src={logoAsset.url} alt="XALI" className="h-16 w-auto md:h-20" />
          </Link>
          <a href="#enquire" className="col-start-3 justify-self-end text-[9px] uppercase tracking-[0.36em] text-cream/70 transition-colors hover:text-magenta">
            Private enquiry
          </a>
        </div>
      </header>

      <main>
        <section className="hero-cinematic relative flex min-h-[92svh] items-end justify-center overflow-hidden px-5 pb-20 text-center md:min-h-screen md:items-center md:pb-0">
          <img
            src={cinematicHero}
            alt="Black performance horse wearing the XALI ProSeries therapy blanket"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover object-[44%_center] md:object-center"
            fetchPriority="high"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-5xl reveal-up">
            <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-magenta md:text-[10px]">
              Equine therapy · ProSeries 3-in-1
            </p>
            <h1 className="mt-7 font-display text-5xl leading-[0.94] text-cream sm:text-6xl md:text-8xl lg:text-[7rem]">
              It&apos;s a treat<br />and a treatment.
            </h1>
            <div className="mx-auto mt-8 h-px w-20 bg-magenta" />
            <p className="mx-auto mt-8 max-w-xl text-xs font-light uppercase leading-7 tracking-[0.16em] text-cream/65 md:text-sm">
              Three therapies. One hand-finished blanket. Created for the modern performance horse.
            </p>
          </div>
          <a href="#collection" aria-label="Explore the XALI collection" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[8px] uppercase tracking-[0.4em] text-cream/45 md:bottom-10">
            <span className="mx-auto mb-3 block h-10 w-px bg-magenta/70" />
            Discover
          </a>
        </section>

        <section id="collection" className="relative bg-ink px-5 py-24 md:px-12 md:py-40 dot-scatter">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-24">
            <figure className="relative overflow-hidden">
              <img
                src={productImg}
                alt="XALI ProSeries therapy blanket on a horse"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale-[18%] transition-transform duration-1000 hover:scale-[1.025]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-ink/70 px-5 py-5 backdrop-blur-sm md:px-7">
                <span className="text-[9px] uppercase tracking-[0.32em] text-cream/60">The ProSeries</span>
                <span className="font-display text-xl text-magenta">3-in-1</span>
              </figcaption>
            </figure>

            <div className="md:px-8">
              <p className="text-[9px] uppercase tracking-[0.48em] text-magenta">The collection · 01</p>
              <h2 className="mt-7 font-display text-4xl leading-tight text-cream md:text-6xl">
                Therapy, elevated to a ritual.
              </h2>
              <p className="mt-8 max-w-lg text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                Beneath the precise black silhouette, three advanced therapies work in concert. No noise. No compromise. Simply considered care, tailored to the rhythm of the horse.
              </p>
              <div className="mt-12 border-t border-cream/10">
                {benefits.map((benefit) => (
                  <div key={benefit.number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-cream/10 py-6">
                    <span className="font-display text-xl text-magenta">{benefit.number}.</span>
                    <div>
                      <h3 className="text-xs font-normal uppercase tracking-[0.28em] text-cream">{benefit.title}</h3>
                      <p className="mt-3 text-sm font-light leading-6 text-mist">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="relative border-y border-cream/10 bg-ink-soft px-5 py-24 md:px-12 md:py-40 dot-field dot-field-technology">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
              <div>
                <p className="text-[9px] uppercase tracking-[0.48em] text-magenta">The technology · 02</p>
                <p className="mt-8 text-xs uppercase leading-7 tracking-[0.22em] text-cream/50">PEMF<br />Deep-tissue massage<br />Radiant heat</p>
              </div>
              <div>
                <h2 className="max-w-4xl font-display text-4xl leading-tight text-cream md:text-6xl lg:text-7xl">
                  Quietly at work beneath the weave.
                </h2>
                <div className="mt-12 grid gap-8 border-t border-cream/10 pt-8 sm:grid-cols-3">
                  <div><p className="font-display text-4xl text-magenta">15</p><p className="mt-2 text-[9px] uppercase tracking-[0.26em] text-mist">Therapy modes</p></div>
                  <div><p className="font-display text-4xl text-cream">12h</p><p className="mt-2 text-[9px] uppercase tracking-[0.26em] text-mist">Cordless runtime</p></div>
                  <div><p className="font-display text-4xl text-cream">42°</p><p className="mt-2 text-[9px] uppercase tracking-[0.26em] text-mist">Even radiant heat</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-ink px-5 py-24 md:px-12 md:py-40">
          <figure className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-20">
            <img
              src={testimonialImg}
              alt="Mette Kjær, Head of Racing at Nordstald Equestrian"
              width={512}
              height={512}
              className="h-40 w-32 object-cover grayscale md:h-72 md:w-56"
              loading="lazy"
            />
            <div>
              <p className="text-[9px] uppercase tracking-[0.48em] text-magenta">In the stable · 03</p>
              <blockquote className="mt-7 max-w-4xl font-display text-3xl leading-snug text-cream md:text-5xl">
                “The quiet difference in the stable.”
              </blockquote>
              <figcaption className="mt-8 border-l border-magenta pl-5 text-[10px] uppercase leading-6 tracking-[0.22em] text-mist">
                Mette Kjær<br /><span className="text-cream/45">Head of Racing · Nordstald Equestrian</span>
              </figcaption>
            </div>
          </figure>
        </section>

        <section id="enquire" className="invitation-panel relative flex min-h-[72svh] items-center justify-center overflow-hidden border-t border-cream/10 px-5 py-24 text-center">
          <div className="relative z-10 max-w-4xl">
            <p className="text-[9px] uppercase tracking-[0.52em] text-magenta">By invitation</p>
            <h2 className="mt-8 font-display text-4xl leading-tight text-cream md:text-7xl">
              Reserved for a small circle of stables.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-mist">
              Each ProSeries is hand-finished in Denmark and paired with a dedicated treatment concierge.
            </p>
            <a href="mailto:hello@xali.dk" className="group mt-12 inline-flex flex-col items-center text-[10px] uppercase tracking-[0.36em] text-cream transition-colors hover:text-magenta">
              Request an invitation
              <span className="mt-4 h-px w-full bg-magenta transition-all duration-500 group-hover:w-1/2" />
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-cream/10 bg-ink px-5 py-10 md:px-12">
        <div className="mx-auto flex max-w-[1480px] items-end justify-between gap-8">
          <Link to="/" aria-label="XALI home">
            <img src={logoAsset.url} alt="XALI" className="h-16 w-auto opacity-75" loading="lazy" />
          </Link>
          <p className="text-right text-[8px] uppercase leading-5 tracking-[0.3em] text-cream/35">Denmark · Est. 2021<br />Equine therapy, refined</p>
        </div>
      </footer>
    </div>
  );
}