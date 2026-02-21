"use client"

import React, { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Navbar from "./navbar"
import Footer from "./footer"
import SectionHeading from "./section-heading"

// ============================================================================
// WORK TIMELINE DATA
// ============================================================================
const workTimeline = [
  {
    id: 1,
    role: "Frontend Cloud Architect",
    company: "Freelance / Self-Employed",
    period: "2025 - Present",
    description: "Architecting scalable cloud solutions and full-stack applications with focus on modern DevOps practices, containerization, and AI integration.",
  },
  {
    id: 2,
    role: "AI Responsse Validator (Part-time)",
    company: "Digital Solutions Myanmar",
    period: "Apr 2025 - Oct 2025",
    description: "Designed and deployed cloud infrastructure, managed Kubernetes clusters, and optimized containerized applications for production environments.",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Feburary Engineering Group Co., ltd",
    period: "Jan 2023 -  Feb 2024",
    description: "Developed responsive web applications using HTML, CSS, and JavaScript. Collaborated with designers and backend developers to implement user-friendly interfaces and optimize performance.",
  },
  {
    id: 4,
    role: "Electrical Engineer Intern",
    company: "Web Development Studio",
    period: "April 2022 - Nov 2022",
    description: "Started career building HTML/CSS/JavaScript projects, learned React fundamentals, and contributed to team development initiatives.",
  },
]

// ============================================================================
// TESTIMONIALS DATA
// ============================================================================
const testimonials = [
  {
    id: 1,
    quote: "Khant is an exceptional developer who combines technical expertise with a collaborative mindset. His ability to architect scalable solutions is impressive.",
    name: "Khant Nyar Ko Ko",
    role: "Co-founder, Tech Startup",
    avatar: "KN",
  },
  {
    id: 2,
    quote: "An innovative approach to sustainability. The reverse vending machine was one of the most technically sound and well-executed projects I've judged at the Hylife Hackathon.",
    name: "Judge Krseisenh MoMie Vivek , Hylife Hackathon",
    role: "Event Organizer",
    avatar: "KV",
  },
  {
    id: 3,
    quote: "Khant's understanding of game infrastructure and desigining interactive experiences was key to our success in the JIWC.",
    name: "Thaung Than Han",
    role: "Senior Full Stack Developer",
    avatar: "TH",
  },
  {
    id: 4,
    quote: "Beyond his technical skills, Khant stands out for his initiative. He was among the first to capitalize on our Huawei certification programs, demonstrating the exact kind of professional drive, we aim to cultivate in our faculty",
    name: "Suppakarn Chansareewittaya",
    role: "Dean, Faculty of Digital Communication and Engineering",
    avatar: "SC",
  },
]

// ============================================================================
// PAGE COMPONENT
// ============================================================================
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

// ============================================================================
// PROFESSIONAL SUMMARY SECTION
// ============================================================================
function ProfessionalSummarySection() {
  return (
    <section id="about-summary" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="About" title="Professional Profile" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Left side: Professional Summary (2 columns) */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Bio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Frontend Cloud Architect passionate about building scalable, intelligent systems that bridge the gap between beautiful user experiences and robust infrastructure. With expertise in modern web frameworks, cloud platform orchestration, and DevOps practices, I approach every project as an opportunity to innovate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I approach a codebase like a Chess opening. Whether implementing the London System or the King’s Gambit, the goal is the same: maintain control by removing unnecessary elements. I prioritize pattern recognition. I simplify complex user flows into compact solutions ensuring that the technical architecture is as lean as it is powerful.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm driven by the challenge of solving complex problems through elegant technical solutions. Collaborating with talented teams, mentoring junior developers, and exploring emerging technologies like generative AI keep me engaged and growing as an engineer.
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Technical Resolution (1 column) */}
          <div className="md:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Technical Philosophy
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                "Build systems that scale, code that reads like poetry, and solutions that anticipate tomorrow's challenges while solving today's problems."
              </p>
              <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                <div>
                  <p className="text-xs uppercase text-zinc-500 font-bold tracking-widest mb-1">Core Values</p>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    <li>• Scalability & Performance</li>
                    <li>• Clean Architecture</li>
                    <li>• Continuous Learning</li>
                    <li>• Collaborative Spirit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// ABOUT ME SECTION
// ============================================================================
function AboutMeSection() {
  return (
    <section id="about-me" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm a Frontend Cloud Architect based in Thailand with a passion for building scalable, intelligent systems that seamlessly blend beautiful user experiences with robust infrastructure. With 2+ years of hands-on experience in front-end development and cloud architecture, I specialize in translating complex technical challenges into elegant, performant solutions. I thrive in collaborative environments and am always eager to learn emerging technologies and push the boundaries of my capabilities.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// WORK TIMELINE SECTION
// ============================================================================
function WorkTimelineSection() {
  return (
    <section id="work-timeline" className="scroll-mt-20 px-6 py-24 bg-black/20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Career" title="Work Timeline" />

        <div className="mt-12 relative">
          {/* Central vertical line (visible on md and up) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400/50 via-emerald-400/20 to-transparent transform -translate-x-1/2" />

          {/* Timeline entries */}
          <div className="space-y-8 md:space-y-12">
            {workTimeline.map((entry, index) => (
              <div key={entry.id} className="relative">
                {/* Timeline node (visible on md and up) */}
                <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-emerald-400 rounded-full transform -translate-x-1/2 border-4 border-[#0d0d0d] shadow-lg" />

                {/* Alternating layout on desktop: odd on left, even on right */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  {/* Glassmorphism card */}
                  <div className="rounded-xl border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-sm p-6 hover:border-emerald-400/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {entry.role}
                        </h3>
                        <p className="text-sm text-emerald-400/80 font-medium">{entry.company}</p>
                      </div>
                      <span className="text-xs uppercase text-zinc-500 font-bold tracking-widest whitespace-nowrap">
                        {entry.period}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// TESTIMONIALS SECTION (EMBLA CAROUSEL)
// ============================================================================
function TestimonialsSection() {
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
        <SectionHeading label="Voice" title="Testimonials" />

        <div className="relative mt-12 group">
          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-0 flex-[0_0_100%]">
                  <div className="p-8 md:p-12 min-h-[320px] flex flex-col justify-center">
                    {/* Quote */}
                    <p className="text-lg md:text-xl text-white italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                      {/* Avatar Placeholder */}
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400/40 to-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-emerald-400">
                          {testimonial.avatar}
                        </span>
                      </div>

                      {/* Name & Role */}
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-zinc-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all text-white active:scale-90"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Progress Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === selectedIndex ? "w-10 bg-emerald-500" : "w-4 bg-zinc-800"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all text-white active:scale-90"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
