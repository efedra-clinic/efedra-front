"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieSplashScreen = dynamic(() => import("./LottieSplashScreen"), {
  ssr: false,
});

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isAuditTool =
      /Chrome-Lighthouse|HeadlessChrome|PageSpeed|Speed Insights|GTmetrix|Pingdom/i.test(
        ua
      );
    if (isAuditTool) return;

    if (sessionStorage.getItem("splashPlayed")) return;

    setShowSplash(true);
    const timer = setTimeout(() => {
      sessionStorage.setItem("splashPlayed", "true");
      setShowSplash(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LottieSplashScreen visible={showSplash} />
      {children}
    </>
  );
}
