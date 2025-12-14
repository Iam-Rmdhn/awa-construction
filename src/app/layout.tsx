import type { Metadata } from "next";
import { Unbounded, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";
import SplashScreen from "@/components/layout/SplashScreen";

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
    <html lang="en">
      <body
        className={`${unbounded.variable} ${nunitoSans.variable} antialiased`}
      >
        <SplashScreen />
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
