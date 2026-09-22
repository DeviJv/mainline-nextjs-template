import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Quantum Tech Solution | Solusi IT All-in-One",
    template: "%s | Quantum Tech Solution",
  },
  description:
    "Quantum Tech Solution menawarkan solusi sistem terintegrasi (all-in-one) untuk bisnis Anda, meliputi ERP Manufaktur, Sistem HRM, PACS (Picture Archiving and Communication System), hingga platform E-Commerce.",
  keywords: [
    "Quantum Tech Solution",
    "ERP Manufaktur",
    "Sistem HRM",
    "Aplikasi PACS",
    "Pembuatan E-Commerce",
    "Software ERP Indonesia",
    "Sistem HRD",
    "Solusi IT Terintegrasi",
    "Software Rumah Sakit",
    "Aplikasi Klinik",
    "All-in-one IT Solution",
    "Vendor IT Indonesia",
    "Software Manufaktur",
    "Aplikasi Kepegawaian",
  ],
  authors: [{ name: "Quantum Tech Solution" }],
  creator: "Quantum Tech Solution",
  publisher: "Quantum Tech Solution",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Quantum Tech Solution | Solusi IT All-in-One",
    description:
      "Quantum Tech Solution menawarkan solusi sistem terintegrasi (all-in-one) untuk bisnis Anda, meliputi ERP Manufaktur, Sistem HRM, PACS, dan platform E-Commerce.",
    siteName: "Quantum Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Tech Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Tech Solution | Solusi IT All-in-One",
    description:
      "Quantum Tech Solution menawarkan solusi sistem terintegrasi (all-in-one) untuk bisnis Anda, meliputi ERP Manufaktur, Sistem HRM, PACS, dan platform E-Commerce.",
    images: ["/og-image.jpg"],
    creator: "@quantumtech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
