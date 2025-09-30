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

export async function generateMetadata() {
  return await getDefaultMetadata();
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
