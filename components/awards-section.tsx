"use client"

import React, { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Maximize2 } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import SectionHeading from "./section-heading"

const awards = [
  {
    title: "Eco-Point Project",
    subtitle: "2nd Runner-Up",
    org: "Hylife Hackathon",
    date: "2024",
    description: "Secured 2nd runner-up in a competitive hackathon by building a full-stack solution within 48 hours, combining AI, IOT and web technologies.",
    image: "images/eco.jpg",
    position: "center",
  },
  {
    title: "Blood of the Rift",
    subtitle: "Top 10 Finalist",
    org: "Joint International Workshop and Competition 2025",
    date: "August 2025",
    description: "Placed in the top 10 out of hundreds of participants for developing an innovative AI-driven game using generative models and spline design.",
    image: "images/jiwc.png",
    position: "center",
  },
  {
    title: "The Global Atomic Quiz 2023",
    subtitle: "Certificate of Victory",
    org: "Ministry of Science and Technology",
    date: "January 26, 2024", // Date from certificate
    description: "Recognized as a winner for outstanding intellect and performance in the Global Atomic Quiz 2023, issued by the Ministry of Science and Technology and Technological University (Thanlyin).",
    image: "images/atomic.jpg",
    position: "center 20%", 
    zoom: "scale-110",
  },
  {
    title: "Hackatom Myanmar 2023",
    subtitle: "Participation Certificate",
    org: "ROSATOM, MEPhI & YTU",
    date: "June 28-29, 2023", // Dates from certificate 
    description: "Successfully performed as a member of Team Magenta in Hackatom Myanmar 2023, organized by ROSATOM, MEPhI, and Yangon Technological University[cite: 5, 7, 9, 10].",
    image: "images/hackatom.jpg",
    position: "center",
  },
]

export default function AwardsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

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

  return (
    <section id="awards" className="scroll-mt-20 px-6 py-24 bg-black/20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="03" title="Awards & Recognition" />

        <div className="relative mt-12 group">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]" ref={emblaRef}>
            <div className="flex">
              {awards.map((award, index) => (
                <div key={index} className="min-w-0 flex-[0_0_100%]">
                  {/* Wrap content in a link for full view functionality */}
                  <a 
                    href={award.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row h-auto md:h-[380px] cursor-zoom-in group/card"
                  >
                    {/* LEFT SIDE: Image/Proof */}
                    <div className="relative w-full md:w-1/2 h-[280px] md:h-full overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/10">
                      <img 
                        src={award.image} 
                        alt={award.title} 
                        className={`h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105 ${award.zoom || ''}`}
                        style={{ objectPosition: award.position }}
                      />
                      {/* Full View Overlay UI */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium">
                          <Maximize2 className="h-4 w-4" />
                          View Full Certificate
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                    </div>

                    {/* RIGHT SIDE: Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-[#0d0d0d] transition-colors group-hover/card:bg-[#121212]">
                      <div className="flex items-center gap-2 text-emerald-400 mb-6">
                        <Star className="h-4 w-4 fill-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Achievement</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {award.subtitle}
                      </h3>
                      <p className="text-lg text-zinc-400 mt-2 font-medium italic">
                        {award.title}
                      </p>

                      <div className="mt-8 space-y-5">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1.5">Issued By</span>
                          <span className="text-zinc-200 font-semibold">{award.org}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1.5">Date</span>
                          <span className="text-zinc-200 font-semibold">{award.date}</span>
                        </div>
                      </div>

                      <p className="mt-8 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-6 line-clamp-3">
                        {award.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={scrollPrev} className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all text-white active:scale-90">
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2">
              {awards.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === selectedIndex ? "w-10 bg-emerald-500" : "w-4 bg-zinc-800"
                  }`} 
                />
              ))}
            </div>

            <button onClick={scrollNext} className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all text-white active:scale-90">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}