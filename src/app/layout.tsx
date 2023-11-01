/** @format */

import "@/styles/globals.css";
import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import NavigationBar from "@/components/navigation/NavigationBar";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: `Solution to the "Space tourism multi-page website" challenge from the Frontend Mentor`,
  generator: "Next.js",
  applicationName: "Space tourism multi-page website",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kamil Owczarek" }],
};

const fontBellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
});

const fontBarlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fontBarlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fontBellefair.variable} ${fontBarlowCondensed.variable} ${fontBarlow.variable} relative flex min-h-screen min-w-[20rem] flex-col overflow-x-hidden bg-color-dark`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
