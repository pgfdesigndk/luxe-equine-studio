import { createFileRoute } from "@tanstack/react-router";

import { CreamBar, SiteFooter, SiteHeader } from "../components/site-chrome";

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

function TechnologyPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-cream font-body antialiased selection:bg-magenta selection:text-cream">
      <SiteHeader />
      <main>
        <section className="dot-field dot-field-technology relative border-b border-cream/10 bg-ink px-5 pb-24 pt-32 md:px-12 md:pb-40 md:pt-44">
          <div className="relative mx-auto max-w-4xl">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">PEMF · 01</p>
            <h1 className="mt-7 font-display text-4xl leading-tight text-cream md:text-6xl">
              What is PEMF?
            </h1>
            <p className="mt-8 text-base font-light leading-8 text-mist md:text-lg md:leading-9">
              PEMF stands for Pulsed Electromagnetic Fields. The technology works by means of
              applicators that emit controlled magnetic pulses.
            </p>
            <p className="mt-5 text-base font-light leading-8 text-mist md:text-lg md:leading-9">
              PEMF is a non-thermal and non-invasive technology that can form part of a horse’s
              daily routine. The system can be used both before and after physical activity – as a
              calm part of the preparation before training or as part of the horse’s well-being and
              recovery afterwards.
            </p>
            <p className="mt-5 text-base font-light leading-8 text-mist md:text-lg md:leading-9">
              During use, the horse can stand calmly in the stable while wearing the equipment and
              the selected programme is running. When PEMF is combined with massage in one
              integrated system, its use can be adapted to the individual horse and incorporated as
              a practical supplement to training, care and daily management.
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-5 py-24 text-ink md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl border-t border-ink/15 pt-16 md:pt-20">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">Practical use · 02</p>
            <h2 className="mt-7 max-w-3xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Adapted to the individual horse
            </h2>
            <p className="mt-6 max-w-3xl text-base font-light leading-8 text-ink/70 md:text-lg md:leading-9">
              Every horse is different. The programme and duration should therefore always be
              selected based on the individual horse and the product’s instructions for use. During
              use, it is important to observe the horse’s behaviour and response.
            </p>
            <p className="mt-5 max-w-3xl text-base font-light italic leading-8 text-ink/60 md:text-lg md:leading-9">
              PEMF should be considered a supplement and not a replacement for veterinary
              examination, diagnosis or treatment. In cases of illness, injury, pregnancy, implants
              or other special circumstances, a veterinarian should be consulted before use.
            </p>

            <h3 className="mt-16 font-display text-2xl leading-tight text-ink md:text-3xl">
              Practical benefits of PEMF
            </h3>
            <div className="mt-10 border-t border-ink/15">
              {pemfBenefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-5 md:grid-cols-[3rem_1fr] md:gap-6"
                >
                  <span className="font-display text-lg leading-7 text-magenta md:text-xl">
                    {benefitNumerals[index]}.
                  </span>
                  <p className="text-base font-light leading-7 text-ink/70 md:text-lg md:leading-8">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dot-constellation relative bg-ink px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-[13px] uppercase tracking-[0.3em] text-magenta">
              Therapeutic effects · 03
            </p>
            <h2 className="mt-7 font-display text-3xl leading-tight text-cream md:text-5xl">
              XALI may contribute to
            </h2>
            <ul className="mt-12 grid gap-x-16 gap-y-5 sm:grid-cols-2">
              {therapeuticEffects.map((effect) => (
                <li key={effect} className="flex items-start gap-4 border-b border-cream/10 pb-5">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                  <span className="text-base font-light leading-7 text-mist md:text-lg md:leading-8">
                    {effect}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CreamBar href="/about">» Meet the people behind XALI «</CreamBar>
      </main>
      <SiteFooter />
    </div>
  );
}
