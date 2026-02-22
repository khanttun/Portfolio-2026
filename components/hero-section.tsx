"use client"

import { useEffect, useState } from "react"
import { ArrowDown, FolderKanban, Award, Mail } from "lucide-react"

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(210 15% 15% / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(210 15% 15% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div
  className={`relative z-10 mx-auto max-w-3xl text-center transition-all duration-700 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`}
>

  <div className="relative mb-8 flex justify-center">
    <div className="absolute inset-0 m-auto h-64 w-64 rounded-full border border-primary/20 bg-primary/5 blur-sm" />
    
    <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-border bg-card shadow-2xl">
      <img
        src="images/khant-zayar-tun.jpg"
        alt="Khant Zayar Tun"
        className="h-full w-full object-cover"
        style={{ 
        transform: 'scale(1.8) translateY(1%) translateX(-10%)', // Scale 1.35 zooms in, translateY moves it down if your forehead is cut off
        transformOrigin: 'center center' 
        }}
      />
    </div>

    {/* The Badge (Positioned to overlap the bottom of the photo) */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-secondary/90 backdrop-blur-md px-4 py-1.5 shadow-lg">
      <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
        Available for work
      </span>
    </div>
  </div>
  {/* --- PHOTO CONTAINER END --- */}

  <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
    Khant Zayar Tun
  </h1>
        <p className="mt-3 font-mono text-lg text-primary sm:text-xl">
           Solution Architect
        </p>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Building scalable infrastructure and intelligent systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <FolderKanban className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="#certifications"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Award className="h-4 w-4" />
            View Certifications
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
