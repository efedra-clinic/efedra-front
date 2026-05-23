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
import Script from "next/script";

const Footer = dynamic(() => import("@/components/shared/footer/Footer"), {
  ssr: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const evolenta = localFont({
  src: "../../fonts/evolenta-regular.woff2",
  variable: "--font-evolenta",
  display: "swap",
  preload: true,
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
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1536614817878075');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1536614817878075&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
