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
          "Get in touch with XALI. Broholm, Østre Havnevej 12, 5400 Bogense, Denmark. Email: trine@broholm-consult.dk.",
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

        <section className="relative bg-cream px-5 pb-24 md:px-12 md:pb-40">
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
              href="tel:12345678"
              className="mt-3 inline-block text-lg font-semibold text-ink transition-colors hover:text-magenta md:text-xl"
            >
              12345678
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
      </main>
      <SiteFooter />
    </div>
  );
}
