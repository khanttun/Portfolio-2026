"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function ContactSection() {
  const { t } = useLanguage()

  const links = [
    {
      label: t.contact.email,
      href: "mailto:khanttun10@gmail.com",
      icon: Mail,
      value: "khanttun10@gmail.com",
    },
    {
      label: t.contact.github,
      href: "https://github.com/khanttun",
      icon: Github,
      value: "github.com/khanttun",
    },
    {
      label: t.contact.linkedin,
      href: "https://www.linkedin.com/in/khant-zayar-tun-b27434345/",
      icon: Linkedin,
      value: "linkedin.com/in/Khant-Zayar-Tun",
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.contact.label} title={t.contact.title} />

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="leading-relaxed text-muted-foreground">{t.contact.body}</p>

          <div className="mt-8 grid gap-3">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">{link.label}</p>
                      <p className="text-xs text-muted-foreground">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
