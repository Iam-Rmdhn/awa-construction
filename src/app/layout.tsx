import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/ui/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awa Construction",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${nunitoSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
