import { useState } from "react";

import { EUROPE_VIEWBOX, europeCountries } from "../lib/europe-map";

export type Reseller = {
  name: string;
  countries: string[];
  website?: { label: string; href: string };
  email: string;
  mobile: { display: string; href: string };
};

const countryNames: Record<string, string> = Object.fromEntries(
  europeCountries.map((c) => [c.code, c.name]),
);

export function ResellerMap({ resellers }: { resellers: Reseller[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const byCountry = new Map<string, Reseller>();
  resellers.forEach((r) => r.countries.forEach((c) => byCountry.set(c, r)));
  const active = selected ? byCountry.get(selected) : undefined;
  const codes = [...byCountry.keys()].sort((a, b) =>
    (countryNames[a] ?? a).localeCompare(countryNames[b] ?? b),
  );

  return (
    <div className="mt-14 grid items-start gap-8 md:mt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div className="border border-ink/10 bg-background/60 p-3 md:p-5">
        <svg viewBox={EUROPE_VIEWBOX} className="h-auto w-full" role="img" aria-label="Map of Europe">
          {europeCountries.map((c) => {
            const has = byCountry.has(c.code);
            const isSel = selected === c.code;
            return (
              <path
                key={c.code}
                d={c.d}
                onClick={has ? () => setSelected(c.code) : undefined}
                className={`stroke-cream transition-colors duration-200 [stroke-width:0.8] ${
                  has
                    ? `cursor-pointer ${isSel ? "fill-magenta-deep" : "fill-magenta/55 hover:fill-magenta"}`
                    : "fill-ink/10"
                }`}
              >
                <title>{c.name}</title>
              </path>
            );
          })}
        </svg>
      </div>

      <div className="lg:sticky lg:top-28">
        <div className="flex flex-wrap gap-2">
          {codes.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setSelected(code)}
              className={`border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                selected === code
                  ? "border-magenta bg-magenta text-cream"
                  : "border-ink/20 text-ink hover:border-magenta hover:text-magenta"
              }`}
            >
              {countryNames[code] ?? code}
            </button>
          ))}
        </div>

        <div className="mt-6 min-h-[260px] border border-ink/10 border-t-4 border-t-magenta bg-background/60 p-7">
          {active && selected ? (
            <div key={selected} className="animate-fade-in">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-magenta">
                {countryNames[selected]}
              </p>
              <p className="mt-3 font-display text-2xl font-black leading-tight text-ink md:text-3xl">
                {active.name}
              </p>
              <dl className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-[15px]">
                {active.website ? (
                  <Row label="Web">
                    <a href={active.website.href} className="font-semibold text-ink hover:text-magenta">
                      {active.website.label}
                    </a>
                  </Row>
                ) : null}
                <Row label="Email">
                  <a href={`mailto:${active.email}`} className="break-words font-semibold text-ink hover:text-magenta">
                    {active.email}
                  </a>
                </Row>
                <Row label="Mobile">
                  <a href={active.mobile.href} className="font-semibold text-ink hover:text-magenta">
                    {active.mobile.display}
                  </a>
                </Row>
              </dl>
            </div>
          ) : (
            <p className="text-base leading-8 text-ink/70">
              Select a highlighted country on the map to see your local XALI reseller.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[72px_1fr] gap-3">
      <dt className="pt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-ink/55">{label}</dt>
      <dd className="min-w-0">{children}</dd>
    </div>
  );
}
