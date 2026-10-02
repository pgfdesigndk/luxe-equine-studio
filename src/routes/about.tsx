import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { XaliButton } from "../components/xali-button";
import testimonialImg from "../assets/xali-customer-detail.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About XALI — It began in the stable" },
      {
        name: "description",
        content:
          "XALI was developed by a small, dedicated team in Bogense, Denmark — with the horse at the centre of every decision.",
      },
      { property: "og:title", content: "About XALI — It began in the stable" },
      {
        property: "og:description",
        content:
          "A small team with a big ambition: combining experience from the equestrian world with modern technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  "The horse comes first.",
  "The technology must work in the real world.",
  "Comfort and practical use are essential.",
  "Development requires testing, honesty and persistence.",
  "Professional claims must be precise and supported by evidence.",
  "A well-designed solution should be offered at a responsible price.",
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink font-body antialiased selection:bg-magenta selection:text-cream">
      <SiteHeader light />
      <main>
        <section className="relative bg-cream px-5 pb-16 pt-32 md:px-12 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl font-black leading-tight text-ink md:text-6xl">
              It began in the stable
            </h1>
            <p className="mt-8 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
              Some ideas start at a desk. XALI began in the stable.
            </p>
            <p className="mt-5 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
              Through almost 18 years of working with horses and technical treatment equipment, we
              have developed a solid understanding of both the solutions that work and the
              challenges faced by riders, grooms and horse owners in everyday life.
            </p>
            <p className="mt-5 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
              With that experience came a question: Could we develop a system that was more
              flexible, more practical and created with an even greater focus on the horse? That
              became the beginning of XALI.
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-5 py-24 text-ink md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 border-t border-ink/15 pt-16 md:grid-cols-2 md:gap-24 md:pt-20">
            <div>
              <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                Developed with the horse at the centre
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                At XALI, every decision starts in the same place: with the horse.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                Comfort, calmness, fit and freedom of movement have been central throughout the
                development process. Technology only has value when it works in practice and can be
                naturally incorporated into the horse’s daily routine.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                That is why we do not only measure and test the technology. We also observe the
                horse. How does the horse stand while wearing the equipment? How does it respond? Is
                the system calm and practical to use? These observations are an important part of
                our development work.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                From idea to finished system
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                The development of XALI has not been a straight path. We have designed, built
                prototypes, tested materials and adjusted our solutions again and again.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                Some details worked immediately. Others did not. When something failed to meet our
                expectations, we changed it, tested it again and carried the lessons forward.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                This process has shaped every part of XALI – from textiles, stitching and fit to
                electronics, coils and programmes. Every detail has a purpose, and every decision
                has been made with a focus on flexibility, practical use and the horse’s comfort.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-y border-ink/15 bg-cream px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-20">
            <img
              src={testimonialImg.url}
              alt="Detail of the XALI therapy blanket's magenta textile and therapy ring"
              width={1280}
              height={853}
              className="h-40 w-32 object-cover object-center md:h-72 md:w-56"
              loading="lazy"
            />
            <div>
              <h2 className="max-w-4xl font-display text-3xl font-black leading-snug text-ink md:text-5xl">
                A small team with a big ambition
              </h2>
              <p className="mt-7 max-w-3xl text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                XALI was not developed by a large corporation. It was created by a small and
                dedicated team with many years of experience and a shared ambition to develop
                something that is genuinely useful for both horses and the people who care for them.
              </p>
              <p className="mt-5 max-w-3xl text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                Trine is the driving force behind the idea and brings her many years of experience
                with horses, treatment equipment, sales and the practical needs of customers into
                the development process. Dennis is the technical driving force, turning the ideas
                into a reliable and user-friendly system. His work includes electronics, coils,
                programmes and power supply. Gitte has many years of experience understanding what
                horses need and how to keep a horse fit during both training periods and
                competition.
              </p>
              <p className="mt-5 max-w-3xl text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
                Together, we combine experience from the equestrian world with technical development
                and an in-depth understanding of life in the stable.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-cream px-5 py-24 text-ink md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 border-t border-ink/15 pt-16 md:grid-cols-2 md:gap-24 md:pt-20">
            <div>
              <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                Developed in Denmark
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                XALI is developed and carefully assembled in Bogense. This is where textiles,
                electronics, craftsmanship and many months of development work come together.
              </p>
              <p className="mt-5 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                The close development process allows us to follow every detail, respond to the
                experience gained through our testing and continuously improve the system. We do not
                simply want to create another product, but a carefully considered solution that we
                ourselves would want to use on our own horses.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                Built on a few simple principles
              </h2>
              <ul className="mt-8">
                {principles.map((principle) => (
                  <li key={principle} className="border-b border-ink/15 py-4">
                    <span className="text-base font-light leading-7 text-ink/70 md:text-lg md:leading-8">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
                We are a small team with a big ambition: to combine our passion for the horse with
                modern technology and create a flexible system for the horse’s daily care,
                well-being and recovery.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-ink/15 bg-cream px-5 py-24 text-center md:py-32">
          <p className="font-display text-3xl font-black leading-tight text-magenta md:text-5xl">
            Not just a treatment – but also a treat.
          </p>
          <XaliButton asChild className="mt-10">
            <a href="/technology">Explore the technology</a>
          </XaliButton>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
