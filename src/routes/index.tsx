import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logoAsset from "../assets/xali-logo.png.asset.json";
import cinematicHero from "../assets/xali-customer-hero.jpeg.asset.json";
import heroFilm from "../assets/xali-hero-film-compatible.mp4.asset.json";
import heroFilmWebm from "../assets/xali-hero-film.webm.asset.json";
import productImg from "../assets/xali-customer-collection.jpeg.asset.json";
import testimonialImg from "../assets/xali-customer-detail.jpeg.asset.json";
import invitationImg from "../assets/xali-customer-invitation.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XALI · Technology developed with the horse at the centre" },
      {
        name: "description",
        content:
          "XALI is a modular system that combines PEMF and massage, with a focus on flexibility, practical use and the horse's comfort.",
      },
      { property: "og:title", content: "XALI · Technology developed with the horse at the centre" },
      {
        property: "og:description",
        content:
          "A modular system that combines PEMF and massage, developed in the stable for life with horses.",
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
    title: "Flexible and modular",
    text: "Choose the solution that suits your needs – neck, blanket or the complete system.",
  },
  {
    number: "II",
    title: "PEMF and massage",
    text: "Two technologies combined in one carefully designed system to become part of the horse's routine.",
  },
  {
    number: "III",
    title: "Comfort comes first",
    text: "The fit, materials, freedom of movement and positioning of the system's components have all been developed with the horse in mind.",
  },
  {
    number: "IV",
    title: "Practical for everyday use",
    text: "XALI is designed for people who work with horses every day. That is why the system needs to be easy to handle and fit naturally into stable life. The system can be disassembled and washed.",
  },
];

