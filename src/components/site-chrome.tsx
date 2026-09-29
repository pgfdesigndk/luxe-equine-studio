import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logoAsset from "../assets/xali-logo.png.asset.json";

const menuItems = [
  { label: "Contact", to: "/contact" },
  { label: "About XALI", to: "/about" },
  { label: "Technology", to: "/technology" },
];

export function SiteHeader({ home = false }: { home?: boolean }) {
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
      className={`${
        home ? "absolute inset-x-0 top-0 z-30" : "relative z-30"
      } px-5 py-5 md:px-12 md:py-8`}
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-3 items-center">
        {home ? (
          <a
            href="#collection"
            className="hidden text-[13px] uppercase tracking-[0.36em] text-cream/60 transition-colors hover:text-cream md:block"
          >
            Discover XALI
          </a>
        ) : (
          <Link
            to="/"
            className="hidden text-[13px] uppercase tracking-[0.36em] text-cream/60 transition-colors hover:text-cream md:block"
          >
            Discover XALI
          </Link>
        )}
        <Link
          to="/"
          aria-label="XALI home"
          className="col-start-2 flex flex-col items-center justify-self-center"
        >
          <img src={logoAsset.url} alt="XALI" className="h-14 w-auto md:h-20" />
          <span
            className={`mt-1 whitespace-nowrap text-[12px] font-light md:text-base ${
              home ? "text-ink" : "text-cream/70"
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
            className="group flex h-16 w-16 items-center justify-center text-cream/90 transition-colors hover:text-magenta focus:outline-none md:h-[72px] md:w-[72px]"
          >
            <svg
              className="h-9 w-9 md:h-10 md:w-10"
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

export function SiteFooter() {
  return (
    <footer className="relative border-t border-cream/10 bg-ink px-5 py-10 md:px-12">
      <div className="mx-auto flex max-w-[1480px] items-end justify-between gap-8">
        <Link to="/" aria-label="XALI home">
          <img src={logoAsset.url} alt="XALI" className="h-16 w-auto opacity-75" loading="lazy" />
        </Link>
        <p className="text-right text-[10px] uppercase leading-5 tracking-[0.3em] text-cream/35 md:text-xs">
          Developed in Bogense · Denmark
          <br />
          Horse First
        </p>
      </div>
    </footer>
  );
}
