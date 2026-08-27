"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { nav, site } from "@/lib/site";
import { useTheme } from "./theme-provider";
import { Logo } from "./ui/logo";

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

  // Over the always-dark homepage hero (at the top, menu closed): use light nav styling.
  const overHeroDark = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center gap-4 md:h-20">
        <Link
          href="/"
          className="group flex shrink-0 items-center transition-transform duration-300 hover:opacity-90"
          aria-label={site.name}
        >
          <Logo tone={overHeroDark ? "light" : "auto"} />
        </Link>

        <ul className="mx-auto hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                    overHeroDark
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
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

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
              overHeroDark
                ? "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
                : "border-[var(--line)] text-[var(--muted)] hover:border-royal hover:text-royal"
            }`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link href="/contact" className="btn-primary hidden h-10 px-5 py-0 md:inline-flex">
            Book Me To Speak
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full border xl:hidden ${
              overHeroDark ? "border-white/30 text-white" : "border-[var(--line)]"
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-[var(--line)] xl:hidden">
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
