import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";

import { CreamBar, SiteFooter, SiteHeader } from "../components/site-chrome";
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

const contactInputClass =
  "w-full border border-cream/20 bg-transparent px-5 py-3 text-sm font-light text-cream placeholder:text-magenta outline-none transition-colors focus:border-magenta";

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
            <div className="pointer-events-none absolute inset-0 z-[1] bg-ink/10" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-ink via-ink/55 to-transparent" aria-hidden="true" />
            <div className="dot-hero-right" aria-hidden="true" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-5 pt-32 md:px-12 md:pb-6">
            <div className="mx-auto mb-8 max-w-6xl reveal-up md:mb-10">
              <h1 className="sr-only">XALI – a treatment and a treat</h1>
              <p className="text-shadow-strong mx-auto max-w-3xl text-[13px] font-bold uppercase leading-6 tracking-[0.04em] text-cream md:text-base md:leading-7">
                XALI is a modular system that combines PEMF and massage,
                <br className="hidden sm:block" /> with a focus on flexibility, practical use and the horse’s comfort.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[1080px]">
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="#enquire"
                  className="inline-flex min-w-[218px] items-center justify-center border border-magenta bg-magenta px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
                >
                  Find your lokal dealer
                </a>
                <a
                  href="#features"
                  className="inline-flex min-w-[218px] items-center justify-center border border-magenta bg-magenta px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
                >
                  Explore the system
                </a>
              </div>
            </div>
          </div>
        </section>

        <CreamBar href="#collection">» Discover XALI «</CreamBar>

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
            </figure>

            <div className="md:px-8">
              <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
                Developed in the stable – for life with horses
              </h2>
              <p className="mt-8 max-w-lg text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                XALI did not begin at a desk. The idea grew out of many years of working with horses and technical treatment equipment – and from a desire to create a solution that we would genuinely want to use on our own horses.
              </p>
              <p className="mt-5 max-w-lg text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                The result is a flexible system where the horse's comfort, the user's everyday needs and the requirements of professional practitioners have been considered throughout the entire development process.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="relative bg-cream px-5 py-24 text-ink md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
              A system designed for real life
            </h2>
          <div className="mt-12 border-t border-ink/15">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-6 md:grid-cols-[3rem_1fr] md:gap-6">
                  <span className="font-display text-xl text-magenta md:text-2xl">{benefit.number}.</span>
                  <div>
                    <h3 className="text-xs font-normal uppercase tracking-[0.28em] text-ink md:text-sm">{benefit.title}</h3>
                    <p className="mt-3 text-base font-light leading-7 text-ink/70 md:text-lg md:leading-8">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 flex justify-center">
              <a
                href="#technology"
                className="inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
              >
                Learn about the technology
              </a>
            </div>
          </div>
        </section>

        <section id="technology" className="relative border-y border-cream/10 bg-ink px-5 py-24 md:px-12 md:py-40 dot-field dot-field-technology">
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div>
                <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl lg:text-7xl">
                  The horse is not just the user. The horse is where it all begins.
                </h2>
                <p className="mx-auto mt-9 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                  Technology only has value when it works in the real world. That is why we do not only look at measurements and technical results. We also observe the horse.
                </p>
                <p className="mx-auto mt-5 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                  Is the product calm and comfortable to wear?
                </p>
                <p className="mx-auto mt-5 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                  These questions have been at the heart of the entire development of XALI.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="relative bg-cream px-5 py-24 text-ink md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 border-t border-ink/15 pt-16 md:grid-cols-2 md:gap-24 md:pt-20">
            <div>
              <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                Tested, changed and tested again
              </h3>
              <p className="mt-6 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                Product development is rarely a straight path. Along the way, we have designed, built prototypes, tested materials and rejected solutions that did not work well enough.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                Every change has taught us something. That knowledge is now built into XALI – from the modular design and coil placement to pockets, stitching and choice of materials.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                Thought through from electronics to textiles
              </h3>
              <p className="mt-6 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                Behind XALI is a close collaboration between experience from the equestrian world and technical development. Electronics, coils, programmes and power supply have been developed as parts of one integrated solution.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                The goal has been clear: the technology must be reliable and practical – and it must work in the real world where horses and people use it.
              </p>
              <Link
                to="/technology"
                className="mt-8 inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
              >
                Learn about the technology
              </Link>
            </div>
          </div>
        </section>

        <CreamBar href="#team">» Meet the people behind XALI «</CreamBar>

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
              <h2 className="max-w-4xl font-display text-3xl leading-snug text-cream md:text-5xl">
                A small team with a big ambition
              </h2>
              <p className="mt-7 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                XALI was not developed by a large corporation. It was created by a small, dedicated team with many years of experience in horses, treatment equipment, technology and the practical needs of customers.
              </p>
              <p className="mt-5 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                Trine brings many years of experience from the equestrian world and a deep understanding of users' everyday needs. Dennis is the technical driving force, turning ideas into electronics and functional solutions, while Gitte is the practitioner who understands what horses need to perform at their best, both in training and in competition.
              </p>
              <p className="mt-5 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
                Together, we are developing the product we ourselves have been missing.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
              >
                Meet the team
              </Link>
            </div>
          </figure>
        </section>

        <section id="danish-development" className="relative border-y border-cream/10 bg-ink-soft px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl leading-tight text-cream md:text-6xl">
              Developed with care in Bogense
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
              XALI is taking shape in Denmark, where technology, textiles and skilled craftsmanship come together. Our close development process allows us to follow every detail, respond to the experience gained through testing and continuously improve the system.
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-5 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50 md:text-[11px]">Supported by</p>
            <p className="mt-3 font-display text-3xl text-ink md:text-5xl">LAG-MANK</p>
            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-7 text-ink/70 md:text-lg md:leading-8">
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
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="font-display text-4xl leading-tight text-cream md:text-7xl">
              Not just a treatment – but also a treat.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
              Discover a modular system developed with a passion for the horse, respect for the user's everyday needs and a focus on the details that make a real difference in everyday use.
            </p>
            <form onSubmit={handleContactSubmit} noValidate className="mt-12 flex flex-col gap-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your name</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Your name" className={contactInputClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Your email address</label>
                  <input id="contact-email" name="email" type="email" required placeholder="Your email address" className={contactInputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Your phone number</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="Your phone number" className={contactInputClass} />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Your message</label>
                <textarea id="contact-message" name="message" required rows={5} placeholder="Your message" className={`${contactInputClass} resize-none`} />
              </div>
              {contactError ? (
                <p className="text-sm font-light text-cream">{contactError}</p>
              ) : null}
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:bg-magenta-deep hover:border-magenta-deep"
                >
                  Send message
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
                >
                  Contact us
                </Link>
              </div>
            </form>
          </div>
        </section>

        <section id="newsletter" className="relative bg-ink px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Sign up for the newsletter
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-8 text-mist md:text-lg md:leading-9">
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

      <SiteFooter />
    </div>
  );
}
