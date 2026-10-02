import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logoAsset from "../assets/xali-logo.png.asset.json";

const menuItems = [
  { label: "Contact", to: "/contact" },
  { label: "About XALI", to: "/about" },
  { label: "Technology", to: "/technology" },
];

export function SiteHeader({ home = false, light = false }: { home?: boolean; light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[padding,background-color,backdrop-filter] duration-500 ${
        scrolled
          ? `border-b px-5 py-2 backdrop-blur-xl md:px-12 md:py-3 ${
              light ? "border-ink/10 bg-cream/90" : "border-cream/10 bg-ink/90"
            }`
          : "px-5 py-5 md:px-12 md:py-8"
      }`}
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-3 items-center">
        <div aria-hidden="true" />
        <Link
          to="/"
          aria-label="XALI home"
          className="col-start-2 flex flex-col items-center justify-self-center"
        >
          <img
            src={logoAsset.url}
            alt="XALI"
            className={`w-auto transition-[height] duration-500 ${
              scrolled ? "h-9 md:h-11" : "h-14 md:h-20"
            }`}
          />
          <span
            className={`whitespace-nowrap font-light transition-[margin,font-size,color] duration-500 ${
              scrolled
                ? `mt-0.5 text-[10px] md:text-xs ${light ? "text-ink/70" : "text-cream/70"}`
                : `mt-1 text-[12px] md:text-base ${home || light ? "text-ink" : "text-cream/70"}`
            }`}
          >
            A treatment and a treat
          </span>
        </Link>
        <div className="col-start-3 justify-self-end relative" ref={menuRef}>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`group flex items-center justify-center text-magenta transition-all duration-500 hover:text-magenta-deep focus:outline-none ${
              scrolled ? "h-11 w-11 md:h-12 md:w-12" : "h-16 w-16 md:h-[72px] md:w-[72px]"
            }`}
          >
            <svg
              className={`transition-[width,height] duration-500 ${
                scrolled ? "h-6 w-6 md:h-7 md:w-7" : "h-9 w-9 md:h-10 md:w-10"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-5 w-60 origin-top-right animate-scale-in overflow-hidden rounded-sm border border-cream/10 bg-ink/95 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col py-5">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="group relative px-8 py-4 text-left font-body text-[15px] font-light uppercase tracking-[0.26em] text-cream/90 transition-colors duration-300 hover:text-magenta"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-cream/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-magenta transition-all duration-300 group-hover:h-1/2" />
                  </Link>
                ))}
              </nav>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function CreamBar({ children, href }: { children: ReactNode; href: string }) {
  return (
    <div className="relative z-20 flex min-h-14 items-center justify-center border-y border-ink/10 bg-cream px-5 py-4 text-center md:min-h-16">
      {href.startsWith("#") ? (
        <a
          href={href}
          className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl"
        >
          {children}
        </a>
      ) : (
        <Link
          to={href}
          className="font-display text-lg text-magenta transition-colors hover:text-magenta-deep md:text-xl"
        >
          {children}
        </Link>
      )}
    </div>
  );
}

export function SiteFooter({ light = false }: { light?: boolean }) {
  return (
    <footer
      className={`relative px-5 py-10 md:px-12 ${
        light ? "border-t border-ink/15 bg-cream" : "border-t border-cream/10 bg-ink"
      }`}
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-[auto_minmax(0,1fr)] items-end gap-6 md:gap-8">
        <Link to="/" aria-label="XALI home" className="shrink-0">
          <img
            src={logoAsset.url}
            alt="XALI"
            className="h-16 w-auto max-w-none shrink-0 object-contain opacity-75"
            loading="lazy"
          />
        </Link>
        <p
          className={`min-w-0 text-right text-[10px] uppercase leading-5 tracking-[0.3em] md:text-xs ${
            light ? "text-ink/50" : "text-cream/35"
          }`}
        >
          Clever science, engineered, assembled and designed in Denmark
        </p>
      </div>
    </footer>
  );
}
