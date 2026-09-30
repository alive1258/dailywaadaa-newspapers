import type { Metadata, Viewport } from "next";

import {
  Inter,
  Noto_Sans_Bengali,
  Noto_Serif_Bengali,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

/* =========================================================
   FONTS
   ========================================================= */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const bengaliSans = Noto_Sans_Bengali({
  variable: "--font-bengali-sans",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bengaliSerif = Noto_Serif_Bengali({
  variable: "--font-bengali-serif",
  subsets: ["bengali"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/* =========================================================
   SITE CONFIG
   ========================================================= */

const SITE_URL = "https://www.dailywaadaa.com";
const SITE_NAME = "Dailywaadaa";
const SITE_TAGLINE = "Breaking News, Bangladesh & World";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Dailywaadaa brings you the latest breaking news from Bangladesh and around the world — politics, business, sports, opinion, lifestyle, arts, and long reads. Fact-checked. Independent. 24/7.",

  keywords: [
    "Dailywaadaa",
    "Daily Waadaa",
    "Bangladesh news",
    "breaking news",
    "Bangla news",
    "English news Bangladesh",
    "politics",
    "business",
    "sports",
    "opinion",
    "fact check",
    "world news",
    "lifestyle",
    "long read",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "news",

  /* =======================================================
     OPEN GRAPH
     ======================================================= */

  openGraph: {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,

    description:
      "Latest breaking news from Bangladesh and the world — politics, business, sports, opinion, and more.",

    url: SITE_URL,

    siteName: SITE_NAME,

    images: [
      {
        url: "/images/og-dailywaadaa.jpg",
        width: 1200,
        height: 630,
        alt: "Dailywaadaa — Breaking News, Bangladesh & World",
      },
    ],

    locale: "en_US",

    alternateLocale: ["bn_BD"],

    type: "website",
  },

  /* =======================================================
     TWITTER / X
     ======================================================= */

  twitter: {
    card: "summary_large_image",

    site: "@isdailywaadaa",

    creator: "@isdailywaadaa",

    title: `${SITE_NAME} | ${SITE_TAGLINE}`,

    description:
      "Latest breaking news from Bangladesh and the world — politics, business, sports, opinion, and more.",

    images: ["/images/og-dailywaadaa.jpg"],
  },

  /* =======================================================
     ROBOTS
     ======================================================= */

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,
    },
  },

  /* =======================================================
     CANONICAL + HREFLANG
     ======================================================= */

  alternates: {
    canonical: SITE_URL,

    languages: {
      "en-US": SITE_URL,
      "bn-BD": `${SITE_URL}/bn`,
    },
  },

  /* =======================================================
     ICONS
     ======================================================= */

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  /* =======================================================
     APPLICATION
     ======================================================= */

  applicationName: SITE_NAME,

  referrer: "origin-when-cross-origin",

  /* =======================================================
     FORMAT DETECTION
     ======================================================= */

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/* =========================================================
   VIEWPORT
   ========================================================= */

export const viewport: Viewport = {
  themeColor: "#c81e1e",

  width: "device-width",

  initialScale: 1,

  maximumScale: 5,
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          playfair.variable,
          bengaliSans.variable,
          bengaliSerif.variable,
          "font-sans antialiased bg-white text-brand-900",
        ].join(" ")}
      >
        {children}

        <ToastProvider />
      </body>
    </html>
  );
}
