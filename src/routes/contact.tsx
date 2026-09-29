import { createFileRoute } from "@tanstack/react-router";

import { CreamBar, SiteFooter, SiteHeader } from "../components/site-chrome";

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
    <div className="min-h-screen overflow-hidden bg-ink text-cream font-body antialiased selection:bg-magenta selection:text-cream">
      <SiteHeader />
      <main>
        <section className="dot-scatter relative bg-ink px-5 pb-14 pt-14 md:px-12 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Contact · XALI</p>
            <h1 className="mt-7 font-display text-4xl leading-tight text-cream md:text-6xl">
              Contact us
            </h1>
          </div>
        </section>

        <section className="relative bg-ink px-5 pb-24 md:px-12 md:pb-40">
          <div className="mx-auto max-w-4xl border-t border-cream/10 pt-16 text-center md:pt-20">
            <p className="font-display text-3xl leading-tight text-cream md:text-5xl">Broholm</p>
            <p className="mt-8 text-base font-light leading-8 text-mist md:text-lg md:leading-9">
              Østre Havnevej 12
              <br />
              5400 Bogense
              <br />
              Denmark
            </p>

            <p className="mt-12 text-[13px] uppercase tracking-[0.3em] text-magenta">Email</p>
            <a
              href="mailto:trine@broholm-consult.dk"
              className="mt-3 inline-block text-lg font-light text-cream underline decoration-magenta/60 underline-offset-8 transition-colors hover:text-magenta md:text-xl"
            >
              trine@broholm-consult.dk
            </a>

            <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-cream/40 md:text-xs">
              Company registration no. 30607376
            </p>

            <a
              href="mailto:trine@broholm-consult.dk"
              className="mt-12 inline-flex items-center justify-center border border-magenta bg-magenta px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-cream transition-all duration-300 hover:border-magenta-deep hover:bg-magenta-deep"
            >
              Send us an email
            </a>
          </div>
        </section>

        <CreamBar href="/">» Back to the front page «</CreamBar>
      </main>
      <SiteFooter />
    </div>
  );
}
