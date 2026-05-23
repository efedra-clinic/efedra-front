const LANDING_KEY = "leadLanding";
const PATH_HISTORY_KEY = "leadPathHistory";
const MAX_PATH_HISTORY = 15;

interface LandingInfo {
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  landingUrl: string;
  landedAt: string;
}

function getEmptyLanding(): LandingInfo {
  return {
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
    landingUrl: "",
    landedAt: "",
  };
}

export function captureLanding(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(LANDING_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const info: LandingInfo = {
      referrer: document.referrer || "",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
      landingUrl: window.location.pathname + window.location.search,
      landedAt: new Date().toISOString(),
    };
    sessionStorage.setItem(LANDING_KEY, JSON.stringify(info));
  } catch {
    // ignore
  }
}

export function pushPath(path: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = sessionStorage.getItem(PATH_HISTORY_KEY);
    const list: string[] = raw ? JSON.parse(raw) : [];
    if (list[list.length - 1] === path) return;
    list.push(path);
    if (list.length > MAX_PATH_HISTORY) list.splice(0, list.length - MAX_PATH_HISTORY);
    sessionStorage.setItem(PATH_HISTORY_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export function getLanding(): LandingInfo {
  if (typeof window === "undefined") return getEmptyLanding();
  try {
    const raw = sessionStorage.getItem(LANDING_KEY);
    if (!raw) return getEmptyLanding();
    return { ...getEmptyLanding(), ...JSON.parse(raw) };
  } catch {
    return getEmptyLanding();
  }
}

export function getPathHistory(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(PATH_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function describeSource(info: LandingInfo): string {
  const ref = info.referrer.toLowerCase();
  const src = info.utm_source.toLowerCase();
  const med = info.utm_medium.toLowerCase();

  if (info.gclid || src === "google" && (med === "cpc" || med === "paid"))
    return "Google Ads";
  if (info.fbclid || src === "facebook" || src === "fb")
    return med === "cpc" || med === "paid" ? "Facebook Ads" : "Facebook";
  if (src === "instagram" || src === "ig" || ref.includes("instagram.com"))
    return med === "cpc" || med === "paid" ? "Instagram Ads" : "Instagram";
  if (src === "tiktok" || ref.includes("tiktok.com")) return "TikTok";
  if (src === "telegram" || ref.includes("t.me") || ref.includes("telegram"))
    return "Telegram";
  if (src === "youtube" || ref.includes("youtube.com") || ref.includes("youtu.be"))
    return "YouTube";

  if (src && med) return `${info.utm_source} / ${info.utm_medium}`;
  if (src) return info.utm_source;

  if (ref) {
    if (ref.includes("google.")) return "Google (SEO)";
    if (ref.includes("bing.com")) return "Bing (SEO)";
    if (ref.includes("yandex.")) return "Yandex (SEO)";
    if (ref.includes("duckduckgo.com")) return "DuckDuckGo (SEO)";
    try {
      return `Referral: ${new URL(info.referrer).hostname}`;
    } catch {
      return "Referral";
    }
  }

  return "Прямий перехід";
}
