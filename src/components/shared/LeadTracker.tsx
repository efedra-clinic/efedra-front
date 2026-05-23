"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureLanding, pushPath } from "@/utils/leadTracking";

export default function LeadTracker() {
  const pathname = usePathname();

  useEffect(() => {
    captureLanding();
  }, []);

  useEffect(() => {
    if (pathname) pushPath(pathname);
  }, [pathname]);

  return null;
}
