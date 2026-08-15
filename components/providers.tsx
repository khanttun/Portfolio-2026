"use client"

import { LanguageProvider } from "@/lib/i18n/language-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
