/**
 * Utility function to get localized content from Sanity multilang fields
 * @param content - The multilang object (e.g., { uk: "text", ru: "text" })
 * @param locale - The current locale (uk or ru)
 * @param fallback - Fallback locale if the requested locale is not available
 * @returns The localized string or null if not found
 */
export function getLocalizedContent(
  content: any,
  locale: string,
  fallback: string = "uk"
): string | null {
  if (!content || typeof content !== "object") {
    return null;
  }

  // Try to get content for the requested locale
  if (content[locale]) {
    return content[locale];
  }

  // Fallback to the fallback locale
  if (content[fallback]) {
    return content[fallback];
  }

  // If neither locale is available, return the first available value
  const availableLocales = Object.keys(content);
  if (availableLocales.length > 0) {
    return content[availableLocales[0]];
  }

  return null;
}

/**
 * Deep localization function that recursively processes objects and arrays
 * @param obj - Object or array to localize
 * @param locale - The current locale (uk or ru)
 * @param fallback - Fallback locale if the requested locale is not available
 * @returns Localized object or array
 */
export function deepLocalize(
  obj: any,
  locale: string,
  fallback: string = "uk"
): any {
  if (!obj) return obj;

  // If it's a multilang object (has uk/ru keys), localize it
  if (typeof obj === "object" && !Array.isArray(obj) && (obj.uk || obj.ru)) {
    return getLocalizedContent(obj, locale, fallback);
  }

  // If it's an array, process each item
  if (Array.isArray(obj)) {
    return obj.map((item) => deepLocalize(item, locale, fallback));
  }

  // If it's an object, process each property
  if (typeof obj === "object") {
    const localized: any = {};
    for (const [key, value] of Object.entries(obj)) {
      localized[key] = deepLocalize(value, locale, fallback);
    }
    return localized;
  }

  // Return primitive values as-is
  return obj;
}

/**
 * Utility function to get localized content from Sanity multilang fields for arrays
 * @param items - Array of objects with multilang fields
 * @param locale - The current locale (uk or ru)
 * @param fallback - Fallback locale if the requested locale is not available
 * @returns Array with localized content
 */
export function getLocalizedArrayContent(
  items: any[],
  locale: string,
  fallback: string = "uk"
): any[] {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item) => {
    const localizedItem = { ...item };

    // Localize common multilang fields
    const multilangFields = [
      "title", 
      "description", 
      "text", 
      "content", 
      "name", 
      "position", 
      "shortDescription",
      "procedureDescription"
    ];

    multilangFields.forEach((field) => {
      if (item[field] && typeof item[field] === "object") {
        // Handle nested objects like procedureDescription
        if (field === "procedureDescription" && item[field].text) {
          localizedItem[field] = {
            ...item[field],
            text: getLocalizedContent(item[field].text, locale, fallback),
            info: getLocalizedContent(item[field].info, locale, fallback),
          };
        } else {
          localizedItem[field] = getLocalizedContent(
            item[field],
            locale,
            fallback
          );
        }
      }
    });

    // Handle nested arrays (like subcategories in price categories)
    if (item.subcategories && Array.isArray(item.subcategories)) {
      localizedItem.subcategories = item.subcategories.map((subcategory: any) => {
        const localizedSubcategory = { ...subcategory };
        
        if (subcategory.title && typeof subcategory.title === "object") {
          localizedSubcategory.title = getLocalizedContent(
            subcategory.title,
            locale,
            fallback
          );
        }

        // Handle services within subcategories
        if (subcategory.services && Array.isArray(subcategory.services)) {
          localizedSubcategory.services = subcategory.services.map((service: any) => {
            const localizedService = { ...service };
            
            if (service.title && typeof service.title === "object") {
              localizedService.title = getLocalizedContent(
                service.title,
                locale,
                fallback
              );
            }

            return localizedService;
          });
        }

        return localizedSubcategory;
      });
    }

    return localizedItem;
  });
}
