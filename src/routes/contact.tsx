import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { XaliButton } from "../components/xali-button";
import stableImg from "../assets/xali-horse-5.jpeg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — XALI" },
      {
        name: "description",
        content:
          "Get in touch with XALI. Broholm, Østre Havnevej 12, 5400 Bogense, Denmark. Email: trine@broholm-consult.dk. Resellers in Denmark, Norway, Sweden, Finland, Iceland, Estonia and Latvia.",
      },
      { property: "og:title", content: "Contact — XALI" },
      {
        property: "og:description",
        content: "Get in touch with XALI — developed in Bogense, Denmark.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type Reseller = {
  territory: string;
  name: string;
  website?: { label: string; href: string };
  email: string;
  mobile: { display: string; href: string };
};

const resellers: Reseller[] = [
  {
    territory: "Denmark – Norway – Sweden – Finland – Iceland",
    name: "Broholm Trading Aps",
    website: { label: "www.broholm.biz", href: "https://www.broholm.biz" },
    email: "trine@broholm-consult.dk",
    mobile: { display: "(0045) 20 13 88 76", href: "tel:+4520138876" },
  },
  {
    territory: "Estonia",
    name: "Terje Tilts",
    email: "Tiitsterje@gmail.com",
    mobile: { display: "+37 25163919", href: "tel:+3725163919" },
  },
  {
    territory: "Latvia",
    name: "Zane Cerednicenko",
    email: "Cerednicenkozane@gmail.com",
    mobile: { display: "+37 128617564", href: "tel:+37128617564" },
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink font-body antialiased selection:bg-magenta selection:text-cream">
      <SiteHeader light />
      <main>
        <section className="relative bg-cream px-5 pb-14 pt-32 md:px-12 md:pb-20 md:pt-44">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl font-black leading-tight text-ink md:text-6xl">
              Contact us
            </h1>
          </div>
        </section>

        <section className="relative bg-cream px-5 pb-24 md:px-12 md:pb-32">
          <div className="mx-auto max-w-4xl border-t border-ink/15 pt-16 text-center md:pt-20">
            <figure className="mb-14 flex justify-center">
              <img
                src={stableImg.url}
                alt="Horse wearing the XALI therapy blanket in the stable"
                className="h-72 w-auto object-cover md:h-96"
                loading="lazy"
              />
            </figure>
            <p className="font-display text-3xl font-black leading-tight text-ink md:text-5xl">
              Broholm
            </p>
            <p className="mt-8 text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
              Østre Havnevej 12
              <br />
              5400 Bogense
              <br />
              Denmark
            </p>

            <p className="mt-12 text-[13px] font-bold uppercase tracking-[0.16em] text-magenta">
              Phone
            </p>
            <a
              href="tel:+4520138876"
              className="mt-3 inline-block text-lg font-semibold text-ink transition-colors hover:text-magenta md:text-xl"
            >
              (0045) 20 13 88 76
            </a>

            <p className="mt-12 text-[13px] uppercase tracking-[0.3em] text-magenta">Email</p>
            <a
              href="mailto:trine@broholm-consult.dk"
              className="mt-3 inline-block text-lg font-semibold text-ink underline decoration-magenta/60 underline-offset-8 transition-colors hover:text-magenta md:text-xl"
            >
              trine@broholm-consult.dk
            </a>

            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-ink/70 md:text-sm">
              Company registration no. 30607376
            </p>

            <XaliButton asChild className="mt-12">
              <a href="mailto:trine@broholm-consult.dk">Send us an email</a>
            </XaliButton>
          </div>
        </section>

        <section
          id="resellers"
          className="relative scroll-mt-24 bg-cream px-5 pb-24 md:px-12 md:pb-32"
        >
          <div className="mx-auto max-w-6xl border-t border-ink/15 pt-16 md:pt-20">
            <h2 className="text-center font-display text-3xl font-black leading-tight text-ink md:text-5xl">
              Resellers
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-base font-normal leading-8 text-ink/80 md:text-lg md:leading-9">
              XALI is available through selected resellers in the Nordics and the Baltic states.
            </p>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
              {resellers.map((reseller) => (
                <li
                  key={reseller.name}
                  className="flex flex-col border border-ink/10 border-t-4 border-t-magenta bg-background/60 p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="text-[13px] font-bold uppercase leading-6 tracking-[0.14em] text-magenta">
                    {reseller.territory}
                  </p>
                  <p className="mt-3 font-display text-2xl font-black leading-tight text-ink">
                    {reseller.name}
                  </p>
                  <dl className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-[15px]">
                    {reseller.website ? (
                      <div className="grid grid-cols-[72px_1fr] gap-3">
                        <dt className="pt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-ink/55">
                          Web
                        </dt>
                        <dd>
                          <a
                            href={reseller.website.href}
                            className="font-semibold text-ink transition-colors hover:text-magenta"
                          >
                            {reseller.website.label}
                          </a>
                        </dd>
                      </div>
                    ) : null}
                    <div className="grid grid-cols-[72px_1fr] gap-3">
                      <dt className="pt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-ink/55">
                        Email
                      </dt>
                      <dd className="min-w-0">
                        <a
                          href={`mailto:${reseller.email}`}
                          className="break-words font-semibold text-ink transition-colors hover:text-magenta"
                        >
                          {reseller.email}
                        </a>
                      </dd>
                    </div>
                    <div className="grid grid-cols-[72px_1fr] gap-3">
                      <dt className="pt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-ink/55">
                        Mobile
                      </dt>
                      <dd>
                        <a
                          href={reseller.mobile.href}
                          className="font-semibold text-ink transition-colors hover:text-magenta"
                        >
                          {reseller.mobile.display}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
