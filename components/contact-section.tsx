"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"
import SpecularButton from "./SpecularButton"
import { ScrollFloat, ScrollReveal, StaggerChildren, StaggerItem } from "./scroll-reveal"

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
          <ScrollFloat>
            <p className="leading-relaxed text-muted-foreground">{t.contact.body}</p>
          </ScrollFloat>

          <StaggerChildren className="mt-8 grid gap-3">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <StaggerItem key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
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
                </StaggerItem>
              )
            })}
          </StaggerChildren>

          <ScrollReveal className="mt-8 flex justify-center" delay={0.2}>
            <SpecularButton
              size="md"
              radius={14}
              tint="#FF9FFC"
              tintOpacity={0.1}
              blur={8}
              textColor="#f8f5ff"
              lineColor="#FF9FFC"
              baseColor="#5227FF"
              intensity={1.1}
              followMouse
              proximity={220}
              autoAnimate
              href="mailto:khanttun10@gmail.com"
            >
              <Mail className="h-4 w-4" />
              {t.contact.email}
            </SpecularButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
