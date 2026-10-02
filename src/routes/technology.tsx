import { createFileRoute } from "@tanstack/react-router";

import type React from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import detailImg from "../assets/xali-customer-detail.jpeg.asset.json";
import logoAsset from "../assets/xali-logo.png.asset.json";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "The technology behind XALI — PEMF and massage" },
      {
        name: "description",
        content:
          "PEMF is a non-thermal and non-invasive technology that, combined with massage, becomes a practical part of the horse's daily routine.",
      },
      { property: "og:title", content: "The technology behind XALI — PEMF and massage" },
      {
        property: "og:description",
        content:
          "Pulsed Electromagnetic Fields and massage in one integrated system, adapted to the individual horse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechnologyPage,
});

const pemfBenefits = [
  "Can easily be integrated into the horse’s daily routine.",
  "Can be used both before and after training.",
  "Can be used with a focus on well-being, relaxation and recovery.",
  "Allows use on the whole body or selected areas.",
  "Is a non-thermal and non-invasive technology.",
  "Can be combined with massage in one integrated system.",
  "Can be used while the horse stands calmly in the stable.",
  "Can supplement training, care and daily management.",
];

const therapeuticEffects = [
  "Activation of blood circulation.",
  "Increased blood flow.",
  "Increased oxygenation of the blood.",
  "Muscle relaxation.",
  "Deep tissue massage.",
  "Stimulation of metabolism.",
  "Supporting the body’s natural healing processes.",
  "Shorter recovery periods.",
  "Pain relief.",
];

const benefitNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

function Chart({ variant }: { variant: "small" | "wide" }) {
  if (variant === "small") {
    return (
      <svg viewBox="0 0 200 110" className="mt-8 w-full" aria-hidden="true">
        {[10, 30, 50, 70, 90].map((y) => (
          <line key={y} x1="10" x2="195" y1={y} y2={y} className="stroke-ink/10" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={20 + i * 21}
            x2={20 + i * 21}
            y1="5"
            y2="95"
            className="stroke-ink/15"
          />
        ))}
        <polyline
          fill="none"
          className="stroke-magenta"
          strokeWidth="1.2"
          points="15,75 40,68 60,72 80,55 100,60 120,30 140,20 160,40 180,25 195,30"
        />
        <polyline
          fill="none"
          className="stroke-ink"
          strokeWidth="1"
          points="15,85 40,80 60,78 80,82 100,70 120,78 140,50 160,60 180,85 195,88"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 120" className="w-full" aria-hidden="true">
      {[10, 30, 50, 70, 90, 110].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} className="stroke-ink/40" />
      ))}
      <polyline
        fill="none"
        className="stroke-magenta"
        strokeWidth="2"
        points="10,36 80,32 150,12 250,20 330,28 390,14"
      />
      <rect x="4" y="30" width="10" height="10" className="fill-magenta" />
      <circle cx="390" cy="14" r="6" className="fill-magenta" />
      <polyline
        fill="none"
        className="stroke-ink"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        points="10,86 120,72 170,20 230,80 270,104 390,62"
      />
      <rect x="4" y="80" width="10" height="10" className="fill-ink" />
      <rect x="384" y="56" width="12" height="12" className="fill-ink" />
    </svg>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="font-body text-base font-bold text-ink md:text-lg">{title}</h3>
      <div className="mt-2 text-sm font-normal leading-6 text-ink/85 md:text-base md:leading-7">
        {children}
      </div>
    </div>
  );
}

function TechnologyPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink font-body antialiased selection:bg-magenta selection:text-cream">
      <SiteHeader light />
      <main className="px-4 pb-20 pt-32 md:px-10 md:pt-44">
        <article className="relative w-full px-6 py-14 text-ink md:px-16 md:py-20">
          <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
            <span className="text-magenta">Technical data:</span>{" "}
            <span className="text-ink">ProSeries 3-in-1</span>
          </h1>

          <figure className="relative mt-10">
            <img
              src={detailImg.url}
              alt="Close-up of the XALI blanket with PEMF applicators"
              className="aspect-[21/9] w-full object-cover"
            />
          </figure>

          <div className="relative mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Block title="What is PEMF?">
                PEMF stands for Pulsed Electromagnetic Fields. The technology works by means of
                applicators that emit controlled magnetic pulses. It is non-thermal and non-invasive
                and can form part of a horse’s daily routine – before training or as part of
                well-being and recovery afterwards.
              </Block>
              <Block title="In the stable">
                The horse can stand calmly in the stable while wearing the equipment and the
                selected programme is running.
              </Block>
            </div>
            <div>
              <Block title="Adapted to the individual horse">
                Every horse is different. Programme and duration should always be selected based on
                the individual horse and the instructions for use, observing behaviour and response.
              </Block>
              <Chart variant="small" />
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-x-8 sm:grid-cols-2">
                <Block title="Practical benefits">
                  <ul className="space-y-1">
                    {pemfBenefits.slice(0, 4).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Block>
                <Block title="Integrated system">
                  <ul className="space-y-1">
                    {pemfBenefits.slice(4).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Block>
              </div>
              <Chart variant="wide" />
              <div className="mt-8 grid items-end gap-x-8 sm:grid-cols-2">
                <Block title="XALI may contribute to">{therapeuticEffects.join(" ")}</Block>
                <div className="mb-8 text-center">
                  <img src={logoAsset.url} alt="XALI" className="mx-auto h-24 w-auto" />
                  <p className="mt-1 text-sm text-ink">A treatment and a treat</p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative mt-4 text-sm italic font-normal text-ink/75">
            PEMF is a supplement and not a replacement for veterinary examination, diagnosis or
            treatment. Consult a veterinarian in cases of illness, injury, pregnancy or implants.
          </p>
          <p className="relative mt-10 text-center text-base font-bold uppercase tracking-wide text-magenta">
            Get more info: xali.dk
          </p>
        </article>
      </main>
      <SiteFooter light />
    </div>
  );
}
