import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import bannerImg from "../assets/xali-horse-2.jpeg.asset.json";
import deviceImg from "../assets/xali-horse-3.jpeg.asset.json";
import hindImg from "../assets/xali-horse-7.jpeg.asset.json";
import neckImg from "../assets/xali-horse-4.jpeg.asset.json";
import logoAsset from "../assets/xali-logo.png.asset.json";


export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "XALI Technology — Understanding PEMF therapy for horses" },
      {
        name: "description",
        content: "An evidence-informed introduction to PEMF therapy for horses: how pulsed electromagnetic fields work, potential applications and the limits of current equine research.",
      },
      { property: "og:title", content: "XALI Technology — Understanding PEMF therapy for horses" },
      {
        property: "og:description",
        content: "Explore how PEMF interacts with equine tissues, its potential role in rehabilitation and recovery, and what the scientific evidence says.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechnologyPage,
});

const biologicalProcesses = [
  {
    title: "Muscles and muscular tension",
    text: "PEMF may influence muscular tension and sensitivity. Small equine studies have reported reduced palpation sensitivity and muscular tension following treatment, although research remains limited.",
  },
  {
    title: "Pain and discomfort",
    text: "PEMF is being investigated for potential effects on pain and inflammatory mechanisms. Recent equine research has reported some short-term changes in horses with osteoarthritis, but objective measurements have not consistently demonstrated the same effects.",
  },
  {
    title: "Inflammation",
    text: "Electromagnetic fields may influence some cellular signalling pathways involved in inflammation. This does not mean that PEMF simply ‘removes inflammation’; it may potentially modulate aspects of the biological response.",
  },
  {
    title: "Bone and tissue healing",
    text: "Bone is a particularly interesting area of PEMF research. Experimental equine research has demonstrated increased bone formation in PEMF-treated bone defects compared with control sites.",
  },
  {
    title: "Recovery",
    text: "PEMF is commonly used following exercise and competition. Strong evidence that it generally accelerates recovery or improves performance in healthy sport horses is still lacking.",
  },
];

const applications = [
  "As an adjunct for muscular tension and soreness",
  "During recovery following exercise or competition",
  "As part of rehabilitation following injury",
  "As an adjunctive modality for certain musculoskeletal problems",
  "In rehabilitation involving bone tissue",
  "Alongside physiotherapy, manual therapy and structured rehabilitation",
];

const fieldSteps = [
  "PEMF blanket",
  "Pulsed electromagnetic field",
  "Interaction with tissue",
  "Potential biological effects",
];

const placements = [
  {
    img: neckImg,
    title: "Neck and shoulder",
    alt: "Horse standing in an indoor arena wearing the XALI blanket positioned over the neck, shoulder and chest",
    text: "Coils placed along the neck, shoulder and chest — commonly used when these areas are stiff or sensitive after work.",
    fit: "object-[50%_0%]",
  },
  {
    img: deviceImg,
    title: "Back and loin",
    alt: "Close-up of the XALI blanket fitted over the horse’s back and loin with the control unit resting on top",
    text: "The most common placement, covering the back and loin from the withers towards the croup.",
    fit: "object-center brightness-[1.32] contrast-[1.06] saturate-[1.05]",
  },
  {
    img: hindImg,
    title: "Hindquarters and croup",
    alt: "Horse in profile wearing the XALI blanket over the hindquarters, croup and loin",
    text: "Coverage across the croup and pelvic region, often used during rehabilitation of the hindquarters.",
    fit: "object-[50%_45%]",
  },
];



const references = [
  { pmid: "29775839", text: "Gaynor JS, Hagberg S, Gurfein BT. Veterinary applications of pulsed electromagnetic field therapy. Research in Veterinary Science. 2018;119:1–8." },
  { pmid: "36611674", text: "Systematic review of electrotherapy modalities in veterinary medicine." },
  { pmid: "42556520", text: "Equine study of PEMF and distal tarsal osteoarthritis (2026)." },
  { pmid: "41514765", text: "Equine pilot study investigating magnetotherapy and longissimus dorsi sensitivity (2026)." },
  { pmid: "8410466", text: "Experimental equine bone-healing study using low-frequency pulsed electromagnetic fields." },
];

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h3 className="font-body text-base font-bold leading-7 text-ink md:text-lg">{title}</h3>
      <div className="mt-3 space-y-4 text-sm font-normal leading-7 text-ink/85 md:text-base md:leading-8">
        {children}
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">{children}</h2>;
}

