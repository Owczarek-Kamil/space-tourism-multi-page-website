/** @format */

import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: `Solution to the "Space tourism multi-page website" challenge from the Frontend Mentor`,
  generator: "Next.js",
  applicationName: "Space tourism multi-page website",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kamil Owczarek" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
