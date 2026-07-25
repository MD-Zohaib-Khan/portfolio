import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zohaib Khan | Full Stack Developer",
  description:
    "Portfolio of Zohaib Khan, Full Stack Developer. Building innovative web applications with modern technologies.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/ZK.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/ZK.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/ZK.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
