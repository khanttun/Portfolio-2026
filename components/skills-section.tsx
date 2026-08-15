"use client"

import {
  Cloud,
  Container,
  GitBranch,
  Server,
  Shield,
  Terminal,
  Monitor,
  Code2,
  Palette,
  Globe,
  Layers,
  FileCode,
  Braces,
} from "lucide-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t.skills.cloudDevops,
      skills: [
        { name: "Huawei", icon: Cloud },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Layers },
        { name: "Terraform", icon: Server },
        { name: "CI/CD", icon: GitBranch },
        { name: "Linux", icon: Terminal },
        { name: "IOT", icon: Monitor },
        { name: "Security", icon: Shield },
      ],
    },
    {
      title: t.skills.frontend,
      skills: [
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: FileCode },
        { name: "Tailwind CSS", icon: Palette },
        { name: "HTML/CSS", icon: Braces },
        { name: "JavaScript", icon: FileCode },
      ],
    },
  ]

  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.skills.label} title={t.skills.title} />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 font-mono text-sm font-medium uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 text-center transition-all duration-300 hover:border-primary/40"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
