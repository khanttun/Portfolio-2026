export type Language = "en" | "th"

export const LANGUAGE_STORAGE_KEY = "portfolio-lang"

export const languages: { code: Language; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "th", label: "ไทย", short: "TH" },
]