function Index() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const startPlayback = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => undefined);
    };

    startPlayback();
    video.addEventListener("canplay", startPlayback);
    window.addEventListener("pageshow", startPlayback);
    document.addEventListener("visibilitychange", startPlayback);

    return () => {
      video.removeEventListener("canplay", startPlayback);
      window.removeEventListener("pageshow", startPlayback);
      document.removeEventListener("visibilitychange", startPlayback);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-cream font-body antialiased selection:bg-magenta selection:text-cream">
      <header className="absolute inset-x-0 top-0 z-30 px-5 py-6 md:px-12 md:py-9">
        <div className="mx-auto grid max-w-[1480px] grid-cols-3 items-center">
          <a href="#collection" className="hidden text-[13px] uppercase tracking-[0.36em] text-cream/60 transition-colors hover:text-cream md:block">
            Discover XALI
          </a>
          <Link to="/" aria-label="XALI home" className="col-start-1 justify-self-start md:col-start-2 md:justify-self-center">
            <img src={logoAsset.url} alt="XALI" className="h-16 w-auto md:h-20" />
          </Link>
          <div className="col-start-3 justify-self-end relative" ref={menuRef}>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="group flex h-10 w-10 items-center justify-center text-cream/80 transition-colors hover:text-magenta focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="4" x2="4" y2="20" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-5 w-60 origin-top-right animate-scale-in overflow-hidden rounded-sm border border-cream/10 bg-ink/95 shadow-2xl backdrop-blur-xl">
                <nav className="flex flex-col py-5">
                  <a
                    href="#enquire"
                    onClick={() => setMenuOpen(false)}
                    className="group relative px-8 py-4 text-left font-body text-[15px] font-light uppercase tracking-[0.26em] text-cream/90 transition-colors duration-300 hover:text-magenta"
                  >
                    <span className="relative z-10">Contact</span>
                    <div className="absolute inset-0 bg-cream/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-magenta transition-all duration-300 group-hover:h-1/2" />
                  </a>
                  <a
                    href="#collection"
                    onClick={() => setMenuOpen(false)}
                    className="group relative px-8 py-4 text-left font-body text-[15px] font-light uppercase tracking-[0.26em] text-cream/90 transition-colors duration-300 hover:text-magenta"
                  >
                    <span className="relative z-10">About XALI</span>
                    <div className="absolute inset-0 bg-cream/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-magenta transition-all duration-300 group-hover:h-1/2" />
                  </a>
                  <a
                    href="#technology"
                    onClick={() => setMenuOpen(false)}
                    className="group relative px-8 py-4 text-left font-body text-[15px] font-light uppercase tracking-[0.26em] text-cream/90 transition-colors duration-300 hover:text-magenta"
                  >
                    <span className="relative z-10">Technology</span>
                    <div className="absolute inset-0 bg-cream/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-magenta transition-all duration-300 group-hover:h-1/2" />
                  </a>
                </nav>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="hero-cinematic relative flex min-h-[92svh] items-end justify-center overflow-hidden px-5 pb-32 text-center md:min-h-screen md:items-center md:pb-0">
          <video
            ref={heroVideoRef}
            poster={cinematicHero.url}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={heroFilm.url} type="video/mp4" />
            <source src={heroFilmWebm.url} type="video/webm" />
          </video>
          <div
            className="absolute inset-0 z-[1] bg-black/25 pointer-events-none"
            aria-hidden="true"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="dot-hero-right" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-5xl reveal-up">
            <h1 className="text-shadow-white mt-7 font-display text-5xl leading-[0.94] text-magenta sm:text-6xl md:text-8xl lg:text-[7rem]">
              Technology developed with the horse at the centre
            </h1>
            <p className="text-shadow-white-strong mt-5 text-base font-body font-black uppercase tracking-[0.35em] text-ink md:mt-6 md:text-lg">
              FOR THE BETTER HORSE
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-7 text-cream/90 md:text-base md:leading-8">
              XALI is a modular system that combines PEMF and massage, with a focus on flexibility, practical use and the horse's comfort.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xs font-light uppercase tracking-[0.22em] text-cream/70 md:text-[13px]">
              Not just a treatment – but also a treat.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:bg-magenta-deep hover:border-magenta-deep"
              >
                Discover XALI
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center border border-cream/40 bg-transparent px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta hover:bg-magenta/10 hover:text-magenta"
              >
                Explore the system
              </a>
            </div>
          </div>

        </section>

        <div className="relative z-20 flex min-h-14 items-center justify-center bg-cream px-5 py-4 text-center md:min-h-16">
          <a href="#collection" className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl">
            » Discover XALI «
          </a>
        </div>

        <section id="collection" className="relative bg-ink px-5 py-24 md:px-12 md:py-40 dot-scatter">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-24">
            <figure className="relative overflow-hidden">
              <img
                src={productImg.url}
                alt="Close-up of the XALI ProSeries blanket textile with embroidered magenta logo"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale-[18%] transition-transform duration-1000 hover:scale-[1.025]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-ink/70 px-5 py-5 backdrop-blur-sm md:px-7">
                <span className="text-[9px] uppercase tracking-[0.32em] text-cream/60">The XALI system</span>
                <span className="font-display text-xl text-magenta">3-in-1</span>
              </figcaption>
            </figure>

            <div className="md:px-8">
              <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Introduction · 01</p>
              <h2 className="mt-7 font-display text-4xl leading-tight text-cream md:text-6xl">
                Developed in the stable – for life with horses
              </h2>
              <p className="mt-8 max-w-lg text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                XALI did not begin at a desk. The idea grew out of many years of working with horses and technical treatment equipment – and from a desire to create a solution that we would genuinely want to use on our own horses.
              </p>
              <p className="mt-5 max-w-lg text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                The result is a flexible system where the horse's comfort, the user's everyday needs and the requirements of professional practitioners have been considered throughout the entire development process.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="relative border-y border-cream/10 bg-ink-soft px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Key product features · 02</p>
            <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight text-cream md:text-6xl">
              A system designed for real life
            </h2>
            <div className="mt-12 border-t border-cream/10">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-cream/10 py-6 md:grid-cols-[3rem_1fr] md:gap-6">
                  <span className="font-display text-xl text-magenta md:text-2xl">{benefit.number}.</span>
                  <div>
                    <h3 className="text-xs font-normal uppercase tracking-[0.28em] text-cream md:text-sm">{benefit.title}</h3>
                    <p className="mt-3 text-sm font-light leading-6 text-mist md:text-base md:leading-7">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-20 flex min-h-14 items-center justify-center bg-cream px-5 py-4 text-center md:min-h-16">
          <a href="#technology" className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl">
            » Learn about the technology «
          </a>
        </div>

        <section id="technology" className="relative border-y border-cream/10 bg-ink px-5 py-24 md:px-12 md:py-40 dot-field dot-field-technology">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
              <div>
                <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Horse First · 03</p>
                <p className="mt-8 text-xs uppercase leading-7 tracking-[0.22em] text-cream/50">Comfort<br />Freedom of movement<br />Practical use</p>
              </div>
              <div>
                <h2 className="max-w-4xl font-display text-4xl leading-tight text-cream md:text-6xl lg:text-7xl">
                  The horse is not just the user. The horse is where it all begins.
                </h2>
                <p className="mt-9 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  Technology only has value when it works in the real world. That is why we do not only look at measurements and technical results. We also observe the horse.
                </p>
                <p className="mt-5 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  Is the product calm and comfortable to wear?
                </p>
                <p className="mt-5 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  These questions have been at the heart of the entire development of XALI.
                </p>
              </div>
            </div>

            <div className="mt-24 grid gap-16 border-t border-cream/10 pt-16 md:grid-cols-2 md:gap-24">
              <div>
                <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Development · 03.1</p>
                <h3 className="mt-7 font-display text-3xl leading-tight text-cream md:text-4xl">
                  Tested, changed and tested again
                </h3>
                <p className="mt-6 text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  Product development is rarely a straight path. Along the way, we have designed, built prototypes, tested materials and rejected solutions that did not work well enough.
                </p>
                <p className="mt-5 text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  Every change has taught us something. That knowledge is now built into XALI – from the modular design and coil placement to pockets, stitching and choice of materials.
                </p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Technology · 03.2</p>
                <h3 className="mt-7 font-display text-3xl leading-tight text-cream md:text-4xl">
                  Thought through from electronics to textiles
                </h3>
                <p className="mt-6 text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  Behind XALI is a close collaboration between experience from the equestrian world and technical development. Electronics, coils, programmes and power supply have been developed as parts of one integrated solution.
                </p>
                <p className="mt-5 text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  The goal has been clear: the technology must be reliable and practical – and it must work in the real world where horses and people use it.
                </p>
                <a
                  href="#enquire"
                  className="mt-8 inline-flex items-center justify-center border border-magenta bg-transparent px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-magenta transition-all duration-300 hover:bg-magenta hover:text-cream"
                >
                  Learn about the technology
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-20 flex min-h-14 items-center justify-center bg-cream px-5 py-4 text-center md:min-h-16">
          <a href="#team" className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl">
            » Meet the people behind XALI «
          </a>
        </div>

        <section id="team" className="relative bg-ink px-5 py-24 md:px-12 md:py-40">
          <figure className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-20">
            <img
                src={testimonialImg.url}
                alt="Detail of the XALI therapy blanket's magenta textile and therapy ring"
                width={1280}
                height={853}
                className="h-40 w-32 object-cover object-center md:h-72 md:w-56"
              loading="lazy"
            />
            <div>
              <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">The people behind XALI · 04</p>
              <h2 className="mt-7 max-w-4xl font-display text-3xl leading-snug text-cream md:text-5xl">
                A small team with a big ambition
              </h2>
              <p className="mt-7 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                XALI was not developed by a large corporation. It was created by a small, dedicated team with many years of experience in horses, treatment equipment, technology and the practical needs of customers.
              </p>
              <p className="mt-5 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                Trine brings many years of experience from the equestrian world and a deep understanding of users' everyday needs. Dennis is the technical driving force, turning ideas into electronics and functional solutions, while Gitte is the practitioner who understands what horses need to perform at their best, both in training and in competition.
              </p>
              <p className="mt-5 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                Together, we are developing the product we ourselves have been missing.
              </p>
              <a
                href="#enquire"
                className="mt-8 inline-flex items-center justify-center border border-magenta bg-transparent px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-magenta transition-all duration-300 hover:bg-magenta hover:text-cream"
              >
                Meet the team
              </a>
            </div>
          </figure>
        </section>

        <section id="danish-development" className="relative border-y border-cream/10 bg-ink-soft px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Danish development · 05</p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-cream md:text-6xl">
              Developed with care in Bogense
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
              XALI is taking shape in Denmark, where technology, textiles and skilled craftsmanship come together. Our close development process allows us to follow every detail, respond to the experience gained through testing and continuously improve the system.
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-5 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50 md:text-[11px]">Supported by</p>
            <p className="mt-3 font-display text-3xl text-ink md:text-5xl">LAG-MANK</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-6 text-ink/70 md:text-base md:leading-7">
              A big thank you to LAG-MANK for believing in the project and supporting us throughout the journey.
            </p>
          </div>
        </section>

        <section id="enquire" className="invitation-panel relative flex min-h-[72svh] items-center justify-center overflow-hidden border-t border-cream/10 px-5 py-24 text-center">
          <img
            src={invitationImg.url}
            alt="Close-up of the XALI therapy blanket with embroidered branding"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Ready to meet XALI?</p>
            <h2 className="mt-8 font-display text-4xl leading-tight text-cream md:text-7xl">
              Not just a treatment – but also a treat.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
              Discover a modular system developed with a passion for the horse, respect for the user's everyday needs and a focus on the details that make a real difference in everyday use.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:bg-magenta-deep hover:border-magenta-deep"
              >
                Explore XALI
              </a>
              <a
                href="mailto:hello@xali.dk"
                className="inline-flex items-center justify-center border border-cream/40 bg-transparent px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta hover:bg-magenta/10 hover:text-magenta"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>

        <section id="newsletter" className="relative bg-ink px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Pre-launch newsletter · 06</p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-cream md:text-5xl">
              Follow the XALI journey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
              Sign up to receive news about the product, the launch and the work behind XALI. We will share prototypes, technology, testing and the experiences that are shaping the finished system.
            </p>
            <form
              action="mailto:hello@xali.dk?subject=XALI%20newsletter%20signup"
              method="post"
              encType="text/plain"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
            >
              <label htmlFor="email" className="sr-only">Your email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full border border-cream/20 bg-transparent px-5 py-3 text-sm font-light text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-magenta sm:w-72"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:bg-magenta-deep hover:border-magenta-deep"
              >
                Keep me updated
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-cream/10 bg-ink px-5 py-10 md:px-12">
        <div className="mx-auto flex max-w-[1480px] items-end justify-between gap-8">
          <Link to="/" aria-label="XALI home">
            <img src={logoAsset.url} alt="XALI" className="h-16 w-auto opacity-75" loading="lazy" />
          </Link>
           <p className="text-right text-[8px] uppercase leading-5 tracking-[0.3em] text-cream/35">Developed in Bogense · Denmark<br />Horse First</p>
        </div>
      </footer>
    </div>
  );
}
