import { SUPPORTED_LANGUAGES, type LANGUAGES } from "../i18n/languages";

/**
 * Generate static paths for a given route.
 * @param slugs - Array of slugs (optional) for additional dynamic routes
 * @returns Array of paths
 */
async function generateStaticPaths(
  callback?: (language: LANGUAGES, paths: any) => Promise<void> | void
): Promise<{ params: Record<string, any>; }[]> {
  const paths: { params: Record<string, any> }[] = [];

  for (const lang of SUPPORTED_LANGUAGES) {
    if (typeof callback === "function") {
      await callback(lang, paths);
    } else {
      // If no slugs are provided, just create paths for languages
      paths.push({ params: { lang: lang.toLocaleLowerCase() } });
    }
  }

  return paths;
}

export default generateStaticPaths;
