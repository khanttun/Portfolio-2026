"use client"

import React, { useCallback } from "react"
import { ExternalLink, Github, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import SectionHeading from "./section-heading"

// 1. Data Object
const projects = [
  {
    id: 1,
    title: "Eco-Point Landing Page",
    description:
      "Award-winning landing page developed during the Hylife Hackathon in Chiang Rai. Led the frontend development to create a high-conversion user experience, securing the 2nd Runner Up prize.",
    stack: ["React", "HTML", "CSS", "JavaScript", "Git"],
    image: "images/ecopoint.PNG",
    demo: "https://ecopoint-landing-nu.vercel.app/",
    github: "https://github.com/khanttun/Ecopoint-landing",
    isAwardWinner: true,
  },
    {
    id: 2,

    title: "Blood of the Rift: Top 10 Finalist",
    description: "Finalist in the 2025 Generative AI Game Jam. Developed a 3D Ronin action-puzzle game using Spline, integrating AI-driven assets with interactive environment design and logic-based puzzles.",
    stack: ["Spline 3D", "Generative AI", "Logic Design", "UI/UX", "Vite"],
    image: "images/game.jpg", // Make sure to add this screenshot!
    demo: "https://my.spline.design/forestfirepreventionscenarios-vGYVJW3W02Ot3Cu0fZ5sEMjQ/", // Add your game link here
    github: "#", // Add your repo here
    isAwardWinner: true, // This will trigger the badge we created
  },
  {
    id: 3,
    title: "LifePath: AI-Powered Career Advisor",
    // We wrap the description in () and use a fragment <> so we can use a link
    description: (
      <>
        An AI-powered career guidance platform that helps users identify their ideal career paths. Co-created with{" "}
        <a 
          href="https://khantnyarkoko.vercel.app/" // Replace with Khant Nyar Ko Ko's link
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          onClick={(e) => e.stopPropagation()} // Prevents the card click from firing
        >
          Khant Nyar Ko Ko
        </a>
      </>
    ),
    stack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    image: "images/hackathon.PNG",
    demo: "https://v0-life-path-gold.vercel.app/",
    github: "https://github.com/khanttun/life-path",
    isAwardWinner: false,
  },
    {
    id: 4,

  title: "Interactive Web Experience",
  description: "A high-engagement, responsive micro-site featuring custom CSS animations and interactive state management. Built to explore fluid user interactions and optimized for rapid deployment via Vercel.",
  stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  image: "images/romance.PNG",
  demo: "https://valentine-s-day-website-theta.vercel.app/",
  github: "#",
  isAwardWinner: false,
  },

]

// 2. Main Section (Now with Slider Logic)
export default function ProjectsSection() {
  // Configured to show 1 project at a time
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center" 
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading label="01" title="Featured Projects" />
          
          {/* Slider Controls */}
          <div className="flex gap-2 mb-2">
            <button 
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:bg-secondary transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:bg-secondary transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          {/* Embla Container */}
          <div className="flex">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="min-w-0 flex-[0_0_90%] px-4"
              >
                <ProjectCard project={project}/>
              </div>
            ))}
          </div>
        </div>
        
        <p className="mt-6 text-center text-xs text-muted-foreground animate-pulse">
          ← Swipe to view more projects →
        </p>
      </div>
    </section>
  )
}

// 3. Sub-component for the Project Card (Your original design)
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:bg-card/80">
      
      {/* Award Badge */}
      {project.isAwardWinner && (
        <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full bg-yellow-500 px-3 py-1 text-[10px] font-bold text-black shadow-lg">
          <Trophy className="h-3 w-3" />
          PRIZE WINNER
        </div>
      )}

      {/* Thumbnail */}
      <a 
        href={project.demo} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative aspect-[16/9] w-full overflow-hidden border-b border-border"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
          <div className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xl">
            View Live Demo
          </div>
        </div>
        <img
          src={project.image || "/images/placeholder.png"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>

      {/* Content */}
      <div className="p-4"> {/* Slightly reduced padding to make the card smaller */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-3">
            {project.github !== "#" && (
              <a href={project.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo !== "#" && (
              <a href={project.demo} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}