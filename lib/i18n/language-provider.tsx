"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries"
import { LANGUAGE_STORAGE_KEY, type Language } from "@/lib/i18n/types"

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: Dictionary
  ready: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "th"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLanguage(stored)) {
      setLanguageState(stored)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language, ready])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "en" ? "th" : "en"))
  }, [])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: dictionaries[language],
      ready,
    }),
    [language, setLanguage, toggleLanguage, ready]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
