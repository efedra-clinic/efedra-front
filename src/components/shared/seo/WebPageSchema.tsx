"use client";

import { useEffect } from "react";

export default function WebPageSchema() {
  useEffect(() => {
    const updateSchema = () => {
      // Отримуємо title та description з мета-тегів
      const titleTag = document.querySelector('title');
      const metaDescription = document.querySelector('meta[name="description"]');
      const canonicalLink = document.querySelector('link[rel="canonical"]');

      const title = titleTag?.textContent || "";
      const description = metaDescription?.getAttribute("content") || "";
      const url = canonicalLink?.getAttribute("href") || window.location.href;

      // Створюємо або оновлюємо JSON-LD скрипт
      let scriptElement = document.getElementById("webpage-schema") as HTMLScriptElement;
      
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "webpage-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description: description,
        url: url,
      };

      scriptElement.textContent = JSON.stringify(schema);
    };

    // Оновлюємо схему при монтуванні
    updateSchema();

    // Оновлюємо схему при зміні URL (для клієнтської навігації)
    const observer = new MutationObserver(updateSchema);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["content", "href"],
    });

    // Також слухаємо зміни title
    const titleObserver = new MutationObserver(updateSchema);
    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleObserver.observe(titleElement, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  return null;
}

