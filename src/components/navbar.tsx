"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { nav, site } from "@/lib/site";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-center gap-2" aria-label={site.name}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-royal text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105">
            PJ
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {site.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active
                      ? "text-royal"
                      : "text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Book Me To Speak
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-[var(--line)] lg:hidden">
          <ul className="container-x grid gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-base ${
                    pathname === item.href ? "bg-royal/10 text-royal" : "text-[var(--fg)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="btn-primary w-full">
                Book Me To Speak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
