import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-space text-fog antialiased flex flex-col min-h-dvh">
        {children}
      </body>
    </html>
  );
}
