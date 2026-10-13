"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { navLinks } from "@/lib/constants";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="h-[3px] bg-accent" />
      <div className="border-b border-border">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <BrandMark className="h-8 w-8 text-xs" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              EU Autoline
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "border-b-2 border-accent pb-1.5 text-sm font-medium text-accent"
                      : "border-b-2 border-transparent pb-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  }
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center md:flex">
            <LanguageSwitcher className="border-l border-border pl-6" />
          </div>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-foreground md:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </Container>
      </div>

      {menuOpen && (
        <div className="border-b border-border md:hidden">
          <Container className="flex flex-col divide-y divide-border py-2">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    active
                      ? "py-3 text-sm font-medium text-accent"
                      : "py-3 text-sm font-medium text-foreground"
                  }
                >
                  {t(link.key)}
                </Link>
              );
            })}
            <LanguageSwitcher className="py-3" />
          </Container>
        </div>
      )}
    </header>
  );
}
