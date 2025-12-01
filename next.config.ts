import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      // UA
      {
        source: "/catalog/dentistry/kompleksne-omolodzhennya-oblichchya",
        destination: "/catalog/aesthetic/kompleksne-omolodzhennya-oblichchya",
        permanent: true,
      },
      {
        source: "/catalog/dentistry/estetichna-kosmetologiya",
        destination: "/catalog/aesthetic/estetichna-kosmetologiya",
        permanent: true,
      },
      {
        source: "/catalog/dentistry/poslugi-dermatologa",
        destination: "/catalog/aesthetic/poslugi-dermatologa",
        permanent: true,
      },
      {
        source: "/catalog/dentistry/botulinoterapiya",
        destination: "/catalog/aesthetic/botulinoterapiya",
        permanent: true,
      },
      {
        source: "/catalog/dentistry/ginekologiya",
        destination: "/catalog/aesthetic/ginekologiya",
        permanent: true,
      },
      // RU
      {
        source: "/ru/catalog/dentistry/estetichna-kosmetologiya",
        destination: "/ru/catalog/aesthetic/estetichna-kosmetologiya",
        permanent: true,
      },
      {
        source: "/ru/catalog/dentistry/poslugi-dermatologa",
        destination: "/ru/catalog/aesthetic/poslugi-dermatologa",
        permanent: true,
      },
      {
        source: "/ru/catalog/dentistry/botulinoterapiya",
        destination: "/ru/catalog/aesthetic/botulinoterapiya",
        permanent: true,
      },
      {
        source: "/ru/catalog/dentistry/kompleksne-omolodzhennya-oblichchya",
        destination:
          "/ru/catalog/aesthetic/kompleksne-omolodzhennya-oblichchya",
        permanent: true,
      },
      {
        source: "/ru/catalog/dentistry/ginekologiya",
        destination: "/ru/catalog/aesthetic/ginekologiya",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
