import type { Metadata } from "next";
import "../../globals.css";
import Baner from "@/components/ui/Baner";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: {
    default: "فروشگاه آنلاین - خرید لوازم خانه و دکوراسیون",
    template: "%s | فروشگاه آنلاین",
  },
  description:
    "فروشگاه آنلاین لوازم خانه، دکوراسیون داخلی، مبلمان و لوازم آشپزخانه با بهترین قیمت و کیفیت",
  keywords: ["فروشگاه آنلاین", "لوازم خانه", "دکوراسیون", "مبلمان"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://yoursite.com",
    siteName: "فروشگاه آنلاین",
    title: "فروشگاه آنلاین - خرید لوازم خانه و دکوراسیون",
    description: "فروشگاه آنلاین لوازم خانه و دکوراسیون",
    images: [
      {
        url: "/image/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "لوگوی فروشگاه",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فروشگاه آنلاین",
    description: "فروشگاه آنلاین لوازم خانه و دکوراسیون",
    images: ["/image/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yoursite.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "فروشگاه آنلاین",
    url: "https://yoursite.com",
    logo: "https://yoursite.com/image/logo/logo.png",
    description:
      "فروشگاه آنلاین لوازم خانه، دکوراسیون داخلی، مبلمان و لوازم آشپزخانه",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
    },
    sameAs: [],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "فروشگاه آنلاین",
    url: "https://yoursite.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://yoursite.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          پرش به محتوای اصلی
        </a>
        <header>
          <Baner />
          <SearchBar />
          <Header />
        </header>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
