export const languages = {
  en: "English",
  vi: "Vietnamese",
};

export const defaultLang: keyof typeof languages = "vi";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.twitter": "Twitter",
  },
} as const;
