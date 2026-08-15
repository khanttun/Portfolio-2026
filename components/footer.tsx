"use client"

import { Terminal } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs">
            Khant Tun &copy; {new Date().getFullYear()}
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
