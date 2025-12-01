import "./globals.css";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/shared/header/Header";
import dynamic from "next/dynamic";
import SplashGate from "@/components/shared/splashScreen/SplashGate";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import WebPageSchema from "@/components/shared/seo/WebPageSchema";
import LocalBusinessSchema from "@/components/shared/seo/LocalBusinessSchema";
import { headers } from "next/headers";

const Footer = dynamic(() => import("@/components/shared/footer/Footer"), {
  ssr: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const evolenta = localFont({
  src: "../../fonts/evolenta-regular.ttf",
  variable: "--font-evolenta",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  // Витягуємо шлях без локалі
  let path = pathname;
  if (path.startsWith(`/${locale}`)) {
    path = path.replace(`/${locale}`, "") || "/";
  } else if (path.startsWith("/ru")) {
    path = path.replace("/ru", "") || "/";
  } else if (path.startsWith("/uk")) {
    path = path.replace("/uk", "") || "/";
  }

  return await getDefaultMetadata(locale, path);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Отримуємо метадані для WebPageSchema
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  // Витягуємо шлях без локалі
  let path = pathname;
  if (path.startsWith(`/${locale}`)) {
    path = path.replace(`/${locale}`, "") || "/";
  } else if (path.startsWith("/ru")) {
    path = path.replace("/ru", "") || "/";
  } else if (path.startsWith("/uk")) {
    path = path.replace("/uk", "") || "/";
  }

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="tatXFYugHOmQUUTbHIzUPHL4Wu8J0THGaI5bQ7HCvjo"
        />
        <LocalBusinessSchema />
        <WebPageSchema locale={locale} path={path} />
      </head>
      <body
        className={`${montserrat.variable} ${evolenta.variable} flex min-h-dvh flex-col antialiased text-[14px] font-normal leading-[120%]`}
      >
        <NextIntlClientProvider>
          <SplashGate>
            <Header />
            <main className="flex-1 pt-[86px] lg:pt-[99px]">{children}</main>
            <Footer />
          </SplashGate>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
