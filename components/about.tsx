"use client"

import React, { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Navbar from "./navbar"
import Footer from "./footer"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"
import { ScrollFloat, ScrollReveal } from "./scroll-reveal"

const timelineMeta = [
  { id: 1 as const },
  { id: 2 as const },
  { id: 3 as const },
  { id: 4 as const },
]

const testimonialMeta = [
  { id: 1 as const, name: "Khant Nyar Ko Ko", avatar: "KN" },
  { id: 2 as const, name: "Judge Krseisenh MoMie Vivek , Hylife Hackathon", avatar: "KV" },
  { id: 3 as const, name: "Thaung Than Han", avatar: "TH" },
  { id: 4 as const, name: "Suppakarn Chansareewittaya", avatar: "SC" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutMeSection />
        <ProfessionalSummarySection />
        <WorkTimelineSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}

function ProfessionalSummarySection() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about-summary" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label={a.summaryLabel} title={a.summaryTitle} />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <ScrollReveal className="md:col-span-2" y={36}>
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{a.bioTitle}</h3>
                <p className="leading-relaxed text-muted-foreground">{a.bioBody}</p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{a.approachTitle}</h3>
                <p className="leading-relaxed text-muted-foreground">{a.approachBody}</p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{a.drivesTitle}</h3>
                <p className="leading-relaxed text-muted-foreground">{a.drivesBody}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-1" delay={0.12} y={48}>
            <div className="rounded-xl border border-white/10 bg-card p-6 backdrop-blur-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary">
                <Briefcase className="h-5 w-5" />
                {a.philosophyTitle}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                &ldquo;{a.philosophyQuote}&rdquo;
              </p>
              <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {a.coreValues}
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {a.values.map((value) => (
                      <li key={value}>• {value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function AboutMeSection() {
  const { t } = useLanguage()

  return (
    <section id="about-me" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-8 text-center">
          <ScrollFloat>
            <h2 className="text-4xl font-bold text-white md:text-5xl">{t.about.heroTitle}</h2>
          </ScrollFloat>
          <ScrollReveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.about.heroBody}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function WorkTimelineSection() {
  const { t } = useLanguage()

  return (
    <section id="work-timeline" className="scroll-mt-20 bg-black/20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label={t.about.careerLabel} title={t.about.careerTitle} />

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:block" />

          <div className="space-y-8 md:space-y-12">
            {timelineMeta.map((entry, index) => {
              const copy = t.about.timeline[entry.id]
              return (
                <div key={entry.id} className="relative">
                  <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-background bg-primary shadow-lg md:block" />

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <ScrollReveal delay={index * 0.06} y={32}>
                      <div className="group rounded-xl border border-white/10 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-primary">
                              {copy.role}
                            </h3>
                            <p className="text-sm font-medium text-primary/80">{copy.company}</p>
                          </div>
                          <span className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {copy.period}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{copy.description}</p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { t } = useLanguage()
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
    <section id="testimonials" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label={t.about.voiceLabel} title={t.about.voiceTitle} />

        <div className="group relative mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card" ref={emblaRef}>
            <div className="flex">
              {testimonialMeta.map((testimonial) => {
                const copy = t.about.testimonials[testimonial.id]
                return (
                  <div key={testimonial.id} className="min-w-0 flex-[0_0_100%]">
                    <div className="flex min-h-[320px] flex-col justify-center p-8 md:p-12">
                      <p className="mb-8 text-lg italic leading-relaxed text-white md:text-xl">
                        &ldquo;{copy.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/40 to-primary/10">
                          <span className="text-sm font-bold text-primary">
                            {testimonial.avatar}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{copy.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-all hover:bg-muted active:scale-90"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {testimonialMeta.map((item) => (
                <div
                  key={item.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    item.id - 1 === selectedIndex ? "w-10 bg-primary" : "w-4 bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-all hover:bg-muted active:scale-90"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

