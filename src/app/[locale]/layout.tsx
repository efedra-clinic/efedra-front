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
  return await getDefaultMetadata(locale, "/");
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

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="tatXFYugHOmQUUTbHIzUPHL4Wu8J0THGaI5bQ7HCvjo"
        />
      </head>
      <body
        className={`${montserrat.variable} ${evolenta.variable} flex min-h-dvh flex-col antialiased text-[14px] font-normal leading-[120%]`}
      >
        <WebPageSchema />
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
