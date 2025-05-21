import { RootProviders } from "@/providers/RootProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  weight: "400",
  subsets: ["greek"],
});

export const metadata: Metadata = {
  title: "AI Resume Builder | Free & Instant",
  description:
    "Create a stunning resume with AI. No sign-up needed. 100% free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
