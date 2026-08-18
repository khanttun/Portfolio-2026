"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Trophy, ChevronLeft, ChevronRight, X } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"
import { ScrollReveal } from "./scroll-reveal"

const projectMeta = [
  {
    id: 1 as const,
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "PostgreSQL", "Supabase"],
    image: "images/harbor.png",
    demo: "https://harbor-student-center.vercel.app/",
    github: "https://github.com/khanttun/Harbor-Student-Center",
    isAwardWinner: false,
  },
  {
    id: 2 as const,
    stack: ["React", "HTML", "CSS", "JavaScript", "Git"],
    image: "images/ecopoint.PNG",
    demo: "https://ecopoint-landing-nu.vercel.app/",
    github: "https://github.com/khanttun/Ecopoint-landing",
    isAwardWinner: true,
  },
  {
    id: 3 as const,
    stack: ["Spline 3D", "Generative AI", "Logic Design", "UI/UX", "Vite"],
    image: "images/game.jpg",
    demo: "https://my.spline.design/forestfirepreventionscenarios-vGYVJW3W02Ot3Cu0fZ5sEMjQ/",
    github: "#",
    isAwardWinner: true,
  },
  {
    id: 4 as const,
    stack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    image: "images/hackathon.PNG",
    demo: "https://v0-life-path-gold.vercel.app/",
    github: "https://github.com/khanttun/life-path",
    isAwardWinner: false,
    collaborator: {
      name: "Khant Nyar Ko Ko",
      href: "https://khantnyarkoko.vercel.app/",
    },
  },
  {
    id: 5 as const,
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "images/romance.PNG",
    demo: "https://valentine-s-day-website-theta.vercel.app/",
    github: "#",
    isAwardWinner: false,
  },
]

export default function ProjectsSection() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<(typeof projectMeta)[number] | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })
  const emblaNode = useRef<HTMLDivElement>(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const lastScrollTime = useRef<number>(0)
  const scrollCooldown = 600

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedProject])

  useEffect(() => {
    if (!emblaNode.current) return

    const handleWheel = (e: WheelEvent) => {
      const isTrackpad = e.deltaMode === 0 && (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30)

      if (!isTrackpad) return

      const now = Date.now()
      if (now - lastScrollTime.current < scrollCooldown) {
        return
      }

      e.preventDefault()
      lastScrollTime.current = now

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX < 0) {
          scrollNext()
        } else {
          scrollPrev()
        }
      } else if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY < 0) {
          scrollNext()
        } else {
          scrollPrev()
        }
      }
    }

    const viewportElement = emblaNode.current
    viewportElement.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      viewportElement.removeEventListener("wheel", handleWheel)
    }
  }, [scrollPrev, scrollNext])

  return (
    <section
      id="projects"
      className="relative -mt-12 scroll-mt-20 rounded-t-[2rem] border-t border-white/10 bg-[#090611]/95 px-6 pb-24 pt-16 shadow-[0_-24px_60px_rgba(82,39,255,0.12)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#05030f]/0 via-[#090611]/80 to-[#090611]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-10 flex items-end justify-between">
          <SectionHeading label={t.projects.label} title={t.projects.title} />

          <div className="mb-2 flex gap-2">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              aria-label={t.projects.prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              aria-label={t.projects.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ScrollReveal className="cursor-grab overflow-hidden active:cursor-grabbing" y={48}>
          <div
            ref={(node) => {
              emblaRef(node)
              emblaNode.current = node
            }}
          >
            <div className="flex">
              {projectMeta.map((project, index) => (
                <div key={project.id} className="min-w-0 flex-[0_0_90%] px-4">
                  <ScrollReveal delay={index * 0.08} y={42}>
                    <ProjectCard project={project} onImageClick={() => setSelectedProject(project)} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 animate-pulse text-center text-xs text-muted-foreground">
            {t.projects.swipeHint}
          </p>
        </ScrollReveal>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0a1a] shadow-[0_24px_80px_rgba(82,39,255,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition hover:bg-black/60"
              aria-label="Close image preview"
            >
              <X className="h-4 w-4" />
            </button>

            <img
              src={selectedProject.image || "/images/placeholder.png"}
              alt={selectedProject.id ? `Project ${selectedProject.id}` : "Project preview"}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({
  project,
  onImageClick,
}: {
  project: (typeof projectMeta)[number]
  onImageClick: () => void
}) {
  const { t } = useLanguage()
  const copy = t.projects.items[project.id]

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:bg-card/80">
      {project.isAwardWinner && (
        <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full bg-yellow-500 px-3 py-1 text-[10px] font-bold text-black shadow-lg">
          <Trophy className="h-3 w-3" />
          {t.projects.prizeWinner}
        </div>
      )}

      <div
        onClick={onImageClick}
        className="relative block aspect-[16/9] w-full cursor-pointer overflow-hidden border-b border-border text-left"
        aria-label={`Open preview for ${copy.title}`}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            onImageClick()
          }
        }}
      >
        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="absolute inset-0 z-10 flex items-center justify-center bg-primary/10 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
          >
            <span className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xl">
              {t.projects.viewDemo}
            </span>
          </a>
        )}
        <img
          src={project.image || "/images/placeholder.png"}
          alt={copy.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            {copy.title}
          </h3>
          <div className="flex shrink-0 items-center gap-3">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {"description" in copy ? (
            copy.description
          ) : (
            <>
              {copy.descriptionBefore}{" "}
              {project.collaborator ? (
                <a
                  href={project.collaborator.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.collaborator.name}
                </a>
              ) : null}
              {copy.descriptionAfter}
            </>
          )}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}