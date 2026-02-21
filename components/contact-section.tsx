"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import SectionHeading from "./section-heading"

const links = [
  {
    label: "Email",
    href: "mailto:khanttun10@gmail.com",
    icon: Mail,
    value: "khanttun10@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/khanttun",
    icon: Github,
    value: "github.com/khanttun",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khant-zayar-tun-b27434345/",
    icon: Linkedin,
    value: "linkedin.com/in/Khant-Zayar-Tun",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="05" title="Get in Touch" />

        <div className="mt-12 mx-auto max-w-2xl">
          <p className="text-muted-foreground leading-relaxed">
            {"I'm always open to discussing new projects, cloud architecture challenges, or opportunities to collaborate. Feel free to reach out through any of the channels below."}
          </p>

          <div className="mt-8 grid gap-3">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
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
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