function TechnologyPage() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased selection:bg-magenta selection:text-cream">
      <SiteHeader light />
      <main className="px-5 pb-16 pt-40 md:px-12 md:pb-20 md:pt-48">
        <article className="mx-auto w-full max-w-[1480px]">
          <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
            <span className="text-magenta">Technology:</span>{" "}
            <span className="text-ink">PEMF therapy for horses</span>
          </h1>
          <p className="mt-5 text-base font-medium leading-8 text-ink/85 md:text-lg">
            An accessible, evidence-informed introduction.
          </p>

          <figure className="mt-8 md:mt-10">
            <img
              src={bannerImg.url}
              alt="Horse wearing the XALI therapy blanket with its owner"
              className="aspect-[21/9] w-full object-cover"
            />
          </figure>

          <section className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-12" aria-label="An introduction to PEMF">
            <Block title="What is PEMF?">
              <p>Magnetic therapy is increasingly used in horses as an adjunct to treatment, rehabilitation and recovery following training and competition.</p>
              <p>PEMF stands for Pulsed Electromagnetic Field Therapy. A PEMF blanket produces weak, pulsed electromagnetic fields around different areas of the horse’s body.</p>
            </Block>
            <Block title="Pulsed fields, not permanent magnets">
              <p>PEMF differs from simply placing permanent magnets on the horse. With PEMF, the electromagnetic field continuously changes or ‘pulses’, allowing it to interact with biological processes within the tissues.</p>
              <p>The explanation here concerns PEMF in general, rather than evidence for a specific XALI product.</p>
            </Block>
          </section>

          <section className="mt-12 md:mt-16" aria-labelledby="body-heading">
            <div id="body-heading"><SectionHeading>What happens inside the horse’s body?</SectionHeading></div>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-ink/85 md:text-base md:leading-8">
              The horse’s body consists of billions of cells that communicate through electrical and chemical signals. Exposure to pulsed electromagnetic fields may influence some of these processes.
            </p>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {biologicalProcesses.map((process) => (
                <Block key={process.title} title={process.title}><p>{process.text}</p></Block>
              ))}
            </div>
          </section>

          <section className="mt-12 md:mt-16" aria-labelledby="blanket-heading">
            <div id="blanket-heading"><SectionHeading>How does a PEMF blanket work?</SectionHeading></div>
            <div className="mt-5 grid gap-6 text-sm leading-7 text-ink/85 md:grid-cols-2 md:gap-12 md:text-base md:leading-8">
              <p>The blanket contains electromagnetic coils positioned over different areas of the horse’s body. This allows PEMF to be applied across relatively large areas, including the back, lumbar region, neck and pelvic region.</p>
              <p>The blanket is therefore not physically ‘massaging’ the muscles with magnets. The therapeutic principle is based on interaction between pulsed electromagnetic fields and biological tissue.</p>
            </div>
            <ol className="mt-8 grid gap-4 border-y border-ink/15 py-6 md:grid-cols-4 md:gap-6 md:py-8">
              {fieldSteps.map((step, index) => (
                <li key={step} className="flex min-w-0 items-center justify-between gap-4 md:items-start">
                  <span className="font-body text-sm font-bold leading-6 text-ink md:text-base">{step}</span>
                  {index < fieldSteps.length - 1 && (
                    <>
                      <ArrowRight className="mt-1 hidden size-5 shrink-0 text-magenta md:block" aria-hidden="true" />
                      <ArrowDown className="size-5 shrink-0 text-magenta md:hidden" aria-hidden="true" />
                    </>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-7 text-ink/85">Potential effects include changes in cellular signalling, pain modulation, inflammatory processes and tissue repair.</p>
          </section>

          <section className="mt-12 md:mt-16" aria-labelledby="placements-heading">
            <div id="placements-heading"><SectionHeading>Three placements, one system</SectionHeading></div>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-ink/85 md:text-base md:leading-8">
              The same blanket can be positioned over different areas of the horse’s body, depending on where the work is needed. The coil layout follows the area being treated, and the control unit stays accessible on top.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
              {placements.map((placement) => (
                <figure key={placement.title} className="min-w-0">
                  <img
                    src={placement.img.url}
                    alt={placement.alt}
                    className={`aspect-[4/3] w-full object-cover grayscale-[18%] ${placement.fit}`}
                    loading="lazy"
                  />

                  <figcaption className="mt-4 border-t-2 border-magenta pt-3">
                    <span className="font-body text-sm font-bold uppercase leading-6 tracking-[0.1em] text-ink md:text-base">
                      {placement.title}
                    </span>
                    <span className="mt-2 block text-sm leading-7 text-ink/85 md:text-base md:leading-8">
                      {placement.text}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>


          <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16">
            <section aria-labelledby="applications-heading">
              <div id="applications-heading"><SectionHeading>When might PEMF be useful?</SectionHeading></div>
              <ul className="mt-6 space-y-4">
                {applications.map((application) => (
                  <li key={application} className="flex items-start gap-3 text-sm leading-7 text-ink/85 md:text-base md:leading-8">
                    <Check className="mt-1.5 size-4 shrink-0 text-magenta" aria-hidden="true" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="science-heading">
              <div id="science-heading"><SectionHeading>What does the science say?</SectionHeading></div>
              <div className="mt-6 space-y-5 text-sm leading-7 text-ink/85 md:text-base md:leading-8">
                <p>Scientific research shows that pulsed electromagnetic fields can interact with biological processes. Equine research has investigated areas including bone formation, muscular sensitivity and osteoarthritis.</p>
                <p>However, clinical research in horses remains relatively limited. It is therefore not scientifically justified to conclude that PEMF is effective for every condition for which magnetic therapy may be promoted.</p>
              </div>
            </section>
          </div>

          <aside className="mt-10 border-l-2 border-magenta pl-5 md:mt-12 md:pl-7" aria-label="Veterinary guidance">
            <h3 className="font-body text-base font-bold text-ink md:text-lg">A supplement — not a substitute</h3>
            <p className="mt-3 max-w-5xl text-sm leading-7 text-ink/85 md:text-base md:leading-8">
              PEMF should be considered an adjunct to treatment rather than a replacement for a proper diagnosis. Persistent pain, lameness, neurological signs or unexplained loss of performance should be appropriately investigated by a veterinarian.
            </p>
          </aside>

          <div className="mt-12 grid items-center gap-8 md:mt-16 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12">
            <p className="max-w-4xl font-body text-lg font-bold leading-8 text-ink md:text-xl md:leading-9">
              In simple terms: PEMF may be a useful addition to equine treatment, rehabilitation and recovery — but it should not be regarded as a miracle treatment.
            </p>
            <div className="justify-self-start text-center md:justify-self-end">
              <img src={logoAsset.url} alt="XALI" className="mx-auto h-20 w-auto md:h-24" loading="lazy" />
              <p className="mt-2 text-sm text-ink">A treatment and a treat</p>
            </div>
          </div>

          <section className="mt-12 border-t border-ink/15 pt-8 md:mt-16" aria-labelledby="references-heading">
            <h2 id="references-heading" className="font-body text-lg font-bold text-ink md:text-xl">Selected scientific references</h2>
            <ol className="mt-5 space-y-4">
              {references.map((reference) => (
                <li key={reference.pmid} className="text-sm leading-7 text-ink/85">
                  {reference.text}{" "}
                  <a href={`https://pubmed.ncbi.nlm.nih.gov/${reference.pmid}/`} target="_blank" rel="noreferrer" className="break-words font-semibold text-ink underline decoration-magenta underline-offset-4 transition-colors hover:text-magenta">
                    PMID: {reference.pmid}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-5xl text-sm italic leading-7 text-ink/80">
              The scientific evidence varies considerably according to indication, device parameters, treatment protocol and outcome measure. Product-specific claims should therefore be evaluated separately from the broader PEMF literature.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
