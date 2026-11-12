import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import Navigation from "@/shared/components/navigation";
import { COLORS } from "@/shared/utils/color";
import { ORIGIN_URL } from "@/shared/utils";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source Spirit Shop",
  description: "Open Source Spirit Shop – Discover magical potions brewed from the powers of popular open-source tools",
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
        style={{ 
          backgroundColor: COLORS.backgroundDark, 
          minHeight: "100vh",
          margin: 0,
          padding: 0
        }}
      >
        <MantineProvider defaultColorScheme="dark">
          <Navigation />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}