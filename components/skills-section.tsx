"use client"

import {
  Cloud,
  Container,
  GitBranch,
  Server,
  Shield,
  Terminal,
  Code2,
  Palette,
  Globe,
  Layers,
  FileCode,
  Braces,
  Cpu,
  Database,
  Binary,
} from "lucide-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"
import { ScrollReveal, StaggerChildren, StaggerItem } from "./scroll-reveal"

export default function SkillsSection() {
  const { t } = useLanguage()

const skillCategories = [
  {
    title: t.skills.frontend || "Frontend & UI",
    skills: [
      { name: "Next.js / React", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: FileCode },
      { name: "HTML / CSS", icon: Braces },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    title: "Backend & Development Tools", 
    skills: [
      { name: "PHP", icon: Server },
      { name: "Python", icon: Binary },
      { name: "C++ (Arduino)", icon: Cpu },
      { name: "Git / GitHub", icon: GitBranch },
      { name: "Supabase / Firebase", icon: Database },
      { name: "Cloudflare", icon: Cloud },
    ],
  },
  {
    title: t.skills.cloudDevops || "Cloud & DevOps",
    skills: [ 
      { name: "Cloud", icon: Cloud },
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: Layers },
      { name: "Terraform", icon: Server },
      { name: "CI/CD", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Security", icon: Shield },
    ],
  },
]

  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.skills.label} title={t.skills.title} />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1} y={36}>
              <h3 className="mb-6 font-mono text-sm font-medium uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <StaggerChildren className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <StaggerItem key={skill.name}>
                      <div className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 text-center transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 h-full justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {skill.name}
                        </span>
                      </div>
                    </StaggerItem>
                  )
                })}
              </StaggerChildren>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
