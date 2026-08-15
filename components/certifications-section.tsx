"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import SectionHeading from "./section-heading"

const certifications = [
  { name: "OCI: Foundational Associate", org: "Oracle", year: "August, 2026", link: "/images/oci1.jpg" },
  { name: "HCIA Big Data", org: "Huawei", year: "July, 2026", link: "/images/Huawei Certificate/bigdata.png" },
  { name: "HCCDP Solution Architectures", org: "Huawei", year: "July, 2026", link: "/images/Huawei Certificate/solution.png" },
  { name: "HCIA Cloud Service", org: "Huawei", year: "Feb, 2026", link: "/images/Huawei Certificate/cloud.jpg" },
  { name: "HCDDA Cloud Native", org: "Huawei", year: "Oct,2025", link: "/images/Huawei Certificate/native.png" },
  { name: "HCDDA Tech Essentials", org: "Huawei", year: "Sept, 2025", link: "/images/Huawei Certificate/essentials.png" },
  { name: "HCDDA AI", org: "Huawei", year: "Dec,2025", link: "/images/Huawei Certificate/AI.png" },
  { name: "Agoda Tech Camp Workshop", org: "Agoda", year: "Dec, 2024", link: "/images/Huawei Certificate/Agoda.jfif" },
  { name: "Level 4 Diploma in computing", org: "NCC Education", year: "April, 2024", link: "/images/Huawei Certificate/CCNA.jpg" },
]

const springTransition = { type: "spring" as const, stiffness: 220, damping: 22 }

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleCards = useMemo(() => {
    const total = certifications.length
    return [
      certifications[(activeIndex - 1 + total) % total],
      certifications[activeIndex],
      certifications[(activeIndex + 1) % total],
    ]
  }, [activeIndex])

  const navigate = (direction: "prev" | "next") => {
    setActiveIndex((current) => {
      const total = certifications.length
      if (direction === "next") return (current + 1) % total
      return (current - 1 + total) % total
    })
  }

  return (
    <section id="certifications" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="02" title="Certifications" />

        <div className="relative mt-14">
          <button
            type="button"
            onClick={() => navigate("prev")}
            aria-label="Previous certification"
            className="absolute left-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-[420px] max-w-4xl items-center justify-center [perspective:1800px]">
            <div className="relative h-full w-full overflow-visible">
              {visibleCards.map((cert, index) => {
                const isCenter = index === 1
                const isLeft = index === 0
                const isRight = index === 2

                const position = isLeft ? { x: -160, y: 28, scale: 0.82, rotateY: 36, rotateX: 8, rotateZ: -4, opacity: 0.8, zIndex: 1 } : isCenter ? { x: 0, y: 0, scale: 1, rotateY: 0, rotateX: 0, rotateZ: 0, opacity: 1, zIndex: 3 } : { x: 160, y: 28, scale: 0.82, rotateY: -36, rotateX: 8, rotateZ: 4, opacity: 0.8, zIndex: 2 }

                return (
                  <motion.a
                    key={`${cert.name}-${activeIndex}`}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: isRight ? 180 : isLeft ? -180 : 0, y: isCenter ? 0 : 26, scale: isCenter ? 0.96 : 0.8, rotateY: isRight ? -42 : isLeft ? 42 : 0, opacity: 0, filter: "blur(6px)" }}
                    animate={{ ...position, opacity: isCenter ? 1 : 0.8, filter: "blur(0px)" }}
                    transition={springTransition}
                    whileHover={{ y: isCenter ? -10 : -4, scale: isCenter ? 1.02 : 0.85 }}
                    className={[
                      "absolute left-1/2 top-10 flex h-[330px] w-[90%] max-w-[425px] -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-lg transition-shadow",
                      isCenter ? "shadow-[0_28px_80px_rgba(15,23,42,0.18)]" : "shadow-[0_18px_40px_rgba(15,23,42,0.10)]",
                      isCenter ? "cursor-pointer" : "pointer-events-none",
                    ].join(" ")}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
                  >
                    <div className="relative h-48 w-full overflow-hidden border-b border-border bg-secondary/50">
                      <img src={cert.link} alt={cert.name} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/5" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="rounded-full border border-border bg-secondary/60 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            Certified
                          </span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground/60" />
                        </div>
                        <h3 className="text-lg font-semibold leading-tight text-foreground">{cert.name}</h3>
                      </div>

                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-primary">{cert.org}</p>
                          <p className="text-xs text-muted-foreground">{cert.year}</p>
                        </div>
                        <div className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {isCenter ? "Featured" : "Archive"}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("next")}
            aria-label="Next certification"
            className="absolute right-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}