import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { XaliButton } from "../components/xali-button";
import cinematicHero from "../assets/xali-hero-poster.jpg.asset.json";
import heroFilm from "../assets/xali-hero-film-compatible.mp4.asset.json";
import heroFilmWebm from "../assets/xali-hero-film.webm.asset.json";
import collectionImg from "../assets/xali-horse-1.jpeg.asset.json";
import developmentImg from "../assets/xali-horse-7.jpeg.asset.json";
import teamImg from "../assets/xali-horse-8.jpeg.asset.json";

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

const contactInputClass =
  "w-full border border-cream/30 bg-transparent px-5 py-3 text-sm font-normal text-cream placeholder:font-semibold placeholder:text-magenta outline-none transition-colors focus:border-magenta";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, "Please write a message.").max(2000),
});

function Index() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [contactError, setContactError] = useState<string | null>(null);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      phone: (formData.get("phone") as string | null)?.trim() || undefined,
      message: formData.get("message") ?? "",
    });
    if (!parsed.success) {
      setContactError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }
    setContactError(null);
    const { name, email, phone, message } = parsed.data;
    const subject = encodeURIComponent(`XALI enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`,
    );
    window.location.href = `mailto:trine@broholm-consult.dk?subject=${subject}&body=${body}`;
  };

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
      <SiteHeader home />

      <main>
        <section className="hero-cinematic relative h-[760px] overflow-hidden bg-ink text-center md:h-[clamp(760px,100svh,920px)]">
          <div className="absolute inset-0 overflow-hidden">
            <video
              ref={heroVideoRef}
              poster={cinematicHero.url}
              width={1920}
              height={1080}
              className="absolute inset-x-0 top-[-4%] h-[108%] w-full object-cover object-center md:top-[-8%] md:h-[116%]"
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
              className="pointer-events-none absolute inset-0 z-[1] bg-ink/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-ink via-ink/55 to-transparent"
              aria-hidden="true"
            />
            <div className="dot-hero-right" aria-hidden="true" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-5 pt-32 md:px-12 md:pb-6">
            <div className="mx-auto mb-8 max-w-6xl reveal-up md:mb-10">
              <h1 className="sr-only">XALI – a treatment and a treat</h1>
              <p className="text-shadow-strong mx-auto max-w-3xl text-[13px] font-bold uppercase leading-6 tracking-[0.04em] text-cream md:text-base md:leading-7">
                XALI is a modular system that combines PEMF and massage,
                <br className="hidden sm:block" /> with a focus on flexibility, practical use and
                the horse’s comfort.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[1080px]">
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="#enquire"
                  className="inline-flex min-w-[218px] items-center justify-center border border-magenta bg-magenta px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
                >
                  Find your local dealer
                </a>
                <a
                  href="#features"
                  className="inline-flex min-w-[218px] items-center justify-center border border-magenta bg-magenta px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
                >
                  Explore the system
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="collection"
          className="relative bg-cream px-5 py-16 text-ink md:px-12 md:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-24">
            <figure className="relative overflow-hidden">
              <img
                src={collectionImg.url}
                alt="Horse wearing the complete XALI therapy blanket with neck piece in the stable aisle"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale-[18%] transition-transform duration-1000 hover:scale-[1.025]"
                loading="lazy"
              />
            </figure>

            <div className="md:px-8">
              <h2 className="font-display text-4xl font-black leading-tight text-ink md:text-6xl">
                Developed in the stable – for life with horses
              </h2>
              <p className="mt-8 max-w-lg text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                XALI did not begin at a desk. The idea grew out of many years of working with horses
                and technical treatment equipment – and from a desire to create a solution that we
                would genuinely want to use on our own horses.
              </p>
              <p className="mt-5 max-w-lg text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                The result is a flexible system where the horse's comfort, the user's everyday needs
                and the requirements of professional practitioners have been considered throughout
                the entire development process.
              </p>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative bg-ink px-5 py-16 text-cream md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-display text-4xl font-black leading-tight text-cream md:text-6xl">
              A system designed for real life
            </h2>
            <div className="mt-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.number}
                  className={`py-6 ${index < benefits.length - 1 ? "border-b border-cream/15" : ""}`}
                >
                  <div>
                    <h3 className="font-body text-base font-bold text-cream md:text-lg">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-base font-normal leading-7 text-cream/80 md:text-lg md:leading-8">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 flex justify-center">
              <XaliButton asChild>
                <Link to="/technology">Learn about the technology</Link>
              </XaliButton>
            </div>
          </div>
        </section>

        <section
          id="technology"
          className="relative bg-cream px-5 py-14 text-ink md:px-12 md:py-20"
        >
          <div className="mx-auto max-w-7xl space-y-14 md:space-y-20">
            <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
              <figure className="relative order-1 overflow-hidden">
                <img
                  src={developmentImg.url}
                  alt="Horse in the riding arena wearing the XALI therapy blanket"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover grayscale-[18%] transition-transform duration-1000 hover:scale-[1.025]"
                  loading="lazy"
                />
              </figure>
              <div className="order-2">
                <h3 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                  Tested, changed and tested again
                </h3>
                <p className="mt-6 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                  Product development is rarely a straight path. Along the way, we have designed,
                  built prototypes, tested materials and rejected solutions that did not work well
                  enough.
                </p>
                <p className="mt-5 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                  Every change has taught us something. That knowledge is now built into XALI – from
                  the modular design and coil placement to pockets, stitching and choice of
                  materials.
                </p>
                <XaliButton asChild className="mt-8">
                  <Link to="/technology">Learn about the technology</Link>
                </XaliButton>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
              <div className="order-2 md:order-1">
                <h3 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                  Thought through from electronics to textiles
                </h3>
                <p className="mt-6 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                  Behind XALI is a close collaboration between experience from the equestrian world
                  and technical development. Electronics, coils, programmes and power supply have
                  been developed as parts of one integrated solution.
                </p>
                <p className="mt-5 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                  The goal has been clear: the technology must be reliable and practical – and it
                  must work in the real world where horses and people use it.
                </p>
                <XaliButton asChild className="mt-8">
                  <Link to="/about">Learn about the team</Link>
                </XaliButton>
              </div>
              <figure className="relative order-1 md:order-2 overflow-hidden">
                <img
                  src={teamImg.url}
                  alt="Horse owner adjusting the XALI therapy blanket on her horse"
                  width={1280}
                  height={853}
                  className="aspect-[4/5] w-full object-cover grayscale-[18%] transition-transform duration-1000 hover:scale-[1.025]"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          id="enquire"
          className="relative border-t border-cream/15 bg-ink px-5 py-16 text-cream md:px-12 md:py-20"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <h2 className="font-display text-4xl font-black leading-tight text-cream md:text-6xl">
                Contact
              </h2>
              <p className="mt-6 max-w-xl text-base font-normal leading-8 text-cream/80 md:text-lg md:leading-9">
                You can always contact us here. We respond to all enquiries within 24 hours on
                weekdays.
              </p>
              <address className="mt-10 not-italic text-base font-bold leading-8 text-cream md:text-lg">
                <strong className="font-bold text-cream">Broholm</strong>
                <br />
                Østre Havnevej 12
                <br />
                5400 Bogense, Denmark
                <br />
                <a
                  className="font-bold text-magenta hover:text-magenta-deep"
                  href="mailto:trine@broholm-consult.dk"
                >
                  trine@broholm-consult.dk
                </a>
                <br />
                <a
                  className="font-bold text-magenta hover:text-magenta-deep"
                  href="tel:+4520138876"
                >
                  (0045) 20 13 88 76
                </a>
                <br />
                Company registration no. 30607376
              </address>
            </div>
            <form
              onSubmit={handleContactSubmit}
              noValidate
              className="flex flex-col gap-4 text-left lg:pt-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={contactInputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className={contactInputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Your phone number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className={contactInputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message"
                  className={`${contactInputClass} resize-none`}
                />
              </div>
              {contactError ? (
                <p className="text-sm font-bold text-cream">{contactError}</p>
              ) : null}
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <XaliButton type="submit">Contact us</XaliButton>
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
