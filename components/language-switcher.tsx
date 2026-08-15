"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Languages } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"
import { languages, type Language } from "@/lib/i18n/types"

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const select = (code: Language) => {
    setLanguage(code)
    setOpen(false)
  }

  const current = languages.find((item) => item.code === language) ?? languages[0]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        className={[
          "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
          compact ? "h-9 px-2.5" : "h-9 px-3",
        ].join(" ")}
      >
        <Languages className="h-3.5 w-3.5" />
        <span className="font-mono text-xs font-semibold tracking-wide">{current.short}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[9.5rem] overflow-hidden rounded-xl border border-border bg-card py-1 shadow-xl"
        >
          {languages.map((item) => {
            const selected = item.code === language
            return (
              <li key={item.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => select(item.code)}
                  className={[
                    "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors",
                    selected
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  {selected ? <Check className="h-3.5 w-3.5" /> : null}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
