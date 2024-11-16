import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./languages";

export function detectLanguage(pathname: string): string {
  const lang = SUPPORTED_LANGUAGES.find((lang) => pathname.startsWith(`/${lang}`));
  return lang || DEFAULT_LANGUAGE;
}

export function switchLanguage(currentLang: string): string {
  return currentLang === "en" ? "vi" : "en";
}
