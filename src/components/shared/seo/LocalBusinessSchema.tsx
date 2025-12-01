import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.efedracenter.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Efedra Center",
  url: "https://www.efedracenter.com/",
  logo: "https://www.efedracenter.com/images/logo.png",
  image: "https://www.efedracenter.com/opengraph-image.jpg",
  telephone: "+380932468888",
  email: "efedraplus@gmail.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Академіка Філатова, 60А",
    addressLocality: "Одеса",
    postalCode: "65058",
    addressCountry: "UA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
      description: "Стоматологія",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
      description: "Естетична медицина",
    },
  ],
  sameAs: [
    "https://www.instagram.com/efedra.dental",
    "https://www.instagram.com/efedra.od",
    "https://maps.app.goo.gl/uPHrkRsj5VshGmMJA",
  ],
};

export default function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
