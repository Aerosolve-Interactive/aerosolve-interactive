import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "AeroSolve Interactive — Aerospace Engineering for the Next Generation",
  description:
    "Learn aerospace engineering through interactive lessons, hands-on projects, and real-world examples. From the four forces of flight to rocket propulsion.",
  keywords: ["aerospace engineering", "aviation", "STEM", "learning", "physics", "rockets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-space text-fog antialiased flex flex-col min-h-dvh">
        {children}
      </body>
    </html>
  );
}
