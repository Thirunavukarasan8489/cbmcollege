import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CollegeSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CBM College of Arts and Science",
    "alternateName": "CBM College Coimbatore",
    "url": "https://www.cbmcollege.com",
    "logo": "https://www.cbmcollege.com/logo.png",
    "foundingDate": "1974-07-01",
    "founder": {
      "@type": "Person",
      "name": "Late C. B. Muthuswamy Chettiar"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "CBM Sakunthala Memorial Trust",
      "foundingDate": "1970-10"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sakethapuri, Kovaipudur",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641042",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.9394,
      "longitude": 76.9373
    },
    "telephone": "+91-422-2607259",
    "email": "mba@cbmcollege.com",
    "sameAs": [
      "https://www.cbmcollege.com"
    ],
    "description": "CBM College of Arts and Science, established in 1974 in Coimbatore, offers quality government-aided and self-financing undergraduate, postgraduate, and MBA programs affiliated to Bharathiar University."
  };

  return <JsonLd data={schemaData} />;
}
