"use client"

import { ShieldCheck, ExternalLink, FileText } from "lucide-react"
import SectionHeading from "./section-heading"

const certifications = [
  { name: "HCIA Cloud Service", org: "Huawei", year: "Feb, 2026", link: "/images/Huawei Certificate/cloud.jpg"},
  { name: "HCDDA Cloud Native", org: "Huawei", year: "Oct,2025", link: "/images/Huawei Certificate/native.png" },
  { name: "HCDDA Tech Essentials", org: "Huawei", year: "Sept, 2025", link: "/images/Huawei Certificate/essentials.png" },
  { name: "HCDDA AI", org: "Huawei", year: "Dec,2025", link: "/images/Huawei Certificate/AI.png" },
  { name: "Agoda Tech Camp Workshop", org: "Agoda", year: "Dec, 2024", link: "/images/Huawei Certificate/Agoda.jfif" },
  { name: "Level 4 Diploma in computing", org: "NCC Education", year: "April, 2024", link: "/images/Huawei Certificate/CCNA.jpg"},
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="02" title="Certifications" />

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:bg-card/80 active:scale-[0.99]"
            >
              {/* Compact Preview Thumbnail */}
              <div className="relative h-16 w-20 shrink-0 overflow-hidden border-r border-border bg-muted/50">
                {cert.isPdf ? (
                  <div className="flex h-full w-full items-center justify-center bg-secondary/30">
                    <FileText className="h-5 w-5 text-muted-foreground/50" />
                  </div>
                ) : (
                  <img src={cert.link} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                )}
              </div>

              {/* Text Content */}
              <div className="flex flex-grow items-center justify-between px-3 py-1.5">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground">
                    {cert.org} • {cert.year}
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}