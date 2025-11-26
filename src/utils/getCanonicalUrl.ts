import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

/**
 * Нормалізує base URL - видаляє завершальний слеш
 */
function getBaseUrl(): string {
  return (SITE_URL || "").replace(/\/+$/, "");
}

/**
 * Формує локалізований шлях згідно з налаштуваннями routing
 */
function getLocalizedPath(path: string, locale: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  if (locale === routing.defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

/**
 * Генерує canonical URL на основі шляху та локалі
 */
export function getCanonicalUrl(locale: string, path: string = "/"): string {
  return `${getBaseUrl()}${getLocalizedPath(path, locale)}`;
}

/**
 * Генерує об'єкт з hreflang URLs для всіх локалей
 */
export function getHreflangUrls(path: string = "/"): Record<string, string> {
  const baseUrl = getBaseUrl();
  const ukUrl = `${baseUrl}${getLocalizedPath(path, "uk")}`;
  const ruUrl = `${baseUrl}${getLocalizedPath(path, "ru")}`;
  
  return {
    "uk-UA": ukUrl,
    "ru-UA": ruUrl,
    "x-default": ukUrl,
  };
}

