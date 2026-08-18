"use client"

import { useEffect, useState } from "react"
import { ArrowDown, FolderKanban, Award, Mail, FileDown } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-provider"
import CursorGrid from "./CursorGrid"
import MoltenMetal from "./MoltenMetal"
import SpecularButton from "./SpecularButton"
import { ScrollFloat } from "./scroll-reveal"

const moltenBtn = {
  size: "md" as const,
  radius: 14,
  tint: "#FF9FFC",
  tintOpacity: 0.08,
  blur: 8,
  textColor: "#f8f5ff",
  lineColor: "#FF9FFC",
  baseColor: "#5227FF",
  intensity: 1.15,
  shineSize: 12,
  shineFade: 36,
  thickness: 1.2,
  followMouse: true,
  proximity: 220,
  autoAnimate: false,
}

export default function HeroSection() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05030f] px-6 pb-20"
    >
      {/* Expanded and smoother bottom gradient fade to seamlessly blend into the projects section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-b from-transparent via-[#05030f]/60 to-[#05030f]" />

      <div className="absolute inset-0 z-0">
        <MoltenMetal
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFFFFF"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
          opacity={1.0}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_rgba(5,3,15,0.35)_0%,_rgba(5,3,15,0.55)_55%,_rgba(5,3,15,0.78)_100%)]" />

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <CursorGrid
          cellSize={70}
          color="#FF9FFC"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={0.75}
          fillOpacity={0.05}
          gridOpacity={0.07}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-3xl text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <motion.div
          className="relative mb-8 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 m-auto h-64 w-64 rounded-full border border-primary/25 bg-accent/10 blur-sm" />

          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-primary/60 bg-card shadow-[0_12px_40px_rgba(82,39,255,0.35)]">
            <img
              src="images/khant-zayar-tun.jpg"
              alt="Khant Zayar Tun"
              className="h-full w-full object-cover"
              style={{
                transform: "scale(1.8) translateY(1%) translateX(-10%)",
                transformOrigin: "center center",
              }}
            />
          </div>

          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/25 bg-card/95 px-4 py-1.5 shadow-lg backdrop-blur-md">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="whitespace-nowrap font-mono text-xs text-foreground/90">
              {t.hero.available}
            </span>
          </div>
        </motion.div>

        <ScrollFloat delay={0.05}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)] sm:text-5xl lg:text-6xl">
            Khant Zayar Tun
          </h1>
        </ScrollFloat>
        <ScrollFloat delay={0.12}>
          <p className="mt-3 font-mono text-lg text-primary drop-shadow-[0_2px_12px_rgba(82,39,255,0.45)] sm:text-xl">
            {t.hero.role}
          </p>
        </ScrollFloat>
        <ScrollFloat delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-lg">
            {t.hero.tagline}
          </p>
        </ScrollFloat>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <SpecularButton {...moltenBtn} href="#projects" autoAnimate>
            <FolderKanban className="h-4 w-4" />
            {t.hero.viewProjects}
          </SpecularButton>

          <SpecularButton
            {...moltenBtn}
            tint="#5227FF"
            tintOpacity={0.22}
            href="/my%20cv/Khant-Zayar-Tun-CV-2026.pdf"
            download="Khant-Zayar-Tun-CV-2026.pdf"
          >
            <FileDown className="h-4 w-4" />
            {t.hero.downloadCv}
          </SpecularButton>

          <SpecularButton {...moltenBtn} href="#certifications">
            <Award className="h-4 w-4" />
            {t.hero.certifications}
          </SpecularButton>

          <SpecularButton {...moltenBtn} href="#contact">
            <Mail className="h-4 w-4" />
            {t.hero.contact}
          </SpecularButton>
        </motion.div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-primary/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        aria-label={t.hero.scrollDown}
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}