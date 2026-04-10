import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const ptSerif = localFont({
  src: [
    {
      path: '../public/font/PTSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/PTSerif-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/font/PTSerif-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/font/PTSerif-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-pt-serif',
});
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.texastribune.org"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | The Texas Tribune",
    default: "The Texas Tribune",
  },
  description: "The Texas Tribune is the only member-supported, digital-first, nonpartisan media organization that informs Texans — and engages with them — about public policy, politics, government and statewide issues.",
  keywords: ["Texas news", "Texas politics", "Texas policy", "government", "Texas legislature"],
  authors: [{ name: "The Texas Tribune" }],
  creator: "The Texas Tribune",
  publisher: "The Texas Tribune",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.texastribune.org/",
    siteName: "The Texas Tribune",
    title: "The Texas Tribune",
    description: "The Texas Tribune is the only member-supported, digital-first, nonpartisan media organization that informs Texans — and engages with them — about public policy, politics, government and statewide issues.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TexasTribune",
    creator: "@TexasTribune",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${ptSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-black">
           <TopHeader />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
