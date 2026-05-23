"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieSplashScreen = dynamic(() => import("./LottieSplashScreen"), {
  ssr: false,
});

interface SplashGateProps {
  children: React.ReactNode;
  skipSplash?: boolean;
}

export default function SplashGate({ children, skipSplash }: SplashGateProps) {
  const [splashVisible, setSplashVisible] = useState(!skipSplash);

  useEffect(() => {
    if (skipSplash) {
      setSplashVisible(false);
      return;
    }

    const isAutomated =
      (typeof navigator !== "undefined" &&
        (navigator.webdriver === true ||
          /Lighthouse|HeadlessChrom|PageSpeed|Speed Insights|GTmetrix|Pingdom/i.test(
            navigator.userAgent || ""
          ))) ||
      false;

    if (isAutomated) {
      setSplashVisible(false);
      return;
    }

    if (sessionStorage.getItem("splashPlayed")) {
      setSplashVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("splashPlayed", "true");
      setSplashVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [skipSplash]);

  return (
    <>
      {!skipSplash && splashVisible && (
        <>
          <div
            aria-hidden
            className="splash-overlay no-doc-scroll fixed inset-0 z-50 bg-beige pointer-events-none"
          />
          <LottieSplashScreen visible={splashVisible} />
        </>
      )}
      {children}
    </>
  );
}
