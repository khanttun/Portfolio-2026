"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import SectionHeading from "./section-heading"
import { useLanguage } from "@/lib/i18n/language-provider"

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

const FAN_DEPTH = 3

const spring = { type: "spring" as const, stiffness: 280, damping: 32, mass: 0.85 }

/** Desktop reference card size — mobile uses the same proportions, scaled down. */
const DESKTOP_CARD = { w: 400, h: 460 }
const DESKTOP_STAGE_H = 520

function getRelativeSlot(index: number, active: number, total: number): number | null {
  let diff = (index - active + total) % total
  if (diff > total / 2) diff -= total
  if (Math.abs(diff) > FAN_DEPTH) return null
  return diff
}

function slotTransform(slot: number, scale: number) {
  const abs = Math.abs(slot)
  const dir = Math.sign(slot)

  if (slot === 0) {
    return {
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 40,
      filter: "blur(0px)",
    }
  }

  return {
    x: dir * (110 + abs * 72) * scale,
    y: abs * 10 * scale,
    scale: 1 - abs * 0.1,
    rotateY: -dir * (18 + abs * 10),
    opacity: Math.max(0.35, 1 - abs * 0.18),
    zIndex: 40 - abs * 8,
    filter: abs >= 3 ? "blur(1px)" : "blur(0px)",
  }
}

function useFanScale(containerWidth: number) {
  // Same coverflow as desktop, scaled so the center card stays ~72% of the stage
  // and neighboring cards peek on both sides (matching the web composition).
  if (containerWidth <= 0) return 1
  const targetCardW = Math.min(DESKTOP_CARD.w, containerWidth * 0.72)
  return Math.min(1, targetCardW / DESKTOP_CARD.w)
}

export default function CertificationsSection() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [stageWidth, setStageWidth] = useState(0)
  const total = certifications.length
  const dragStartX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastWheelTime = useRef(0)

  const fanScale = useFanScale(stageWidth)
  const cardW = DESKTOP_CARD.w * fanScale
  const cardH = DESKTOP_CARD.h * fanScale
  const stageH = DESKTOP_STAGE_H * fanScale
  const halfW = cardW / 2

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const update = () => setStageWidth(node.clientWidth)
    update()

    const ro = new ResizeObserver(update)
    ro.observe(node)
    return () => ro.disconnect()
  }, [])

  const visible = useMemo(() => {
    return certifications
      .map((cert, index) => ({
        cert,
        slot: getRelativeSlot(index, activeIndex, total),
      }))
      .filter(
        (item): item is { cert: (typeof certifications)[number]; slot: number } =>
          item.slot !== null
      )
      .sort((a, b) => Math.abs(b.slot) - Math.abs(a.slot))
  }, [activeIndex, total])

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      setActiveIndex((current) => {
        if (direction === "next") return (current + 1) % total
        return (current - 1 + total) % total
      })
    },
    [total]
  )

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const onWheel = (e: WheelEvent) => {
      const isTrackpad =
        e.deltaMode === 0 && (Math.abs(e.deltaX) > 25 || Math.abs(e.deltaY) > 25)
      if (!isTrackpad) return

      const now = Date.now()
      if (now - lastWheelTime.current < 500) return

      e.preventDefault()
      lastWheelTime.current = now

      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) {
        if (e.deltaX > 0) navigate("prev")
        else navigate("next")
      } else {
        if (e.deltaY > 0) navigate("prev")
        else navigate("next")
      }
    }

    node.addEventListener("wheel", onWheel, { passive: false })
    return () => node.removeEventListener("wheel", onWheel)
  }, [navigate])

  const onPointerDown = (e: ReactPointerEvent) => {
    dragStartX.current = e.clientX
  }

  const onPointerUp = (e: ReactPointerEvent) => {
    if (dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    dragStartX.current = null
    if (Math.abs(delta) < 40) return
    if (delta < 0) navigate("next")
    else navigate("prev")
  }

  return (
    <section id="certifications" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionHeading label={t.certifications.label} title={t.certifications.title} />

          <div className="mb-2 flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => navigate("prev")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              aria-label={t.certifications.prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate("next")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              aria-label={t.certifications.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto flex w-full max-w-5xl cursor-grab touch-pan-y items-center justify-center active:cursor-grabbing"
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 45%",
            height: stageH || DESKTOP_STAGE_H,
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            dragStartX.current = null
          }}
        >
          <AnimatePresence initial={false}>
            {visible.map(({ cert, slot }) => {
              const isCenter = slot === 0
              const transform = slotTransform(slot, fanScale)

              return (
                <motion.div
                  key={cert.name}
                  initial={{
                    opacity: 0,
                    x: Math.sign(slot || 1) * 280 * fanScale,
                    scale: 0.72,
                    rotateY: -Math.sign(slot || 1) * 40,
                  }}
                  animate={transform}
                  exit={{
                    opacity: 0,
                    x: Math.sign(slot || 1) * 300 * fanScale,
                    scale: 0.7,
                    rotateY: -Math.sign(slot || 1) * 48,
                  }}
                  transition={spring}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    zIndex: transform.zIndex,
                    marginLeft: -halfW,
                    width: cardW || DESKTOP_CARD.w,
                    height: cardH || DESKTOP_CARD.h,
                    top: 16 * fanScale,
                  }}
                  className="absolute left-1/2"
                  onClick={() => {
                    if (slot < 0) navigate("prev")
                    if (slot > 0) navigate("next")
                  }}
                  role={isCenter ? undefined : "button"}
                  tabIndex={isCenter ? undefined : 0}
                  onKeyDown={(e) => {
                    if (isCenter) return
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      if (slot < 0) navigate("prev")
                      if (slot > 0) navigate("next")
                    }
                  }}
                  aria-label={
                    slot < 0
                      ? t.certifications.prev
                      : slot > 0
                        ? t.certifications.next
                        : undefined
                  }
                >
                  <div
                    className={[
                      "relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card",
                      isCenter
                        ? "shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
                        : "cursor-pointer shadow-[0_18px_48px_rgba(0,0,0,0.35)]",
                    ].join(" ")}
                  >
                    {isCenter ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`${t.certifications.viewCert}: ${cert.name}`}
                        onClick={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    ) : null}

                    <div className="relative h-[62%] w-full shrink-0 overflow-hidden bg-secondary/40">
                      <img
                        src={cert.link}
                        alt=""
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/55 via-transparent to-transparent" />
                    </div>

                    <div className="relative flex flex-1 flex-col items-center justify-center gap-1.5 px-5 pb-5 pt-4 text-center sm:px-6 sm:pb-6 sm:pt-5">
                      {isCenter && (
                        <ExternalLink className="pointer-events-none absolute right-4 top-3 z-20 h-4 w-4 text-muted-foreground/50 sm:right-5 sm:top-4" />
                      )}
                      <h3 className="text-base font-semibold leading-snug text-foreground sm:text-xl">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-primary sm:text-base">{cert.org}</p>
                      <p className="text-xs text-muted-foreground sm:text-sm">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <div className="mt-2 flex justify-center gap-1.5">
          {certifications.map((cert, i) => (
            <button
              key={cert.name}
              type="button"
              aria-label={`Go to ${cert.name}`}
              aria-current={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              className={[
                "h-1.5 rounded-full transition-all",
                i === activeIndex
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/55",
              ].join(" ")}
            />
          ))}
        </div>

        <p className="mt-5 animate-pulse text-center text-xs text-muted-foreground">
          {t.certifications.swipeHint}
        </p>
      </div>
    </section>
  )
}
