import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

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
      { title: "XALI · Teknologi med hesten i centrum" },
      {
        name: "description",
        content:
          "XALI er et fleksibelt, modulopbygget system med PEMF og massage, udviklet med hestens komfort i centrum.",
      },
      { property: "og:title", content: "XALI · Teknologi med hesten i centrum" },
      {
        property: "og:description",
        content:
          "Et fleksibelt system med PEMF og massage, udviklet i stalden til livet med heste.",
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
    title: "Fleksibelt og modulopbygget",
    text: "Vælg den løsning, der passer til jeres behov – hals, dækken eller det samlede system.",
  },
  {
    number: "II",
    title: "PEMF og massage",
    text: "To teknologier samlet i ét gennemtænkt system til brug som en del af hestens rutine.",
  },
  {
    number: "III",
    title: "Komfort i fokus",
    text: "Pasform, materialer, bevægelsesfrihed og placeringen af systemets komponenter er udviklet med blik for hesten.",
  },
  {
    number: "IV",
    title: "Praktisk i hverdagen",
    text: "Systemet er enkelt at håndtere, passer naturligt ind i stalden og kan skilles ad og vaskes.",
  },
];

function Index() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-cream font-body antialiased selection:bg-magenta selection:text-cream">
      <header className="absolute inset-x-0 top-0 z-30 px-5 py-6 md:px-12 md:py-9">
        <div className="mx-auto grid max-w-[1480px] grid-cols-3 items-center">
          <a href="#collection" className="hidden text-[9px] uppercase tracking-[0.36em] text-cream/60 transition-colors hover:text-cream md:block">
            Oplev XALI
          </a>
          <Link to="/" aria-label="XALI home" className="col-start-1 justify-self-start md:col-start-2 md:justify-self-center">
            <img src={logoAsset.url} alt="XALI" className="h-16 w-auto md:h-20" />
          </Link>
          <a href="#enquire" className="col-start-3 justify-self-end text-[9px] uppercase tracking-[0.36em] text-cream/70 transition-colors hover:text-magenta">
            Kontakt os
          </a>
        </div>
      </header>

      <main>
        <section className="hero-cinematic relative flex min-h-[92svh] items-end justify-center overflow-hidden px-5 pb-20 text-center md:min-h-screen md:items-center md:pb-0">
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
            <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-magenta">
              A treatment and a treat
            </p>
            <h1 className="text-shadow-white mt-7 font-display text-5xl leading-[0.94] text-magenta sm:text-6xl md:text-8xl lg:text-[7rem]">
              The treatment and the treat
            </h1>
            <p className="text-shadow-white-strong mt-5 text-base font-body font-black uppercase tracking-[0.35em] text-ink md:mt-6 md:text-lg">
              FOR THE BETTER HORSE
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink via-ink/55 to-transparent px-5 pb-8 pt-28 md:pb-12 md:pt-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-body text-[10px] font-light uppercase tracking-[0.3em] text-cream/60 md:text-[11px]">
                XALI ProSeries 3-in-1
              </p>
              <p className="mt-3 font-display text-lg leading-snug text-cream md:text-2xl">
                Teknologi udviklet med hesten i centrum
              </p>
              <p className="mx-auto mt-3 max-w-xl text-[10px] font-light uppercase leading-6 tracking-[0.18em] text-cream/60 md:text-[11px] md:leading-7">
                PEMF og massage samlet i ét modulopbygget system — skabt med fokus på fleksibilitet, praktisk anvendelse og hestens komfort.
              </p>
            </div>
          </div>
        </section>

        <div className="relative z-20 flex min-h-14 items-center justify-center bg-cream px-5 py-4 text-center md:min-h-16">
          <a href="#enquire" className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl">
            » Find din lokale forhandler her «
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
                <span className="text-[9px] uppercase tracking-[0.32em] text-cream/60">XALI-systemet</span>
                <span className="font-display text-xl text-magenta">3-in-1</span>
              </figcaption>
            </figure>

            <div className="md:px-8">
              <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Vores historie · 01</p>
              <h2 className="mt-7 font-display text-4xl leading-tight text-cream md:text-6xl">
                Udviklet i stalden – til livet med heste
              </h2>
              <p className="mt-8 max-w-lg text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                XALI begyndte ikke ved et skrivebord. Idéen opstod gennem mange års arbejde med heste og teknisk behandlingsudstyr – og gennem ønsket om at skabe en løsning, vi selv gerne ville bruge på vores egne heste.
              </p>
              <p className="mt-5 max-w-lg text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                Resultatet er et fleksibelt system, hvor hestens komfort, brugerens hverdag og professionelle behandleres ønsker har været med i alle beslutninger.
              </p>
              <h3 className="mt-12 text-2xl leading-tight text-cream md:text-3xl">Et system skabt til virkeligheden</h3>
              <div className="mt-7 border-t border-cream/10">
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

        <div className="relative z-20 flex min-h-14 items-center justify-center bg-cream px-5 py-4 text-center md:min-h-16">
          <a href="#technology" className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl">
            » Dokumentation og teknisk data – klik her «
          </a>
        </div>

        <section id="technology" className="relative border-y border-cream/10 bg-ink-soft px-5 py-24 md:px-12 md:py-40 dot-field dot-field-technology">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
              <div>
                <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Horse First · 02</p>
                <p className="mt-8 text-xs uppercase leading-7 tracking-[0.22em] text-cream/50">Komfort<br />Bevægelsesfrihed<br />Praktisk anvendelse</p>
              </div>
              <div>
                <h2 className="max-w-4xl font-display text-4xl leading-tight text-cream md:text-6xl lg:text-7xl">
                  Hesten er ikke bare brugeren. Hesten er udgangspunktet.
                </h2>
                <p className="mt-9 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                  Teknologi har kun værdi, når den fungerer i virkeligheden. Derfor ser vi ikke kun på målinger og tekniske resultater. Vi observerer også hesten: Er produktet roligt og behageligt at have på? De spørgsmål har fulgt hele udviklingen af XALI.
                </p>
                <div className="mt-12 grid gap-8 border-t border-cream/10 pt-8 sm:grid-cols-3">
                  <div><p className="text-[13px] uppercase tracking-[0.26em] text-magenta">Udviklingen</p><h3 className="mt-4 text-2xl leading-tight text-cream">Testet, ændret og testet igen</h3><p className="mt-4 text-sm font-light leading-6 text-mist">Vi har tegnet, bygget prototyper, afprøvet materialer og forkastet løsninger, der ikke fungerede godt nok.</p></div>
                  <div><p className="text-[13px] uppercase tracking-[0.26em] text-magenta">Teknologien</p><h3 className="mt-4 text-2xl leading-tight text-cream">Fra elektronik til tekstil</h3><p className="mt-4 text-sm font-light leading-6 text-mist">Elektronik, spoler, programmer og strømforsyning er udviklet som dele af én samlet og praktisk løsning.</p></div>
                  <div><p className="text-[13px] uppercase tracking-[0.26em] text-magenta">Dansk udvikling</p><h3 className="mt-4 text-2xl leading-tight text-cream">Udviklet med omhu i Bogense</h3><p className="mt-4 text-sm font-light leading-6 text-mist">Her samles teknik, tekstil og godt håndværk i en tæt proces, hvor hver detalje løbende forbedres.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-20 flex min-h-14 items-center justify-center bg-cream px-5 py-4 text-center md:min-h-16">
          <a href="#enquire" className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl">
            » Kontakt XALI – klik her «
          </a>
        </div>

        <section className="relative bg-ink px-5 py-24 md:px-12 md:py-40">
          <figure className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-20">
            <img
                src={testimonialImg.url}
                alt="Detail of the XALI therapy blanket’s magenta textile and therapy ring"
                width={1280}
                height={853}
                className="h-40 w-32 object-cover object-center md:h-72 md:w-56"
              loading="lazy"
            />
            <div>
              <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Menneskene bag · 03</p>
              <h2 className="mt-7 max-w-4xl font-display text-3xl leading-snug text-cream md:text-5xl">
                Et lille team med en stor ambition
              </h2>
              <p className="mt-7 max-w-3xl text-sm font-light leading-7 text-mist md:text-base md:leading-8">
                XALI er skabt af et lille, engageret team med mange års erfaring inden for heste, behandlingsudstyr, teknik og kundernes praktiske behov. Sammen udvikler vi det produkt, vi selv har savnet.
              </p>
              <figcaption className="mt-8 border-l border-magenta pl-5 text-[13px] uppercase leading-6 tracking-[0.22em] text-mist">
                Trine · Dennis · Gitte<br /><span className="text-cream/45">Erfaring, teknik og kendskab til hesten</span>
              </figcaption>
            </div>
          </figure>
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
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Klar til at møde XALI?</p>
            <h2 className="mt-8 font-display text-4xl leading-tight text-cream md:text-7xl">
              Not just a treatment – but also a treat.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-mist">
              Oplev et modulopbygget system udviklet med passion for hesten, respekt for brugerens hverdag og fokus på de detaljer, der gør en reel forskel i anvendelsen.
            </p>
            <a href="mailto:hello@xali.dk" className="group mt-12 inline-flex flex-col items-center text-[10px] uppercase tracking-[0.36em] text-cream transition-colors hover:text-magenta">
              Kontakt os
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
           <p className="text-right text-[8px] uppercase leading-5 tracking-[0.3em] text-cream/35">Udviklet i Bogense · Danmark<br />Hesten kommer først</p>
        </div>
      </footer>
    </div>
  );
}