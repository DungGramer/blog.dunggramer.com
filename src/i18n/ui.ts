import type { LANGUAGES } from "./languages";

export const translations: Record<LANGUAGES, Record<TranslateKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    header: "Welcome to My Blog",
    footer: "All rights reserved.",
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.twitter": "Twitter",
    header: "Chào mừng đến với Blog của tôi",
    footer: "Bản quyền thuộc về chúng tôi.",
  },
} as const;

type TranslateKey =
  | "nav.home"
  | "nav.about"
  | "nav.twitter"
  | "header"
  | "footer";

export function getTranslation(lang: LANGUAGES, key: TranslateKey): string {
  return translations[lang]?.[key] || translations.en[key];
}
