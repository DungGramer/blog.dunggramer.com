export const SUPPORTED_LANGUAGES = ["EN", "VI"] as const;
export type LANGUAGES = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: LANGUAGES = "EN";