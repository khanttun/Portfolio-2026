"use client"

import React, { useCallback, useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Maximize2 } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"

const awardMeta = [
  {
    id: 0 as const,
    org: "Hylife Hackathon",
    date: "2024",
    image: "images/eco.jpg",
    position: "center",
  },
  {
    id: 1 as const,
    org: "Joint International Workshop and Competition 2025",
    date: "August 2025",
    image: "images/jiwc.png",
    position: "center",
  },
  {
    id: 2 as const,
    org: "Ministry of Science and Technology",
    date: "January 26, 2024",
    image: "images/atomic.jpg",
    position: "center 20%",
    zoom: "scale-110",
  },
  {
    id: 3 as const,
    org: "ROSATOM, MEPhI & YTU",
    date: "June 28-29, 2023",
    image: "images/hackatom.jpg",
    position: "center",
  },
]

export default function AwardsSection() {
  const { t } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const emblaNode = useRef<HTMLDivElement>(null)
  const lastScrollTime = useRef<number>(0)
  const scrollCooldown = 600

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

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
          scrollPrev()
        } else {
          scrollNext()
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
    <section id="awards" className="scroll-mt-20 bg-black/20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label={t.awards.label} title={t.awards.title} />

        <div className="group relative mt-12">
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
            ref={(node) => {
              emblaRef(node)
              emblaNode.current = node
            }}
          >
            <div className="flex">
              {awardMeta.map((award) => {
                const copy = t.awards.items[award.id]
                return (
                  <div key={award.id} className="min-w-0 flex-[0_0_100%]">
                    <a
                      href={award.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/card flex h-auto cursor-zoom-in flex-col md:h-[380px] md:flex-row"
                    >
                      <div className="relative h-[280px] w-full overflow-hidden border-b border-white/10 bg-zinc-900 md:h-full md:w-1/2 md:border-b-0 md:border-r">
                        <img
                          src={award.image}
                          alt={copy.title}
                          className={`h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105 ${award.zoom || ""}`}
                          style={{ objectPosition: award.position }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover/card:opacity-100">
                          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                            <Maximize2 className="h-4 w-4" />
                            {t.awards.viewFull}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                      </div>

                      <div className="flex w-full flex-col justify-center bg-[#0d0d0d] p-8 transition-colors group-hover/card:bg-[#121212] md:w-1/2 md:p-10">
                        <div className="mb-6 flex items-center gap-2 text-emerald-400">
                          <Star className="h-4 w-4 fill-emerald-400" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                            {t.awards.achievement}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                          {copy.subtitle}
                        </h3>
                        <p className="mt-2 text-lg font-medium italic text-zinc-400">{copy.title}</p>

                        <div className="mt-8 space-y-5">
                          <div className="flex flex-col">
                            <span className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                              {t.awards.issuedBy}
                            </span>
                            <span className="font-semibold text-zinc-200">{award.org}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                              {t.awards.date}
                            </span>
                            <span className="font-semibold text-zinc-200">{award.date}</span>
                          </div>
                        </div>

                        <p className="mt-8 line-clamp-3 border-t border-white/5 pt-6 text-sm leading-relaxed text-zinc-400">
                          {copy.description}
                        </p>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-white transition-all hover:bg-zinc-800 active:scale-90"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {awardMeta.map((award) => (
                <div
                  key={award.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    award.id === selectedIndex ? "w-10 bg-emerald-500" : "w-4 bg-zinc-800"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-white transition-all hover:bg-zinc-800 active:scale-90"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
