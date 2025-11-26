import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

/**
 * Формує локалізований шлях згідно з налаштуваннями routing
 * @param path - Шлях без локалі
 * @param locale - Локаль
 * @returns Локалізований шлях
 */
function getLocalizedPath(path: string, locale: string): string {
  // Нормалізуємо шлях (видаляємо подвійні слеші, забезпечуємо початок з /)
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Для дефолтної локалі (uk) - без префіксу
  if (locale === routing.defaultLocale) {
    return normalizedPath === "/" ? "/" : normalizedPath;
  }

  // Для інших локалей - з префіксом
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

/**
 * Генерує canonical URL на основі шляху та локалі
 * @param locale - Локаль сторінки
 * @param path - Шлях сторінки (наприклад, '/about', '/blog/article-slug')
 * @returns Абсолютний canonical URL без параметрів
 */
export function getCanonicalUrl(locale: string, path: string = "/"): string {
  // Нормалізуємо baseUrl - видаляємо завершальний слеш, якщо він є
  const baseUrl = (SITE_URL || "").replace(/\/+$/, "");
  const localizedPath = getLocalizedPath(path, locale);
  return `${baseUrl}${localizedPath}`;
}

