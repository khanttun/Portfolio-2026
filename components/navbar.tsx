"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.nav.home, href: "/#hero-section" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.certifications, href: "/#certifications" },
    { label: t.nav.awards, href: "/#awards" },
    { label: t.nav.contact, href: "/#contact" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/#hero-section"
          className={`group flex items-center gap-2 transition-colors ${
            scrolled ? "text-primary" : "text-primary drop-shadow-[0_1px_10px_rgba(255,159,252,0.45)]"
          }`}
          aria-label={t.nav.home}
        >
          <Terminal className="h-5 w-5 transition-transform group-hover:scale-110" />
          <span className="font-mono text-sm font-semibold tracking-wider">KT</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)] hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher compact />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={scrolled ? "text-muted-foreground" : "text-primary"}
            aria-label={t.nav.toggleMenu}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
